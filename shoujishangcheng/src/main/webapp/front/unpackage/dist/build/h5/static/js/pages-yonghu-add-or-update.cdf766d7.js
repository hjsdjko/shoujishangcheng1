(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"176f":function(r,e,t){r.exports=t.p+"static/img/upload.2a6f2919.png"},"454b":function(r,e,t){"use strict";var i;t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var n=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("用户名")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.yonghuming,placeholder:"用户名"},model:{value:r.ruleForm.yonghuming,callback:function(e){r.$set(r.ruleForm,"yonghuming",e)},expression:"ruleForm.yonghuming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("密码")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("性别")]),i("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("头像")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t("176f"),mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("联系电话")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("余额")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.money,placeholder:"余额"},model:{value:r.ruleForm.money,callback:function(e){r.$set(r.ruleForm,"money",e)},expression:"ruleForm.money"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(51, 153, 153, 1)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},a=[]},"4fd6":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-eedabd64]{padding:%?20?%}.content[data-v-eedabd64]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-eedabd64]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-eedabd64]{width:%?180?%}.avator[data-v-eedabd64]{width:%?150?%;height:%?60?%}.right-input[data-v-eedabd64]{flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-eedabd64]{justify-content:space-between}.btn[data-v-eedabd64]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-eedabd64]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-eedabd64]{border:0}.cu-form-group uni-input[data-v-eedabd64]{padding:0 %?30?%}.uni-input[data-v-eedabd64]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-eedabd64]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-eedabd64]::after{line-height:%?88?%}.select .uni-input[data-v-eedabd64]{line-height:%?88?%}.input .right-input[data-v-eedabd64]{line-height:%?88?%}',""]),r.exports=e},ae42:function(r,e,t){"use strict";var i=t("4ea4");t("99af"),t("d3b7"),t("ac1f"),t("1276"),t("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var n=i(t("1da1")),a=i(t("5c9f")),o={data:function(){return{ruleForm:{yonghuming:"",mima:"",xingming:"",xingbie:"",touxiang:"",lianxidianhua:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,mima:!1,xingming:!1,xingbie:!1,touxiang:!1,lianxidianhua:!1,money:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(r){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,e.$api.session(i);case 3:if(n=t.sent,e.user=n.data,e.xingbieOptions="男,女".split(","),e.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(e.ruleForm.refid=r.refid,e.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){t.next=14;break}return e.ruleForm.id=r.id,t.next=12,e.$api.info("yonghu",e.ruleForm.id);case 12:n=t.sent,e.ruleForm=n.data;case 14:if(!r.cross){t.next=49;break}a=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(a);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(o=t.t1.value,"yonghuming"!=o){t.next=23;break}return e.ruleForm.yonghuming=a[o],e.ro.yonghuming=!0,t.abrupt("continue",17);case 23:if("mima"!=o){t.next=27;break}return e.ruleForm.mima=a[o],e.ro.mima=!0,t.abrupt("continue",17);case 27:if("xingming"!=o){t.next=31;break}return e.ruleForm.xingming=a[o],e.ro.xingming=!0,t.abrupt("continue",17);case 31:if("xingbie"!=o){t.next=35;break}return e.ruleForm.xingbie=a[o],e.ro.xingbie=!0,t.abrupt("continue",17);case 35:if("touxiang"!=o){t.next=39;break}return e.ruleForm.touxiang=a[o],e.ro.touxiang=!0,t.abrupt("continue",17);case 39:if("lianxidianhua"!=o){t.next=43;break}return e.ruleForm.lianxidianhua=a[o],e.ro.lianxidianhua=!0,t.abrupt("continue",17);case 43:if("money"!=o){t.next=47;break}return e.ruleForm.money=a[o],e.ro.money=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:e.styleChange();case 50:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.ruleForm.yonghuming){e.next=3;break}return r.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(r.ruleForm.mima){e.next=6;break}return r.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(r.ruleForm.xingming){e.next=9;break}return r.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if(!r.ruleForm.money||r.$validate.isNumber(r.ruleForm.money)){e.next=12;break}return r.$utils.msg("余额应输入数字"),e.abrupt("return");case 12:if(!r.ruleForm.id){e.next=17;break}return e.next=15,r.$api.update("yonghu",r.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,r.$api.add("yonghu",r.ruleForm);case 19:r.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e)})))()},optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},b07b:function(r,e,t){var i=t("4fd6");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=t("4f06").default;n("49630ab6",i,!0,{sourceMap:!1,shadowMode:!1})},b624:function(r,e,t){"use strict";t.r(e);var i=t("ae42"),n=t.n(i);for(var a in i)"default"!==a&&function(r){t.d(e,r,(function(){return i[r]}))}(a);e["default"]=n.a},d1ff:function(r,e,t){"use strict";t.r(e);var i=t("454b"),n=t("b624");for(var a in n)"default"!==a&&function(r){t.d(e,r,(function(){return n[r]}))}(a);t("f408");var o,u=t("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"eedabd64",null,!1,i["a"],o);e["default"]=l.exports},f408:function(r,e,t){"use strict";var i=t("b07b"),n=t.n(i);n.a}}]);