(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(138)),a={id:"deploy_project_netcore",title:"Deploying the application",sidebar_label:"Deployment"},s={unversionedId:"workloads/netcore/quickstart/deploy_project_netcore",id:"workloads/netcore/quickstart/deploy_project_netcore",isDocsHomePage:!1,title:"Deploying the application",description:"This solution has two build pipelines files one each for Azure DevOps and Jenkins, located under ./build/azDevOps/azure and ./build/Jenkins/ respectively. To deploy this application, fork it into your desired source control system and point your Jenkins or Azure DevOps instance at those pipeline files. There are a number of prerequisite variables (such as credentials) and various paths that must be populated, all of which are listed at the head of the file (if global) or in the relevant environment section (if per-environment). Please refer to the stacks-infrastructure repository for more information around the provisioning of the underlying infrastructure.",source:"@site/docs/workloads/netcore/quickstart/deploy_project_netcore.md",slug:"/workloads/netcore/quickstart/deploy_project_netcore",permalink:"/stacks/docs/workloads/netcore/quickstart/deploy_project_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/quickstart/deploy_project_netcore.md",version:"current",sidebar_label:"Deployment",sidebar:"docs",previous:{title:"Performance testing",permalink:"/stacks/docs/workloads/netcore/quickstart/testing/performance_testing_netcore"},next:{title:"Configure Swagger",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore"}},c=[{value:"Deployment files",id:"deployment-files",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This solution has two build pipelines files one each for Azure DevOps and Jenkins, located under ",Object(i.b)("inlineCode",{parentName:"p"},"./build/azDevOps/azure")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./build/Jenkins/")," respectively. To deploy this application, fork it into your desired source control system and point your Jenkins or Azure DevOps instance at those pipeline files. There are a number of prerequisite variables (such as credentials) and various paths that must be populated, all of which are listed at the head of the file (if global) or in the relevant environment section (if per-environment). Please refer to the ",Object(i.b)("inlineCode",{parentName:"p"},"stacks-infrastructure")," repository for more information around the provisioning of the underlying infrastructure."),Object(i.b)("h3",{id:"deployment-files"},"Deployment files"),Object(i.b)("p",null,"When deployed to a kubernetes cluster, ensure the following requirements are satisfied:"),Object(i.b)("p",null,"The yaml files for the resources are created in the folder ",Object(i.b)("inlineCode",{parentName:"p"},"/deploy/k8s/api/base"),"\nThe yaml files for kustomization are created for each environment. i.e: ",Object(i.b)("inlineCode",{parentName:"p"},"/deploy/k8s/api/kustomization/dev"),"\nThe kustomization files apply the changes required to the environment\nThe required secrets are deployed to the cluster (do not check in secrets or certificates to the repository)"))}p.isMDXComponent=!0},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);