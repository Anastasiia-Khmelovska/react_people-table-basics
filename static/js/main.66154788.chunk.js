(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(4)),r=(c(20),c(2)),i=c(1);function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var j=c(6),o=c.n(j),d=c(0),b=function(e){var t,c,n=e.person,s=e.findPeopleParent,r=n.name,i=n.sex,l=n.born,j=n.died,b=n.fatherName,h=n.motherName,x=n.slug;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(x),className:o()("",{"has-text-danger":"f"===i}),children:r})}),Object(d.jsx)("td",{children:i}),Object(d.jsx)("td",{children:l}),Object(d.jsx)("td",{children:j}),Object(d.jsx)("td",{children:s(h)?Object(d.jsx)(a.b,{className:"has-text-danger",to:"/people/".concat(null===(t=s(h))||void 0===t?void 0:t.slug),children:h}):h||"-"}),Object(d.jsx)("td",{children:s(b)?Object(d.jsx)(a.b,{to:"/people/".concat(null===(c=s(b))||void 0===c?void 0:c.slug),children:b}):b||"-"})]})},h=(c(22),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.people,c=e.isLoading,n=e.error,a=Object(r.h)().slug,s=void 0===a?"":a,i=function(e){return t.find((function(t){return t.name===e}))||null};return Object(d.jsx)("div",{className:"block",children:Object(d.jsx)("div",{className:"box table-container",children:c?Object(d.jsx)(h,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:n}),!t.length&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)("tr",{"data-cy":"person",className:o()({"has-background-warning":e.slug===s}),children:Object(d.jsx)(b,{person:e,findPeopleParent:i})},e.slug)}))})]})]})})})},O=function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:c})},p=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(""),j=Object(s.a)(a,2),o=j[0],b=j[1],h=Object(i.useState)(!1),p=Object(s.a)(h,2),u=p[0],m=p[1];return Object(i.useEffect)((function(){m(!0),l().then((function(e){n(e)})).catch((function(){return b("Something went wrong")})).finally((function(){return m(!1)}))}),[]),Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(O,{to:"/",text:"Home"}),Object(d.jsx)(O,{to:"/people",text:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(r.b,{path:"/home",element:Object(d.jsx)(r.a,{to:"/",replace:!0})}),Object(d.jsxs)(r.b,{path:"/people",children:[Object(d.jsx)(r.b,{index:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)(x,{people:c,isLoading:u,error:o})]})}),Object(d.jsx)(r.b,{path:":slug",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)(x,{people:c,isLoading:u,error:o})]})})]}),Object(d.jsx)(r.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(p,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.66154788.chunk.js.map