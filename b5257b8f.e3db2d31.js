(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var o=n(2),a=n(6),i=(n(0),n(94)),r={id:"probabilistic-rev-sharing",title:"Probabilistic Revenue Sharing",sidebar_label:"Probabilistic revenue sharing"},s={unversionedId:"probabilistic-rev-sharing",id:"probabilistic-rev-sharing",isDocsHomePage:!1,title:"Probabilistic Revenue Sharing",description:"More often than not, high quality content involves more than one person. So, how do you share a portion of your revenue if only one payment pointer is supported in the monetization meta tag?",source:"@site/docs/probabilistic-rev-sharing.md",slug:"/probabilistic-rev-sharing",permalink:"/docs/probabilistic-rev-sharing",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/probabilistic-rev-sharing.md",version:"current",sidebar_label:"Probabilistic revenue sharing",sidebar:"docs",previous:{title:"Micropayment Counter",permalink:"/docs/counter"},next:{title:"Start/Stop Monetization",permalink:"/docs/start-stop"}},c=[{value:"A basic example",id:"a-basic-example",children:[{value:"Code",id:"code",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Interactive example",id:"interactive-example",children:[]}]},{value:"Advanced topic and future ideas",id:"advanced-topic-and-future-ideas",children:[{value:"Code",id:"code-1",children:[]}]}],p={rightToc:c};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"More often than not, high quality content involves more than one person. So, how do you share a portion of your revenue if only one payment pointer is supported in the ",Object(i.b)("inlineCode",{parentName:"p"},"monetization")," meta tag?"),Object(i.b)("p",null,"One way is through probabilistic revenue sharing (revshare). In Web Monetization, probabilistic revenue sharing works by randomly choosing from a list of predefined payment pointers each time a web monetized visitor loads your page. The visitor pays to the chosen pointer until the page is reloaded or closed."),Object(i.b)("p",null,"The chance of a payment pointer being chosen is based on its assigned weight. For example, if Alice's payment pointer has a weight of 50, the pointer has a 50% chance of being chosen. The laws of probability state that Alice\u2019s share will approach 50% of the page\u2019s total revenue as more users visit the site."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Want to try probabilistic revenue sharing right away? Check out our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/prob-revshare"}),"Probabilistic Revshare Generator")))),Object(i.b)("h2",{id:"a-basic-example"},"A basic example"),Object(i.b)("p",null,"This example shows how to define a list of payment pointers and assign each pointer a weight. The easiest way to establish weight is by assigning values that add to 100."),Object(i.b)("h3",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),"<head>\n  <script>\n    // Define your revenue share here.\n    // If these weights add to 100 then they represent the percent each pointer gets.\n    const pointers = {\n      '$alice.example': 50,\n      '$bob.example': 40,\n      '$connie.example': 9.5,\n      '$dave.example': 0.5\n    }\n\n    function pickPointer () {\n      const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n      let choice = Math.random() * sum\n\n      for (const pointer in pointers) {\n        const weight = pointers[pointer]\n        if ((choice -= weight) <= 0) {\n          return pointer\n        }\n      }\n    }\n\n    window.addEventListener('load', () => {\n      const monetizationTag = document.createElement('meta')\n      monetizationTag.name = 'monetization'\n      monetizationTag.content = pickPointer()\n\n      document.head.appendChild(monetizationTag)\n    })\n  <\/script>\n</head>\n")),Object(i.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"First, we define the payment pointers and assign each one a weight. If the weights total 100, then they represent the percentage each pointer gets."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const pointers = {\n  '$alice.example': 50,\n  '$bob.example': 40,\n  '$connie.example': 9.5,\n  '$dave.example': 0.5\n  }\n")),Object(i.b)("p",null,"Next, we define how a payment pointer is chosen."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function pickPointer () {\n  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n  let choice = Math.random() * sum\n\n  for (const pointer in pointers) {\n    const weight = pointers[pointer]\n    if ((choice -= weight) <= 0) {\n      return pointer\n    }\n  }\n}\n")),Object(i.b)("p",null,"Finally, we add the code that dynamically inserts the randomly chosen payment pointer into the page on each load/refresh."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('load', () => {\n  const monetizationTag = document.createElement('meta')\n  monetizationTag.name = 'monetization'\n  monetizationTag.content = pickPointer()\n\n  document.head.appendChild(monetizationTag)\n})\n")),Object(i.b)("h3",{id:"interactive-example"},"Interactive example"),Object(i.b)("p",null,"This example shows how the random choices will approach the correct percentages over enough tries. You can customize the number of times to randomly choose a pointer and it will show you the results. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),Object(i.b)("p",null,"If you see the source files instead of the example, click ",Object(i.b)("strong",{parentName:"p"},"View App")," in the bottom right."),Object(i.b)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},Object(i.b)("iframe",{src:"https://glitch.com/embed/#!/embed/probabalistic-revenue-share-experiment?path=README.md&previewSize=100",title:"probabalistic-revenue-share-experiment on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})),Object(i.b)("h2",{id:"advanced-topic-and-future-ideas"},"Advanced topic and future ideas"),Object(i.b)("p",null,"Imagine you're embedding an image into an article. To use the image, the photographer has asked for a percentage of your earnings, so you add the photographer to your revshare."),Object(i.b)("p",null,"But what if the photographer is also sharing their revenue? You'd have to include everyone in the photographer's revshare in your revshare, but with a scaled-down percentage. Plus, you'd have to update your revshare every time the photographer's changes. That's a huge pain!"),Object(i.b)("p",null,"To make the process smoother, we can put probabilistic revshare into your payment pointer itself, instead of your page's JavaScript. The idea is similar to the vanity payment pointers discussed in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ctrl.blog/entry/ilp-payment-pointer-redirects.html"}),"an article by ctrl.blog"),". A vanity payment pointer is a redirect to your actual payment pointer. If we want to put in probabilistic revshare, we need to make that redirect random instead of redirecting to the same pointer each time."),Object(i.b)("p",null,"You can pick several payment pointers and a chance for each of them to be chosen, just like in the example in the previous section. The chance that you redirect to each pointer is equal to that pointer\u2019s expected share of the revenue."),Object(i.b)("p",null,"Here\u2019s an example of how you can implement this in an Express.js server. It uses the same code as our previous snippet to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"pickPointer")," function. We plan on offering a hosted tool that lets you manage revenue sharing payment pointers without writing code in the near future!"),Object(i.b)("h3",{id:"code-1"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Define your revenue share here.\n// If these weights add to 100 then they represent the percent each pointer gets.\nconst pointers = {\n  '$alice.example': 50,\n  '$bob.example': 40,\n  '$connie.example': 9.5,\n  '$dave.example': 0.5\n}\n\n// this is the same `pickPointer()` function implemented in the previous snippet\nfunction pickPointer () {\n  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n  let choice = Math.random() * sum\n\n  for (const pointer in pointers) {\n    const weight = pointers[pointer]\n    if ((choice -= weight) <= 0) {\n      return pointer\n    }\n  }\n}\n\napp.use((req, res, next) => {\n  // is this request meant for Web Monetization?\n  if (req.header('accept').includes('application/spsp4+json')) {\n    // choose our random payment pointer\n    const pointer = pickPointer()\n\n    // turn the payment pointer into a URL in accordance with the payment pointer spec\n    // https://paymentpointers.org/\n    const asUrl = new URL(pointer.startsWith('$') ? 'https://' + pointer.substring(1) : pointer)\n    asUrl.pathname = asUrl.pathname === '/' ? '/.well-known/pay' : asUrl.pathname\n\n    // redirect to our chosen payment pointer so they get paid\n    res.redirect(302, asUrl.href)\n  } else {\n    // if the request is not for Web Monetization, do nothing\n    next()\n  }\n})\n")),Object(i.b)("p",null,"With this scheme, your payment pointer contains all the revshare logic and you don't need to repeat the information on every page. The scheme also works recursively. One of the pointers that a vanity pointer randomly chooses could go on to make a random choice of its own. Your blog could choose the photographer's payment pointer 1% of the time, then 10% of the time the photographer's pointer chooses the photo editor's pointer."),Object(i.b)("p",null,"This lets you make some revsharing schemes that would be wildly impractical with existing schemes. By taking the pain out of revenue sharing, we can help everyone get compensated fairly!"),Object(i.b)("p",null,"If you want to get started with probabilistic revenue sharing today, try out our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/prob-revshare"}),"Probabilistic Revshare Generator"),"!"))}h.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),h=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=h(n),d=o,b=l["".concat(r,".").concat(d)]||l[d]||u[d]||i;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);