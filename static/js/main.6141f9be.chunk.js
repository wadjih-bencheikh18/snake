(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(6),r=n.n(s),i=(n(12),n(1)),c=n(2),l=n(4),u=n(3),h=(n(13),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(e){return o.a.createElement("div",null,this.props.snakeDots.map((function(e,t){return o.a.createElement("div",{className:"snake-dot",key:t,style:{left:2*e[0]+"%",top:2*e[1]+"%"}})})))}}]),n}(a.Component)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"snake-food",style:{left:this.props.FoodDots[0],top:this.props.FoodDots[1]}}))}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(e){return o.a.createElement("button",{onClick:this.props.onClick},o.a.createElement("h3",null,this.props.BTN))}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={direction:"PAUSE",speed:"100",snakeDots:[[0,0],[1,0],[2,0]],over:!1,score:1,FoodDots:[2*Math.floor(50*Math.random())+"%",2*Math.floor(50*Math.random())+"%"]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake.bind(this),this.state.speed),document.onkeydown=this.onkeydown.bind(this)}},{key:"onkeydown",value:function(e,t){switch((t=t||window.event).keyCode){case 38:this.setState({direction:"UP"});break;case 40:this.setState({direction:"DOWN"});break;case 37:this.setState({direction:"LEFT"});break;case 39:this.setState({direction:"RIGHT"});break;case 27:this.setState({direction:"PAUSE"})}}},{key:"moveSnake",value:function(){var e=this,t=this.state.snakeDots,n=t[t.length-1];switch(this.state.direction){case"RIGHT":n=[n[0]+1,n[1]];break;case"LEFT":n=[n[0]-1,n[1]];break;case"UP":n=[n[0],n[1]-1];break;case"DOWN":n=[n[0],n[1]+1]}50===n[0]&&(n[0]=0),50===n[1]&&(n[1]=0),-1===n[0]&&(n[0]=49),-1===n[1]&&(n[1]=49);var a=!1;2*n[0]+"%"===this.state.FoodDots[0]&&2*n[1]+"%"===this.state.FoodDots[1]&&(a=!0),a&&(this.setState({FoodDots:[2*Math.floor(50*Math.random())+"%",2*Math.floor(50*Math.random())+"%"]}),this.setState({score:this.state.score+1}),this.setState({speed:this.state.speed-1})),"PAUSE"!==this.state.direction&&(t.map((function(t){return t[0]===n[0]&&t[1]===n[1]&&e.setState({over:!0}),!0})),t.push(n),a||t.shift(),this.setState({snakeDots:t}))}},{key:"render",value:function(){var e=this;return this.state.over?o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"GAME OVER"),o.a.createElement("h1",null,"Your Score is : ",this.state.score)):o.a.createElement("div",null,o.a.createElement("h1",null,"Score : ",this.state.score),o.a.createElement("div",{className:"App"},o.a.createElement(h,{snakeDots:this.state.snakeDots}),o.a.createElement(d,{FoodDots:this.state.FoodDots})),o.a.createElement(m,{BTN:"UP",onClick:function(){return e.setState({direction:"UP"})}}),o.a.createElement("br",null),o.a.createElement(m,{BTN:"LEFT",onClick:function(){return e.setState({direction:"LEFT"})}}),o.a.createElement(m,{BTN:"RIGHT",onClick:function(){return e.setState({direction:"RIGHT"})}}),o.a.createElement("br",null),o.a.createElement(m,{BTN:"DOWN",onClick:function(){return e.setState({direction:"DOWN"})}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6141f9be.chunk.js.map