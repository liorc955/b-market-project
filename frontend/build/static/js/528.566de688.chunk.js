"use strict";(self.webpackChunkmarket_project=self.webpackChunkmarket_project||[]).push([[528],{4121:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(1413),c="Card_cart-container__yqA0J",i="Card_image__77xSs",a=n(184),s=function(t){return(0,a.jsx)("div",(0,r.Z)((0,r.Z)({className:"".concat(c," ").concat(t.className," ").concat(t.image&&i)},t.image?{style:{backgroundImage:'url("'.concat(t.image,'")')}}:{}),{},{children:t.children}))}},7709:function(t,e,n){n.r(e),n.d(e,{default:function(){return k},productLoader:function(){return Z}});var r=n(4165),c=n(1413),i=n(5861),a=n(27),s=n(7689),u=n(4121),o="ProductInfo_product-outer__gfAUE",d="ProductInfo_product-container__VjcNk",p=n(3446),l=n(9439),f=n(2791),h="Input_input-group__iqQwv",m=n(184),x=function(t){var e=(0,f.useState)(1),n=(0,l.Z)(e,2),r=n[0],c=n[1],i="btn btn-light";return(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("button",{onClick:function(){1!==r&&c((function(t){return--t}))},type:"button",className:i,children:"-"}),(0,m.jsx)("input",{ref:t.inputRef,type:"number",disabled:!0,value:r}),(0,m.jsx)("button",{onClick:function(){5!==r&&c((function(t){return++t}))},type:"button",className:i,children:"+"})]})},g=n(253),j=n(9434),v=n.p+"static/media/vegan.bb26c4f502e830fed208.png",b=n(3359),_=function(){var t=(0,s.f_)(),e=(0,f.useRef)(),n=(0,j.I0)(),r=t.description;r=r.substring(0,r.indexOf(".")+1);var c=(0,f.useCallback)((function(){n(b.Up.addItemToCart({item:{productId:t.id,title:t.title,price:t.price,description:r,image:t.image,quantity:+e.current.value}}))}),[r,n,t.id,t.image,t.price,t.title]);return(0,m.jsx)("div",{className:o,children:(0,m.jsxs)(u.Z,{className:d,children:[(0,m.jsx)(p.Z,{alt:t.title,src:t.image}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:t.title}),(0,m.jsx)("p",{children:t.description}),(0,m.jsxs)("p",{style:{fontWeight:"bold"},children:["Price: ",t.price,"$"]}),(0,m.jsx)(x,{inputRef:e}),(0,m.jsx)(g.Z,{onAddItem:c})]}),(0,m.jsx)("img",{style:{height:"80px",width:"80px"},alt:"vegan product",src:v})]})})},k=function(){return(0,m.jsx)(_,{})},Z=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,s,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,n=e.params,i=n.id,t.prev=2,t.next=5,fetch("http://127.0.0.1:8080/products/".concat(i));case 5:if((s=t.sent).ok){t.next=8;break}throw new Error("Cound not fetch the product info.");case 8:return t.next=10,s.json();case 10:return u=t.sent,t.abrupt("return",(0,c.Z)((0,c.Z)({},u),{},{id:i}));case 14:throw t.prev=14,t.t0=t.catch(2),(0,a.AV)({message:t.t0.message},{status:500});case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=528.566de688.chunk.js.map