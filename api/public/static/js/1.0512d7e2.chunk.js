(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1514:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(7),r=a(9),s=a(8),i=a(10),c=a(0),l=a.n(c),u=a(20),d=a(19),h=a(1),p=a(35),m=a(68),f=a(3),b=a.n(f),g=a(15),y=a(25),v=a(37),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={finish:!1},a.fetchData=function(e){y.b.get("/courses/contents",{params:e}).then(function(t){if(!t.data.success)return a.props.showMessage({message:"Get Course Failed"}),void a.props.history.push({pathname:"/courses"});var n={};t.data.data.contents.forEach(function(t){t._id===e.contentId&&(n=t)}),""===n.file&&a.props.showMessage({message:"No videos."}),a.setState({course:t.data.data,content:n})})},a.finish=function(){var e=a.props.match.params;e.userId=a.props.user.userId,y.b.post("/activity/finish",e).then(function(t){a.props.history.push({pathname:"/courses/detail/"+e.courseId})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(this.props.match.params)}},{key:"componentDidUpdate",value:function(e){e.location.pathname!==this.props.location.pathname&&this.fetchData(this.props.match.params)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.course,o=a.content;return n&&o?l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(u.a,{animation:"transition.slideUpIn",delay:300},l.a.createElement(h.d,{className:b()(t.card,t.root,"w-full h-full p-16")},l.a.createElement(h.g,{action:l.a.createElement(h.C,{"aria-label":"settings"}),title:n.name,subheader:o.name,classes:{title:t.title,subheader:t.subheader}}),l.a.createElement("video",{src:"".concat(y.a,"/uploads/").concat(n._id,"/").concat(o.file,"?").concat(Date.now()),style:{width:"100%",height:"calc(100% - 250px)",background:"black"},controls:!0,autoPlay:!0}),l.a.createElement(h.f,null,l.a.createElement(h.fb,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(h.e,null,l.a.createElement(h.C,{"aria-label":"add to favorites"},l.a.createElement(h.B,null,"favorite")),l.a.createElement(h.c,{variant:"contained",color:"primary",style:{position:"absolute",right:"10px",background:"linear-gradient(219deg, #867631 0%, #d8c884 73%, #d8c884d1 110%)"},value:"legacy",onClick:function(){return e.setState({finish:!0})}},"Finish")),l.a.createElement(h.l,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs","aria-labelledby":"confirmation-dialog-title",open:this.state.finish},l.a.createElement(h.o,{id:"confirmation-dialog-title"},"FINISHED?"),l.a.createElement(h.m,null,l.a.createElement(h.c,{autoFocus:!0,color:"primary",onClick:this.finish},"Yes"),l.a.createElement(h.c,{color:"primary",onClick:function(){return e.setState({finish:!1})}},"No")))))):l.a.createElement("div",{className:"flex items-center justify-center h-full"},l.a.createElement(h.fb,{color:"textSecondary",variant:"h5"},"No section found"))}}]),t}(c.Component);t.default=Object(p.withStyles)(function(e){return{root:{background:"black",overflow:"auto"},title:{color:"white"},subheader:{color:"#9c9fa9"},card:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:m.red[500]}}},{withTheme:!0})(Object(d.b)(function(e){return{user:e.auth.user}},function(e){return Object(g.c)({showMessage:v.j},e)})(E))}}]);