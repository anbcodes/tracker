(function(t){function e(e){for(var r,s,o=e[0],l=e[1],i=e[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var d=l;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.addDay(-1)}}},[a("v-icon",[t._v("\n            mdi-chevron-left\n          ")])],1),a("v-toolbar-title",[a("span",{staticClass:"heading"},[t._v(t._s(t.currentDay))])]),a("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.addDay(1)}}},[a("v-icon",[t._v("\n            mdi-chevron-right\n          ")])],1)],1),a("v-row",{staticClass:"ma-5"},[a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-combobox",{attrs:{label:"Breakfast",items:t.All["Breakfast"],multiple:"",chips:"","deletable-chips":"","no-data-text":"Press enter to add new value"},model:{value:t.data[t.currentDay]["Breakfast"],callback:function(e){t.$set(t.data[t.currentDay],"Breakfast",e)},expression:"data[currentDay]['Breakfast']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Breakfast Time"},model:{value:t.data[t.currentDay]["Breakfast Time"],callback:function(e){t.$set(t.data[t.currentDay],"Breakfast Time",e)},expression:"data[currentDay]['Breakfast Time']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-combobox",{attrs:{label:"Lunch",items:t.All["Lunch"],multiple:"","no-data-text":"Press enter to add new value",chips:"","deletable-chips":""},model:{value:t.data[t.currentDay]["Lunch"],callback:function(e){t.$set(t.data[t.currentDay],"Lunch",e)},expression:"data[currentDay]['Lunch']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Lunch Time"},model:{value:t.data[t.currentDay]["Lunch Time"],callback:function(e){t.$set(t.data[t.currentDay],"Lunch Time",e)},expression:"data[currentDay]['Lunch Time']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-combobox",{attrs:{label:"Dinner",items:t.All["Dinner"],multiple:"","no-data-text":"Press enter to add new value",chips:"","deletable-chips":""},model:{value:t.data[t.currentDay]["Dinner"],callback:function(e){t.$set(t.data[t.currentDay],"Dinner",e)},expression:"data[currentDay]['Dinner']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Dinner Time"},model:{value:t.data[t.currentDay]["Dinner Time"],callback:function(e){t.$set(t.data[t.currentDay],"Dinner Time",e)},expression:"data[currentDay]['Dinner Time']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-combobox",{attrs:{label:"Snacks",items:t.All["Snacks"],multiple:"","no-data-text":"Press enter to add new value",chips:"","deletable-chips":""},model:{value:t.data[t.currentDay]["Snacks"],callback:function(e){t.$set(t.data[t.currentDay],"Snacks",e)},expression:"data[currentDay]['Snacks']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-container",[t._v("\n            Times:\n            "),t._l(t.data[t.currentDay]["Snacks"],(function(e){return a("v-row",{key:e},[a("v-text-field",{attrs:{label:e},model:{value:t.data[t.currentDay]["Snacks Times"][e],callback:function(a){t.$set(t.data[t.currentDay]["Snacks Times"],e,a)},expression:"data[currentDay]['Snacks Times'][snack]"}})],1)}))],2)],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-combobox",{attrs:{label:"Activities",items:t.All["Activities"],multiple:"","no-data-text":"Press enter to add new value",chips:"","deletable-chips":""},model:{value:t.data[t.currentDay]["Activities"],callback:function(e){t.$set(t.data[t.currentDay],"Activities",e)},expression:"data[currentDay]['Activities']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-container",[t._v("\n            Times:\n            "),t._l(t.data[t.currentDay]["Activities"],(function(e){return a("v-row",{key:e},[a("v-text-field",{attrs:{label:e},model:{value:t.data[t.currentDay]["Activity Times"][e],callback:function(a){t.$set(t.data[t.currentDay]["Activity Times"],e,a)},expression:"data[currentDay]['Activity Times'][activity]"}})],1)}))],2)],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Wake Up Time"},model:{value:t.data[t.currentDay]["Wake Up Time"],callback:function(e){t.$set(t.data[t.currentDay],"Wake Up Time",e)},expression:"data[currentDay]['Wake Up Time']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"School Start"},model:{value:t.data[t.currentDay]["School Start"],callback:function(e){t.$set(t.data[t.currentDay],"School Start",e)},expression:"data[currentDay]['School Start']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"School End"},model:{value:t.data[t.currentDay]["School End"],callback:function(e){t.$set(t.data[t.currentDay],"School End",e)},expression:"data[currentDay]['School End']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Lights Out"},model:{value:t.data[t.currentDay]["Lights Out"],callback:function(e){t.$set(t.data[t.currentDay],"Lights Out",e)},expression:"data[currentDay]['Lights Out']"}})],1),a("v-col",{attrs:{lg:"3",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"Weight",type:"number",suffix:"lb"},model:{value:t.data[t.currentDay]["Weight"],callback:function(e){t.$set(t.data[t.currentDay],"Weight",e)},expression:"data[currentDay]['Weight']"}})],1),a("v-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("v-textarea",{model:{value:t.data[t.currentDay]["Notes"],callback:function(e){t.$set(t.data[t.currentDay],"Notes",e)},expression:"data[currentDay]['Notes']"}})],1)],1),a("v-btn",{on:{click:t.copy}},[t._v(" \n        copy\n      ")]),a("v-btn",{on:{click:t.enter}},[t._v(" \n        enter id\n      ")])],1)],1)],1)},c=[],s=a("eb11"),o=a.n(s);const l={Breakfast:[],"Breakfast Time":"",Lunch:[],"Lunch Time":"",Dinner:[],"Dinner Time":"",Snacks:[],"Snacks Times":{},Activities:[],"Activity Times":{},"Wake Up time":"","School Start":"","School End":"","Lights Out":"",Weight:0,Notes:""};var i={compress(t){if(Object.values(t)){let e="";return Object.keys(t).forEach(a=>{let r=[];Object.keys(l).forEach(e=>{r.push(JSON.stringify(t[a][e]))}),e+=r.join("\\,"),e+="\\,\\,",e+=a,e+="\\,\\,"}),console.log("List Data",e),o.a.compress(e)}},decompress(t){let e=o.a.decompress(t).split(/\\,\\,/);e.pop(),console.log("decompress Data",e);let a={};return e.forEach((t,r)=>{r%2===0&&(a[e[r+1]]={},t.split("\\,").forEach((t,n)=>{a[e[r+1]][Object.keys(l)[n]]=JSON.parse(t)}))}),a}},d={name:"App",created(){this.addDateFormat(),window.addEventListener("message",(function(t){t.source==window&&"DATA_WEBSITE_TRACKER"===t.data.type&&(console.log("received: ",t.data.data),this.data=t.data.data)}),!1)},data:()=>({data:i.decompress(window.localStorage.getItem("DATA"))||{},currentDay:(new Date).toISOString().slice(0,10),All:{},dataFormat:{Breakfast:[],"Breakfast Time":"",Lunch:[],"Lunch Time":"",Dinner:[],"Dinner Time":"",Snacks:[],"Snacks Times":{},Activities:[],"Activity Times":{},"Wake Up time":"","School Start":"","School End":"","Lights Out":"",Weight:0,Notes:""}}),watch:{data:{handler(){console.log("compress",i.compress(this.data)),console.log("decompress",i.decompress(i.compress(this.data))),window.localStorage.setItem("DATA",i.compress(this.data)),this.computeAll()},deep:!0,immediate:!0}},methods:{computeAll(){let t={};Object.keys(this.dataFormat).forEach(e=>{let a=Object.values(this.data).map(t=>t[e]).flat();t[e]=[...new Set(a)]}),this.All=t,console.log("ALL",this.All)},addDay(t){const e=new Date(this.currentDay);e.setDate(e.getDate()+t),console.log("Date:",e.toISOString().slice(0,10)),this.dataFormat.date=e.toISOString().slice(0,10),this.addDateFormat(e.toISOString().slice(0,10)),this.currentDay=e.toISOString().slice(0,10),this.$nextTick(()=>{this.$forceUpdate()})},addDateFormat(t){this.data[t||this.currentDay]||(this.$set(this.data,t||this.currentDay,{...this.dataFormat}),console.log("Data: ",this.data))},copy(){let t=document.createElement("input");t.type="text",t.value=i.compress(this.data),document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),alert("id copied to clipboard")},enter(){this.data=i.decompress(prompt("Id"))||this.data}}},u=d,m=a("2877"),p=a("6544"),v=a.n(p),h=a("7496"),f=a("8336"),y=a("b0af"),b=a("62ad"),D=a("2b5d"),k=a("a523"),g=a("132d"),S=a("0fd9"),x=a("8654"),T=a("a844"),w=a("71d9"),A=a("2a7f"),O=Object(m["a"])(u,n,c,!1,null,null,null),L=O.exports;v()(O,{VApp:h["a"],VBtn:f["a"],VCard:y["a"],VCol:b["a"],VCombobox:D["a"],VContainer:k["a"],VIcon:g["a"],VRow:S["a"],VTextField:x["a"],VTextarea:T["a"],VToolbar:w["a"],VToolbarTitle:A["a"]});var $=a("f309");r["a"].use($["a"]);var _=new $["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:_,render:t=>t(L)}).$mount("#app")}});
//# sourceMappingURL=app.586abb29.js.map