(function(t){function e(e){for(var a,r,n=e[0],o=e[1],c=e[2],u=0,d=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],a=!0,n=1;n<i.length;n++){var o=i[n];0!==s[o]&&(a=!1)}a&&(l.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},l=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/depl/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var p=o;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1355:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),i("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),i("v-spacer"),i("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[i("span",{staticClass:"mr-2"},[t._v("Latest Release")]),i("v-icon",[t._v("mdi-open-in-new")])],1)],1),i("v-main",[i("HelloWorld")],1)],1)},l=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("v-tabs",{attrs:{"fixed-tabs":""}},t._l(t.titles,(function(e,a){return i("v-tab",{key:a,on:{click:function(e){return t.handlerClick(a)}}},[t._v(" "+t._s(e)+" ")])})),1),i("v-container",{attrs:{fluid:"","grid-list-sm":""}},[i("v-layout",{staticClass:"justify-center"},[i("v-flex",{attrs:{xs6:"",sm10:""}},[i("v-img",{attrs:{"max-height":"300px",src:t.show.picture?t.show.picture:"https://images.51microshop.com/1818/product/20180725/Request_A_Sample_1532534180500_0.jpg",alt:"no image"}})],1)],1)],1)],1),i("div",{staticClass:"d-flex"},[i("v-flex",{attrs:{xs8:"",s8:"","offset-sm1":""}},[i("draggable",{model:{value:t.items[t.page],callback:function(e){t.$set(t.items,t.page,e)},expression:"items[page]"}},[t._l(t.items[t.page],(function(e,a){return[i("v-card",{key:e.title,staticClass:"card",style:e.title===t.show.title?{border:"2px solid rgba(166, 189, 252, 1)"}:{border:"2px solid white"},on:{click:function(i){return t.checkItem(e)}}},[i("v-list-item",{key:e.title},[i("button",{staticClass:"item-button"},[i("span",{staticClass:"item-number"},[i("v-icon",{staticClass:"icon",style:e.title===t.show.title?{color:"blue"}:{color:"gray"}},[t._v("menu")]),t._v(" "+t._s(a+1)+". ")],1)]),i("v-list-item-content",{staticClass:"ml-2"},[i("v-list-item-title",{staticClass:"card-title",domProps:{innerHTML:t._s(e.title)}}),i("v-list-item-subtitle",{staticClass:"card-subtitle",domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)],1)]}))],2)],1),i("v-flex",{attrs:{xs4:"",sm4:"","ml-4":""}},[i("div",{staticClass:"button-container"},[i("v-radio-group",{attrs:{mandatory:"",color:"green"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}},[i("v-radio",{attrs:{label:"Stretch image",value:"Value 1",color:"success"}}),i("v-radio",{attrs:{label:"Crop image",value:"Value 2",color:"success"}}),i("v-radio",{attrs:{label:"Adjust manually",value:"Value 3",color:"success"}})],1),i("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"success"}},a),[t._v("Linked to")])]}}]),model:{value:t.replaceDialog,callback:function(e){t.replaceDialog=e},expression:"replaceDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Link to")]),i("v-card-text",[i("v-layout",{attrs:{column:""}},[i("v-text-field",{attrs:{"hide-details":"",label:"Type to search",solo:""},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),i("v-list",{attrs:{"one-line":""}},[t._l(t.filteredFolders,(function(e){return[i("v-card",{key:e.number,staticClass:"card"},[i("v-list-tile",{key:e.title},[i("v-icon",{attrs:{outlined:"",color:"blue"}},[t._v("folder_open")]),i("v-list-tile-content",[i("button",{on:{click:t.changeSrc}},[i("v-list-tile-title",{staticClass:"card-title",domProps:{innerHTML:t._s(e.title)}})],1)])],1)],1)]}))],2)],1)],1)],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.show.linkedObject.title,expression:"show.linkedObject.title != ''"}],staticClass:"linked-area"},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",width:"344",outlined:""}},[i("v-card-title",{attrs:{"primary-title":""}},[i("h6",{staticClass:"headline mb-0",staticStyle:{color:"#64b5f6"}},[t._v("Linked")])]),i("v-card-text",[i("h6",{staticClass:"headline mb-0"},[t._v(" Title: "),i("small",[t._v(t._s(t.show.linkedObject.title))])])]),i("v-card-text",[i("h6",{staticClass:"headline mb-0"},[t._v(" Path: "),i("small",[t._v(t._s(t.show.linkedObject.path))])])]),i("v-card-actions",[i("v-btn",{attrs:{color:"success"},on:{click:function(e){e.stopPropagation(),t.replaceDialog=!0}}},[t._v("Change link")])],1)],1)],1)],1)])],1)])},n=[],o=i("5530"),c=(i("159b"),i("466d"),i("ac1f"),i("4d63"),i("25f0"),i("b76a")),p=i.n(c),u={name:"simple",display:"Simple",order:0,components:{draggable:p.a},methods:{handlerClick:function(t){this.page=t,this.show=this.items[t][0]},checkItem:function(t){this.show.title===t.title?this.show=Object(o["a"])(Object(o["a"])({},t),{},{title:"",picture:"",linkedObject:{title:""}}):this.show=t},changeSrc:function(t){this.show.title&&(this.show.linkedObject.title=this.show.title,this.show.linkedObject.path=t.target.innerText)},change:function(t){var e=t.coordinates,i=t.canvas;console.log(e,i)}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}},filteredFolders:function(){var t=this;if(this.query){var e=[];return this.folders.forEach((function(i){null!==i.title&&i.title.match(new RegExp(t.query,"i"))&&e.push(i)})),e}return this.folders},draggingInfo:function(){return this.dragging?"under drag":""}},data:function(){return{linkedObject:{title:"",path:"test/path"},page:0,enabled:!0,dragging:!1,replaceDialog:!1,show:{title:"Test title 1 for page series",subtitle:"Test subtitle 1 for page series",number:1,picture:"https://wallpaper.dog/large/5509720.jpg",linkedObject:{title:"",path:"test/path"}},query:"",user:"",titles:["SERIES","MOVIES","CHILDREN"],folders:[{number:1,title:"Test 1"},{number:2,title:"Test 2"},{number:3,title:"Test 3"},{number:4,title:"Test 4"},{number:5,title:"Test 5"},{number:6,title:"Test 6"},{number:7,title:"Test 7"}],items:[[{title:"Test title 1 for page series",subtitle:"Test subtitle 1 for page series",number:1,picture:"https://wallpaper.dog/large/5509720.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 2 for page series",subtitle:"Test subtitle 2 for page series",number:2,picture:"https://wallpaper.dog/large/5509723.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 3 for page series",subtitle:"Test subtitle 3 for page series",number:3,picture:"https://wallpaper.dog/large/5509741.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 5 for page series",subtitle:"Test subtitle  for page series",number:4,picture:"https://wallpaper.dog/large/5509743.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 6 for page series",subtitle:"Test subtitle 6 for page series",number:5,picture:"https://wallpaper.dog/large/5509744.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 7 for page series",subtitle:"Test subtitle 7 for page series",number:6,picture:"https://wallpaper.dog/large/5509766.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 8 for page series",subtitle:"Test subtitle 8 for page series",number:7,picture:"https://wallpaper.dog/large/5509776.jpg",linkedObject:{title:"",path:"test/path"}}],[{title:"Test title 1 for page movies",subtitle:"Test subtitle 4 for page movies",number:1,picture:"https://wallpaper.dog/large/5509847.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 2 for page movies",subtitle:"Test subtitle 2 for page movies",number:2,picture:"https://wallpaper.dog/large/5509823.jpg",linkedObject:{title:"",path:"test/path"}}],[{title:"Test title 1 for page children",subtitle:"Test subtitle 1 for page children",number:1,picture:"https://wallpaper.dog/large/5509830.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 2 for page children",subtitle:"Test subtitle 2 for page children",number:2,picture:"https://wallpaper.dog/large/5509838.jpg",linkedObject:{title:"",path:"test/path"}},{title:"Test title 3 for page children",subtitle:"Test subtitle 3 for page children",number:3,picture:"https://wallpaper.dog/large/5509842.jpg",linkedObject:{title:"",path:"test/path"}}]]}}},d=u,h=(i("7d5b"),i("2877")),g=i("6544"),b=i.n(g),f=i("8336"),m=i("b0af"),v=i("99d9"),w=i("a523"),j=i("169a"),k=i("0e8f"),y=i("132d"),T=i("adda"),_=i("a722"),x=i("8860"),O=i("da13"),C=i("5d23"),V=i("67b6"),S=i("43a6"),L=i("71a3"),I=i("fe57"),P=i("8654"),M=Object(h["a"])(d,r,n,!1,null,null,null),E=M.exports;b()(M,{VBtn:f["a"],VCard:m["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VContainer:w["a"],VDialog:j["a"],VFlex:k["a"],VIcon:y["a"],VImg:T["a"],VLayout:_["a"],VList:x["a"],VListItem:O["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VRadio:V["a"],VRadioGroup:S["a"],VTab:L["a"],VTabs:I["a"],VTextField:P["a"]});var q={name:"App",components:{HelloWorld:E},data:function(){return{}}},D=q,R=i("7496"),A=i("40dc"),H=i("f6c4"),F=i("2fa4"),$=Object(h["a"])(D,s,l,!1,null,null,null),B=$.exports;b()($,{VApp:R["a"],VAppBar:A["a"],VBtn:f["a"],VIcon:y["a"],VImg:T["a"],VMain:H["a"],VSpacer:F["a"]});var N=i("f309");a["a"].use(N["a"]);var J=new N["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:J,render:function(t){return t(B)}}).$mount("#app")},"7d5b":function(t,e,i){"use strict";i("1355")}});
//# sourceMappingURL=app.07b8ac71.js.map