(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={formContainer:"ActivityCreate_formContainer__3k_xZ",controlers:"ActivityCreate_controlers__1Fjli",errorControlers:"ActivityCreate_errorControlers__3nLjK",btn:"ActivityCreate_btn__OGQF0",btnBack:"ActivityCreate_btnBack__1DARH"}},16:function(e,t,n){e.exports={container:"Detail_container__2hAnP",btn:"Detail_btn__CLEjn",countryDescription:"Detail_countryDescription__1ROTT",countryDetail:"Detail_countryDetail__11C5a",activitiesDetail:"Detail_activitiesDetail__2M2T3",containerActivities:"Detail_containerActivities__2skDF",active:"Detail_active__15e26"}},20:function(e,t,n){e.exports={container:"Paginado_container__38Ssx",disabled:"Paginado_disabled__16X3w",btn:"Paginado_btn__1SUlg"}},21:function(e,t,n){e.exports={selectContainer:"NavBar_selectContainer__27kFY",select:"NavBar_select__2E91x",button:"NavBar_button__2CCf-"}},30:function(e,t,n){e.exports={container:"LandingPage_container__W-tDt",content:"LandingPage_content__2-xCq",btn:"LandingPage_btn__1ziuy"}},34:function(e,t,n){e.exports={searchBarContainer:"SearchBar_searchBarContainer__2EV8T",btn:"SearchBar_btn__1fPcu"}},36:function(e,t,n){e.exports={cardContainer:"Card_cardContainer__esDKr",bodyContainer:"Card_bodyContainer__BSJhr"}},37:function(e,t,n){e.exports={loading:"Loading_loading__1YVa1",spinner:"Loading_spinner__r18t9",spin:"Loading_spin__24tm5"}},51:function(e,t,n){e.exports={cardsContainer:"Cards_cardsContainer__httdc"}},52:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),i=n.n(r),s=n(49),o=n.n(s),l=(n(64),n(65),n(4)),u=n(14),j=n(6),d=n(11),b=n(18),p="GET_ALL_COUNTRIES",O="GET_BY_CONTINENT",h="ORDER_COUNTRIES",f="GET_NAME_COUNTRIES",x="GET_ACTIVITIES",v="ORDER_ACTIVITY",m="GET_DETAIL",_="POST_ACTIVITY",y=n(15),g=n.n(y);function C(){return function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/countries");case 3:return n=e.sent,e.abrupt("return",t({type:p,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}var N=n(20),A=n.n(N),D=n(0),S=function(e){var t=e.page,n=e.setPage,a=e.maxPage;return Object(D.jsxs)("div",{className:A.a.container,children:[Object(D.jsx)("button",{disabled:t<=1,className:t<=1?A.a.disabled:A.a.btn,onClick:function(e){return function(e){e.preventDefault(),n(t-1)}(e)},children:"Prev"}),Object(D.jsx)("button",{disabled:t>=a,className:t>=a?A.a.disabled:A.a.btn,onClick:function(e){return function(e){e.preventDefault(),n(t+1)}(e)},children:"Next"})]})},T=n(34),B=n.n(T),E=function(){var e=Object(j.b)(),t=Object(a.useState)({name:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],i=function(t){var n;t.preventDefault(),e((n=c.name,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/countries?name=".concat(n));case 3:return a=e.sent,e.abrupt("return",t({type:f,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Country not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),r({name:""})};return Object(D.jsxs)("div",{className:B.a.searchBarContainer,children:[Object(D.jsx)("input",{type:"text",value:c.name,placeholder:"Buscar..",onChange:function(e){return function(e){e.preventDefault(e),r({name:e.target.value})}(e)}}),Object(D.jsx)("button",{className:B.a.btn,onClick:function(e){return i(e)},children:"Buscar"})]})},w=n(7),k=n(21),P=n.n(k),I=function(e){var t=e.handleSelect,n=e.handleSort,c=e.handleByActivity,r=Object(j.b)(),i=Object(j.c)((function(e){return e.activities}));return Object(a.useEffect)((function(){r(function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/activity");case 3:return n=e.sent,e.abrupt("return",t({type:x,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(D.jsxs)("div",{className:P.a.selectContainer,children:[Object(D.jsxs)("select",{className:P.a.select,defaultValue:"Sort by:",onChange:function(e){return n(e)},children:[Object(D.jsx)("option",{disabled:!0,children:"Sort by:"}),Object(D.jsx)("option",{value:"asc",children:"A-Z"}),Object(D.jsx)("option",{value:"desc",children:"Z-A"}),Object(D.jsx)("option",{value:"min",children:"Population(asc)"}),Object(D.jsx)("option",{value:"max",children:"Population(desc)"}),Object(D.jsx)("option",{value:"menor",children:"Area(menor)"}),Object(D.jsx)("option",{value:"mayor",children:"Area(mayor)"})]}),Object(D.jsxs)("select",{className:P.a.select,defaultValue:"Continent",onChange:function(e){return t(e)},children:[Object(D.jsx)("option",{disabled:!0,children:"Continent"}),Object(D.jsx)("option",{value:"Default",children:"Default-All"}),Object(D.jsx)("option",{value:"South America",children:"South America"}),Object(D.jsx)("option",{value:"North America",children:"North America"}),Object(D.jsx)("option",{value:"Africa",children:"Africa"}),Object(D.jsx)("option",{value:"Asia",children:"Asia"}),Object(D.jsx)("option",{value:"Europe",children:"Europe"}),Object(D.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(D.jsx)("option",{value:"Antarctica",children:"Antarctica"})]}),Object(D.jsxs)("select",{className:P.a.select,defaultValue:"Sort Activity",onChange:function(e){return c(e)},children:[Object(D.jsx)("option",{value:"",children:"Sort Activity"}),(null===i||void 0===i?void 0:i.length)>0&&(null===i||void 0===i?void 0:i.map((function(e){return Object(D.jsx)("option",{value:e.name,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)},e.id)})))]}),Object(D.jsx)(w.c,{to:"/activity",children:Object(D.jsx)("button",{className:P.a.button,type:"button",children:"Create Activity"})})]})},L=n(36),R=n.n(L),F=function(e){var t=e.name,n=e.image,a=e.continent,c=e.id;return Object(D.jsx)("div",{className:R.a.cardContainer,children:Object(D.jsxs)(w.b,{to:"/home/"+c,children:[Object(D.jsx)("img",{src:n,alt:"img not found",width:"350px",height:"250px"}),Object(D.jsxs)("div",{className:R.a.bodyContainer,children:[Object(D.jsx)("h4",{children:t}),Object(D.jsxs)("h5",{children:["Continent: ",a]})]})]})},c)},V=n(51),U=n.n(V),G=function(e){var t=e.filteredCountries;return Object(D.jsx)("div",{className:U.a.cardsContainer,children:t.length&&t.map((function(e){return Object(D.jsx)(F,{id:e.id,name:e.name,image:e.image,continent:e.continent},e.id)}))})},M=n(52),Y=n.n(M),q=n(37),J=n.n(q),W=function(){return Object(D.jsx)("div",{className:J.a.loading,children:Object(D.jsx)("div",{className:J.a.spinner})})},Z=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.filtered})),n=Object(a.useState)(""),c=Object(u.a)(n,2),r=(c[0],c[1]),i=Object(a.useState)(1),s=Object(u.a)(i,2),o=s[0],l=s[1],p=Object(a.useState)(10),f=Object(u.a)(p,1)[0],x=Math.ceil(t.length/f),m=(o-1)*f,_=(o-1)*f+f,y=t.slice(m,_);Object(a.useEffect)((function(){e(C())}),[e]);return!y||y.length<1?Object(D.jsx)(W,{}):Object(D.jsxs)("div",{className:Y.a.container,children:[Object(D.jsxs)("header",{children:[Object(D.jsx)(I,{handleSelect:function(t){var n;t.preventDefault(),e((n=t.target.value,{type:O,payload:n})),l(1)},handleSort:function(t){var n;t.preventDefault(),e((n=t.target.value,{type:h,payload:n})),l(1),r("Ordenado por ".concat(t.target.value))},handleByActivity:function(t){var n;t.preventDefault(),e((n=t.target.value,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/countries?filter=".concat(n));case 3:return a=e.sent,e.abrupt("return",t({type:v,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),l(1)}}),Object(D.jsx)(E,{})]}),Object(D.jsx)(G,{filteredCountries:y}),Object(D.jsx)(S,{page:o,setPage:l,maxPage:x})]})},K=n(30),z=n.n(K),H=function(){return Object(D.jsx)("div",{className:z.a.container,children:Object(D.jsxs)("div",{className:z.a.content,children:[Object(D.jsx)("h1",{children:"Country App"}),Object(D.jsx)(w.c,{to:"/home",children:Object(D.jsx)("button",{className:z.a.btn,children:"Acceder"})})]})})},Q=n(16),X=n.n(Q),$=function(e){var t=Object(j.b)(),n=e.match.params.id;Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(b.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("/countries/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:m,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log("no hay ruta");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[t,n]);var c=Object(j.c)((function(e){return e.details})),r=c.activities;return Object(D.jsxs)("div",{className:X.a.container,children:[Object(D.jsx)(w.c,{to:"/home/",children:Object(D.jsx)("button",{className:X.a.btn,children:Object(D.jsx)("p",{children:"Back"})})}),Object(D.jsxs)("div",{className:X.a.countryDescription,children:[Object(D.jsx)("figure",{children:Object(D.jsx)("img",{src:c.image,alt:"img not found",width:"500px",height:"300px"})}),Object(D.jsxs)("div",{className:X.a.countryBody,children:[Object(D.jsxs)("div",{className:X.a.countryDetail,children:[Object(D.jsx)("h1",{children:c.name}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:"Code: "}),c.id]}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:" Capital: "}),c.capital]}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:"Subregion: "}),c.subregion]}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:"Area: "}),c.area]}),Object(D.jsxs)("p",{children:[" ",Object(D.jsx)("span",{children:"Population: "}),c.population]}),Object(D.jsxs)("h4",{children:[" ",Object(D.jsx)("span",{children:"Activities: "})]})]}),Object(D.jsx)("div",{className:X.a.containerActivities,children:(null===r||void 0===r?void 0:r.length)>0?r.map((function(e){return Object(D.jsxs)("div",{className:X.a.activitiesDetail,children:[Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Name:"}),e.name.charAt(0).toUpperCase()+e.name.slice(1)]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Difficulty:"}),e.difficulty]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Duration:"}),e.duration]}),Object(D.jsxs)("p",{children:[Object(D.jsx)("span",{children:"Season:"})," ",e.season]})]},e.id)})):Object(D.jsx)("span",{className:X.a.active,children:"Todavia no hay actividades"})})]})]})]})},ee=n(55),te=n(29),ne=n(3),ae=n(13),ce=n.n(ae),re=function(){var e=Object(j.b)(),t=Object(l.f)(),n=Object(a.useState)({}),c=Object(u.a)(n,2),r=c[0],i=c[1],s=Object(j.c)((function(e){return e.countries})),o=Object(a.useState)({name:"",difficulty:0,duration:0,season:"",countries:[]}),p=Object(u.a)(o,2),O=p[0],h=p[1],f=function(e){h(Object(ne.a)(Object(ne.a)({},O),{},Object(te.a)({},e.target.name,e.target.value)))},x=function(n){n.preventDefault(),console.log(O);var a,c=function(e){var t={};return""===e.name?t.name="campo requerido":""===e.season?t.season="campo requerido":0===e.countries.length&&(t.countries="campo requerido"),t}(O);0===Object.keys(c).length?(e((a=O,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/activity",a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("activity created"),h({name:"",difficulty:0,duration:0,season:"",countries:[]}),t.push("/home")):i(c)};return Object(a.useEffect)((function(){e(C())}),[e]),Object(D.jsxs)("div",{children:[Object(D.jsx)(w.c,{to:"/home/",children:Object(D.jsx)("button",{className:ce.a.btnBack,children:"Back"})}),Object(D.jsxs)("form",{className:ce.a.formContainer,onSubmit:function(e){return x(e)},children:[Object(D.jsx)("h3",{children:"Create Activity"}),Object(D.jsxs)("div",{className:ce.a.controlers,children:[Object(D.jsx)("label",{children:"Name:"}),Object(D.jsx)("input",{type:"text",name:"name",value:O.name,onChange:function(e){return f(e)},placeholder:"Nombre de la actividad.."}),r.name&&Object(D.jsx)("p",{className:ce.a.errorControlers,children:r.name})]}),Object(D.jsxs)("div",{className:ce.a.controlers,children:[Object(D.jsx)("label",{children:"Difficulty: "}),Object(D.jsx)("input",{type:"number",name:"difficulty",onChange:function(e){return f(e)},value:O.difficulty,min:1,max:5,placeholder:"Between 1 and 5hs"})]}),Object(D.jsxs)("div",{className:ce.a.controlers,children:[Object(D.jsx)("label",{children:"Duration(hs): "}),Object(D.jsx)("input",{type:"number",name:"duration",value:O.duration,onChange:function(e){return f(e)},min:1,max:24,placeholder:"Between 1 and 24hs"})]}),Object(D.jsxs)("div",{className:ce.a.controlers,children:[Object(D.jsx)("label",{children:"Season: "}),Object(D.jsxs)("select",{name:"season",onChange:function(e){return f(e)},children:[Object(D.jsx)("option",{value:"",children:"Select a station"}),Object(D.jsx)("option",{value:"summer",children:"Summer"}),Object(D.jsx)("option",{value:"fall",children:"Fall"}),Object(D.jsx)("option",{value:"winter",children:"Winter"}),Object(D.jsx)("option",{value:"spring",children:"Spring"})]}),r.season&&Object(D.jsx)("p",{className:ce.a.errorControlers,children:r.season})]}),Object(D.jsxs)("div",{className:ce.a.controlers,children:[Object(D.jsx)("p",{children:"Select countries:"}),Object(D.jsx)("br",{}),Object(D.jsx)("select",{name:"countries",onChange:function(e){return function(e){h(Object(ne.a)(Object(ne.a)({},O),{},{countries:[].concat(Object(ee.a)(O.countries),[e.target.value])}))}(e)},multiple:!0,children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(D.jsx)("option",{value:e.name,children:e.name},t)}))}),r.countries&&Object(D.jsx)("p",{className:ce.a.errorControlers,children:r.countries})]}),Object(D.jsx)("div",{className:ce.a.btn,children:Object(D.jsx)("input",{type:"submit",value:"Create"})})]})]})};var ie=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{exact:!0,path:"/",component:H}),Object(D.jsx)(l.a,{exact:!0,path:"/home",component:Z}),Object(D.jsx)(l.a,{exact:!0,path:"/home/:id",component:$}),Object(D.jsx)(l.a,{exact:!0,path:"/activity",component:re})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},oe={countries:[],filtered:[],activities:[],details:{}};var le=n(28),ue=n(53),je=n(54),de=Object(le.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(ne.a)(Object(ne.a)({},e),{},{countries:t.payload,filtered:t.payload});case x:return Object(ne.a)(Object(ne.a)({},e),{},{activities:t.payload});case v:return Object(ne.a)(Object(ne.a)({},e),{},{filtered:t.payload});case O:return"Default"===t.payload?Object(ne.a)(Object(ne.a)({},e),{},{filtered:e.countries}):t.payload?Object(ne.a)(Object(ne.a)({},e),{},{filtered:e.countries.filter((function(e){return e.continent===t.payload}))}):Object(ne.a)({},e);case h:return"asc"===t.payload?e.filtered.sort((function(e,t){return e.name.localeCompare(t.name)})):"desc"===t.payload?e.filtered.sort((function(e,t){return t.name.localeCompare(e.name)})):"min"===t.payload?e.filtered.sort((function(e,t){return e.population-t.population})):"max"===t.payload?e.filtered.sort((function(e,t){return t.population-e.population})):"menor"===t.payload?e.filtered.sort((function(e,t){return e.area-t.area})):e.filtered.sort((function(e,t){return t.area-e.area})),Object(ne.a)({},e);case f:return Object(ne.a)(Object(ne.a)({},e),{},{filtered:t.payload});case m:return Object(ne.a)(Object(ne.a)({},e),{},{details:t.payload});case _:return Object(ne.a)({},e);default:return e}}),Object(ue.composeWithDevTools)(Object(le.applyMiddleware)(je.a))),be=de;o.a.config(),g.a.defaults.baseURL="http://localhost:3001",i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(j.a,{store:be,children:Object(D.jsx)(w.a,{children:Object(D.jsx)(ie,{})})})}),document.getElementById("root")),se()}},[[97,1,2]]]);
//# sourceMappingURL=main.5be8ff30.chunk.js.map