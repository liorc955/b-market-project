"use strict";(self.webpackChunkmarket_project=self.webpackChunkmarket_project||[]).push([[280],{3502:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z},productLoader:function(){return w}});var r=n(4165),i=n(1413),c=n(5861),s=n(7689),u=n(1989),a=n(4121),o="ProductInfo_product-outer__gfAUE",d="ProductInfo_product-container__VjcNk",p=n(3446),l=n(9439),f=n(2791),h="CounterInput_input-group__8OlHi",x=n(184),j=function(t){var e=(0,f.useState)(1),n=(0,l.Z)(e,2),r=n[0],i=n[1],c="btn btn-light";return(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("button",{onClick:function(){1!==r&&i((function(t){return--t}))},type:"button",className:c,children:"-"}),(0,x.jsx)("input",{ref:t.inputRef,type:"number",disabled:!0,value:r}),(0,x.jsx)("button",{onClick:function(){5!==r&&i((function(t){return++t}))},type:"button",className:c,children:"+"})]})},m=n(550),b=n(9434),g=n.p+"static/media/vegan.bb26c4f502e830fed208.png",v=n(3359),k=function(t){var e=(0,f.useRef)(),n=(0,b.I0)(),r=t.product,i=r.description;i=i.substring(0,i.indexOf(".")+1);var c=(0,f.useCallback)((function(){n(v.Up.addItemToCart({item:{productId:r.id,title:r.title,price:r.price,description:i,image:r.image,quantity:+e.current.value}}))}),[i,n,r.id,r.image,r.price,r.title]);return(0,x.jsx)("div",{className:o,children:(0,x.jsxs)(a.Z,{className:d,children:[(0,x.jsx)(p.Z,{alt:r.title,src:r.image}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:r.title}),(0,x.jsx)("p",{children:r.description}),(0,x.jsxs)("p",{style:{fontWeight:"bold"},children:["Price: ",r.price,"$"]}),(0,x.jsx)(j,{inputRef:e}),(0,x.jsx)(m.Z,{onClick:c,children:"Add To Cart"})]}),(0,x.jsx)("img",{style:{height:"80px",width:"80px"},alt:"vegan product",src:g})]})})},_=n(4428),C=n(8119),Z=function(){var t=(0,s.f_)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.Z,{title:t.title,description:t.description}),(0,x.jsx)(k,{product:t})]})},w=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,s,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,n=e.params,c=n.id,t.prev=2,t.next=5,fetch("".concat(_.U,"/products/").concat(c));case 5:if((s=t.sent).ok){t.next=8;break}throw new Error("Cound not fetch the product info.");case 8:return t.next=10,s.json();case 10:return a=t.sent,t.abrupt("return",(0,i.Z)((0,i.Z)({},a),{},{id:c}));case 14:throw t.prev=14,t.t0=t.catch(2),(0,u.AV)({message:t.t0.message},{status:500});case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=280.7ecd951f.chunk.js.map