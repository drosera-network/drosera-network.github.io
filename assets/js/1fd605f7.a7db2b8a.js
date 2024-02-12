"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[803],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2507:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7605),a=(n(9496),n(9613));const o={},i="FAQ",s={type:"mdx",permalink:"/faq",source:"@site/src/pages/faq.md",title:"FAQ",description:"Contents",frontMatter:{}},l=[{value:"Contents",id:"contents",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Technicals",id:"technicals",level:2},{value:"Effectiveness",id:"effectiveness",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#faq"},"FAQ"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contents"},"Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fundamentals"},"Fundamentals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#technicals"},"Technicals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#effectiveness"},"Effectiveness"))))),(0,a.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What problems does Drosera solve?"),"Monitoring systems are expensive and challenging to build and maintain. Drosera aims to solve this problem by providing a platform which enables developers to easily create these systems at a fraction of the cost.",(0,a.kt)("br",null),(0,a.kt)("br",null),"The DeFi ecosystem has been rife with exploits and vulnerabilities. Drosera aims to mitigate these risks by providing a decentralized and trustless emergency response infrastructure for Protocols."),(0,a.kt)("details",null,(0,a.kt)("summary",null,'What is a "trustless decentralized network"?'),"A trustless decentralized network is a network that does not rely on a single entity to maintain the network. It is a network that is maintained by a group of independent entities that are incentivized to maintain the network through rewards and slashing."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Does an Operator need to be an Ethereum Validator?"),"No, Drosera does not require an Operator to be a Validator. It only requires the Operator to broadcast the results of its computation and perform submissions. However, an Operator may prefer to use their own Validator to reduce latency when interacting with the execution client and not relying on 3rd party RPC providers"),(0,a.kt)("h2",{id:"technicals"},"Technicals"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How would protocol owners give Drosera access to their protocols pause button or emergency response mechanisms?"),"A simple require statement that checks that the caller of the function must be the Trap contract created by the protocol itself.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},' require(msg.sender == trustedContract, "Caller is not a trusted contract");\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Are there any limits on the type of functions an emergency response could invoke or is that determined by the Trap creator?"),"Determined by the Trap creator and constrained to be objectively triggered by the validation logic."),(0,a.kt)("h2",{id:"effectiveness"},"Effectiveness"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What percentage of exploits would Drosera be able to detect and mitigate?"),"Using the historical knowledge of previous exploits that have been conducted in the ecosystem, we believe that Drosera can detect the majority of exploits. Even with liquidity siphon detection and state data monitoring, Drosera should be able to cover a high percentage of the exploits seen in space. In a containment and mitigation context, we see this number approaching 90% efficacy, which equates to impact on $3.4 billion of the $3.8 billion in lost funds last year alone."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How effective is Drosera at preventing exploits?"),"Prevention is only possible with centralized mechanisms which is an attack vector within itself. It inherently introduces censorship and breaks composability. Drosera is designed to be a decentralized and trustless automation protocol that provides emergency response infrastructure to Ethereum. It is not designed to prevent exploits, but to contain and mitigate them."))}p.isMDXComponent=!0}}]);