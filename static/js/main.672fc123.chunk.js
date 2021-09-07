(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},40:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(12),o=n.n(a),u=(n(34),n(35),n(19)),b=n(5),i=(n(40),n(9)),j=n.n(i),s=(n(18),n(28),n(10)),O=n.n(s),d=n(2),l=Object(d.b)("contacts/fetchContactRequest"),f=Object(d.b)("contacts/fetchContactSuccess"),h=Object(d.b)("contacts/fetchContactError"),x=Object(d.b)("contacts/addContactRequest"),m=Object(d.b)("contacts/addContactSuccess"),p=Object(d.b)("contacts/addContactError"),v=Object(d.b)("contacts/deleteContactRequest"),C=Object(d.b)("contacts/deleteContactSuccess"),g=Object(d.b)("contacts/deleteContactError"),y=Object(d.b)("contact/find");O.a.defaults.baseURL="http://localhost:4040";var k=n(1);var S=function(){var t=Object(b.c)(),e=Object(c.useState)(""),n=Object(u.a)(e,2),r=n[0],a=n[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),s=i[0],d=i[1],l=j.a.generate(),f=j.a.generate(),h=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"name":a(n);break;case"number":d(n);break;default:return}},v=function(){d(""),a("")};return Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(function(t,e){return function(n){var c={name:t,number:e,id:j.a.generate()};n(x()),O.a.post("/contacts",c).then((function(t){var e=t.data;return n(m(e))})).catch((function(t){return n(p(t))}))}}(r,s)),v()},children:[Object(k.jsx)("label",{htmlFor:l,children:"Name"}),Object(k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,id:l,required:!0,onChange:h}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{htmlFor:f,children:"Number"}),Object(k.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:s,id:f,required:!0,onChange:h}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{type:"submit",children:"Add contact"})]})},A=function(){var t=Object(b.d)((function(t){return t.contacts.filter})),e=Object(b.c)();return Object(k.jsxs)("label",{children:[Object(k.jsx)("br",{}),"Find contacts by name ",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",value:t,onChange:function(t){return e(y(t.target.value))}})]})},F=function(){var t=Object(b.d)((function(t){return t.contacts.filter})),e=Object(b.d)((function(t){return t.contacts.contacts})),n=Object(b.c)();Object(c.useEffect)((function(){}));var r=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t,e);return Object(k.jsx)("ul",{children:r.map((function(t){var e=t.name,c=t.id,r=t.number;return Object(k.jsxs)("li",{children:[e," ",r,Object(k.jsx)("button",{type:"button",onClick:function(){return n(function(t){return function(e){e(v()),O.a.delete("/contacts/".concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(g(t))}))}}(c))},children:"Delete"})]},c)}))})};var w,q,z=Object(b.b)()((function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(S,{}),Object(k.jsx)("h2",{children:"Contacts"}),Object(k.jsx)(A,{}),Object(k.jsx)(F,{})]})})),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))},L=n(3),R=n(29),T=n(6),B=Object(d.c)([],(w={},Object(L.a)(w,f,(function(t,e){return e.payload})),Object(L.a)(w,m,(function(t,e){return[].concat(Object(R.a)(t),[e.payload])})),Object(L.a)(w,C,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),D=Object(d.c)("",Object(L.a)({},y,(function(t,e){return e.payload}))),J=Object(d.c)(!1,(q={},Object(L.a)(q,x,(function(){return!0})),Object(L.a)(q,m,(function(){return!1})),Object(L.a)(q,p,(function(){return!1})),Object(L.a)(q,v,(function(){return!0})),Object(L.a)(q,C,(function(){return!1})),Object(L.a)(q,g,(function(){return!1})),Object(L.a)(q,l,(function(){return!0})),Object(L.a)(q,f,(function(){return!1})),Object(L.a)(q,h,(function(){return!1})),q)),P=Object(T.b)({contacts:B,filter:D,loading:J}),Z=n(7),I=Object(T.b)({contacts:P}),M=Object(d.a)({reducer:I,devTools:!1,middleware:Object(d.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})});o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(b.a,{store:M,children:Object(k.jsx)(z,{})})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.672fc123.chunk.js.map