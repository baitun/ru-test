(this["webpackJsonpudarenie-test"]=this["webpackJsonpudarenie-test"]||[]).push([[0],{27:function(e,t,n){e.exports=n(37)},32:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(22),c=n.n(l),u=n(9);function o(){var e=JSON.parse(localStorage.getItem("answers")),t=localStorage.getItem("name"),n=e.reduce((function(e,t){return e+t.isCorrect}),0),a=e.length,l=(n/a*100).toFixed(2),c=function(e,t){var n=e/t*3+2;return Math.round(n)}(n,a);return r.a.createElement("div",{className:"result"},r.a.createElement("h1",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"),r.a.createElement("h2",null,t),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",n,"/",a," (",l,"%)"),r.a.createElement("p",null,"\u041e\u0446\u0435\u043d\u043a\u0430: ",c),r.a.createElement("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044e."),r.a.createElement("p",null,btoa(unescape(encodeURIComponent(t+n)))))}function s(e){var t=e.onNextPage,n=e.name,a=e.setName,l=n.length<4;return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0435\u0441\u0442 \u043d\u0430 \u0437\u043d\u0430\u043d\u0438\u0435 \u0443\u0434\u0430\u0440\u0435\u043d\u0438\u0439 \u0432 \u0441\u043b\u043e\u0432\u0430\u0445"),r.a.createElement("p",null,"\u0423 \u0432\u0430\u0441 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0430 \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),r.a.createElement("p",null,"\u041d\u0443\u0436\u043d\u043e \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043d\u0430 \u0431\u0443\u043a\u0432\u0443 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0430\u0434\u0430\u0435\u0442 \u0443\u0434\u0430\u0440\u0435\u043d\u0438\u0435"),r.a.createElement("p",null,"\u0412\u0440\u0435\u043c\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e: ",15," \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430 \u0441\u043b\u043e\u0432\u043e"),r.a.createElement("br",null),r.a.createElement("p",null,"\u0414\u043b\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u0438 \u0438\u043c\u044f:"),r.a.createElement("input",{className:"ant-input",type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0418\u043c\u044f"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"ant-btn-primary",onClick:t,disabled:l},"\u041d\u0430\u0447\u0430\u0442\u044c"))}var i=n(25),m=["\u0430\u043b\u043a\u043e\u0433\u043e\u0301\u043b\u044c","\u0430\u043b\u0444\u0430\u0432\u0438\u0301\u0442","\u0430\u0440\u0438\u0441\u0442\u043e\u043a\u0440\u0430\u0301\u0442\u0438\u044f","\u0431\u0430\u043b\u043e\u0301\u0432\u0430\u043d\u043d\u044b\u0439","\u0431\u0430\u043b\u043e\u0432\u0430\u0301\u0442\u044c","\u0431\u0435\u043d\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0301\u0434","\u0431\u0440\u044f\u0446\u0430\u0301\u043d\u0438\u0435","\u0431\u0443\u043a\u0441\u0438\u0301\u0440\u043e\u0432\u0430\u0442\u044c","\u0431\u0443\u0440\u0436\u0443\u0430\u0437\u0438\u0301\u044f","\u0412\u0430\u0301\u043b\u044c\u0442\u0435\u0440","\u0432\u0435\u0301\u0447\u0435\u0440\u044f","\u0432\u0442\u0440\u0438\u0301\u0434\u043e\u0440\u043e\u0433\u0430","\u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0301\u0434","\u0433\u0443\u0301\u0441\u0435\u043d\u0438\u0447\u043d\u044b\u0439","\u0434\u0435\u0444\u0438\u0301\u0441","\u0434\u0438\u0441\u043f\u0430\u043d\u0441\u0435\u0301\u0440","\u0434\u043e\u0431\u0435\u043b\u0430\u0301","\u0434\u043e\u0431\u044b\u0301\u0447\u0430","\u0434\u043e\u0433\u043e\u0432\u043e\u0301\u0440","\u0434\u043e\u043a\u0443\u043c\u0435\u0301\u043d\u0442","\u0434\u043e\u043d\u0435\u0301\u043b\u044c\u0437\u044f","\u0434\u043e\u0301\u043d\u0438\u0437\u0443","\u0434\u043e\u0441\u043a\u0430\u0301","\u0434\u0440\u0435\u043c\u043e\u0301\u0442\u0430","\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u0301\u043c\u0435\u043d\u043d\u044b\u0439","\u0436\u0430\u0301\u043b\u043e\u0432\u0430\u0442\u044c","\u0436\u0430\u043b\u044e\u0437\u0438\u0301","\u0436\u0430\u0440\u043e\u0301\u0432\u0435\u043d\u043d\u044b\u0439","\u0437\u0430\u0432\u0438\u0301\u0434\u043d\u043e","\u0437\u0430\u0301\u0433\u043d\u0443\u0442\u044b\u0439","\u0437\u0430\u0301\u0433\u043e\u0432\u043e\u0440","\u0437\u0430\u0301\u0433\u043e\u0434\u044f","\u0437\u0430\u043a\u0443\u0301\u043f\u043e\u0440\u0438\u0442\u044c","\u0437\u0430\u043f\u043b\u043e\u043c\u0431\u0438\u0440\u043e\u0432\u0430\u0301\u0442\u044c","\u0437\u043d\u0430\u0301\u043c\u0435\u043d\u0438\u0435","\u0437\u0443\u0431\u0447\u0430\u0301\u0442\u044b\u0439","\u0438\u0437\u0431\u0430\u043b\u043e\u0301\u0432\u0430\u043d\u043d\u044b\u0439","\u0438\u0301\u043a\u043e\u043d\u043e\u043f\u0438\u0441\u044c","\u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0301\u044f","\u0438\u0441\u043f\u043e\u0432\u0435\u0301\u0434\u0430\u043d\u0438\u0435","\u0438\u0441\u0447\u0435\u0301\u0440\u043f\u0430\u0442\u044c","\u043a\u0430\u0301\u043c\u0431\u0430\u043b\u0430","\u043a\u0430\u0440\u0434\u0438\u0433\u0430\u0301\u043d","\u043a\u0430\u0442\u0430\u043b\u043e\u0301\u0433","\u043a\u0432\u0430\u0440\u0442\u0430\u0301\u043b","\u043a\u0435\u0434\u0440\u043e\u0301\u0432\u044b\u0439","\u043a\u0438\u043b\u043e\u043c\u0435\u0301\u0442\u0440","\u043a\u043e\u0436\u0443\u0301\u0445","\u043a\u043e\u043a\u043b\u044e\u0301\u0448","\u043a\u043e\u0440\u044b\u0301\u0441\u0442\u044c\t","\u043a\u043e\u0441\u0442\u044e\u043c\u0438\u0440\u043e\u0301\u0432\u0430\u043d\u043d\u044b\u0439","\u043a\u0440\u0430\u0441\u0438\u0301\u0432\u0435\u0435","\u043a\u0440\u043e\u0432\u043e\u0442\u043e\u0447\u0438\u0301\u0442\u044c","\u043a\u0443\u0301\u0445\u043e\u043d\u043d\u044b\u0439","\u043b\u0430\u043c\u0438\u043d\u0438\u0301\u0440\u043e\u0432\u0430\u0442\u044c","\u043b\u0430\u0301\u0446\u043a\u0430\u043d","\u043b\u043e\u043c\u043e\u0301\u0442\u0430","\u043c\u0430\u0301\u043d\u0442\u0440\u0430","\u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0301","\u043c\u0435\u0442\u0440\u043e\u043f\u043e\u043b\u0438\u0442\u0435\u0301\u043d","\u043c\u043e\u0437\u0430\u0438\u0301\u0447\u043d\u044b\u0439","\u043c\u0443\u0441\u043e\u0440\u043e\u043f\u0440\u043e\u0432\u043e\u0301\u0434","\u043d\u0430\u0301\u0431\u043e\u043a","\u043d\u0430\u0434\u043e\u0301\u043b\u0433\u043e","\u043d\u0430\u043c\u0435\u0301\u0440\u0435\u043d\u0438\u0435","\u043d\u0430\u0440\u043e\u0447\u0438\u0301\u0442\u043e","\u043d\u0430\u0301\u0447\u0430\u0442\u044b\u0439","\u043d\u0435\u0444\u0442\u0435\u043f\u0440\u043e\u0432\u043e\u0301\u0434","\u043e\u0431\u043b\u0435\u0433\u0447\u0438\u0301\u0442\u044c","\u043e\u043a\u0441\u044e\u0301\u043c\u043e\u0440\u043e\u043d","\u043e\u043f\u043e\u0301\u0448\u043b\u0438\u0442\u044c","\u043e\u043f\u0442\u043e\u0301\u0432\u044b\u0439","\u043e\u0441\u0432\u0435\u0301\u0434\u043e\u043c\u0438\u0442\u044c","\u043e\u0442\u043a\u0443\u0301\u043f\u043e\u0440\u0438\u0442\u044c","\u043e\u0301\u0442\u0440\u043e\u0447\u0435\u0441\u0442\u0432\u043e","\u043f\u0430\u0440\u0442\u0435\u0301\u0440","\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u0438\u0301\u043a","\u043f\u043b\u043e\u0434\u043e\u043d\u043e\u0441\u0438\u0301\u0442\u044c","\u043f\u043b\u043e\u043c\u0431\u0438\u0440\u043e\u0432\u0430\u0301\u0442\u044c","\u043f\u043b\u043e\u043c\u0431\u0438\u0440\u043e\u0301\u0432\u0449\u0438\u043a","\u043f\u043e\u043d\u044f\u0301\u0432\u0448\u0438\u0439","\u043f\u043e\u0301\u043d\u044f\u0442\u044b\u0439","\u043f\u043e\u0440\u0442\u0444\u0435\u0301\u043b\u044c","\u043f\u0440\u0435\u043c\u0438\u0440\u043e\u0432\u0430\u0301\u0442\u044c","\u043f\u0440\u0438\u043d\u0443\u0301\u0434\u0438\u0442\u044c","\u0433\u0435\u0440\u0431\u044b\u0301","\u043f\u0443\u0442\u0435\u043f\u0440\u043e\u0432\u043e\u0301\u0434","\u0440\u0430\u0432\u043d\u043e\u0301","\u0440\u0430\u0437\u043e\u0440\u0443\u0436\u0438\u0301\u0442\u044c","\u0440\u0443\u0301\u0431\u0447\u0430\u0442\u044b\u0439","\u0441\u0430\u0301\u043a\u0443\u0440\u0430","\u0441\u0438\u0301\u043b\u043e\u0441","\u0441\u043b\u0438\u0301\u0432\u043e\u0432\u044b\u0439","\u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0301\u0447\u0435\u043d\u0438\u0435","\u0441\u0442\u043e\u043b\u044f\u0301\u0440","\u0442\u0435\u043b\u0435\u043f\u0430\u0301\u0442\u0438\u044f","\u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0301\u0440","\u0443\u0431\u044b\u0301\u0442\u044c","\u0443\u0433\u043b\u0443\u0431\u0438\u0301\u0442\u044c","\u0443\u0434\u043e\u0301\u0431\u0440\u0438\u0442\u044c\t","\u0443\u043a\u0440\u0430\u0438\u0301\u043d\u0441\u043a\u0438\u0439","\u0444\u0435\u043d\u043e\u0301\u043c\u0435\u043d","\u0444\u0435\u0442\u0438\u0301\u0448","\u0445\u0432\u043e\u0301\u044f","\u0445\u043e\u0434\u0430\u0301\u0442\u0430\u0439\u0441\u0442\u0432\u043e","\u0445\u043e\u0434\u0430\u0301\u0442\u0430\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c","\u0445\u0440\u0435\u0431\u0435\u0301\u0442","\u0445\u0440\u0438\u0441\u0442\u0438\u0430\u043d\u0438\u0301\u043d","\u0446\u0435\u043c\u0435\u0301\u043d\u0442","\u0446\u0435\u0301\u043d\u0442\u043d\u0435\u0440","\u0446\u0435\u043f\u043e\u0301\u0447\u043a\u0430","\u0447\u0435\u0301\u0440\u043f\u0430\u0442\u044c","\u0448\u0430\u0440\u043e\u0432\u043e\u0301\u0439","\u0449\u0430\u0432\u0435\u0301\u043b\u044c","\u044d\u0301\u043a\u0441\u043a\u0443\u0440\u0441","\u044d\u043f\u0438\u0301\u0433\u0440\u0430\u0444","\u0442\u043e\u0301\u0440\u0442\u044b","\u0431\u0430\u0301\u043d\u0442\u044b","\u0430\u043d\u0438\u043c\u0435\u0301","\u0430\u043f\u043f\u043e\u0441\u0442\u0440\u043e\u0301\u0444","\u0432\u043e\u0301\u0440\u044b","\u0432\u0437\u044f\u0442\u0430\u0301","\u0434\u043e\u0433\u043e\u0432\u043e\u0301\u0440\u044b","\u0437\u0430\u043d\u044f\u0442\u0430\u0301","\u043a\u0440\u0435\u0301\u043c\u044b","\u043a\u0440\u0435\u0301\u043c\u043e\u0432","\u043b\u0430\u0301\u0442\u0442\u0435","\u043d\u0430\u0447\u0430\u043b\u0441\u044f\u0301","\u043e\u0301\u0431\u043d\u044f\u043b\u0438","\u0441\u0440\u0435\u0301\u0434\u0441\u0442\u0432\u0430","\u043f\u043e\u0301\u0434\u043d\u044f\u043b\u0438","\u0448\u0430\u0301\u0440\u0444\u044b","\u0441\u043d\u044f\u0442\u0430\u0301","\u043d\u043e\u0301\u0433\u0442\u044f","\u0447\u0435\u0301\u0440\u043f\u0430\u044f","\u0441\u043d\u0430\u0431\u0436\u0435\u043d\u0430\u0301","\u043b\u0433\u0430\u043b\u0430\u0301","\u0441\u0432\u0435\u0440\u043b\u0438\u0301\u0442","\u0432\u043a\u043b\u044e\u0447\u0438\u0301\u043c","\u043f\u0440\u0438\u0431\u044b\u043b\u0430\u0301","\u043d\u0430\u0447\u0430\u0301\u0432\u0448\u0438\u0441\u044c","\u0431\u043e\u0301\u043c\u0436\u0438","\u043b\u0435\u0301\u043a\u0442\u043e\u0440\u043e\u0432","\u043f\u0440\u043e\u0301\u0434\u0430\u043b","\u0432\u0440\u0443\u0447\u0430\u0301\u0442","\u043c\u0430\u0440\u0448\u043c\u0435\u0301\u043b\u043b\u043e\u0443","\u0440\u0430\u043d\u0434\u043e\u0301\u043c\u043d\u044b\u0439","\u0441\u0442\u0440\u0438\u0433\u0443\u0301","\u0441\u0440\u0435\u0301\u0434\u0441\u0442\u0432\u0430\u043c\u0438","\u0433\u0440\u0443\u043d\u0442\u043e\u0301\u0432\u044b"];function f(e){var t=e.timeLeft,n=["timer"];return t/15<=.33?n.push("red"):t/15<=.5&&n.push("yellow"),r.a.createElement("div",{className:n.join(" ")},t)}function E(e){return/^[\u0430\u0435\u0451\u0438\u043e\u0443\u044b\u044d\u044e\u044f]$/i.test(e)}var d=[];function v(e){var t=e.onNextPage,n=Object(a.useState)(15),l=Object(u.a)(n,2),c=l[0],o=l[1],s=Object(a.useState)(0),v=Object(u.a)(s,2),p=v[0],b=v[1],g=Object(a.useState)(void 0),h=Object(u.a)(g,2),N=h[0],j=h[1];Object(a.useEffect)((function(){o(15);var e=setInterval((function(){o((function(t){var n=t-1;return 0===n&&clearInterval(e),n}))}),1e3);return function(){return clearInterval(e)}}),[p]);var O=function(e,t){return function(){E(e)&&j(t)}};if("undefined"===typeof p)return r.a.createElement(r.a.Fragment,null,"wordNumber undefined");if(!m[p])return r.a.createElement(r.a.Fragment,null,"No word");var w=m[p].replace(/\u0301/g,"");return r.a.createElement("div",{className:"progress"},r.a.createElement("h2",null,"\u0421\u043b\u043e\u0432\u043e ",p+1,"/",m.length),r.a.createElement("div",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0441\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u0430\u0434\u0430\u0435\u0442 \u0443\u0434\u0430\u0440\u0435\u043d\u0438\u0435"),r.a.createElement(f,{timeLeft:c}),r.a.createElement("div",{className:c<1?"word blurred":"word"},Object(i.a)(w).map((function(e,t){var n=["letter"];return E(e)&&n.push("vowel"),t===N&&n.push("selected"),r.a.createElement("span",{className:n.join(" "),key:e+t,onClick:O(e,t)},e)})),c<1?r.a.createElement("div",{className:"timeout"},"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e"):""),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"ant-btn-primary",onClick:function(){var e=m[p],n=e.match(/\u0301/).index-1;d.push({word:e,selectedPosition:N,correctPosition:n,isCorrect:N===n}),localStorage.setItem("answers",JSON.stringify(d)),b((function(e){var n=e+1;return n<m.length?n:void t()})),j(void 0)}},"\u0414\u0430\u043b\u0435\u0435")))}n(32),n(33);function p(){var e=Object(a.useState)("welcome"),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),m=i[0],f=i[1];Object(a.useEffect)((function(){localStorage.getItem("answers")&&l("result")}),[]),Object(a.useEffect)((function(){m&&localStorage.setItem("name",m)}),[m]);var E=function(e){return function(){return l(e)}};switch(n){case"progress":return r.a.createElement(v,{onNextPage:E("result")});case"result":return r.a.createElement(o,{name:m});default:return r.a.createElement(s,{onNextPage:E("progress"),name:m,setName:f})}}var b=n(39),g=n(45);b.a({dsn:"https://59fb7f6408f14295be3845cf393face8@o293087.ingest.sentry.io/5517954"});var h=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{fallback:"An error has occurred"},r.a.createElement("div",{className:"container"},r.a.createElement(p,null))),";"),h)}},[[27,1,2]]]);
//# sourceMappingURL=main.88222611.chunk.js.map