(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{178:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),d=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=o,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||a;return t?n.a.createElement(m,i(i({ref:r},s),{},{components:t})):n.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return d}));var o=t(2),n=t(6),a=(t(0),t(178)),c={id:"workloads_gcp_readme",title:"Workloads on Google Cloud Platform",sidebar_label:"Workloads on GCP"},i={unversionedId:"workloads/gcp/workloads_gcp_readme",id:"workloads/gcp/workloads_gcp_readme",isDocsHomePage:!1,title:"Workloads on Google Cloud Platform",description:"We're working on adding workloads for GCP at the moment. Currently there is one available:",source:"@site/docs/workloads/gcp/workloads_gcp_readme.md",slug:"/workloads/gcp/workloads_gcp_readme",permalink:"/stacks/docs/workloads/gcp/workloads_gcp_readme",version:"current",sidebar_label:"Workloads on GCP",sidebar:"docs",previous:{title:"Configure Swagger UI",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore"},next:{title:"Workloads on Amazon Web Services",permalink:"/stacks/docs/workloads/aws/workloads_aws_readme"}},l=[],s={rightToc:l};function d(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We're working on adding workloads for GCP at the moment. Currently there is one available:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Server-side rendered webapp in JavaScript / NodeJS and React")),Object(a.b)("p",null,"However, we haven't documented this so for the moment it's unsupported. If you're interested you can access it by selecting ",Object(a.b)("em",{parentName:"p"},"GCP > server side rendered webapp")," in the CLI tool. To understand how the CLI works you'll have to check out the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://amido.github.io/stacks/docs/workloads/azure/frontend/cli_webapp_frameworks"}),"CLI documentation on one of the other workloads"),"."),Object(a.b)("p",null,"Currently roadmapped for GCP are these workloads:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"REST web API with CQRS in both C#/.NET and Java/SpringBoot"),Object(a.b)("li",{parentName:"ul"},"Event listener in both C#/.NET and Java/SpringBoot"),Object(a.b)("li",{parentName:"ul"},"Client-side rendered webapp in JavaScript / NodeJS and React")),Object(a.b)("p",null,"Contact ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:stacks@amido.com"}),"stacks@amido.com")," for more information."))}d.isMDXComponent=!0}}]);