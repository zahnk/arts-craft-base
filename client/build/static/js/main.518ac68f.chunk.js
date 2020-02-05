(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),s=a.n(l),c=(a(79),a(80),a(6)),o=a(7),i=a(9),m=a(8),u=a(10),p=(a(81),a(30)),h=a(112),f=a(108),E=a(67),d=a(68),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).closeAbout=function(){e.props.close()},e.state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.show?r.a.createElement(h.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.show,onHide:this.closeAbout},r.a.createElement(h.a.Header,{className:"bg-primary text-light"},r.a.createElement(h.a.Title,null,"ARTS-CRAFT-BASE v.2.0")),r.a.createElement(h.a.Body,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{sm:4},r.a.createElement("img",{src:"../../arts_craft_base_logo.svg",width:"50%",alt:"logo"})),r.a.createElement(E.a,{sm:8},r.a.createElement("h4",null,"Administration Tool"),r.a.createElement("br",null),r.a.createElement("p",null,"This tool can administrate all materials as components for your craft projects and the projects themselves."),r.a.createElement("p",null,"Components can be created and configured by using generic templates, that also can be build by your own, to be more flexible!"))),r.a.createElement("hr",null),r.a.createElement("p",null,"(c) 2020 by ",r.a.createElement("em",null,"Juliane Trapp")," & ",r.a.createElement("em",null,"Susanne Vogl")," & ",r.a.createElement("em",null,"Kai Zahn")," & ",r.a.createElement("em",null,"Dirk Biermann"))),r.a.createElement(h.a.Footer,null,r.a.createElement(d.a,{size:"lg",variant:"dark",onClick:this.closeAbout},r.a.createElement("i",{className:"fas fa-times fa-m-a"}),"Close"))):null}}]),t}(n.Component),b=a(115),j=a(116),v=a(113),y=a(15),O=a.n(y),w=function(e,t){return O.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(e,t){return O.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},C=(a(32),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).showAbout=function(){console.log("ShowAbout"),e.setState({showAbout:!0})},e.hideAbout=function(){console.log("HideAbout"),e.setState({showAbout:!1})},e.handleLogout=function(){O.a.delete("/api/auth/logout"),e.props.setUser(null)},e.state={showAbout:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{collapseOnSelect:!0,expand:"xl",bg:"dark",variant:"dark",fixed:"top",style:{textAlign:"left"}},r.a.createElement(b.a.Brand,null,r.a.createElement("img",{alt:"arts-craft-base logo",src:"../arts_craft_base_logo.svg",width:"30",height:"30",className:"App-logo d-inline-block align-top"})," ","ARTS-CRAFT-BASE"),r.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),this.props.user?r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(j.a,{className:"mr-auto"},r.a.createElement(j.a.Link,{href:"/"},r.a.createElement("i",{className:"fas fa-home fa-lg fa-m-a"}),"Home"),r.a.createElement(v.a,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-sitemap fa-lg fa-m-a"}),"Project"),id:"collasible-nav-dropdown"},r.a.createElement(v.a.Item,{href:"/projects"},r.a.createElement("i",{className:"fas fa-list fa-a"}),"All Projects"),r.a.createElement(v.a.Divider,null),r.a.createElement(v.a.Item,{href:"/project/create"},r.a.createElement("i",{className:"far fa-plus-square fa-a"}),"Create new Project")),r.a.createElement(v.a,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-square fa-lg fa-m-a"}),"Component"),id:"collasible-nav-dropdown"},r.a.createElement(v.a.Item,{href:"/components"},r.a.createElement("i",{className:"fas fa-list fa-a"}),"All Components"),r.a.createElement(v.a.Divider,null),r.a.createElement(v.a.Item,{href:"/components/create"},r.a.createElement("i",{className:"far fa-plus-square fa-a"}),"Create new Component")),r.a.createElement(v.a,{title:r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-square fa-lg fa-m-a"}),"Template"),id:"collasible-nav-dropdown"},r.a.createElement(v.a.Item,{href:"/templates"},r.a.createElement("i",{className:"fas fa-list fa-a"}),"All Templates"),r.a.createElement(v.a.Divider,null),r.a.createElement(v.a.Item,{href:"/templates"},r.a.createElement("i",{className:"far fa-plus-square fa-a"}),"Create new Template")),r.a.createElement(b.a.Text,{style:{padding:"5px 0px"}})),r.a.createElement(j.a,null,r.a.createElement(b.a.Text,null,r.a.createElement("span",{className:"abtSignedIn"},"[Signed in as: ",r.a.createElement("em",null,this.props.user.username),"]")),r.a.createElement(b.a.Text,{style:{padding:"0px 10px"}}),r.a.createElement(j.a.Link,{onClick:this.handleLogout},r.a.createElement("i",{className:"fas fa-sign-out-alt fa-lg fa-m-a"}),"Logout"),r.a.createElement(j.a.Link,{onClick:this.showAbout},r.a.createElement("i",{className:"fas fa-info-circle fa-lg fa-m-a"}),"About"))):r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(j.a,{className:"mr-auto"},r.a.createElement(j.a.Link,{href:"/"},r.a.createElement("i",{className:"fas fa-home fa-lg fa-m-a"}),"Home"),r.a.createElement(b.a.Text,{style:{padding:"0px"}})),r.a.createElement(j.a,null,r.a.createElement(j.a.Link,{href:"/signup"},r.a.createElement("i",{className:"fas fa-user-plus fa-lg fa-m-a"}),"Signup"),r.a.createElement(j.a.Link,{href:"/login"},r.a.createElement("i",{className:"fas fa-sign-in-alt fa-lg fa-m-a"}),"Login"),r.a.createElement(j.a.Link,{onClick:this.showAbout},r.a.createElement("i",{className:"fas fa-info-circle fa-lg fa-m-a"}),"About")))),r.a.createElement(g,{show:this.state.showAbout,close:this.hideAbout}))}}]),t}(n.Component)),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{bg:"dark",variant:"dark",fixed:"bottom",style:{textAlign:"left"}},r.a.createElement(b.a.Brand,{className:"icons",style:{fontSize:"0.9rem",color:"rgb(255,255,255,0.5)",padding:"0rem"}},r.a.createElement("img",{alt:"s logo",src:"../n-logo_w_s.png",className:"d-inline-block align-top"}),"  ",r.a.createElement("img",{alt:"s logo",src:"../s-logo_w_s.png",className:"d-inline-block align-top"})," ",r.a.createElement("img",{alt:"a logo",src:"../a-logo_w_s.png",className:"d-inline-block align-top"}),"  ",r.a.createElement("img",{alt:"p logo",src:"../p-logo_w_s.png",className:"d-inline-block align-top"})," ",r.a.createElement("span",{className:"span"},"(c) 2020 by ",r.a.createElement("em",null,"Juliane")," & ",r.a.createElement("em",null,"Susanne")," & ",r.a.createElement("em",null,"Kai")," & ",r.a.createElement("em",null,"Dirk"))))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"startPage"},r.a.createElement("h1",null,"Startpage"),r.a.createElement("p",null," ... this is the homepage of the application ... "))}}]),t}(r.a.Component),A=a(109),S=a(117),D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{border:"secondary"},r.a.createElement(S.a.Img,{className:"projectImage",src:this.props.project.img,alt:"Project Image"}),r.a.createElement(S.a.ImgOverlay,null,r.a.createElement(S.a.Header,{className:"transparentCardHeader",as:"h4"},this.props.project.name),r.a.createElement(S.a.Footer,{as:"h5"},r.a.createElement(S.a.Link,{href:"/projects/".concat(this.props.project._id)},r.a.createElement("i",{className:"fas fa-book fa-m-a"}),"Detail"))))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this.props.projects.map((function(e,t){return e.img=e.img||"def-p-".concat(Math.floor(6*Math.random()),".png"),r.a.createElement(D,{key:e._id,project:e})})))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a.getData=function(){O.a.get("/api/projects").then((function(e){a.setState({projects:e.data})})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log("Projects.render"+this.props.location.pathname),r.a.createElement("div",null,r.a.createElement(S.a,{bg:"secondary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-sitemap fa-a"}),"Projects")),r.a.createElement(L,{projects:this.state.projects}))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{border:"secondary"},r.a.createElement(S.a.Img,{className:"componentImage",src:this.props.component.imageUrl,alt:"Component Image"}),r.a.createElement(S.a.ImgOverlay,null,r.a.createElement(S.a.Header,{className:"transparentCardHeader",as:"h4"},this.props.component.name),r.a.createElement(S.a.Footer,{as:"h5"},r.a.createElement(S.a.Link,{href:"/components/".concat(this.props.component._id)},r.a.createElement("i",{className:"fas fa-book fa-m-a"}),"Detail"))))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,null,this.props.components.map((function(e){return r.a.createElement(B,{key:e._id,component:e})})))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={components:[]},a.getData=function(){O.a.get("/api/components").then((function(e){a.setState({components:e.data})})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log("Components.render"+this.props.location.pathname),r.a.createElement("div",null,r.a.createElement(S.a,{bg:"secondary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-sitemap fa-a"}),"Components")),r.a.createElement(I,{components:this.state.components}))}}]),t}(n.Component),H=a(110),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={project:null,error:""},a.handleDelete=function(){var e=a.state.project._id;console.log("delete project",e),a.deleteProject(e)},a.deleteProject=function(e){console.log("im delete.js gelandet",e);var t="/api/projects/".concat(e);O.a.delete(t).then((function(){a.props.history.push("/projects")})).catch((function(e){console.log(e)}))},a.getData=function(){var e=a.props.match.params.id;O.a.get("/api/projects/".concat(e)).then((function(e){a.setState({project:e.data})})).catch((function(e){404===e.response.status&&a.setState({error:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log(this.state,this.props),this.state.error?r.a.createElement("p",null,this.state.error):null===this.state.project?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(S.a,{bg:"primary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-sitemap fa-a"}),"Project Detail")),r.a.createElement("h1",null,this.state.project.name),r.a.createElement("p",null,this.state.project.description),r.a.createElement("p",null,this.state.project.owner),r.a.createElement("p",null,this.state.project.description),r.a.createElement("p",null,this.state.project.notes),r.a.createElement("p",null,this.state.project.status),r.a.createElement("br",null),r.a.createElement(H.a,{className:"justify-content-center"},r.a.createElement(d.a,{className:"mr-5",size:"lg"},r.a.createElement("i",{class:"far fa-edit fa-a"}),"Edit"),r.a.createElement(d.a,{onClick:this.handleDelete,className:"ml-5",size:"lg"},r.a.createElement("i",{class:"far fa-trash-alt fa-a"}),"Delete")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={component:null,error:""},a.getData=function(){var e=a.props.match.params.id;O.a.get("/api/components/".concat(e)).then((function(e){a.setState({component:e.data})})).catch((function(e){404===e.response.status&&a.setState({error:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log(this.state,this.props),this.state.error?r.a.createElement("p",null,this.state.error):null===this.state.component?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(S.a,{bg:"primary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-sitemap fa-a"}),"Component Detail")),r.a.createElement("h1",null,this.state.component.name),r.a.createElement("p",null,this.state.component.description),r.a.createElement(H.a,{className:"justify-content-center"},r.a.createElement(d.a,{className:"mr-5",size:"lg"},r.a.createElement("i",{class:"far fa-edit fa-a"}),"Edit"),r.a.createElement(d.a,{className:"ml-5",size:"lg"},r.a.createElement("i",{class:"far fa-trash-alt fa-a"}),"Delete ")))}}]),t}(n.Component),F=a(35),z=a(111),R=a(114),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){var t;a.setState((t={},Object(F.a)(t,e.target.name,e.target.value),Object(F.a)(t,"error",void 0),t))},a.handleSubmit=function(e){e.preventDefault(),w(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/projects"))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement(z.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{xs:12,sm:{span:4,offset:4}},r.a.createElement(S.a,{bg:"secondary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-user-plus fa-a"}),"Signup")),r.a.createElement(S.a,{style:{marginBottom:"10px"}},r.a.createElement(S.a.Body,null,r.a.createElement(R.a,{onSubmit:this.handleSubmit},r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(R.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(R.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(d.a,{size:"lg",variant:"dark",type:"submit"},"Sign up")))),this.state.error&&r.a.createElement(S.a,{body:!0,bg:"danger",text:"white"},this.state.error))))}}]),t}(n.Component),q=(a(103),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){var t;a.setState((t={},Object(F.a)(t,e.target.name,e.target.value),Object(F.a)(t,"error",void 0),t))},a.handleSubmit=function(e){e.preventDefault(),k(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/projects"))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{xs:12,sm:{span:4,offset:4}},r.a.createElement(S.a,{bg:"secondary",text:"white",style:{marginBottom:"10px"}},r.a.createElement(S.a.Header,{as:"h2"},r.a.createElement("i",{className:"fas fa-sign-in-alt fa-a"}),"Login")),r.a.createElement(S.a,{style:{marginBottom:"10px"}},r.a.createElement(S.a.Body,null,r.a.createElement(R.a,{onSubmit:this.handleSubmit},r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(R.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(R.a.Group,null,r.a.createElement(R.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(R.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(d.a,{size:"lg",variant:"dark",type:"submit"},"Log in")))),this.state.error&&r.a.createElement(S.a,{body:!0,bg:"danger",text:"white"},this.state.error))))}}]),t}(n.Component)),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.projectsRoute=function(e){return a.state.user?r.a.createElement(_,e):r.a.createElement(p.a,{to:"/"})},a.componentsRoute=function(e){return a.state.user?r.a.createElement(T,e):r.a.createElement(p.a,{to:"/"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(C,{user:this.state.user,setUser:this.setUser}),r.a.createElement("div",{className:"AppMenuSpace"}),r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:x}),r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(M,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(q,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(p.b,{exact:!0,path:"/projects",render:this.projectsRoute}),r.a.createElement(p.b,{exact:!0,path:"/projects/:id",render:function(t){return r.a.createElement(U,Object.assign({user:e.state.user},t))}}),r.a.createElement(p.b,{exact:!0,path:"/components",render:this.componentsRoute}),r.a.createElement(p.b,{exact:!0,path:"/components/:id",render:function(t){return r.a.createElement(P,Object.assign({user:e.state.user},t))}}))),r.a.createElement("div",{className:"AppFooterSpace"}),r.a.createElement(N,{user:this.state.user}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(50);O.a.get("/api/auth/loggedin").then((function(e){var t=e.data;s.a.render(r.a.createElement(J.a,null,r.a.createElement(G,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,a){e.exports=a(106)},80:function(e,t,a){},81:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.518ac68f.chunk.js.map