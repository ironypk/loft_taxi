(this.webpackJsonploft_taxi=this.webpackJsonploft_taxi||[]).push([[0],{117:function(e,t,a){e.exports={preloader:"Preloader_preloader__9oL39"}},118:function(e,t,a){e.exports=a.p+"static/media/spinner.d6b5e158.svg"},119:function(e,t,a){e.exports={overlay:"Overlay_overlay__n_dXB"}},122:function(e,t,a){e.exports={order:"Order_order__2Q42U"}},126:function(e,t,a){e.exports={map_container:"Map_map_container__1913b"}},131:function(e,t,a){e.exports=a(261)},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},18:function(e,t,a){e.exports={welcome_form:"Form_welcome_form__37CzO",head:"Form_head__le1ve",redirect:"Form_redirect__3ZRba",redirect_link:"Form_redirect_link__gLlK1",input:"Form_input__9HMEl",welcome_btn:"Form_welcome_btn__OTPP8"}},19:function(e,t,a){e.exports={payment:"Profile_payment__3PB5X",payment__header:"Profile_payment__header__1YUml",payment__head:"Profile_payment__head__GNNRo",payment__card_wrapper:"Profile_payment__card_wrapper__1bWOA",card:"Profile_card__l8QyO",card_front:"Profile_card_front__1neN-",card__input:"Profile_card__input__1-8so",redirect_form__card__success:"Profile_redirect_form__card__success__2BZJ5"}},22:function(e,t,a){e.exports={take_taxi__label_wrapper:"TakeTaxi_take_taxi__label_wrapper__1tAD0",take_taxi__input_wrapper:"TakeTaxi_take_taxi__input_wrapper__1HpL6",clear_btn:"TakeTaxi_clear_btn__1syvz",path_list:"TakeTaxi_path_list__3zvYs",path_item:"TakeTaxi_path_item__2n3KA"}},261:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(55),o=a.n(c),l=(a(136),a(137),a(138),a(139),a(77)),s=a.n(l),i=(a(140),a(13)),u=function(){return n.a.createElement(i.b,{to:"#",className:"logo"},n.a.createElement("div",{className:"logo__one"},"Loft"),n.a.createElement("div",{className:"logo__two"},"Taxi"))},m=a(30),p=a(264);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={user:{email:"",password:""},isLoggedIn:!1,isFetching:!1},f=Object(p.a)("LOGIN"),E=Object(p.a)("LOGIN_SUCCESS"),O=Object(p.a)("LOGIN_ERROR"),h=Object(p.a)("LOGOUT"),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return d({},e,{user:d({},t.payload),isFetching:!0});case"LOGIN_SUCCESS":return d({},e,{isLoggedIn:!0,isFetching:!1});case"LOGIN_ERROR":return d({},e,{isFetching:!1});case"LOGOUT":return d({},e,{user:d({},e.user,{email:"",password:""}),isLoggedIn:!1});default:return e}},v=a(18),j=a.n(v),N=a(117),w=a.n(N),x=a(118),y=a.n(x),S=function(){return n.a.createElement("img",{className:w.a.preloader,src:y.a,alt:"preloader"})},R=a(119),k=a.n(R),C=function(){return n.a.createElement("div",{className:k.a.overlay})},T=a(263),F=a(262),P=Object(F.a)({form:"login"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(j.a.welcome_form," form")},e.isFetching?n.a.createElement(S,null):null,n.a.createElement("div",{className:j.a.head},"\u0412\u043e\u0439\u0442\u0438"),n.a.createElement("div",{className:j.a.redirect},n.a.createElement("div",{className:j.a.redirect_text},"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c?"),n.a.createElement(i.b,{to:"".concat(e.match.url,"/regist"),className:j.a.redirect_link},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"Email \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f*"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{"data-testid":"email_input",component:"input",name:"email",className:"input",required:!0}))),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u041f\u0430\u0440\u043e\u043b\u044c*"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",name:"password",type:"password",className:"input",required:!0}))),n.a.createElement("button",{className:"".concat(j.a.welcome_btn," btn")},"\u0412\u043e\u0439\u0442\u0438"))})),L=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,Object.assign({},e,{onSubmit:function(t){e.login(t)}})),e.isFetching?n.a.createElement(C,null):null)},I=a(12),A=Object(I.b)((function(e){return{isFetching:e.loginPage.isFetching}}),{login:f})(L),G=a(82),D=a.n(G),U=Object(F.a)({form:"regist"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(j.a.welcome_form," form")},e.isFetching?n.a.createElement(S,null):null,n.a.createElement("div",{className:j.a.head},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),n.a.createElement("div",{className:j.a.redirect},n.a.createElement("div",{className:j.a.redirect_text},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d?"),n.a.createElement(i.b,{to:"/welcome",className:j.a.redirect_link},"\u0412\u043e\u0439\u0442\u0438")),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",required:!0,name:"email",className:"input"}))),n.a.createElement("div",{className:D.a.user_data},n.a.createElement("label",{className:"".concat(D.a.name," label")},n.a.createElement("div",{className:"label_title"},"\u0418\u043c\u044f"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",name:"name",required:!0,className:"input"}))),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",name:"surname",className:"input"})))),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u041f\u0430\u0440\u043e\u043b\u044c"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",name:"password",className:"input"}))),n.a.createElement("button",{className:"".concat(j.a.welcome_btn," btn")},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))})),M=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(U,Object.assign({},e,{onSubmit:function(t){e.regist(t)}})),e.isFetching?n.a.createElement(C,null):null)};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J={user:{email:"",name:"",surname:"",password:""},isFetching:!1},z=Object(p.a)("REGIST"),V=Object(p.a)("REGIST_SUCCESS"),W=Object(p.a)("REGIST_ERROR"),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGIST":return q({},e,{user:q({},t.payload),isFetching:!0});case"REGIST_SUCCESS":case"REGIST_ERROR":return q({},e,{isFetching:!1});default:return e}},B=Object(I.b)((function(e){return{user:e.registPage.user,isFetching:e.registPage.isFetching}}),{regist:z})(M),K=a(33),Y=function(e){var t=e.match;return n.a.createElement("div",{"data-testid":"welcome",className:s.a.welcome},n.a.createElement("div",{className:s.a.welcome__logo},n.a.createElement(u,null)),n.a.createElement(K.d,null,n.a.createElement(K.b,{path:"".concat(t.path,"/"),component:A,exact:!0}),n.a.createElement(K.b,{path:"".concat(t.path,"/regist"),component:B})))},Z=a(122),Q=a.n(Z);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te={card:{cardNumber:"",expiryDate:"",cardName:"",cvc:""},isCard:!1,toggleForm:!1,isFetching:!1,token:""},ae=Object(p.a)("CHECK_STORAGE_CARD"),re=Object(p.a)("SET_TOKEN"),ne=Object(p.a)("SAVE_CARD"),ce=Object(p.a)("TOGGLE_FORM"),oe=Object(p.a)("SAVE_CARD_SUCCESS"),le=Object(p.a)("SAVE_CARD_ERROR"),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CARD":return ee({},e,{card:ee({},t.payload),isFetching:!0});case"SAVE_CARD_ERROR":return ee({},e,{isFetching:!1});case"CHECK_STORAGE_CARD":return ee({},e,{card:JSON.parse(localStorage.getItem("card")),isCard:!0});case"SET_TOKEN":return ee({},e,{token:t.payload});case"TOGGLE_FORM":return ee({},e,{toggleForm:t.payload});case"SAVE_CARD_SUCCESS":return ee({},e,{isCard:!0,toggleForm:!0,isFetching:!1});default:return e}},ie=a(19),ue=a.n(ie),me=function(e){return n.a.createElement("div",{className:"redirect_form ".concat(ue.a.redirect_form__card__success)},n.a.createElement("div",{className:"redirect_form__title"},"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b"),n.a.createElement("button",{onClick:function(){e.toggleForm(!1),e.history.push("/order/map")},className:"btn"},"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443"))},pe=function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(ue.a.payment," form")},e.isFetching?n.a.createElement(S,null):null,n.a.createElement("div",{className:ue.a.payment__header},n.a.createElement("h3",{className:ue.a.payment__head},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),n.a.createElement("div",null,"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b")),n.a.createElement("div",{className:ue.a.payment__card_wrapper},n.a.createElement("div",{className:"".concat(ue.a.card," ").concat(ue.a.card_front)},n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",className:"".concat(ue.a.card__input," input"),type:"number",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",required:!0}))),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",className:"".concat(ue.a.card__input," input"),type:"number",name:"date",placeholder:"00/00",required:!0})))),n.a.createElement("div",{className:"".concat(ue.a.card," ").concat(ue.a.card_back)},n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",className:"".concat(ue.a.card__input," input"),name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",required:!0}))),n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"CVC"),n.a.createElement("div",{className:"input_wrapper"},n.a.createElement(T.a,{component:"input",className:"".concat(ue.a.card__input," input"),type:"number",name:"cvc",placeholder:"***",required:!0}))))),n.a.createElement("button",{className:"btn"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},_e=function(e){return n.a.createElement(n.a.Fragment,null,!1===e.toggleF&&n.a.createElement(pe,e),!0===e.toggleF&&n.a.createElement(me,e))},de=a(11),be=Object(F.a)({form:"profile"})(_e),fe=Object(de.d)(K.g,Object(I.b)((function(e){return{card:e.profilePage.card,toggleF:e.profilePage.toggleForm,isFetching:e.profilePage.isFetching}}),{saveCard:ne,toggleForm:ce}))((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(be,Object.assign({},e,{onSubmit:function(t){e.saveCard(t)}})),e.isFetching?n.a.createElement(C,null):null)}));function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he={adressList:[],route:{to:"",from:""},isRoute:!1,map:""},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ADRESS_LIST":return Oe({},e);case"FETCH_ADRESS_LIST_SUCCESS":return Oe({},e,{adressList:t.payload.map((function(e){return e}))});case"GET_ROUTE":return Oe({},e);case"GET_MAP":return Oe({},e,{map:t.payload});case"GET_ROUTE_SUCCESS":return Oe({},e,{isRoute:!0});case"GET_NEW_ROUTE":return Oe({},e,{isRoute:!1,route:Oe({},e.route,{to:"",from:""})});case"ON_CHANGE_ROUTE_FROM":return Oe({},e,{route:Oe({},e.route,{from:t.payload})});case"ON_CHANGE_ROUTE_TO":return Oe({},e,{route:Oe({},e.route,{to:t.payload})});case"FETCH_ADRESS_LIST_ERROR":return Oe({},e);case"CLEAR_INPUT_FROM":return Oe({},e,{route:Oe({},e.route,{from:""})});case"CLEAR_INPUT_TO":return Oe({},e,{route:Oe({},e.route,{to:""})});default:return e}},ve=Object(p.a)("CLEAR_INPUT_FROM"),je=Object(p.a)("CLEAR_INPUT_TO"),Ne=Object(p.a)("GET_NEW_ROUTE"),we=Object(p.a)("GET_MAP"),xe=Object(p.a)("GET_ROUTE_SUCCESS"),ye=Object(p.a)("GET_ROUTE"),Se=Object(p.a)("ON_CHANGE_ROUTE_FROM"),Re=Object(p.a)("ON_CHANGE_ROUTE_TO"),ke=Object(p.a)("FETCH_ADRESS_LIST"),Ce=Object(p.a)("FETCH_ADRESS_LIST_SUCCESS"),Te=Object(p.a)("FETCH_ADRESS_LIST_ERROR"),Fe=a(123),Pe=a(124),Le=a(128),Ie=a(125),Ae=a(130),Ge=a(126),De=a.n(Ge),Ue=a(83),Me=a.n(Ue),He=Object(K.g)((function(e){return n.a.createElement("div",{className:"redirect_form"},n.a.createElement("h2",{className:"redirect_form__title"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),n.a.createElement("p",{className:"redirect_form__text"},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438 \u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"),n.a.createElement(i.b,{to:"".concat(e.match.url,"/profile")},n.a.createElement("button",{className:"btn"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")))})),qe=a(127),Je=a(22),ze=a.n(Je),Ve=function(e){var t=function(t,a,r){return e.adressList.map((function(c){return e.isMatching(c,t)&&c!==a?n.a.createElement("li",{onClick:function(){r(c),e.setCurrentField(null)},key:c.toString(),className:ze.a.path_item},c):null}))};return n.a.createElement("ul",{className:ze.a.path_list},"from"===e.currentField&&t(e.from,e.to,e.onChangeRouteFrom),"to"===e.currentField&&t(e.to,e.from,e.onChangeRouteTo))},We=function(e){Object(r.useEffect)((function(){e.fetchAdressList()}),[]);var t=Object(r.useState)(),a=Object(qe.a)(t,2),c=a[0],o=a[1],l=n.a.createRef(),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t=t.toLowerCase(),-1!==(e=e.toLowerCase()).indexOf(t)};return n.a.createElement("form",{ref:l,onSubmit:function(t){t.preventDefault(e.getRoute())},className:"take_taxi redirect_form"},n.a.createElement("div",{className:ze.a.take_taxi__label_wrapper},n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u041e\u0442\u043a\u0443\u0434\u0430"),n.a.createElement("div",{className:"input_wrapper ".concat(ze.a.take_taxi__input_wrapper," ").concat(ze.a.take_taxi__input_wrapper_from)},n.a.createElement("input",{onChange:function(){var t=l.current.elements.from.value;e.onChangeRouteFrom(t)},value:e.from,onFocus:function(){o("from")},className:"input",name:"from",required:!0}),n.a.createElement("div",{onClick:function(){e.clearInputFrom()},className:ze.a.clear_btn}))),"from"===c&&n.a.createElement(Ve,Object.assign({className:"".concat(ze.a.path_list_from),currentField:c,setCurrentField:o,isMatching:s},e))),n.a.createElement("div",{className:ze.a.take_taxi__label_wrapper},n.a.createElement("label",{className:"label"},n.a.createElement("div",{className:"label_title"},"\u041a\u0443\u0434\u0430"),n.a.createElement("div",{className:"input_wrapper ".concat(ze.a.take_taxi__input_wrapper)},n.a.createElement("input",{onChange:function(){var t=l.current.elements.to.value;e.onChangeRouteTo(t)},value:e.to,onFocus:function(){o("to")},className:"input",name:"to",required:!0}),n.a.createElement("div",{onClick:function(){e.clearInputTo()},className:ze.a.clear_btn}))),"to"===c&&n.a.createElement(Ve,Object.assign({isMatching:s,currentField:c,setCurrentField:o},e))),n.a.createElement("button",{disabled:0===e.from.length||0===e.to.length,className:"btn"},"\u0417\u0430\u043a\u0437\u0430\u0442\u044c"))},Xe=Object(de.d)(K.g,Object(I.b)((function(e){return{adressList:e.taxi.adressList,to:e.taxi.route.to,from:e.taxi.route.from}}),{fetchAdressList:ke,onChangeRouteFrom:Se,onChangeRouteTo:Re,getRoute:ye,clearInputFrom:ve,clearInputTo:je}))(We),Be=Object(I.b)((function(e){return{map:e.taxi.map}}),{getNewRoute:Ne})((function(e){return n.a.createElement("div",{className:"redirect_form"},n.a.createElement("h2",{className:"redirect_form__title"},"\u0417\u0430\u043a\u0430\u0437 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d"),n.a.createElement("p",{className:"redirect_form__text"},"\u0412\u0430\u0448\u0435 \u0442\u0430\u043a\u0441\u0438 \u0443\u0436\u0435 \u0435\u0434\u0435\u0442 \u043a \u0432\u0430\u043c\u044e \u041f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435 10 \u043c\u0438\u043d\u0443\u0442"),n.a.createElement("button",{onClick:function(){var t;(t=e.map).getLayer("route")&&t.removeLayer("route"),t.getSource("route")&&t.removeSource("route"),e.getNewRoute()},className:"btn"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437"))}));Me.a.accessToken="pk.eyJ1IjoiaXJvbnlwayIsImEiOiJjazJqbXNubXMxOGYyM2hudG9jbDk5YjNvIn0.j2u3tq3iMynj-Xl6GwXHqw";var Ke=function(e){function t(e){var a;return Object(Fe.a)(this,t),(a=Object(Le.a)(this,Object(Ie.a)(t).call(this,e))).state={latitude:59.9375,longitude:30.308611,zoom:10},a}return Object(Ae.a)(t,e),Object(Pe.a)(t,[{key:"componentDidMount",value:function(){this.map=new Me.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[this.state.longitude,this.state.latitude],zoom:this.state.zoom,height:this.state.height,width:this.state.width}),this.props.getMap(this.map),!this.props.isCard&&localStorage.card&&this.props.checkStorageCard()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.isCard||this.props.isRoute?null:n.a.createElement(He,null),this.props.isCard&&!this.props.isRoute?n.a.createElement(Xe,null):null,this.props.isRoute?n.a.createElement(Be,null):null,n.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:De.a.map_container}))}}]),t}(n.a.Component),Ye=Object(I.b)((function(e){return{isCard:e.profilePage.isCard,isRoute:e.taxi.isRoute}}),{getMap:we,checkStorageCard:ae})(Ke),Ze=a(84),Qe=a.n(Ze),$e=a(85),et=a.n($e),tt=a(45),at=a.n(tt),rt=function(e){return"logout"===e.link?n.a.createElement("li",{className:at.a.item},n.a.createElement(i.b,{to:"/welcome",onClick:function(){e.logout(),localStorage.clear()},className:at.a.item__link},e.item)):n.a.createElement("li",{className:at.a.item},n.a.createElement(i.b,{to:"".concat(e.match.url,"/").concat(e.link),className:at.a.item__link},e.item))},nt=Object(I.b)((function(e){return{state:e}}),{logout:h})(rt),ct=function(e){return n.a.createElement("nav",{className:et.a.menu},n.a.createElement("ul",{className:et.a.menu__list},n.a.createElement(K.b,{render:function(e){var t=e.match;return n.a.createElement(nt,{match:t,link:"map",item:"\u041a\u0430\u0440\u0442\u0430"})}}),n.a.createElement(K.b,{render:function(e){var t=e.match;return n.a.createElement(nt,{match:t,link:"profile",item:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}}),n.a.createElement(K.b,{render:function(e){var t=e.match;return n.a.createElement(nt,{match:t,link:"logout",item:"\u0412\u044b\u0439\u0442\u0438"})}})))},ot=function(e){return n.a.createElement("header",{className:Qe.a.header},n.a.createElement("div",{className:"".concat(Qe.a.header__container," container")},n.a.createElement("div",{className:"header__logo"},n.a.createElement(u,null)),n.a.createElement(ct,null)))},lt=Object(K.g)((function(e){return n.a.createElement("div",{className:Q.a.order},n.a.createElement(ot,null),n.a.createElement("div",{className:"order__content"},n.a.createElement(K.d,null,n.a.createElement(K.b,{path:"".concat(e.match.path,"/"),exact:!0,component:Ye}),n.a.createElement(K.b,{path:"".concat(e.match.path,"/profile"),component:fe}),n.a.createElement(K.b,{component:Ye}))))})),st=a(129),it=a(7),ut=a.n(it),mt=a(5),pt=a(26),_t=a(27),dt=ut.a.mark(ft),bt=function(){var e=Object(pt.a)(ut.a.mark((function e(t){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.post("https://loft-taxi.glitch.me/auth",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function ft(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.e)(f,ut.a.mark((function e(){var t,a,r,n,c;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.d)();case 2:return t=e.sent,a=t.loginPage.user,e.prev=4,e.next=7,Object(mt.a)(bt,a);case 7:if(r=e.sent,n=r.error,c=r.token,void 0===n){e.next=16;break}return alert(n),e.next=14,Object(mt.c)(O());case 14:e.next=21;break;case 16:return e.next=18,Object(mt.c)(re(c));case 18:return localStorage.setItem("isLoggedIn",!0),e.next=21,Object(mt.c)(E());case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(4),e.next=27,Object(mt.c)(O());case 27:case"end":return e.stop()}}),e,null,[[4,23]])})));case 2:case"end":return e.stop()}}),dt)}var Et=ut.a.mark(ht),Ot=function(){var e=Object(pt.a)(ut.a.mark((function e(t){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.post("https://loft-taxi.glitch.me/register",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function ht(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.e)(z,ut.a.mark((function e(){var t,a,r,n,c;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.d)();case 2:return t=e.sent,a=t.registPage.user,e.prev=4,e.next=7,Object(mt.a)(Ot,a);case 7:if(r=e.sent,n=r.token,void 0===(c=r.error)){e.next=16;break}return alert(c),e.next=14,Object(mt.c)(W());case 14:e.next=21;break;case 16:return localStorage.setItem("token",n),e.next=19,Object(mt.c)(V());case 19:return e.next=21,Object(mt.c)(E());case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(4),e.next=27,Object(mt.c)(W());case 27:case"end":return e.stop()}}),e,null,[[4,23]])})));case 2:case"end":return e.stop()}}),Et)}var gt=ut.a.mark(jt),vt=function(){var e=Object(pt.a)(ut.a.mark((function e(t){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.post("https://loft-taxi.glitch.me/card",t);case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function jt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.e)(ne,ut.a.mark((function e(){var t,a,r,n;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.d)();case 2:return t=e.sent,a=t.profilePage.card,e.prev=4,e.next=7,Object(mt.a)(vt,a);case 7:if(r=e.sent,void 0===(n=r.error)){e.next=15;break}return alert(n),e.next=13,Object(mt.c)(le());case 13:e.next=18;break;case 15:return localStorage.setItem("card",JSON.stringify(a)),e.next=18,Object(mt.c)(oe());case 18:e.next=24;break;case 20:return e.prev=20,e.t0=e.catch(4),e.next=24,Object(mt.c)(le());case 24:case"end":return e.stop()}}),e,null,[[4,20]])})));case 2:case"end":return e.stop()}}),gt)}var Nt=ut.a.mark(xt),wt=function(){var e=Object(pt.a)(ut.a.mark((function e(){var t,a;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.get("https://loft-taxi.glitch.me/addressList");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function xt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.e)(ke,ut.a.mark((function e(){var t,a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(mt.a)(wt);case 3:if(t=e.sent,a=t.addresses,void 0===(r=t.error)){e.next=12;break}return alert(r),e.next=10,Object(mt.c)(Te());case 10:e.next=14;break;case 12:return e.next=14,Object(mt.c)(Ce(a));case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(0),e.next=20,Object(mt.c)(Te());case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));case 2:case"end":return e.stop()}}),Nt)}var yt=ut.a.mark(kt),St=function(){var e=Object(pt.a)(ut.a.mark((function e(t){var a,r;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_t.get("https://loft-taxi.glitch.me/route?address1=".concat(t.from,"&address2=").concat(t.to));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Rt=function(e,t){e.flyTo({center:t[0],zoom:15}),e.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffc617","line-width":8}})};function kt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.e)(ye,ut.a.mark((function e(){var t,a,r,n,c;return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.d)();case 2:return t=e.sent,a=t.taxi,r=a.route,n=a.map,e.prev=6,e.next=9,Object(mt.a)(St,r);case 9:if((c=e.sent).length){e.next=14;break}alert("\u043f\u0443\u0442\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u0442"),e.next=18;break;case 14:return e.next=16,Rt(n,c);case 16:return e.next=18,Object(mt.c)(xe(!0));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6);case 23:case"end":return e.stop()}}),e,null,[[6,20]])})));case 2:case"end":return e.stop()}}),yt)}var Ct=ut.a.mark(Tt);function Tt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(mt.b)(ft);case 2:return e.next=4,Object(mt.b)(ht);case 4:return e.next=6,Object(mt.b)(jt);case 6:return e.next=8,Object(mt.b)(xt);case 8:return e.next=10,Object(mt.b)(kt);case 10:case"end":return e.stop()}}),Ct)}var Ft=a(265),Pt=Object(st.a)(),Lt=Object(de.c)({loginPage:g,registPage:X,profilePage:se,taxi:ge,form:Ft.a}),It=Object(de.e)(Lt,Object(de.d)(Object(de.a)(Pt)));Pt.run(Tt),window.store=It;var At=It,Gt=Object(I.b)((function(e){return{isLoggedIn:e.loginPage.isLoggedIn}}),null)((function(e){return n.a.createElement("div",{"data-testid":"app",className:"App"},n.a.createElement(K.d,null,n.a.createElement(K.b,{path:"/welcome",component:Y}),n.a.createElement(K.b,{path:"/order",component:lt})),e.isLoggedIn?n.a.createElement(K.a,{to:"/order/map"}):n.a.createElement(K.a,{to:"/welcome"}),localStorage.isLoggedIn?n.a.createElement(K.a,{to:"/order/map"}):n.a.createElement(K.a,{to:"/welcome"}))})),Dt=function(){return n.a.createElement(i.a,null,n.a.createElement(I.a,{store:At},n.a.createElement(Gt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports={item__link:"Item_item__link__2ro4o"}},77:function(e,t,a){e.exports={welcome:"Welcome_welcome__GhE6t",welcome__logo:"Welcome_welcome__logo__26Aug"}},82:function(e,t,a){e.exports={name:"Regist_name__1qtNC",user_data:"Regist_user_data__3OL0A"}},84:function(e,t,a){e.exports={header:"Header_header__lM5dj",header__container:"Header_header__container__3ZR_B",menu__list:"Header_menu__list__emRal",menu__item:"Header_menu__item__3vge8"}},85:function(e,t,a){e.exports={menu__list:"Menu_menu__list__j8CVt"}}},[[131,1,2]]]);
//# sourceMappingURL=main.38c0ca14.chunk.js.map