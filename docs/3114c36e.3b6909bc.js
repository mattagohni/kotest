(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||s;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),s=(r(0),r(149)),a={title:"Test Extensions",slug:"test-extensions.html"},i={unversionedId:"framework/test_extensions",id:"framework/test_extensions",isDocsHomePage:!1,title:"Test Extensions",description:"Discovery Extensions",source:"@site/docs/framework/test_extensions.md",slug:"/framework/test-extensions.html",permalink:"/docs/framework/test-extensions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/test_extensions.md",version:"current",sidebar:"framework",previous:{title:"Framework configuration properties",permalink:"/docs/framework/framework-config-props.html"},next:{title:"Test Factories",permalink:"/docs/framework/test-factories.html"}},c=[{value:"Discovery Extensions",id:"discovery-extensions",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"discovery-extensions"},"Discovery Extensions"),Object(s.b)("p",null,"Kotest allows developers to configure how test classes are discovered. By default classes are scanned from the classpath\nbut this extension allows developers to inject classes from any source. For full details see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/discovery-extensions.html"}),"here")))}u.isMDXComponent=!0}}]);