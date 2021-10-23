"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],l={title:"Build User Interfaces"},s=void 0,u={unversionedId:"build-user-interfaces",id:"build-user-interfaces",isDocsHomePage:!1,title:"Build User Interfaces",description:"Many Front End engineers spend a lot of time building UI, and building a UI component is a good way to assess someone's familiarity in the three biggest aspects of front end - HTML, JS, CSS.",source:"@site/../contents/build-user-interfaces.md",sourceDirName:".",slug:"/build-user-interfaces",permalink:"/pl/build-user-interfaces",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/build-user-interfaces.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1632054048,formattedLastUpdatedAt:"19.09.2021",frontMatter:{title:"Build User Interfaces"},sidebar:"root",previous:{title:"Utility Function",permalink:"/pl/utility-function"},next:{title:"Algorithms",permalink:"/pl/algorithms"}},c=[{value:"Examples",id:"examples",children:[],level:2},{value:"Considerations",id:"considerations",children:[{value:"Front end best practices",id:"front-end-best-practices",children:[],level:3},{value:"Performance and scalability",id:"performance-and-scalability",children:[],level:3},{value:"Network requests",id:"network-requests",children:[],level:3},{value:"User experience",id:"user-experience",children:[],level:3},{value:"Security",id:"security",children:[],level:3},{value:"Future",id:"future",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Many Front End engineers spend a lot of time building UI, and building a UI component is a good way to assess someone's familiarity in the three biggest aspects of front end - HTML, JS, CSS."),(0,i.kt)("p",null,"Companies that ask such questions usually ask candidates to code in one of these three ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codepen.io"},"Codepen")," (or some other online editor with preview) - You get to visualize the output and iterate on the solution"),(0,i.kt)("li",{parentName:"ul"},"BYOE (Bring your Own Environment) - Candidates bring their own development environment/laptop and free to choose whether they want to do local development using their own editors or use online environments like codepen.io or codesandbox.io. This is the most ideal scenario that benefits candidates, but is usually only done during on-sites. You can usually use a JavaScript framework/library and in that case you are recommended to use tools that help you scaffold a fresh app where you can start coding immediately (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"create-react-app"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vue-cli"),"). You don't want to be spending time during the interview doing unnecessary plumbing that doesn't give your interviewers additional useful signals"),(0,i.kt)("li",{parentName:"ul"},"Whiteboard - Candidates have to write all the required HTML, JS, CSS on the whiteboard. There's no preview, no autocomplete, no online documentation to help you; you're totally on your own. So far Facebook and Google are the only companies that are known to do whiteboard-style for front end interviews")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tabs"),(0,i.kt)("li",{parentName:"ul"},"Accordion"),(0,i.kt)("li",{parentName:"ul"},"Photo gallery"),(0,i.kt)("li",{parentName:"ul"},"Other possible components - ",(0,i.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.0/components/"},"Bootstrap")))),(0,i.kt)("li",{parentName:"ul"},"Apps",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sortable Data Table (with extensions for filtering)"),(0,i.kt)("li",{parentName:"ul"},"TODO list"),(0,i.kt)("li",{parentName:"ul"},"Kanban Board"))),(0,i.kt)("li",{parentName:"ul"},"Games",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tic-tac-toe Game"),(0,i.kt)("li",{parentName:"ul"},"Whack-a-mole Game"),(0,i.kt)("li",{parentName:"ul"},"Tetris Game (advanced)"),(0,i.kt)("li",{parentName:"ul"},"Snake Game (advanced)")))),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"After you complete (or even before you start on) the question, think about these potential issues (where relevant). You may or may not have to handle them, so you can always clarify with the interviewer before starting on it so that you don't write too much/little code."),(0,i.kt)("h3",{id:"front-end-best-practices"},"Front end best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid writing global variables. Wrap your code within an IIFE and leave the global scope clean."),(0,i.kt)("li",{parentName:"ul"},"What if I need to have multiple instances of this components on the page? Did I use any global variables that will make it hard for me to do so? Will having my components on the same page affect each other? They should be independent!"),(0,i.kt)("li",{parentName:"ul"},"Do I have a convenient API to instantiate independent components with configurable options? Old school jQuery UI components are a good examples of this.")),(0,i.kt)("h3",{id:"performance-and-scalability"},"Performance and scalability"),(0,i.kt)("p",null,"Can my component scale (network request duration, performance, UI, UX, etc)?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What if the network takes too long to return something? How do I test slow network speed? Hint: Chrome Devtools Network tab."),(0,i.kt)("li",{parentName:"ul"},"What if a string is too long? Hint: CSS ",(0,i.kt)("inlineCode",{parentName:"li"},"word-break")," property."),(0,i.kt)("li",{parentName:"ul"},"What if a picture is too large?"),(0,i.kt)("li",{parentName:"ul"},"Can the component contain any amount of child items? Example: Support flexible amount of thumbnails in a photo gallery component."),(0,i.kt)("li",{parentName:"ul"},"Will the layout be messed up if I have too few or too many of these items? What if there are no items, what empty state do I show?"),(0,i.kt)("li",{parentName:"ul"},"How will performance be affected if I have too many elements on the page? How do I solve it? Hint: ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/outsystems-engineering/virtualizing-the-virtual-dom-pushing-react-further-d76a16e5f209"},"Virtual list")),(0,i.kt)("li",{parentName:"ul"},"Did I hard code any values that will make it hard to extend to changing requirements in future? Did I design for extensibility?")),(0,i.kt)("h3",{id:"network-requests"},"Network requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does the component deal with race conditions in network/async requests? E.g. a new network request is fired before the response for the previous request is returned."),(0,i.kt)("li",{parentName:"ul"},"What if the request timeout or errored? How can I recover from it gracefully?"),(0,i.kt)("li",{parentName:"ul"},"How can I improve the performance of the component? Can I make use of caching, lazy loading, prefetching/preloading?"),(0,i.kt)("li",{parentName:"ul"},"What if I need to load a lot of data/images? Can I lazily load them? Can I fetch the data in batches to reduce spamming the API endpoint?")),(0,i.kt)("h3",{id:"user-experience"},"User experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is my component mobile-friendly? Can my component fit on different screen widths? How do I make it mobile-friendly?"),(0,i.kt)("li",{parentName:"ul"},"Is my component easily i18n-able? How can I change the design to cater for i18n? Does my component support RTL languages?"),(0,i.kt)("li",{parentName:"ul"},"Are there any potential UX/accessibility (a11y) issues with my components?"),(0,i.kt)("li",{parentName:"ul"},"What are some common accessibility techniques and gotchas?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67"},"https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67")))),(0,i.kt)("li",{parentName:"ul"},"What tools can I use to check for accessibility?"),(0,i.kt)("li",{parentName:"ul"},"There's probably isn't much time for you to be an expert in a11y but knowledge of a11y is one of the differentiating factors between junior vs senior engineers.")),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XSS vulnerability. Interviewers are especially looking out for this whenever there is user input involved. You almost never need to use ",(0,i.kt)("inlineCode",{parentName:"li"},".innerHTML")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"$.html()")," function. If you do, make sure you escape the contents first."),(0,i.kt)("li",{parentName:"ul"},"User input that is being displayed in the URL has to be encoded first as well, or else there's also a potential for mischief.")),(0,i.kt)("h3",{id:"future"},"Future"),(0,i.kt)("p",null,"Lastly, mention how you would do things differently if you had more time and were writing production code that you need to maintain. Perhaps use Sass instead of CSS, use React instead of jQuery for better maintainability, make the component mobile-friendly and test on different screen widths, add keyboard shortcuts, etc."))}p.isMDXComponent=!0}}]);