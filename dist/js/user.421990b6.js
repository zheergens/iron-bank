(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[806],{3939:function(e){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?r.push(t.charAt(o>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(n))>>>6-2*o);return r}};e.exports=r})()},6302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[e.isLoginError?t("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.$t("user.login.message-invalid-credentials")}}):e._e(),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:e.$t("user.userName.required")},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n          'username',\n          {rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n        ]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")}],validateTrigger:"blur"}],expression:"[\n          'password',\n          {rules: [{ required: true, message: $t('user.password.required') }], validateTrigger: 'blur'}\n        ]"}],attrs:{size:"large",placeholder:e.$t("user.login.password.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}]},[e._v(e._s(e.$t("user.login.remember-me")))]),t("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[e._v(e._s(e.$t("user.login.forgot-password")))])],1),t("a-form-item",{staticStyle:{"margin-top":"24px"}},[t("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v(e._s(e.$t("user.login.login")))])],1)],1),e.requiredTwoStepCaptcha?t("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},o=[],a=r(57888),i=(r(26099),r(27495),r(83503)),s=r.n(i),u=function(){var e=this,t=this,r=t._self._c;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),r("a-spin",{attrs:{spinning:t.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[r("div",{staticClass:"step-form-wrapper"},[t.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),r("br"),t._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),t._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk.apply(null,arguments)}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},l=[],c={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(r,n){r?(e.stepLoading=!1,e.$emit("error",{err:r})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:n})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},p=c,f=r(81656),d=(0,f.A)(p,u,l,!1,null,"4a462ef6",null),g=d.exports,h=r(95353),m=r(61145),v=r(55585),y={components:{TwoStepCaptcha:g},data:function(){return{loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{loginBtn:!1,loginType:0}}},created:function(){var e=this;(0,v.N)({}).then((function(t){e.requiredTwoStepCaptcha=t.result.stepCode})).catch((function(){e.requiredTwoStepCaptcha=!1}))},methods:(0,a.A)((0,a.A)({},(0,h.i0)(["Login","Logout"])),{},{handleUsernameOrEmail:function(e,t,r){var n=this.state,o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;o.test(t)?n.loginType=0:n.loginType=1,r()},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,n=this.state,o=this.Login;n.loginBtn=!0,r(["username","password"],{force:!0},(function(e,r){if(e)setTimeout((function(){n.loginBtn=!1}),600);else{var i=(0,a.A)({},r);delete i.username,i[n.loginType?"username":"email"]=r.username,i.password=s()(r.password),o(i).then((function(e){return t.loginSuccess(e)})).catch((function(e){return t.requestFailed(e)})).finally((function(){n.loginBtn=!1}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){this.$router.push({name:"dashboard"}),this.$notification.success({message:"欢迎",description:"".concat((0,m.Z$)(),"，欢迎回来")})},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}})},b=y,_=(0,f.A)(b,n,o,!1,null,"25040566",null),C=_.exports},83503:function(e,t,r){(function(){var t=r(3939),n=r(92151).utf8,o=r(87206),a=r(92151).bin,i=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?a.stringToBytes(e):n.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var s=t.bytesToWords(e),u=8*e.length,l=1732584193,c=-271733879,p=-1732584194,f=271733878,d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8);s[u>>>5]|=128<<u%32,s[14+(u+64>>>9<<4)]=u;var g=i._ff,h=i._gg,m=i._hh,v=i._ii;for(d=0;d<s.length;d+=16){var y=l,b=c,_=p,C=f;l=g(l,c,p,f,s[d+0],7,-680876936),f=g(f,l,c,p,s[d+1],12,-389564586),p=g(p,f,l,c,s[d+2],17,606105819),c=g(c,p,f,l,s[d+3],22,-1044525330),l=g(l,c,p,f,s[d+4],7,-176418897),f=g(f,l,c,p,s[d+5],12,1200080426),p=g(p,f,l,c,s[d+6],17,-1473231341),c=g(c,p,f,l,s[d+7],22,-45705983),l=g(l,c,p,f,s[d+8],7,1770035416),f=g(f,l,c,p,s[d+9],12,-1958414417),p=g(p,f,l,c,s[d+10],17,-42063),c=g(c,p,f,l,s[d+11],22,-1990404162),l=g(l,c,p,f,s[d+12],7,1804603682),f=g(f,l,c,p,s[d+13],12,-40341101),p=g(p,f,l,c,s[d+14],17,-1502002290),c=g(c,p,f,l,s[d+15],22,1236535329),l=h(l,c,p,f,s[d+1],5,-165796510),f=h(f,l,c,p,s[d+6],9,-1069501632),p=h(p,f,l,c,s[d+11],14,643717713),c=h(c,p,f,l,s[d+0],20,-373897302),l=h(l,c,p,f,s[d+5],5,-701558691),f=h(f,l,c,p,s[d+10],9,38016083),p=h(p,f,l,c,s[d+15],14,-660478335),c=h(c,p,f,l,s[d+4],20,-405537848),l=h(l,c,p,f,s[d+9],5,568446438),f=h(f,l,c,p,s[d+14],9,-1019803690),p=h(p,f,l,c,s[d+3],14,-187363961),c=h(c,p,f,l,s[d+8],20,1163531501),l=h(l,c,p,f,s[d+13],5,-1444681467),f=h(f,l,c,p,s[d+2],9,-51403784),p=h(p,f,l,c,s[d+7],14,1735328473),c=h(c,p,f,l,s[d+12],20,-1926607734),l=m(l,c,p,f,s[d+5],4,-378558),f=m(f,l,c,p,s[d+8],11,-2022574463),p=m(p,f,l,c,s[d+11],16,1839030562),c=m(c,p,f,l,s[d+14],23,-35309556),l=m(l,c,p,f,s[d+1],4,-1530992060),f=m(f,l,c,p,s[d+4],11,1272893353),p=m(p,f,l,c,s[d+7],16,-155497632),c=m(c,p,f,l,s[d+10],23,-1094730640),l=m(l,c,p,f,s[d+13],4,681279174),f=m(f,l,c,p,s[d+0],11,-358537222),p=m(p,f,l,c,s[d+3],16,-722521979),c=m(c,p,f,l,s[d+6],23,76029189),l=m(l,c,p,f,s[d+9],4,-640364487),f=m(f,l,c,p,s[d+12],11,-421815835),p=m(p,f,l,c,s[d+15],16,530742520),c=m(c,p,f,l,s[d+2],23,-995338651),l=v(l,c,p,f,s[d+0],6,-198630844),f=v(f,l,c,p,s[d+7],10,1126891415),p=v(p,f,l,c,s[d+14],15,-1416354905),c=v(c,p,f,l,s[d+5],21,-57434055),l=v(l,c,p,f,s[d+12],6,1700485571),f=v(f,l,c,p,s[d+3],10,-1894986606),p=v(p,f,l,c,s[d+10],15,-1051523),c=v(c,p,f,l,s[d+1],21,-2054922799),l=v(l,c,p,f,s[d+8],6,1873313359),f=v(f,l,c,p,s[d+15],10,-30611744),p=v(p,f,l,c,s[d+6],15,-1560198380),c=v(c,p,f,l,s[d+13],21,1309151649),l=v(l,c,p,f,s[d+4],6,-145523070),f=v(f,l,c,p,s[d+11],10,-1120210379),p=v(p,f,l,c,s[d+2],15,718787259),c=v(c,p,f,l,s[d+9],21,-343485551),l=l+y>>>0,c=c+b>>>0,p=p+_>>>0,f=f+C>>>0}return t.endian([l,c,p,f])};i._ff=function(e,t,r,n,o,a,i){var s=e+(t&r|~t&n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._gg=function(e,t,r,n,o,a,i){var s=e+(t&n|r&~n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._hh=function(e,t,r,n,o,a,i){var s=e+(t^r^n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._ii=function(e,t,r,n,o,a,i){var s=e+(r^(t|~n))+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(i(e,r));return r&&r.asBytes?n:r&&r.asString?a.bytesToString(n):t.bytesToHex(n)}})()},87206:function(e){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||r(e)||!!e._isBuffer)}},92151:function(e){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=t}}]);