(function(e){function t(t){for(var n,o,c=t[0],r=t[1],d=t[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i={app:0},s=[];function c(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"56203616","chunk-2743f79a":"62e95762","chunk-dbb14e0e":"44eeaa95"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a={about:1,"chunk-2743f79a":1,"chunk-dbb14e0e":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"d48bbdda","chunk-2743f79a":"3ff77be3","chunk-dbb14e0e":"450e35a0"}[e]+".css",i=r.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var d=s[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===i))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===n||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],p.parentNode.removeChild(p),a(s)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=c(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}i[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"10a6":function(e,t,a){e.exports=a.p+"img/qrcode.6f760a25.png"},"2eb0":function(e,t,a){},5380:function(e,t,a){e.exports=a.p+"img/爱心.40b8eeeb.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("男神&女神")]),a("router-link",{attrs:{to:"/history"}},[e._v("历史推送")]),a("router-link",{attrs:{to:"/match"}},[e._v("互选匹配")]),a("router-link",{attrs:{to:"/sign"}},[e._v("报名")])],1),a("router-view")],1)},i=[],s=(a("034f"),a("2877")),c={},r=Object(s["a"])(c,o,i,!1,null,null,null),d=r.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"top",on:{click:e.showQR}},[e._v("点击关注四川高校脱单微信公众号")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.QR,expression:"QR"}],staticClass:"layer",on:{click:e.closeQR}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.QR,expression:"QR"}],staticClass:"pic-content"},[n("img",{staticClass:"pic",attrs:{src:a("10a6"),alt:""}})]),e._l(e.actor,(function(t,a){return n("ContentBox",{key:a,attrs:{data:t,openid:e.openid,flag:1,likeFlag:0},on:{refresh:e.refreshActor}})}))],2)},p=[],h=(a("841c"),a("ac1f"),a("1276"),a("c770")),f={name:"Home",components:{ContentBox:h["a"]},data:function(){return{openid:"",QR:!1,actor:[],localTest:!0}},methods:{refreshActor:function(){var e=this;this.axios.post("http://www.scgxtd.cn/public/user/message/shower",{id:sessionStorage.getItem("openid")}).then((function(t){0==t.data.code?e.actor=t.data.data:-1==t.data.code&&alert(t.data.msg)}))},showQR:function(){this.QR=!0},closeQR:function(){this.QR=!1}},mounted:function(){var e=this;if(1!=this.localTest){if(sessionStorage.getItem("openid")&&"undefined"!=sessionStorage.getItem("openid"))return console.log(sessionStorage.getItem("openid")),this.openid=sessionStorage.getItem("openid"),void this.axios.post("http://www.scgxtd.cn/public/user/message/shower",{id:sessionStorage.getItem("openid")}).then((function(t){0==t.data.code?e.actor=t.data.data:-1==t.data.code&&alert(t.data.msg)}));var t="wx4d1f2c66828fd817",a=encodeURIComponent("http://www.scgxtd.cn/public/dist/"),n=decodeURI(location.search);if(-1!=n.indexOf("?code")){var o=n.substr(n.indexOf("?code")+6).split("&")[0];console.log(o);var i=this;this.axios.post("http://www.scgxtd.cn/public/index/getcode/token",{code:o}).then((function(e){console.log(e),"undefined"!=e.data.data?0==e.data.code?(sessionStorage.setItem("openid",e.data.data),i.openid=e.data.data,console.log(i.openid),i.axios.post("http://www.scgxtd.cn/public/user/message/shower",{id:sessionStorage.getItem("openid")}).then((function(e){console.log(e),0==e.data.code?i.actor=e.data.data:-1==e.data.code&&alert(e.data.msg)}))):this.$message("登录失败，状态："+e.status+e.statusText):this.$message("登录失败，请重试")}))}else window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t+"&redirect_uri="+a+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"}}},m=f,g=(a("8c22"),Object(s["a"])(m,u,p,!1,null,"40fb4ec9",null)),v=g.exports;n["default"].use(l["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/history",name:"History",component:function(){return a.e("about").then(a.bind(null,"e4bb"))}},{path:"/match",name:"Match",component:function(){return a.e("chunk-2743f79a").then(a.bind(null,"42f7"))}},{path:"/sign",name:"Sign",component:function(){return a.e("chunk-dbb14e0e").then(a.bind(null,"1c4f"))}}],w=new l["a"]({routes:b});w.beforeEach((function(e,t,a){"Home"===e.name&&a(),"History"!==e.name&&"Match"!==e.name&&"Sign"!==e.name||"Home"!==t.name||a(),"Home"!==e.name&&"Match"!==e.name&&"Sign"!==e.name||"History"!==t.name||a(),"History"!==e.name&&"Home"!==e.name&&"Sign"!==e.name||"Match"!==t.name||a(),"History"!==e.name&&"Home"!==e.name&&"Match"!==e.name||"Sign"!==t.name||a(),"History"===e.name&&"Home"!==t.name&&"Match"!==t.name&&"Sign"!==t.name&&a({path:"/"}),"Match"===e.name&&"Home"!==t.name&&"History"!==t.name&&"Sign"!==t.name&&a({path:"/"}),"Sign"===e.name&&"Home"!==t.name&&"Match"!==t.name&&"History"!==t.name&&a({path:"/"})}));var y=w,k=a("bc3a"),x=a.n(k),_=a("4328"),C=a.n(_),S=a("5c96"),P=a.n(S);a("0fae");n["default"].use(P.a),n["default"].prototype.axios=x.a,n["default"].prototype.$qs=C.a,n["default"].config.productionTip=!1,new n["default"]({router:y,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,a){},"8c22":function(e,t,a){"use strict";a("2eb0")},b752:function(e,t,a){},c770:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 1==e.flag?n("div",{class:"女"==e.data.gender?"contentbox":"contentbox1"},[this.openid==e.data.ID?n("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=e.likeFlag,expression:"likeFlag != 1"}],staticClass:"drop",attrs:{type:"danger",plain:""},on:{click:e.drop}},[e._v(" 我要下墙 ")]):e._e(),n("p",{staticClass:"actor-title"},[e._v(" "+e._s("男"==e.data.gender?"男神":"女神")+" ")]),n("div",{staticClass:"pic-content"},[n("el-carousel",e._l(e.data.image,(function(e){return n("el-carousel-item",{key:e.index},[n("el-image",{staticStyle:{height:"300px"},attrs:{src:e,fit:"contain"}})],1)})),1)],1),this.openid!=e.data.ID?n("div",{staticClass:"like",on:{click:e.like}},[n("img",{class:1==e.isLiked?"heart-anim":"heart",attrs:{src:a("5380")}}),n("span",{directives:[{name:"show",rawName:"v-show",value:1!=e.likeFlag,expression:"likeFlag!=1"}],class:(e.isLiked,"likes")},[e._v(e._s(e.data.like))])]):e._e(),n("div",{staticClass:"main-info"},[n("div",{staticClass:"nickName"},[e._v(e._s(e.data.name))]),n("div",{staticClass:"school"},[e._v(e._s(e.data.school))]),n("div",{staticClass:"age"},[e._v(e._s(e.data.age)+"岁")]),n("div",{staticClass:"height"},[e._v(e._s(e.data.height)+"cm")]),n("div",{staticClass:"constellation"},[e._v(e._s(e.data.star))]),n("div",{staticClass:"place"},[e._v(e._s(e.data.location))])]),n("div",{staticClass:"sub-info"}),n("div",{staticClass:"about-me"},[e._v("关于我:"),n("br"),e._v(e._s(e.data.introduction))]),n("div",{staticClass:"target"},[e._v("我喜欢的TA: "),n("br"),e._v(e._s(e.data.goal))]),1!=e.likeFlag?n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.data.ispay||1==this.paied,expression:"data.ispay != 0 || this.paied == 1"}],staticClass:"connect"},[e._v(" 联系方式:"+e._s(e.data.connect)+" ")]):e._e(),n("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=e.likeFlag&&0==e.data.ispay,expression:"likeFlag != 1 && data.ispay == 0"}],staticClass:"get-info",attrs:{type:"danger",plain:""},on:{click:e.handlePayNotice}},[e._v(" 获取联系方式 ")]),n("p",{staticClass:"feedback",on:{click:e.feedback}},[e._v("反馈")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showFeedback,expression:"showFeedback"}],staticClass:"layer",on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPayNotice,expression:"showPayNotice"}],staticClass:"layer",on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDrop,expression:"showDrop"}],staticClass:"layer",on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showFeedback,expression:"showFeedback"}],staticClass:"feedback-log",on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}},[n("el-input",{staticClass:"question",attrs:{type:"textarea",rows:5,placeholder:"反馈问题"},model:{value:e.question,callback:function(t){e.question=t},expression:"question"}}),n("el-input",{staticClass:"feed-connect",attrs:{type:"text",placeholder:"联系方式(QQ或邮箱等)"},model:{value:e.feedConnect,callback:function(t){e.feedConnect=t},expression:"feedConnect"}}),n("div",{staticClass:"button-content"},[n("el-button",{attrs:{type:"danger",plain:""},on:{click:e.cancel}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.submit}},[e._v(e._s(e.btnWord))])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDrop,expression:"showDrop"}],staticClass:"feedback-log",staticStyle:{height:"160px"},on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}},[n("el-input",{staticClass:"feed-connect",staticStyle:{"margin-bottom":"30px","padding-top":"10px"},attrs:{placeholder:"上墙时填写的邮箱"},model:{value:e.mail,callback:function(t){e.mail=t},expression:"mail"}}),n("div",{staticClass:"button-content"},[n("el-button",{attrs:{type:"danger",plain:""},on:{click:e.submitDrop}},[e._v("下墙")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.cancel}},[e._v("取消")])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPayNotice,expression:"showPayNotice"}],staticClass:"feedback-log",staticStyle:{height:"200px",color:"black"},on:{scroll:function(e){e.stopPropagation(),e.preventDefault()},touchmove:function(e){e.stopPropagation(),e.preventDefault()}}},[n("h4",{staticStyle:{"margin-top":"20px"}},[e._v("提示！")]),n("p",[e._v("您即将前往支付，支付后即可获取联系方式。")]),e._m(0),n("div",[n("el-button",{attrs:{plain:""},on:{click:e.closePayNotice}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.getInfo}},[e._v("同意并支付")])],1)])],1):e._e()},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("您需要同意"),a("a",{attrs:{href:"http://proscgxtd.mikecrm.com/PxoydYR"}},[e._v("支付协议")])])}],i=a("53ca"),s=(a("a9e3"),{name:"ContentBox",props:["data","openid","flag","likeFlag"],data:function(){return{btnWord:"提交",question:"",feedConnect:"",showFeedback:!1,isLiked:!1,mail:"",showDrop:!1,showPayNotice:!1,paied:0}},mounted:function(){},methods:{drop:function(){this.showDrop=!0},like:function(){var e=this;if(console.log(this.data),0==this.likeFlag&&1!=this.isLiked){this.axios.post("http://www.scgxtd.cn/public/user/message/like",{actorUid:this.data.ID});var t=Number(this.data.like);t+=1,this.isLiked=!0,this.data.like=t,console.log(this.data.like),console.log(Object(i["a"])(this.data.like))}else 1==this.likeFlag&&(this.isLiked=!0,this.axios.post("http://www.scgxtd.cn/public/user/active/like",{openid:this.openid,actorid:this.data.ID}).then((function(t){0==t.data.code?e.$message("点赞成功"):-1==t.data.code&&e.$message("点赞失败:"+t.data.msg)})))},feedback:function(){this.$data.showFeedback=!0},submit:function(){var e=this;this.btnWord="正在提交",this.axios.post("http://www.scgxtd.cn/public/user/suggestion",{question:this.question,connect:this.feedConnect}).then((function(t){e.btnWord="提交",e.$data.showFeedback=!1,0==t.data.code?e.$message("反馈成功"):-1==t.data.code&&e.$message("反馈失败，msg:"+t.data.msg)})),console.log(this.$data.question),console.log(this.$data.feedConnect),this.$data.showFeedback=!1},submitDrop:function(){var e=this;this.axios.post("/http://www.scgxtd.cn/public/user/message/quit",{openid:this.openid,email:this.mail}).then((function(t){0==t.data.code?e.$message("下墙成功"):-1==t.data.code&&e.$message("下墙失败"+t.data.msg)}))},cancel:function(){this.$data.showFeedback=!1,this.showDrop=!1},handlePayNotice:function(){this.showPayNotice=!0},closePayNotice:function(){this.showPayNotice=!1,this.$emit("refresh")},getInfo:function(){var e=this;console.log(this.data),this.axios.post("http://www.scgxtd.cn/public/index/wxpay/getjsparam",{openid:this.openid,actorid:this.data.ID}).then((function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady)):e.onBridgeReady(t)})).catch((function(e){console.log(e)})),this.$alert("正在前往支付","提示",{confirmButtonText:"完成支付，前往获取联系方式",callback:function(t){"confirm"==t&&(e.showPayNotice=!1,e.$emit("refresh"))}})},onBridgeReady:function(e){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.data.appId,timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.package,signType:"MD5",paySign:e.data.paySign},(function(e){this.data.ispay=1,this.paied=1,"get_brand_wcpay_request:ok"==e.err_msg&&this.$message("支付成功！正在刷新")}))}}}),c=s,r=(a("d661"),a("2877")),d=Object(r["a"])(c,n,o,!1,null,"56ed0d0b",null);t["a"]=d.exports},d661:function(e,t,a){"use strict";a("b752")}});
//# sourceMappingURL=app.844581ec.js.map