(window.webpackJsonp=window.webpackJsonp||[]).push([[41,89],{126:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),a=(t(0),t(217)),i=t(51),c={id:"introduction",title:"Infrastructure Introduction",sidebar_label:"Introduction",hide_table_of_contents:!0,description:"Initial configuration for Stacks workloads",keywords:["terraform","configuration","cloud provider","documentation"]},u={unversionedId:"infrastructure/introduction",id:"infrastructure/introduction",isDocsHomePage:!1,title:"Infrastructure Introduction",description:"Initial configuration for Stacks workloads",source:"@site/docs/infrastructure/introduction.md",slug:"/infrastructure/introduction",permalink:"/docs/infrastructure/introduction",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Workloads on Amazon Web Services",permalink:"/docs/workloads/aws/workloads_aws_readme"},next:{title:"Azure Core Infrastructure",permalink:"/docs/infrastructure/azure/core_infrastructure"}},s=[{value:"Terraform",id:"terraform",children:[]}],l={rightToc:s};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All Stacks workloads require initial configuration of the cloud provider and some core infrastructure."),Object(a.b)("h2",{id:"terraform"},"Terraform"),Object(a.b)("p",null,"All infrastructure tooling is done with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.terraform.io/"}),"Terraform"),", as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states."),Object(a.b)("p",null,"All the modules used by stacks are documented and maintained ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-terraform"}),"here")),Object(a.b)(i.default,{next:!0,mdxType:"HideNavigation"}),Object(a.b)(i.default,{prev:!0,mdxType:"HideNavigation"}))}f.isMDXComponent=!0},217:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),p=n,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return t?o.a.createElement(m,c(c({ref:r},s),{},{components:t})):o.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n);r.default=function(e){var r=e.next,t=e.prev;return o.a.useEffect((function(){if(r){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(t){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),o.a.createElement("div",null)}}}]);