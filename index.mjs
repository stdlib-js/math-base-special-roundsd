// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log10@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.1.0-esm/index.mjs";function l(l,h,j){var o,p,b,v;if(s(l)||s(h)||h<1||e(h))return NaN;if(arguments.length>2){if(s(j)||j<=0||e(j))return NaN;o=j}else o=10;return e(l)||0===l?l:(p=10===o?i(n(l)):2===o?d(n(l)):m(n(l))/m(o),p=r(p-h+1),b=t(o,n(p)),e(b)?l:(v=p<0?a(l*b)/b:a(l/b)*b,e(v)?l:v))}export{l as default};
//# sourceMappingURL=index.mjs.map
