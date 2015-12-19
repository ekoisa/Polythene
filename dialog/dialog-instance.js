"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneDialogDialog=require("polythene/dialog/dialog");var _polytheneDialogDialog2=_interopRequireDefault(_polytheneDialogDialog);var _polytheneCommonTransition=require("polythene/common/transition");var _polytheneCommonTransition2=_interopRequireDefault(_polytheneCommonTransition);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("polythene-theme/dialog/dialog");var SCROLL_WATCH_TIMER=150;var SHOW_CLASS="visible";var d=document.documentElement.style;var alignSelfSupported="alignSelf"in d||"WebkitAlignSelf"in d;var updateScrollState=function updateScrollState(ctrl){var scroller=ctrl.scrollEl;if(!scroller){return}ctrl.topOverflow=scroller.scrollTop>0;ctrl.bottomOverflow=scroller.scrollHeight-(scroller.scrollTop+scroller.getBoundingClientRect().height)>0};var updateFooterState=function updateFooterState(ctrl){var footerEl=ctrl.footerEl;if(footerEl){var style=window.getComputedStyle(footerEl);var height=footerEl.getBoundingClientRect().height;var minHeight=parseInt(style.minHeight,10);if(height>minHeight){footerEl.classList.add("high")}else{footerEl.classList.remove("high")}}};var show=function show(ctrl,opts){var id=ctrl.instanceId;ctrl.isTransitioning=true;return _polytheneCommonTransition2["default"].show(Object.assign({},opts,{el:ctrl.el,showClass:SHOW_CLASS})).then(function(){ctrl.isTransitioning=false;ctrl.visible=true;if(opts.didShow){opts.didShow.call(id)}})};var hide=function hide(ctrl,opts){var id=ctrl.instanceId;ctrl.isTransitioning=true;return _polytheneCommonTransition2["default"].hide(Object.assign({},opts,{el:ctrl.el,showClass:SHOW_CLASS})).then(function(){_polytheneDialogDialog2["default"].remove(id);ctrl.isTransitioning=false;ctrl.visible=false;if(opts.didHide){opts.didHide.call(id)}_mithril2["default"].redraw()})};var createViewContent=function createViewContent(ctrl,opts){var style={};if(ctrl.el&&!alignSelfSupported){var styles=window.getComputedStyle(ctrl.el);var partsHeights=(ctrl.headerHeight||0)+(ctrl.footerHeight||0);var dialogPadding=parseFloat(styles.paddingTop)+parseFloat(styles.paddingBottom);style={"max-height":"calc(100vh - "+dialogPadding+"px - "+partsHeights+"px)"}}var bodyOpts=opts.body||opts.menu;return(0,_mithril2["default"])("div",{"class":"dialog-body self-stretch",style:style,config:function config(el,inited){if(inited){return}ctrl.scrollEl=el},onscroll:function onscroll(){ctrl.isScrolling=true;updateScrollState(ctrl);clearTimeout(ctrl.scrollWatchId);ctrl.scrollWatchId=setTimeout(function(){ctrl.isScrolling=false},SCROLL_WATCH_TIMER)}},bodyOpts)};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var bodyOpts=opts.body||opts.menu;var updateContentOnScroll=opts.updateContentOnScroll||false;var ignoreContent=!updateContentOnScroll&&ctrl.isScrolling;var tag=opts.tag||"form";var props=Object.assign({},{"class":["dialog layout center-center",opts.fullscreen?"fullscreen":null,opts.backdrop?"hasBackdrop":null,ctrl.topOverflow?"topOverflow":null,ctrl.bottomOverflow?"bottomOverflow":null,ctrl.visible?SHOW_CLASS:null,opts["class"]].join(" "),id:opts.id||"",config:function config(el,inited,context,vdom){if(inited){return}if(opts.config){opts.config(el,inited,context,vdom)}ctrl.el=el;var cleanup=function cleanup(){_polythenePolythenePolythene2["default"].removeListener("resize",update);_polythenePolythenePolythene2["default"].removeListener("keydown",handleEscape)};var update=function update(){updateScrollState(ctrl);updateFooterState(ctrl);_mithril2["default"].redraw()};var handleEscape=function handleEscape(e){if(opts.fullscreen||opts.backdrop)return;if(e.which===27){cleanup();hide(ctrl,Object.assign({},opts,{hideDelay:0}))}};_polythenePolythenePolythene2["default"].addListener("resize",update);_polythenePolythenePolythene2["default"].addListener("keydown",handleEscape);context.onunload=function(){cleanup()};updateScrollState(ctrl);updateFooterState(ctrl);show(ctrl,opts).then(function(){updateScrollState(ctrl);updateFooterState(ctrl);if(ctrl.topOverflow||ctrl.bottomOverflow){setTimeout(function(){return _mithril2["default"].redraw()},0)}})},onclick:function onclick(e){e.stopPropagation();if(e.target!==ctrl.el){return}if(opts.modal){return}if(!ctrl.isTransitioning){hide(ctrl,Object.assign({},opts,{hideDelay:0}))}}},opts.formOptions?opts.formOptions:null);var body=bodyOpts?ignoreContent?{subtree:"retain"}:createViewContent(ctrl,opts):null;var content=(0,_mithril2["default"])("div",{"class":["dialog-content","layout","vertical",opts.menu?"menu-content":null].join(" ")},[opts.fullscreen?null:_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:ctrl.z,animated:true}),opts.fullscreen?null:opts.title?(0,_mithril2["default"])(".dialog-header",{config:function config(el){ctrl.headerHeight=el.scrollHeight}},[(0,_mithril2["default"])(".title",opts.title)]):null,body,opts.fullscreen?null:opts.footer?(0,_mithril2["default"])(".dialog-footer",{config:function config(el,inited){ctrl.footerHeight=el.scrollHeight;if(inited){return}ctrl.footerEl=el}},[(0,_mithril2["default"])(".flex"),(0,_mithril2["default"])(".actions.layout.horizontal.end-justified.wrap",opts.footer)]):null]);return(0,_mithril2["default"])(tag,props,_polythenePolythenePolythene2["default"].insertContent(content,opts))};var component={id:"dialog-instance",controller:function controller(){var instanceData=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var opts=instanceData.opts||{};var z=opts.z!==undefined?opts.z:3;return{instanceId:instanceData.instanceId,z:z,scrollEl:null,footerEl:null,topOverflow:false,bottomOverflow:false,scrollWatchId:0,isScrolling:false,headerHeight:0,footerHeight:0,el:null,visible:false,isTransitioning:false}},view:function view(ctrl,instanceData){var opts=typeof instanceData.opts==="function"?instanceData.opts():instanceData.opts;if(instanceData.hide&&!ctrl.isTransitioning){hide(ctrl,opts)}return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];