(this.webpackJsonpreacttodo=this.webpackJsonpreacttodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=(a(13),a(7)),s=a(1),d=a(2),i=a(3),m=a(4),u=function(e){var t=e.todos,a=e.deleteTodo,n=t.length?t.map((function(e){return o.a.createElement("div",{className:"card my-2",key:e.id},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},e.content),o.a.createElement("p",{className:"btn btn-danger delete",onClick:function(){a(e.id)}},"Remove")))})):o.a.createElement("p",{className:"text-center"},"You currently do not have any todos!");return o.a.createElement("div",{className:"mx-auto"},n)},h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"formcontainer"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Add New todo"),o.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:this.handleChange,value:this.state.content,placeholder:"Enter email"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Enter a valid todo name")),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:e.getTodos()},e.curId=e.state.todos[e.state.todos.length-1].id,e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.updateData(a),e.setState({todos:a})},e.addTodo=function(t){t.id=e.curId+=1;var a=[].concat(Object(l.a)(e.state.todos),[t]);e.updateData(a),e.setState({todos:a}),console.log(e.state)},e}return Object(d.a)(a,[{key:"updateData",value:function(e){localStorage.setItem("todos",JSON.stringify(e))}},{key:"getTodos",value:function(){var e;if(localStorage.length<1)e=[{id:1,content:"Buy some Milk"},{id:2,content:"Play zelda"}];else{var t=localStorage.getItem("todos");e=JSON.parse(t)}return e}},{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement("h1",{className:"text-center my-5 font-weight-bolder"},"Just Do It"),o.a.createElement(u,{todos:this.state.todos,deleteTodo:this.deleteTodo}),o.a.createElement(h,{addTodo:this.addTodo}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d2c5b83f.chunk.js.map