// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var i=function(r){return r===e||r===u},f=Math.floor,o=f;var a=function(r){return o(r)===r},c=a;var v=function(r){return c(r/2)};var y=function(r){return v(r>0?r-1:r+1)},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return A&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,U=b;var N=function(r){return U.call(r)},h=Object.prototype.hasOwnProperty;var m=function(r,n){return null!=r&&h.call(r,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",I=m,d=s,F=b;var S=N,g=function(r){var n,t,e;if(null==r)return F.call(r);t=r[d],n=I(r,d);try{r[d]=void 0}catch(n){return F.call(r)}return e=F.call(r),n?r[d]=t:delete r[d],e},H=w()?g:S,O=H,E="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===O(r)},G=j;var L=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var M="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},x=L()?M:W,P=H,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var k=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=H,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=H,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var fr=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var or,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:fr()?ar:cr,uint8:rr};(or=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(or.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=x,wr={HIGH:yr,LOW:lr},br=new C(1),Ur=new Ar(br.buffer),Nr=wr.HIGH,hr=wr.LOW;var mr=function(r,n){return br[0]=n,r[0]=Ur[Nr],r[1]=Ur[hr],r};var sr=function(r,n){return 1===arguments.length?mr([0,0],r):mr(r,n)},Ir=x,dr=!0===pr?0:1,Fr=new C(1),Sr=new Ir(Fr.buffer);var gr=function(r,n){return Fr[0]=r,Sr[dr]=n>>>0,Fr[0]},Hr=gr;var Or=function(r){return 0|r},Er=x,jr=!0===pr?1:0,Tr=new C(1),Gr=new Er(Tr.buffer);var Lr,Mr,Wr=function(r){return Tr[0]=r,Gr[jr]};!0===pr?(Lr=1,Mr=0):(Lr=0,Mr=1);var xr=x,Pr={HIGH:Lr,LOW:Mr},Vr=new C(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,qr=Pr.LOW;var kr=function(r,n){return Yr[_r]=r,Yr[qr]=n,Vr[0]},zr=kr,Br=sr,Cr=Wr,Dr=zr,Jr=[0,0];var Kr=function(r,n){var t,e;return Br(Jr,r),t=Jr[0],t&=2147483647,e=Cr(n),Dr(t|=e&=2147483648,Jr[1])},Qr=y,Rr=Kr,Xr=t,Zr=n;var $r=function(r,n){return n===Xr?Zr:n===Zr?0:n>0?Qr(n)?r:0:Qr(n)?Rr(Zr,r):Zr},rn=Wr;var nn=function(r,n){return(2147483647&rn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},tn=p,en=n;var un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===en)?0:en},fn=x,on=!0===pr?1:0,an=new C(1),cn=new fn(an.buffer);var vn=function(r,n){return an[0]=r,cn[on]=n>>>0,an[0]};var yn=Wr,ln=Hr,pn=vn,An=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=[1,1.5],bn=[0,.5849624872207642],Un=[0,1.350039202129749e-8];var Nn=Hr,hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var mn=i,sn=r,In=p;var dn=function(r,n){return sn(n)||mn(n)?(r[0]=n,r[1]=0,r):0!==n&&In(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Fn=Wr;var Sn=function(r){var n=Fn(r);return(n=(2146435072&n)>>>20)-1023|0},gn=Sn,Hn=n,On=t,En=r,jn=i,Tn=Kr,Gn=function(r,n){return 1===arguments.length?dn([0,0],r):dn(r,n)},Ln=gn,Mn=sr,Wn=zr,xn=[0,0],Pn=[0,0];var Vn=function(r,n){var t,e;return 0===n||0===r||En(r)||jn(r)?r:(Gn(xn,r),n+=xn[1],(n+=Ln(r=xn[0]))<-1074?Tn(0,r):n>1023?r<0?On:Hn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Mn(Pn,r),t=Pn[0],t&=2148532223,e*Wn(t|=n+1023<<20,Pn[1])))};var Yn=Wr,_n=vn,qn=Hr,kn=Or,zn=Vn,Bn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Cn=r,Dn=y,Jn=i,Kn=a,Qn=l,Rn=p,Xn=sr,Zn=Hr,$n=Or,rt=t,nt=n,tt=$r,et=nn,ut=un,it=function(r,n,t){var e,u,i,f,o,a,c,v,y,l,p,A,w,b,U,N,h,m,s,I;return m=0,t<1048576&&(m-=53,t=yn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(s=1048575&t|0),s<=235662?I=0:s<767610?I=1:(I=0,m+=1,t-=1048576),e=524288+(t>>1|536870912),o=(h=1/((n=pn(n,t))+(c=wn[I])))*((N=n-c)-(f=ln(u=N*h,0))*(a=pn(0,e+=I<<18))-f*(n-(a-c))),U=(i=u*u)*i*An(i),a=ln(a=3+(i=f*f)+(U+=o*(f+u)),0),w=(p=-7.028461650952758e-9*(y=ln(y=(N=f*a)+(h=o*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(y-N))+Un[I])-((A=ln(A=(l=.9617967009544373*y)+p+(v=bn[I])+(b=m),0))-b-v-l),r[0]=A,r[1]=w,r},ft=function(r,n){var t,e,u,i,f;return t=(f=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*hn(u)))-((e=Nn(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r},ot=function(r,n,t){var e,u,i,f,o,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=_n(0,e)),a=(o=.6931471805599453*(t-((i=qn(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(f=.6931471824645996*i)+o)-f),u=c-(i=c*c)*Bn(i),r=Yn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=kn(r),c=(r+=v<<20>>>0)>>20<=0?zn(c,v):_n(c,r)},at=1e300,ct=1e-300,vt=[0,0],yt=[0,0];var lt=function r(n,t){var e,u,i,f,o,a,c,v,y,l,p,A,w,b;if(Cn(n)||Cn(t))return NaN;if(Xn(vt,t),o=vt[0],0===vt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Qn(n);if(-.5===t)return 1/Qn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Jn(t))return ut(n,t)}if(Xn(vt,n),f=vt[0],0===vt[1]){if(0===f)return tt(n,t);if(1===n)return 1;if(-1===n&&Dn(t))return-1;if(Jn(n))return n===rt?r(-0,-t):t<0?0:nt}if(n<0&&!1===Kn(t))return(n-n)/(n-n);if(i=Rn(n),e=2147483647&f|0,u=2147483647&o|0,c=o>>>31|0,a=(a=f>>>31|0)&&Dn(t)?-1:1,u>1105199104){if(u>1139802112)return et(n,t);if(e<1072693247)return 1===c?a*at*at:a*ct*ct;if(e>1072693248)return 0===c?a*at*at:a*ct*ct;p=ft(yt,i)}else p=it(yt,i,e);if(l=(t-(v=Zn(t,0)))*p[0]+t*p[1],y=v*p[0],Xn(vt,A=l+y),w=$n(vt[0]),b=$n(vt[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*at*at;if(l+8008566259537294e-32>A-y)return a*at*at}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*ct*ct;if(l<=A-y)return a*ct*ct}return a*(A=ot(w,y,l))},pt=lt;var At=Wr,wt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},bt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))};var Ut=Wr,Nt=vn,ht=Hr,mt=r,st=t,It=function(r){var n,t,e,u,i,f,o,a,c,v;return u=r-1,(1048575&2+(e=At(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(c=(e&=1048575)-398458|0,v=440401-e|0,t=(a=(f=(i=u/(2+u))*i)*f)*wt(a),o=f*bt(a)+t,(c|=v)>0?i*((n=.5*u*u)+o)-n:i*(o-u))};var dt=function(r){var n,t,e,u,i,f,o;return mt(r)||r<0?NaN:0===r?st:(i=0,(t=Ut(r))<1048576&&(i-=54,t=Ut(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,r=Nt(r,(t&=1048575)|1072693248^(u=t+614244&1048576|0)),f=i+=u>>20|0,e=It(r),o=3694239077158931e-28*f+25082946711645275e-27*((r-=1)+e),(o+=.4342944818781689*(r-(n=ht(r,0))+e)+.4342944818781689*n)+.30102999566361177*f))};var Ft=Wr,St=vn,gt=r,Ht=t,Ot=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Et=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},jt=.6931471803691238,Tt=1.9082149292705877e-10;var Gt=function(r){var n,t,e,u,i,f,o,a,c,v,y;return 0===r?Ht:gt(r)||r<0?NaN:(u=0,(t=Ft(r))<1048576&&(u-=54,t=Ft(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=St(r,t|1072693248^o))-1,(1048575&2+t)<3?0===f?0===u?0:u*jt+u*Tt:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*jt-(i-u*Tt-f)):(o=t-398458|0,a=440401-t|0,e=(v=(y=(c=f/(2+f))*c)*y)*Ot(v),i=y*Et(v)+e,(o|=a)>0?(n=.5*f*f,0===u?f-(n-c*(n+i)):u*jt-(n-(c*(n+i)+u*Tt)-f)):0===u?f-c*(f-i):u*jt-(c*(f-i)-u*Tt-f))))},Lt=Math.round;function Mt(n,t,e){var u,o,a,c;if(r(n)||r(t)||t<1||i(t))return NaN;if(arguments.length>2){if(r(e)||e<=0||i(e))return NaN;u=e}else u=10;return i(n)||0===n?n:(o=10===u?dt(p(n)):2===u?gn(p(n)):Gt(p(n))/Gt(u),o=f(o-t+1),a=pt(u,p(o)),i(a)?n:(c=o<0?Lt(n*a)/a:Lt(n/a)*a,i(c)?n:c))}export{Mt as default};
//# sourceMappingURL=mod.js.map
