(this["webpackJsonpreact-steps"]=this["webpackJsonpreact-steps"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(14),n(5)),i=n(4),s=(n(15),n(8)),u=function e(t,n,a){Object(s.a)(this,e),this.id=t,this.date=n,this.distans=a},d=n(3);var m=function(e){var t=e.onAdd,n=Object(a.useRef)(),c=Object(a.useRef)();return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var a=new u(Object(d.a)(),e.target.date.value,e.target.dis.value);t({step:a,inpDate:n,inpDis:c}),e.target.date.value="",e.target.dis.value=""}},r.a.createElement("label",{className:"label",htmlFor:"date"},"Date"),r.a.createElement("input",{className:"inp",type:"date",id:"date",name:"date",ref:n}),r.a.createElement("label",{className:"label",htmlFor:"dis"},"Distans"),r.a.createElement("input",{className:"inp",name:"dis",ref:c}),r.a.createElement("button",null,"ok"))};var f=function(e){var t=e.steps,n=e.onRemove,a=e.onEdit;return console.log(t),r.a.createElement("table",{className:"tab"},r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Distans"),r.a.createElement("th",null,"Action")),t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.distans),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e.id)}},"edit"),r.a.createElement("button",{onClick:function(){return n(e.id)}},"del")))})))};var p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),p=s[0],E=s[1],b=Object(a.useState)(""),v=Object(i.a)(b,2),h=v[0],g=v[1];return n.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),r.a.createElement("div",{className:"App"},r.a.createElement(m,{onAdd:function(e){console.log(e.step.date),console.log(n);var t,a=!1;n.forEach((function(r){if(r.date==e.step.date){var o=parseInt(r.distans)+parseInt(e.step.distans);console.log(o),t=new u(Object(d.a)(),r.date,o),c(n.filter((function(e){return e.id!==r.id}))),a=!0}})),console.log(a),c(a?function(e){return[].concat(Object(l.a)(e),[t])}:function(t){return[].concat(Object(l.a)(t),[e.step])}),E(e.inpDate),g(e.inpDis)}}),r.a.createElement(f,{steps:n,onRemove:function(e){c(n.filter((function(t){return t.id!==e})))},onEdit:function(e){console.log(h),console.log(p.current),c((function(t){return t.map((function(t){t.id===e&&(h.current.value=t.distans,p.current.value=t.date)}))})),c(n.filter((function(t){return t.id!==e})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb7a92b1.chunk.js.map