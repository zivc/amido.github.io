(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),s=(n(0),n(210)),a={id:"functional_testing_netcore",title:"Testing the application",sidebar_label:"Testing the API",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet API tests examples using bddfy",keywords:["dotnet api tests","rest","api","bddfy","xunit","shouldly","csharp","dotnet","testing"]},o={unversionedId:"workloads/azure/backend/netcore/testing/functional_testing_netcore",id:"workloads/azure/backend/netcore/testing/functional_testing_netcore",isDocsHomePage:!1,title:"Testing the application",description:"Dotnet API tests examples using bddfy",source:"@site/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore.md",slug:"/workloads/azure/backend/netcore/testing/functional_testing_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore",version:"current",sidebar_label:"Testing the API",sidebar:"docs",previous:{title:"Build & Run",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/build_and_run_project_netcore"},next:{title:".NET Core - Azure Infrastructure",permalink:"/stacks/docs/workloads/azure/backend/netcore/infrastructure_netcore"}},c=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"Test Folder structure",id:"test-folder-structure",children:[]},{value:"Builders",id:"builders",children:[{value:"Http",id:"http",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Models",id:"models",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Fixtures",id:"fixtures",children:[]},{value:"Stories",id:"stories",children:[]},{value:"Steps",id:"steps",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The Automated Functional Tests is a sample project demonstrating functional testing created using BDDfy and XUnit."),Object(s.b)("p",null,"The project contains the framework for testing API's and a number of test cases to demonstrate usage of the framework."),Object(s.b)("h2",{id:"dependencies"},"Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"xUnit (Test adapter)"),Object(s.b)("li",{parentName:"ul"},"BDDfy (BDD tool)"),Object(s.b)("li",{parentName:"ul"},"HttpClient (For API requests)"),Object(s.b)("li",{parentName:"ul"},"Shouldly (Assertions)")),Object(s.b)("h2",{id:"running-tests"},"Running Tests"),Object(s.b)("p",null,"Navigate to ",Object(s.b)("inlineCode",{parentName:"p"},"API.FunctionalTests")," folder and run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet test\n")),Object(s.b)("h2",{id:"test-folder-structure"},"Test Folder structure"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 Builders\n|   \u2514\u2500\u2500 Http\n\u251c\u2500\u2500 Configuration\n\u251c\u2500\u2500 Models\n\u2514\u2500\u2500 Tests\n    \u251c\u2500\u2500 Fixtures\n    \u251c\u2500\u2500 Stories\n    \u2514\u2500\u2500 Steps\n")),Object(s.b)("h2",{id:"builders"},"Builders"),Object(s.b)("p",null,"This folder contains builder classes that are used to create POCO's (Plain Old CLR Object) for objects used in API requests. Ideally there should be a model for every request and response that is used within the tests. The aim of these classes is to make it as easy as possible for developers to generate the data required by API's."),Object(s.b)("p",null,"All Builder classes should inherit from ",Object(s.b)("inlineCode",{parentName:"p"},"IBuilder.cs")),Object(s.b)("h3",{id:"http"},"Http"),Object(s.b)("p",null,"This folder contains a builder and factory for managing HttpClients within the tests."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"HttpRequestBuilder.cs")," manages creating the HttpRequest and also the HttpClient. This is only used within ",Object(s.b)("inlineCode",{parentName:"li"},"HttpRequestFactory.cs"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"HttpRequestFactory.cs")," orchestrates the creation of the HttpRequest for each REST method.")),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"This contains classes used to manage the configuration for the tests."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ConfigModel.cs")," is a POCO representation of the json in ",Object(s.b)("inlineCode",{parentName:"li"},"appsettings.json")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ConfigAccessor.cs")," contains the logic required to obtain the JSON from ",Object(s.b)("inlineCode",{parentName:"li"},"appsettings.json")," and bind it to the ",Object(s.b)("inlineCode",{parentName:"li"},"ConfigModel.cs")," object. This allows the configuration to be used as a simple object.\nThe ConfigAccessor will automatically replace any configuration setting values with the values set in the Environment Variables on the machine running the tests.")),Object(s.b)("p",null,"Example: In ",Object(s.b)("inlineCode",{parentName:"p"},"appsettings.json"),' we are using the configuration setting (key-value pair) "BaseUrl":"',Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://dev.azure.amidostacks.com/api/menu/%22"}),'http://dev.azure.amidostacks.com/api/menu/"'),". If there is an Environment Variable set on the current machine/build agent using ",Object(s.b)("inlineCode",{parentName:"p"},"BaseUrl")," key, the value in ",Object(s.b)("inlineCode",{parentName:"p"},"appsettings.json")," will be replaced."),Object(s.b)("h2",{id:"models"},"Models"),Object(s.b)("p",null,"These are POCO representations of entities that are used in API requests (E.g. Request body, response body). The builder classes are used to create instances of these models."),Object(s.b)("h2",{id:"tests"},"Tests"),Object(s.b)("p",null,"This is the parent folder for all test code"),Object(s.b)("h2",{id:"fixtures"},"Fixtures"),Object(s.b)("p",null,'The "Fixtures" folder contains xUnit class fixtures. These class fixtures are used to create test context for the tests. The fixture is where you can put fixture setup (via constructor) and teardown (Via ',Object(s.b)("inlineCode",{parentName:"p"},"Dispose()"),")"),Object(s.b)("p",null,"See ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://xunit.net/docs/shared-context"}),"xUnit documentation")," for information on different fixtures and how to use them."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"AuthFixture.cs")," contains methods for getting authentication tokens required in the test cases."),Object(s.b)("h2",{id:"stories"},"Stories"),Object(s.b)("p",null,"The Stories folder contains all the test cases (I.e. the BDDfy stories). Each class should represent a new test story, and within each class/story, there will be a number of test cases which test a specific feature."),Object(s.b)("p",null,"Test cases within a story are defined using xUnit ",Object(s.b)("inlineCode",{parentName:"p"},"Facts"),". BDDfy is used to describe and orchestrate the tests."),Object(s.b)("p",null,"The solution tags tests as smoke tests using xUnit ",Object(s.b)("inlineCode",{parentName:"p"},"Traits"),". I.e. ",Object(s.b)("inlineCode",{parentName:"p"},'[Trait("Category", "SmokeTest")]')),Object(s.b)("h2",{id:"steps"},"Steps"),Object(s.b)("p",null,"This is where all the step definitions are created. The definitions contain the logic behind the tests and these steps are called from within the test cases found within the ",Object(s.b)("inlineCode",{parentName:"p"},"TestCases")," folder."))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||s;return n?i.a.createElement(h,o(o({ref:t},l),{},{components:n})):i.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);