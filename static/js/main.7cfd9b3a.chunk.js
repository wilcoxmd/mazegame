(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,s){e.exports=s.p+"static/media/goomba.f5af6c3f.png"},12:function(e,t,s){e.exports=s(22)},18:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s.n(o),i=s(8),r=s.n(i),n=(s(18),s(1)),p=s(2),c=s(4),h=s(3),l=s(5),d=(s(20),s(11)),u=s(6),m=s(9),y=s.n(m),f=s(10),v=s.n(f),L=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={rowIndex:s.props.rowIndex,colIndex:s.props.colIndex,isPlayerLoc:!1,isSpriteLoc:!1},s}return Object(l.a)(t,e),Object(p.a)(t,[{key:"updateSprites",value:function(e,t){if(t&&t.isPlayerLoc&&this.setState({isPlayerLoc:!1}),this.props.playerLoc){var s=this.props.playerLoc[0],o=this.props.playerLoc[1],a=this.props.rowIndex,i=this.props.colIndex;a===s&&i===o&&!0!==this.state.isPlayerLoc&&(this.setState({isPlayerLoc:!0}),this.state.isSpriteLoc&&this.setState({isSpriteLoc:!1}))}if(this.props.spriteLocs)for(var r=this.props.spriteLocs,n="".concat(this.props.rowIndex,",").concat(this.props.colIndex),p=0;p<r.length;p++){if(r[p].join(",")===n&&!0!==this.state.isSpriteLoc){this.setState({isSpriteLoc:!0});break}r[p].join(",")===n&&!0===this.state.isSpriteLoc&&!0===this.state.isPlayerLoc&&this.setState({isSpriteLoc:!1})}}},{key:"componentDidMount",value:function(e,t){this.updateSprites(e,t)}},{key:"componentDidUpdate",value:function(e,t){this.updateSprites(e,t)}},{key:"render",value:function(){var e;return e=this.state.isSpriteLoc?v.a:"",e=this.state.isPlayerLoc?y.a:e,a.a.createElement("div",{style:{border:"1px solid grey",backgroundColor:"white",backgroundImage:'url("'.concat(e,'")'),backgroundSize:"cover",overflow:"hidden",width:40,height:40},className:this.activeClass})}}]),t}(a.a.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!this.props.playerLoc||e.playerLoc[0]===this.props.index||this.props.index===this.props.playerLoc[0]}},{key:"render",value:function(){for(var e=this.props.size,t=[],s=0;s<e[1];s++)t.push(a.a.createElement(L,{rowIndex:this.props.index,colIndex:s,playerLoc:this.props.playerLoc,spriteLocs:this.props.spriteLocs,key:[this.props.index,s].toString()}));return a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},className:"row"},t)}}]),t}(a.a.Component),w=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={playerLoc:void 0,spriteLocs:void 0,totalMoves:0},s.hanldeArrowPress=s.hanldeArrowPress.bind(Object(u.a)(Object(u.a)(s))),s}return Object(l.a)(t,e),Object(p.a)(t,[{key:"setupNewGame",value:function(){for(var e=this.props.size[0],t=this.props.size[1],s=[Math.floor(Math.random()*e),Math.floor(Math.random()*t)],o=new Set,a=0;a<this.props.size[0];a++){var i=Math.floor(Math.random()*this.props.size[0]),r=Math.floor(Math.random()*this.props.size[0]),n="".concat(i,",").concat(r);o.has(n)||i===s[0]&&r===s[1]?a--:o.add(n)}var p=Object(d.a)(o).map(function(e){e=e.split(",");for(var t=0;t<e.length;t++)e[t]=parseInt(e[t]);return e});this.setState({playerLoc:s,spriteLocs:p})}},{key:"componentDidUpdate",value:function(){if(this.state.playerLoc||0===this.props.size[0]||0===this.props.size[1]){if(this.state.spriteLocs)for(var e=this.state.spriteLocs,t=this.state.playerLoc.join(","),s=0;s<e.length;s++)if(t===e[s].join(",")){var o=Array.from(this.state.spriteLocs);o.splice(s,1),this.setState({spriteLocs:o}),console.log("removed sprite!")}}else this.setupNewGame()}},{key:"hanldeArrowPress",value:function(e){e=e||window.event;var t=this.state.playerLoc,s=t[0],o=t[1],a=this.state.totalMoves;38===e.keyCode?(console.log("up!"),--s<=-1&&(s=this.props.size[0]-1)):40===e.keyCode?(console.log("down!"),++s>=this.props.size[0]&&(s=0)):37===e.keyCode?(console.log("left!"),--o<=-1&&(o=this.props.size[1]-1)):39===e.keyCode&&(console.log("right!"),++o>=this.props.size[1]&&(o=0)),this.setState({playerLoc:[s,o],totalMoves:++a})}},{key:"render",value:function(){this.state.spriteLocs&&0===this.state.spriteLocs.length&&this.props.playingGame&&(alert("Nice work! You crushed those goombas in just ".concat(this.state.totalMoves," moves!")),this.props.handleGameOver());var e=this.props.size,t=[];document.onkeydown=this.hanldeArrowPress;for(var s=0;s<e[0];s++)t.push(a.a.createElement(g,{size:this.props.size,index:s,playerLoc:this.state.playerLoc,spriteLocs:this.state.spriteLocs}));return a.a.createElement("div",null,t)}}]),t}(a.a.Component),b=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleGameOver=function(){s.setState({playingGame:!1})},s.state={playingGame:!1,size:[0,0]},s}return Object(l.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){if(!this.state.playingGame){var e=window.prompt("Input game board width. \n(A number >= 1. 10 is a good start)"),t=window.prompt("Input game board height. \n(A number >= 1. 10 is a good start)");this.setState({playingGame:!0,size:[parseInt(e),parseInt(t)]})}}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"message",style:{width:400,marginRight:50}},a.a.createElement("h1",{style:{fontSize:24}},"Use the arrow keys to stomp those pesky goombas!")),a.a.createElement(w,{size:this.state.size,startingLoc:this.state.startingLoc,handleGameOver:this.handleGameOver,playingGame:this.state.playingGame}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,s){e.exports=s.p+"static/media/Paper-Mario-icon.c98f0c23.png"}},[[12,2,1]]]);
//# sourceMappingURL=main.7cfd9b3a.chunk.js.map