(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3590"],{"0291":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"view"},[i("h3",[e._v("图片资源")]),i("UploadImages")],1)},s=[],l=i("d225"),n=i("308d"),o=i("6bb5"),r=i("4e2b"),c=i("9ab4"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{attrs:{action:e.uploadImgAction,"on-success":e.handleSuccess,"file-list":e.fileList,"on-error":e.handleError,data:e.uploadImgData,"list-type":"picture-card","on-preview":e.handlePictureCardPreview},scopedSlots:e._u([{key:"file",fn:function(t){var a=t.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:a.url,alt:""}}),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(a)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleDownload(a,t)}}},[i("i",{staticClass:"el-icon-download"})]),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(a)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},d=[],p=(i("96cf"),i("3b8d")),h=i("b0b4"),f=i("4ead"),v=i("60a3"),b=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.dialogImageUrl="",e.dialogVisible=!1,e.uploadImgAction="".concat(e.$store.state.domainNodeServer,"/api/oss"),e.uploadImgData={project:"common"},e.fileList=[],e.disabled=!1,e}return Object(r["a"])(t,e),Object(h["a"])(t,[{key:"created",value:function(){this.requestApi()}},{key:"handleSuccess",value:function(e,t,i){var a=e;this.$message({message:"成功",type:"success"}),a.uid=t.uid,this.fileList.push(a)}},{key:"handleDownload",value:function(e,t){var i=e.response;i?Object(f["a"])(i.url,t):Object(f["a"])(e.url,t)}},{key:"handleError",value:function(e,t,i){console.log("error response",e)}},{key:"handleRemove",value:function(e,t){console.log("file",e),this.fileList=this.fileList.filter((function(t){return console.log(e.uid,t.uid),e.uid!==t.uid})),this.requestApi({id:e._id,method:"delete",data:{name:e.name}})}},{key:"handlePictureCardPreview",value:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}},{key:"requestApi",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,i,a,s,l,n,o,r,c,u,d,p=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},i=t.data,a=void 0===i?{}:i,s=t.method,l=void 0===s?"get":s,n=t.index,void 0===n?0:n,o=a._id||t.id||"",r=o?"/"+o:"",e.next=6,this.$request({direct:"api/oss"+r,data:a,method:l});case 6:c=e.sent,"post"===l?(u=this.fileList.length-1,d=this.fileList[u],d["_id"]=c._id,this.fileList[u]=d):"get"==l&&(this.fileList=c);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(v["d"]);b=Object(c["a"])([Object(v["a"])({components:{}})],b);var m=b,g=m,_=i("2877"),j=Object(_["a"])(g,u,d,!1,null,null,null),w=j.exports,O=function(e){function t(){return Object(l["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(r["a"])(t,e),t}(v["d"]);O=Object(c["a"])([Object(v["a"])({components:{UploadImages:w}})],O);var k=O,y=k,C=Object(_["a"])(y,a,s,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0a3590.465784e7.js.map