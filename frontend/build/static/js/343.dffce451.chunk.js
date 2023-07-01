"use strict";(self.webpackChunkmarket_project=self.webpackChunkmarket_project||[]).push([[343],{4121:function(e,a,r){r.d(a,{Z:function(){return o}});var t=r(1413),s="Card_cart-container__yqA0J",i="Card_image__77xSs",n=r(184),o=function(e){return(0,n.jsx)("div",(0,t.Z)((0,t.Z)({className:"".concat(s," ").concat(e.className," ").concat(e.image&&i)},e.image?{style:{backgroundImage:'url("'.concat(e.image,'")')}}:{}),{},{children:e.children}))}},9185:function(e,a,r){r.r(a),r.d(a,{default:function(){return Se}});var t=r(2791),s=r(7689),i=r(4165),n=r(5861),o=r(9439),l=r(9434),c=r(1880),d=r(1413),u=r(5987),f=r(1694),v=r.n(f),m=r(184),p=["as","disabled"];function b(e){var a=e.tagName,r=e.disabled,t=e.href,s=e.target,i=e.rel,n=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=s||null!=i?"a":"button");var u={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},u];var f=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?s:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},u]}var x=t.forwardRef((function(e,a){var r=e.as,t=e.disabled,s=function(e,a){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,p),i=b(Object.assign({tagName:r,disabled:t},s)),n=(0,o.Z)(i,2),l=n[0],c=n[1].tagName;return(0,m.jsx)(c,Object.assign({},s,l,{ref:a}))}));x.displayName="Button";var h=r(162),y=["as","bsPrefix","variant","size","active","disabled","className"],N=t.forwardRef((function(e,a){var r=e.as,t=e.bsPrefix,s=e.variant,i=void 0===s?"primary":s,n=e.size,l=e.active,c=void 0!==l&&l,f=e.disabled,p=void 0!==f&&f,x=e.className,N=(0,u.Z)(e,y),j=(0,h.vE)(t,"btn"),Z=b((0,d.Z)({tagName:r,disabled:p},N)),k=(0,o.Z)(Z,2),g=k[0],C=k[1].tagName;return(0,m.jsx)(C,(0,d.Z)((0,d.Z)((0,d.Z)({},g),N),{},{ref:a,disabled:p,className:v()(x,j,c&&"active",i&&"".concat(j,"-").concat(i),n&&"".concat(j,"-").concat(n),N.href&&p&&"disabled")}))}));N.displayName="Button";var j=N,Z=["as","bsPrefix","className"],k=["className"];var g=t.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,s=(0,u.Z)(e,Z);r=(0,h.vE)(r,"col");var i=(0,h.pi)(),n=(0,h.zG)(),o=[],l=[];return i.forEach((function(e){var a,t,i,c=s[e];delete s[e],"object"===typeof c&&null!=c?(a=c.span,t=c.offset,i=c.order):a=c;var d=e!==n?"-".concat(e):"";a&&o.push(!0===a?"".concat(r).concat(d):"".concat(r).concat(d,"-").concat(a)),null!=i&&l.push("order".concat(d,"-").concat(i)),null!=t&&l.push("offset".concat(d,"-").concat(t))})),[(0,d.Z)((0,d.Z)({},s),{},{className:v().apply(void 0,[t].concat(o,l))}),{as:a,bsPrefix:r,spans:o}]}(e),t=(0,o.Z)(r,2),s=t[0],i=s.className,n=(0,u.Z)(s,k),l=t[1],c=l.as,f=void 0===c?"div":c,p=l.bsPrefix,b=l.spans;return(0,m.jsx)(f,(0,d.Z)((0,d.Z)({},n),{},{ref:a,className:v()(i,!b.length&&p)}))}));g.displayName="Col";var C=g,w=r(2007),P=r.n(w),I=["as","className","type","tooltip"],F={type:P().string,tooltip:P().bool,as:P().elementType},O=t.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,s=e.className,i=e.type,n=void 0===i?"valid":i,o=e.tooltip,l=void 0!==o&&o,c=(0,u.Z)(e,I);return(0,m.jsx)(t,(0,d.Z)((0,d.Z)({},c),{},{ref:a,className:v()(s,"".concat(n,"-").concat(l?"tooltip":"feedback"))}))}));O.displayName="Feedback",O.propTypes=F;var E=O,R=t.createContext({}),S=["id","bsPrefix","className","type","isValid","isInvalid","as"],L=t.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,i=e.className,n=e.type,o=void 0===n?"checkbox":n,l=e.isValid,c=void 0!==l&&l,f=e.isInvalid,p=void 0!==f&&f,b=e.as,x=void 0===b?"input":b,y=(0,u.Z)(e,S),N=(0,t.useContext)(R).controlId;return s=(0,h.vE)(s,"form-check-input"),(0,m.jsx)(x,(0,d.Z)((0,d.Z)({},y),{},{ref:a,type:o,id:r||N,className:v()(i,s,c&&"is-valid",p&&"is-invalid")}))}));L.displayName="FormCheckInput";var _=L,G=["bsPrefix","className","htmlFor"],z=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.htmlFor,n=(0,u.Z)(e,G),o=(0,t.useContext)(R).controlId;return r=(0,h.vE)(r,"form-check-label"),(0,m.jsx)("label",(0,d.Z)((0,d.Z)({},n),{},{ref:a,htmlFor:i||o,className:v()(s,r)}))}));z.displayName="FormCheckLabel";var T=z;var V=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],q=t.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,i=e.bsSwitchPrefix,n=e.inline,o=void 0!==n&&n,l=e.reverse,c=void 0!==l&&l,f=e.disabled,p=void 0!==f&&f,b=e.isValid,x=void 0!==b&&b,y=e.isInvalid,N=void 0!==y&&y,j=e.feedbackTooltip,Z=void 0!==j&&j,k=e.feedback,g=e.feedbackType,C=e.className,w=e.style,P=e.title,I=void 0===P?"":P,F=e.type,O=void 0===F?"checkbox":F,S=e.label,L=e.children,G=e.as,z=void 0===G?"input":G,q=(0,u.Z)(e,V);s=(0,h.vE)(s,"form-check"),i=(0,h.vE)(i,"form-switch");var B=(0,t.useContext)(R).controlId,D=(0,t.useMemo)((function(){return{controlId:r||B}}),[B,r]),A=!L&&null!=S&&!1!==S||function(e,a){return t.Children.toArray(e).some((function(e){return t.isValidElement(e)&&e.type===a}))}(L,T),J=(0,m.jsx)(_,(0,d.Z)((0,d.Z)({},q),{},{type:"switch"===O?"checkbox":O,ref:a,isValid:x,isInvalid:N,disabled:p,as:z}));return(0,m.jsx)(R.Provider,{value:D,children:(0,m.jsx)("div",{style:w,className:v()(C,A&&s,o&&"".concat(s,"-inline"),c&&"".concat(s,"-reverse"),"switch"===O&&i),children:L||(0,m.jsxs)(m.Fragment,{children:[J,A&&(0,m.jsx)(T,{title:I,children:S}),k&&(0,m.jsx)(E,{type:g,tooltip:Z,children:k})]})})})}));q.displayName="FormCheck";var B=Object.assign(q,{Input:_,Label:T}),D=r(4942),A=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),J=t.forwardRef((function(e,a){var r,s,i=e.bsPrefix,n=e.type,o=e.size,l=e.htmlSize,c=e.id,f=e.className,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,j=e.readOnly,Z=e.as,k=void 0===Z?"input":Z,g=(0,u.Z)(e,A),C=(0,t.useContext)(R).controlId;(i=(0,h.vE)(i,"form-control"),N)?r=(0,D.Z)({},"".concat(i,"-plaintext"),!0):(s={},(0,D.Z)(s,i,!0),(0,D.Z)(s,"".concat(i,"-").concat(o),o),r=s);return(0,m.jsx)(k,(0,d.Z)((0,d.Z)({},g),{},{type:n,size:l,ref:a,readOnly:j,id:c||C,className:v()(f,r,b&&"is-valid",y&&"is-invalid","color"===n&&"".concat(i,"-color"))}))}));J.displayName="FormControl";var Y=Object.assign(J,{Feedback:E}),H=(0,r(6543).Z)("form-floating"),M=["controlId","as"],K=t.forwardRef((function(e,a){var r=e.controlId,s=e.as,i=void 0===s?"div":s,n=(0,u.Z)(e,M),o=(0,t.useMemo)((function(){return{controlId:r}}),[r]);return(0,m.jsx)(R.Provider,{value:o,children:(0,m.jsx)(i,(0,d.Z)((0,d.Z)({},n),{},{ref:a}))})}));K.displayName="FormGroup";var U=K,W=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],X=t.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,i=e.bsPrefix,n=e.column,o=void 0!==n&&n,l=e.visuallyHidden,c=void 0!==l&&l,f=e.className,p=e.htmlFor,b=(0,u.Z)(e,W),x=(0,t.useContext)(R).controlId;i=(0,h.vE)(i,"form-label");var y="col-form-label";"string"===typeof o&&(y="".concat(y," ").concat(y,"-").concat(o));var N=v()(f,i,c&&"visually-hidden",o&&y);return p=p||x,o?(0,m.jsx)(C,(0,d.Z)({ref:a,as:"label",className:N,htmlFor:p},b)):(0,m.jsx)(s,(0,d.Z)({ref:a,className:N,htmlFor:p},b))}));X.displayName="FormLabel";var Q=X,$=["bsPrefix","className","id"],ee=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.id,n=(0,u.Z)(e,$),o=(0,t.useContext)(R).controlId;return r=(0,h.vE)(r,"form-range"),(0,m.jsx)("input",(0,d.Z)((0,d.Z)({},n),{},{type:"range",ref:a,className:v()(s,r),id:i||o}))}));ee.displayName="FormRange";var ae=ee,re=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],te=t.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,i=e.htmlSize,n=e.className,o=e.isValid,l=void 0!==o&&o,c=e.isInvalid,f=void 0!==c&&c,p=e.id,b=(0,u.Z)(e,re),x=(0,t.useContext)(R).controlId;return r=(0,h.vE)(r,"form-select"),(0,m.jsx)("select",(0,d.Z)((0,d.Z)({},b),{},{size:i,ref:a,className:v()(n,r,s&&"".concat(r,"-").concat(s),l&&"is-valid",f&&"is-invalid"),id:p||x}))}));te.displayName="FormSelect";var se=te,ie=["bsPrefix","className","as","muted"],ne=t.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,s=e.as,i=void 0===s?"small":s,n=e.muted,o=(0,u.Z)(e,ie);return r=(0,h.vE)(r,"form-text"),(0,m.jsx)(i,(0,d.Z)((0,d.Z)({},o),{},{ref:a,className:v()(t,r,n&&"text-muted")}))}));ne.displayName="FormText";var oe=ne,le=t.forwardRef((function(e,a){return(0,m.jsx)(B,(0,d.Z)((0,d.Z)({},e),{},{ref:a,type:"switch"}))}));le.displayName="Switch";var ce=Object.assign(le,{Input:B.Input,Label:B.Label}),de=["bsPrefix","className","children","controlId","label"],ue=t.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,s=e.children,i=e.controlId,n=e.label,o=(0,u.Z)(e,de);return r=(0,h.vE)(r,"form-floating"),(0,m.jsxs)(U,(0,d.Z)((0,d.Z)({ref:a,className:v()(t,r),controlId:i},o),{},{children:[s,(0,m.jsx)("label",{htmlFor:i,children:n})]}))}));ue.displayName="FloatingLabel";var fe=ue,ve=["className","validated","as"],me={_ref:P().any,validated:P().bool,as:P().elementType},pe=t.forwardRef((function(e,a){var r=e.className,t=e.validated,s=e.as,i=void 0===s?"form":s,n=(0,u.Z)(e,ve);return(0,m.jsx)(i,(0,d.Z)((0,d.Z)({},n),{},{ref:a,className:v()(r,t&&"was-validated")}))}));pe.displayName="Form",pe.propTypes=me;var be=Object.assign(pe,{Group:U,Control:Y,Floating:H,Check:B,Switch:ce,Label:Q,Text:oe,Range:ae,Select:se,FloatingLabel:fe}),xe=["bsPrefix","className","as"],he=t.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,s=e.as,i=void 0===s?"div":s,n=(0,u.Z)(e,xe),o=(0,h.vE)(r,"row"),l=(0,h.pi)(),c=(0,h.zG)(),f="".concat(o,"-cols"),p=[];return l.forEach((function(e){var a,r=n[e];delete n[e],a=null!=r&&"object"===typeof r?r.cols:r;var t=e!==c?"-".concat(e):"";null!=a&&p.push("".concat(f).concat(t,"-").concat(a))})),(0,m.jsx)(i,(0,d.Z)((0,d.Z)({ref:a},n),{},{className:v().apply(void 0,[t,o].concat(p))}))}));he.displayName="Row";var ye=he,Ne=function(e){var a=(0,t.useState)(!1),r=(0,o.Z)(a,2),s=r[0],i=r[1],n=(0,t.useRef)(),l=(0,t.useRef)(),c=(0,t.useRef)(),d=(0,t.useRef)(),u=(0,t.useRef)(),f="d-flex justify-content-center align-items-center mb-3";return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(be,{noValidate:!0,validated:s,onSubmit:function(a){a.preventDefault(),!1===a.currentTarget.checkValidity()?a.stopPropagation():e.postNewOrder({firstName:n.current.value,lastName:l.current.value,city:c.current.value,state:d.current.value,zip:u.current.value}),i(!0)},className:"w-50",children:[(0,m.jsx)("h5",{className:"text-center mb-4 mt-2",children:"Please provide the requested information below to ensure a seamless process and enable us to serve you better:"}),(0,m.jsxs)(ye,{className:f,children:[(0,m.jsxs)(be.Group,{as:C,md:"4",controlId:"validationCustom01",children:[(0,m.jsx)(be.Label,{children:"First name"}),(0,m.jsx)(be.Control,{ref:n,disabled:e.isErrorOnGet,required:!0,type:"text",placeholder:"First name"}),(0,m.jsx)(be.Control.Feedback,{children:"Looks good!"})]}),(0,m.jsxs)(be.Group,{as:C,md:"4",controlId:"validationCustom02",children:[(0,m.jsx)(be.Label,{children:"Last name"}),(0,m.jsx)(be.Control,{ref:l,disabled:e.isErrorOnGet,required:!0,type:"text",placeholder:"Last name"}),(0,m.jsx)(be.Control.Feedback,{children:"Looks good!"})]})]}),(0,m.jsxs)(ye,{className:f,children:[(0,m.jsxs)(be.Group,{as:C,md:"4",controlId:"validationCustom03",children:[(0,m.jsx)(be.Label,{children:"City"}),(0,m.jsx)(be.Control,{ref:c,disabled:e.isErrorOnGet,type:"text",placeholder:"City",required:!0}),(0,m.jsx)(be.Control.Feedback,{type:"invalid",children:"Provide a valid city."})]}),(0,m.jsxs)(be.Group,{as:C,md:"3",controlId:"validationCustom04",children:[(0,m.jsx)(be.Label,{children:"State"}),(0,m.jsx)(be.Control,{ref:d,disabled:e.isErrorOnGet,type:"text",placeholder:"State",required:!0}),(0,m.jsx)(be.Control.Feedback,{type:"invalid",children:"Provide a valid state."})]}),(0,m.jsxs)(be.Group,{as:C,md:"3",controlId:"validationCustom05",children:[(0,m.jsx)(be.Label,{children:"Zip"}),(0,m.jsx)(be.Control,{disabled:e.isErrorOnGet,ref:u,type:"text",placeholder:"Zip",required:!0}),(0,m.jsx)(be.Control.Feedback,{type:"invalid",children:"Provide a valid zip."})]})]}),(0,m.jsx)(be.Group,{className:f,children:(0,m.jsx)(be.Check,{required:!0,disabled:e.isErrorOnGet,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",feedbackType:"invalid"})}),(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)(j,{disabled:e.isThereError,type:"submit",children:"Place Order"}),e.isErrorOnPost&&(0,m.jsx)(be.Control.Feedback,{style:{color:"red"},children:"Please Try Again"})]})]})})},je=r(4121),Ze=r(4450),ke=r(1862),ge=r.p+"static/media/checkoutLogo.2fb0d8ad24272b7fd18e.webp",Ce=r(3359),we=r.p+"static/media/success.a3a7e51cff82c1075841.gif",Pe="OrderSubmitted_container__cZdlB",Ie=function(){return(0,m.jsx)(je.Z,{children:(0,m.jsxs)("div",{className:Pe,children:[(0,m.jsx)("span",{children:"Your order has been submitted successfully!"}),(0,m.jsx)("br",{}),(0,m.jsx)("img",{src:we,alt:"success animation"})]})})},Fe="CheckOut_checkout-outer__YsJk1",Oe="CheckOut_checkout-container__hWXBD",Ee=r(4428),Re=function(){var e=(0,ke.Z)(),a=(0,o.Z)(e,2),r=a[0],s=a[1],d=(0,t.useState)(!1),u=(0,o.Z)(d,2),f=u[0],v=u[1],p=(0,t.useState)(!1),b=(0,o.Z)(p,2),x=b[0],h=b[1],y=(0,l.I0)(),N=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(a){var t,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={customerInfo:a,products:r},e.prev=1,h(!1),e.next=5,fetch("".concat(Ee.L,"/orders"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 5:if((s=e.sent).ok){e.next=8;break}throw new Ze.Z(s.status);case 8:v(!0),localStorage.removeItem("isCheckOutBtnClicked"),y(Ce.Up.resetCartSlice()),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0.message),h(!0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a){return e.apply(this,arguments)}}(),j=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{children:"Let's review what we have...\ud83d\ude09"}),(0,m.jsxs)(je.Z,{className:Oe,image:ge,children:[s?(0,m.jsx)(Ze.Z,{}):(0,m.jsx)(c.Z,{items:r,isCheckOutPage:!0}),(0,m.jsx)(Ne,{isErrorOnPost:x,isErrorOnGet:s,postNewOrder:N})]})]});return f&&(j=(0,m.jsx)(Ie,{})),(0,m.jsx)("div",{className:Fe,children:j})},Se=function(){var e=(0,s.s0)();return(0,t.useEffect)((function(){return localStorage.getItem("isCheckOutBtnClicked")||e(".."),function(){localStorage.removeItem("isCheckOutBtnClicked")}}),[e]),(0,m.jsx)(Re,{})}},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=343.dffce451.chunk.js.map