"use strict";var N=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=N(function(I,l){
var f=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-pow/dist'),d=require('@stdlib/math-base-special-log10/dist'),o=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-floor/dist'),m=require('@stdlib/number-float64-base-exponent/dist'),q=require('@stdlib/math-base-special-round/dist');function h(r,e,s){var u,i,a,t;if(f(r)||f(e)||e<1||n(e))return NaN;if(arguments.length>2){if(f(s)||s<=0||n(s))return NaN;u=s}else u=10;return n(r)||r===0||(u===10?i=d(v(r)):u===2?i=m(v(r)):i=o(v(r))/o(u),i=g(i-e+1),a=c(u,v(i)),n(a))||(i<0?t=q(r*a)/a:t=q(r/a)*a,n(t))?r:t}l.exports=h
});var w=p();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
