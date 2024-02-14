// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number,t=n.NEGATIVE_INFINITY;function i(r){return r===e||r===t}var a=Math.floor;function o(r){return a(r)===r}function u(r){return o(r/2)}function c(r){return u(r>0?r-1:r+1)}var f=Math.sqrt;function s(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function g(r){return"number"==typeof r}function v(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function y(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+v(i):v(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!g(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=y(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=y(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===h.call(r.specifier)?h.call(n):d.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function b(r){return"string"==typeof r}var m=Math.abs,I=String.prototype.toLowerCase,A=String.prototype.toUpperCase,N=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,F=/^(\d+)e/,S=/\.0$/,U=/\.0*e/,x=/(\..*[^0])0*e/;function V(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!g(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":m(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=N.call(n,x,"$1e"),n=N.call(n,U,"e"),n=N.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=N.call(n,_,"e+0$1"),n=N.call(n,E,"e-0$1"),r.alternate&&(n=N.call(n,T,"$1."),n=N.call(n,F,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):I.call(n)}function k(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function j(r,e,n){var t=e-r.length;return t<0?r:r=n?r+k(t):k(t)+r}var O=String.fromCharCode,G=isNaN,$=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,n,t,i,a,o,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(b(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=P(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,G(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,G(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=w(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!G(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=G(a)?String(t.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=V(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=y(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=j(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,n,t,i;for(n=[],i=0,t=W.exec(r);t;)(e=r.slice(i,W.lastIndex-t[0].length)).length&&n.push(e),n.push(Y(t)),i=W.lastIndex,t=W.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function L(r){return"string"==typeof r}function R(r){var e,n;if(!L(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[C(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return H.apply(null,e)}var M=Object.prototype,Z=M.toString,X=M.__defineGetter__,q=M.__defineSetter__,z=M.__lookupGetter__,B=M.__lookupSetter__;var D=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(z.call(r,e)||B.call(r,e)?(t=r.__proto__,r.__proto__=M,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(r,e,n.get),o&&q&&q.call(r,e,n.set),r};function J(r,e,n){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"";var tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr=or,fr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var gr=lr,vr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var dr,hr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),n=e,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ir,Ar="function"==typeof Uint16Array?Uint16Array:void 0;Ir=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Nr,_r={uint16:Ir,uint8:wr};(Nr=new _r.uint16(1))[0]=4660;var Er,Tr,Fr=52===new _r.uint8(Nr.buffer)[0];!0===Fr?(Er=1,Tr=0):(Er=0,Tr=1);var Sr={HIGH:Er,LOW:Tr},Ur=new gr(1),xr=new cr(Ur.buffer),Vr=Sr.HIGH,kr=Sr.LOW;function jr(r,e,n,t){return Ur[0]=r,e[t]=xr[Vr],e[t+n]=xr[kr],e}function Or(r){return jr(r,[0,0],1,0)}J(Or,"assign",jr);var Gr=!0===Fr?0:1,$r=new gr(1),Pr=new cr($r.buffer);function Hr(r,e){return $r[0]=r,Pr[Gr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Yr,Cr,Lr=n.NEGATIVE_INFINITY,Rr=Number.POSITIVE_INFINITY,Mr=!0===Fr?1:0,Zr=new gr(1),Xr=new cr(Zr.buffer);function qr(r){return Zr[0]=r,Xr[Mr]}!0===Fr?(Yr=1,Cr=0):(Yr=0,Cr=1);var zr={HIGH:Yr,LOW:Cr},Br=new gr(1),Dr=new cr(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;function Qr(r,e){return Dr[Jr]=r,Dr[Kr]=e,Br[0]}var re=[0,0];function ee(r,e){var n,t;return Or.assign(r,re,1,0),n=re[0],n&=2147483647,t=qr(e),Qr(n|=t&=2147483648,re[1])}var ne=!0===Fr?1:0,te=new gr(1),ie=new cr(te.buffer);function ae(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var oe=[1,1.5],ue=[0,.5849624872207642],ce=[0,1.350039202129749e-8];var fe=Number.POSITIVE_INFINITY,se=n.NEGATIVE_INFINITY;function le(e,n,t,a){return r(e)||i(e)?(n[a]=e,n[a+t]=0,n):0!==e&&s(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}J((function(r){return le(r,[0,0],1,0)}),"assign",le);function pe(r){var e=qr(r);return(e=(2146435072&e)>>>20)-1023|0}var ge=[0,0],ve=[0,0];function ye(e,n,t){var a,o,u,c,f,s,l,p,g,v,y,d,h,w,b;return v=((g=2147483647&e|0)>>20)-1023|0,p=0,g>1071644672&&(a=((p=e+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&p)>>20)-1023|0)))>>>0,p=(1048575&p|1048576)>>20-v>>>0,e<0&&(p=-p),n-=u=ae(0,a)),e=Wr(e=qr(l=1-((l=(c=.6931471824645996*(u=Hr(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=l-(u=l*l)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((s=f-(l-c))+l*s)-l))),(e+=p<<20>>>0)>>20<=0?(d=l,l=0===(h=p)||0===d||r(d)||i(d)?d:(le(d,ge,1,0),h+=ge[1],(h+=pe(d=ge[0]))<-1074?ee(0,d):h>1023?d<0?se:fe:(h<=-1023?(h+=52,b=2220446049250313e-31):b=1,Or.assign(d,ve,1,0),w=ve[0],w&=2148532223,b*Qr(w|=h+1023<<20,ve[1])))):l=ae(l,e),l}var de=1e300,he=1e-300,we=[0,0],be=[0,0];function me(e,n){var t,a,u,l,p,g,v,y,d,h,w,b,m,I;if(r(e)||r(n))return NaN;if(Or.assign(n,we,1,0),p=we[0],0===we[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return f(e);if(-.5===n)return 1/f(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(i(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(e===Rr)?0:Rr}(e,n)}if(Or.assign(e,we,1,0),l=we[0],0===we[1]){if(0===l)return function(r,e){return e===Lr?Rr:e===Rr?0:e>0?c(e)?r:0:c(e)?ee(Rr,r):Rr}(e,n);if(1===e)return 1;if(-1===e&&c(n))return-1;if(i(e))return e===Lr?me(-0,-n):n<0?0:Rr}if(e<0&&!1===o(n))return(e-e)/(e-e);if(u=s(e),t=2147483647&l|0,a=2147483647&p|0,v=p>>>31|0,g=(g=l>>>31|0)&&c(n)?-1:1,a>1105199104){if(a>1139802112)return function(r,e){return(2147483647&qr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(t<1072693247)return 1===v?g*de*de:g*he*he;if(t>1072693248)return 0===v?g*de*de:g*he*he;w=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(be,u)}else w=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,v,y,d,h,w,b,m,I,A,N;return m=0,n<1048576&&(m-=53,n=qr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(I=1048575&n|0),I<=235662?A=0:I<767610?A=1:(A=0,m+=1,n-=1048576),o=Hr(i=(w=(e=ae(e,n))-(f=oe[A]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ae(0,t+=A<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),c=Hr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(l=Hr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ce[A])-((v=Hr(v=(p=.9617967009544373*l)+g+(s=ue[A])+(d=m),0))-d-s-p),r[0]=v,r[1]=y,r}(be,u,t);if(b=(h=(n-(y=Hr(n,0)))*w[0]+n*w[1])+(d=y*w[0]),Or.assign(b,we,1,0),m=Wr(we[0]),I=Wr(we[1]),m>=1083179008){if(0!=(m-1083179008|I))return g*de*de;if(h+8008566259537294e-32>b-d)return g*de*de}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|I))return g*he*he;if(h<=b-d)return g*he*he}return g*(b=ye(m,d,h))}var Ie=n.NEGATIVE_INFINITY;function Ae(e){var n,t,i,a,o,u,c;return r(e)||e<0?NaN:0===e?Ie:(o=0,(t=qr(e))<1048576&&(o-=54,t=qr(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,u=o+=(a=(t&=1048575)+614244&1048576|0)>>20|0,i=function(r){var e,n,t,i,a,o,u,c,f,s,l;return a=r-1,(1048575&2+(i=qr(r)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(s=(i&=1048575)-398458|0,l=440401-i|0,n=(f=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=t+n,(s|=l)>0?o*((e=.5*a*a)+c)-e:o*(c-a))}(e=ae(e,t|1072693248^a)),c=3694239077158931e-28*u+25082946711645275e-27*((e-=1)+i),(c+=.4342944818781689*(e-(n=Hr(e,0))+i)+.4342944818781689*n)+.30102999566361177*u))}var Ne=n.NEGATIVE_INFINITY;var _e=.6931471803691238,Ee=1.9082149292705877e-10;function Te(e){var n,t,i,a,o,u,c,f,s,l,p,g;return 0===e?Ne:r(e)||e<0?NaN:(o=0,(t=qr(e))<1048576&&(o-=54,t=qr(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,c=(e=ae(e,t|1072693248^f))-1,(1048575&2+t)<3?0===c?0===o?0:o*_e+o*Ee:(u=c*c*(.5-.3333333333333333*c),0===o?c-u:o*_e-(u-o*Ee-c)):(f=t-398458|0,s=440401-t|0,a=(p=(g=(l=c/(2+c))*l)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*_e-(n-(l*(n+u)+o*Ee)-c)):0===o?c-l*(c-u):o*_e-(l*(c-u)-o*Ee-c))))}var Fe=Math.round;function Se(e,n,t){var o,u,c,f;if(r(e)||r(n)||n<1||i(n))return NaN;if(arguments.length>2){if(r(t)||t<=0||i(t))return NaN;o=t}else o=10;return i(e)||0===e?e:(u=10===o?Ae(s(e)):2===o?pe(s(e)):Te(s(e))/Te(o),i(c=me(o,s(u=a(u-n+1))))||i(f=u<0?Fe(e*c)/c:Fe(e/c)*c)?e:f)}export{Se as default};
//# sourceMappingURL=mod.js.map
