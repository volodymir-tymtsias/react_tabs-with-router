(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),d=function(t){var e=t.to,c=t.text;return Object(r.jsx)(s.c,{to:e,className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:c})},l=function(){return Object(r.jsx)("nav",{"data-cy":"Nav",className:"navbar is-light is-fixed-top is-mobile has-shadow",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(d,{to:"/",text:"Home"}),Object(r.jsx)(d,{to:"/tabs",text:"Tabs"})]})})})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=c(0),h=c.n(x).a.createContext([]),O=function(t){var e=t.tabId,c=Object(x.useContext)(h),a=c.find((function(t){return t.id===e}));return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:c.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":t.id===e}),children:Object(r.jsx)(s.b,{"data-cy":"TabLink",to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},m=function(){var t=Object(i.h)().tabId;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(O,{tabId:t})]})},u=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},v=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(h.Provider,{value:[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],children:Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(m,{})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(m,{})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(u,{})})]})})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c9264997.chunk.js.map