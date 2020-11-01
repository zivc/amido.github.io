(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(6),a=(r(0),r(171)),o=r(174),p={id:"pipeline_csr",title:"CSR Application - Azure DevOps Pipeline",sidebar_label:"Pipeline",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"workloads/azure/frontend/pipeline_csr",id:"workloads/azure/frontend/pipeline_csr",isDocsHomePage:!1,title:"CSR Application - Azure DevOps Pipeline",description:"The pipeline will automate provisioning and updating the client-side rendering infrastructure and application in Azure.",source:"@site/docs/workloads/azure/frontend/pipeline_csr.md",slug:"/workloads/azure/frontend/pipeline_csr",permalink:"/stacks/docs/workloads/azure/frontend/pipeline_csr",version:"current",sidebar_label:"Pipeline",sidebar:"docs",previous:{title:"CSR Application - Azure Infrastructure",permalink:"/stacks/docs/workloads/azure/frontend/infrastructure_csr"},next:{title:"Environment Variables",permalink:"/stacks/docs/workloads/azure/frontend/environment_variables_nodejs"}},c=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[]},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[]},{value:"Create the pipeline",id:"create-the-pipeline",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The pipeline will automate provisioning and updating the client-side rendering infrastructure and application in Azure."),Object(a.b)("p",null,"Where possible, we are creating reusable steps (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates"}),"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),Object(a.b)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),Object(a.b)("img",{alt:"CSR Application - Azure DevOps Pipeline",src:Object(o.a)("img/azure_csr_azure_devops_pipeline.png")}),Object(a.b)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),Object(a.b)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),Object(a.b)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",Object(a.b)("inlineCode",{parentName:"p"},"build/azDevops/azure/app-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",Object(a.b)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),Object(a.b)("h3",{id:"create-the-pipeline"},"Create the pipeline"),Object(a.b)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",Object(a.b)("strong",{parentName:"li"},"New Pipeline"),"."),Object(a.b)("li",{parentName:"ol"},"Select your repository."),Object(a.b)("li",{parentName:"ol"},"Select the ",Object(a.b)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",Object(a.b)("inlineCode",{parentName:"li"},"build/azDevops/azure/app-pipeline.yml")),Object(a.b)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete.")))}s.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return r?i.a.createElement(f,p(p({ref:t},c),{},{components:r})):i.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},172:function(e,t,r){"use strict";var n=r(0),i=r(19);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},174:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(172),i=r(175);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,p=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(p)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},175:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);