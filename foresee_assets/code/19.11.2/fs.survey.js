/***************************************
 * @preserve
 * Copyright (c) 2019 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: Survey
 * Version: 19.11.2
 * Built: November 07, 2019, 12:47:06 CST
 ***************************************/
_fsDefine(["fs",_fsNormalizeUrl("$fs.utils.js"),"exports"],function(t,e,i){function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var r={remove:function(){this.parentNode&&this.parentNode.removeChild(this)},hasClass:function(t){return this.className.indexOf(t)>-1},addClass:function(t){this.hasClass(t)||(this.className+=" "+t)},removeClass:function(t){this.className=(this.className||"").replace(t,""),this.className=this.className.replace(/[ ]+$/g,"")},$:function(t){return this.querySelectorAll(t)},css:function(e){for(var i in e)t.hasProp(e,i)&&(this.style[i]=e[i])}},s=function(e){if("string"==typeof e&&-1==e.indexOf("<"))return document.querySelectorAll(e);if("string"==typeof e){var i=document.createElement("div");i.innerHTML=e,e=i.firstChild}for(var n in r)t.hasProp(r,n)&&(e[n]=r[n]);return e},a=3,o=1,c=2,l=4,u=5,d=function(){function t(){}var i=t.prototype;return i.initQuestion=function(t,i){if(this.el=t,this.cfg=i,this.cfg.isPersistent=!!s(this.el).hasClass("acs-persistent__block"),this.cfg.isVisible=!!this.cfg.isPersistent,this.cfg.isRequired="1"===i.r||this.cfg.isPersistent&&this.cfg.qt==l,this.cfg.rules_info&&this.cfg.rules_info.length>0){var n=this.cfg.rules_info.replace(/&amp;/g,"&");n=n.replace(/&quot;/g,'"'),this.cfg.rules=JSON.parse(n)}else this.cfg.rules=[];this.answer=null,this.stateChanged=new e.FSEvent},i.hide=function(){this.cfg.isVisible=!1,this.cfg.isPersistent||s(this.el).addClass("acs-feedback__block--hidden")},i.show=function(){this.cfg.isVisible=!0,this.cfg.isPersistent||s(this.el).removeClass("acs-feedback__block--hidden")},i.validate=function(){var t=!0;return this.cfg.isVisible&&(this.cfg.isRequired&&(t=null!==this.answer&&this.answer.length>0),t?s(this.el).removeClass("acs-feedback__block--invalid"):s(this.el).addClass("acs-feedback__block--invalid")),t},i.getAnswer=function(){return!(!this.cfg.isVisible||!this.answer||null===this.answer)&&{questionId:this.cfg.id,answerId:this.answer}},t}(),h=function(t){function i(){return t.apply(this,arguments)||this}n(i,t);var r=i.prototype;return r.initCheckBox=function(t,i){this.initQuestion(t,i);var n,r=this,a=s(this.el),o=a.$("input[type=checkbox]"),c=(n=a,function(t){t&&t.stopPropagation();for(var e=n.$("label"),i=0;i<e.length;i++){var a=s(e[i]),o=a.$("input[type=checkbox]")[0];if(o){if(o.checked)if(a.setAttribute("aria-checked","true"),a.addClass("acsChecked"),null===r.answer)r.answer=[o.getAttribute("questionid")];else{for(var c=!1,l=0;l<r.answer.length;l++)if(r.answer[l]==o.getAttribute("questionid")){c=!0;break}c||(r.answer.push(o.getAttribute("questionid")),c=!1)}else if(a.setAttribute("aria-checked","false"),a.removeClass("acsChecked"),r.answer){for(var u=void 0,d=0;d<r.answer.length;d++)if(r.answer[d]==o.getAttribute("questionid")){u=d;break}u>=0&&r.answer.splice(u,1)}r.validate(),r.stateChanged.fire(r.cfg.id)}}});e.Bind(a,"feedback:keydown",function(t){t.stopPropagation();var i=e.getKeyCode(t);if("enter"===i||"spacebar"===i){t.preventDefault();for(var n=0;n<o.length;n++)t.target.control!==o[n]&&t.target.firstElementChild!==o[n]||(o[n].checked=!o[n].checked,o[n].setAttribute("checked",o[n].checked));c()}}),e.Bind(a,"feedback:change",c),e.Bind(a,"feedback:mousedown",function(t){t.preventDefault(),t.target.blur()},!0),e.Bind(a,"feedback:click",function(t){t.stopPropagation()})},r.checkRule=function(t){if(null!==this.answer&&this.answer.length>0)for(var e=0;e<this.answer.length;e++)if(this.answer[e]==t.answer)return!0;return!1},r.getAnswer=function(){if(this.cfg.isVisible&&null!==this.answer&&this.answer.length>0){for(var t=[],e=0;e<this.answer.length;e++)t.push({questionId:this.cfg.id,answerId:this.answer[e]});return t}return!1},i}(d);function f(t,e){if(0===e)return"";if(e<9)return t;if(t.length>9){var i={phone:/\b(?:(?:\(\d{3}\)?)|(?:\d{3}))[ -.\/\\]?\d{3}[ -.\/\\]?\d{4}\b/g},n={electron:/\b(4026|417500|4405|4508|4844|4913|4917)[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}\d{3,4}\b/g,maestro:/\b(?:5[0678]\d\d|6304|6390|67\d\d)[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?(?:\d{4})?[ -.\/\\]?(?:\d{1,3})?\b/g,dankort:/\b(5019)[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}\b/g,instaPayment:/\b(637|638|639)[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{1}\b/g,visa:/\b4\d{3}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{1,4}\b/g,mastercard:/\b5[1-5]\d{2}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}\b/g,amex:/\b3[47]\d{2}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{3}\b/g,diners:/\b3(?:0[0-5]|[68]\d)\d{1}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{2}\b/g,discover:/\b6(?:011|5\d{2}|22[19]|4[56789]\d{1})[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}\b/g,jcb:/\b(?:2131|1800|35\d[28-89])[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}[ -.\/\\]?\d{4}\b/g,ssn:/\b\d{3}[ -.\/\\]?\d{2}[ -.\/\\]?\d{4}\b/g},r=[];for(var s in i)t=t.replace(i[s],function(t,e){return this.push({i:e,m:t}),""}.bind(r));var a=function(t){return new Array(t.length+1).join("X")};for(var o in n)t=t.replace(n[o],a);r.forEach(function(e){t=t.slice(0,e.i)+e.m+t.slice(e.i)})}return e&&t.length>=this.maxlen&&(t=t.substr(0,this.maxlen-1)),t}h.build=function(t,e){if(e.qt==u){var i=new h;return i.initCheckBox(t,e),i}};var g=function(i){function r(){return i.apply(this,arguments)||this}n(r,i);var s=r.prototype;return s.initInputText=function(t,i){this.initQuestion(t,i);var n=this.el.$("input")[0];if(!n)throw new Error("Missing text input, bad survey data?");this.maxlen=parseInt(n.getAttribute("acsmaxlength"),10);var r=this,s=this.maxlen;/^[0-9]+$/.test(n.getAttribute("acsmaxlength"))&&(e.Bind(n,"feedback:keydown",function(t){t.stopPropagation();var i=(t.target||t.srcElement).value.replace(/\s+/g," ").length;if(s-i-1<0&&!e.isControlKey(t))return t.preventDefault(),!1}),e.Bind(n,"feedback:keyup",function(t){t.stopPropagation();var e=t.target||t.srcElement;r.answer=e.value,r.validate(),r.stateChanged.fire(r.cfg.id)}),e.Bind(n,"feedback:keypress",function(t){t.stopPropagation()}))},s.checkRule=function(i){var n=!1;if(null!==this.answer&&this.answer.length>0){var r=e.decodeHTMLEntities(i.answer);switch(i.operator){case"equals":n=r==this.answer;break;case"contains":n=t.toLowerCase(this.answer).indexOf(t.toLowerCase(r))>-1;break;default:console.error("Unknown rule operator: "+i.operator)}}return n},s.getAnswer=function(){if(this.cfg.isVisible&&null!==this.answer&&this.answer.length>0){var t=this.answer.replace(/\s+/g," ");return" "!=t&&{questionId:this.cfg.id,answerText:f(t,this.maxlen)}}return!1},r}(d);g.build=function(t,e){if(e.qt==o&&1==e.dt){var i=new g;return i.initInputText(t,e),i}};var p=function(t){function i(){return t.apply(this,arguments)||this}n(i,t);var r=i.prototype;return r.initRadio=function(t,i){this.initQuestion(t,i);var n,r=this,a=s(this.el),o=a.$("input[type=radio]"),c=a.$("label"),l=function(t){t.stopPropagation()},u=(n=a,function(t){for(var e=n.$("label"),i=0;i<e.length;i++){var a=s(e[i]),o=a.$("input[type=radio]")[0];o&&(o.checked||o===t?(a.addClass("acsChecked"),a.setAttribute("aria-checked","true"),r.answer=[{answerId:o.value,answerText:o.getAttribute("label"),questionId:r.cfg.id}]):(a.removeClass("acsChecked"),a.setAttribute("aria-checked","false")),r.validate(),r.stateChanged.fire(r.cfg.id))}});e.Bind(a,"feedback:keydown",function(t){var i,n=e.getKeyCode(t);if(t.stopPropagation(),"enter"===n||"spacebar"===n){t.preventDefault();for(var r=0;r<o.length;r++)t.target.control===o[r]||t.target.firstElementChild===o[r]?(o[r].checked=!0,o[r].setAttribute("checked",!0),i=o[r]):o[r].checked=!1;u(i)}else if("arrowleft"===n||"arrowright"===n)for(var s,a=t.target,c=t.target.parentNode.children,l=c.length-1,d=0;d<=l&&!s;d++)c[d]===a&&c[s="arrowright"===n?d+1>l?0:d+1:d-1<0?l:d-1].focus()}),e.Bind(a,"feedback:change",u),e.Bind(a,"feedback:mousedown",function(t){t.preventDefault(),t.target.blur()},!0);for(var d=0;d<c.length;d++)e.Bind(c[d],"feedback:click",l)},r.checkRule=function(t){return null!==this.answer&&this.answer[0].answerId==t.answer},r.getAnswer=function(){return!!(this.cfg.isVisible&&null!==this.answer&&this.answer.length>0)&&this.answer[0]},i}(d);p.build=function(t,e){if(e.qt==a){var i=new p;return i.initRadio(t,e),i}};var v=function(i){function r(){return i.apply(this,arguments)||this}n(r,i);var a=r.prototype;return a.initSelect=function(i,n){this.initQuestion(i,n);var r,a=this,o=s(this.el),c=o.$("select")[0],l=o.$("div.acs-feedback__select")[0];s(c).css({height:(l.offsetHeight||38)+"px"}),e.Bind(c,"feedback:change",(r=c,function(e){for(var i=s(r).$("option"),n=s(r).$("option")[r.selectedIndex],o=0;o<i.length;o++)n===i[o]?n.setAttribute("selected","selected"):i[o].getAttribute("selected")&&i[o].removeAttribute("selected");a.answer=t.toLowerCase(n.value).indexOf("choose")>-1?null:n.value,a.validate(),a.stateChanged.fire(a.cfg.id),e.preventDefault(),e.target.blur()}),!1)},a.updateSelects=function(){var t=s(this.el),e=t.$("select")[0],i=t.$("div.acs-feedback__select")[0];t.offsetHeight>0&&s(e).css({height:(i.offsetHeight||38)+"px"})},a.checkRule=function(t){return null!==this.answer&&this.answer.length&&this.answer==t.answer},r}(d);v.build=function(t,e){if(e.qt==c){var i=new v;return i.initSelect(t,e),i}};var b=function(i){function r(){return i.apply(this,arguments)||this}n(r,i);var a=r.prototype;return a._getRating=function(){return this.score},a.initStarRating=function(i,n){this.initQuestion(i,n);var r=this,a=s(this.el),o=a.$("input");function c(t,i){return function(t){for(var n=!1,r=t.srcElement||t.target,s=0;s<i.length;s++)n?e.removeClass(i[s],"_acsHover"):n||e.addClass(i[s],"_acsHover"),i[s]==r&&(n=!0)}}this.score=-1;var l,u=a.getElementsByClassName("star-rating")[0]||a.getElementsByTagName("fieldset"),d=u.children;e.Bind(a,"feedback:mouseleave",(l=d,function(){for(var t=0;t<l.length;t++)e.removeClass(l[t],"_acsHover")}));for(var h=0;h<d.length;h++)e.Bind(d[h],"feedback:mouseenter",c(0,d));var f=function(i,n){return function(s){for(var a=!1,c=function(){i.removeClass("_acsRatingSet")},l=s.srcElement||s.originalTarget,u=0;u<n.length;u++)a?(e.removeClass(n[u],"star-rating__star--fill"),n[u].setAttribute("aria-checked","false")):a||(r.score=u+1,e.addClass(n[u],"star-rating__star--fill"),n[u].setAttribute("aria-checked","true")),n[u]!=l&&o[u]!=l||(a=!0,o[u].checked=!0,r.answer=o[u].value,r.stateChanged.fire(r.cfg.id),r.validate()),e.addClass(i,"_acsRatingSet"),t.nextTick(c)}}(a,d);e.Bind(u,"feedback:change",function(t){"input"===t.target.tagName.toLowerCase()?f(t):t.stopPropagation()},!0),e.Bind(u,"feedback:click",function(t){"label"===t.target.tagName.toLowerCase()?(f(t),t.target.focus()):t.stopPropagation()},!0),e.Bind(u,"feedback:mousedown",function(t){t.preventDefault(),t.target.blur()},!0),e.Bind(u,"feedback:keydown",function(t){var i=e.getKeyCode(t);t.stopPropagation(),"enter"!==i&&"spacebar"!==i||(t.preventDefault(),f(t))})},a.checkRule=function(t){var e=!1;if(null!==this.answer&&this.answer.length>0)switch(t.operator){case"equals":e=this.answer==t.answer;break;case"lt":e=this.answer<t.answer;break;case"gt":e=this.answer>t.answer;break;default:console.error("Unknown rule operator: "+t.operator)}return e},r}(d);b.build=function(t,e){if(e.qt==l){var i=new b;return i.initStarRating(t,e),i}};var w={unavailable:"<p>Feedback isn't available right now.</p><p>Please check back later.</p>",expired:"<p>This is an expired survey!</p>",submittext:"Submit",ext:{feedback_choose_topic_text:"Choose a topic",feedback_default_dropdown_text:"Choose..",feedback_ok_button_text:"OK",feedback_required_field_error_text:"Please fill in the required fields.",feedback_survey_closed_header_text:"Survey has closed"}},k=function(i){function r(){return i.apply(this,arguments)||this}n(r,i);var a=r.prototype;return a.initTextArea=function(t,i){this.initQuestion(t,i);var n=this.el.$("textarea")[0];if(!n)throw new Error("Missing textarea, bad survey data?");this.maxlen=parseInt(n.getAttribute("acsmaxlength"),10);var r,a=this,o=(r=this.maxlen,function(t){t.stopPropagation();var e=t.target||t.srcElement,i=e.value.replace(/\s+/g," ").length,n=r-i,o=s(e.parentNode).$(".acs-feedback__textarea--count")[0],c=Math.max(0,n);if(o.innerHTML=c+" characters remaining",n<0)return e.value=e.value.substr(0,e.value.length+n),!1;a.answer=e.value,a.validate(),a.stateChanged.fire(a.cfg.id)}),c=function(t){return function(i){i.stopPropagation();var n=(i.target||i.srcElement).value.replace(/\s+/g," ").length;if(t-n-1<0&&!e.isControlKey(i))return i.preventDefault(),!1}}(this.maxlen);/^[0-9]+$/.test(n.getAttribute("acsmaxlength"))&&(e.Bind(n,"feedback:keydown",c),e.Bind(n,"feedback:keyup",o),e.Bind(n,"feedback:keypress",function(t){t.stopPropagation()}))},a.checkRule=function(i){var n=!1;if(null!==this.answer&&this.answer.length>0){var r=e.decodeHTMLEntities(i.answer);switch(i.operator){case"equals":n=i.answer==this.answer;break;case"contains":n=t.toLowerCase(this.answer).indexOf(t.toLowerCase(r))>-1;break;default:console.error("Unknown rule operator: "+i.operator)}}return n},a.getAnswer=function(){if(this.cfg.isVisible&&null!==this.answer&&this.answer.length>0){var t=this.answer.replace(/\s+/g," ");return" "!=t&&{questionId:this.cfg.id,answerText:f(t)}}return!1},r}(d);function _(i){var n,r=window._acsURL||window.location.toString();function s(t){if(!Array.isArray(t))return!1;for(n=0;n<t.length;n++)if(e.testAgainstSearch(t[n],r))return!0;return!1}return r=t.toLowerCase(r),(!i.whitelistActive||s(i.whitelistData))&&(!i.blacklistActive||!s(i.blacklistData))}k.build=function(t,e){if(e.qt==o&&2==e.dt){var i=new k;return i.initTextArea(t,e),i}};var m=function(){function i(i,n,r){var s=this;this.cfg=i,this.data=null,this.cpps=n,this.browser=r,this.qs=[],this._topic=!1,this.SurveyUIUpdated=new e.FSEvent,this.SubmitClicked=new e.FSEvent,this.SurveyData=new e.FSEvent,this.defaultCfg=w,this.SurveyData.subscribe(function(i,n){s.data=s._transpileJSONDef(JSON.parse(i)),s.data.meta.privacyurl=s.cfg.privacyuri||s.cfg.privacyuri,s.data.meta.privacytext=s.data.meta.privacytext||s.cfg.privacytext,s.data.ext=t.ext({},s.defaultCfg.ext,s.data.ext),s.data.meta.unavailable=s.data.meta.unavailable||s.defaultCfg.unavailable,s.data.meta.expired=s.data.meta.expired||s.defaultCfg.expired,s.data.meta.submittext=s.data.meta.submittext||s.defaultCfg.submittext;var r=s,a=s.data.meta,o=!!a.logo2graphic,c=!!a.logo1graphic,l=!1,u=!1,d=function(){if(n)return n(r.data)};o||c?(o&&e.imgInfo(a.logo2graphic,function(){l=!0,(!c||c&&u)&&d()}),c&&e.imgInfo(a.logo1graphic,function(){u=!0,(!o||o&&l)&&d()})):d()},!0,!0)}var n=i.prototype;return n._transpileJSONDef=function(e){var i,n,r,s,a=e.survey.content.main,o=a.cq,l=a.ca,u=a.ncq,d={meta:e.survey.content.meta.info,ext:e.survey.content.meta["ext-info"],notopic:[],topics:[]},h=/&amp;/gi,f=/&lt;/gi,g=/&gt;/gi,p=/&quot;/gi,v=/&nbsp;/gi,b={};if(u&&"string"!=typeof u||(u={qstn:[]}),u.qstn&&void 0===u.qstn.length&&(u.qstn=[u.qstn]),!this.cfg.autowhitelist&&this.cfg.topics.length>0){window._acsURL=t.getParam("fsUrl");for(var w=0;w<this.cfg.topics.length;w++){var k=this.cfg.topics[w];_(k)&&(b[k.answerId]=!0)}}function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];if(t[n]){for(var r=t[n];r.indexOf("&amp;")>-1;)r=r.replace(h,"&");t[n]=r.replace(f,"<").replace(g,">").replace(p,'"').replace(v," ")}}}for(m(d.meta,["epiloguetext","prologuetext"]),i=0;i<o.qstn.length;i++)for(m(r=o.qstn[i],["txt","lbl"]),d.notopic.push(r),r.answers=[],n=0;n<l.ans.length;n++)(s=l.ans[n]).qid==r.id&&(d.topics.push(s),r.answers.push(s));for(i=0;i<u.qstn.length;i++)for(m(r=u.qstn[i],["txt","lbl"]),r.answers=[],n=0;n<l.ans.length;n++)(s=l.ans[n]).qid==r.id&&r.answers.push(s);if(!this.cfg.autowhitelist&&this.cfg.topics.length>0){for(n=0;n<d.topics.length;n++)b[d.topics[n].id]||d.topics.splice(n--,1);for(n=0;n<d.notopic.length;n++)if(d.notopic[n].qt==c)for(i=0;i<d.notopic[n].answers.length;i++)b[d.notopic[n].answers[i].id]||d.notopic[n].answers.splice(i--,1)}for(i=0;i<d.topics.length;i++){var y=d.topics[i];if(y.questions=[],u.qstn)for(n=0;n<u.qstn.length;n++)u.qstn[n].aid==y.id&&(m(u.qstn[n],["txt","lbl"]),y.questions.push(u.qstn[n]))}var q=[];for(i=0;i<d.notopic.length;i++)d.notopic[i].qt==c&&(q=d.notopic[i].answers);return d.vistopics=q,d.ncq=u,d},n._getScore=function(){return this.qs[0]._getRating?this.qs[0]._getRating():0},n._serialize=function(){var e={mid:this.cfg.mid,url:window.location.toString().indexOf("&fsUrl")>-1?t.getParam("fsUrl"):window.location.toString(),responses:[]},i=e.responses,n=this.qs;if(1==this.data.vistopics.length)for(var r=0;r<this.data.notopic.length;r++){var s=this.data.notopic[r];if(s.qt==c){i.push({questionId:s.id,answerId:s.answers[0].id});break}}for(var a=0;a<n.length;a++){var o=n[a].cfg.id,l=n[a].cfg.qt;if(o){var d=n[a].getAnswer();d&&(d&&l==u?i.push.apply(i,d):i.push(d))}}var h=this.cpps.all();for(var f in h)i.push({questionId:f,answerText:h[f]});this.cfg.version&&(e.version=this.cfg.version),!0===this.cfg.replay&&void 0!==this.cfg.record&&void 0!==this.cfg.record.recorder&&null!==this.cfg.record.recorder&&(e.globalId=this.cfg.record.recorder.getGlobalId(),e.sessionId="");var g=window.location.href.match(/cxrid=([\d\w]*)&/);return g&&g[1]&&(e.globalId=g[1],e.sessionId=""),e=JSON.stringify(e)},n._getQConfig=function(t){var e,i,n=this.data.notopic;for(e=0;e<n.length;e++)if(t==n[e].id)return n[e];for(n=this.data.ncq.qstn,i=0;i<n.length;i++)if(t==n[i].id)return n[i]},n._getQObject=function(t){if(this.qs.length>0&&t)for(var e=0;e<this.qs.length;e++)if(this.qs[e].cfg.id==t)return this.qs[e];return!1},n._renderSurvey=function(t){var e,i=this._getQObject(t);if(i&&(e=this._checkTopicChange(i.getAnswer())),e){this._runSkipLogic(this.data.vistopics[e-1].questions);for(var n=0;n<this.data.vistopics.length;n++)if(n!==e-1)for(var r=this.data.vistopics[n].questions,s=0;s<r.length;s++){this._getQObject(r[s].id).hide()}}else for(var a=0;a<this.data.vistopics.length;a++){var o=this._checkWhatTopic(t);if(o)this._runSkipLogic(this.data.vistopics[o-1].questions);else if(this._topic)for(var c=0;c<this.data.vistopics.length;c++)this.data.vistopics[c].id==this._topic&&this._runSkipLogic(this.data.vistopics[c].questions)}},n._checkTopicChange=function(t){var e=t.answerId;if("string"!=typeof e)return!1;for(var i=0;i<this.data.vistopics.length;i++)if(this.data.vistopics[i].id==e)return i+1;return!1},n._checkWhatTopic=function(t){for(var e=0;e<this.data.vistopics.length;e++)for(var i=this.data.vistopics[e].questions,n=0;n<i.length;n++)if(i[n].id==t)return e+1;return!1},n._runSkipLogic=function(t){Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=this._getQObject(t[e].id),n=i.cfg.rules,r=!1;if(n.length>0)for(var s=0;s<n.length;s++){var a=this._getQObject(n[s].question);a&&(r=r||a.checkRule(n[s])&&!!a.cfg.isVisible)}else r=!0;r?i.show():i.hide()}},n._validateSurvey=function(){var t,e,i=!0;if(this.qs&&this.qs.length>0)for(var n=0;n<this.qs.length-1;n++)t=this.qs[n].el,this.qs[n].validate()?(t.setAttribute("aria-invalid","false"),t.getAttribute("aria-label")&&t.removeAttribute("aria-label")):(i=i&&!1,t.setAttribute("aria-invalid","true"),t.setAttribute("aria-label","The submission for this section is invalid"),e||(e=this.qs[n].el));return i?this._validationStatus(!1):(this._validationStatus(!0),e.focus()),i},n.bind=function(t){var i=this,n=this;n.submitted=!1;for(var r=(t=s(t)).$(".acs-feedback__block"),a=0;a<r.length;a++){var o=this._getQConfig(r[a].getAttribute("questionid"));if(o){var l=q(r[a],o);l.stateChanged.subscribe(this._renderSurvey.bind(this),!1,!0),this.qs.push(l)}}var u=function(){for(var t=0;t<i.qs.length;t++)i.qs[t].cfg.qt==c&&i.qs[t].updateSelects()};this.SurveyUIUpdated.subscribe(function(){setTimeout(u,100)}),n.$el=t;for(var d=t.$(".acs-headingzone h1"),h=0;h<d.length;h++)s(d[h]).addClass("acs-feedback__heading acs-feedback__heading--h1");var f=t.$(".acs-topic__selector")[0];f&&e.Bind(f,"feedback:change",function(e){!function(e){for(var i=t.$(".acs-feedback__topic"),r=0;r<i.length;r++)s(i[r]).removeClass("acs-visible__topic");try{s(document.getElementById("topk_"+e)).addClass("acs-visible__topic"),n._topic=e}catch(a){}n.SurveyUIUpdated.fire()}(e.target.value)}),1==this.data.vistopics.length&&(this._topic=this.data.vistopics[0].id,this._renderSurvey(),s(document.getElementById("topk_"+this.data.vistopics[0].id)).addClass("acs-visible__topic"),u()),e.Bind(t.$(".acs-submit-feedback__button")[0],"click",function(t){return i._validateSurvey()&&!i.submitted&&(i.SubmitClicked.fire(),i.submitted=!0),t&&t.preventDefault&&t.preventDefault(),!1});for(var g=function(){e._preventUnloadFor(10)},p=document.querySelectorAll('a[href^="mailto"]'),v=0;v<p.length;v++)e.Bind(p[v],"feedback:click",g);for(var b=document.querySelectorAll(".acs-feedback__label p"),w=0;w<b.length;w++)s(b[w]).css({display:"inline"})},n.isExpired=function(){var t=new Date,e=new Date(t.getFullYear(),t.getMonth(),t.getDate());if(this.cfg.fbexpiredate){var i=this.cfg.fbexpiredate.split("-");return new Date(i[0],Number(i[1])-1,i[2])<e}return!1},n._validationStatus=function(t){var e=s(this.$el.$(".acs-validation-block")[0]);return t?e.css({display:"block"}):e.css({display:"none"}),e},i}(),y=[h.build,g.build,p.build,v.build,b.build,k.build];function q(t,e){for(var i=0;i<y.length;i++){var n=y[i](t,e);if(n)return n}return null}return i.Survey=m,i});