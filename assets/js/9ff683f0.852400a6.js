"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[708],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7605),a=(n(9496),n(9613));const o={sidebar_position:1},i="Create a Trap",l={unversionedId:"traps/create-trap",id:"traps/create-trap",title:"Create a Trap",description:"Monitor and analyze blockchain data.",source:"@site/docs/traps/create-trap.md",sourceDirName:"traps",slug:"/traps/create-trap",permalink:"/docs/traps/create-trap",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Traps",permalink:"/docs/category/traps"},next:{title:"Operators",permalink:"/docs/category/operators"}},c={},p=[{value:"Trap Anatomy",id:"trap-anatomy",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Collect Function",id:"collect-function",level:3},{value:"Collect Output",id:"collect-output",level:3},{value:"IsValid Function",id:"isvalid-function",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-trap"},"Create a Trap"),(0,a.kt)("p",null,"Monitor and analyze blockchain data."),(0,a.kt)("h2",{id:"trap-anatomy"},"Trap Anatomy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"contract ExampleTrap {\n    struct CollectOutput {\n      // Monitored data points defined here\n    }\n\n    constructor() {\n      // Initialization logic defined here but without constructor arguments\n    }\n    \n    function collect() external view returns (CollectOutput memory) {\n        // Data collection and monitoring logic defined here\n        return CollectOutput({});\n    }\n\n    function isValid(CollectOutput[] calldata dataPoints) external pure returns (bool) {\n        // Validation logic defined here\n        return true;\n    }\n}\n")),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"The constructor is used to initalize the Trap with any necesseary data such as addresses of smart contracts to monitor. The constructor is called once when the Trap is deployed to a shadow fork ",(0,a.kt)("strong",{parentName:"p"},"without")," arguments."),(0,a.kt)("h3",{id:"collect-function"},"Collect Function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function is responsible for gathering data from the blockchain and returning it in a standardized format. This function is called by Operators on every new block and the output is stored off-chain. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function is constrained to the ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," modifier because it is executed over a shadow fork of the evm state data and any state changes will not be persisted. State must only be viewed, not modified.")),(0,a.kt)("h3",{id:"collect-output"},"Collect Output"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectOutput")," struct is the standardized format for returning data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function. This struct is defined by the developer and can contain any data points that are relevant to the Trap. The name of the struct can be anything but it must be exported and the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function must return an instance of the struct."),(0,a.kt)("h3",{id:"isvalid-function"},"IsValid Function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function is responsible for validating the data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function. This function is called by the Operator on every new block and is used to determine whether or not the Trap response should be executed. The ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function is called first followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function takes an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectOutput")," structs as an argument. The Operator will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function with the previous blocks of data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function. "),(0,a.kt)("p",null,"The outputs are ordered from oldest to newest. The last element in the array is the most recent block of data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function. The first element in the array is the oldest block of data returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function must return a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")," value. If the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," then the Trap response will ",(0,a.kt)("strong",{parentName:"p"},"not")," be executed. If the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," then the Trap response will be executed by the Operators."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function is constrained to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pure")," modifier because the ",(0,a.kt)("inlineCode",{parentName:"p"},"isValid")," function is ",(0,a.kt)("strong",{parentName:"p"},"not")," executed over a shadow fork. All relevant state is passed to the function as an argument.")))}d.isMDXComponent=!0}}]);