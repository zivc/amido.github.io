(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(138)),i={id:"ide_java",title:"IDE guidelines for the Java Rest API",sidebar_label:"IDE guidelines"},l={unversionedId:"workloads/java/ide_java",id:"workloads/java/ide_java",isDocsHomePage:!1,title:"IDE guidelines for the Java Rest API",description:"IDE guidelines for the Java Spring Boot Rest API",source:"@site/docs/workloads/java/ide_java.md",slug:"/workloads/java/ide_java",permalink:"/stacks/docs/workloads/java/ide_java",editUrl:"https://github.com/amido/stacks/docs/workloads/java/ide_java.md",version:"current",sidebar_label:"IDE guidelines",sidebar:"docs",previous:{title:"Using the Scaffolding CLI to create the Java Rest API project template",permalink:"/stacks/docs/workloads/java/scaffolding_java"},next:{title:"Java Rest API Structure and Architecture",permalink:"/stacks/docs/workloads/java/structure_java"}},c=[{value:"IDE guidelines for the Java Spring Boot Rest API",id:"ide-guidelines-for-the-java-spring-boot-rest-api",children:[{value:"Plugins used in POM",id:"plugins-used-in-pom",children:[]},{value:"Code Quality",id:"code-quality",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ide-guidelines-for-the-java-spring-boot-rest-api"},"IDE guidelines for the Java Spring Boot Rest API"),Object(o.b)("p",null,"We recommend that you install the following plugins:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lombok - To reduce the amount of boiler-plate code that needs to be written"),Object(o.b)("li",{parentName:"ul"},"SonarLint - Fix and detect code quality issues (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.sonarlint.org/"}),"https://www.sonarlint.org/"),")"),Object(o.b)("li",{parentName:"ul"},"Spring Assistant - An IntelliJ plugin for aiding Spring development projects (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://plugins.jetbrains.com/plugin/10229-spring-assistant"}),"https://plugins.jetbrains.com/plugin/10229-spring-assistant"),")"),Object(o.b)("li",{parentName:"ul"},"Spring Tools - Adds Spring support for IDEs (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://spring.io/tools"}),"https://spring.io/tools"),")"),Object(o.b)("li",{parentName:"ul"},"CheckStyle - Flags up issues with coding style (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://checkstyle.sourceforge.io/"}),"https://checkstyle.sourceforge.io/"),")"),Object(o.b)("li",{parentName:"ul"},"google-java-format Formatter - Formats code according to configuration (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"}),"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"),")")),Object(o.b)("h3",{id:"plugins-used-in-pom"},"Plugins used in POM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lombok - Avoids need to write e.g. Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes."),Object(o.b)("li",{parentName:"ul"},"JaCoCo - A free Java code test coverage library."),Object(o.b)("li",{parentName:"ul"},"Surefire - Used for reporting purposes (creates reports based on tests in the Java test package)."),Object(o.b)("li",{parentName:"ul"},"fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml."),Object(o.b)("li",{parentName:"ul"},"Spotbugs - Performs a static analysis of the Java code to check for bugs.")),Object(o.b)("h3",{id:"code-quality"},"Code Quality"),Object(o.b)("h4",{id:"formatter"},"Formatter"),Object(o.b)("p",null,"Install the ",Object(o.b)("inlineCode",{parentName:"p"},"intellij-java-google-style.xml")," formatter configuration file into the IDE from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"}),"here"),"."),Object(o.b)("p",null,"The Java source code will automatically be reformatted to comply with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://google.github.io/styleguide/javaguide.html"}),"Google Java Style"),"."),Object(o.b)("p",null,"You can override the settings locally in the codebase by adding, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"//@formatter:off\nmanually formatted code\n///@formatter:on\n")),Object(o.b)("h5",{id:"validating-and-applying-formatting"},"Validating and applying formatting"),Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw com.coveo:fmt-maven-plugin:check\n")),Object(o.b)("p",null,"to validate the current formatting. You can then run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw com.coveo:fmt-maven-plugin:format\n")),Object(o.b)("p",null,"to apply formatting to the source code."),Object(o.b)("h4",{id:"verifying-common-programming-flaws"},"Verifying common programming flaws"),Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw spotbugs:check\n")))}p.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(m,l(l({ref:t},s),{},{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);