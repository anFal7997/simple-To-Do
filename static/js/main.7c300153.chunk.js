(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{27:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),s=n(15),a=n.n(s),o=n(1);function r(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{color:"white",textAlign:"center"},children:" About Component "})})}var u=n(9);n(27);function j(){return Object(o.jsxs)("header",{children:[Object(o.jsx)(u.b,{to:"/",children:" Home "}),Object(o.jsx)(u.b,{to:"/about",children:" About "})]})}var l=n(19),h=n(17),b=n(18),p=n(21),d=n(20),m=(n(33),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(h.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={input:"  ",items:[]},t.handleChangeEvent=function(e){t.setState({input:e.target.value})},t.storeItems=function(e){e.preventDefault();var n=t.state.input;t.setState({items:[].concat(Object(l.a)(t.state.items),[n]),input:" "})},t.itemDelete=function(e){t.setState({items:t.state.items.filter((function(t,n){return n!==e}))})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.input,c=e.items;return Object(o.jsxs)("div",{className:"todo-container",children:[Object(o.jsxs)("form",{className:"input-Section",onSubmit:this.storeItems,children:[Object(o.jsx)("h1",{children:"Todo App"}),Object(o.jsx)("input",{type:"text",value:n,onChange:this.handleChangeEvent,placeholder:"Enter Items..."}),Object(o.jsx)("input",{type:"submit",onClick:this.storeItems,value:"Add"})]}),Object(o.jsx)("ul",{children:c.map((function(e,n){return Object(o.jsxs)("li",{children:[e,Object(o.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return t.itemDelete(n)}})]},n)}))})]})}}]),n}(c.Component)),f=n(2),O=function(){return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(f.a,{path:"/",exact:!0,component:m}),Object(o.jsx)(f.a,{path:"/about",component:r})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.7c300153.chunk.js.map