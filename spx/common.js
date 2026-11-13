/* 숏플래너스 · 영상 데이터 (common-data.js) — common.js 보다 먼저 넣으세요.
   SPX_VIDEOS[n-1] = {n, v:영상 주소(드롭박스), p:썸네일 예비 주소}. 쓰지 않는 번호는 null.
   SPX_HERO = 첫 화면 영상 벽 · 가격 페이지 마퀴 (확정 22편)
   SPX_PORTFOLIO = 포트폴리오 확정 목록 (이 안에서만 무작위로 섞어 보여 줌) */
window.SPX_VIDEOS = [{"n":1,"v":"https://www.dropbox.com/scl/fi/3oe1su0njovwscmhf0uyh/01-HbilDE2fYmI.mp4?rlkey=phd6ivg4xsjdmpmwwt24zo08a&raw=1","p":"https://www.dropbox.com/scl/fi/zmefltsg2tja3nufhkb9b/01-HbilDE2fYmI.jpg?rlkey=klc4brpov3rn9cvmswbhrlopi&raw=1"},null,{"n":3,"v":"https://www.dropbox.com/scl/fi/19zhvpivm266v9m31k9uz/03-B2W0krXaIRM.mp4?rlkey=l1fuyo055r93tylsaa7jk8p5y&raw=1","p":"https://www.dropbox.com/scl/fi/4yocph4acyhe4mxd1fve2/03-B2W0krXaIRM.jpg?rlkey=br07fw36b1u9a2wmoluesm43x&raw=1"},{"n":4,"v":"https://www.dropbox.com/scl/fi/8ggx68uu1bqq5hhggztdz/04-6G92LBqa3oo.mp4?rlkey=bo5bi57kombgq8l1rol4byms3&raw=1","p":"https://www.dropbox.com/scl/fi/vx76gckufibfv1u25bvgm/04-6G92LBqa3oo.jpg?rlkey=32z8ix8fndk1jarv7w7yshpt7&raw=1"},null,{"n":6,"v":"https://www.dropbox.com/scl/fi/ib5q052f6w6g3lfeksmg9/06-DEwT0v_vye1.mp4?rlkey=g0h85zu2vihaudv1ptx6a0jp4&raw=1","p":"https://www.dropbox.com/scl/fi/zxbkudjdftqegf4kv6ujq/06-DEwT0v_vye1.jpg?rlkey=7la53dk92e9f9v1ue8m2yxlwi&raw=1"},null,{"n":8,"v":"https://www.dropbox.com/scl/fi/dufc0ft4mxit48d5k1xhx/08-DaAbDnkM3ju.mp4?rlkey=ok3e0ld43j2oqirsuym1ny5yj&raw=1","p":"https://www.dropbox.com/scl/fi/mwqdt1br961qp40wtwcvl/08-DaAbDnkM3ju.jpg?rlkey=7eui6dao8l6hff96b9jom0ued&raw=1"},{"n":9,"v":"https://www.dropbox.com/scl/fi/c8tmk8hz7hmvmy6iv414i/2.mp4?rlkey=amqjzxuw7muqvzq7cn6piav28&raw=1","p":"https://www.dropbox.com/scl/fi/2qjeezmivm7r8r1vs8d4e/2.jpg?rlkey=8su9keqcdk2pkfbhwm095vjmc&raw=1"},{"n":10,"v":"https://www.dropbox.com/scl/fi/t6m5fmlz12r4k3p9t669m/2-2.mp4?rlkey=nh4fnzj3uzi8w8ybbj0nevq8u&raw=1","p":"https://www.dropbox.com/scl/fi/silckla4s420x74vic1kd/2-2.jpg?rlkey=lu5v7tyn8y0g7v8w0t5wgy392&raw=1"},{"n":11,"v":"https://www.dropbox.com/scl/fi/6631dc8c558nu5lldozdp/3-3.mp4?rlkey=dcxizpfobh2j1ymtt5fri76sk&raw=1","p":"https://www.dropbox.com/scl/fi/ckijl1j7m2sicuenoeon1/3-3.jpg?rlkey=2u22ljs9d7jco9c5gebza9l9c&raw=1"},{"n":12,"v":"https://www.dropbox.com/scl/fi/zhvun2lkd4up1pxuqtyzi/4-3.mp4?rlkey=bm7bd9kgr8qrbvem0xu06wm81&raw=1","p":"https://www.dropbox.com/scl/fi/zhnrmtpamcjayv5og98i6/4-3.jpg?rlkey=1gzld3ld2ny8lnbatd359si65&raw=1"},null,{"n":14,"v":"https://www.dropbox.com/scl/fi/4f327gk1q33di3usific4/file2.mp4?rlkey=rxg2awr1r3b4w6txivnw8ui7l&raw=1","p":"https://www.dropbox.com/scl/fi/s9gd6dsbrbscpiywcy6ni/file2.jpg?rlkey=mcnfhrrkhh076p7cil01jk5b2&raw=1"},{"n":15,"v":"https://www.dropbox.com/scl/fi/pqdn3hjknmf9sx96rvkvl/.mp4?rlkey=u0kayb227vdggbhccy8tofwad&raw=1","p":"https://www.dropbox.com/scl/fi/q24k6ac3h4zww8bh4x8ov/.jpg?rlkey=i186z4ib0eiw48na85bvvx4mq&raw=1"},{"n":16,"v":"https://www.dropbox.com/scl/fi/xrv9xlb4wmha9pgc0llsl/0921-1.mp4?rlkey=lzxwxwb4n86iap41ku59odvcl&raw=1","p":"https://www.dropbox.com/scl/fi/81nj2nhl9cy1tgg6l441h/0921-1.jpg?rlkey=rhrsl5huruonfjk41bn0vl2m0&raw=1"},{"n":17,"v":"https://www.dropbox.com/scl/fi/0w82kzlqtfdrozzezx8zn/2.mp4?rlkey=8u9snweu3xh03zkygic4g4eq6&raw=1","p":"https://www.dropbox.com/scl/fi/iyuvz99pv68iv9vbjnpr6/2.jpg?rlkey=tjvioxgixlb2b4hk0q3mzx32l&raw=1"},null,null,null,{"n":21,"v":"https://www.dropbox.com/scl/fi/y2fxdc35mwzia55yblgjp/.mp4?rlkey=nqr4gby90ur37745443w6fioz&raw=1","p":"https://www.dropbox.com/scl/fi/ds2f7ddhv5cd2y2sir23r/.jpg?rlkey=0qgcr1z1n52nfnhlg5vgjlw2u&raw=1"},null,null,null,null,null,null,null,null,null,null,{"n":32,"v":"https://www.dropbox.com/scl/fi/38czoxije2rwkphf8u32m/1.mp4?rlkey=vs04xerawkoaxtgjk6h51sbc2&raw=1","p":"https://www.dropbox.com/scl/fi/7g6xgd083rm6mrlwcps13/1.jpg?rlkey=jz3dm66ofwsuz2akct8hgbbs7&raw=1"},{"n":33,"v":"https://www.dropbox.com/scl/fi/7kjmwq6pzcrpuv4lkbhtg/2.mp4?rlkey=euvfvttqj6kx5hjlpc5uo5bkp&raw=1","p":"https://www.dropbox.com/scl/fi/448a4b2fl2e7x2xnwwpbp/2.jpg?rlkey=xmdw8dko2or36zk4z6h0y5zl4&raw=1"},{"n":34,"v":"https://www.dropbox.com/scl/fi/gp4glg693dioljmzon5oa/3.mp4?rlkey=vg76rxnfg765yu1oy9dn4b5aw&raw=1","p":"https://www.dropbox.com/scl/fi/gnikgti8e7tt7x4dk4tan/3.jpg?rlkey=0xsrs8adwn0b821l91wfj7ny8&raw=1"},{"n":35,"v":"https://www.dropbox.com/scl/fi/vaumn10qjqe5ab67fwldv/4.mp4?rlkey=gwnn9wq3dermtmjj53l0jsr2b&raw=1","p":"https://www.dropbox.com/scl/fi/ormgue9jo0by2dba0edop/4.jpg?rlkey=h394tzamc41cchsz2773pcdta&raw=1"},{"n":36,"v":"https://www.dropbox.com/scl/fi/6f3w9s6byq98qzfai2j4u/5.mp4?rlkey=ynyv8v0zhrtwm3xz4bqaoim42&raw=1","p":"https://www.dropbox.com/scl/fi/9dck0cnu7jyevgfbgc36m/5.jpg?rlkey=o6hdflez5kbmi9tsdcjphhowq&raw=1"},null,null,null,null,null,null,null,{"n":44,"v":"https://www.dropbox.com/scl/fi/zsysxdkayxg8h7k20s5p6/3.mp4?rlkey=e98496307jg1t7aqp6rtnadj4&raw=1","p":"https://www.dropbox.com/scl/fi/xegpnechsv63264ota5wi/3.jpg?rlkey=3xqgwiygtrvpb3imphciylolw&raw=1"},null,{"n":46,"v":"https://www.dropbox.com/scl/fi/paypya23t5vry8jjoo9wk/2.mp4?rlkey=xc2hbvy46k9q67fczy9xzmimz&raw=1","p":"https://www.dropbox.com/scl/fi/843m484fm0urk62om1qzv/2.jpg?rlkey=ij9r04o4fixe3b76wthpdi5gu&raw=1"},{"n":47,"v":"https://www.dropbox.com/scl/fi/8u7411yixsjtjry9kgxay/4.mp4?rlkey=lapto0pv622pb0uwlcgqhofzu&raw=1","p":"https://www.dropbox.com/scl/fi/bktamu0v4y78v0hnq8r88/4.jpg?rlkey=qud3gpz4ss57b1dksutq4iqs9&raw=1"},{"n":48,"v":"https://www.dropbox.com/scl/fi/rpwad9clr8c3kp9g20p91/.mp4?rlkey=45bs749nud6uuguwpwgchhl3s&raw=1","p":"https://www.dropbox.com/scl/fi/mnhxmwr9jbeonctc95vep/.jpg?rlkey=3hvcc22ii3uxnda7wgg7rui63&raw=1"},{"n":49,"v":"https://www.dropbox.com/scl/fi/firkkrqsj62fjb2ys8puq/2.mp4?rlkey=d32wxl8o9uph312pbq0oosom6&raw=1","p":"https://www.dropbox.com/scl/fi/f0ge5765mtl2ioj7b2hm2/2.jpg?rlkey=4ri9bgngzny5iv3bsophqmf2n&raw=1"},{"n":50,"v":"https://www.dropbox.com/scl/fi/k7l62gzit8r87gtaw8b34/DaSUUnDNTjn.mp4?rlkey=d8w1z1zacosux6ymkuetlqkuz&raw=1","p":"https://www.dropbox.com/scl/fi/3v7m6jd6hmfcl3kcm91fl/DaSUUnDNTjn.jpg?rlkey=ruktygf5y8l4bp9sxtihyly6e&raw=1"},{"n":51,"v":"https://www.dropbox.com/scl/fi/gfnokvhhl3lw79c3r5qhb/DaurcukBtPh.mp4?rlkey=baswm9nk1gsyxcsj4algghcyh&raw=1","p":"https://www.dropbox.com/scl/fi/ejvmojd0xpdo3773fiymq/DaurcukBtPh.jpg?rlkey=9kjrjxes8tcquh4bd63al9rkn&raw=1"},{"n":52,"v":"https://www.dropbox.com/scl/fi/fcc389510rbdcxmjf24pe/Db-aeWoJ7qY.mp4?rlkey=wy342pd2u2e3tvnvq3ymf92sw&raw=1","p":"https://www.dropbox.com/scl/fi/vckq24983wjr2jrmq7br3/Db-aeWoJ7qY.jpg?rlkey=qz0hj6m4sbjj3ishxddthbgsg&raw=1"},{"n":53,"v":"https://www.dropbox.com/scl/fi/6nd1r9tpsuwr3zl4kpau3/Db2zD8MN76j.mp4?rlkey=1pioc1b4fdvw6gquyl6s0now0&raw=1","p":"https://www.dropbox.com/scl/fi/46i98dgy3zml6xwdf0rwu/Db2zD8MN76j.jpg?rlkey=yk18iz1mboj3y2msodludy8gy&raw=1"},{"n":54,"v":"https://www.dropbox.com/scl/fi/v78om2yh672j4pj5hn9h6/DbDR7WSvvwD.mp4?rlkey=81rbl23601g3zmf7wqzgir92g&raw=1","p":"https://www.dropbox.com/scl/fi/fp8tdhdgar4wm41949slj/DbDR7WSvvwD.jpg?rlkey=lcxvfzvpbo2goox3vd081005y&raw=1"},{"n":55,"v":"https://www.dropbox.com/scl/fi/um7vi98ktfn5um3crg7f3/DcI-FeCyFcK.mp4?rlkey=324itcmndv0b322qwbl6m2nsx&raw=1","p":"https://www.dropbox.com/scl/fi/3n5cv8e2ksd4rde9530i6/DcI-FeCyFcK.jpg?rlkey=bbqjx9gf34ww35vcne3qvze0h&raw=1"},{"n":56,"v":"https://www.dropbox.com/scl/fi/tm4vjqiwnwhez4ncyvdna/DU73T1Akq_P.mp4?rlkey=iwd6buft03p16pdut1q8mys6j&raw=1","p":"https://www.dropbox.com/scl/fi/tmxpyulzbn37otszkxqj1/DU73T1Akq_P.jpg?rlkey=f7lyani1qci4l7un1mckw2mq8&raw=1"},{"n":57,"v":"https://www.dropbox.com/scl/fi/p9bx3vcco7wmu37usv5bg/DUiJTGTkm3k.mp4?rlkey=mkehf3g32n93x8eqxmuc2vgur&raw=1","p":"https://www.dropbox.com/scl/fi/nmieoawdma0dep2ems0ga/DUiJTGTkm3k.jpg?rlkey=t4sduyysfsymxg6edia73bzvb&raw=1"},{"n":58,"v":"https://www.dropbox.com/scl/fi/jaobk7ftqosr2dub43j8a/DUp8At3ktm5.mp4?rlkey=eyhnk29e3k690z39cuj6u46qt&raw=1","p":"https://www.dropbox.com/scl/fi/r5sk57e8ndk3tzpwnunws/DUp8At3ktm5.jpg?rlkey=l8rjwto06a11gpt2mc1kiia54&raw=1"},{"n":59,"v":"https://www.dropbox.com/scl/fi/xnsfnp3flcvrf736lysbf/DUQOanFElZV.mp4?rlkey=wmartu6g3h7uzzeetd7h3h9dj&raw=1","p":"https://www.dropbox.com/scl/fi/aapv4rkexwhbaoz9go1hf/DUQOanFElZV.jpg?rlkey=icke3pq1r77pwlkrbvk9dswdv&raw=1"},null,null,null,{"n":63,"v":"https://www.dropbox.com/scl/fi/zlh08lvvol8bc2gk8o73x/DW6HVTfErGx.mp4?rlkey=kf29cz0hysxyektgh5pw3nlfg&raw=1","p":"https://www.dropbox.com/scl/fi/ls7mgxgqersslcoudzplm/DW6HVTfErGx.jpg?rlkey=mbabxv02tocer2w0guv6uwolf&raw=1"},null,{"n":65,"v":"https://www.dropbox.com/scl/fi/w1axveqdahl7gn9htnzys/DWi9l8EEtYE.mp4?rlkey=1izaq7x5hph9iex7aaugljhv1&raw=1","p":"https://www.dropbox.com/scl/fi/zb44chtc7jh2kowszgalx/DWi9l8EEtYE.jpg?rlkey=a54b4f1fl7m5dau0kesmnuojy&raw=1"},{"n":66,"v":"https://www.dropbox.com/scl/fi/sir5ne3im28ofxnzyeamu/DXMKq5NkoIQ.mp4?rlkey=3pazs9nljfuvxaavjlstzmtnu&raw=1","p":"https://www.dropbox.com/scl/fi/ktg4t6tlmud7ef3rjchyi/DXMKq5NkoIQ.jpg?rlkey=81hnkj64o5a418bf4lgf8nuxv&raw=1"},{"n":67,"v":"https://www.dropbox.com/scl/fi/09hmtewm0fcxnbhitx88j/DZ4tj1uu5g4.mp4?rlkey=l7k8urtlqd0iohw66jt9cypbs&raw=1","p":"https://www.dropbox.com/scl/fi/lqhbebn37k4uemdz75dnt/DZ4tj1uu5g4.jpg?rlkey=rrllm4nvqp8a8lkvgn4y0zala&raw=1"},null,{"n":69,"v":"https://www.dropbox.com/scl/fi/wxh0wd2rhoqzqpukl3lqe/Db-mZZsT_sV.mp4?rlkey=01bd7qumobr1ictz4ntjmyqhe&raw=1","p":"https://www.dropbox.com/scl/fi/4wtrv4xi3d6l65kch020s/Db-mZZsT_sV.jpg?rlkey=iflx2el76rrb9xzagz2ad5p8k&raw=1"},{"n":70,"v":"https://www.dropbox.com/scl/fi/6bkey257kc8cnn0bz2c9i/Db5Z10MzpjN.mp4?rlkey=vw2sbe8cvy6r90r2n015ldudl&raw=1","p":"https://www.dropbox.com/scl/fi/pcjantsixibypda3p6nfu/Db5Z10MzpjN.jpg?rlkey=k6kodoe6695rza1vj9nab1lzm&raw=1"},{"n":71,"v":"https://www.dropbox.com/scl/fi/zdv9mah0sh7sj9s2dewzg/Dba0XtaxV3b.mp4?rlkey=cplt0mrmpk7cj9gdghmznjzmz&raw=1","p":"https://www.dropbox.com/scl/fi/cqnw1ptik4e931rcotwzc/Dba0XtaxV3b.jpg?rlkey=70b93dtph6up3avxtjlh4gqmf&raw=1"},{"n":72,"v":"https://www.dropbox.com/scl/fi/hyubwsadxxnsucm95t6vf/DbIe3eHTEgj.mp4?rlkey=9dgll3ll5ngeg4jhx42cmsetn&raw=1","p":"https://www.dropbox.com/scl/fi/4n3uvne0h233wr8qhgahq/DbIe3eHTEgj.jpg?rlkey=wkngg82arl9osjk739j5esvws&raw=1"},{"n":73,"v":"https://www.dropbox.com/scl/fi/5uxyemd5lwl8pqdoo9s8m/Dc3S7DOzWi9.mp4?rlkey=3no5pk36ku21jc1hdxenmwbua&raw=1","p":"https://www.dropbox.com/scl/fi/zpubstaakucwri0qjfh3x/Dc3S7DOzWi9.jpg?rlkey=8zo369u2v5lrcc6btl12e35mw&raw=1"},{"n":74,"v":"https://www.dropbox.com/scl/fi/jdnphqzousw426iaggc2w/DeG80a_TZXV.mp4?rlkey=pbwwbhqylw5ui6gd9atlcztag&raw=1","p":"https://www.dropbox.com/scl/fi/shzxnc1zlvikhcdwpk640/DeG80a_TZXV.jpg?rlkey=1sr9w7rj22xozwgzjft3x3a23&raw=1"},{"n":75,"v":"https://www.dropbox.com/scl/fi/a5s6ranbvo7d8b2gdbcd8/DerAK2nM6nZ.mp4?rlkey=ateg5tbbnq00726sbve9n8fa7&raw=1","p":"https://www.dropbox.com/scl/fi/j8i984ippxzd7robwi3hi/DerAK2nM6nZ.jpg?rlkey=wbnexba51d30q5r5nit6h3ypm&raw=1"},{"n":76,"v":"https://www.dropbox.com/scl/fi/jfepfjs5slr89gbrwwpuk/DeWmGf7T950.mp4?rlkey=pdwmslz2s0hb1h0tkpnoacrsv&raw=1","p":"https://www.dropbox.com/scl/fi/6cqag8lqejg1ldr9xf8sa/DeWmGf7T950.jpg?rlkey=c7rjlb6jgo9c13f375wns1bmc&raw=1"},{"n":77,"v":"https://www.dropbox.com/scl/fi/i0h8tqamowyvsnpfx0qm3/DeY66yMT6Jk.mp4?rlkey=fg2smp9jq1bat4glpob4umoqn&raw=1","p":"https://www.dropbox.com/scl/fi/cnpfw1nobbggt7q2xxrwc/DeY66yMT6Jk.jpg?rlkey=6lnngof74uvoow7ejukafymyp&raw=1"},{"n":78,"v":"https://www.dropbox.com/scl/fi/lqnjsrqlimcwct42ay6tz/DfBkJIIMskR.mp4?rlkey=toku9ggzhui0snw84h4ssjb9n&raw=1","p":"https://www.dropbox.com/scl/fi/uyqun8ufewnb5v627yc2k/DfBkJIIMskR.jpg?rlkey=yaxurxtp01g23cipl4qq609fq&raw=1"},{"n":79,"v":"https://www.dropbox.com/scl/fi/oscjm2cyl51cq8gjipcdz/DR4Z9DYE82P.mp4?rlkey=2ngi2o3spti1cam7k4fnu1lm9&raw=1","p":"https://www.dropbox.com/scl/fi/yl61oa46uq0l71z4syion/DR4Z9DYE82P.jpg?rlkey=uqba8psvtvaij2aqrkvc8v05l&raw=1"},{"n":80,"v":"https://www.dropbox.com/scl/fi/evrt7h2y2s6xiyj3j20sc/DR6Cfr9Ewga.mp4?rlkey=skhun3mqqq347xocjp1agw5gx&raw=1","p":"https://www.dropbox.com/scl/fi/dfjcgae78qmk6po6gwsuz/DR6Cfr9Ewga.jpg?rlkey=3p1wxn1oonme46suip85gq4x2&raw=1"},{"n":81,"v":"https://www.dropbox.com/scl/fi/dtuuj5eid185hkekzxbmr/DRCBP0ikwKz.mp4?rlkey=ki8zd0oizrt5ljjycogvmlzih&raw=1","p":"https://www.dropbox.com/scl/fi/8l2yr92uf0wh1z70frrme/DRCBP0ikwKz.jpg?rlkey=80pyv778vfaj7v1f90lwhgat9&raw=1"},{"n":82,"v":"https://www.dropbox.com/scl/fi/ql59muh2f80gmow9nitaa/DRCXue6k3M7.mp4?rlkey=cal0ixk4p6l20eslj36qy1qe3&raw=1","p":"https://www.dropbox.com/scl/fi/gmgsl6zuwm6ae88whi9zy/DRCXue6k3M7.jpg?rlkey=51fw7sa6km4yon3vllsxcyiwx&raw=1"},{"n":83,"v":"https://www.dropbox.com/scl/fi/2emjv0o72jxdcdy2jhr05/DRFA8oWE_nO.mp4?rlkey=yknyq21gbb2srt8fi0v50shcy&raw=1","p":"https://www.dropbox.com/scl/fi/ifu4cbkeqatpjswolag4n/DRFA8oWE_nO.jpg?rlkey=laeet2glxsofqbmimdbkci4i0&raw=1"},{"n":84,"v":"https://www.dropbox.com/scl/fi/f2id7mkugmu9npqzl17ve/DRlgi0ZE5xy.mp4?rlkey=6t41knnzt3jvcfimqhgwj0be1&raw=1","p":"https://www.dropbox.com/scl/fi/akmpabxvt8to97uhvl0vv/DRlgi0ZE5xy.jpg?rlkey=7al80pcogjf0as13o2pa43sly&raw=1"},{"n":85,"v":"https://www.dropbox.com/scl/fi/kb6mhx7j3x9jkqoclty3e/DRo0mFrEzde.mp4?rlkey=ksh1cjerynbe0j1qh49rvbn1w&raw=1","p":"https://www.dropbox.com/scl/fi/onyl6k18almqisq99iti3/DRo0mFrEzde.jpg?rlkey=ysy2mf141dfjds9mk240xsaub&raw=1"},{"n":86,"v":"https://www.dropbox.com/scl/fi/aeavpy7mke6b4fcpksgys/DRoKaJkE2vP.mp4?rlkey=2uvpvjf5oq9uwbzaosew6ewnm&raw=1","p":"https://www.dropbox.com/scl/fi/0yfa0ahwne8f9nyacjv3s/DRoKaJkE2vP.jpg?rlkey=uiv6krkyszauthprlha27z3hg&raw=1"},{"n":87,"v":"https://www.dropbox.com/scl/fi/iyxdeku5gzuzaf5ols4ky/DROtY9lE6XA.mp4?rlkey=9vjwmvymmcvc3jdquva13jq4y&raw=1","p":"https://www.dropbox.com/scl/fi/dzr05k5lc491skfxircdy/DROtY9lE6XA.jpg?rlkey=wdwi48dxd48mqvqey5oig6z2t&raw=1"},{"n":88,"v":"https://www.dropbox.com/scl/fi/8rhca9d2xo03lmdzh3hf6/DRt7QJQk8m.mp4?rlkey=jk7ffytyxljv6cl0uzs88xkv3&raw=1","p":"https://www.dropbox.com/scl/fi/c84evol2e0331t9uuevex/DRt7QJQk8m.jpg?rlkey=4ors4ysuf0zwnbfd1j5ble6aj&raw=1"},{"n":89,"v":"https://www.dropbox.com/scl/fi/hl2rr2nmehw18kvv9um3s/DRvk_BCk5po.mp4?rlkey=v70mnvdqhagooe9440g1m0zkf&raw=1","p":"https://www.dropbox.com/scl/fi/7xuo8uxya113rmae94knh/DRvk_BCk5po.jpg?rlkey=m5r3jr2vn57hzbd58wm6zk7wh&raw=1"},{"n":90,"v":"https://www.dropbox.com/scl/fi/rm7hajlzyx7a1jycy8cs1/DRwggvgk791.mp4?rlkey=boojiygudhnfm4rsz7v8xrsvk&raw=1","p":"https://www.dropbox.com/scl/fi/y758w0qobz2p1rm06a1xu/DRwggvgk791.jpg?rlkey=b6xsu9mdcn2kwi4mok33xtiss&raw=1"},{"n":91,"v":"https://www.dropbox.com/scl/fi/kmepn4h6lx5g521dyibmy/DSCk7Evk1oc.mp4?rlkey=7nayddizmeoi436w6otzomzzq&raw=1","p":"https://www.dropbox.com/scl/fi/mx6v4zzmn7h5ubsrhzsez/DSCk7Evk1oc.jpg?rlkey=dyesg8uwvb9vvo85am9khr9gh&raw=1"},{"n":92,"v":"https://www.dropbox.com/scl/fi/hiczr795bgbzli7tw30z0/DScSljGEyUI.mp4?rlkey=5ujsavtss756sf5modc9lv9z2&raw=1","p":"https://www.dropbox.com/scl/fi/hzylmk9l36u4qn1gclx5y/DScSljGEyUI.jpg?rlkey=xr7i420qnzpihae7n00isk5f1&raw=1"},{"n":93,"v":"https://www.dropbox.com/scl/fi/gmulcadj6qj0gtphkux2c/DSeIjmtk5Ms.mp4?rlkey=wrfiyp67jttg8vbkf7x0jdfeu&raw=1","p":"https://www.dropbox.com/scl/fi/b9sws2v68nx5u2l2lg1lk/DSeIjmtk5Ms.jpg?rlkey=ljn8xven9tspxdqszo24l0emz&raw=1"},{"n":94,"v":"https://www.dropbox.com/scl/fi/sltb1qt649re6odys3eyo/DSFIepykydZ.mp4?rlkey=wz2b2rhl5np59cg7nrcagob9a&raw=1","p":"https://www.dropbox.com/scl/fi/ru2j5s38jdg0n4pnafj8r/DSFIepykydZ.jpg?rlkey=gri8i9qay3pc4onwi6ng3oe4q&raw=1"},{"n":95,"v":"https://www.dropbox.com/scl/fi/j2dlk226due0r8yilty09/DSG1cs_E1R0.mp4?rlkey=g9l93ahobm5k4lswopd71xmjt&raw=1","p":"https://www.dropbox.com/scl/fi/xvlebjh66mjkwc2papolo/DSG1cs_E1R0.jpg?rlkey=2g23d00op7z1wpiicvmpfs5zz&raw=1"},{"n":96,"v":"https://www.dropbox.com/scl/fi/0r1woc9a6epsasv5mbiwk/DSHpK-mEzKa.mp4?rlkey=vwy25zz0foeh9cukgccxa9903&raw=1","p":"https://www.dropbox.com/scl/fi/l4y7qfhmbiutk2g9ab3bk/DSHpK-mEzKa.jpg?rlkey=u5yli9t12dsrbudja6d6hyfyk&raw=1"},{"n":97,"v":"https://www.dropbox.com/scl/fi/lqdgmicp25funvczz5v6e/DSkChKfkypz.mp4?rlkey=hh9pv4jdj73refvglef14hpjz&raw=1","p":"https://www.dropbox.com/scl/fi/s44ilgfo7ivwbsf5owq4v/DSkChKfkypz.jpg?rlkey=n3ha481cgwwvgc93s6lreao2r&raw=1"},{"n":98,"v":"https://www.dropbox.com/scl/fi/gojsjk7f0jh6qi3usqbk8/DSKFgbLkTy9.mp4?rlkey=aeujvxn6g9iuefsmp6tr6fqzy&raw=1","p":"https://www.dropbox.com/scl/fi/o1voovc0bzk8pa7lzoiwv/DSKFgbLkTy9.jpg?rlkey=ty43679s6znsjg5wbl21v13tx&raw=1"},{"n":99,"v":"https://www.dropbox.com/scl/fi/d2g93kum0m1kkpx5u6el2/DSkJ3E1kx3d.mp4?rlkey=wrc3xu3zzbqcneblnb0rbtdob&raw=1","p":"https://www.dropbox.com/scl/fi/1bq0gk4l3vc0mya44y9p3/DSkJ3E1kx3d.jpg?rlkey=46tjzuougevbe7ls32c50c9cj&raw=1"},{"n":100,"v":"https://www.dropbox.com/scl/fi/f61aox87af8asuo94zw8g/DSmdN-uk2Kd.mp4?rlkey=0b3rofk23j4lbbvgi4fh0h8me&raw=1","p":"https://www.dropbox.com/scl/fi/v9m9tmtc1md6obn3gqpmn/DSmdN-uk2Kd.jpg?rlkey=zqzz7rmttkv0kep2vi6rw2xvc&raw=1"},{"n":101,"v":"https://www.dropbox.com/scl/fi/har1ixoqhofr6nq93otxz/DSmWzudk_Zl.mp4?rlkey=msdbyvloen4f9xxpw6oob5533&raw=1","p":"https://www.dropbox.com/scl/fi/yt4rclh5taqjeg1w7rhyk/DSmWzudk_Zl.jpg?rlkey=kyh9id6ydctfn18ilrkyzj2h0&raw=1"},{"n":102,"v":"https://www.dropbox.com/scl/fi/ak4l5kh5xy8mv3ffowev1/DSUJWvJE_IO.mp4?rlkey=97k49l1dfp32e05o0jrxoda3g&raw=1","p":"https://www.dropbox.com/scl/fi/9g6try05o350s3j2jt86a/DSUJWvJE_IO.jpg?rlkey=wqr1xyotw1odv8sr2a9f8qfdx&raw=1"},{"n":103,"v":"https://www.dropbox.com/scl/fi/j15uhbcf7xtev97d0wey8/DTfLFI6E6Au.mp4?rlkey=x9tu6wchm0u3xc1wchem04nko&raw=1","p":"https://www.dropbox.com/scl/fi/a70p3ttqw0dml9efsirez/DTfLFI6E6Au.jpg?rlkey=at97ujplwprczzjwpztm6257v&raw=1"},{"n":104,"v":"https://www.dropbox.com/scl/fi/9fvjzk7a10orkuk1pgj44/DTIGsgZE808.mp4?rlkey=j5cwuzin8tq1k2hyeq2jg6u2u&raw=1","p":"https://www.dropbox.com/scl/fi/dbf6dgudiv3w2c1zx82f3/DTIGsgZE808.jpg?rlkey=m1lx8ymlv6r0t3q0fejrp1dkj&raw=1"},{"n":105,"v":"https://www.dropbox.com/scl/fi/fpnasdpf10lnmy62orqii/DTkRFdzE3Ob.mp4?rlkey=45ug396p80vvvg5uhfs4t1ngy&raw=1","p":"https://www.dropbox.com/scl/fi/nm2vy6eiolkf1ap0capow/DTkRFdzE3Ob.jpg?rlkey=j4so7gngdzs9yqwsyr9xvn4bv&raw=1"},{"n":106,"v":"https://www.dropbox.com/scl/fi/tv6p11qw2hwy0fb4bo82v/DTKZ1-ZE-7X.mp4?rlkey=0i1t1zlksnj0q7es86l8pciwv&raw=1","p":"https://www.dropbox.com/scl/fi/u8ekz0vsiefhe9v6kaeaa/DTKZ1-ZE-7X.jpg?rlkey=yjomwruiislj0zw86ueh8kmpg&raw=1"},{"n":107,"v":"https://www.dropbox.com/scl/fi/v3bpvoo4ndak76d72icy3/DUkvhOUk-I2.mp4?rlkey=yvuidir8ge9tbk7mvkexzq0vx&raw=1","p":"https://www.dropbox.com/scl/fi/vz7kwzf3lfkbvy7mdllkj/DUkvhOUk-I2.jpg?rlkey=ngilwkne566cvotih93xisxax&raw=1"}];
window.SPX_HERO = [1, 3, 4, 6, 8, 15, 16, 17, 10, 32, 35, 44, 46, 47, 50, 49, 69, 73, 80, 84, 81, 87];
window.SPX_PORTFOLIO = [84, 10, 3, 6, 8, 15, 16, 17, 73, 46, 32, 44, 47, 50, 49, 1, 69, 80, 4, 81, 87, 9, 21, 35, 14, 11, 12, 33, 34, 36, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 66, 65, 63, 67, 70, 71, 72, 78, 77, 76, 75, 74, 79, 82, 83, 89, 88, 90, 86, 85, 91, 92, 93, 94, 95, 96, 97, 104, 99, 105, 100, 106, 101, 107, 102, 103, 98];

/* ==========================================================================
   숏플래너스 · 아임웹 코드 위젯용 공용 스크립트 (common.js)
   - 이 파일은 페이지의 첫 코드 위젯(00_common) 또는 사이트 헤더 사용자 코드에 한 번만 넣습니다.
   - 영상 데이터는 common-data.js(SPX_VIDEOS · SPX_HERO · SPX_PORTFOLIO)에 있습니다. 이 파일보다 먼저 넣으세요.
   - 섹션별 동작은 각 섹션 조각(01_xxx.html …)의 SPX.def(...) 스크립트에 들어 있습니다.
   ========================================================================== */

/* ▼▼▼ 여기 두 상수만 바꾸면 됩니다 ▼▼▼ */
/* 아임웹 실제 페이지 경로 (메뉴 연결 주소) */
var SPX_ROUTES = {
  home: '/',
  allin: '/allin',
  edit: '/edit',
  carousel: '/carousel',
  plans: '/plans',
  work: '/work',
  consult: '/consult'
};
/* 이미지 · 로컬 영상을 올린 호스팅 주소 (끝에 / 포함). OWNER 자리에 깃허브 사용자명 */
var SPX_ASSET_BASE = 'https://cdn.jsdelivr.net/gh/mediaplanners200-web/shortplanners-assets@main/';
/* 외부 링크 */
var SPX_YOUTUBE_URL = 'https://media-planners.co.kr/';
/* ▲▲▲ 여기까지 ▲▲▲ */

(function(){
  if(window.__spx) return;             /* 중복 실행 방지 (위젯·헤더 코드에 두 번 들어가도 한 번만) */
  window.__spx = true;
  /* 로컬 미리보기용 덮어쓰기 (아임웹에서는 쓰지 않음) */
  /* 덮어쓰기: SPX_CONFIG(로더가 자기 주소 기준으로 넣어 줌 · 버전 고정용) 또는 SPX_PREVIEW(로컬 미리보기) */
  var CFG = window.SPX_CONFIG || window.SPX_PREVIEW;
  if(CFG){
    if(CFG.assetBase) SPX_ASSET_BASE = CFG.assetBase;
    if(CFG.routes) for(var k in CFG.routes) SPX_ROUTES[k] = CFG.routes[k];
  }

  var S = {};
  var reduce = S.reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var SPV = S.SPV = window.SPX_VIDEOS || [];
  S.asset = function(p){ return SPX_ASSET_BASE + p; };
  /* 화면에 여러 개 도는 영상은 가벼운 10초 반복본(media/lite, 360p · 무음), 크게 보기만 원본 */
  S.lite = function(d){ return d && d.n ? S.asset('media/lite/'+d.n+'.mp4') : (d && d.v); };
  S.route = function(k, hash){ return (SPX_ROUTES[k] || '/') + (hash || ''); };
  S.won = function(n){ return n.toLocaleString('ko-KR')+'원'; };
  S.man = function(n){ return (n/10000).toLocaleString('ko-KR')+'만원'; };
  S.pct = function(t){ return Math.round((1-t.price/t.list)*100); };
  S.okN = function(n){ return n>=1 && !!SPV[n-1]; };
  S.play = function(v){ var p=v.play(); if(p&&p.catch) p.catch(function(){}); return p; };

  /* ---------- 자산 경로 · 페이지 링크 적용 (data-spx-src / data-spx-poster / data-spx-route) ---------- */
  S.hydrate = function(root){
    (root||document).querySelectorAll('[data-spx-src]').forEach(function(el){ el.setAttribute('src', S.asset(el.getAttribute('data-spx-src'))); el.removeAttribute('data-spx-src'); });
    (root||document).querySelectorAll('[data-spx-poster]').forEach(function(el){ el.setAttribute('poster', S.asset(el.getAttribute('data-spx-poster'))); el.removeAttribute('data-spx-poster'); });
    (root||document).querySelectorAll('a[data-spx-route]').forEach(function(a){ var r=a.getAttribute('data-spx-route').split('#'); a.setAttribute('href', S.route(r[0], r[1]?'#'+r[1]:'')); });
    (root||document).querySelectorAll('a[data-spx-ext="youtube"]').forEach(function(a){ a.href = SPX_YOUTUBE_URL; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
  };

  /* ---------- 화면 밖 자동재생 영상 정지 ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(en){ var v = en.target; if(v.dataset.hover) return; if(en.isIntersecting && !reduce) S.play(v); else v.pause(); });
  }, {rootMargin:'100px'}) : null;
  S.watch = function(scope){ if(!io) return; (scope||document).querySelectorAll('.spx video[autoplay]').forEach(function(v){ if(v.__spxW) return; v.__spxW = 1; io.observe(v); }); };
  S.onView = function(el, cb, opt){ if(!('IntersectionObserver' in window)){ cb(true); return; } new IntersectionObserver(function(es){ es.forEach(function(en){ cb(en.isIntersecting); }); }, opt||{}).observe(el); };

  /* ---------- 영상 목록 ---------- */
  S.thumb = function(n){ var d=SPV[n-1]; return '<img src="'+S.asset('media/pf/'+n+'.jpg')+'" data-fb="'+(d&&d.p||'')+'" onerror="if(this.dataset.fb){this.src=this.dataset.fb;this.dataset.fb=\'\';}" alt="" loading="lazy">'; };
  S.heroList = function(){ return (window.SPX_HERO||[]).filter(S.okN); };
  /* 포트폴리오: 확정 목록(SPX_PORTFOLIO) 안에서만 무작위(Fisher–Yates), 같은 방문(탭) 동안 고정 */
  S.pfShuffled = function(){
    var seen = {}, all = (window.SPX_PORTFOLIO||[]).filter(function(n){ if(!S.okN(n)||seen[n]) return false; seen[n]=1; return true; }), list = null;
    try{ list = JSON.parse(sessionStorage.getItem('spx-pf-shuffle')||'null'); }catch(e){}
    if(Array.isArray(list) && list.length===all.length && all.every(function(n){ return list.indexOf(n)>=0; })) return list.slice();
    list = all.slice();
    for(var i=list.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)), x=list[i]; list[i]=list[j]; list[j]=x; }
    try{ sessionStorage.setItem('spx-pf-shuffle', JSON.stringify(list)); }catch(e){}
    return list;
  };

  /* ---------- 3D 영상 벽 (첫 화면 · 공통 CTA) ---------- */
  S.fillWall = function(wallEl){
    if(!wallEl) return;
    var picked = S.heroList().map(function(n){ return SPV[n-1]; });
    if(!picked.length) return;
    var cols = wallEl.querySelectorAll('.col'), buckets = [[],[],[]], n = picked.length, total = Math.max(n, 12);
    for(var i=0;i<total;i++){ buckets[i%3].push(picked[(i + (n%3===0 ? Math.floor(i/n) : 0)) % n]); }
    cols.forEach(function(col,ci){
      var html = buckets[ci].map(function(d){ return '<div class="phone"><video src="'+S.lite(d)+'" poster="'+S.asset('media/pf/'+d.n+'.jpg')+'" muted loop playsinline autoplay preload="none"></video></div>'; }).join('');
      col.innerHTML = html + html;
    });
  };

  /* ---------- 포트폴리오 그리드 (28칸, 홈 · 숏폼 편집 공용) ---------- */
  S.mountPfGrid = function(grid){
    var list = S.pfShuffled().slice(0,28);
    grid.innerHTML = list.map(function(n){
      var d = SPV[n-1];
      return '<a class="pf" href="'+S.route('work')+'" aria-label="숏폼 영상">'+S.thumb(n)+'<video muted loop playsinline preload="none" data-src="'+S.lite(d)+'"></video></a>';
    }).join('');
    grid.querySelectorAll('.pf').forEach(function(c){
      var v = c.querySelector('video');
      c.addEventListener('pointerenter', function(e){ if(reduce || e.pointerType!=='mouse') return; if(!v.src) v.src=v.dataset.src; S.play(v); c.classList.add('playing'); });
      c.addEventListener('pointerleave', function(){ v.pause(); c.classList.remove('playing'); });
    });
  };

  /* ---------- 가격 데이터 (대표님 전달 2026-11-12: 24편 10%, 36편 20% 할인) ---------- */
  var PLANS = S.PLANS = {
    allin:{name:'숏폼 올인원', tiers:[
      {n:12, list:3000000, price:3000000},
      {n:24, list:6000000, price:5400000, best:true},
      {n:36, list:9000000, price:7200000}
    ], feat:['계정 심층 분석 · 전략 기획안','프로필 세팅 · 하이라이트 커버','킬러 콘텐츠 · 대본 · 레퍼런스','편집 + 업로드용 캡션']},
    edit:{name:'숏폼 편집', tiers:[
      {n:12, list:1200000, price:1200000},
      {n:24, list:2400000, price:2160000, best:true},
      {n:36, list:3600000, price:2880000}
    ], feat:['촬영 원본 받아 편집','첫 3초 후킹 구성','자막 · 강조 모션','BGM · 효과음']}
  };
  S.SHOOT = 600000; S.CARD = 790000; S.SINGLE = 150000;
  S.priceCards = function(plan){
    return PLANS[plan].tiers.map(function(t){
      var off = S.pct(t);
      return '<article class="pc'+(t.best?' best':'')+'">'+(t.best?'<span class="ribbon">가장 많이 선택</span>':'')+
        '<span class="name">'+PLANS[plan].name+'</span>'+
        '<div class="cnt num">'+t.n+'<small>편</small></div>'+
        '<div>'+(off?'<span class="was">'+S.won(t.list)+'</span><span class="off">'+off+'% 할인</span>':'<span class="was" style="text-decoration:none">&nbsp;</span>')+
        '<div class="won num">'+S.man(t.price)+'<small>VAT 별도</small></div><div class="per">편당 '+S.won(Math.round(t.price/t.n))+'</div></div>'+
        '<ul>'+PLANS[plan].feat.map(function(f){return '<li>'+f+'</li>'}).join('')+'</ul>'+
        '<a class="btn '+(t.best?'':'btn-line')+'" href="'+S.route('consult')+'">이 플랜으로 상담 <span class="arr">→</span></a></article>';
    }).join('');
  };
  /* 견적 공통 계산 (가격 페이지 계산기 · 상담 신청 공용). st = {plan:'allin'|'edit'|'single'|'none', tier, single, card, days} */
  S.quote = function(st){
    var lines = [], list = 0, total = 0, names = [];
    if(st.plan==='allin' || st.plan==='edit'){
      var t = PLANS[st.plan].tiers[st.tier];
      lines.push(['line', PLANS[st.plan].name+' '+t.n+'편', S.won(t.list)]);
      if(t.list!==t.price) lines.push(['disc', '다량 할인 '+S.pct(t)+'%', '−'+S.won(t.list-t.price)]);
      list += t.list; total += t.price; names.push(PLANS[st.plan].name+' '+t.n+'편');
    } else if(st.plan==='single'){
      lines.push(['line', '숏폼 편집 단건 '+st.single+'편', S.won(st.single*S.SINGLE)]); list += st.single*S.SINGLE; total += st.single*S.SINGLE; names.push('숏폼 편집 단건 '+st.single+'편');
    }
    if(st.card){ lines.push(['line','AI 카드뉴스 월 12건', S.won(S.CARD)]); list += S.CARD; total += S.CARD; names.push('AI 카드뉴스'); }
    if(st.days){ lines.push(['line','1일 출장 촬영 '+st.days+'일', S.won(st.days*S.SHOOT)]); list += st.days*S.SHOOT; total += st.days*S.SHOOT; names.push('출장 촬영 '+st.days+'일'); }
    return {lines:lines, list:list, total:total, names:names};
  };

  /* ---------- 영상 크게 보기 모달 (포트폴리오 페이지) ---------- */
  S.openModal = function(list, i){
    var modal = document.getElementById('spxModal'); if(!modal) return;
    var mv = modal.querySelector('video');
    if(!modal.__spx){
      modal.__spx = 1;
      modal.close = function(){ modal.hidden = true; mv.pause(); mv.removeAttribute('src'); mv.load(); if(modal.lastFocus) modal.lastFocus.focus(); };
      modal.show = function(){ var n = modal.list[modal.i], d = SPV[n-1]; mv.src = d.v; mv.poster = S.asset('media/pf/'+n+'.jpg'); S.play(mv); };
      modal.querySelector('[data-m="close"]').onclick = modal.close;
      modal.querySelector('[data-m="prev"]').onclick = function(){ modal.i = (modal.i-1+modal.list.length)%modal.list.length; modal.show(); };
      modal.querySelector('[data-m="next"]').onclick = function(){ modal.i = (modal.i+1)%modal.list.length; modal.show(); };
      modal.addEventListener('click', function(e){ if(e.target===modal) modal.close(); });
      document.addEventListener('keydown', function(e){ if(modal.hidden) return; if(e.key==='Escape') modal.close(); if(e.key==='ArrowRight') modal.querySelector('[data-m="next"]').click(); if(e.key==='ArrowLeft') modal.querySelector('[data-m="prev"]').click(); });
    }
    modal.lastFocus = document.activeElement; modal.list = list; modal.i = i; modal.hidden = false; modal.show();
    modal.querySelector('[data-m="close"]').focus();
  };

  /* ---------- 섹션 모듈 등록 · 실행 ----------
     섹션 조각 안의 SPX.def('이름', function(S){ ... }) 스크립트가 여기로 들어옵니다.
     문서가 준비되면(또는 이미 준비됐으면 바로) 한 번만 실행하고, 오류가 나도 다른 섹션에는 영향을 주지 않습니다. */
  var mods = {}, ready = false, queue = [];
  function run(name){
    var m = mods[name]; if(!m || m.done) return; m.done = true;
    try{ m.fn(S); }catch(e){ if(window.console) console.warn('[spx] '+name, e); }
    S.hydrate(document); S.watch(document);
  }
  window.SPX = {
    S: S,
    def: function(name, fn){ if(mods[name]) return; mods[name] = {fn:fn}; if(ready) run(name); else queue.push(name); },
    boot: function(){ if(ready) return; ready = true; S.hydrate(document); queue.forEach(run); S.watch(document); }
  };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.SPX.boot);
  else setTimeout(window.SPX.boot, 0);
})();
/* 아임웹 텍스트 위젯은 <svg> 를 지우므로, 자리표시(span.spx-svg)를 원래 아이콘으로 되돌림 */
(function(){ var M = {"s63131528": "<svg viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/><path d=\"M10 9l5 3-5 3z\"/></svg>", "s17da2183": "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6\"/></svg>", "s57a862c9": "<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"9\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"9\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/></svg>", "sb42417ee": "<svg viewBox=\"0 0 24 24\"><path d=\"M4 5h16v11H8l-4 4z\"/></svg>", "s3f74ee00": "<svg viewBox=\"0 0 24 24\"><path d=\"M3 4h18l-7 9v6l-4 2v-8z\"/></svg>", "sc557e314": "<svg viewBox=\"0 0 24 24\"><path d=\"M9 18h6M10 21h4\"/><path d=\"M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z\"/></svg>", "s1a6ee172": "<svg viewBox=\"0 0 24 24\"><path d=\"M4 20h4L19 9l-4-4L4 16z\"/><path d=\"M14 6l4 4\"/></svg>", "s39ab58eb": "<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"M21 15l-5-5L5 21\"/></svg>", "sf308513d": "<svg viewBox=\"0 0 24 24\"><path d=\"M14 3l7 7-3 1-4 4 1 5-2 2-4-4-5 5-1-1 5-5-4-4 2-2 5 1 4-4z\"/></svg>", "s3d904e86": "<svg viewBox=\"0 0 24 24\"><path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>", "s078bf60c": "<svg viewBox=\"0 0 24 24\"><path d=\"M4 6h16M4 12h10M4 18h7\"/><path d=\"M17 15l2 2 3-4\"/></svg>", "s1121f667": "<svg viewBox=\"0 0 24 24\"><path d=\"M12 3v4M12 17v4M3 12h4M17 12h4\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg>", "s4b998004": "<svg viewBox=\"0 0 24 24\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12\"/></svg>", "s9027336d": "<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 15h4M13 15h4M7 11h10\"/></svg>", "sf0538b4b": "<svg viewBox=\"0 0 24 24\"><path d=\"M4 17l5-5 4 4 7-8\"/><path d=\"M15 8h5v5\"/></svg>", "sfc46f425": "<svg viewBox=\"0 0 24 24\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></svg>", "see53b484": "<svg viewBox=\"0 0 24 24\"><rect x=\"7\" y=\"2\" width=\"10\" height=\"20\" rx=\"2\"/><path d=\"M11 18h2\"/></svg>"}; function run(){ var els=document.querySelectorAll('.spx [data-svg]'); for(var i=0;i<els.length;i++){ var e=els[i], s=M[e.getAttribute('data-svg')]; if(s && !e.querySelector('svg')){ e.innerHTML=s; } } } if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run); else run(); setTimeout(run, 1500); })();

/* spx-faq-closed : FAQ 는 처음에 모두 닫힌 상태로 (아임웹 텍스트 위젯에 open 이 남아 있어도) */
(function(){
  function closeAll(){ var d = document.querySelectorAll('.spx .faq details[open]'); for(var i=0;i<d.length;i++) d[i].removeAttribute('open'); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', closeAll); else closeAll();
})();