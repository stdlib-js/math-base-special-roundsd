"use strict";var N=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var p=N(function(I,l){
var f=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-pow/dist'),d=require('@stdlib/math-base-special-log10/dist'),o=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-floor/dist'),m=require('@stdlib/number-float64-base-exponent/dist'),q=require('@stdlib/math-base-special-round/dist');function h(r,e,u){var a,i,n,t;if(f(r)||f(e)||e<1||s(e))return NaN;if(arguments.length>2){if(f(u)||u<=0||s(u))return NaN;a=u}else a=10;return s(r)||r===0||(a===10?i=d(v(r)):a===2?i=m(v(r)):i=o(v(r))/o(a),i=g(i-e+1),n=c(a,v(i)),s(n))||(i<0?t=q(r*n)/n:t=q(r/n)*n,s(t))?r:t}l.exports=h
});var w=p();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
