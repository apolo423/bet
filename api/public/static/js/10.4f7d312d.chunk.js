(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1289:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(11)),i=n(a(0)),l=(n(a(2)),n(a(14))),o=n(a(60)),c={root:{lineHeight:1.5}};t.styles=c;var s=(0,l.default)(c,{name:"MuiDialogContentText"})(function(e){return i.default.createElement(o.default,(0,r.default)({component:"p",internalDeprecatedVariant:!0,variant:"subheading",color:"textSecondary"},e))});t.default=s},1301:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(11)),i=n(a(21)),l=n(a(12)),o=n(a(0)),c=(n(a(2)),n(a(3))),s=(a(22),n(a(1302))),d=n(a(14)),u=n(a(177)),m=a(46),f=function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:hover":{color:e.palette.text.primary},"&:focus":{color:e.palette.text.primary}},active:{color:e.palette.text.primary,"& $icon":{opacity:1}},icon:{height:16,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none",width:16},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}};function p(e){var t=e.active,a=e.children,n=e.classes,s=e.className,d=e.direction,f=e.hideSortIcon,p=e.IconComponent,h=(0,l.default)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return o.default.createElement(u.default,(0,r.default)({className:(0,c.default)(n.root,(0,i.default)({},n.active,t),s),component:"span",disableRipple:!0},h),a,f&&!t?null:o.default.createElement(p,{className:(0,c.default)(n.icon,n["iconDirection".concat((0,m.capitalize)(d))])}))}t.styles=f,p.defaultProps={active:!1,direction:"desc",hideSortIcon:!1,IconComponent:s.default};var h=(0,d.default)(f,{name:"MuiTableSortLabel"})(p);t.default=h},1302:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(173)),l=n(a(72)),o=r.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),c=function(e){return r.default.createElement(l.default,e,o)};(c=(0,i.default)(c)).muiName="SvgIcon";var s=c;t.default=s},1532:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(9),l=a(8),o=a(10),c=a(0),s=a.n(c),d=a(25),u=a(1),m=a(35),f=a(20),p=a(150),h=a.n(p),v=a(152),y=a.n(v),b=a(560),g=a.n(b),E=a(78),w=a.n(E),S=a(151),C=a.n(S),x=a(137),j=a.n(x),O=a(172),k=a.n(O),_=a(36),N=a.n(_),P=a(366),A=a.n(P),D=a(362),q=a.n(D),M=a(363),R=a.n(M),T=a(364),F=a.n(T),B=a(558),I=a.n(B),L=a(365),W=a.n(L),H=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,type:"",row:{_id:"",title:"",subtitle:"",description:""}},a.handleClickOpen=function(){a.setState({open:!0,row:a.props.row,type:a.props.type})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){var n=a.state.row;n[e]=t.target.value,a.setState({row:n})}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({row:this.props.row,type:this.props.type})}},{key:"render",value:function(){var e=this,t=this.props,a=t.onSave,n=t.onRemove;return s.a.createElement("div",null,"edit"===this.state.type&&s.a.createElement("div",null,s.a.createElement(u.C,{onClick:function(t){t.stopPropagation(),e.handleClickOpen()}},s.a.createElement(u.B,null,"edit_attributes")),s.a.createElement(u.C,{onClick:function(t){t.stopPropagation(),window.confirm("Are you sure to remove this faq?")&&n(e.state.row)}},s.a.createElement(u.B,{type:"small"},"delete"))),"add"===this.state.type&&s.a.createElement("div",{className:"flex items-center justify-end"},s.a.createElement(N.a,{className:"normal-case",variant:"contained",color:"primary","aria-label":"Add Message",onClick:function(t){t.stopPropagation(),e.handleClickOpen()}},"Add Message")),s.a.createElement(q.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},s.a.createElement(W.a,{id:"form-dialog-title"},"Feedback"),s.a.createElement(F.a,null,s.a.createElement(I.a,null,"To edit to this FAQ, please enter description here."),s.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Title",value:this.state.row.title,onChange:this.handleChange("title"),variant:"outlined",fullWidth:!0}),s.a.createElement(A.a,{margin:"dense",id:"subtitle",name:"subtitle",label:"Subtitle",value:this.state.row.subtitle,onChange:this.handleChange("subtitle"),variant:"outlined",fullWidth:!0}),s.a.createElement(A.a,{margin:"dense",id:"description",name:"description",label:"Description",value:this.state.row.description,onChange:this.handleChange("description"),variant:"outlined",multiline:!0,rows:7,fullWidth:!0})),s.a.createElement(R.a,null,s.a.createElement(N.a,{onClick:function(t){e.handleClose(),a(e.state.row,e.state.type)},color:"secondary"},"edit"===this.state.type&&"Save","add"===this.state.type&&"Add"),s.a.createElement(N.a,{onClick:this.handleClose,color:"secondary"},"Cancel"))))}}]),t}(s.a.Component);function Q(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var z=[{id:"title",numeric:!1,disablePadding:!0,label:"Title"},{id:"subtitle",numeric:!1,disablePadding:!1,label:"Subtitle"},{id:"description",numeric:!1,disablePadding:!1,label:"Description"},{id:"action",numeric:!1,disablePadding:!1,label:"Action"}],J=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.orderBy;return s.a.createElement(C.a,null,s.a.createElement(j.a,null,z.map(function(t){return s.a.createElement(w.a,{key:t.id,align:"center",padding:t.disablePadding?"none":"default",sortDirection:n===t.id&&a},s.a.createElement(u.eb,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},s.a.createElement(g.a,{active:n===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(s.a.Component),V=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={searchText:"",rows:[],order:"asc",orderBy:"title"},a.setSearchText=function(e){a.setState({searchText:e.target.value})},a.handleSave=function(e,t){var n=a.state.rows,r=[];console.log(e),"edit"===t?(d.b.post("/faq/updateFaq",{row:e}),n.forEach(function(t,a){t._id!==e._id?r.push(t):r.push(e)})):(d.b.post("/faq/addFaq",{row:e}).then(function(t){return e._id=t.data.doc._id}),(r=n).push(e)),console.log(r),a.setState({rows:r})},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleRemove=function(e){var t=a.state.rows,n=[];d.b.post("/faq/removeFaq",{row:e}),t.forEach(function(t,a){t._id!==e._id&&n.push(t)}),a.setState({rows:n})},a.getFilteredArray=function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:f.s.filterArrayByString(a,t)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.b.post("/faq/getAllFaqs",{}).then(function(t){e.setState({rows:t.data.doc})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.order,r=a.orderBy,i=this.getFilteredArray(this.state.rows,this.state.searchText);return i=function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(i,function(e,t){return"desc"===e?function(e,a){return Q(e,a,t)}:function(e,a){return-Q(e,a,t)}}(n,r)),s.a.createElement("div",null,s.a.createElement("div",{className:"p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-center"},s.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},s.a.createElement(f.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(u.fb,{className:"md:ml-24",variant:"h4",color:"inherit"},"FAQ"))),s.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},s.a.createElement(f.a,{animation:"transition.slideLeftIn",delay:300},s.a.createElement(k.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},s.a.createElement(u.B,{className:"mr-8",color:"action"},"search"),s.a.createElement(u.D,{placeholder:"Search for anything",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:this.state.searchText,inputProps:{"aria-label":"Search"},onChange:this.setSearchText})))),s.a.createElement(H,{type:"add",onSave:this.handleSave,onRemove:this.handleRemove,row:{_id:"",title:"",subtitle:"",description:""}})),s.a.createElement(k.a,{className:t.root},s.a.createElement(h.a,{className:t.table},s.a.createElement(J,{order:n,orderBy:r,onRequestSort:this.handleRequestSort}),s.a.createElement(y.a,null,i.map(function(t){return s.a.createElement(j.a,{key:t._id},s.a.createElement(w.a,{component:"th",scope:"row"},t.title),s.a.createElement(w.a,{align:"left"},t.subtitle),s.a.createElement(w.a,{align:"left"},t.description),s.a.createElement(w.a,{align:"center"},s.a.createElement(H,{type:"edit",onSave:e.handleSave,onRemove:e.handleRemove,row:t})))}),0===i.length&&s.a.createElement(j.a,null,s.a.createElement(w.a,{align:"center"},"'No FAQs.'"))))))}}]),t}(c.Component);t.default=Object(m.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(V)},558:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(1289))},560:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(1301))}}]);