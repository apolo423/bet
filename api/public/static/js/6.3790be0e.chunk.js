(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1526:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),s=a(9),c=a(8),l=a(10),i=a(0),o=a.n(i),u=a(1),m=a(35),p=a(20),d=a(15),h=a(168),E=a(19),b=a(562),f=a(17),v=a(251),g=a(37),y=a(25),S="[USERS APP] GET USERS",N="[USERS APP] SET SEARCH TEXT",U="[USERS APP] TOGGLE IN SELECTED USERS",j="[USERS APP] SELECT ALL USERS",O="[USERS APP] DESELECT ALL USERS",w="[USERS APP] OPEN NEW USER DIALOG",A="[USERS APP] CLOSE NEW USER DIALOG",P="[USERS APP] OPEN EDIT USER DIALOG",C="[USERS APP] CLOSE EDIT USER DIALOG",x="[USERS APP] ADD USER",D="[USERS APP] UPDATE USER",I="[USERS APP] REMOVE USER",T="[USERS APP] REMOVE USERS";function k(e){var t="";switch(console.log(e.id),e.id){case"active":t="/auth/getActiveAccountData";break;case"inactive":t="/auth/getInactiveAccountData";break;case"closed":t="/auth/getClosedAccountData";break;case"restricted":t="/auth/getRestrictedAccountData";break;default:t="/auth/getAllAccountData"}return function(a){return y.b.get(t,{}).then(function(t){a({type:S,payload:t.data.doc,routeParams:e})})}}function R(e){return{type:N,searchText:e.target.value}}function B(e){return{type:U,userId:e}}function _(){return{type:j}}function L(){return{type:O}}function M(){return{type:w}}function W(){return{type:A}}function H(e){return{type:P,data:e}}function G(){return{type:C}}function q(e){return function(t,a){var n=a().usersApp.users,r=n.routeParams,s=n.userDialog;return y.b.post("/auth/addAccountData",{newAccount:e}).then(function(e){e.data.success?Promise.all([t({type:x}),t({type:"new"===s.type?A:C})]).then(function(){return t(k(r))}):Promise.all([t(g.j({message:e.data.message}))]).then(function(){return t({type:x})})})}}function K(e){return function(t,a){var n=a().usersApp.users,r=n.routeParams,s=n.userDialog;return y.b.post("/auth/updateAccountData",{user:e}).then(function(e){e.data.success?Promise.all([t({type:D}),t({type:"new"===s.type?A:C})]).then(function(){return t(k(r))}):Promise.all([t(g.j({message:e.data.message}))]).then(function(){return t({type:D})})})}}function F(e){return function(t,a){var n=a().usersApp.users.routeParams;return y.b.post("/auth/removeAccountData",{accountId:e}).then(function(e){return Promise.all([t({type:I})]).then(function(){return t(k(n))})})}}function z(e){return function(t,a){var n=a().usersApp.users.routeParams;return y.b.post("/auth/removeAccountsData",{accountIds:e}).then(function(e){return Promise.all([t({type:T}),t({type:O})]).then(function(){return t(k(n))})})}}var J=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={selectedUsersMenu:null,data:[]},a.getFilteredArray=function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:p.s.filterArrayByString(a,t)},a.openSelectedUserMenu=function(e){a.setState({selectedUsersMenu:e.currentTarget})},a.closeSelectedUsersMenu=function(){a.setState({selectedUsersMenu:null})},a.resetPassword=function(e){y.b.post("/auth/resetPassword",{accountId:e}),alert("Successfully reset password.")},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.users,n=t.searchText,r=t.selectedUserIds,s=t.selectAllUsers,c=t.deSelectAllUsers,l=t.toggleInSelectedUsers,i=t.openEditUserDialog,m=t.removeUsers,d=t.removeUser,h=this.getFilteredArray(a,n),E=this.state.selectedUsersMenu;return h||0!==h.length?o.a.createElement(p.a,{animation:"transition.slideUpIn",delay:300},o.a.createElement(v.b,{className:"-striped -highlight border-0",getTrProps:function(e,t,a){return{className:"cursor-pointer",onClick:function(e,a){t&&i(t.original)}}},data:h,columns:[{Header:function(){return o.a.createElement(u.h,{onClick:function(e){e.stopPropagation()},onChange:function(e){e.target.checked?s():c()},checked:r.length===Object.keys(a).length&&r.length>0,indeterminate:r.length!==Object.keys(a).length&&r.length>0})},accessor:"",Cell:function(e){return o.a.createElement(u.h,{onClick:function(e){e.stopPropagation()},checked:r.includes(e.value._id),onChange:function(){return l(e.value._id)}})},className:"justify-center",sortable:!1,width:64},{Header:function(){return r.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.C,{"aria-owns":E?"selectedUsersMenu":null,"aria-haspopup":"true",onClick:e.openSelectedUserMenu},o.a.createElement(u.B,null,"more_horiz")),o.a.createElement(u.M,{id:"selectedUsersMenu",anchorEl:E,open:Boolean(E),onClose:e.closeSelectedUsersMenu},o.a.createElement(u.O,null,o.a.createElement(u.N,{onClick:function(){m(r),e.closeSelectedUsersMenu()}},o.a.createElement(u.J,null,o.a.createElement(u.B,null,"delete")),o.a.createElement(u.K,{inset:!0,primary:"Remove"})))))},accessor:"avatar",Cell:function(e){return e.page*e.pageSize+e.index+1},className:"justify-center",width:64,sortable:!1},{Header:"PhoneNumber",accessor:"phonenumber",filterable:!0,className:"font-bold"},{Header:"Balance",accessor:"balance",filterable:!0,className:"font-bold"},{Header:"Role",accessor:"role",filterable:!0},{Header:"Account Status",accessor:"account_status",filterable:!0},{Header:"",width:160,Cell:function(t){return o.a.createElement("div",{className:"flex items-center"},o.a.createElement(u.C,{onClick:function(a){a.stopPropagation(),window.confirm("Are you sure to reset password to 'protectwealth'?")&&e.resetPassword(t.original._id)}},o.a.createElement(u.B,null,"enhanced_encryption")),o.a.createElement(u.C,{onClick:function(e){e.stopPropagation(),window.confirm("Are you sure to delete it?")&&d(t.original._id)}},o.a.createElement(u.B,null,"delete")))}}],defaultPageSize:10,noDataText:"No users found"})):o.a.createElement("div",{className:"flex items-center justify-center h-full"},o.a.createElement(u.fb,{color:"textSecondary",variant:"h5"},"No users found"))}}]),t}(i.Component);var Q=Object(h.g)(Object(E.b)(function(e){var t=e.usersApp;return{users:t.users.entities,selectedUserIds:t.users.selectedUserIds,searchText:t.users.searchText,user:t.user}},function(e){return Object(d.c)({getUsers:k,toggleInSelectedUsers:B,selectAllUsers:_,deSelectAllUsers:L,openEditUserDialog:H,removeUsers:z,removeUser:F},e)})(J)),V=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setSearchText,a=e.searchText,n=(e.pageLayout,e.mainTheme);return o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},o.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},o.a.createElement(m.MuiThemeProvider,{theme:n},o.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(u.Q,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},o.a.createElement(u.B,{className:"mr-8",color:"action"},"search"),o.a.createElement(u.D,{placeholder:"Search for anything",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:t}))))))}}]),t}(i.Component);var X=Object(E.b)(function(e){var t=e.usersApp,a=e.fuse;return{searchText:t.users.searchText,mainTheme:a.settings.mainTheme}},function(e){return Object(d.c)({setSearchText:R},e)})(V),Y=a(16),Z=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:"p-16 lg:p-24 lg:pr-4"},o.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:200},o.a.createElement(u.Q,{elevation:1,className:"rounded-8"},o.a.createElement(u.p,null),o.a.createElement(u.H,null,o.a.createElement(u.I,{button:!0,component:Y.b,to:"/users/all",activeClassName:"active",className:e.listItem},o.a.createElement(u.B,{className:"list-item-icon text-16",color:"action"},"people"),o.a.createElement(u.K,{className:"truncate pr-0",primary:"All accounts",disableTypography:!0})),o.a.createElement(u.I,{button:!0,component:Y.b,to:"/users/active",activeClassName:"active",className:e.listItem},o.a.createElement(u.B,{className:"list-item-icon text-16",color:"action"},"check_circle"),o.a.createElement(u.K,{className:"truncate pr-0",primary:"Active accounts",disableTypography:!0})),o.a.createElement(u.I,{button:!0,component:Y.b,to:"/users/inactive",activeClassName:"active",className:e.listItem},o.a.createElement(u.B,{className:"list-item-icon text-16",color:"action"},"contact_support"),o.a.createElement(u.K,{className:"truncate pr-0",primary:"Inactive accounts",disableTypography:!0})),o.a.createElement(u.I,{button:!0,component:Y.b,to:"/users/closed",activeClassName:"active",className:e.listItem},o.a.createElement(u.B,{className:"list-item-icon text-16",color:"action"},"close"),o.a.createElement(u.K,{className:"truncate pr-0",primary:"Closed accounts",disableTypography:!0})),o.a.createElement(u.I,{button:!0,component:Y.b,to:"/users/restricted",activeClassName:"active",className:e.listItem},o.a.createElement(u.B,{className:"list-item-icon text-16",color:"action"},"access_time"),o.a.createElement(u.K,{className:"truncate pr-0",primary:"Restricted accounts",disableTypography:!0}))))))}}]),t}(i.Component);Object(m.withStyles)(function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}}}}},{withTheme:!0})(Object(h.g)(Object(E.b)(function(e){return{user:e.usersApp.user}},function(e){return Object(d.c)({},e)})(Z)));var $=a(13),ee=a(253),te=a.n(ee),ae=a(252),ne=a.n(ae),re={_id:"",user_name:"",email:"",role:"",account_type:"",membership:"",account_status:"",start_time:Date(),end_time:Date(),avatar:"assets/images/avatars/profile.jpg"},se=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state=Object($.a)({},re),a.handleChange=function(e){a.setState(f.a.set(Object($.a)({},a.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},a.closeComposeDialog=function(){"edit"===a.props.userDialog.type?a.props.closeEditUserDialog():a.props.closeNewUserDialog()},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.userDialog.props.open&&this.props.userDialog.props.open&&("edit"===this.props.userDialog.type&&this.props.userDialog.data&&!f.a.isEqual(this.props.userDialog.data,t)&&this.setState(Object($.a)({},this.props.userDialog.data)),"new"!==this.props.userDialog.type||f.a.isEqual(re,t)||this.setState(Object($.a)({},re)),this.setState({password:""}))}},{key:"canBeSubmitted",value:function(){return!0}},{key:"render",value:function(){var e=this,t=this.props,a=t.userDialog,n=t.addUser,r=t.updateUser,s=t.removeUser;return o.a.createElement(u.l,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:this.closeComposeDialog,fullWidth:!0,maxWidth:"sm"}),o.a.createElement(u.a,{position:"static",elevation:1},o.a.createElement(u.db,{className:"flex w-full"},o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New User":"Edit User")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},o.a.createElement(u.b,{className:"w-96 h-96",alt:"user avatar",src:this.state.avatar&&""!==this.state.avatar?this.state.avatar:"assets/images/avatars/profile.jpg"}),"edit"===a.type&&o.a.createElement(u.fb,{variant:"h6",color:"inherit",className:"pt-8"},this.state.user_name))),o.a.createElement(u.n,{classes:{root:"p-24"}},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(u.B,{color:"action"},"account_circle")),o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit",className:"min-w-160 pt-20"},"PhoneNumber")),o.a.createElement("br",null),o.a.createElement("div",{className:"flex"},o.a.createElement(u.cb,{className:"mb-24",label:"PhoneNumber",autoFocus:!0,id:"user_name",name:"user_name",value:this.state.phonenumber,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0,disabled:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(u.B,{color:"action"},"Balance")),o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit",className:"min-w-160 pt-20"},"Balance")),o.a.createElement("br",null),o.a.createElement("div",{className:"flex"},o.a.createElement(u.cb,{className:"mb-24",label:"Balance",id:"balance",name:"balance",value:this.state.balance,onChange:this.handleChange,variant:"outlined",fullWidth:!0,required:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(u.B,{color:"action"},"vpn_key")),o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit",className:"min-w-160 pt-20"},"Password")),o.a.createElement("br",null),o.a.createElement("div",{className:"flex"},o.a.createElement(u.cb,{className:"mb-24",label:"Password",type:"password",id:"password",name:"password",onChange:this.handleChange,variant:"outlined",fullWidth:!0,required:!0})),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(u.B,{color:"action"},"accessibility")),o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit",className:"min-w-160 pt-20"},"Role")),o.a.createElement("br",null),o.a.createElement("div",{className:"flex"},o.a.createElement(te.a,{className:"mb-24",native:!0,value:this.state.role,onChange:this.handleChange,input:o.a.createElement(ne.a,{name:"role",labelWidth:0,id:"role"}),fullWidth:!0},o.a.createElement("option",{value:"admin"},"admin"),o.a.createElement("option",{value:"user"},"user"))),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"min-w-48 pt-20"},o.a.createElement(u.B,{color:"action"},"people_outline")),o.a.createElement(u.fb,{variant:"subtitle1",color:"inherit",className:"min-w-160 pt-20"},"Account Status")),o.a.createElement("br",null),o.a.createElement("div",{className:"flex"},o.a.createElement(te.a,{className:"mb-24",native:!0,value:this.state.account_status,onChange:this.handleChange,input:o.a.createElement(ne.a,{name:"account_status",labelWidth:0,id:"account_status"}),fullWidth:!0},o.a.createElement("option",{value:"Active"},"Active"),o.a.createElement("option",{value:"Inactive"},"Inactive"),o.a.createElement("option",{value:"Closed"},"Closed"),o.a.createElement("option",{value:"Restricted"},"Restricted")))),"new"===a.type?o.a.createElement(u.m,{className:"justify-between pl-16"},o.a.createElement(u.c,{variant:"contained",color:"primary",onClick:function(){n(e.state)},disabled:!this.canBeSubmitted()},"Add")):o.a.createElement(u.m,{className:"justify-between pl-16"},o.a.createElement(u.c,{variant:"contained",color:"primary",onClick:function(){r(e.state)},disabled:!this.canBeSubmitted()},"Save"),o.a.createElement(u.C,{onClick:function(){window.confirm("Are you sure to delete it?")&&s(e.state._id)}},o.a.createElement(u.B,null,"delete"))))}}]),t}(i.Component);var ce=Object(E.b)(function(e){return{userDialog:e.usersApp.users.userDialog}},function(e){return Object(d.c)({closeEditUserDialog:G,closeNewUserDialog:W,addUser:q,updateUser:K,removeUser:F},e)})(se),le=a(47),ie={entities:[],searchText:"",selectedUserIds:[],routeParams:{},userDialog:{type:"new",props:{open:!1},data:null}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object($.a)({},e,{entities:t.payload,routeParams:t.routeParams});case N:return Object($.a)({},e,{searchText:t.searchText});case U:var a=t.userId,n=Object(le.a)(e.selectedUserIds);return n=void 0!==n.find(function(e){return e===a})?n.filter(function(e){return e!==a}):[].concat(Object(le.a)(n),[a]),Object($.a)({},e,{selectedUserIds:n});case j:var r=Object.keys(e.entities).map(function(t){return e.entities[t]}).map(function(e){return e._id});return Object($.a)({},e,{selectedUserIds:r});case O:return Object($.a)({},e,{selectedUserIds:[]});case w:return Object($.a)({},e,{userDialog:{type:"new",props:{open:!0},data:null}});case A:return Object($.a)({},e,{userDialog:{type:"new",props:{open:!1},data:null}});case P:return Object($.a)({},e,{userDialog:{type:"edit",props:{open:!0},data:t.data}});case C:return Object($.a)({},e,{userDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},ue=Object(d.d)({users:oe}),me=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.match.params)}},{key:"componentDidUpdate",value:function(e,t){f.a.isEqual(this.props.location,e.location)||this.props.getUsers(this.props.match.params)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.openNewUserDialog;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.m,{classes:{contentCardWrapper:"p-16 sm:p-24 pb-80",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",content:a.content},header:o.a.createElement(X,{pageLayout:function(){return e.pageLayout}}),content:o.a.createElement(Q,null),sidebarInner:!0,onRef:function(t){e.pageLayout=t},innerScroll:!0}),o.a.createElement(p.a,{animation:"transition.expandIn",delay:300},o.a.createElement(u.r,{color:"primary","aria-label":"add",className:a.addButton,onClick:n},o.a.createElement(u.B,null,"person_add"))),o.a.createElement(ce,null))}}]),t}(i.Component);t.default=Object(b.a)("usersApp",ue)(Object(m.withStyles)(function(e){return{content:{},addButton:{position:"absolute",right:12,bottom:12,zIndex:99}}},{withTheme:!0})(Object(h.g)(Object(E.b)(function(e){var t=e.usersApp;return{users:t.users.entities,selectedUserIds:t.users.selectedUserIds,searchText:t.users.searchText,user:t.user}},function(e){return Object(d.c)({getUsers:k,openNewUserDialog:M},e)})(me))))}}]);