!function(){"use strict";var t=3294.6,e=269.025,n=Math.PI,o=2*Math.PI;function r(t){return(t<0?-1:1)*t*t}function a(t){for(t+=n/2;t>n;)t-=o;var e=1.27323954*t-.405284735*r(t);return.225*(r(e)-e)+e}function i(t,e,n){for(var o=0;e<n;)o*=83,o+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".indexOf(t[e++]);return o}function u(n){return n>10.31475?Math.pow(n/e+.052132,2.4):n/t}function c(n){return~~(n>1227e-8?e*Math.pow(n,.416666)-13.025:n*t+1)}function d(t,e,o){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,h=i(t,0,1),s=h%9+1,l=1+~~(h/9),f=s*l,m=(i(t,1,2)+1)/13446*d,v=new Float64Array(3*f),w=i(t,2,6);v[0]=u(w>>16),v[1]=u(w>>8&255),v[2]=u(255&w);var b=0;for(b=1;b<f;b++)w=i(t,4+2*b,6+2*b),v[3*b]=r(~~(w/361)-9)*m,v[3*b+1]=r(~~(w/19)%19-9)*m,v[3*b+2]=r(w%19-9)*m;for(var g=4*e,p=new Uint8ClampedArray(g*o),y=0;y<o;y++)for(var N=n*y/o,A=0;A<e;A++){for(var E=0,O=0,M=0,L=n*A/e,I=0;I<l;I++){var C=a(N*I);for(b=0;b<s;b++){var R=a(L*b)*C,j=3*(b+I*s);E+=v[j]*R,O+=v[j+1]*R,M+=v[j+2]*R}}var S=4*A+y*g;p[S]=c(E),p[S+1]=c(O),p[S+2]=c(M),p[S+3]=255}return p}function h(t,e,n,o){var r=function(t,e,n){var o=window.document.createElement("canvas");return o.width=e,o.height=n,o.getContext("2d").putImageData(new ImageData(t,e,n),0,0),o}(t,e,n);r.toBlob((function(t){if(null===t)return o(null);var e=window.document.createElement("img"),n=URL.createObjectURL(t);e.onload=function(){URL.revokeObjectURL(n)},o(n)}))}function s(t){var e=t.getBoundingClientRect(),n={height:window.innerHeight||window.document.documentElement.clientHeight,width:window.innerWidth||window.document.documentElement.clientWidth};return e.top>0&&e.bottom>0||e.bottom-n.height>0&&e.top<0||-1*(e.top-n.height)>0&&e.bottom-n.height>0||-1*(e.bottom-n.height)>0&&e.top+n.height<0}function l(t,e){var n=t.attributes.getNamedItem(e);return n?n.value:null}!function(){var t=[],e=new Object(null),n=new Object(null),o=new Object(null);function r(t){var n=t.srcset;function o(){t.node.srcset=t.srcset,t.node.src=l(t.node,"data-src"),t.node.removeAttribute("data-srcset")}if(e.hasOwnProperty(n)){var r=e[n];if(e[n].complete)o();else{var a=r.onload;r.onload=function(){a.call(this),o.call(this)}}return r}var i=new Image;return i.onload=function(){i.onload=null,o()},i.srcset=t.srcset,e[n]=i}function a(t){return function(){this.onload=null,t.node.parentElement.classList.remove("ecb-loading"),this.removeAttribute("data-ecb-bh"),this.removeAttribute("data-blurhash"),this.removeAttribute("data-ow"),this.removeAttribute("data-oh")}}function i(t,e){t.node.onload=function(t){return function(){this.setAttribute("data-ecb-bh","1"),this.onload=a(t),this.srcset||(this.srcset=t.srcset)}}(t),t.node.src=e,t.node.parentElement.classList.add("ecb-loading")}function u(t){return function(e){if(Array.isArray(n[t.hash])){n[t.hash]=e;for(var r=o[t.hash]||[];r.length;)r.pop()(e)}null!==e?i(t,e):l(t.node,"data-blurhash")&&a(t).call(t.node)}}function c(t){var e=n[t.hash],a=r(t);null===e||"string"==typeof e?u(t)(e):Array.isArray(e)&&!1===e.includes(t.node)?(e.push(t.node),!1===Array.isArray(o[t.hash])&&(o[t.hash]=[]),o[t.hash].push(u(t))):(n[t.hash]=[t.node],function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;e=e||t.hash,setTimeout((function(){!1===e.complete?h(d(t.hash,t.width,t.height),t.width,t.height,(function(t){!0===e.complete?n(null):n(t)})):n(null)}),o)}(t,a,u(t),50))}function f(e){var n=function(t){var e=l(t,"data-blurhash"),n=l(t,"data-src");if(!e)return null;var o=Number(l(t,"data-ow")),r=Number(l(t,"data-oh")),a=l(t,"srcset")||l(t,"data-srcset");return isNaN(o)||0===o||isNaN(r)||0===r?(n&&(t.src=n),null):{node:t,hash:e,width:o,height:r,srcset:a}}(e);n&&n.hash&&(n.node.onload=function(){this.onload=a(n)},function(t){var e=!0;do{var n=getComputedStyle(t);e=!(0===window.Number(n.opacity)||"none"===n.display),t=t.parentElement}while(null!==t&&!0===e);return e}(n.node)&&s(n.node)?(c(n),r(n)):function(e){"complete"===window.document.readyState?c(e):t.unshift(e)}(n))}function m(t){t.forEach((function(t){if(function(t){return t.nodeType===Node.ELEMENT_NODE&&"IMG"===t.tagName&&!l(t,"data-ecb-bh")}(t))return f(t);"complete"===window.document.readyState&&t.hasChildNodes()&&m(t.childNodes)}))}function v(t){setTimeout((function(){for(var e=0;e<t.length;e++)m(t[e].addedNodes)}),1)}function w(){for(;t.length;)c(t.pop());var e;(e=v,MutationObserver=window.MutationObserver||window.WebKitMutationObserver,new MutationObserver(e)).observe(document.body,{childList:!0,subtree:!0})}window.ecbDecode=function(){var t=window.document.getElementsByTagName("img");if(!(t.length<=0))for(var e=0;e<t.length;e++){f(t.item(e))}},window.ecbReadyStateChangeListener=function(){var t=window.document.readyState;"interactive"===t?w():"complete"===t&&function(){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];n.complete&&(n=null)}}()}}()}();
