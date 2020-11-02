(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(175)),c={id:"accessibility_testing",title:"Automated Accessibility Testing With Axe",sidebar_label:"Automated Accessibility Testing",hide_title:!1,hide_table_of_contents:!0},s={unversionedId:"testing/accessibility_testing",id:"testing/accessibility_testing",isDocsHomePage:!1,title:"Automated Accessibility Testing With Axe",description:"Axe: Accessibility testing",source:"@site/docs/testing/axe_automated_accessibility_testing.md",slug:"/testing/accessibility_testing",permalink:"/stacks/docs/testing/accessibility_testing",version:"current",sidebar_label:"Automated Accessibility Testing",sidebar:"docs",previous:{title:"API Contract Testing With Pact",permalink:"/stacks/docs/testing/contract_testing_pact"},next:{title:"Performance Testing - Gatling",permalink:"/stacks/docs/testing/performance_testing_gatling"}},o=[{value:"Axe: Accessibility testing",id:"axe-accessibility-testing",children:[{value:"Cypress: Debugging Axe failures",id:"cypress-debugging-axe-failures",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"axe-accessibility-testing"},"Axe: Accessibility testing"),Object(a.b)("p",null,"From the Dequeue family of products, we are using\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.deque.com/axe/"}),"aXe")," for accessibility testing. When developing, we\nexpect to support WCAG 2.1 Level AA ",'["wcag21aa"]'," at a minimum."),Object(a.b)("p",null,"aXe tests are performed on two levels:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Rendering the React component and testing with Jest."),Object(a.b)("li",{parentName:"ol"},"Rendering the entire page and testing with Cypress.")),Object(a.b)("p",null,"Both examples are in the scaffolded web app templates: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr"}),"https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr")),Object(a.b)("h3",{id:"cypress-debugging-axe-failures"},"Cypress: Debugging Axe failures"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'When accessibility violations are detected, your test will fail and an entry titled "A11Y ERROR!" will be added to the command log for each type of violation found (they will be above the failed assertion). Clicking on those will reveal more specifics about the error in the DevTools console.\nSource: ',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/avanslaars/cypress-axe#standard-output"}),"cypress-axe#standard-output"))),Object(a.b)("p",null,"For information on how to fix the failure, follow the HelpUrl printed to the console."))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(g,s(s({ref:t},l),{},{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);