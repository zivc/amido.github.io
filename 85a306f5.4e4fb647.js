(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(138)),s={id:"testing_static",title:"Testing - Static Code Analysis",sidebar_label:"Static Code Analysis"},i={unversionedId:"testing/testing_static",id:"testing/testing_static",isDocsHomePage:!1,title:"Testing - Static Code Analysis",description:"We are using SonarQube for static analysis. To enable integrations with GitHub and for use in Azure DevOps CI, the results are then hosted and viewable on SonarCloud.",source:"@site/docs/testing/testing_static.md",slug:"/testing/testing_static",permalink:"/stacks/docs/testing/testing_static",editUrl:"https://github.com/amido/stacks/docs/testing/testing_static.md",version:"current",sidebar_label:"Static Code Analysis",sidebar:"docs",previous:{title:"Testing - End to End Automation with Serenity BDD Java",permalink:"/stacks/docs/testing/testing_serenity_bdd"},next:{title:"Packages",permalink:"/stacks/docs/packages/packages"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Using Jest with SonarCloud",id:"using-jest-with-sonarcloud",children:[]},{value:"Configuring SonarCloud",id:"configuring-sonarcloud",children:[]},{value:"amidostacks/ci-sonarscanner",id:"amidostacksci-sonarscanner",children:[]},{value:"Static quality gates",id:"static-quality-gates",children:[{value:"Azure pipelines",id:"azure-pipelines",children:[]},{value:"Running locally",id:"running-locally",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.sonarqube.org/"}),"SonarQube")," for static analysis. To enable integrations with GitHub and for use in Azure DevOps CI, the results are then hosted and viewable on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sonarcloud.io/"}),"SonarCloud"),"."),Object(o.b)("p",null,"SonarCloud offers quality gates that ensure that your standards are adhered to before deploying."),Object(o.b)("p",null," ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/sonarcloud_overview.png",alt:"sonarcloud_example"})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/sonarcloud_github.png",alt:"sonarcloud_github"}))),Object(o.b)("p",null,"SonarCloud supports most languages."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"Sign up with GitHub to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sonarcloud.io"}),"Sonarcloud")," for the Organisation under test. Review the documentation and setup on how to plugin to GitHub."),Object(o.b)("h2",{id:"using-jest-with-sonarcloud"},"Using Jest with SonarCloud"),Object(o.b)("p",null,"SonarCloud collects the coverage reports generated by Jest in the form of ",Object(o.b)("inlineCode",{parentName:"p"},"lcov.info")," output. Configuration in the ",Object(o.b)("inlineCode",{parentName:"p"},"jest.config.json")," file will include the following for code coverage collection."),Object(o.b)("p",null,"\u26a0\ufe0f IMPORTANT: To ensure that the ",Object(o.b)("inlineCode",{parentName:"p"},"lcov.info")," reports with ",Object(o.b)("em",{parentName:"p"},"relative paths")," the root  ",Object(o.b)("inlineCode",{parentName:"p"},'"roots": ["<rootDir>/."]')," needs to be set. Else then the ",Object(o.b)("inlineCode",{parentName:"p"},"lcov")," report will embed the root directory in the path, and sonar scanner won't be able to map the coverage to the analysed files."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n"roots": ["<rootDir>/."],\n"coverageReporters": ["cobertura", "lcov"],\n  "collectCoverage": true,\n  "collectCoverageFrom": [\n    "**/*.{ts,tsx}",\n    "!**/*.test.*",\n    "!<rootDir>/.*",\n    "!**/*config.{js,json}",\n    "!<rootDir>/coverage",\n    "!<rootDir>/__tests__/**/*",\n    "!<rootDir>/__mocks__/**/*"\n  ],\n  "coverageDirectory": "<rootDir>/coverage/",\n  "coverageThreshold": {\n    "global": {\n      "statements": 1,\n      "branches": 1,\n      "functions": 1,\n      "lines": 1\n    }\n  }\n  ...\n}\n')),Object(o.b)("p",null,"The coverage directory will be where the ",Object(o.b)("inlineCode",{parentName:"p"},"lcov")," reports are generated."),Object(o.b)("h2",{id:"configuring-sonarcloud"},"Configuring SonarCloud"),Object(o.b)("p",null,"At the root of the package, a ",Object(o.b)("inlineCode",{parentName:"p"},"sonar-project.properties")," configuration file can be created, to pull in the required SonarCloud environment variables, including SonarCloud token, project name, where to collect the code coverage report from, and what files should be excluded from analysis."),Object(o.b)("p",null,"For all configuration options see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sonarcloud.io/documentation/analysis/analysis-parameters/"}),"SonarCloud Analysis Parameters"),"."),Object(o.b)("p",null,"To pull in the Jest generated code coverage reports, outputted in the SonarCloud supported ",Object(o.b)("inlineCode",{parentName:"p"},"lcov.info")," report, the report path can be set in the ",Object(o.b)("inlineCode",{parentName:"p"},"sonar-project.properties")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# sonar-project.properties\nsonar.javascript.lcov.reportPaths=coverage/lcov.info\n")),Object(o.b)("p",null,"To ensure that SonarCloud doesn't analysis files that are not needed for analysis, please exclude them:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# sonar-project.properties\nsonar.exclusions=node_modules/**/*, dist/**/*, coverage/**/*, **/*.test.*, *.config.{js,json}, __tests__/**/*, __mocks__/**/*, ./.*, *.xml, **/*.d.*, **/*.js\n")),Object(o.b)("h2",{id:"amidostacksci-sonarscanner"},"amidostacks/ci-sonarscanner"),Object(o.b)("p",null,"We can run this with Amido Stacks custom container, supports running Sonar Scanner for .NET and NPM projects."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner"}),"amidostacks/ci-sonarscanner")," for the open source image."),Object(o.b)("h2",{id:"static-quality-gates"},"Static quality gates"),Object(o.b)("p",null,"To ensure that all code is meeting the quality standards (i.e. code coverage, bugs, security) then we can implement Quality gate checks from the results of the SonarScanner analysis."),Object(o.b)("h3",{id:"azure-pipelines"},"Azure pipelines"),Object(o.b)("p",null,"\u26a0\ufe0f IMPORTANT: The ",Object(o.b)("inlineCode",{parentName:"p"},"amidostacks/ci-sonarscanner")," does not fail the pipeline if the quality gate is not passed on SonarCloud. We recommend following one of these implementations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/"}),"SonarScanner for Azure Devops")," or your current pipeline"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example usage in the open-source ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/amido/stacks-pipeline-templates/blob/831c46811abfeff30833ccb003305692cb7ad2af/azDevOps/azure/templates/jobs/build-dotnet.yml"}),"build-dotnet.yml")," template step"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.sonarlint.org"}),"SonarLint as an IDE extension")," that helps you detect and fix quality issues as you write code."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("inlineCode",{parentName:"li"},"[example workspace settings](../.vscode/settings.json)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner"}),"amidostacks/ci-sonarscanner"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SonarSource/sonarcloud-github-action"}),"Github Actions with SonarCloud")," to automatically run analysis triggered by Github"))),Object(o.b)("p",null,"Another option is to have a task running using the container, making static code analysis a breeze in the pipelines and easy to run locally. For an example on how to use the container to run you static code analysis, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates/blob/feature/cycle2/azDevOps/azure/templates/v2/steps/test-static-code-sonar.yml"}),"amido/stacks-pipeline-templates")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'steps:\n  - bash: |\n      sonar-scanner -v\n      sonar-scanner\n    displayName: "Static Analysis: SonarScanner Run"\n    target:\n      container: sonar_scanner\n    env:\n      SONAR_HOST_URL: https://sonarcloud.io\n      SONAR_TOKEN: $SONAR_TOKEN\n      SONAR_PROJECT_KEY: $SONAR_PROJECT_KEY\n      SONAR_ORGANIZATION: $SONAR_ORGANIZATION\n      BUILD_NUMBER: $(Build.BuildNumber)\n    workingDirectory: ${{ parameters.workingDirectory }}\n')),Object(o.b)("h3",{id:"running-locally"},"Running locally"),Object(o.b)("p",null,"In order to run, the export the followings environment variables for the\nSonarCloud Project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export SONAR_TOKEN=\nexport SONAR_PROJECT_KEY=\nexport SONAR_ORGANIZATION=\nexport BUILD_NUMBER=\n")),Object(o.b)("p",null,"First generate the code coverage results but running the unit tests, then run the SonarCloud scanner and\npush up the results for analysis."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run test\ndocker run -e SONAR_HOST_URL=https://sonarcloud.io -e SONAR_TOKEN=$SONAR_TOKEN -e SONAR_PROJECT_KEY=$SONAR_PROJECT_KEY -e SONAR_ORGANIZATION=$SONAR_ORGANIZATION -e BUILD_NUMBER=1.2.3 -v $(pwd):/usr/src --rm -it amidostacks/ci-sonarscanner /bin/bash -c 'cd /usr/src && sonar-scanner'\n")))}p.isMDXComponent=!0}}]);