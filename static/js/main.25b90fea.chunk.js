(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{108:function(t,e,a){},109:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(13),r=a.n(o);a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(2),i=a(3),l=a(5),u=a(4),m=a(10),d=a(19),p=a(7),h=(a(26),a(27),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this)).handleClick=function(t){if("Enter"===t.key){var e=t.target.value;e.trim()&&(n.props.enter(e),t.target.value="")}},n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("input",{type:"text",placeHolder:"   Enter your todos here",className:"input1",onKeyDown:this.handleClick})}}]),a}(c.a.Component)),f=(a(28),a(14)),v=a.n(f),b=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={getImage:function(t){if("complete"===t)return c.a.createElement("img",{className:"tick",height:"15px",src:v.a,alt:"check"})}},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"todos"},this.props.todos.map((function(e){return c.a.createElement("li",{style:{textDecoration:"complete"===e.status?"line-through":"none"},key:e.id,onClick:t.props.change(e.id)},e.text,t.state.getImage(e.status))})))}}]),a}(c.a.Component),E=a(15),g=a(8);function O(){var t=Object(p.a)(["",""]);return O=function(){return t},t}function j(){var t=Object(p.a)(["\n  animation: 1.2s ",";\n"]);return j=function(){return t},t}var k=4,y=g.a.div(j(),Object(g.b)(O(),E.fadeIn)),x=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).addToList=function(t){n.setState({todos:[{text:t,id:k++,status:"active"}].concat(Object(d.a)(n.state.todos))})},n.changeStatus=function(t){return function(e){n.setState({todos:n.state.todos.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{status:"active"===e.status?"complete":"active"}):e}))})}},n.applyFilter=function(t){return function(e){n.setState({filter:t})}},n.searchTodos=function(t,e){return t.filter((function(t){return-1!==t.text.indexOf(e)}))},n.filterTodos=function(t,e){switch(e){case"active":return t.filter((function(t){return"active"===t.status}));case"complete":return t.filter((function(t){return"complete"===t.status}));default:return t}},n.getTodos=function(){return n.searchTodos(n.filterTodos(n.state.todos,n.state.filter),n.state.search)},n.state={todos:[{text:"wash",id:1,status:"active"},{text:"shop",id:2,status:"complete"},{text:"steal",id:3,status:"active"}],filter:"All",search:""},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement(y,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"todo"},c.a.createElement("div",{className:"cross",onClick:function(){return t.props.del(t.props.title)}},"X"),c.a.createElement("div",{className:"title"},c.a.createElement("input",{type:"text",className:"titleInput",placeholder:"Enter Title "+this.props.title}),c.a.createElement("span",{className:"focus-border"})),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"all",onClick:this.applyFilter("all")},"All"),c.a.createElement("button",{className:"active",onClick:this.applyFilter("active")},"Todo/Active"),c.a.createElement("button",{onClick:this.applyFilter("complete")},"Completed"),c.a.createElement("input",{type:"text",placeholder:"search",className:"search",value:this.state.search,onChange:function(e){t.setState({search:e.target.value})}})),c.a.createElement(h,{enter:this.addToList}),c.a.createElement(b,{todos:this.getTodos(),change:this.changeStatus}))))}}]),a}(c.a.Component),C=(a(108),1),w=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={custom:[{comp:x,index:1,show:!0}]},t.addTodo=function(){t.state.custom.splice(0,0,{comp:x,index:++C,show:!0}),t.setState({custom:t.state.custom})},t.deleteComp=function(e){t.state.custom.map((function(t){return t.index===e&&(t.show=!1),0})),console.log(t.state.custom),t.setState({custom:t.state.custom})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("button",{className:"Add",onClick:this.addTodo},"+"),c.a.createElement("div",{className:"Components"},this.state.custom.map((function(e){return!0===e.show?c.a.createElement(e.comp,{key:e.index,del:t.deleteComp,title:e.index}):c.a.createElement("div",null)}))))}}]),a}(c.a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},14:function(t,e,a){t.exports=a.p+"static/media/check.14662814.png"},20:function(t,e,a){t.exports=a(109)},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.25b90fea.chunk.js.map