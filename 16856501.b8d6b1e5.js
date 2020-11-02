(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?n.a.createElement(m,l(l({ref:t},c),{},{components:r})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";var a=r(0),n=r(19);t.a=function(){var e=Object(a.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},178:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var a=r(177),n=r(183);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,p=i.absolute,c=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(l)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},183:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),i=(r(0),r(175)),o=r(178),l={id:"pipeline_java",title:"Java REST API - Azure DevOps Pipeline",sidebar_label:"Pipeline"},p={unversionedId:"workloads/azure/backend/java/pipeline_java",id:"workloads/azure/backend/java/pipeline_java",isDocsHomePage:!1,title:"Java REST API - Azure DevOps Pipeline",description:"The pipeline will automate provisioning and updating the Java REST API infrastructure in Azure.",source:"@site/docs/workloads/azure/backend/java/pipeline_java.md",slug:"/workloads/azure/backend/java/pipeline_java",permalink:"/stacks/docs/workloads/azure/backend/java/pipeline_java",version:"current",sidebar_label:"Pipeline",sidebar:"docs",previous:{title:"Java REST API - Azure Infrastructure",permalink:"/stacks/docs/workloads/azure/backend/java/infrastructure_java"},next:{title:"Pre-deployment tests and reports",permalink:"/stacks/docs/workloads/azure/backend/java/testing_java"}},c=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[]},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Variable group",id:"variable-group",children:[]},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[]},{value:"Create the pipeline",id:"create-the-pipeline",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The pipeline will automate provisioning and updating the Java REST API infrastructure in Azure."),Object(i.b)("p",null,"Where possible, we are creating reusable steps (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates"}),"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),Object(i.b)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),Object(i.b)("img",{alt:"Java REST API - Azure DevOps Pipeline",src:Object(o.a)("img/azure_java_azure_devops_pipeline.png")}),Object(i.b)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),Object(i.b)("h3",{id:"variable-group"},"Variable group"),Object(i.b)("p",null,"A variable group will need creating for storing application variables to be used with the pipeline. Instructions for creating a variable group can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group"}),"here"),". Give the variable group a name and description and make sure the ",Object(i.b)("strong",{parentName:"p"},"Allow access to all pipelines")," option is checked."),Object(i.b)("p",null,"Add the following variables:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"APPINSIGHTS_INSTRUMENTATIONKEY")," (output of core infrastructure)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SONAR_ORGANIZATION")," (from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://sonarcloud.io/"}),"sonarcloud"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SONAR_PROJECT_KEY")," (from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://sonarcloud.io/"}),"sonarcloud"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SONAR_PROJECT_NAME")," (from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://sonarcloud.io/"}),"sonarcloud"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SONAR_TOKEN")," (from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://sonarcloud.io/"}),"sonarcloud"),")")),Object(i.b)("img",{alt:"Azure Java Variable Group",src:Object(o.a)("img/azure_java_variable_group.png")}),Object(i.b)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),Object(i.b)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",Object(i.b)("inlineCode",{parentName:"p"},"build/azDevops/azure/api-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"%REPLACE_ME_WITH"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),Object(i.b)("h3",{id:"create-the-pipeline"},"Create the pipeline"),Object(i.b)("p",null,"Follow the steps below to create the pipeline and trigger the initial run. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",Object(i.b)("strong",{parentName:"li"},"New Pipeline"),"."),Object(i.b)("li",{parentName:"ol"},"Select your repository."),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",Object(i.b)("inlineCode",{parentName:"li"},"build/azDevops/azure/api-pipeline.yml")),Object(i.b)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete.")))}s.isMDXComponent=!0}}]);