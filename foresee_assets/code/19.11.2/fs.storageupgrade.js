/***************************************
 * @preserve
 * Copyright (c) 2019 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: Storage Upgrade
 * Version: 19.11.2
 * Built: November 07, 2019, 12:47:06 CST
 ***************************************/
_fsDefine(["fs",_fsNormalizeUrl("$fs.compress.js"),"exports"],function(t,s,e){var i=function(s){s._data.keys&&s._data.keys.cp&&(delete s._data.keys.cp.v.trigger_version,s._data.keys.cp.v.code=t.globalConfig.codeVer)},r=function(t){for(var s=["_fsspl_","acs.t","_4c_","fsr.s","fsr.t","fsr.r","fsr.a"],e=0;e<s.length;e++)t.kill(s[e])},a=function(){function s(t,s){this.stg=t,this.ckie=s,this.val=s.get("acs.t")||s.get("fsr.t")}return s.prototype.upgrade=function(){if(this.val)try{var s=JSON.parse(this.val),e=Object.keys(s);if(s.rid=this.stg.uid,e.length>0){if(t.isDefined(s[e[0]].v))this.stg._data.keys=s;else for(var a=0;a<e.length;a++)this.stg.set(e[a],s[e[a]]);this.stg.save(!0)}}catch(n){}i(this.stg),r(this.ckie)},s}(),n=function(){function e(t,e){this.stg=t,this.ckie=e,this.val=s.decompress(decodeURIComponent(e.get("_4c_")))}return e.prototype.upgrade=function(){if(this.val)try{var s=JSON.parse(this.val).keys,e=Object.keys(s);if(s.cp||(s.cp={v:{}}),s.rid.v=this.stg.uid,e.length>0){if(t.isDefined(s[e[0]].v))this.stg._data.keys=s;else for(var a=0;a<e.length;a++)this.stg.set(e[a],s[e[a]]);this.stg.save(!0)}}catch(n){}i(this.stg),r(this.ckie)},e}(),g=function(){function t(t,s){this.stg=t,this.ckie=s,this.val=s.get("fsr.r")}return t.prototype.upgrade=function(){if(this.val)try{var t=JSON.parse(this.val);this.stg.set("i","x"),t.d&&t.e?this.stg.setMaxKeyExpiration(6048e5+864e5*t.d):t.d?this.stg.setMaxKeyExpiration(t.d/2*864e5):this.stg.setMaxKeyExpiration(3888e6),this.stg.save(!0)}catch(s){}i(this.stg),r(this.ckie)},t}(),h=function(){function t(t,s){this.stg=t,this.ckie=s,this.val=s.get("_fsspl_")}return t.prototype.upgrade=function(){if(this.val)try{var t=JSON.parse(this.val);t.keys.rid.v=this.stg.uid,this.stg._data.keys=t.keys,this.stg.save(!0)}catch(s){}i(this.stg),r(this.ckie)},t}();return function(t,s,e){s.get("_fsspl_")&&new h(t,s).upgrade();s.get("fsr.r")&&s.get("fsr.s")&&new g(t,s).upgrade();(s.get("acs.t")||s.get("fsr.t"))&&new a(t,s).upgrade();s.get("_4c_")&&new n(t,s).upgrade();var i=t.get("cp");if(i&&t.set("cp",i,864e5),t._maint(),e)return e()}});
