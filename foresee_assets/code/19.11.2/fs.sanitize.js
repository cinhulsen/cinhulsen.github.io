/***************************************
 * @preserve
 * Copyright (c) 2019 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: HTML Sanitizer
 * Version: 19.11.2
 * Built: November 07, 2019, 12:47:06 CST
 ***************************************/
_fsDefine(["fs","exports"],function(e,t){
/**
 * @preserve
 * DOMPurify https://github.com/cure53/DOMPurify
 *
 * (C) 2015 Mario Heiderich
 * (C) 2019 Verint Systems, Inc. (modified for brevity)
 */
var n=Object.hasOwnProperty,r=Object.setPrototypeOf,o=("undefined"!=typeof Reflect&&Reflect).apply;o||(o=function(e,t,n){return e.apply(t,n)});var i=Object.freeze||function(e){return e};function a(e,t){r&&r(e,null);for(var n=t.length;n--;){var o=t[n];if("string"==typeof o){var i=o.toLowerCase();i!==o&&(Object.isFrozen(t)||(t[n]=i),o=i)}e[o]=!0}return e}function c(e){var t,r={};for(t in e)o(n,e,[t])&&(r[t]=e[t]);return r}var l=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),u=i(["#text"]),d=i(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),s=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.seal||function(e){return e},p=f(/^data-[\-\w.\u00B7-\uFFFF]/),m=f(/^aria-[\-\w]+$/),h=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),T=f(/^(?:\w+script|data):/i),g=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g);var y=Array.prototype.slice,b=window.document,v=!1,A=!1,w=window.document,E=window,L=E.DocumentFragment,_=E.HTMLTemplateElement,O=E.Node,D=E.NodeFilter,N=E.NamedNodeMap,R=void 0===N?window.NamedNodeMap||window.MozNamedAttrMap:N,M=E.Text,x=E.Comment,S=E.DOMParser;if("function"==typeof _){var C=w.createElement("template");C.content&&C.content.ownerDocument&&(w=C.content.ownerDocument)}var H,F=w,I=F.implementation,k=F.createNodeIterator,P=F.getElementsByTagName,U=F.createDocumentFragment,j=b.importNode,W=I&&void 0!==I.createHTMLDocument&&9!==w.documentMode,z=p,B=m,G=T,q=g,K=h,Y=null,$=a({},[].concat(l,u)),X=null,J=a({},[].concat(d,s)),Q=null,Z=null,V=!0,ee=!0,te=!1,ne=!1,re=!1,oe=!1,ie=!1,ae=!1,ce=!1,le=!0,ue=!0,de=!1,se={},fe=a({},["audio","head","math","script","style","template","svg","video"]),pe=a({},["audio","video","img","source","image"]),me=null,he=a({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Te=null,ge=w.createElement("form"),ye=function(e){try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},be=function(e,t){t.removeAttribute(e)},ve=function(e){var t,n;if(oe)e="<remove></remove>"+e;else{var r=e.match(/^[\s]+/);(n=r&&r[0])&&(e=e.slice(n.length))}if(v)try{t=(new S).parseFromString(e,"text/html")}catch(i){}if(A&&a(Q,["title"]),!t||!t.documentElement){var o=(t=I.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=e}return n&&t.body.insertBefore(w.createTextNode(n),t.body.childNodes[0]||null),P.call(t,re?"html":"body")[0]};W&&(!function(){try{ve('<svg><p><textarea><img src="</textarea><img src=x onerror=1//">').querySelector("svg img")&&(v=!0)}catch(e){}}(),function(){try{ve("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(A=!0)}catch(e){}}(),Te&&Te===H||(H&&"object"==typeof H||(H={}),Y="ALLOWED_TAGS"in H?a({},H.ALLOWED_TAGS):$,X="ALLOWED_ATTR"in H?a({},H.ALLOWED_ATTR):J,me="ADD_URI_SAFE_ATTR"in H?a({},H.ADD_URI_SAFE_ATTR):he,Q="FORBID_TAGS"in H?a({},H.FORBID_TAGS):{},Z="FORBID_ATTR"in H?a({},H.FORBID_ATTR):{},se="USE_PROFILES"in H&&H.USE_PROFILES,V=!1!==H.ALLOW_ARIA_ATTR,ee=!1!==H.ALLOW_DATA_ATTR,te=H.ALLOW_UNKNOWN_PROTOCOLS||!1,ne=H.SAFE_FOR_JQUERY||!1,re=H.WHOLE_DOCUMENT||!1,ie=H.RETURN_DOM||!1,ae=H.RETURN_DOM_FRAGMENT||!1,ce=H.RETURN_DOM_IMPORT||!1,oe=H.FORCE_BODY||!1,le=!1!==H.SANITIZE_DOM,ue=!1!==H.KEEP_CONTENT,de=H.IN_PLACE||!1,K=H.ALLOWED_URI_REGEXP||K,ae&&(ie=!0),se&&(Y=a({},[].concat(u)),X=[],!0===se.html&&(a(Y,l),a(X,d))),H.ADD_TAGS&&(Y===$&&(Y=c(Y)),a(Y,H.ADD_TAGS)),H.ADD_ATTR&&(X===J&&(X=c(X)),a(X,H.ADD_ATTR)),H.ADD_URI_SAFE_ATTR&&a(me,H.ADD_URI_SAFE_ATTR),ue&&(Y["#text"]=!0),re&&a(Y,["html","head","body"]),Y.table&&a(Y,["tbody"]),i&&i(H),Te=H));var Ae=function(e){return k.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,function(){return D.FILTER_ACCEPT},!1)},we=function(e){return"object"==typeof O?e instanceof O:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ee=function(e){if(!((t=e)instanceof M||t instanceof x||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof R&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute))return ye(e),!0;var t,n=e.nodeName.toLowerCase();if(!Y[n]||Q[n]){if(ue&&!fe[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",r)}catch(o){}return ye(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)?(ye(e),!0):"noembed"===n&&e.innerHTML.match(/<\/noembed/i)?(ye(e),!0):(!ne||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),!1)},Le=function(e,t,n){if(le&&("id"===t||"name"===t)&&(n in w||n in ge))return!1;if(ee&&z.test(t));else if(V&&B.test(t));else{if(!X[t]||Z[t])return!1;if(me[t]);else if(K.test(n.replace(q,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!pe[e]){if(te&&!G.test(n.replace(q,"")));else if(n)return!1}else;}return!0},_e=function(e){var t,n,r,i,a,c=e.attributes;if(c)for(a=c.length;a--;){var l=t=c[a],u=l.name,d=l.namespaceURI;if(n=t.value.trim(),"name"===(r=u.toLowerCase())&&"IMG"===e.nodeName&&c.id)i=c.id,c=o(y,c,[]),be("id",e),be(u,e),c.indexOf(i)>a&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&(X[r]||!Z[r]))continue;"id"===u&&e.setAttribute(u,""),be(u,e)}var s=e.nodeName.toLowerCase();if(Le(s,r,n))try{d?e.setAttributeNS(d,u,n):e.setAttribute(u,n)}catch(f){}}},Oe=function e(t){for(var n,r=Ae(t);n=r.nextNode();)Ee(n)||(n.content instanceof L&&e(n.content),_e(n))},De=function(e){var t,n,r,o,i;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!we(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!W){if("object"==typeof window.toStaticHTML||"function"==typeof window.toStaticHTML){if("string"==typeof e)return window.toStaticHTML(e);if(we(e))return window.toStaticHTML(e.outerHTML)}return e}if(de);else if(e instanceof O)1===(n=(t=ve("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===n.nodeName?t=n:"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!ie&&!re&&-1===e.indexOf("<"))return e;if(!(t=ve(e)))return ie?null:""}t&&oe&&ye(t.firstChild);for(var a=Ae(de?e:t);r=a.nextNode();)3===r.nodeType&&r===o||Ee(r)||(r.content instanceof L&&Oe(r.content),_e(r),o=r);if(o=null,de)return e;if(ie){if(ae)for(i=U.call(t.ownerDocument);t.firstChild;)i.appendChild(t.firstChild);else i=t;return ce&&(i=j.call(b,i,!0)),i}return re?t.outerHTML:t.innerHTML};return t.checkIntegrity=function(t){var n=e.globalConfig.integrityHashLocation;if(!n)return e.Promise.resolve(!0);var r=window.crypto||window.msCrypto||{},o=r.subtle||r.webkitSubtle;if(!o)return"https:"!==document.location.protocol&&r&&console.warn("Foresee WebSDK skipping integrity code check because page not loaded over HTTPS."),e.Promise.resolve(!0);var i=e.getNested(window,n),a=i.obj[i.key];e.isArray(a)||(a=[a]);var c=new Set;a.forEach(function(e){c.add(e.split("-")[0])});var l=[];return c.forEach(function(n){l.push(function(t,n,r){var o=n.toUpperCase().replace(/(\d)/,"-$1"),i=function(e){if("undefined"!=typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);for(var t=e.length,n=0,r=new Uint8Array(3*t),o=0,i=0,a=0;a!==t;){if(o=e.charCodeAt(a),a+=1,o>=55296&&o<=56319){if(a===t){r[n++]=239,r[n++]=191,r[n++]=189;break}if(!((i=e.charCodeAt(a))>=56320&&i<=57343)){r[n++]=239,r[n++]=191,r[n++]=189;continue}if(a+=1,(o=1024*(o-55296)+i-56320+65536)>65535){r[n++]=240|o>>>18,r[n++]=128|o>>>12&63,r[n++]=128|o>>>6&63,r[n++]=128|63&o;continue}}o<=127?r[n++]=0|o:o<=2047?(r[n++]=192|o>>>6,r[n++]=128|63&o):(r[n++]=224|o>>>12,r[n++]=128|o>>>6&63,r[n++]=128|63&o)}return r.subarray(0,n)}(r),a=t.digest(o,i);if(!a.then){var c=a;a=new e.Promise(function(e,t){c.oncomplete=function(){return e(c.result)},c.onerror=function(){return t(new Error("hash failed!"))}})}return a.then(function(e){for(var t=new Uint8Array(e),r="",o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r=btoa(r),n+"-"+r})}(o,n,t))}),e.Promise.all(l).then(function(e){for(var t=0;t<a.length;t++)for(var n=0;n<e.length;n++)if(e[n]===a[t])return!0;return!1})},t.sanitize=De,t.sanitizeObject=function(t){var n=new Set;return function t(r){if(e.isString(r))return De(r);if(e.isArray(r)){for(var o=[],i=0;i<r.length;i++)o.push(t(r[i]));return o}if(e.isObject(r)){if(n.has(r))return{};n.add(r);var a={};for(var c in r)e.hasProp(r,c)&&(a[c]=t(r[c]));return n.delete(r),a}return r}(t)},t});
