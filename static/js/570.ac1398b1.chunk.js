"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[570],{6459:function(n,e,t){t.d(e,{r:function(){return s}});var r,i=t(2791),o=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function c(n,e){var t=n.title,c=n.titleId,s=l(n,o);return i.createElement("svg",a({viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},s),t?i.createElement("title",{id:c},t):null,r||(r=i.createElement("path",{d:"M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z",stroke:"#292D32",strokeWidth:.902856,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=i.forwardRef(c);t.p},6674:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(8683);t(2791);var i,o,a,l=t(168),c=t(6444),s=c.ZP.button(i||(i=(0,l.Z)(["\n  display: inline-block;\n  padding: ",";\n  border-radius: ",";\n\n  font-weight: 600;\n  font-size: inherit;\n  line-height: 1.5;\n  white-space: nowrap;\n\n  ","\n"])),(function(n){var e=n.theme,t=n.large;return e.ratio.smallPhone(10,8)+" "+(t?e.ratio.smallPhone(10,52):e.ratio.smallPhone(10,26))}),(function(n){return n.large?"32px":"20px"}),(function(n){return n.outlined?(0,c.iv)(o||(o=(0,l.Z)(["\n          background: transparent;\n          color: ",";\n          transition: color, background 0.2s ease;\n          border: 1px solid ",";\n          &:hover {\n            color: #ffffff;\n            background: ",";\n          }\n        "])),(function(n){var e=n.theme,t=n.color;return e.color[t]}),(function(n){var e=n.theme,t=n.color;return e.color[t]}),(function(n){var e=n.theme,t=n.color;return e.color[t]})):(0,c.iv)(a||(a=(0,l.Z)(["\n          transition: color, background 0.2s linear;\n          background: #eda415;\n          color: #ffffff;\n          border: 1px solid #eda415;\n\n          &:hover {\n            background: transparent;\n            color: #eda415;\n          }\n        "])))})),u=t(184),d=function(n){var e=Object.assign({},(function(n){if(null==n)throw new TypeError("Cannot destructure "+n)}(n),n));return(0,u.jsx)(s,(0,r.Z)({},e))}},9760:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i,o=t(3433),a=t(9439),l=t(2791),c=t(168),s=t(6444),u=s.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n\n  display: inline-flex;\n\n  &:hover::before {\n    content: ",";\n\n    position: absolute;\n    top: 0;\n    left: 120%;\n  }\n"])),(function(n){return'"'+n.defRating+'"'})),d=s.ZP.button(i||(i=(0,c.Z)(["\n  font-size: ",";\n  line-height: 1;\n\n  color: ",";\n"])),(function(n){return n.big?"22px":"15px"}),(function(n){return n.active?"#000000":"#cccccc"})),f=t(184),h=function(n){var e=n.defRating,t=(n.setDefRating,n.big),r=(0,l.useState)(e),i=(0,a.Z)(r,2),c=i[0],s=i[1],h=(0,l.useState)(e),p=(0,a.Z)(h,2),m=p[0],g=p[1];return(0,f.jsx)(u,{defRating:e,children:(0,o.Z)(Array(5)).map((function(n,r){return r++,(0,f.jsx)(d,{active:r<=(m||c||e),onClick:function(){s(r)},onMouseEnter:function(){return g(r)},onMouseLeave:function(){return g(c)},big:t,children:"\u2605"},r)}))})},p=(0,l.memo)(h)},3833:function(n,e,t){t.d(e,{Z:function(){return D}});var r,i,o,a=t(2791),l=t(168),c=t(6444),s=c.ZP.h5(r||(r=(0,l.Z)(["\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1.5;\n\n  color: #1b5a7d;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.ratio.smallPhone(15,40)})),u=c.ZP.div(i||(i=(0,l.Z)(["\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(200px, auto);\n  gap: ",";\n\n  @media screen and (",") {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (",") {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media screen and (",") {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.ratio.smallPhone(10,15)}),(function(n){return n.theme.media.MaxNotebook}),(function(n){return n.theme.media.MaxTablet}),(function(n){return n.theme.media.MaxSmallMobile})),d=t(9439),f=t(6459),h=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function m(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function g(n,e){var t=n.title,r=n.titleId,i=m(n,h);return a.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?a.createElement("title",{id:r},t):null,o||(o=a.createElement("g",{stroke:"#292D32",strokeWidth:1.47531,strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{d:"M15.5289 12.1127C15.5289 14.0601 13.9553 15.6338 12.0079 15.6338C10.0605 15.6338 8.48682 14.0601 8.48682 12.1127C8.48682 10.1653 10.0605 8.59167 12.0079 8.59167C13.9553 8.59167 15.5289 10.1653 15.5289 12.1127Z"}),a.createElement("path",{d:"M12.008 20.2465C15.4799 20.2465 18.7157 18.2008 20.968 14.66C21.8532 13.2733 21.8532 10.9423 20.968 9.55549C18.7157 6.01475 15.4799 3.96899 12.008 3.96899C8.53612 3.96899 5.30028 6.01475 3.04798 9.55549C2.1628 10.9423 2.1628 13.2733 3.04798 14.66C5.30028 18.2008 8.53612 20.2465 12.008 20.2465Z"}))))}var b,x,v,j,Z,w,y=a.forwardRef(g),k=(t.p,t(4003)),P=t(9760),C=c.ZP.div(b||(b=(0,l.Z)(["\n  padding: 23px 13px;\n\n  border: 1px solid #b6b6b6;\n  border-radius: 20px;\n\n  font-size: 16px;\n  line-height: 1.6;\n"]))),O=c.ZP.div(x||(x=(0,l.Z)(["\n  position: relative;\n  margin-bottom: ",";\n  text-align: center;\n  padding-top: 50%;\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    object-fit: contain;\n  }\n\n  button {\n    position: absolute;\n    top: 14px;\n    right: 25px;\n    height: 28px;\n    width: 28px;\n    border-radius: 50%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    transition: background 0.1s linear;\n    background: #b3d4e5;\n    &:hover {\n      background: #87bcd9;\n    }\n\n    svg {\n      height: 16px;\n    }\n  }\n"])),(function(n){return n.hover?"25px":"10px"})),M=c.ZP.div(v||(v=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  h5 {\n    font-weight: 500;\n    color: #003f62;\n  }\n"]))),E=c.ZP.div(j||(j=(0,l.Z)(["\n  font-weight: 600;\n  color: #4a4a4a;\n"]))),S=c.ZP.div(Z||(Z=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 5px;\n  font-size: 16px;\n"]))),z=c.ZP.button(w||(w=(0,l.Z)(["\n  &:first-child {\n    white-space: nowrap;\n  }\n\n  padding: ",";\n  border-radius: 20px;\n\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.5;\n\n  background: #87bcd9;\n  color: #272727;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n\n  &:hover {\n    background: #51a3d0;\n  }\n\n  div {\n    height: 30px;\n    width: 30px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background: #eda415;\n    border-radius: 50%;\n    svg {\n      height: 17px;\n    }\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.ratio.smallPhone(7,8)," ").concat(e.ratio.smallPhone(5,17))})),R=t(7689),T=t(9434),I=t(2107),L=t(184),F=function(n){var e=n.item,t=(0,T.I0)(),r=(0,R.s0)(),i=(0,a.useState)(!1),o=(0,d.Z)(i,2),l=o[0],c=o[1],s=(0,a.useCallback)((function(){return r("".concat("/products/".concat(e.id)))}),[e,r]);return(0,L.jsxs)(C,{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[(0,L.jsxs)(O,{hover:l,children:[(0,L.jsx)("img",{src:e.imageUrl,alt:e.title,loading:"lazy"}),(0,L.jsx)("button",{"aria-label":"add to favorites",children:(0,L.jsx)(f.r,{})})]}),(0,L.jsx)(L.Fragment,{children:l?(0,L.jsxs)(S,{children:[(0,L.jsxs)(z,{onClick:function(){fetch("https://63d254dc1780fd6ab9c1f850.mockapi.io/cart",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({product:e,count:1})}),t((0,I.MN)({product:e,count:1}))},children:[(0,L.jsx)("span",{children:"Add to Cart"}),window.matchMedia("(min-width: 1200px)").matches&&(0,L.jsx)("div",{children:(0,L.jsx)(k.r,{})})]}),(0,L.jsx)(z,{onClick:s,children:(0,L.jsx)(y,{})})]}):(0,L.jsxs)(M,{children:[(0,L.jsx)("h5",{children:e.title}),(0,L.jsxs)(E,{children:["$",e.price]}),(0,L.jsx)(P.Z,{defRating:e.rating})]})})]})},W=(0,a.memo)(F),A=function(n){var e=n.products,t=n.title;return(0,L.jsxs)(L.Fragment,{children:[t&&(0,L.jsx)(s,{children:t}),(0,L.jsx)(u,{children:e.map((function(n){return(0,L.jsx)(W,{item:n},n.id)}))})]})},D=(0,a.memo)(A)},5570:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,o,a,l,c,s,u,d,f,h,p,m=t(3433),g=t(2791),b=t(9439),x=t(7689),v=t(168),j=t(6444),Z=(0,j.F4)(r||(r=(0,v.Z)(["\n  75% {\n    left: 0;\n  }\n  95% {\n    left: 100%;\n  }\n  98% {\n    left: 100%;\n  }\n  99% {\n    left: 0;\n  }\n"]))),w=(0,j.F4)(i||(i=(0,v.Z)(["\n  75% {\n    left: 0;\n  }\n  95% {\n    left: -300%;\n  }\n  98% {\n    left: -300%;\n  }\n  99% {\n    left: 0;\n  }\n"]))),y=(0,j.F4)(o||(o=(0,v.Z)(["\n  96% {\n    scroll-snap-align: center;\n  }\n  97% {\n    scroll-snap-align: none;\n  }\n  99% {\n    scroll-snap-align: none;\n  }\n  100% {\n    scroll-snap-align: center;\n  }\n"]))),k=j.ZP.div(a||(a=(0,v.Z)(["\n  position: relative;\n  width: 100%;\n  margin-top: ",";\n"])),(function(n){return n.theme.ratio.smallPhone(10,30)})),P=j.ZP.ul(l||(l=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (",") {\n    margin-bottom: 15px;\n  }\n\n  &:hover > li::before,\n  &:focus-within > li::before {\n    animation-name: none;\n  }\n"])),(function(n){return n.theme.media.MaxTablet})),C=j.ZP.li(c||(c=(0,v.Z)(['\n  position: relative;\n\n  flex: 0 0 100%;\n\n  display: flex;\n  flex-direction: column-reverse;\n\n  &::before {\n    content: "";\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n\n    scroll-snap-align: center;\n\n    @media (hover: hover) {\n      animation-name: ',", ",";\n\n      animation-timing-function: ease;\n      animation-duration: 10s;\n      animation-iteration-count: infinite;\n    }\n  }\n\n  @media screen and (",") {\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 ",";\n  }\n\n  &:last-child::before {\n    @media (hover: hover) {\n      animation-name: ",", ",";\n    }\n  }\n"])),Z,y,(function(n){return n.theme.media.MinTablet}),(function(n){var e=n.theme;return e.ratio.tablet(20,120)+" 0 "+e.ratio.tablet(10,100)}),w,y),O=j.ZP.section(s||(s=(0,v.Z)(["\n  @media screen and (",") {\n    flex: 0 0 310px;\n    margin-bottom: ",";\n  }\n\n  h5 {\n    font-weight: 700;\n    font-size: ",";\n    line-height: 1.5;\n\n    color: #1b5a7d;\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.media.MinTablet}),(function(n){return n.theme.ratio.tablet(20,90)}),(function(n){return n.theme.ratio.smallPhone(20,24)})),M=j.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n\n  button {\n    flex: 0 0 auto;\n  }\n\n  @media screen and (",") {\n    justify-content: center;\n  }\n"])),(function(n){return n.theme.media.MaxTablet})),E=j.ZP.div(d||(d=(0,v.Z)(["\n  flex: 0 0 40%;\n  position: relative;\n"]))),S=j.ZP.div(f||(f=(0,v.Z)(['\n  position: relative;\n  padding-bottom: 100%;\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  &::after {\n    content: "Only ','$";\n\n    position: absolute;\n    right: 0;\n    bottom: 10%;\n    width: ',";\n    height: ",";\n    padding: ",";\n\n    font-weight: 600;\n    font-size: ",";\n    line-height: 1.6;\n    color: #ffffff;\n    background: #eda415;\n    text-align: center;\n\n    border-radius: 50%;\n\n    @media screen and (",") {\n      right: ",";\n    }\n  }\n"])),(function(n){return n.price}),(function(n){return n.theme.ratio.smallPhone(80,40)}),(function(n){return n.theme.ratio.smallPhone(80,40)}),(function(n){return n.theme.ratio.smallPhone(15,10)}),(function(n){return n.theme.ratio.smallPhone(16,4)}),(function(n){return n.theme.media.MinTablet}),(function(n){return n.theme.ratio.tablet(-10,-22)})),z=j.ZP.div(h||(h=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n\n  @media screen and (",") {\n    position: absolute;\n    left: 15%;\n    bottom: 52px;\n    z-index: 1;\n  }\n"])),(function(n){return n.theme.media.MinTablet})),R=j.ZP.button(p||(p=(0,v.Z)(["\n  height: 16px;\n  width: 16px;\n\n  border-radius: 50%;\n\n  transition: background 0.1s linear;\n\n  ","\n"])),(function(n){return n.active?"background: #eda415":"border: 1px solid #adadad"})),T=t(6674),I=t(184),L=function(n){var e=n.page,t=n.index,r=(0,x.s0)(),i=(0,g.useCallback)((function(){return r("/products/".concat(e.id))}),[r,e]);return(0,I.jsxs)(C,{tabIndex:0,children:[(0,I.jsxs)(O,{children:[(0,I.jsx)("h5",{children:e.title}),(0,I.jsxs)(M,{children:[(0,I.jsx)(T.Z,{children:"Shop now"}),(0,I.jsx)(T.Z,{outlined:!0,onClick:i,color:"blue",children:"View more"})]})]}),(0,I.jsx)(E,{children:(0,I.jsx)(S,{price:e.price,children:(0,I.jsx)("img",{src:e.imageUrl||"",alt:e.title,loading:t?"lazy":void 0})})})]},e.id)},F=(0,g.memo)(L),W=function(n){var e=n.index,t=n.active,r=n.containerRef;return(0,I.jsx)(R,{"aria-label":"scroll to page",active:t,onClick:function(){return r.current.scroll(e*r.current.clientWidth,0)}})},A=(0,g.memo)(W),D=function(n){var e=n.pages,t=void 0===e?[{}]:e,r=(0,g.useState)(0),i=(0,b.Z)(r,2),o=i[0],a=i[1],l=(0,g.useRef)(),c=(0,g.useCallback)((function(n){var e=Math.round(n.target.scrollLeft/n.target.clientWidth)-o;e&&a((function(n){return n+e}))}),[o]);return(0,I.jsxs)(k,{children:[(0,I.jsx)(P,{onScroll:c,ref:l,children:t.map((function(n,e){return(0,I.jsx)(F,{page:n,index:e},n.id)}))}),(0,I.jsx)(z,{children:(0,m.Z)(Array(t.length)).map((function(n,e){return(0,I.jsx)(A,{active:o===e,containerRef:l,index:e},e)}))})]})},N=t(3833),B=t(9434),U=function(){var n=(0,B.v9)((function(n){return n.products.products})),e=(0,g.useMemo)((function(){return(0,m.Z)(n).sort((function(n,e){return e.rating-n.rating})).slice(0,4)}),[n]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{pages:e}),(0,I.jsx)(N.Z,{products:n.slice(0,12),title:"Popular products"})]})}}}]);
//# sourceMappingURL=570.ac1398b1.chunk.js.map