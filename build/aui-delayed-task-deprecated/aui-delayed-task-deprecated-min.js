YUI.add("aui-delayed-task-deprecated",function(e,t){var n=function(e,t,n){var r=this;r._args=n,r._delay=0,r._fn=e,r._id=null,r._scope=t||r,r._time=0,r._base=function(){var e=r._getTime();e-r._time>=r._delay&&(clearInterval(r._id),r._id=null,r._fn.apply(r._scope,r._args||[]))}};n.prototype={delay:function(t,n,r,i){var s=this;s._id&&s._delay!=t&&s.cancel(),s._delay=t||s._delay,s._time=s._getTime(),s._fn=n||s._fn,s._scope=r||s._scope,s._args=i||s._args,e.Lang.isArray(s._args)||(s._args=[s._args]),s._id||(s._delay>0?s._id=setInterval(s._base,s._delay):s._base())},cancel:function(){var e=this;e._id&&(clearInterval(e._id),e._id=null)},_getTime:function(){var e=this;return+(new Date)}},e.DelayedTask=n},"3.1.0-deprecated.5",{requires:["yui-base"]});
