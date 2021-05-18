(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[5],{149:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return u}));var i=e(29),c=function(n){return n.shop},a=Object(i.a)([c],(function(n){return n.collections})),r=Object(i.a)([a],(function(n){return n?Object.keys(n).map((function(t){return n[t]})):[]})),o=function(n){return Object(i.a)([a],(function(t){return t?t[n]:null}))},d=Object(i.a)([c],(function(n){return n.isFetching})),u=Object(i.a)([c],(function(n){return!!n.collections}))},150:function(n,t,e){"use strict";var i=e(10),c=e(71),a=(e(0),e(73)),r=e(3);t.a=function(n){return function(t){var e=t.isLoading,o=Object(c.a)(t,["isLoading"]);return e?Object(r.jsx)(a.a,{}):Object(r.jsx)(n,Object(i.a)({},o))}}},151:function(n,t,e){"use strict";e(0);var i,c,a,r,o,d,u=e(36),s=e(39),l=e(12),b=e(13),p=e(72),j=b.c.div(i||(i=Object(l.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      transition: 0.8s;\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]))),m=Object(b.c)(p.a)(c||(c=Object(l.a)(["\n  width: 80%;\n  transition: 0.6s;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px 0 10px;\n  }\n"]))),f=b.c.div(a||(a=Object(l.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),x=b.c.div(r||(r=Object(l.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),h=b.c.span(o||(o=Object(l.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),O=b.c.span(d||(d=Object(l.a)(["\n  width: 10%;\n  text-align: right;\n\n  @media screen and (max-width: 800px) {\n    width: 20%;\n  }\n"]))),g=e(3);t.a=Object(u.b)(null,(function(n){return{addItem:function(t){return n(Object(s.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,i=t.name,c=t.price,a=t.imageUrl;return Object(g.jsxs)(j,{children:[Object(g.jsx)(f,{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(g.jsxs)(x,{children:[Object(g.jsx)(h,{children:i}),Object(g.jsxs)(O,{children:["$ ",c]})]}),Object(g.jsx)(m,{onClick:function(){return e(t)},inverted:!0,children:"Add to cart"})]})}))},183:function(n,t,e){"use strict";e.r(t);var i,c,a,r=e(36),o=e(33),d=e(29),u=e(149),s=e(150),l=(e(0),e(151)),b=e(12),p=e(13),j=p.c.div(i||(i=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=p.c.h2(c||(c=Object(b.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]))),f=p.c.div(a||(a=Object(b.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 10px;\n    margin: auto;\n  }\n"]))),x=e(3),h=Object(r.b)((function(n,t){return{collection:Object(u.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=t.title,i=t.items;return Object(x.jsxs)(j,{children:[Object(x.jsx)(m,{children:e}),Object(x.jsx)(f,{children:null===i||void 0===i?void 0:i.map((function(n){return Object(x.jsx)(l.a,{item:n},n.id)}))})]})})),O=Object(d.b)({isLoading:function(n){return!Object(u.d)(n)}}),g=Object(o.d)(Object(r.b)(O),s.a)(h);t.default=g}}]);
//# sourceMappingURL=5.d64d8dac.chunk.js.map