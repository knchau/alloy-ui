YUI.add("aui-overlay-mask-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isString,s=n.isNumber,o=n.isValue,u=e.config,a=e.UA,f=a.ie<=6,l="absolute",c="alignPoints",h="background",p="boundingBox",d="contentBox",v="fixed",m="height",g="offsetHeight",y="offsetWidth",b="opacity",w="overlaymask",E="position",S="target",x="width",T=e.Component.create({NAME:w,ATTRS:{alignPoints:{value:["tl","tl"],validator:r},background:{lazyAdd:!1,value:null,validator:i,setter:function(e){return e&&this.get(d).setStyle(h,e),e}},target:{cloneDefaultValue:!1,lazyAdd:!1,value:u.doc,setter:function(t){var n=this,r=e.one(t),i=n._isDoc=r.compareTo(u.doc),s=n._isWin=r.compareTo(u.win);return n._fullPage=i||s,r}},opacity:{value:.5,validator:s,setter:function(e){return this._setOpacity(e)}},shim:{value:e.UA.ie},visible:{value:!1},zIndex:{value:1e3}},EXTENDS:e.OverlayBase,prototype:{bindUI:function(){var t=this;T.superclass.bindUI.apply(this,arguments),t._eventHandles=[t.after("targetChange",t._afterTargetChange),t.after("visibleChange",t._afterVisibleChange),e.on("windowresize",e.bind(t.refreshMask,t))]},syncUI:function(){var e=this;e.refreshMask()},destructor:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},getTargetSize:function(){var t=this,n=t.get(S),r=t._isDoc,i=t._isWin,s=n.get(g),o=n.get(y);return f?i?(o=e.DOM.winWidth(),s=e.DOM.winHeight()):r&&(o=e.DOM.docWidth(),s=e.DOM.docHeight()):t._fullPage&&(s="100%",o="100%"),{height:s,width:o}},refreshMask:function(){var e=this,t=e.get(c),n=e.get(S),r=e.get(p),i=e.getTargetSize(),s=e._fullPage;r.setStyles({position:f||!s?l:v,left:0,top:0});var u=i.height,a=i.width;o(u)&&e.set(m,u),o(a)&&e.set(x,a),s||e.align(n,t)},_setOpacity:function(e){var t=this;return t.get(d).setStyle(b,e),e},_uiSetVisible:function(e){var t=this;T.superclass._uiSetVisible.apply(this,arguments),e&&t._setOpacity(t.get(b))},_afterTargetChange:function(e){var t=this;t.refreshMask()},_afterVisibleChange:function(e){var t=this;t._uiSetVisible(e.newVal)},_uiSetXY:function(){var e=this;(!e._fullPage||f)&&T.superclass._uiSetXY.apply(e,arguments)}}});e.OverlayMask=T},"3.1.0-deprecated.54",{requires:["event-resize","aui-base-deprecated","aui-overlay-base-deprecated"],skinnable:!0});
