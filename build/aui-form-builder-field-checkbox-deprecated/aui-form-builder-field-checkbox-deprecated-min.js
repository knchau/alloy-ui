YUI.add("aui-form-builder-field-checkbox-deprecated",function(e,t){var n=e.Lang,r=e.Array,i=e.Escape,s=e.getClassName,o=s("checkbox"),u=s("field"),a=s("field","checkbox"),f=s("field","checkbox","text"),l=s("field","choice"),c=s("form-builder-field"),h=s("form-builder-field","node"),p='<input id="{id}" class="'+[h,u,a,l].join(" ")+'" name="{name}" type="checkbox" value="{value}" {checked} />',d=e.Component.create({ATTRS:{dataType:{value:"boolean"},predefinedValue:{setter:e.DataType.Boolean.parse,value:!1},template:{valueFn:function(){return p}}},CSS_PREFIX:c,EXTENDS:e.FormBuilderField,NAME:"form-builder-checkbox-field",prototype:{renderUI:function(){var t=this,n=t.get("contentBox");e.FormBuilderCheckBoxField.superclass.renderUI.apply(t,arguments),n.addClass(o)},getPropertyModel:function(){var t=this,n=t.getStrings(),i=e.FormBuilderCheckBoxField.superclass.getPropertyModel.apply(t,arguments);return r.each(i,function(r,i,s){r.attributeName==="predefinedValue"&&(s[i]={attributeName:"predefinedValue",editor:new e.RadioCellEditor({options:{"false":n.no,"true":n.yes}}),formatter:e.bind(t._booleanFormatter,t),name:n.predefinedValue})}),i},getHTML:function(){var e=this,t=e.get("checked");return n.sub(e.get("template"),{checked:t?'checked="checked"':"",id:i.html(e.get("id")),label:i.html(e.get("label")),name:i.html(e.get("name")),value:i.html(e.get("predefinedValue"))})},_uiSetLabel:function(e){var t=this,n=t.get("labelNode"),r=t.get("showLabel"),s=t.get("templateNode");n.setContent('<span class="'+f+'">'+i.html(e)+"</span>"),t._uiSetShowLabel(r),n.prepend(s)},_uiSetPredefinedValue:function(e){var t=this,n=t.get("templateNode");e?n.setAttribute("checked",e):n.removeAttribute("checked")},_uiSetShowLabel:function(e){var t=this,n=t.get("labelNode"),r=n.one("."+f);r&&r.toggle(e)}}});e.FormBuilderCheckBoxField=d,e.FormBuilderField.types.checkbox=e.FormBuilderCheckBoxField},"3.1.0-deprecated.54",{requires:["aui-form-builder-field-deprecated"]});
