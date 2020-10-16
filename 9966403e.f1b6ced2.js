(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(138)),c={id:"cosmosdb_configuration_netcore",title:"CosmosDB Configuration"},i={type:"mdx",permalink:"/stacks/guide/netcore/cosmosdb_configuration_netcore",source:"@site/src/pages/guide/netcore/cosmosdb_configuration_netcore.md"},s=[],l={rightToc:s};function u(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"configure-cosmos-db-collection-for-stacks-in-cosmos-db-emulator"},"Configure Cosmos DB Collection for Stacks in Cosmos Db Emulator"),Object(a.b)("br",null),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A database called Stacks for the application, and a database called CosmosDBPackage for the integration tests of the CosmosDB package (Temporary, until we split the solution on it's own repository)")),Object(a.b)("p",null,Object(a.b)("img",{alt:"CosmosDB",src:n(181).default})),Object(a.b)("br",null),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"The Stacks database should have a container called Menu partitioned by ",Object(a.b)("inlineCode",{parentName:"li"},"/id"),".")),Object(a.b)("p",null,Object(a.b)("img",{alt:"CosmosDB",src:n(182).default})))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cosmosdb_emulator_1-ef4e8ca6a98bd86d15fa0046d1f80caa.png"},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cosmosdb_emulator_2-ea8bcc2395126bc2cb4826568d1b256d.png"}}]);