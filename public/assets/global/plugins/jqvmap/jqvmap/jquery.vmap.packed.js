/*!
 * jQVMap Version 1.0 
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('(b($){a 3g={x:1,O:1,1P:1,2G:1,1M:1,2U:1,24:1,2m:1,2t:1,2u:1,26:1};a 2V={4u:\'3D\',4t:\'3r\',4w:\'4d\',4A:\'4e\'};$.4r.4z=b(2A){a 1K={8:\'4p\',1P:\'#54\',A:\'#4V\',1X:\'#3q\',2f:\'#3q\',2G:[\'#4T\',\'#52\'],1M:\'45\',2U:1U,24:1U,2m:\'#50\',2t:1,2u:0.25,26:1S},8;j(2A===\'4I\'){11.3b[1G[1]]=1G[2]}B j(2A===\'3f\'&&3g[1G[1]]){5.2X(\'2W\')[\'3f\'+1G[1].4G(0).4F()+1G[1].23(1)].4K(5.2X(\'2W\'),4P.2s.4M.4L(1G,2))}B{$.4O(1K,2A);1K.D=5;5.1A({3C:\'4J\',4E:\'4Q\'});8=2H 11(1K);5.2X(\'2W\',8);J(a e 1z 2V){j(1K[e]){5.4Z(2V[e]+\'.17\',1K[e])}}}};a 1W=b(n,p,k){5.19=3F.53?\'13\':\'3d\';5.k=k;j(5.19==\'13\'){5.2x=b(3w){u 1D.4Y(5.3A,3w)}}B{4X{j(!1D.3x.1H){1D.3x.4S("1H","3B:3H-3i-3u:3d")}5.1t=b(2p){u 1D.3y(\'<1H:\'+2p+\' 2E="1H">\')}}4U(e){5.1t=b(2p){u 1D.3y(\'<\'+2p+\' 4W="3B:3H-3i.3u:3d" 2E="1H">\')}}1D.4n().4o(".1H","4m:4q(#3z#4j)")}j(5.19==\'13\'){5.E=5.2x(\'13\')}B{5.E=5.1t(\'3h\');5.E.X.3C=\'4l\'}5.3e(n,p)};1W.2s={3A:"3Y://42.41.40/4C/13",19:\'13\',n:0,p:0,E:1S,3e:b(n,p){j(5.19==\'13\'){5.E.T(\'n\',n);5.E.T(\'p\',p)}B{5.E.X.n=n+"1b";5.E.X.p=p+"1b";5.E.1I=n+\' \'+p;5.E.2l="0 0";j(5.Z){a 12=5.Z.2q(\'2a\');J(a i=0,l=12.w;i<l;i++){12[i].1I=n+\' \'+p;12[i].X.n=n+\'1b\';12[i].X.p=p+\'1b\'}5.Z.1I=n+\' \'+p;5.Z.X.n=n+\'1b\';5.Z.X.p=p+\'1b\'}}5.n=n;5.p=p},3E:b(3c){a q;j(5.19==\'13\'){q=5.2x(\'y\');q.T(\'d\',3c.y);j(5.k.2m!==1S){q.T(\'1T\',5.k.2m)}j(5.k.2t>0){q.T(\'1T-n\',5.k.2t);q.T(\'1T-4B\',\'2v\');q.T(\'1T-4x\',\'2v\')}j(5.k.2u>0){q.T(\'1T-1r\',5.k.2u)}q.18=b(A){5.T("1f",A);j(5.33("21")===1S){5.T("21",A)}};q.2Q=b(A){u 5.33("1f")};q.2M=b(){u 5.33("21")};q.27=b(1r){5.T(\'1f-1r\',1r)}}B{q=5.1t(\'2a\');q.2l="0 0";q.1I=5.n+\' \'+5.p;q.X.n=5.n+\'1b\';q.X.p=5.p+\'1b\';q.4v=11.4R;q.5s=1v;q.y=1W.3n(3c.y);a o=5.1t(\'5C\');o.5D=1U;o.5E=\'0.3G,0,0,0.3G,0,0\';o.5G=\'0,0\';q.2I(o);a 1f=5.1t(\'1f\');q.2I(1f);q.18=b(A){5.2q(\'1f\')[0].A=A};q.2Q=b(A){u 5.2q(\'1f\')[0].A};q.27=b(1r){5.2q(\'1f\')[0].1r=1B(1r*3o,10)+\'%\'}}u q},3t:b(3p){a q;j(5.19==\'13\'){q=5.2x(\'g\')}B{q=5.1t(\'3h\');q.X.n=5.n+\'1b\';q.X.p=5.p+\'1b\';q.X.4c=\'3j\';q.X.1E=\'3j\';q.2l="0 0";q.1I=5.n+\' \'+5.p}j(3p){5.Z=q}u q},3U:b(o,K,N){j(5.19==\'13\'){5.Z.T(\'5y\',\'o(\'+o+\') 5A(\'+K+\', \'+N+\')\')}B{5.Z.2l=(5.n-K)+\',\'+(5.p-N);5.Z.1I=5.n/o+\',\'+5.p/o}}};1W.3n=b(y){a 1w=\'\';a G=0,I=0,1x,1u;u y.28(/([5x])((?:-?(?:\\d+)?(?:\\.\\d+)?,?\\s?)+)/g,b(5F,3k,9,2J){9=9.28(/(\\d)-/g,\'$1,-\').28(/\\s+/g,\',\').2S(\',\');j(!9[0]){9.5v()}J(a i=0,l=9.w;i<l;i++){9[i]=1y.2v(3o*9[i])}5w(3k){14\'m\':G+=9[0];I+=9[1];u\'t\'+9.1n(\',\');W;14\'M\':G=9[0];I=9[1];u\'m\'+9.1n(\',\');W;14\'l\':G+=9[0];I+=9[1];u\'r\'+9.1n(\',\');W;14\'L\':G=9[0];I=9[1];u\'l\'+9.1n(\',\');W;14\'h\':G+=9[0];u\'r\'+9[0]+\',0\';W;14\'H\':G=9[0];u\'l\'+G+\',\'+I;W;14\'v\':I+=9[0];u\'5t,\'+9[0];W;14\'V\':I=9[0];u\'l\'+G+\',\'+I;W;14\'c\':1x=G+9[9.w-4];1u=I+9[9.w-3];G+=9[9.w-2];I+=9[9.w-1];u\'v\'+9.1n(\',\');W;14\'C\':1x=9[9.w-4];1u=9[9.w-3];G=9[9.w-2];I=9[9.w-1];u\'c\'+9.1n(\',\');W;14\'s\':9.2k(I-1u);9.2k(G-1x);1x=G+9[9.w-4];1u=I+9[9.w-3];G+=9[9.w-2];I+=9[9.w-1];u\'v\'+9.1n(\',\');W;14\'S\':9.2k(I+I-1u);9.2k(G+G-1x);1x=9[9.w-4];1u=9[9.w-3];G=9[9.w-2];I=9[9.w-1];u\'c\'+9.1n(\',\');W;3z:u 1v;W}u\'\'}).28(/z/g,\'\')};a 11=b(k){k=k||{};a 8=5;a 1a=11.3b[k.8];5.D=k.D;5.1m=1a.n;5.1l=1a.p;5.A=k.A;5.1X=k.1X;5.49(k.1P);5.n=k.D.n();5.p=k.D.p();5.2g();F(3F).2g(b(){8.n=k.D.n();8.p=k.D.p();8.2g();8.E.3e(8.n,8.p);8.1O()});5.E=2H 1W(5.n,5.p,k);k.D.3I(5.E.E);5.3V();5.Z=5.E.3t(1U);5.2J=11.34;5.1c=F(\'<2D/>\').2K(\'17-1c\').2F(F(\'57\'));j(k.2U){F(\'<2D/>\').2K(\'17-46\').3Z(\'+\').2F(k.D);F(\'<2D/>\').2K(\'17-48\').5h(\'&#5o;\').2F(k.D)}8.U=[];J(a P 1z 1a.12){a y=5.E.3E({y:1a.12[P].y});y.18(5.A);y.2N=\'17\'+8.2J+\'2T\'+P;8.U[P]=y;F(5.Z).3I(y);y.T(\'2E\',\'17-5r\');j(k.26!==1S){j(P.3v()==k.26.3v()){y.18(k.2f)}}}F(k.D).4f(5.E.19==\'13\'?\'y\':\'2a\',\'3s 5i\',b(e){a y=e.2d,R=e.2d.2N.2S(\'2T\').3J(),2R=$.3l(\'3D.17\'),2P=$.3l(\'3r.17\');j(e.5j==\'3s\'){F(k.D).2i(2P,[R,1a.12[R].2e]);j(!2P.4h()){j(k.3m){y.27(k.3m)}B j(k.1X){y.22=y.2Q()+\'\';y.18(k.1X)}}j(k.24){8.1c.3Z(1a.12[R].2e);F(k.D).2i(2R,[8.1c,R]);j(!2R.4h()){8.1c.5l();8.4i=8.1c.n();8.4b=8.1c.p()}}}B{y.27(1);j(y.22){y.18(y.22)}8.1c.5k();F(k.D).2i(\'4d.17\',[R,1a.12[R].2e])}});F(k.D).4f(5.E.19==\'13\'?\'y\':\'2a\',\'38\',b(e){J(a P 1z 1a.12){8.U[P].22=8.U[P].2M();8.U[P].18(8.U[P].2M())}a y=e.2d;a R=e.2d.2N.2S(\'2T\').3J();F(k.D).2i(\'4e.17\',[R,1a.12[R].2e]);y.22=k.2f;y.18(k.2f)});j(k.24){k.D.3Q(b(e){j(8.1c.5m(\':5n\')){8.1c.1A({4c:e.2b-15-8.4i,1E:e.2C-15-8.4b})}})}5.1F(k.x);5.E.E.2I(5.Z);5.1O();5.1J=2H 1N(k.2G,k.1M,k.5q,k.5p);j(k.O){5.O=k.O;5.2j(k.O)}5.3X();11.34++};11.2s={K:0,N:0,o:1,32:0,31:0,Y:1,n:0,p:0,U:{},5g:{},59:{},1q:1.4,37:4,1C:1,1F:b(P,A){j(2y P==\'58\'){5.U[P].18(A);5.U[P].T("21",A)}B{a x=P;J(a R 1z x){j(5.U[R]){5.U[R].18(x[R]);5.U[R].T("21",x[R])}}}},2j:b(O){a 1o=0,1j=56.5a,1d;J(a 1i 1z O){1d=4g(O[1i]);j(1d>1o){1o=O[1i]}j(1d&&1d<1j){1j=1d}}5.1J.2w(1j);5.1J.2z(1o);a x={};J(1i 1z O){1d=4g(O[1i]);j(1d){x[1i]=5.1J.3N(1d)}B{x[1i]=5.A}}5.1F(x);5.O=O},49:b(1P){5.D.1A(\'5b-A\',1P)},5f:b(x){5.1J.1F(x);j(5.O){5.2j(5.O)}},2r:b(f){5.1J.2r(f);j(5.O){5.2j(5.O)}},2g:b(){a 2c=5.Y;j(5.n/5.p>5.1m/5.1l){5.Y=5.p/5.1l;5.32=1y.3S(5.n-5.1m*5.Y)/(2*5.Y)}B{5.Y=5.n/5.1m;5.31=1y.3S(5.p-5.1l*5.Y)/(2*5.Y)}5.o*=5.Y/2c;5.K*=5.Y/2c;5.N*=5.Y/2c},3T:b(){5.5e.3T();J(a P 1z 5.U){5.U[P].18(11.5d)}5.o=5.Y;5.K=5.32;5.N=5.31;5.1O()},1O:b(){a 1R,20,1Z,1Y;j(5.1m*5.o<=5.n){1R=(5.n-5.1m*5.o)/(2*5.o);1Z=(5.n-5.1m*5.o)/(2*5.o)}B{1R=0;1Z=(5.n-5.1m*5.o)/5.o}j(5.1l*5.o<=5.p){20=(5.p-5.1l*5.o)/(2*5.o);1Y=(5.p-5.1l*5.o)/(2*5.o)}B{20=0;1Y=(5.p-5.1l*5.o)/5.o}j(5.N>20){5.N=20}B j(5.N<1Y){5.N=1Y}j(5.K>1R){5.K=1R}B j(5.K<1Z){5.K=1Z}5.E.3U(5.o,5.K,5.N)},3V:b(){a 2B=1v;a 29,2h;a 1k=5;5.D.3Q(b(e){j(2B){a 39=1k.K;a 3a=1k.N;1k.K-=(29-e.2b)/1k.o;1k.N-=(2h-e.2C)/1k.o;1k.1O();29=e.2b;2h=e.2C}u 1v}).5c(b(e){2B=1U;29=e.2b;2h=e.2C;u 1v}).5u(b(){2B=1v;u 1v})},3X:b(){a 8=5;a 36=(F(\'#5B\').5z()-6*2-15*2-3*2-7-6)/(5.37-5.1C);5.D.47(\'.17-46\').38(b(){j(8.1C<8.37){a 39=8.K;a 3a=8.N;a 44=8.o;8.K-=(8.n/8.o-8.n/ (8.o * 8.1q)) /2;8.N-=(8.p/8.o-8.p/ (8.o * 8.1q)) /2;8.35(8.o*8.1q);8.1C++;F(\'#2o\').1A(\'1E\',1B(F(\'#2o\').1A(\'1E\'),10)-36)}});5.D.47(\'.17-48\').38(b(){j(8.1C>1){a 39=8.K;a 3a=8.N;a 44=8.o;8.K+=(8.n/(8.o/ 8.1q) - 8.n/8.o)/2;8.N+=(8.p/(8.o/ 8.1q) - 8.p/8.o)/2;8.35(8.o/8.1q);8.1C--;F(\'#2o\').1A(\'1E\',1B(F(\'#2o\').1A(\'1E\'),10)+36)}})},35:b(o){5.o=o;5.1O()},55:b(1i){u F(\'#\'+1i)[0]}};11.43="3Y://42.41.40/4s/43";11.34=1;11.3b={};a 1N=b(x,1M,1p,1V){j(x){5.1F(x)}j(1M){5.2r(1M)}j(1p){5.2w(1p)}j(1p){5.2z(1V)}};1N.2s={x:[],2w:b(1j){5.3W=1j;j(2y 5.1e===\'b\'){5.1p=5.1e(1j)}B{5.1p=1j}},2z:b(1o){5.3O=1o;j(2y 5.1e===\'b\'){5.1V=5.1e(1o)}B{5.1V=1o}},1F:b(x){J(a i=0;i<x.w;i++){x[i]=1N.3M(x[i])}5.x=x},2r:b(f){j(f===\'4y\'){5.1e=b(1g){u 1y.3L(1g,0.2)}}B j(f===\'45\'){4k 5.1e}B{5.1e=f}5.2w(5.3W);5.2z(5.3O)},3N:b(1g){j(2y 5.1e===\'b\'){1g=5.1e(1g)}a 1s=[];a 30=0;a l;J(a i=0;i<5.x.w-1;i++){l=5.3R(5.2L(5.x[i+1],5.x[i]));1s.4D(l);30+=l}a c=(5.1V-5.1p)/30;J(i=0;i<1s.w;i++){1s[i]*=c}i=0;1g-=5.1p;3K(1g-1s[i]>=0){1g-=1s[i];i++}a A;j(i==5.x.w-1){A=5.2Z(5.x[i]).2Y(16)}B{A=(5.2Z(5.3P(5.x[i],5.4a(5.2L(5.x[i+1],5.x[i]),(1g)/(1s[i]))))).2Y(16)}3K(A.w<6){A=\'0\'+A}u\'#\'+A},2Z:b(Q){a 1Q=0;J(a i=0;i<Q.w;i++){1Q+=1y.2v(Q[i])*1y.3L(51,Q.w-i-1)}u 1Q},2L:b(1L,2n){a Q=[];J(a i=0;i<1L.w;i++){Q[i]=1L[i]-2n[i]}u Q},3P:b(1L,2n){a Q=[];J(a i=0;i<1L.w;i++){Q[i]=1L[i]+2n[i]}u Q},4a:b(Q,1Q){a 1w=[];J(a i=0;i<Q.w;i++){1w[i]=Q[i]*1Q}u 1w},3R:b(Q){a 1w=0;J(a i=0;i<Q.w;i++){1w+=Q[i]*Q[i]}u 1y.4N(1w)}};1N.4H=b(2O){a 1h=\'#\';a d;J(a i=0;i<2O.w;i++){d=2O[i].2Y(16);1h+=d.w==1?\'0\'+d:d}u 1h};1N.3M=b(1h){1h=1h.23(1);u[1B(1h.23(0,2),16),1B(1h.23(2,2),16),1B(1h.23(4,2),16)]}})(F);', 62, 353, '|||||this|||map|coords|var|function||||||||if|params|||width|scale|height|node||||return||length|colors|path||color|else||container|canvas|jQuery|cx||cy|for|transX|||transY|values|key|vector|code||setAttribute|countries||break|style|baseScale|rootGroup||WorldMap|pathes|svg|case|||jqvmap|setFill|mode|mapData|px|label|val|normalize|fill|value|rgb|cc|min|self|defaultHeight|defaultWidth|join|max|minValue|zoomStep|opacity|lengthes|createVmlNode|ctrly|false|result|ctrlx|Math|in|css|parseInt|zoomCurStep|document|top|setColors|arguments|rvml|coordsize|colorScale|defaultParams|vector1|normalizeFunction|ColorScale|applyTransform|backgroundColor|num|maxTransX|null|stroke|true|maxValue|VectorCanvas|hoverColor|minTransY|minTransX|maxTransY|original|currentFillColor|substr|showTooltip||selectedRegion|setOpacity|replace|oldPageX|shape|pageX|curBaseScale|target|name|selectedColor|resize|oldPageY|trigger|setValues|unshift|coordorigin|borderColor|vector2|zoomSlider|tagName|getElementsByTagName|setNormalizeFunction|prototype|borderWidth|borderOpacity|round|setMin|createSvgNode|typeof|setMax|options|mouseDown|pageY|div|class|appendTo|scaleColors|new|appendChild|index|addClass|vectorSubtract|getOriginalFill|id|ar|regionMouseOverEvent|getFill|labelShowEvent|split|_|enableZoom|apiEvents|mapObject|data|toString|vectorToNum|fullLength|baseTransY|baseTransX|getAttribute|mapIndex|setScale|sliderDelta|zoomMaxStep|click|curTransX|curTransY|maps|config|vml|setSize|set|apiParams|group|microsoft|0px|letter|Event|hoverOpacity|pathSvgToVml|100|isRoot|c9dfaf|regionMouseOver|mouseover|createGroup|com|toLowerCase|nodeName|namespaces|createElement|default|svgns|urn|position|labelShow|createPath|window|01|schemas|append|pop|while|pow|rgbToArray|getColor|clearMaxValue|vectorAdd|mousemove|vectorLength|abs|reset|applyTransformParams|makeDraggable|clearMinValue|bindZoomButtons|http|text|org|w3|www|xlink|curScale|linear|zoomin|find|zoomout|setBackgroundColor|vectorMult|labelHeight|left|regionMouseOut|regionClick|delegate|parseFloat|isDefaultPrevented|labelWidth|VML|delete|absolute|behavior|createStyleSheet|addRule|world_en|url|fn|1999|onRegionOver|onLabelShow|fillcolor|onRegionOut|linejoin|polynomial|vectorMap|onRegionClick|linecap|2000|push|overflow|toUpperCase|charAt|arrayToRgb|addMap|relative|apply|call|slice|sqrt|extend|Array|hidden|defaultFillColor|add|b6d6ff|catch|f4f3f0|xmlns|try|createElementNS|bind|818181|256|005ace|SVGAngle|a5bfdd|getCountryPath|Number|body|string|countriesData|MAX_VALUE|background|mousedown|defaultColor|countryTitle|setScaleColors|countriesColors|html|mouseout|type|hide|show|is|visible|x2212|valueMax|valueMin|region|stroked|r0|mouseup|shift|switch|MmLlHhVvCcSs|transform|innerHeight|translate|zoom|skew|on|matrix|segment|offset'.split('|'), 0, {}));