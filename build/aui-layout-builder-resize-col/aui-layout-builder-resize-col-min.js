YUI.add("aui-layout-builder-resize-col",function(e,t){var n="addColumn",r=[0,1,2,3,4,5,6,7,8,9,10,11,12],i=e.getClassName("layout","builder","resize","col","breakpoint"),s=e.getClassName("layout","builder","resize","col","breakpoint","line"),o=e.getClassName("layout","builder","resize","col","breakpoint","over"),u=e.getClassName("layout","builder","resize","col","draggable"),a=e.getClassName("layout","builder","resize","col","draggable","border"),f=e.getClassName("layout","builder","resize","col","draggable","dragging"),l=e.getClassName("layout","builder","resize","col","draggable","handle"),c=e.getClassName("layout","builder","resize","col","draggable","visible"),h=e.getClassName("layout","builder","resize","col","dragging"),p=e.getClassName("layout","builder","resize","col","enabled"),d=12,v=".col",m=".layout-row";e.LayoutBuilderResizeCol=function(){},e.LayoutBuilderResizeCol.prototype={TPL_RESIZE_COL_BREAKPOINT:'<div class="'+i+'">'+'<div class="'+s+'"></div></div>',TPL_RESIZE_COL_DRAGGABLE:'<div class="'+u+'">'+'<div class="'+a+'"></div>'+'<div class="'+l+'">'+'<span class="glyphicon glyphicon-chevron-left"></span>'+'<span class="glyphicon glyphicon-chevron-right"></span></div></div>',_dragNode:null,_gridlineNodes:[],initializer:function(){this._createDelegateDrag(),this._gridlineNodes=[],this._eventHandles.push(this.after("enableResizeColsChange",this._afterEnableResizeColsChange),this.after("layout:isColumnModeChange",e.bind(this._afterResizeColIsColumnModeChange,this))),this._uiSetEnableResizeCols(this.get("enableResizeCols"))},destructor:function(){this._unbindResizeColEvents(),this._removeGrid()},_afterDragAlign:function(t){var n=this,r=t.target.get("node"),s=r.ancestor(m),o=s.all("."+i);e.each(o,function(e){var r=e.get("region");r.left-=30,r.right+=30,t.pageX>r.left&&t.pageX<r.right&&n._afterDragEnter(e)})},_afterDragEnd:function(){var t=this._delegateDrag.get("lastNode"),n=t.ancestor(m);n&&(t.getData("layout-action")&&t.getData("layout-action")==="addColumn"?this._insertColumnAfterDropHandles(t):(this._resize(t),this.get("layout").normalizeColsHeight(new e.NodeList(n))),n.removeClass(h),this._hideBreakpoints(n)),this._syncDragHandles(),this.dragging=!1,t.removeClass(f),t.show()},_afterDragEnter:function(e){this._layoutContainer.all("."+o).removeClass(o),e.addClass(o),this._lastDropEnter=e},_afterDragMouseDown:function(e){var t,n;if(e.ev.button>1||!e.target.validClick(e.ev))return;t=e.target.get("node"),n=t.ancestor(m),t.addClass(f),this._showBreakpoints(n,t)},_afterDragMouseup:function(e){var t=e.target.get("node"),n=t.ancestor(m);n&&this._hideBreakpoints(n),t.removeClass(f)},_afterDragStart:function(e){var t=e.target.get("node");this.dragging=!0,t.hide(),t.ancestor(m).addClass(h),this._hideColDraggableBoundaries()},_afterEnableResizeColsChange:function(){this._uiSetEnableResizeCols(this.get("enableResizeCols"))},_afterResizeColIsColumnModeChange:function(){this._uiSetEnableResizeCols(this.get("enableResizeCols"))},_afterResizeColLayoutChange:function(){this._syncDragHandles(),this._insertGrid()},_afterResizeColLayoutRowsChange:function(){this._syncDragHandles(),this._insertGrid()},_afterResizeColLayoutColsChange:function(){this._syncDragHandles(),this._insertGrid()},_bindResizeColEvents:function(){this._resizeColsEventHandles=[this.after("layoutChange",this._afterResizeColLayoutChange),this.after("layout:rowsChange",this._afterResizeColLayoutRowsChange),this.after("layout-row:colsChange",this._afterResizeColLayoutColsChange),this._delegateDrag.after("drag:align",e.bind(this._afterDragAlign,this)),this._delegateDrag.after("drag:end",e.bind(this._afterDragEnd,this)),this._delegateDrag.after("drag:mouseDown",e.bind(this._afterDragMouseDown,this)),this._delegateDrag.after("drag:mouseup",e.bind(this._afterDragMouseup,this)),this._delegateDrag.after("drag:start",e.bind(this._afterDragStart,this)),this._layoutContainer.delegate("key",e.bind(this._onKeyPressResizeColDragHandle,this),"press:13","."+u),this._layoutContainer.delegate("key",e.bind(this._onKeyPressResizeColBreakpoint,this),"press:13","."+s),this._layoutContainer.delegate("mouseenter",e.bind(this._onMouseEnterCol,this),v),this._layoutContainer.delegate("mouseenter",e.bind(this._onMouseEnterDraggable,this),"."+u),this._layoutContainer.delegate("mouseleave",e.bind(this._onMouseLeaveCol,this),m)]},_canDrop:function(e,t){var r=e.getData("layout-col1"),i=e.getData("layout-col2"),s,o,u,a,f=t-e.getData("layout-position");return e.getData("layout-action")===n?i&&f<i.get("size")||r&&d-r.get("size")<t?!0:!1:(u=r.get("size")+f,a=i.get("size")-f,s=r.get("minSize"),o=i.get("minSize"),u!==0&&a!==0&&(u<s||a<o)?!1:!0)},_createDelegateDrag:function(){this._delegateDrag=new e.DD.Delegate({container:this._layoutContainer,handles:["."+l],nodes:"."+u}),this._delegateDrag.dd.plug(e.Plugin.DDConstrained,{constrain:this._layoutContainer,stickX:!0}),this._delegateDrag.dd.plug(e.Plugin.DDProxy,{cloneNode:!0,moveOnEnd:!1})},_handleBreakpointDrop:function(e,t){var n=e.getData("layout-col1"),r=e.getData("layout-col2"),i=t.getData("layout-position")-e.getData("layout-position"),s=n.get("size")+i,o=r.get("size")-i,u;if(!n.get("removable")&&s===0){n.fire("removalCanceled");return}if(!r.get("removable")&&o===0){r.fire("removalCanceled");return}n.set("size",s),r.set("size",o),s===0&&(u=n.get("node").ancestor().getData("layout-row"),u.removeCol(n.get("node").getData("layout-col"))),o===0&&(u=r.get("node").ancestor().getData("layout-row"),u.removeCol(r.get("node").getData("layout-col")))},_hideBreakpoints:function(e){var t=e.all("."+i);e.removeClass("layout-builder-resize-dragging")},_hideColDraggableBoundaries:function(){this._layoutContainer.all("."+u).removeClass(c)},_insertColumnAfterDropHandles:function(t){var n,r,i,s,o,u;t&&this._lastDropEnter&&(n=this._lastDropEnter.getData("layout-position"),r=t.getData("layout-position"),i=new e.LayoutCol,o=Math.abs(r-n),u=t.ancestor(m).getData("layout-row"),r===0?s=0:s=u.get("cols").length,n>0&&n<12&&(i.set("size",o
),u.addCol(s,i)),this._lastDropEnter=null)},_insertGrid:function(){var t=this,n,i,s=this.get("layout").get("rows");this._removeGrid(),e.each(s,function(s){i=s.get("node").one(m),e.each(r,function(r){n=e.Node.create(t.TPL_RESIZE_COL_BREAKPOINT),n.setStyle("left",r*100/d+"%"),n.setData("layout-position",r),i.append(n),t._gridlineNodes.push(n)})})},_onMouseEnterCol:function(e){var t=e.currentTarget;this._hideColDraggableBoundaries(t),this._showColDraggableBoundaries(t)},_onMouseEnterDraggable:function(e){var t=e.currentTarget.getData("layout-col1"),n=e.currentTarget.getData("layout-col2");t&&this._showColDraggableBoundaries(t.get("node")),n&&this._showColDraggableBoundaries(n.get("node"))},_onMouseLeaveCol:function(e){var t=e.currentTarget;this._hideColDraggableBoundaries(t)},_onKeyPressResizeColBreakpoint:function(e){var t;this._lastDropEnter=e.target.ancestor("."+i),t=this._lastDropEnter.ancestor(m),this._resize(this._dragNode),t&&this._hideBreakpoints(t),this._syncDragHandles()},_onKeyPressResizeColDragHandle:function(e){var t,n=e.target.ancestor("."+u),r,s=e.target.ancestor(m);this._dragNode=n,t=s.all("."+i),r=t.filter(function(e){return e.getStyle("display")!=="none"}).size(),r?this._hideBreakpoints(s):this._showBreakpoints(s,n)},_removeDragHandles:function(){this._layoutContainer.all("."+u+":not(.layout-builder-add-col-draggable)").remove()},_removeGrid:function(){this._gridlineNodes.length&&(e.Array.each(this._gridlineNodes,function(e){e.remove()}),this._gridlineNodes=[])},_resize:function(e){this._lastDropEnter?(this._handleBreakpointDrop(e,this._lastDropEnter),this._lastDropEnter=null):e.show()},_showBreakpoints:function(e,t){var n=e.all("."+i),r=this;e.addClass("layout-builder-resize-dragging")},_showColDraggableBoundaries:function(e){var t,n,r=e.ancestor().all("."+u);for(var i=r._nodes.length;i--;)t=r.item(i).getData("layout-col1"),n=r.item(i).getData("layout-col2"),(n&&n.get("node")===e||t&&t.get("node")===e)&&r.item(i).addClass(c)},_syncDragHandles:function(){var t=this;t._removeDragHandles(),e.Array.each(t.get("layout").get("rows"),function(e){t._syncRowDragHandles(e)})},_syncRowDragHandles:function(t){var n=t.get("cols"),r=n.length,i=0,s,o,u=t.get("node").one(m);for(o=0;o<r-1;o++)i+=n[o].get("size"),s=e.Node.create(this.TPL_RESIZE_COL_DRAGGABLE),s.setStyle("left",i*100/d+"%"),s.setData("layout-position",i),s.setData("layout-col1",n[o]),s.setData("layout-col2",n[o+1]),u.append(s)},_uiSetEnableResizeCols:function(e){e&&this.get("layout").get("isColumnMode")?(this._syncDragHandles(),this._insertGrid(),this._bindResizeColEvents()):(this._removeDragHandles(),this._removeGrid(),this._unbindResizeColEvents()),this.get("container").toggleClass(p,e)},_unbindResizeColEvents:function(){this._resizeColsEventHandles&&(new e.EventHandle(this._resizeColsEventHandles)).detach()}},e.LayoutBuilderResizeCol.ATTRS={enableResizeCols:{validator:e.Lang.isBoolean,value:!0}}},"3.1.0-deprecated.54",{requires:["dd-constrain","dd-delegate","dd-drop-plugin","dd-proxy","event-mouseenter","node-base"],skinnable:!0});
