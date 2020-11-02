(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var s=n(2),r=n(6),a=(n(0),n(175)),i={id:"cypress_functional_testing",title:"Functional Testing with Cypress",sidebar_label:"Cypress - Functional Testing"},o={unversionedId:"testing/cypress_functional_testing",id:"testing/cypress_functional_testing",isDocsHomePage:!1,title:"Functional Testing with Cypress",description:"Cypress: Functional tests",source:"@site/docs/testing/cypress_functional_testing.md",slug:"/testing/cypress_functional_testing",permalink:"/stacks/docs/testing/cypress_functional_testing",version:"current",sidebar_label:"Cypress - Functional Testing",sidebar:"docs",previous:{title:"UI Browser Automation with Selenium and .NET",permalink:"/stacks/docs/testing/testing_dotnet_selenium"},next:{title:"Functional Testing with TestCafe",permalink:"/stacks/docs/testing/testcafe_functional_testing"}},c=[{value:"Cypress: Functional tests",id:"cypress-functional-tests",children:[{value:"Why Cypress is categorised in the pre-deployed tests",id:"why-cypress-is-categorised-in-the-pre-deployed-tests",children:[]},{value:"How Cypress is run in Continuous Integration (CI) pipelines",id:"how-cypress-is-run-in-continuous-integration-ci-pipelines",children:[]},{value:"How to use Cypress",id:"how-to-use-cypress",children:[]},{value:"How to use Cypress while developing",id:"how-to-use-cypress-while-developing",children:[]},{value:"How to run all the tests without keeping the server running",id:"how-to-run-all-the-tests-without-keeping-the-server-running",children:[]},{value:"Where tests should be located",id:"where-tests-should-be-located",children:[]},{value:"How to configure the environments",id:"how-to-configure-the-environments",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"cypress-functional-tests"},"Cypress: Functional tests"),Object(a.b)("p",null,"We are using ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"https://docs.cypress.io/"}),"Cypress")," for functional testing as much\nas possible. The key features of Cypress:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Integration testing with API testing support (Node.js)"),Object(a.b)("li",{parentName:"ul"},"Easy to debug"),Object(a.b)("li",{parentName:"ul"},"Selector playground"),Object(a.b)("li",{parentName:"ul"},"Great documentation"),Object(a.b)("li",{parentName:"ul"},"Best implementation of Live Reloading")),Object(a.b)("h3",{id:"why-cypress-is-categorised-in-the-pre-deployed-tests"},"Why Cypress is categorised in the pre-deployed tests"),Object(a.b)("p",null,"The Cypress tests, if structured correctly, can be run BEFORE the app client is deployed to an environment. This is to ensure that we get the fastest feedback we can. If you are following branching strategies such as GitFlow, then you can run these tests on your branch before merging to master."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"BENEFITS"),Object(a.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"DOWNSIDES"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"deployment independent"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"not full integration tests as not running on deployed infrastructure")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"faster feedback"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"run core tests before the branch is merged to master, smoke tests post-merge and deployment"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}))))),Object(a.b)("h3",{id:"how-cypress-is-run-in-continuous-integration-ci-pipelines"},"How Cypress is run in Continuous Integration (CI) pipelines"),Object(a.b)("p",null,"Glad you asked. You'll see an npm script in the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," which uses ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/bahmutov/start-server-and-test"}),"start-server-and-test"),". This package starts the Node.js Express server, waits for the app URL (localhost in this case), then runs test command; when the tests end, it shuts down the server instance."),Object(a.b)("p",null,"Key benefits means we never have to explicitly wait for the server to be ready before testing."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"package.json script"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-text"}),'"test:cypress" : "env CI=true node_modules/.bin/start-server-and-test start $APP_BASE_URL:$PORT test:cypress:run"\n')),Object(a.b)("h3",{id:"how-to-use-cypress"},"How to use Cypress"),Object(a.b)("p",null,"Please read\n",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/references/best-practices.html"}),"Cypress - Best Practices"),"\nfor how to get the most out of Cypress."),Object(a.b)("h3",{id:"how-to-use-cypress-while-developing"},"How to use Cypress while developing"),Object(a.b)("h4",{id:"server-side-rendered-ssr-apps"},"Server Side Rendered (SSR) apps"),Object(a.b)("p",null,"Say if you are following Test Driven Development (TDD) cycles, or if you wish to write a failing test for a known bug, and fix the app and check to ensure that the test passes, you may wish you watch the tests and the code together."),Object(a.b)("p",null,"To open and run Cypress locally with live reload, after installing dependencies:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install app dependencies"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build the web app"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Compile the ",Object(a.b)("inlineCode",{parentName:"p"},"*.cy.ts")," Cypress test files"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:cypress:compile\n")),Object(a.b)("p",{parentName:"li"},"(optional: pass ",Object(a.b)("inlineCode",{parentName:"p"},"--watch")," through to watch for changes)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start the server, run the tests headless, tear down the server:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:cypress\n")),Object(a.b)("p",{parentName:"li"},"When writing tests: Open Cypress with live-reloading and selector playground."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"npm run test:cypress:open\n")))),Object(a.b)("h3",{id:"how-to-run-all-the-tests-without-keeping-the-server-running"},"How to run all the tests without keeping the server running"),Object(a.b)("h4",{id:"server-side-rendered-ssr-applications"},"Server Side Rendered (SSR) applications"),Object(a.b)("p",null,"To spin up the server automatically, then run Cypress in headless Chrome, use:"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Script"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm run test:cypress"),". This is the same script as mentioned for running in ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#how-is-cypress-run-in-continuous-integration-ci-pipelines"}),"CI pipelines")),Object(a.b)("h3",{id:"where-tests-should-be-located"},"Where tests should be located"),Object(a.b)("p",null,"We suggest co-locating the ",Object(a.b)("inlineCode",{parentName:"p"},"*.cy.ts")," tests with the page compositions (a composition is several components that may come together to form a page). for high-level tests, and component tests with the components themselves."),Object(a.b)("p",null,"e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-text"}),"compositions\n\u251c\u2500\u2500 create\n\u2502   \u251c\u2500\u2500 index.test.cy.ts\n\u2502   \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 home\n    \u251c\u2500\u2500 __snapshots__\n    \u2502   \u2514\u2500\u2500 index.test.tsx.snap\n    \u251c\u2500\u2500 components.tsx\n    \u251c\u2500\u2500 index.axe.test.tsx\n    \u251c\u2500\u2500 index.test.axe.cy.ts\n    \u251c\u2500\u2500 index.test.cy.ts\n    \u251c\u2500\u2500 index.test.eyes.cy.ts\n    \u251c\u2500\u2500 index.test.tsx\n    \u2514\u2500\u2500 index.tsx\n")),Object(a.b)("h3",{id:"how-to-configure-the-environments"},"How to configure the environments"),Object(a.b)("p",null,"We suggest tightly coupling Cypress with the app under test. This means sharing environment configuration files. This ensures that in your deployment pipelines, and quality gating process, you are confident that the app under test is being tested correctly."),Object(a.b)("p",null,"For example, if an API URL changes, you will only have a single place to change and the tests and app will be updated together."),Object(a.b)("p",null," Note that the environment variables are required on the hosting platform, e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"export NODE_ENV=dev\n")))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var s=n(0),r=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=s,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);