(function(e){function t(t){for(var i,r,u=t[0],s=t[1],c=t[2],d=0,m=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",[e._v("Contacts App")]),n("router-view")],1)},o=[],r={name:"App"},u=r,s=(n("034f"),n("2877")),c=Object(s["a"])(u,a,o,!1,null,null,null),l=c.exports,d=(n("a434"),n("b0c0"),n("2f62"));i["a"].use(d["a"]);var m=new d["a"].Store({state:{contacts:[]},mutations:{addContact:function(e,t){e.contacts.push(t)},delContact:function(e,t){e.contacts.splice(t,1)},editContact:function(e,t){e.contacts.splice(t.i,1,{name:t.name,number:t.number,fields:t.fields})}}}),f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputFields"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Введите имя контакта"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addContact(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"number",placeholder:"Введите номер телефона контакта"},domProps:{value:e.number},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addContact(t)},input:function(t){t.target.composing||(e.number=t.target.value)}}})]),n("button",{staticStyle:{background:"#41AA3C"},attrs:{type:"submit"},on:{click:e.addContact}},[e._v("Добавить контакт")])]),n("ul",e._l(e.storeContacts,(function(t,i){return n("li",{key:i},[n("div",[e._v(e._s(t.name))]),n("div",[e._v(e._s(t.number))]),n("div",{staticClass:"buttons"},[n("button",{staticStyle:{"margin-right":"5px",background:"#FF5733"},on:{click:function(t){return e.delContact(i)}}},[e._v("Удалить")]),n("router-link",{attrs:{to:{name:"Change",params:{id:i}},tag:"button"}},[e._v("Информация")])],1)])})),0)])},v=[],h={name:"Contacts",data:function(){return{name:"",number:""}},methods:{addContact:function(){if(""===this.name||""===this.number)return 0;this.$store.commit("addContact",{name:this.name,number:this.number,fields:[]}),this.name=this.number=""},delContact:function(e){if(!confirm("Удалить контакт?"))return 0;this.$store.commit("delContact",e)}},computed:{storeContacts:function(){return this.$store.state.contacts}}},b=h,g=(n("90e8"),Object(s["a"])(b,p,v,!1,null,null,null)),y=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputFields"},[n("div",[n("p",[e._v("Имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",[n("p",[e._v("Номер телефона")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})])]),n("br"),n("hr"),n("ul",e._l(e.fieldLocals,(function(t,i){return n("li",{key:i},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"fieldLocal.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{focus:function(n){return e.editField(t)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:e.fieldCancel(t)},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"fieldLocal.text"}],attrs:{type:"text"},domProps:{value:t.text},on:{focus:function(n){return e.editField(t)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:e.fieldCancel(t)},input:function(n){n.target.composing||e.$set(t,"text",n.target.value)}}}),n("div",[n("button",{staticStyle:{"margin-right":"5px"},on:{click:function(n){return e.fieldCancel(t)}}},[e._v("Отменить")]),n("button",{staticStyle:{background:"#FF5733"},on:{click:function(t){return e.delField(i)}}},[e._v("Удалить")])])])})),0),n("br"),n("hr"),n("h5",[e._v("Добавление полей")]),n("br"),n("div",{staticClass:"inputFields"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fieldName,expression:"fieldName"}],attrs:{placeholder:"Введите название"},domProps:{value:e.fieldName},on:{input:function(t){t.target.composing||(e.fieldName=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fieldText,expression:"fieldText"}],attrs:{placeholder:"Введите значение"},domProps:{value:e.fieldText},on:{input:function(t){t.target.composing||(e.fieldText=t.target.value)}}}),n("button",{staticStyle:{background:"#41AA3C"},on:{click:e.addField}},[e._v("Добавить поле")])]),n("br"),n("div",{staticClass:"bottom-buttons"},[n("hr"),n("button",{staticStyle:{"margin-right":"5px"},on:{click:e.saveContact}},[e._v("Сохранить и выйти")]),n("button",{staticStyle:{"margin-left":"5px",background:"#FF5733"},on:{click:e.cancel}},[e._v("Отменить и выйти")])])])},k=[],C=n("2909"),_={name:"Change",data:function(){return{name:this.$store.state.contacts[this.$route.params.id].name,number:this.$store.state.contacts[this.$route.params.id].number,id:this.$route.params.id,fieldLocals:Object(C["a"])(this.$store.state.contacts[this.$route.params.id].fields),fieldName:"",fieldText:"",editFields:"",beforeEditingCache:""}},methods:{addField:function(){if(""===this.fieldName||""===this.fieldText)return 0;this.fieldLocals.push({name:this.fieldName,text:this.fieldText}),this.fieldName=this.fieldText=""},delField:function(e){this.fieldLocals.splice(e,1)},editField:function(e){this.beforeEditingCache=Object.assign({},e),this.editFields=e},fieldCancel:function(e){if(!confirm("Отменить изменения поля?"))return 0;Object.assign(e,this.beforeEditingCache),this.editFields=this.editText=this.beforeEditingCache=null},backToHome:function(){this.$router.push("/")},cancel:function(){if(!confirm("Отменить изменения?"))return 0;this.backToHome()},saveContact:function(){this.$store.commit("editContact",{i:this.$route.params.id,name:this.name,number:this.number,fields:this.fieldLocals}),this.backToHome()}}},w=_,O=(n("ed5b"),Object(s["a"])(w,x,k,!1,null,null,null)),F=O.exports;i["a"].use(f["a"]);var $=new f["a"]({routes:[{path:"/",name:"Home",component:y},{path:"/change:id",name:"Change",component:F}]});i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(l)},router:$,store:m}).$mount("#app")},"85ec":function(e,t,n){},"90e8":function(e,t,n){"use strict";var i=n("d5e1"),a=n.n(i);a.a},d5e1:function(e,t,n){},ed5b:function(e,t,n){"use strict";var i=n("f224"),a=n.n(i);a.a},f224:function(e,t,n){}});
//# sourceMappingURL=app.eb3044e7.js.map