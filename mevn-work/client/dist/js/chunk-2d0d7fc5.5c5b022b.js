(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc5"],{"78c1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-view"),r("p",[t._v("一、业务模块")]),r("p",[t._v("1. 出借（主干流程已跑通，待完善分支逻辑、校验和样式）")]),r("router-link",{attrs:{to:"/user/login"}},[r("cube-button",[t._v("1.登录: /user/login")])],1),r("router-link",{attrs:{to:"/user/register"}},[r("cube-button",[t._v("2.注册: /user/register")])],1),r("router-link",{attrs:{to:"/account/lmAccount"}},[r("cube-button",[t._v("3.开户: /account/lmAccount")])],1),r("router-link",{attrs:{to:"/account/lmCharge"}},[r("cube-button",[t._v("4.充值: /account/lmCharge")])],1),r("router-link",{attrs:{to:"/project/list"}},[r("cube-button",[t._v("5.首页（项目列表）: /project/list")])],1),r("router-link",{attrs:{to:"/project/detail/PN1909274179"}},[r("cube-button",[t._v("6.1 项目详情: /project/detail/PN1909274179")])],1),r("router-link",{attrs:{to:"/project/desc/PN1909274179"}},[r("cube-button",[t._v("6.2 信息披露: /project/desc/PN1909274179")])],1),r("router-link",{attrs:{to:"/project/report/PN1909274179"}},[r("cube-button",[t._v("7.项目回报: /project/report/PN1909274179")])],1),r("router-link",{attrs:{to:"/project/order/PN1909274179"}},[r("cube-button",[t._v("8.项目订单: /project/order/PN1909274179")])],1),r("router-link",{attrs:{to:"/project/investReturn?result=true"}},[r("cube-button",[t._v("9.投资结果: /project/investReturn?result=true")])],1),r("p",[t._v("2. 还款流程（待开发）")]),r("router-link",{attrs:{to:"/user/mine"}},[r("cube-button",[t._v("1.我的: /user/mine")])],1),r("router-link",{attrs:{to:"/user/Invested"}},[r("cube-button",[t._v("2.已投项目: /user/Invested")])],1),r("router-link",{attrs:{to:"/account/lmWithdraw"}},[r("cube-button",[t._v("3.提现: /account/lmWithdraw")])],1),r("p",[t._v("ps:")]),r("router-link",{attrs:{to:"/user/coupon"}},[r("cube-button",[t._v("优惠券: /user/coupon  ")])],1),r("router-link",{attrs:{to:"/project/introduction"}},[r("cube-button",[t._v("平台介绍: /project/introduction")])],1),r("router-link",{attrs:{to:"/test/UploadIdCard"}},[r("cube-button",[t._v("上传身份证: /test/UploadIdCard")])],1),r("p",[t._v("二、操作:")]),r("cube-button",{on:{click:t.debugOpenAccount}},[t._v("直接开户，跳过身份证上传")]),r("cube-button",{on:{click:t.debugPersonalRegister}},[t._v("中间页回跳开户结果页测试按钮")])],1)},o=[],u=(r("96cf"),r("3b8d")),c=r("d225"),a=r("b0b4"),s=r("308d"),i=r("6bb5"),l=r("4e2b"),b=r("9ab4"),p=r("60a3"),v=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(a["a"])(e,[{key:"debugOpenAccount",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({api:"lmService/personalRegister",params:{token:this.$store.state.token,lmRegister:{realName:"孟琬",idCardNo:"210203197503102721",bankCardNo:"6228480402564890018",mobile:"15222018200"},originReturnUrl:this.$store.state.originNodeServer}});case 2:e=t.sent,"0000"===e.resCode&&(alert(e.returnUrl),this.$request({formSubmitData:{url:e.shUrl,params:e.params}}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"debugPersonalRegister",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$request({url:"http://localhost:5000/lmService/personalRegisterReturn",params:{code:"0",status:"SUCCESS"}});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),e}(p["d"]);v=Object(b["a"])([Object(p["a"])({components:{}})],v);var d=v,k=d,m=r("2877"),h=Object(m["a"])(k,n,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0d7fc5.5c5b022b.js.map