(this["webpackJsonpput--aside"]=this["webpackJsonpput--aside"]||[]).push([[0],{157:function(e,t,a){e.exports=a(292)},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},194:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(21),c=a.n(s),i=(a(162),a(63)),r=a(64),o=a(36),h=a(70),d=a(69),u=(a(163),a(48)),m=(a(164),a(80)),k=a(293),p=a(295),v=a(297),E=m.a.Option,g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={timeValue:5,inputValue:"",showStart:!1,tasks:[],data:[],enteredTask:{}},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({timeValue:e})}},{key:"handleInputChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleClick",value:function(){var e=0;if(null!==localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));0!==t.length&&(e=t[t.length-1].key)}var a={desc:this.state.inputValue,time:this.state.timeValue,key:e+1};this.setState({enteredTask:a,showStart:!0})}},{key:"render",value:function(){return this.state.showStart?l.a.createElement(j,{data:this.state}):l.a.createElement("div",{className:"Task"},l.a.createElement("p",null,"Hmm..! What task? How much time?"),l.a.createElement("div",{className:"Task-container"},l.a.createElement(k.a,null,l.a.createElement(p.a,{style:{width:250},placeholder:"Explain...",onChange:this.handleInputChange}),l.a.createElement(m.a,{placeholder:"Time",style:{width:90},onChange:this.handleChange},l.a.createElement(E,{value:"5"},"5 min"),l.a.createElement(E,{value:"10"},"10 min"),l.a.createElement(E,{value:"15"},"15 min"),l.a.createElement(E,{value:"30"},"30 min"),l.a.createElement(E,{value:"45"},"45 min"),l.a.createElement(E,{value:"60"},"60 min")),l.a.createElement(u.a,{type:"primary",icon:l.a.createElement(v.a,null),onClick:this.handleClick}))))}}]),a}(l.a.Component),b=a(154),f=a(107),C=(a(194),a(296)),S=a(92),w=a(294),y=a(298),O=m.a.Option,T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).columns=[{title:"Task",dataIndex:"task",key:"task"},{title:"Time",dataIndex:"time",key:"time"}],n.state={timeValue:5,inputValue:"",data:[],checkedTasks:[],showStart:!1,showTable:!1,selectedRowKeys:[]},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleClickHome=n.handleClickHome.bind(Object(o.a)(n)),n.handleSelectRow=n.handleSelectRow.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=JSON.parse(localStorage.getItem("tasks")),a=t.length;t.sort((function(e,t){return e.time-t.time}));for(var n=0,l=[],s=0;s<a;s++)(n+=Number(t[s].time))<=Number(e)&&l.push({task:t[s].desc,time:t[s].time,key:t[s].key});this.setState({timeValue:e,showTable:!0,data:l},(function(){}))}},{key:"handleClickHome",value:function(){this.setState({showStart:!0,showTable:!1})}},{key:"handleSelectRow",value:function(e,t){var a=this,n=t[t.length-1],l=Object(f.a)(this.state.data);C.b.success(n.task+" Completed!"),this.setState({data:l.filter((function(e){return e.task!==n.task}))},(function(){a.setState({checkedTasks:[].concat(Object(f.a)(a.state.checkedTasks),[n])})}))}},{key:"render",value:function(){var e=this,t={onChange:function(t,a){e.handleSelectRow(t,a)}};return this.state.showTable?l.a.createElement("div",{className:"RestTable"},l.a.createElement(S.a,{title:"Back Home"},l.a.createElement(u.a,{ghost:!0,icon:l.a.createElement(y.a,null),onClick:this.handleClickHome})),l.a.createElement("p",null,"I want to rest for ",this.state.timeValue," minutes!"),l.a.createElement(w.a,{rowSelection:Object(b.a)({type:"radio"},t),columns:this.columns,dataSource:this.state.data,showHeader:!1,pagination:!1})):this.state.showStart?l.a.createElement(j,{data:this.state}):l.a.createElement("div",{className:"Rest"},l.a.createElement(S.a,{title:"Back Home"},l.a.createElement(u.a,{ghost:!0,icon:l.a.createElement(y.a,null),onClick:this.handleClickHome})),l.a.createElement("p",null,"Great! How much?"),l.a.createElement("div",{className:"Task-container"},l.a.createElement(m.a,{placeholder:"Time",style:{width:118},onChange:this.handleChange},l.a.createElement(O,{value:"5"},"5 min"),l.a.createElement(O,{value:"10"},"10 min"),l.a.createElement(O,{value:"15"},"15 min"),l.a.createElement(O,{value:"30"},"30 min"),l.a.createElement(O,{value:"45"},"45 min"),l.a.createElement(O,{value:"60"},"60 min"))))}}]),a}(l.a.Component),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={showStart:!0,showRest:!1,tasks:[]},n.handleAddClick=n.handleAddClick.bind(Object(o.a)(n)),n.handleRestClick=n.handleRestClick.bind(Object(o.a)(n)),n.handleEnteredTask=n.handleEnteredTask.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){if(this.props.data&&(this.props.data.enteredTask&&this.handleEnteredTask(this.props.data.enteredTask),this.props.data.checkedTasks)){var e=JSON.parse(localStorage.getItem("tasks"));localStorage.removeItem("tasks"),this.props.data.checkedTasks.forEach((function(t){e=e.filter((function(e){return e.desc!==t.task}))})),localStorage.setItem("tasks",JSON.stringify(e))}}},{key:"handleEnteredTask",value:function(e){var t=localStorage.getItem("tasks"),a=[];t&&(a=JSON.parse(t)),a.push(e),localStorage.setItem("tasks",JSON.stringify(a))}},{key:"handleAddClick",value:function(){this.setState({showStart:!1})}},{key:"handleRestClick",value:function(){var e=this;this.setState({showStart:!1},(function(){e.setState({showRest:!0})}))}},{key:"render",value:function(){return this.state.showStart?l.a.createElement("div",{className:"Start"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"What do you want to do?"),l.a.createElement("div",{className:"Button-container"},l.a.createElement(u.a,{block:!0,ghost:!0,onClick:this.handleAddClick},"Add Task"),l.a.createElement(u.a,{type:"primary",block:!0,onClick:this.handleRestClick},"Rest")))):this.state.showRest?l.a.createElement(T,null):l.a.createElement(g,{data:this.state.tasks.length})}}]),a}(l.a.Component);a(291),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.1fadbc11.chunk.js.map