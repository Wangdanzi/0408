webpackJsonp(["application"],{"0RoY":function(e,t,a){var n=a("FqSk");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("0ad5913d",n,!0)},FqSk:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".list-style[data-v-5809a54f]{height:calc(100vh - 120px);overflow-y:auto}.w-modal__body .row-style .w-row[data-v-5809a54f]{margin-bottom:16px}.search-style .w-input.is-expansion[data-v-5809a54f],.search-style .w-input[data-v-5809a54f]{width:260px!important}",""])},"Gm+R":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("//Fk"),i=n(o),r=a("mvHQ"),s=n(r),l=a("g/04"),c=n(l),u=a("cCA+"),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(u),d=a("UeB+"),p=n(d),m=a("7+uW"),h=n(m),g=a("NYxO"),v=n(g),w=a("mtWM");h.default.use(v.default);var b=function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},T=void 0,_=!0;w.interceptors.request.use(function(e){if("options"==e.method)return e;if(e.useOptions&&1==e.useOptions.ForSmartClient)return e;e.headers.Authorization=authToken||jwt;var t=[],a=b("menuid");t.push(a);var n=window.rootVue.$route,o="";return n&&n.params&&n.params.menuid&&(o=n.params.menuid,t.push(o)),e.headers.menuid=t.join(","),T||(T=p.default.getClientInfo()),e.headers.ClientInfo=encodeURIComponent((0,s.default)(T)),e},function(e){return i.default.reject(e)}),w.interceptors.response.use(function(e){return e.status>=200&&e.status<=300?e:i.default.reject(e)},function(e){return i.default.reject(e)});var x=function(e,t){var a="";if(e&&e.response)switch(e.response.status){case 400:a="请求错误";break;case 401:a="未授权，请登录";break;case 403:a="拒绝访问";break;case 404:a="请求地址出错: "+e.response.config.url;break;case 408:a="请求超时";break;case 500:a="服务器内部错误";break;case 501:a="服务未实现";break;case 502:a="网关错误";break;case 503:a="服务不可用";break;case 504:e.message="网关超时";break;case 505:a="HTTP版本不受支持"}e.message.indexOf("timeout of")>=0?a="请求服务已超时":"Network Error"==e.message&&(a="网络服务异常，请检查网路服务是否正常。"),t.isOnline||f.showMessage("请求服务异常，"+e.message+"："+a,f.messageType.ERROR)},k=function(e,t){var a="";if(e&&e.response)switch(e.response.status){case 400:a="请求错误";break;case 401:a="未授权，请登录";break;case 403:a="拒绝访问";break;case 404:a="请求地址出错: "+e.response.config.url;break;case 408:a="请求超时";break;case 500:a="服务器内部错误";break;case 501:a="服务未实现";break;case 502:a="网关错误";break;case 503:a="服务不可用";break;case 504:e.message="网关超时";break;case 505:a="HTTP版本不受支持"}e.message.indexOf("timeout of")>=0?a="请求服务已超时":e.message,t=t||"",f.showMessage("请求"+t+"服务错误,请检查TechSvr是否启动："+e.message+">>"+a,f.messageType.ERROR)},I={post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a&&f.loadMask("正在请求服务..."),"string"==typeof e&&(e={url:e});var n=e.url,o=(e.desc,e.responseType||"json");return new i.default(function(e,i){w({url:n,method:"post",data:t,responseType:o,transformRequest:[function(e){var t=new FormData;if(e.constructor==FormData)return e;for(var a in e)e[a]instanceof Object?e[a].constructor==File?t.append(a,e[a]):t.append(a,(0,s.default)(e[a])):t.append(a,e[a]);return t}]}).then(function(t){var a=t.data;if(a.type==c.default.SUCCESS)e(t.data);else if(a.type==c.default.ERROR&&"SYS_ERR"==a.failtCode)f.showMessage(a.message,f.messageType.ERROR,{detailOption:a}),i(t.data);else{if("blob"===o)return void e(t);e(t.data)}I.toLogin(a)}).catch(function(e){x(e,t),i(e)}).finally(function(){a&&f.closeLoadMask()})})},postJsonRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a&&f.loadMask("正在请求服务..."),"string"==typeof e&&(e={url:e});var n=e.url;e.desc;return new i.default(function(e,o){w({url:n,method:"post",headers:{"Content-Type":"application/json;charSet=UTF-8"},data:t}).then(function(t){var a=t.data;a.type==c.default.SUCCESS?e(t.data):a.type==c.default.ERROR&&"SYS_ERR"==a.failtCode?f.showMessage(a.message,f.messageType.ERROR,{detailOption:a}):e(t.data),I.toLogin(a)}).catch(function(e){x(e,t),o(e)}).finally(function(){a&&f.closeLoadMask()})})},postForSmartClient:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&(e={url:e});var a=e.url,n=e.desc||"";return new i.default(function(e,o){w({url:a,method:"post",data:t,useOptions:{ForSmartClient:!0}}).then(function(t){var a=t.data;if(a.type==c.default.SUCCESS)e(t.data);else{if(a.type==c.default.ERROR)return f.showMessage("请求【"+n+"】错误："+a.message,f.messageType.ERROR),void o();e(t.data)}}).catch(function(e){k(e,"【智能客户端TechSvr】"),o(e)})})},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&(e={url:e});var a=e.url;e.desc;return new i.default(function(e,n){w({url:a,method:"get",params:t,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json;charset=UTF-8"}}).then(function(t){e(t.data),I.toLogin(t.data)}).catch(function(e){x(e,t),n(e)})})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"string"==typeof e&&(e={url:e});var n=e.url+a;e.desc;return new i.default(function(e,a){w({url:n,method:"put",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){e(t.data),I.toLogin(t.data)}).catch(function(e){x(e,t),a(e)})})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";"string"==typeof e&&(e={url:e});var a=e.url+t;e.desc;return new i.default(function(e,t){w({url:a,method:"delete",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){e(t.data),I.toLogin(t.data)}).catch(function(e){x(e,params),t(e)})})},options:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];"string"==typeof e&&(e={url:e});var t=e.url;e.desc;return new i.default(function(e,a){w({url:t,method:"options"}).then(function(t){e(t)}).catch(function(e){a(e)})})},GetUrlQueryParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return a?unescape(a[2]):""},fileUtils:{uploadFile:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2],n=arguments[3];n&&f.loadMask("正在请求服务..."),"string"==typeof e&&(e={url:e});var o=e.url;e.desc;return new i.default(function(e,i){w({url:o,method:"post",data:t,onUploadProgress:function(e){e.lengthComputable&&a(e)}}).then(function(t){var a=t.data;e(a.type==c.default.SUCCESS?t.data:a.type==c.default.ERROR?t.data:t.data),I.toLogin(a)}).catch(function(e){x(e,t),i(e)}).finally(function(){n&&f.closeLoadMask()})})}},toLogin:function(e){if("4040"==e.messageCode||"4041"==e.messageCode){if(!_)return!1;_=!1,f.alertMessage(e.message,"提示","warning",{showClose:!1}).then(function(){top.window.location.reload(),_=!0})}}};t.default=I},Na3i:function(e,t,a){var n=a("sIcN");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("1074dd0c",n,!0)},bfNc:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:" pd_16"},[a("w-row",{staticClass:"home-page-body"},[a("w-col",{attrs:{span:8}},[a("title-style",{staticClass:" mg-right_16 pd-bottom_22 po_re"},[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("申请单列表")]),e._v(" "),a("w-button",{staticClass:"po_ab top_-4 right_0",attrs:{type:"text"},on:{click:function(t){e.handleAdd("left")}}},[a("span",{staticClass:"fnot"},[e._v("+ 新增")])])],1),e._v(" "),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],ref:"box",staticClass:"mg-right_16 list-style"},e._l(e.leftData,function(t,n){return a("li",{key:n,staticClass:"application",class:{clickBg:n==e.clickIndex,hoverBg:n==e.hoverIndex},on:{mouseover:function(t){e.hoverIndex=n},mouseout:function(t){e.hoverIndex=-1},click:function(a){e.handleLeftRow(t,n)}}},[a("div",{staticClass:"po_re"},[a("div",{staticClass:"inline-block mg-bottom_8",staticStyle:{"font-size":"14px","font-weight":"600"}},[e._v(e._s(t.TEMPLATE_NAME))]),e._v(" "),e.hoverIndex===n||e.clickIndex===n?a("div",{staticClass:"inline-block po_ab top_-5 right_0"},[a("w-button",{attrs:{type:"text"},on:{click:function(a){e.handleRowL(t,n,"copy")}}},[e._v("复制")]),e._v(" "),a("w-button",{attrs:{type:"text"},on:{click:function(a){e.handleRowL(t,n,"edit")}}},[e._v("修改")]),e._v(" "),a("w-button",{attrs:{type:"text"},on:{click:function(a){e.handleRowL(t,n,"delete")}}},[e._v("删除")])],1):e._e()]),e._v(" "),a("p",{staticClass:"po_re",staticStyle:{"font-size":"12px"}},[a("span",{staticClass:"inline-block po_ab top_0"},[e._v("元素：")]),e._v(" "),a("span",{staticClass:" inline-block mg-left_40 mg-bottom_5"},[a("span",[e._v("临床信息、")]),e._v(" "),a("span",[e._v("标本信息、")]),e._v(" "),a("span",[e._v("医嘱信息、")]),e._v(" "),a("span",[e._v("既往病理检查结果")])]),e._v(" "),a("span",{staticClass:" inline-block mg-left_40"},[a("span",[e._v(e._s(1===t.IS_SHOW_GYNECOLOGICAL?"妇科信息、":""))]),e._v(" "),a("span",[e._v(e._s(1===t.IS_SHOW_OPERATION?"手术信息、":""))]),e._v(" "),a("span",[e._v(e._s(1===t.IS_SHOW_TUMOUR?"肿瘤信息、":""))]),e._v(" "),a("span",[e._v(e._s(1===t.IS_SHOW_HPV?"细胞学活HPV检查结果、":""))])])])])}))],1),e._v(" "),a("w-col",{attrs:{span:16}},[a("title-style",{staticClass:"pd-bottom_22 po_re"},[a("span",{attrs:{slot:"header"},slot:"header"},[e._v("申请单项目列表")]),e._v(" "),a("w-button",{staticClass:"po_ab top_-4 right_0",attrs:{type:"text",plain:""},on:{click:function(t){e.handleAdd("rigth")}}},[a("span",[e._v("+")]),e._v(" 新增")])],1),e._v(" "),a("win-table",{staticStyle:{height:"calc(100vh - 150px)","overflow-y":"auto"},attrs:{listTable:e.tableTitle,tableData:e.rigthData,isShow:e.isShow},on:{handleEdit:e.handleEdit,handleRow:e.handleRowR,handleDelete:e.handleDelete}}),e._v(" "),e.paginationBoxReflow?a("div",[a("w-pagination",{staticClass:"fr pd-top_16",attrs:{total:e.total,"current-page":e.QUERY_PAGE.pageIndex,"page-size":e.QUERY_PAGE.pageSize,show:["prev","next","total"]},on:{"current-change":e.handleCurrentChange,"actived-change":e.currentChange}})],1):e._e()],1)],1),e._v(" "),a("w-modal",{attrs:{"close-on-click-modal":!1,showClose:!1,title:e.h+e.modalTitle,visible:e.visible,width:"50%"},on:{"update:visible":function(t){e.visible=t}},nativeOn:{submit:function(e){e.preventDefault()}}},[a("w-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-align":"right","label-width":"100px"}},[e.modalTitle===e.MODAL_TITLE.FORM?a("w-row",[a("w-row",{staticClass:"mg-bottom_18"},[a("w-col",{attrs:{span:24}},[a("w-form-item",{attrs:{label:"申请单名称",prop:"templateName"}},[a("w-input",{attrs:{placeholder:"请输入申请单名称",showCounter:""},on:{focus:function(t){e.handleFocus("pafTemplate")}},model:{value:e.form.templateName,callback:function(t){e.$set(e.form,"templateName",t)},expression:"form.templateName"}})],1)],1)],1),e._v(" "),a("w-row",{staticClass:"mg-bottom_5"},[a("w-col",{attrs:{span:24}},[a("w-form-item",{attrs:{label:"包含元素",prop:"name"}},[[a("w-checkbox-group",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.checkboxList,function(t,n){return a("w-checkbox",{key:n,attrs:{label:t.label,disabled:t.disabled},on:{change:function(a){e.handleChangeCheckbox(t,n)}}},[e._v(e._s(t.name))])}))]],2)],1)],1),e._v(" "),a("w-row",[a("w-col",[a("w-form-item",{attrs:{label:"申请单模版",prop:"printTemplate"}},[[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{limit:1,action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"file-list":e.fileList,"auto-upload":!1}},[a("w-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1)]],2)],1)],1)],1):e.modalTitle===e.MODAL_TITLE.ITEM?a("w-row",{staticClass:"row-style"},[a("w-row",[a("w-col",{attrs:{span:12}},[a("w-form-item",{attrs:{label:"项目编码",prop:"item.itemCode"}},[a("w-input",{attrs:{placeholder:"请输入项目编码",showCounter:""},on:{focus:function(t){e.handleFocus("itemCode")}},model:{value:e.form.item.itemCode,callback:function(t){e.$set(e.form.item,"itemCode",t)},expression:"form.item.itemCode"}})],1)],1),e._v(" "),a("w-col",{attrs:{span:12}},[a("w-form-item",{attrs:{label:"项目名称",prop:"item.itemName"}},[a("w-input",{attrs:{placeholder:"请输入项目名称"},on:{focus:function(t){e.handleFocus("itemName")}},model:{value:e.form.item.itemName,callback:function(t){e.$set(e.form.item,"itemName",t)},expression:"form.item.itemName"}})],1)],1)],1),e._v(" "),a("w-row",[a("w-col",{attrs:{span:12}},[a("w-form-item",{attrs:{label:"项目价格",prop:"item.itemPrice"}},[a("w-input",{attrs:{placeholder:"请输入项目价格",showCounter:"",readonly:!0},model:{value:e.form.item.itemPrice,callback:function(t){e.$set(e.form.item,"itemPrice",e._n(t))},expression:"form.item.itemPrice"}})],1)],1)],1),e._v(" "),a("w-row",[a("w-col",[a("w-form-item",{attrs:{label:"收费项目",prop:"value2",rules:[{required:!0,type:"array",message:"请选择收费项目",trigger:"change"}]}},[a("w-input",{attrs:{readonly:"",sufAppendIsButton:"",placeholder:"请输入关键字搜索收费项目"},on:{focus:e.handleIputVal},model:{value:e.form.value2,callback:function(t){e.$set(e.form,"value2",t)},expression:"form.value2"}})],1)],1)],1),e._v(" "),a("w-row",[a("w-col",{attrs:{span:24}},[a("w-form-item",{attrs:{label:"描述",prop:"itemExplain"}},[a("w-input",{attrs:{type:"textarea",placeholder:"请输入描述内容",showCounter:""},model:{value:e.form.item.itemExplain,callback:function(t){e.$set(e.form.item,"itemExplain",t)},expression:"form.item.itemExplain"}})],1)],1)],1)],1):e._e(),e._v(" "),a("w-modal",{staticClass:"modal-style",attrs:{width:"50%","close-on-click-modal":!1,title:e.MODAL_TITLE.SELECT_ITEM,visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("div",{staticClass:"search-style clearfix"},[a("w-input",{staticClass:"mg-bottom_16",attrs:{placeholder:"请输入关键字进行搜索",sufAppendIsButton:""},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleSearch(e.search)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("template",{slot:"suf-append"},[a("i",{staticClass:"w-icon-search",on:{click:function(t){e.handleSearch(e.search)}}})])],2),e._v(" "),a("w-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"costList",staticStyle:{width:"100%"},attrs:{data:e.costList,"lower-threshold":10,"win-loading-text":"正在获取数据...",height:"300",stripe:"","empty-text":e.tableconten},on:{scrollToLower:e.scrollToLower,"selection-change":e.handleSelectionChange}},[a("w-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),e._v(" "),a("w-table-column",{attrs:{prop:"CHARGE_CODE",width:"120px",label:"收费编码"}}),e._v(" "),a("w-table-column",{attrs:{prop:"CHARGE_NAME",label:"收费项目"}}),e._v(" "),a("w-table-column",{attrs:{prop:"CHARGE_PRICE",width:"150px",align:"right",label:"项目价格（元）"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("w-button",{on:{click:function(t){e.reset("inner")}}},[e._v("取消")]),e._v(" "),a("w-button",{attrs:{disabled:e.isDisabled,type:"primary"},on:{click:function(t){e.submit("inner")}}},[e._v("确定")])],1)])],1),e._v(" "),a("span",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("w-button",{on:{click:function(t){e.reset("out")}}},[e._v("取消")]),e._v(" "),a("w-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("out")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]}},bmlp:function(e,t,a){var n=a("r+i9");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("4f389f8c",n,!0)},cbZV:function(e,t,a){var n=a("m69c");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("c57b614a",n,!0)},"g/04":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ERROR:"ERROR",FAILT:"FAILT",NORMAL:"NORMAL",SUCCESS:"SUCCESS"};t.default=n},m69c:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},qIkY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Gm+R"),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=a("mYGX"),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(i),s=(r.SYS_BASE_API.APPLYFORM.url,"http://172.17.1.211:20034"),l={isHaveReName:s+"/clf/pafbase/isHaveReName",query:s+"/clf/pafbase/findChargeItems",addUpdateItem:s+"/clf/pafbase/addOrUpdateItem",findItemInfo:s+"/clf/pafbase/findItemInfo",deleteTempItem:s+"/clf/pafbase/deleteTempItem",findPafTemplate:s+"/clf/pafbase/findPafTemplate",pafTemplate:s+"/clf/pafbase/getPafTemplateDetails",pafTemplateitems:s+"/clf/pafbase/getPafTemplateitems",copy:s+"/clf/pafbase/copyTemplate",deletePafTemplate:s+"/clf/pafbase/deletePafTemplate",addUpdateTemplate:s+"/clf/pafbase/addOrUpdatePafTemplate"};t.default={getIsHaveReName:function(e){return o.default.postJsonRequest(l.isHaveReName,e)},getFindPafTemplate:function(e){return o.default.postJsonRequest(l.findPafTemplate,e)},getPafTemplate:function(e){return o.default.postJsonRequest(l.pafTemplate,e)},getQuery:function(e){return o.default.postJsonRequest(l.query,e)},getAddUpdateItem:function(e){return o.default.postJsonRequest(l.addUpdateItem,e)},getAddUpdateTemplate:function(e){return o.default.postJsonRequest(l.addUpdateTemplate,e)},getFindItemInfo:function(e){return o.default.postJsonRequest(l.findItemInfo,e)},getDeleteTempItem:function(e){return o.default.postJsonRequest(l.deleteTempItem,e)},getDeletePafTemplate:function(e){return o.default.postJsonRequest(l.deletePafTemplate,e)},getPafTemplateitems:function(e){return o.default.postJsonRequest(l.pafTemplateitems,e)},getcopy:function(e){return o.default.postJsonRequest(l.copy,e)}}},"r+i9":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".addclass[data-v-5809a54f]{color:red}.w-checkbox+.w-checkbox[data-v-5809a54f]{margin-left:0!important}.w-checkbox[data-v-5809a54f]{margin-right:24px!important;margin-bottom:8px!important}.home-page-body[data-v-5809a54f]{background:#fff;padding:16px}.home-page-body .application[data-v-5809a54f]{margin-bottom:8px;padding:16px;background:#f3f5f9}.home-page-body .application h4[data-v-5809a54f]{margin:0;margin-bottom:10px}.home-page-body .clickBg[data-v-5809a54f],.home-page-body .hoverBg[data-v-5809a54f]{background:#cfe0ff!important}.w-select[data-v-5809a54f]{width:100%}",""])},sIcN:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},stjD:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),i=n(o),r=a("Xxa5"),s=n(r),l=a("exGp"),c=n(l),u=a("HzcN"),f=a("qIkY"),d=n(f),p=a("sakD");t.default={data:function(){var e=this,t=function(){var t=(0,c.default)(s.default.mark(function t(a,n,o){var i,r,l;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return i={type:e.type,name:n},t.next=4,d.default.getIsHaveReName(i);case 4:if(r=t.sent,"SUCCESS"===r.type){t.next=11;break}return l="",l="pafTemplate"===e.type||"itemName"===e.type?"该名称已存在！":"该编码已存在！",t.abrupt("return",o(new Error(l)));case 11:o();case 12:case"end":return t.stop()}},t,e)}));return function(e,a,n){return t.apply(this,arguments)}}();return{modalTitle:"",type:"",fileList:[],height:"200px",isDisabled:!1,MODAL_TITLE:p.MODAL_TITLE,QUERY_PAGE:p.QUERY_PAGE,clickIndex:0,search:"",loading:!1,loading1:!1,innerVisible:!1,paginationBoxReflow:!0,s:0,e:20,scrollToLower:function(){},listData:[],hoverIndex:-1,tableconten:"请输入关键字查询数据",h:"",formTitle:"",value2:[],total:100,value:[1,2,3,4],rowRightList:{},rowLeftList:{},visible:!1,isShow:{index:!0,indexTitle:"序号",width:"120px"},options:[{time:"2019.05.12 11:02:33",status:"其他区签约",name:"赵宇翔",type:"其他"},{time:"2019.05.12 12:24:30",status:"未签约",name:"肖新宇",type:"本地医保"}],tableTitle:[{label:"项目编码",prop:"itemCode",width:"110px"},{label:"项目名称",prop:"itemName"},{label:"项目价格(元)",prop:"itemPrice",width:"130px",align:"right"},{label:"项目说明",prop:"itemExplain"}],form:{value2:[],templateName:"",printTemplate:"",isShowOperation:"0",isShowSpecimen:"1",isShowEndpscopic:"1",isShowGynecological:"0",isShowTumour:"0",isShowHpv:"0",item:{pafTemplateId:"",itemCode:"",itemName:"",itemPrice:"",itemExplain:"",seqNo:"",defaultCheck:"",createdBy:"",createdName:"",id:""},chargeItems:[]},checkboxList:[{label:1,name:"临床信息",disabled:!0},{label:2,name:"标本信息",disabled:!0},{label:3,name:"医嘱信息",disabled:!0},{label:4,name:"既往病理检查结果",disabled:!0},{label:5,name:"妇科信息",disabled:!1},{label:6,name:"手术信息",disabled:!1},{label:7,name:"肿瘤信息",disabled:!1},{label:8,name:"细胞学活HPV检查结果",disabled:!1}],costList:[],selectionVal:[],rules:{"item.itemCode":[{required:!0,validator:t,trigger:"blur"}],"item.itemName":[{required:!0,validator:t,trigger:"blur"}],"item.itemPrice":[{required:!0,message:"项目价格不能为空"}],templateName:[{required:!0,validator:t,trigger:"blur"}]},rigthData:[],rowLi:{},leftData:{IS_SHOW_GYNECOLOGICAL:"1234"},a:[]}},watch:{costList:function(e,t){var a=this;this.$nextTick(function(){a.form.chargeItems.map(function(e){a.costList.find(function(t){e.chargeItemCode===t.CHARGE_CODE&&a.$refs.costList.toggleRowSelection(t,!0)})})})},value:function(e,t){var a=e.find(function(e){return 5===e}),n=e.find(function(e){return 6===e});a?this.checkboxList.map(function(e){6===e.label&&(e.disabled=!0)}):this.checkboxList.map(function(e){6===e.label&&(e.disabled=!1)}),n?this.checkboxList.map(function(e){5===e.label&&(e.disabled=!0)}):this.checkboxList.map(function(e){5===e.label&&(e.disabled=!1)})}},created:function(){this.list()},methods:{handlePreview:function(e){console.log(e)},list:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.default.getFindPafTemplate((0,i.default)({},p.QUERY_PAGE));case 2:if(n=a.sent,t.loading1=!0,t.leftData=n.data,t.loading1=!1,null!==n.data){a.next=8;break}return a.abrupt("return");case 8:t.rowLi=n.data[0],n.data.map(function(e){"1"===e.isShowGynecological&&t.value.push(5),"1"===e.isShowOperation&&t.value.push(6),"1"===e.isShowTumour&&t.value.push(7),"1"===e.isShowHpv&&t.value.push(8)}),null!==n.data&&(void 0===e&&(e=t.rowLi.ID),t.getPafTemplateitems(e));case 11:case"end":return a.stop()}},a,t)}))()},handleFocus:function(e){this.type=e,console.log("tttt",e)},handleLeftRow:function(e,t){var a=this;return(0,c.default)(s.default.mark(function n(){return s.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:console.log("row",e),a.QUERY_PAGE.pageIndex=1,a.QUERY_PAGE.currentPager=1,a.rowLeftList=e,a.clickIndex=t,a.getPafTemplateitems(e.ID);case 6:case"end":return n.stop()}},n,a)}))()},getPafTemplateitems:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("ididiid",e),a.next=3,d.default.getPafTemplateitems((0,i.default)({pafTemplateId:e},p.QUERY_PAGE));case 3:n=a.sent,t.rigthData=n.data.itemList,t.total=n.data.itemSum;case 6:case"end":return a.stop()}},a,t)}))()},getcopy:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.default.getcopy({id:e});case 2:n=a.sent,"SUCCESS"===n.type?(t.showMsg("复制申请单成功","success"),t.list(e),t.clickIndex=t.leftData.length,setTimeout(function(){t.$refs.box.scrollTop=t.$refs.box.scrollHeight,t.hoverIndex=-1},200)):t.showMsg("复制申请单失败","error");case 4:case"end":return a.stop()}},a,t)}))()},handleRowL:function(e,t,a){var n=this;return(0,c.default)(s.default.mark(function o(){return s.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:console.log("tttttt",a),n.modalTitle=p.MODAL_TITLE.FORM,n.h=p.MODAL_TITLE.EADIT,o.t0=a,o.next="edit"===o.t0?6:"delete"===o.t0?10:12;break;case 6:return n.visible=!0,n.h=p.MODAL_TITLE.EADIT,n.getPafTemplate(e.ID),o.abrupt("break",14);case 10:return n.getDeletePafTemplate(e.ID,t),o.abrupt("break",14);case 12:n.h=p.MODAL_TITLE.CLONE,n.getcopy(e.ID);case 14:case"end":return o.stop()}},o,n)}))()},handleRowR:function(e){this.rowRightList=e,console.log(e,"单项目列表的莫一行")},handleEdit:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n,o;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.h=p.MODAL_TITLE.EADIT,t.modalTitle=p.MODAL_TITLE.ITEM,t.visible=!0,a.next=5,d.default.getFindItemInfo({id:e.pafTemplateitemId});case 5:n=a.sent,t.form=n.data,console.log(t.form,"项目修改"),o=[],n.data.chargeItems.map(function(e){o.push(e.chargeItemName)}),t.form.value2=o;case 11:case"end":return a.stop()}},a,t)}))()},handleDelete:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n,o;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.default.getDeleteTempItem({id:e.pafTemplateitemId});case 2:n=a.sent,"SUCCESS"===n.type?t.showMsg("删除申请单项目成功","success"):t.showMsg(n.message,"error"),o="",o=t.rowLeftList.ID?t.rowLeftList.ID:t.leftData[0].ID,t.getPafTemplateitems(o);case 7:case"end":return a.stop()}},a,t)}))()},getPafTemplate:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.default.getPafTemplate({id:e});case 2:if(n=a.sent,console.log(n.data,"获取当前申请单数据"),null!==n.data){a.next=6;break}return a.abrupt("return");case 6:"1"===n.data.isShowOperation&&t.value.push(6),"1"===n.data.isShowGynecological&&t.value.push(5),"1"===n.data.isShowTumour&&t.value.push(7),"1"===n.data.isShowHpv&&t.value.push(8),t.form.templateName=n.data.templateName,t.form.isShowGynecological=n.data.isShowGynecological,t.form.isShowOperation=n.data.isShowOperation,t.form.isShowTumour=n.data.isShowTumour,t.form.isShowHpv=n.data.isShowHpv;case 15:case"end":return a.stop()}},a,t)}))()},getDeletePafTemplate:function(e,t){var a=this;return(0,c.default)(s.default.mark(function n(){return s.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,c.default)(s.default.mark(function n(){var o,i,r;return s.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.leftData.map(function(e,t){e.index=t}),n.next=3,d.default.getDeletePafTemplate({id:e});case 3:o=n.sent,a.showMsg1(o,"删除申请单"),i="",a.leftData[a.leftData.length-1].ID===e?(a.clickIndex=t-1,i=a.leftData[a.leftData.length-2].ID):(r=a.leftData.find(function(e){return e.index===t+1}),r&&(i=r.ID),a.clickIndex=t),a.leftData.splice(t,1),a.getPafTemplateitems(i);case 9:case"end":return n.stop()}},n,a)}))).catch(function(){a.$message({type:"info",message:"已取消删除"})});case 1:case"end":return n.stop()}},n,a)}))()},handleIputVal:function(){var e=this;return(0,c.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.innerVisible=!0,e.tableconten="请输入关键字查询数据";case 2:case"end":return t.stop()}},t,e)}))()},handleSearch:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getCostList(e);case 2:case"end":return a.stop()}},a,t)}))()},getCostList:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.selectionVal=[],a.next=3,d.default.getQuery({CHARGE_SEARCH:e});case 3:if(n=a.sent,null!==n.data){a.next=6;break}return a.abrupt("return");case 6:t.loading=!0,t.costList=n.data.slice(0,20),t.listData=n.data,t.loading=!1,t.tableconten="暂无数据";case 11:case"end":return a.stop()}},a,t)}))()},fetchData:function(){var e=this;this.loading=!0,this.listData.slice(this.s,this.e).map(function(t){setTimeout(function(){e.costList.push(t),e.loading=!1},600)}),this.s=this.s+20,this.e=this.e+20},handleAdd:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.h=p.MODAL_TITLE.ADD,a.t0=e,a.next="left"===a.t0?4:"rigth"===a.t0?6:8;break;case 4:return t.modalTitle=p.MODAL_TITLE.FORM,a.abrupt("break",8);case 6:return t.modalTitle=p.MODAL_TITLE.ITEM,a.abrupt("break",8);case 8:t.visible=!0,t.$nextTick(function(){t.$refs.form.resetFields()});case 10:case"end":return a.stop()}},a,t)}))()},handleSelectionChange:function(e){console.log("rows",e),this.selectionVal=e},submit:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){var n,o,r,l,u;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("out"!==e){for(t.innerVisible=!1,t.visible=!0,t.modalTitle=p.MODAL_TITLE.ITEM,n=[],t.costList=[],t.form.value2=[],t.form.chargeItems=[],t.form.item.itemPrice="",t.selectionVal.map(function(e){e&&(t.form.chargeItems.push({chargeItemCode:e.CHARGE_CODE,chargeItemName:e.CHARGE_NAME,chargeItemPrice:e.CHARGE_PRICE,chargeItemType:e.CHARGE_TYPE}),t.form.value2.push(e.CHARGE_NAME),n.push(e.CHARGE_PRICE))}),o=n.map(Number),r=0,l=0,u=o.length;l<u;l++)r+=o[l];t.form.item.itemPrice=r,t.search="",t.$refs.costList.clearSelection()}else t.$refs.form.validateForm(function(){var e=(0,c.default)(s.default.mark(function e(a){var n,o,r,l,c,u,f;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=51;break}if(t.modalTitle!==p.MODAL_TITLE.FORM){e.next=28;break}return t.form=(0,i.default)({},t.form),n={templateName:t.form.templateName,printTemplate:t.form.printTemplate,isShowOperation:t.form.isShowOperation,isShowGynecological:t.form.isShowGynecological,isShowTumour:t.form.isShowTumour,isShowSpecimen:"1",isShowEndpscopic:"1",isShowHpv:t.form.isShowHpv},e.next=6,d.default.getAddUpdateTemplate((0,i.default)({},n,{id:"edit"===t.formTitle?t.rowLeftList.ID:""}));case 6:if(o=e.sent,"SUCCESS"!==o.type){e.next=25;break}if(t.showMsg("edit"===t.formTitle?"修改申请单成功":"新增申请单成功","success"),"edit"!==t.formTitle){e.next=14;break}t.list(t.rowLeftList.ID),t.formTitle="",e.next=21;break;case 14:return e.next=16,d.default.getFindPafTemplate((0,i.default)({},p.QUERY_PAGE));case 16:r=e.sent,t.leftData=r.data,t.clickIndex=t.leftData.length-1,setTimeout(function(){t.$refs.box.scrollTop=t.$refs.box.scrollHeight,t.hoverIndex=-1},200),t.rigthData=[];case 21:t.visible=!1,t.init(),e.next=26;break;case 25:t.showMsg("edit"===t.formTitle?"修改申请单失败":"新增申请单失败","error");case 26:e.next=49;break;case 28:if(t.modalTitle!==p.MODAL_TITLE.ITEM){e.next=48;break}return l="",c="",t.form.chargeItemName=[],"修改"!==t.h?(l=0===t.clickIndex?t.leftData[0].ID:t.clickIndex===t.leftData.length-1?t.leftData[t.leftData.length-1]:t.rowLeftList.ID,c=t.rigthData.length+1,delete t.form.item.id):l=0===t.clickIndex?t.leftData[0].ID:t.clickIndex===t.leftData.length-1?t.leftData[t.leftData.length-1]:t.rowLeftList.ID,delete t.form.templateName,delete t.form.printTemplate,delete t.form.isShowOperation,delete t.form.isShowGynecological,delete t.form.isShowTumour,delete t.form.isShowHpv,delete t.form.value2,t.form.item.pafTemplateId=l,t.form.item.seqNo=c,e.next=44,d.default.getAddUpdateItem((0,i.default)({},t.form));case 44:u=e.sent,"SUCCESS"===u.type?(t.showMsg("修改"===t.h?"修改申请单项目成功":"新增申请单项目成功","success"),f="",f=void 0!==t.rowLeftList.ID?t.clickIndex===t.leftData.length-1?t.leftData[t.leftData.length-1].ID:t.rowLeftList.ID:t.clickIndex===t.leftData.length-1?t.leftData[t.leftData.length-1].ID:t.leftData[0].ID,console.log(t.leftData[t.leftData.length-1],f),t.getPafTemplateitems(f),t.visible=!1,t.$refs.form.resetFields(),t.init()):t.showMsg("修改"===t.h?"修改申请单项目失败":"新增申请单项目失败","error"),e.next=49;break;case 48:t.modalTitle=p.MODAL_TITLE.ITEM;case 49:e.next=52;break;case 51:console.log("invalid form !");case 52:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}},a,t)}))()},init:function(){this.modalTitle===p.MODAL_TITLE.FORM?(this.form.templateName="",this.form.isShowGynecological="0",this.form.isShowOperation="0",this.form.isShowTumour="0",this.form.isShowHpv="0",this.value=[1,2,3,4]):(this.form.item.itemExplain="",this.$refs.form.resetFields(),this.form.item.itemName="",this.form.item.itemPrice="",this.form.chargeItems=[])},reset:function(e){"out"!==e?(this.search="",this.innerVisible=!1,this.visible=!0):(this.visible=!1,this.form.chargeItemName=[],console.log("this.form.chargeItems = []",this.form),this.init())},handleChangeCheckbox:function(e,t){if(console.log("row",e,this.value),!0===this.value.includes(e.label))switch(e.label){case 5:this.form.isShowGynecological="1";break;case 6:this.form.isShowOperation="1";break;case 7:this.form.isShowTumour="1";break;case 8:this.form.isShowHpv="1"}else switch(e.label){case 5:this.form.isShowGynecological="0";break;case 6:this.form.isShowOperation="0";break;case 7:this.form.isShowTumour="0";break;case 8:this.form.isShowHpv="0"}},currentChange:function(e){this.QUERY_PAGE.pageIndex=e,this.getPafTemplateitems(this.rowLi.ID)},handleCurrentChange:function(){var e=this;this.paginationBoxReflow=!1,this.$nextTick(function(){e.paginationBoxReflow=!0})},currentChange1:function(e){this.QUERY_PAGE.pageIndex=e}},mounted:function(){this.scrollToLower=(0,u.debounce)(200,this.fetchData)}}},"wL1+":function(e,t,a){function n(e){a("0RoY"),a("cbZV"),a("bmlp"),a("Na3i")}var o=a("VU/8")(a("stjD"),a("bfNc"),n,"data-v-5809a54f",null);e.exports=o.exports}});