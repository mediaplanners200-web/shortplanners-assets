/* 숏플래너스 · 코드 위젯 로더 (spx/loader.js)
   아임웹 코드 위젯 사용법 (위젯마다 이 두 줄만):
     <div class="spx-part" data-part="home/01_hero"></div>
     <script src="https://cdn.jsdelivr.net/gh/mediaplanners200-web/shortplanners-assets@{VER}/spx/loader.js" defer></script>
   - 이 파일 주소(@버전 포함)를 기준으로 spx/common.css · spx/common.js · spx/parts/ · media/ 를 불러옵니다.
     → @커밋해시 로 고정하면 이미지 · 코드 모두 같은 버전으로 고정됩니다.
   - 여러 위젯에서 여러 번 불려도 한 번만 동작합니다. 실패하면 조용히 넘어가고 콘솔에 경고만 남깁니다. */
(function(){
  if(window.__spxLoader) return;
  window.__spxLoader = true;
  function warn(m, e){ try{ console.warn('[spx-loader] ' + m, e || ''); }catch(_){} }

  /* 1) 기준 주소: 이 스크립트 자신의 src 에서 'spx/loader.js' 앞부분 */
  var me = document.currentScript;
  if(!me){ var ss = document.getElementsByTagName('script'); for(var i = ss.length - 1; i >= 0; i--){ if(/\/spx\/loader\.js(\?|#|$)/.test(ss[i].src)){ me = ss[i]; break; } } }
  if(!me || !me.src){ warn('loader 주소를 찾지 못함'); return; }
  var ROOT = me.src.replace(/spx\/loader\.js.*$/, '');   /* 예: https://cdn.jsdelivr.net/gh/<owner>/<repo>@<ver>/ */
  var SPX = ROOT + 'spx/';
  /* 이미지 · 영상도 같은 버전에서 (페이지에서 미리 SPX_CONFIG.assetBase 를 정했다면 그 값을 존중) */
  window.SPX_CONFIG = window.SPX_CONFIG || {};
  if(!window.SPX_CONFIG.assetBase) window.SPX_CONFIG.assetBase = ROOT;

  /* 2) 공용 CSS + 글꼴: <head>에 1회 */
  function addLink(href, id){
    if(id && document.getElementById(id)) return;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; if(id) l.id = id;
    l.onerror = function(){ warn('CSS 불러오기 실패: ' + href); };
    document.head.appendChild(l);
  }
  addLink('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;700;800;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap', 'spx-fonts');
  addLink(SPX + 'common.css', 'spx-common-css');
  /* CSS 를 못 받아도 내용이 숨겨진 채로 남지 않게 (data-spx-fouc 안전장치) */
  setTimeout(function(){ var h = document.querySelectorAll('[data-spx-fouc]'); for(var i = 0; i < h.length; i++) h[i].style.opacity = '1'; }, 4000);

  /* 스크립트 1개 실행 (외부 src 는 다 받은 뒤 다음으로) */
  function runScript(old){
    return new Promise(function(resolve){
      var s = document.createElement('script');
      for(var i = 0; i < old.attributes.length; i++){ var a = old.attributes[i]; if(a.name === 'type' && a.value === 'text/spx') continue; s.setAttribute(a.name, a.value); }
      if(old.src){
        s.onload = function(){ resolve(); };
        s.onerror = function(){ warn('스크립트 불러오기 실패: ' + old.src); resolve(); };
        s.async = false;
        old.parentNode.replaceChild(s, old);
      } else {
        s.text = old.text || old.textContent || '';
        try{ old.parentNode.replaceChild(s, old); }catch(e){ warn('스크립트 실행 오류', e); }
        resolve();
      }
    });
  }
  function loadScript(src){
    return new Promise(function(resolve){
      var s = document.createElement('script'); s.src = src; s.async = false;
      s.onload = function(){ resolve(true); };
      s.onerror = function(){ warn('스크립트 불러오기 실패: ' + src); resolve(false); };
      document.head.appendChild(s);
    });
  }
  /* 파트 1개: parts/<data-part>.html 을 받아 넣고 안의 <script> 를 순서대로 실행 */
  /* 파트 HTML 은 한꺼번에 미리 받아 두고(병렬), 넣고 실행하는 것만 문서 순서대로 */
  var cache = {};
  function partName(el){ return (el.getAttribute('data-part') || '').replace(/^\/+|\.html$/g, ''); }
  function get(name){
    if(!cache[name]) cache[name] = fetch(SPX + 'parts/' + name.replace(/\//g, '__') + '.html').then(function(r){
      if(!r.ok) throw new Error(r.status);
      return r.text();
    });
    return cache[name];
  }
  function mount(el){
    if(el.__spxDone) return Promise.resolve(); el.__spxDone = true;
    /* 위젯에 HTML 을 미리 넣어 둔 파트(data-inline): 받지 않고, 잠가 둔 스크립트(type="text/spx")만 순서대로 실행 */
    if(el.hasAttribute('data-inline')){
      var pre = [].slice.call(el.querySelectorAll('script[type="text/spx"]'));
      return pre.reduce(function(p, sc){ return p.then(function(){ return runScript(sc); }); }, Promise.resolve());
    }
    var name = partName(el);
    if(!/^[\w-]+\/[\w-]+$/.test(name)){ warn('data-part 형식 오류: ' + name); return Promise.resolve(); }
    return get(name).then(function(html){
      el.innerHTML = html.replace(/^\s*<!--[\s\S]*?-->\s*/, '');
      var list = [].slice.call(el.querySelectorAll('script'));
      return list.reduce(function(p, sc){ return p.then(function(){ return runScript(sc); }); }, Promise.resolve());
    }).catch(function(e){ warn('파트 불러오기 실패: ' + name, e); });
  }
  function mountAll(){
    var parts = [].slice.call(document.querySelectorAll('.spx-part[data-part]'));
    parts.forEach(function(el){ var n = partName(el); if(!el.__spxDone && !el.hasAttribute('data-inline') && /^[\w-]+\/[\w-]+$/.test(n)) get(n).catch(function(){}); });
    return parts.reduce(function(p, el){ return p.then(function(){ return mount(el); }); }, Promise.resolve());
  }

  /* 3) 공용 JS(영상 데이터 + 공용 기능) 1회 → 파트들을 문서 순서대로 */
  function start(){
    var ready = window.SPX ? Promise.resolve() : loadScript(SPX + 'common.js');
    ready.then(function(){
      /* 위젯에 미리 넣은 파트의 스크립트는 window.__spxQ 에 줄 서 있음 → 공용 JS 가 준비된 지금 순서대로 실행 */
      var q = window.__spxQ || [];
      window.__spxQ = { push: function(f){ try{ f(); }catch(e){ warn('파트 스크립트 오류', e); } } };
      for(var i = 0; i < q.length; i++){ try{ q[i](); }catch(e){ warn('파트 스크립트 오류', e); } }
    }).then(mountAll).then(function(){
      /* 늦게 그려지는 위젯 대비: 이후에 생긴 .spx-part 도 처리 */
      if('MutationObserver' in window){
        var t = null;
        new MutationObserver(function(){ clearTimeout(t); t = setTimeout(mountAll, 120); }).observe(document.body, {childList:true, subtree:true});
      }
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
