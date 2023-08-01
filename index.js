// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var o=Math.floor;function i(r){return o(r)===r}function u(r){return i(r/2)}function f(r){return u(r>0?r-1:r+1)}var a=Math.sqrt;function c(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty,p=Object.prototype,v=p.toString,s=p.__defineGetter__,b=p.__defineSetter__,d=p.__lookupGetter__,w=p.__lookupSetter__,A=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?y:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(d.call(r,n)||w.call(r,n)?(e=r.__proto__,r.__proto__=p,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(r,n,t.get),u&&b&&b.call(r,n,t.set),r};function _(r,n,t){A(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var m,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",j=g&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return h.call(r);t=r[N],i=N,n=null!=(o=r)&&U.call(o,i);try{r[N]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[N]=t:delete r[N],e}:function(r){return h.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,L="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:W,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new x(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}_(nr,"assign",rr);var tr=!0===K?0:1,er=new x(1),or=new F(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var fr,ar,cr=2147483647,lr=!0===K?1:0,yr=new x(1),pr=new F(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===K?(fr=1,ar=0):(fr=0,ar=1);var sr={HIGH:fr,LOW:ar},br=new x(1),dr=new F(br.buffer),wr=sr.HIGH,Ar=sr.LOW;function _r(r,n){return dr[wr]=r,dr[Ar]=n,br[0]}var mr=[0,0];function gr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=cr,e=vr(n),_r(t|=e&=2147483648,mr[1])}var hr=!0===K?1:0,Ur=new x(1),Nr=new F(Ur.buffer);function jr(r,n){return Ur[0]=r,Nr[hr]=n>>>0,Ur[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(n,t,o,i){return r(n)||e(n)?(t[i]=n,t[i+o]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+o]=-52,t):(t[i]=n,t[i+o]=0,t)}function Hr(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Ir|0}_((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Gr=[0,0],Pr=[0,0],xr=1048575,Lr=1048576;function Mr(o,i,u){var f,a,c,l,y,p,v,s,b,d,w,A,_,m;return b=((s=o&cr|0)>>20)-Ir|0,v=0,s>1071644672&&(a=jr(0,((v=o+(Lr>>b+1)>>>0)&~(xr>>(b=((v&cr)>>20)-Ir|0)))>>>0),v=(v&xr|Lr)>>20-b>>>0,o<0&&(v=-v),i-=a),o=ur(o=vr(p=1-((p=(c=.6931471824645996*(a=ir(a=u+i,0)))+(l=.6931471805599453*(u-(a-i))+-1.904654299957768e-9*a))*(f=p-(a=p*p)*(0===(d=a)?.16666666666666602:.16666666666666602+d*(d*(6613756321437934e-20+d*(4.1381367970572385e-8*d-16533902205465252e-22))-.0027777777777015593)))/(f-2)-((y=l-(p-c))+p*y)-p))),(o+=v<<20>>>0)>>20<=0?(w=p,p=0===(A=v)||0===w||r(w)||e(w)?w:(Tr(w,Gr,1,0),A+=Gr[1],(A+=Hr(w=Gr[0]))<-1074?gr(0,w):A>1023?w<0?t:n:(A<=-1023?(A+=52,m=2220446049250313e-31):m=1,nr.assign(w,Pr,1,0),_=Pr[0],_&=2148532223,m*_r(_|=A+Ir<<20,Pr[1])))):p=jr(p,o),p}var Vr=1083179008,Wr=1e300,kr=1e-300,Yr=[0,0],qr=[0,0];function Cr(o,u){var l,y,p,v,s,b,d,w,A,_,m,g,h,U;if(r(o)||r(u))return NaN;if(nr.assign(u,Yr,1,0),s=Yr[0],0===Yr[1]){if(0===u)return 1;if(1===u)return o;if(-1===u)return 1/o;if(.5===u)return a(o);if(-.5===u)return 1/a(o);if(2===u)return o*o;if(3===u)return o*o*o;if(4===u)return(o*=o)*o;if(e(u))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(o,u)}if(nr.assign(o,Yr,1,0),v=Yr[0],0===Yr[1]){if(0===v)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?gr(n,r):n}(o,u);if(1===o)return 1;if(-1===o&&f(u))return-1;if(e(o))return o===t?Cr(-0,-u):u<0?0:n}if(o<0&&!1===i(u))return(o-o)/(o-o);if(p=c(o),l=v&cr|0,y=s&cr|0,d=s>>>31|0,b=(b=v>>>31|0)&&f(u)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(vr(r)&cr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,u);if(l<1072693247)return 1===d?b*Wr*Wr:b*kr*kr;if(l>1072693248)return 0===d?b*Wr*Wr:b*kr*kr;m=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(qr,p)}else m=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,U;return m=0,t<Or&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-Ir|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Or),u=ir(o=(A=(n=jr(n,t))-(c=Sr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=jr(0,e+=h<<18),w=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ir(a=3+(i=u*u)+(w+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=ir(y=(A=u*a)+(_=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Fr[h])-((s=ir(s=(p=.9617967009544373*y)+v+(l=Er[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(qr,p,l);if(g=(_=(u-(w=ir(u,0)))*m[0]+u*m[1])+(A=w*m[0]),nr.assign(g,Yr,1,0),h=ur(Yr[0]),U=ur(Yr[1]),h>=Vr){if(0!=(h-Vr|U))return b*Wr*Wr;if(_+8008566259537294e-32>g-A)return b*Wr*Wr}else if((h&cr)>=1083231232){if(0!=(h-3230714880|U))return b*kr*kr;if(_<=g-A)return b*kr*kr}return b*(g=Mr(h,A,_))}var zr=1048575,Br=.4342944818781689;function Dr(n){var e,o,i,u,f,a,c;return r(n)||n<0?NaN:0===n?t:(f=0,(o=vr(n))<1048576&&(f-=54,o=vr(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-Ir|0,a=f+=(u=614244+(o&=1048575)&1048576|0)>>20|0,i=function(r){var n,t,e,o,i,u,f,a,c,l,y;return o=vr(r),i=r-1,(zr&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=zr)-398458|0,y=440401-o|0,t=(c=(f=(u=i/(2+i))*u)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=y)>0?u*((n=.5*i*i)+a)-n:u*(a-i))}(n=jr(n,o|1072693248^u)),c=3694239077158931e-28*a+25082946711645275e-27*((n-=1)+i),(c+=(n-(e=ir(n,0))+i)*Br+e*Br)+.30102999566361177*a))}var Jr=.6931471803691238,Kr=1.9082149292705877e-10,Qr=1048575;function Rr(n){var e,o,i,u,f,a,c,l,y,p,v,s;return 0===n?t:r(n)||n<0?NaN:(f=0,(o=vr(n))<1048576&&(f-=54,o=vr(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-Ir|0,f+=(l=614244+(o&=Qr)&1048576|0)>>20|0,c=(n=jr(n,o|1072693248^l))-1,(Qr&2+o)<3?0===c?0===f?0:f*Jr+f*Kr:(a=c*c*(.5-.3333333333333333*c),0===f?c-a:f*Jr-(a-f*Kr-c)):(l=o-398458|0,y=440401-o|0,u=(v=(s=(p=c/(2+c))*p)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),i=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),a=i+u,(l|=y)>0?(e=.5*c*c,0===f?c-(e-p*(e+a)):f*Jr-(e-(p*(e+a)+f*Kr)-c)):0===f?c-p*(c-a):f*Jr-(p*(c-a)-f*Kr-c))))}var Xr=Math.round;return function(n,t,i){var u,f,a,l;if(r(n)||r(t)||t<1||e(t))return NaN;if(arguments.length>2){if(r(i)||i<=0||e(i))return NaN;u=i}else u=10;return e(n)||0===n?n:(f=10===u?Dr(c(n)):2===u?Hr(c(n)):Rr(c(n))/Rr(u),e(a=Cr(u,c(f=o(f-t+1))))||e(l=f<0?Xr(n*a)/a:Xr(n/a)*a)?n:l)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).roundsd=n();
//# sourceMappingURL=index.js.map
