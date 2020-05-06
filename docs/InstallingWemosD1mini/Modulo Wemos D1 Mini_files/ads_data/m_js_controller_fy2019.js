(function(_){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var ba,ka,la,na,qa,ta,C,Ka,La,Ma,Oa,Ta,Za,$a,bb,db,eb,fb,pb,qb,rb,ub,wb,vb,xb,yb,zb,Cb,Gb,Hb,Nb,Ob,Rb,Tb,Ub,Wb,Zb,$b,ac,bc,cc,dc,ec,fc,ic,kc,lc,nc,oc,sc,qc,tc,xc,yc,Ac,Dc,Kc,Mc,Nc,Oc;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};_.r=function(a,b,c){a=a.split(".");c=c||_.m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}; 
_.ca=function(){}; 
_.da=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"== 
b&&"undefined"==typeof a.call)return"object";return b};_.fa=function(a){return"function"==_.da(a)};_.ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};ka=function(a,b,c){return a.call.apply(a.bind,arguments)};la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}; 
_.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.t=ka:_.t=la;return _.t.apply(null,arguments)};_.v=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};_.y=function(a,b){function c(){}c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c;a.prototype.constructor=a};_.ma=function(a,b,c){Array.prototype.forEach.call(a,b,c)}; 
na=function(a,b){return Array.prototype.filter.call(a,b,void 0)};_.oa=function(a,b){b=Array.prototype.indexOf.call(a,b,void 0);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};qa=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};ta=function(a,b){this.g=a===ra&&b||"";this.h=sa};_.ua=function(a){return a instanceof ta&&a.constructor===ta&&a.h===sa?a.g:"type_error:Const"}; 
_.z=function(a){return new ta(ra,a)};_.A=function(a,b){this.h=a===_.wa&&b||"";this.j=xa};_.ya=function(a){if(a instanceof _.A&&a.constructor===_.A&&a.j===xa)return a.h;_.da(a);return"type_error:TrustedResourceUrl"};_.B=function(a,b){this.h=a===_.za&&b||"";this.j=Aa};_.Ba=function(a){if(a instanceof _.B&&a.constructor===_.B&&a.j===Aa)return a.h;_.da(a);return"type_error:SafeUrl"}; 
_.Da=function(a){if(a instanceof _.B)return a;a="object"==typeof a&&a.S?a.b():String(a);Ca.test(a)||(a="about:invalid#zClosurez");return new _.B(_.za,a)};C=function(a){return-1!=Ea.indexOf(a)};_.Ga=function(){this.h="";this.l=Fa;this.j=null};_.Ha=function(a){if(a instanceof _.Ga&&a.constructor===_.Ga&&a.l===Fa)return a.h;_.da(a);return"type_error:SafeHtml"};_.Ia=function(a,b){var c=new _.Ga;c.h=a;c.j=b;return c};Ka=function(a){var b=new _.A(_.wa,_.ua(Ja));a.src=_.ya(b).toString()}; 
La=function(){return C("iPhone")&&!C("iPod")&&!C("iPad")};Ma=function(a){Ma[" "](a);return a};_.Na=function(a,b){try{return Ma(a[b]),!0}catch(c){}return!1};Oa=function(){var a=_.m.document;return a?a.documentMode:void 0};_.D=function(){}; 
_.F=function(a,b,c){a.b=null;b||(b=[]);a.w=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||Pa&&d instanceof Uint8Array)){a.l=b-a.j;a.h=d;break a}}a.l=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.g[d]=a.g[d]||Qa;else{var e=a.l+a.j;a.g[e]||(a.h=a.g[e]={});a.h[d]=a.h[d]||Qa}};_.Ra=function(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c===Qa?a.g[b]=[]:c}if(a.h)return c=a.h[b],c===Qa?a.h[b]=[]:c}; 
_.G=function(a,b,c){a=_.Ra(a,b);return null==a?c:a};_.H=function(a,b){a=_.Ra(a,b);a=null==a?a:!!a;return null==a?!1:a};_.Sa=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.Ra(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};Ta=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=_.Ra(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==Qa&&(b=a.b[c]=[]);return b};_.Ua=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if("array"==_.da(c))for(var d=0;d<c.length;d++)c[d]&&_.Ua(c[d]);else c&&_.Ua(c)}return a.g}; 
_.Wa=function(a){_.F(this,a,Va)};_.Xa=function(a){return _.G(a,22,"")};_.Ya=function(a){return _.G(a,23,"")};Za=function(a){_.F(this,a,null)};$a=function(a){_.F(this,a,null)};_.ab=function(a){_.F(this,a,null)};bb=function(a){_.F(this,a,null)};db=function(a){_.F(this,a,cb)};eb=function(a){return Ta(a,_.Wa,1)};_.I=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};fb=function(a,b){this.b=void 0!==a?a:0;this.g=void 0!==b?b:0}; 
_.gb=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};_.ib=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};_.jb=function(a,b){return b?a?a+"&"+b:b:a};_.kb=function(a,b){if(!b)return a;a=_.ib(a);a[1]=_.jb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}; 
_.lb=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)_.lb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};_.nb=function(a){var b=[],c;for(c in a)_.lb(c,a[c],b);return b.join("&")};_.ob=function(a,b){b=_.nb(b);return _.kb(a,b)};pb=function(a){try{return!!a&&null!=a.location.href&&_.Na(a,"foo")}catch(b){return!1}};qb=function(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}; 
_.sb=function(a,b,c=null){rb(a,b,c)};rb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);d.removeEventListener&&d.removeEventListener("load",e,!1);d.removeEventListener&&d.removeEventListener("error",e,!1)};_.I(d,"load",e);_.I(d,"error",e)}d.src=b;a.google_image_requests.push(d)};_.tb=function(a,b){"about:invalid#zClosurez"===(a instanceof _.B?a:_.Da(a)).b()&&b(String(a))};ub=function(a,b){const c={};c[a]=b;return[c]}; 
wb=function(a,b,c,d,e){const f=[];qb(a,function(g,h){(g=vb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)};vb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(vb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(wb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}; 
xb=function(a,b,c,d){a.b.push(b);a.g[b]=ub(c,d)};yb=function(a){if(!a.j)return a.v;let b=1;for(const c in a.g)b=c.length>b?c.length:b;return a.v-a.j.length-b-a.h.length-1}; 
zb=function(a,b,c,d){b=b+"//"+c+d;let e=yb(a)-d.length;if(0>e)return"";a.b.sort(function(g,h){return g-h});d=null;c="";for(var f=0;f<a.b.length;f++){const g=a.b[f],h=a.g[g];for(let k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}let n=wb(h[k],a.h,a.w);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.h;break}a.l&&(c=e,n[c-1]==a.h&&--c,b+=n.substr(0,c),c=a.h,e=0);d=null==d?g:d}}}f="";a.j&&null!=d&&(f=c+a.j+"="+(a.B||d));return b+f};Cb=function(){var a=_.Ab,b=Bb.google_srt;0<=b&&1>=b&&(a.b=b)}; 
_.Eb=function(a,b,c,d,e,f){if((d?a.b:Math.random())<(e||a.g))try{let g;c instanceof Db?g=c:(g=new Db,qb(c,(k,n)=>{var q=g,p=q.A++;k=ub(n,k);q.b.push(p);q.g[p]=k}));const h=zb(g,a.l,a.h,a.j+b+"&");h&&("undefined"===typeof f?_.sb(_.m,h):_.sb(_.m,h,f))}catch(g){}};Gb=function(a){a&&J&&Fb()&&(J.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),J.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}; 
Hb=function(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}; 
_.Jb=function(a,b,c){let d,e;try{a.b&&a.b.b?(e=a.b.start(b.toString(),3),d=c(),a.b.end(e)):d=c()}catch(f){c=a.v;try{Gb(e),c=a.w(b,new Ib(f,{message:Hb(f)}),void 0,void 0)}catch(g){a.h(217,g)}if(!c)throw f;}return d}; 
_.Kb=function(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{ka:a.slice(0,b)+"&act=1"+a.slice(b),G:decodeURIComponent(c[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;let d="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),d=a.slice(b)));return{ka:c+"&act=1"+d,G:c+"&dct=1"+d}}return null};Nb=function(a){const {V:b,ba:c}=_.Lb(a.href);Mb(a,b);return c}; 
Ob=function(a,b,c=-1){if(b)if(300>Date.now()-c)a=!1;else if(b=a.getAttribute("data-orig-async-clicktrack-url")){const {V:d,ba:e}=_.Lb(b);Mb(a,d);a=e}else a.setAttribute("data-orig-async-clicktrack-url",a.href),a=Nb(a);else a=Nb(a);return a};_.Lb=function(a){const b=_.Kb(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(_.Pb(b.ka,"&ri=1"),"")?{V:b.G,ba:!0}:{V:_.Pb(a,"&ri=2"),ba:!1}:{V:_.Pb(a,"&ri=16"),ba:!1}:{V:a,ba:!1}}; 
_.Pb=function(a,b){const c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};_.Qb=function(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==_.Kb(a)};Rb=function(a){return _.Qb(a.href)||(a.getAttribute("data-orig-async-clicktrack-url")?_.Qb(a.getAttribute("data-orig-async-clicktrack-url")):!1)};Tb=function(a,b,c){let d=b=b.getAttribute("data-original-click-url");if(d)for(let e=0;e<a.F.length;e++)d=Sb(d,b,a.F[e],c);return d};Ub=function(a,b=Date.now()){return b-a.v>_.G(a.b,39,0)}; 
Wb=function(a,b){-1===b.href.indexOf("dbm/clk")&&(Rb(b)||_.H(a.b,38))&&_.Jb(_.Vb,446,()=>{{const c=Date.now();Ub(a,c)&&Ob(b,_.H(a.b,45),a.v)&&(a.v=c)}})}; 
Zb=function(a,b,c,d){if(0!=a.l.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.Xb(d);var f=[];for(let g=0;g<a.l.length;g++){const h=a.l[g](c);if(h){const k=new Promise(n=>{_.sb(_.K,h,n)});f.push(k)}}c=Promise.all(f);f=new Promise(g=>{window.setTimeout(g,2E3)});e&&Promise.race([c,f]).then((0,_.t)(Yb.prototype.aa,a,b,d))}}; 
$b=function(a,b,c){const d=b.href;if(a.h){const e=Date.now(),f=Ub(a,e);if(a.h.b(b,c,a.b,a.A,f))return f&&(a.v=e),!0}else if(_.m.googdlu&&(_.m.googdlu.tryOpenPlayStore&&_.m.googdlu.tryOpenPlayStore(c,d,_.G(a.b,15,""))||_.m.googdlu.tryOpenItunesStore&&_.m.googdlu.tryOpenItunesStore(c,d,_.G(a.b,15,""),_.H(a.b,42),_.H(a.b,43),_.G(a.j,7,""),_.G(a.j,8,""))))return!0;return _.H(a.b,31)&&_.H(a.b,30)&&_.G(a.b,28,"")&&_.m.googdlu&&_.m.googdlu.tryOpenAppUrl?(_.m.googdlu.tryOpenAppUrl(c,d,_.G(a.b,32,""),_.G(a.b, 
28,"")),!0):!1};ac=function(a,b,c,d,e){if(a.h){const f=Ub(a,Date.now()),g=Ta(a.j,$a,23);return a.h.h(b,c,a.b,a.A,e,f,g,d)}return new Promise(f=>{f(!1)})};bc=function(a,b,c){const d=Ta(a.j,$a,23);let e=!1;for(const f of d)if("use_async_for_js_click_handler"===_.G(f,1,"")&&"True"===_.G(f,2,"")){e=!0;break}e&&a.h&&2===a.w?(_.Xb(c),ac(a,b,c,a.w,a.I).then(f=>{f||Wb(a,b)})):$b(a,b,c)||Wb(a,b)};cc=function(a,b,c,d){a.g[d]||(a.g[d]={});a.g[d][c]||(a.g[d][c]=[]);_.I(b,d,(0,_.t)(a.$,a,b,c,d))}; 
dc=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};ec=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};fc=function(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:dc(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b};_.gc=function(a,b){if(a.classList)a.classList.add(b);else if(!fc(a,b)){var c=dc(a);ec(a,c+(0<c.length?" "+b:b))}}; 
_.hc=function(a,b){a.classList?a.classList.remove(b):fc(a,b)&&ec(a,na(a.classList?a.classList:dc(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))};ic=function(a){_.m.setTimeout(function(){throw a;},0)}; 
kc=function(){var a=_.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=_.gb(document,"IFRAME");e.style.display="none";Ka(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(_.Ha(jc));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.t)(function(k){if(("*"==h||k.origin==h)&&k.data== 
g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ya;c.ya=null;e()}};return function(e){d.next={ya:e};d=d.next;b.port2.postMessage(0)}}return function(e){_.m.setTimeout(e,0)}};lc=function(){this.g=this.b=null}; 
nc=function(){var a=mc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.g=null),b.next=null);return b};oc=function(){this.next=this.g=this.b=null};sc=function(a){pc||qc();rc||(pc(),rc=!0);mc.add(a,void 0)};qc=function(){if(_.m.Promise&&_.m.Promise.resolve){var a=_.m.Promise.resolve(void 0);pc=function(){a.then(tc)}}else pc=function(){var b=tc;!_.fa(_.m.setImmediate)||_.m.Window&&_.m.Window.prototype&&!C("Edge")&&_.m.Window.prototype.setImmediate==_.m.setImmediate?(uc||(uc=kc()),uc(b)):_.m.setImmediate(b)}}; 
tc=function(){for(var a;a=nc();){try{a.b.call(a.g)}catch(c){ic(c)}var b=vc;b.l(a);b.g<b.j&&(b.g++,a.next=b.b,b.b=a)}rc=!1};_.L=function(){this.j=this.j;this.h=this.h};_.wc=function(a){_.L.call(this);this.w=1;this.l=[];this.v=0;this.b=[];this.g={};this.B=!!a};xc=function(a,b,c){sc(function(){a.apply(b,c)})}; 
yc=function(a,b){if((null==_.Ra(a.v,28)||!_.H(_.Sa(a.v,Za,28),12))&&a.g[b]&&a.j(b)){a.l.push(b);var c=a.h;a=a.g[b];for(let d=0;d<a.length;d++){const e=a[d],f=e;f.href&&f.setAttribute("data-original-click-url",f.href);cc(c,e,b,"mousedown");cc(c,e,b,"click")}c.M[b]=!0}};_.zc=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){const d=a[b].getAttribute(c);if(d)return d}return null};Ac=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0}; 
Dc=function(a){Bc([a]);a=new Cc(null,[],new db(a));return window.adSlot=a};_.Ec=function(){const a=window.adSlot;return a?a:(_.Vb.h(536,Error("no adslot"),void 0,void 0),Dc(null))};Kc=function(a,b){var c=Fc;const d={};if(!b)return null;d[0]=[b];Gc(Hc,e=>{c[e]&&(d[e]=_.pa(_.Ic(2,c[e],b)))});return new Jc(d,b,a)};Mc=function(a,b){const c=_.Sa(b,bb,16);c&&_.H(c,12)&&_.H(b,5)&&Lc(a,{backgroundColor:"transparent",backgroundImage:"none"})};_.aa=[];_.m=this||self;Nc="closure_uid_"+(1E9*Math.random()>>>0); 
Oc=0;_.O=Date.now||function(){return+new Date};ta.prototype.S=!0;ta.prototype.b=function(){return this.g};var sa={},ra={},Ja=_.z("");var xa;_.A.prototype.S=!0;_.A.prototype.b=function(){return this.h.toString()};_.A.prototype.oa=!0;_.A.prototype.g=ba(2);xa={};_.wa={};_.Pc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Ca,Aa;_.B.prototype.S=!0;_.B.prototype.b=function(){return this.h.toString()};_.B.prototype.oa=!0;_.B.prototype.g=ba(1);Ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Aa={};_.za={};var Ea;a:{var Qc=_.m.navigator;if(Qc){var Rc=Qc.userAgent;if(Rc){Ea=Rc;break a}}Ea=""};_.Ga.prototype.oa=!0;_.Ga.prototype.g=ba(0);_.Ga.prototype.S=!0;_.Ga.prototype.b=function(){return this.h.toString()};var Fa={};_.Ia("<!DOCTYPE html>",0);var jc=_.Ia("",0);_.Ia("<br>",0);_.Sc=qa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Ha(jc);return!b.parentElement});Ma[" "]=_.ca;var Vc,ad,fd;_.Tc=C("Opera");_.Uc=C("Trident")||C("MSIE");Vc=C("Edge");_.Wc=C("Gecko")&&!(-1!=Ea.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge");_.Xc=-1!=Ea.toLowerCase().indexOf("webkit")&&!C("Edge");_.Yc=C("Android");_.Zc=La();_.$c=C("iPad"); 
a:{var bd="",cd=function(){var a=Ea;if(_.Wc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vc)return/Edge\/([\d\.]+)/.exec(a);if(_.Uc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Xc)return/WebKit\/(\S+)/.exec(a);if(_.Tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();cd&&(bd=cd?cd[1]:"");if(_.Uc){var dd=Oa();if(null!=dd&&dd>parseFloat(bd)){ad=String(dd);break a}}ad=bd}_.ed=ad;if(_.m.document&&_.Uc){var gd=Oa();fd=gd?gd:parseInt(_.ed,10)||void 0}else fd=void 0;_.hd=fd;_.id=La()||C("iPod");_.jd=C("iPad");_.kd=C("Android")&&!((C("Chrome")||C("CriOS"))&&!C("Edge")||C("Firefox")||C("FxiOS")||C("Opera")||C("Silk"));var Pa="function"==typeof Uint8Array,Qa=[];_.y(_.Wa,_.D);var Va=[20,33];_.y(Za,_.D);_.y($a,_.D);_.y(_.ab,_.D);_.y(bb,_.D);_.y(db,_.D);var cb=[1,23];_.ld=document;_.K=window;const Hc={fb:0,Hb:1,Ib:45,Jb:46,vb:48,URL:2,Ya:3,Qa:4,Gb:5,Ab:7,nb:8,Wa:9,pb:6,sb:34,gb:13,Ra:14,ob:15,qb:16,rb:40,Eb:47,Mb:29,bb:30,Fb:49,wb:17,Za:18,eb:19,cb:20,Cb:23,Ua:24,zb:25,yb:26,Va:27,xb:28,Lb:39,Kb:31,ab:32,Ta:33,ib:35,tb:36,Sa:37,$a:38,ub:42,Bb:43,Db:44,Xa:50,jb:1E3,kb:1001,lb:1002};_.md=[16,47,49,18,27,28,39];fb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.g=Math.ceil(this.g);return this};fb.prototype.floor=function(){this.b=Math.floor(this.b);this.g=Math.floor(this.g);return this};fb.prototype.round=function(){this.b=Math.round(this.b);this.g=Math.round(this.g);return this};_.Xb=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};var nd=/^((market|itms|intent|itms-appss):\/\/)/i;var Mb;Mb=(a,b)=>{var c=_.od(599);b=b instanceof _.B||!nd.test(b)?b:new _.B(_.za,b);_.tb(b,c);c=b instanceof _.B?b:_.Da(b);a.href=_.Ba(c)};_.od=a=>{var b=`${"http:"===_.K.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=_.ob(b,{id:"unsafeurl",ctx:a,url:c});navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Gc=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},pd=!!window.google_async_iframe_id,Lc;let qd=pd&&window.parent||window;_.ua(_.z("//fonts.googleapis.com/css"));_.Ic=(a,b,c=_.ld)=>{switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.P=(a,b,c=_.ld)=>{switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.Ic(a,b,c),0<a.length)return a[0]}return null}; 
Lc=(a,b)=>{a&&Gc(b,(c,d)=>{a.style[d]=c})};_.rd=a=>{for(const b of a)if("use_refactored_boomerang_click_handler"===_.G(b,1,"")&&"true"===_.G(b,2,"").toLowerCase())return!0;return!1};var Ib=class{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const sd=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var td=class{constructor(a,b){this.b=a;this.g=b}},ud=class{constructor(a,b,c,d,e){this.url=a;this.Ca=!!d;this.depth="number"===typeof e?e:null}};var Db=class{constructor(a,b,c,d,e){this.v=c||4E3;this.h=a||"&";this.w=b||",$";this.j=void 0!==d?d:"trn";this.B=e||null;this.l=!1;this.g={};this.A=0;this.b=[]}};var vd=class{constructor(a,b,c,d){this.l=a;this.h=b;this.j=c;this.g=d;this.b=Math.random()}};let wd=null;var xd=()=>{const a=_.m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.O)()},yd=()=>{const a=_.m.performance;return a&&a.now?a.now():null};var zd=class{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const J=_.m.performance,Ad=!!(J&&J.mark&&J.measure&&J.clearMarks),Fb=qa(()=>{var a;if(a=Ad){var b;if(null===wd){wd="";try{a="";try{a=_.m.top.location.hash}catch(c){a=_.m.location.hash}a&&(wd=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=wd;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
var Bd=class{constructor(a,b){this.events=[];this.g=b||_.m;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.b=Fb()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.b)return null;const c=yd()||xd();a=new zd(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;J&&Fb()&&J.mark(b);return a}end(a){if(this.b&&"number"===typeof a.value){var b=yd()||xd();a.duration=b-a.value;b=`goog_${a.label}_${a.uniqueId}_end`; 
J&&Fb()&&J.mark(b);!this.b||2048<this.events.length||this.events.push(a)}}};_.Cd=class{constructor(a,b,c,d=null){this.j=a;this.A=b;this.v=c;this.g=null;this.w=this.h;this.b=d;this.l=!1}h(a,b,c,d,e){e=e||this.A;let f;try{const w=new Db;w.l=!0;xb(w,1,"context",a);b.error&&b.meta&&b.id||(b=new Ib(b,{message:Hb(b)}));b.msg&&xb(w,2,"msg",b.msg.substring(0,512));var g=b.meta||{};b=g;if(this.g)try{this.g(b)}catch(E){}if(d)try{d(b)}catch(E){}d=w;g=[g];d.b.push(3);d.g[3]=g;{{d=_.m;g=[];b=null;let X;do{var h=d;if(pb(h)){var k=h.location.href;b=h.document&&h.document.referrer||null; 
X=!0}else k=b,b=null,X=!1;g.push(new ud(k||"",h,X));try{d=h.parent}catch(ea){d=null}}while(d&&h!=d);for(let ea=0,N=g.length-1;ea<=N;++ea)g[ea].depth=N-ea;h=_.m;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==g.length-1)for(k=1;k<g.length;++k){var n=g[k];n.url||(n.url=h.location.ancestorOrigins[k-1]||"",n.Ca=!0)}var q=g}let E=new ud(_.m.location.href,_.m,!0,!1);h=null;const x=q.length-1;for(n=x;0<=n;--n){var p=q[n];!h&&sd.test(p.url)&&(h=p);if(p.url&&!p.Ca){E=p;break}}p= 
null;const u=q.length&&q[x].url;0!=E.depth&&u&&(p=q[x]);f=new td(E,p,h)}f.g&&xb(w,4,"top",f.g.url||"");xb(w,5,"url",f.b.url||"");_.Eb(this.j,e,w,this.l,c)}catch(w){try{_.Eb(this.j,e,{context:"ecmserr",rctx:a,msg:Hb(w),url:f&&f.b.url},this.l,c)}catch(E){}}return this.v}};_.Cd.prototype.pinger=ba(3);var Dd;if(pd&&!pb(qd)){let a="."+_.ld.domain;try{for(;2<a.split(".").length&&!pb(qd);)_.ld.domain=a=a.substr(a.indexOf(".")+1),qd=window.parent}catch(b){}pb(qd)||(qd=window)}const Bb=qd,Ed=new Bd(1,Bb);var Fd=()=>{Bb.google_measure_js_timing||(Ed.b=!1,Ed.events!=Ed.g.google_js_reporting_queue&&(Fb()&&_.ma(Ed.events,Gb),Ed.events.length=0))}; 
(()=>{_.Ab=new vd("http:"===_.K.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);"number"!==typeof Bb.google_srt&&(Bb.google_srt=Math.random());Cb();_.Vb=new _.Cd(_.Ab,"jserror",!0,Ed);_.Vb.g=b=>{var c=_.K.jerExpIds;if("array"==_.da(c)&&0!==c.length){var d=b.eid;if(d){d=[...d.split(","),...c];c={};for(var e=0,f=0;f<d.length;){var g=d[f++];var h=g;h=_.ha(h)?"o"+(Object.prototype.hasOwnProperty.call(h,Nc)&&h[Nc]||(h[Nc]=++Oc)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(c, 
h)||(c[h]=!0,d[e++]=g)}d.length=e;b.eid=d.join(",")}else b.eid=c.join(",")}Dd&&(b.jc=Dd);(d=_.K.jerUserAgent)&&(b.useragent=d)};_.Vb.l=!0;"complete"==Bb.document.readyState?Fd():Ed.b&&_.I(Bb,"load",()=>{Fd()});const a=_.ld.currentScript;Dd=a?a.dataset.jc:""})();var Gd=(a,b,c,d,e)=>{c="&"+b+"="+c;const f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?void 0!==e?Gd(a,b,e,d,void 0):a:c};var Sb=(a,b,c,d)=>{b=c(d,b);if(!(b instanceof Array))return a;_.ma(b,e=>{if(2!==e.length&&3!==e.length)return a;a=Gd(a,e[0],e[1],"adurl",e[2])});return a};var Yb=class{constructor(a,b,c){this.b=a;this.j=b;this.h=c;this.F=[];this.l=[];this.M={};this.g={};this.A=this.B=!1;this.w=Hd(this.b);this.I=new Promise(d=>{d(!1)});this.v=-1;a=_.Xa(this.b);b=_.Ya(this.b);c=Ta(this.j,$a,23);this.h&&this.b&&a&&b&&_.rd(c)&&2===Hd(this.b)&&(this.w=2,this.I=this.h.g({url:a,id:a,D:b}))}aa(a,b){this.B=!0;var c=!1;if(b.target){{c=b.target;var d=b.button,e=b.ctrlKey,f=b.shiftKey,g=b.metaKey,h=b.altKey,k=new fb(b.x,b.y);let n;document.createEvent?(n=document.createEvent("MouseEvents"), 
n.initMouseEvent("click",!0,!0,null,0,k.b,k.g,k.b,k.g,e,h,f,g,d,null),c.dispatchEvent?(c.dispatchEvent(n),c=!0):c=!1):c=!1}}!a.href||c||$b(this,a,b)||(Wb(this,a),_.K.top.location=a.href)}$(a,b,c,d){if(this.B)this.B=!1;else{d||(d=_.K.event);this.g[c][b].forEach(e=>{e(d)});if(a.href){const e=Tb(this,a,d.type);e&&(a.href=e)}"click"==c&&(Zb(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||bc(this,a,d))}}};const Hd=a=>_.H(a,31)&&_.G(a,28,"")?1:_.Xa(a)&&_.Ya(a)?_.H(a,44)?3:2:0;var uc;var vc=new class{constructor(a,b,c){this.j=c;this.h=a;this.l=b;this.g=0;this.b=null}get(){let a;0<this.g?(this.g--,a=this.b,this.b=a.next,a.next=null):a=this.h();return a}}(function(){return new oc},function(a){a.reset()},100);lc.prototype.add=function(a,b){var c=vc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};oc.prototype.set=function(a,b){this.b=a;this.g=b;this.next=null};oc.prototype.reset=function(){this.next=this.g=this.b=null};var pc,rc=!1,mc=new lc;_.L.prototype.j=!1;_.L.prototype.la=ba(4);_.L.prototype.H=ba(6);_.y(_.wc,_.L);_.wc.prototype.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};_.wc.prototype.F=function(a){var b=this.b[a];b&&(b=this.g[b],0!=this.v?(this.l.push(a),this.b[a+1]=_.ca):(b&&_.oa(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))}; 
_.wc.prototype.A=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];xc(this.b[g+1],this.b[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.v--,0<this.l.length&&0==this.v)for(;c=this.l.pop();)this.F(c)}}}};_.wc.prototype.H=ba(5);var Id=class{constructor(a,b,c,d,e){this.w=new _.wc;this.g=a;this.g[0]=[b];this.l=[];this.h=new Yb(c,d,e);this.v=d;this.b=c;b=_.Xa(this.b);c=_.Ya(this.b);d=Ta(this.v,$a,23);if(d=e&&this.b&&_.rd(d))d=this.b,d=2===(_.H(d,31)&&_.G(d,28,"")?1:_.Xa(d)&&_.Ya(d)?_.H(d,44)?3:2:0);!d&&b&&c&&e&&(e.canOpenIntents([{url:b,id:b,D:c}],(0,_.t)(this.A,this))||e.canOpenURLs(b,(0,_.t)(this.A,this)));(e=_.P(1,"common_15click_anchor"))?(a[20]=[e],yc(this,20)):(e=_.pa(_.Ic(2,"common_15click_anchor")),0<e.length&&(a[20]= 
e,yc(this,20)))}A(a,b){b=(a=_.Xa(this.b))&&b?b[a]:!1;this.h.A=!!b;this.C(0,"app_installed",!b);this.C(0,"rh-ani",b)}navigationAdPieces(){return this.l}j(){return!0}has(a){return(a=this.g[a])&&0<a.length}listen(a,b,c){const d=this.g[a];if(d){{var e=this.h;c=_.v(c,a,this);const f=("click"==b||"mousedown"==b)&&e.M[a];e.g[b]||(e.g[b]={});e.g[b][a]||(e.g[b][a]=[]);e.g[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.I(d[a],b,c)}}}C(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(let d=0;d<a.length;d++)c?_.hc(a[d], 
b):_.gc(a[d],b)}}getElementsByAdPiece(a){return this.g[a]?this.g[a]:[]}creativeConversionUrl(){return _.G(this.b,6,"")}redirectUrl(){return _.G(this.b,8,"")}getIndex(){return _.G(this.b,2,0)}listenOnObject(a,b){this.w.subscribe(a,b)}fireOnObject(a,b){this.w.A(a,b)}};var Bc=(a=[])=>{_.m.google_logging_queue||(_.m.google_logging_queue=[]);_.m.google_logging_queue.push([10,a])};var Cc=class{constructor(a,b,c){this.A=new _.wc;this.v=a;this.h=b;this.b=c;this.l=[];this.w=!1;this.g=null}forEachAd(a){_.ma(this.h,a)}j(a){this.h.push(a)}B(a){if(a=_.P(1,a))this.v=a;if(0==this.h.length)_.m.css=null;else{for(a=0;a<this.l.length;++a)this.l[a]();this.w=!0}}listenOnObject(a,b){this.A.subscribe(a,b)}fireOnObject(a,b){this.A.A(a,b)}registerFinalizeCallback(a){this.w?a():this.l.push(a)}getSerializedAdSlotData(){return _.Ua(this.b)}getAdsLength(){return this.h.length}getAd(a){return 0<= 
a&&a<this.h.length&&this.h[a].getIndex()==a?this.h[a]:null}getContainer(){return this.v}openSystemBrowser(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1}openAttribution(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1}};var Jc=class extends Id{constructor(a,b,c){super(a,b,c,_.Ec().b,_.Ec().g);for(a=0;a<Jd.length;a++)yc(this,Jd[a])}j(a){return Ac(this,a)||4===a}B(a,b){return this.j(b)?a:""}};var Jd=[1,2,3,4,8,6,40,33,36,37,38,9];let Kd="UNKNOWN",Ld="UNKNOWN",Md=null; 
var Nd=(a,b,c)=>{b.gqid=Kd;b.qqid=Ld;b.com=a;_.Eb(_.Ab,"glaurung",b,!0,c,void 0)},Fc={[1]:"title-link",[2]:"url-link",[3]:"body-link",[4]:"button-link",[8]:"favicon-link",[6]:"image-link",[26]:"price",[23]:"reviews",[43]:"rating-stars",[44]:"reviews-count",[24]:"app-store",[25]:"promo-headline",[33]:"app-icon",[16]:"image-gallery",[40]:"image-gallery-image-link",[36]:"logo-link",[37]:"advertiser-link",[38]:"call-to-action-link",[39]:"video",[42]:"logo",[50]:"badge-box",[9]:"ad-background"},Od=(a, 
b,c)=>{_.P(2,"app-icon-link",b)&&(Fc[33]="app-icon-link");var d=a.b,e=_.P(1,"adunit",b),f=_.P(1,"ads",b);if(!e||!f)return 1;var g={overflow:"hidden"};0==_.G(d,32,0)?(g.width=_.G(d,2,0)+"px",g.height=_.G(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");Lc(e,g);Mc(e,d);Mc(f,d);try{c(f,a)}catch(n){return _.H(d,13)&&(Md=n),2}c=0;d=eb(d);for(e=0;e<d.length;e++){var h=d[e];g="taw"+_.G(h,2,0);f=_.P(1,g,b);if(!f)return 3;f=Kc(h,f);if(!f)return 1;var k=_.K.registerAd; 
k?k(f,g):c=4;_.H(h,11)&&_.K.initAppPromo&&_.K.initAppPromo(f,a);g=f;if(_.H(h,19)&&(h=_.Ra(h,33),0<h.length))for(k=0;k<h.length;k++){const n=(0,_.t)(Jc.prototype.B,g,h[k]);g.h.l.push(n)}a.j(f)}return c};var Pd=class extends Id{constructor(a,b,c){const d=[];d[0]=[c];d[15]=[b];(b=_.P(1,"abgc"))&&(d[27]=[b]);(b=_.P(1,"cbc"))&&(d[28]=[b]);(b=_.P(1,"cta-button-anchor"))&&(d[4]=[b]);super(d,c,a,_.Ec().b,_.Ec().g);yc(this,15);b&&yc(this,4)}};var Qd=class extends Id{constructor(a,b){const c={};c[0]=[b];super(c,b,a,_.Ec().b,_.Ec().g)}};var Rd=class extends Id{constructor(a,b,c){super(a,b,c,_.Ec().b,_.Ec().g);for(a=0;a<Sd.length;a++)yc(this,Sd[a]);this.listen(4,"mouseover",(0,_.t)(this.C,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.t)(this.C,this,0,"onhoverbg",!0))}j(a){return Ac(this,a)||4==a}}; 
var Td={[1]:"rhtitle",[45]:"rhtitleline1",[46]:"rhtitleline2",[48]:"rhlongtitle",[3]:"rhbody",[2]:"rhurl",[4]:"rhbutton",[8]:"rhfavicon",[14]:"rhaddress",[6]:"rhimage",[34]:"rhimagetemplate",[49]:"rh-scrollflow",[16]:"rhimagegallery",[47]:"rhreviewgallery",[29]:"rhviewimagegallery",[30]:"rhcloseimagegalleryview",[31]:"rhtrydemobutton",[32]:"rhclosetrydemoview",[39]:"rhvideo",[9]:"rhbackground",[13]:"rh-icore-empty",[5]:"rhsitelink",[7]:"rhradlink",[17]:"rh-multiframe",[18]:"rh-box-breadcrumbs",[23]:"rhstarratings", 
[24]:"rhstoreicon",[25]:"rhpromotext",[26]:"rhprice",[27]:"abgc",[28]:"cbc",[35]:"rhdemocountdowntimer",[36]:"rhlogo",[1001]:"rhoverlap-imagegallery",[1002]:"rhoverlap-trydemo"},Sd=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];Cc.prototype.forEachAd=Cc.prototype.forEachAd;Cc.prototype.addAd=Cc.prototype.j;Cc.prototype.finalize=Cc.prototype.B;_.r("buildAdSlot",Dc,void 0);_.r("buildGlaurungAds",(a,b,c)=>{const d=(new Date).getTime();let e=1,f=!1;Md=null;try{const g=a.b;f=_.H(g,13);Kd=_.G(g,8,"");Ld=_.G(g,7,"");e=Od(a,b,c)}catch(g){f&&(Md=g),e=1}Nd("bridge",{["r"]:e,["d"]:(new Date).getTime()-d});return e},void 0);_.r("glaurungError",()=>Md,void 0);_.r("glaurungBridge.log",Nd,void 0); 
_.r("glaurungBridge.getAdPieceClassName",a=>Fc[a],void 0);_.r("buildImageAd",function(a,b){if(0>b||b>=eb(a.b).length)a=null;else{{a=eb(a.b)[b];b=_.P(1,"google_image_div");const c=_.P(1,"aw0");a=b&&c?new Pd(a,c,b):null}}return a},void 0);_.r("buildRichmediaAd",function(a,b){return 0>b||b>=eb(a.b).length?null:new Qd(eb(a.b)[b],_.ld.body)},void 0); 
_.r("buildTextAd",(a,b)=>{const c=a.b;if(!(0>b||b>=eb(c).length)){if(0>b||b>=eb(a.b).length)var d=null;else{{d=eb(a.b)[b];const g=_.P(1,"taw"+b);if(g){{var e=g;const h={};h[0]=[e];for(const k in Hc){{var f=Hc[k];const n=Td[f];n&&(h[f]=_.pa(_.Ic(2,n,e)))}}e=h}d=new Rd(e,g,d)}else d=null}}d&&(_.K.registerAd&&_.K.registerAd(d,"taw"+b),a.j(d),_.H(eb(c)[b],11)&&_.K.initAppPromo&&_.K.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});
