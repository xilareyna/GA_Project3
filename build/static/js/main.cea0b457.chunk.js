(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),r=c.n(a),n=c(20),i=c.n(n),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))},l=c(3),j=c(2),b=c(8),u=c.n(b),h=c(22),d=c(9),p=function(e){var t=Object(a.useRef)(null),c=Object(a.useRef)(null),r=Object(a.useRef)(null),n=Object(a.useRef)(null),i=Object(a.useRef)(null),o=function(){var s=Object(d.a)(u.a.mark((function s(a){var o,l,j,b,d,p,O,x;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),o=t.current.value,l=c.current.value,j=r.current.value,b=n.current.value,d=i.current.value,p=JSON.stringify({productName:o,description:l,price:j,img:b,productType:d}),a.currentTarget.reset(),s.prev=8,s.next=11,fetch("http://localhost:3000/merchant",{method:"POST",headers:{"Content-type":"application/json"},body:p});case 11:return O=s.sent,s.next=14,O.json();case 14:x=s.sent,e.updateItems([].concat(Object(h.a)(e.items),[x])),console.log(a.currentTarget),console.log(a.target),s.next=23;break;case 20:s.prev=20,s.t0=s.catch(8),console.error(s.t0);case 23:case"end":return s.stop()}}),s,null,[[8,20]])})));return function(e){return s.apply(this,arguments)}}();return Object(s.jsxs)("form",{onSubmit:o,children:[Object(s.jsx)("input",{type:"text",ref:t,placeholder:"Product Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",ref:i,placeholder:"Product Type"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",ref:c,placeholder:"Description"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"number",ref:r,placeholder:"Price"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",ref:n,placeholder:"Image Link"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",value:"Create Item"})]})};var O=c(14);c(29);var x=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],n=function(){var e=Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://xila-jewelry-app.herokuapp.com/merchant");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),Object(s.jsxs)("div",{id:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsxs)("ul",{className:"ulHeader",children:[Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/",className:"headerLinks",children:"Jewelry"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/about",className:"headerLinks",children:"About"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/checkout",className:"headerLinks",children:Object(s.jsx)("i",{className:"fas fa-shopping-cart"})})})]}),Object(s.jsx)("h1",{id:"homeTitle",children:"Xila Jewelry"})]}),Object(s.jsx)("ul",{children:c.map((function(e){return Object(s.jsxs)("li",{class:"posts",children:[Object(s.jsx)(l.b,{to:e._id,className:"productTitleLink",children:e.productName}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:e.img,class:"listImgs"}),Object(s.jsx)("br",{})," ",Object(s.jsxs)("span",{id:"postPrice",children:["$",e.price,".00"]}),Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/checkout",children:Object(s.jsx)("button",{children:"Add to cart"})})]},e._id)}))}),Object(s.jsxs)("footer",{id:"homeFooter",children:["Give us a shout!\u2728",Object(s.jsx)("br",{}),Object(s.jsx)("i",{className:"fas fa-phone-square-alt",id:"contactIcons"}),"555-5555",Object(s.jsx)("i",{className:"fas fa-envelope-square",id:"contactIcons"}),"Xila@Jewelry.com"]})]})};c(35);c(36);c(37);var m=[{path:"/new",name:"New Page",component:function(e){return Object(s.jsx)(p,{})}},{path:"/about",name:"About Page",component:function(e){return Object(s.jsxs)("div",{id:"aboutDiv",children:[Object(s.jsxs)("ul",{className:"ulHeader",children:[Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/",className:"headerLinks",children:"Jewelry"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/about",className:"headerLinks",children:"About"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/checkout",className:"headerLinks",children:Object(s.jsx)("i",{class:"fas fa-shopping-cart"})})})]}),Object(s.jsxs)("body",{id:"aboutBody",children:[Object(s.jsx)("h1",{id:"aboutH",children:"Welcome to Xila Jewelry!"}),Object(s.jsx)("p",{id:"aboutP",children:"At XJ, we not only hand-make all of our jewelry, we handpick all of our materials. Our gemstones are carefully selected from trusted providers worldwide and our metals are sourced only in the United States. Making smart, transparent choices with our materials is part of our promise to give you only the real deal. It\u2019s also one way we are able to provide high-quality pieces at an affordable price."})]}),Object(s.jsxs)("footer",{id:"homeFooterAbout",children:["Give us a shout!\u2728",Object(s.jsx)("br",{}),Object(s.jsx)("i",{className:"fas fa-phone-square-alt",id:"contactIconsAbout"}),"555-5555",Object(s.jsx)("i",{className:"fas fa-envelope-square",id:"contactIconsAbout"}),"Xila@Jewelry.com"]})]})}},{path:"/checkout",name:"Checkout Page",component:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{className:"ulHeader",children:[Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/",className:"headerLinks",children:"Jewelry"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/about",className:"headerLinks",children:"About"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/checkout",className:"headerLinks",children:Object(s.jsx)("i",{class:"fas fa-shopping-cart"})})})]}),Object(s.jsx)("h1",{className:"cartHeading",children:"Shopping Cart"}),Object(s.jsxs)("footer",{id:"cartFooter",children:["Give us a shout!\u2728",Object(s.jsx)("br",{}),Object(s.jsx)("i",{className:"fas fa-phone-square-alt",id:"contactIcons"}),"555-5555",Object(s.jsx)("i",{className:"fas fa-envelope-square",id:"contactIcons"}),"Xila@Jewelry.com"]})]})}},{path:"/:id",name:"Show Page",component:function(e){var t=Object(a.useState)({}),c=Object(O.a)(t,2),r=c[0],n=c[1],i=function(){var t=Object(d.a)(u.a.mark((function t(){var c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/merchant/".concat(e.match.params.id));case 3:return c=t.sent,t.next=6,c.json();case 6:s=t.sent,n(s),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{className:"ulHeader",children:[Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/",className:"headerLinks",children:"Jewelry"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/about",className:"headerLinks",children:"About"})}),Object(s.jsx)("li",{className:"headerLi",children:Object(s.jsx)(l.b,{to:"/checkout",className:"headerLinks",children:Object(s.jsx)("i",{className:"fas fa-shopping-cart"})})})]}),Object(s.jsx)("h1",{className:"showHeader",children:r.productName}),Object(s.jsx)("br",{}),Object(s.jsxs)("ul",{className:"showUl",children:[Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:r.img,className:"showListImgs"}),Object(s.jsxs)("li",{className:"showJewels",children:[Object(s.jsx)("br",{}),r.description,Object(s.jsx)("br",{}),"Price: $",r.price,".00",Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/checkout",children:Object(s.jsx)("button",{id:"showBtn",children:"Add to cart"})})]},r._id)]}),Object(s.jsx)("br",{}),Object(s.jsxs)("footer",{id:"homeFooter",children:["Give us a shout!\u2728",Object(s.jsx)("br",{}),Object(s.jsx)("i",{className:"fas fa-phone-square-alt",id:"contactIcons"}),"555-5555",Object(s.jsx)("i",{className:"fas fa-envelope-square",id:"contactIcons"}),"Xila@Jewelry.com"]})]})}},{path:"/",name:"Home Page",component:x}];i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(j.c,{children:m.map((function(e){return Object(s.jsx)(j.a,{path:e.path,component:e.component},e.name)}))})})}),document.getElementById("root")),o()}},[[38,1,2]]]);
//# sourceMappingURL=main.cea0b457.chunk.js.map