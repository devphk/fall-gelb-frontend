"use strict";(self.webpackChunkfall_gelb=self.webpackChunkfall_gelb||[]).push([[423],{7423:(R,h,n)=>{n.r(h),n.d(h,{FallGelbModule:()=>L});var s=n(6895),c=n(3060),t=n(4650),v=n(7579);let p=(()=>{class o{constructor(){this.toggleSidenav=new v.x,this.toggleSidenav$=this.toggleSidenav.asObservable()}setDrawer(e){this.drawer=e}open(){return this.drawer.open()}isOpend(){return this.drawer.opened}close(){return this.drawer.close()}toggle(){this.drawer.toggle()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=n(3267),b=n(4859),u=n(3238),C=n(3353);const T=["*",[["mat-toolbar-row"]]],x=["*","mat-toolbar-row"],y=(0,u.pj)(class{constructor(o){this._elementRef=o}});let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),o})(),Z=(()=>{class o extends y{constructor(e,i,a){super(e),this._platform=i,this._document=a}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(C.t4),t.Y36(s.K0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-toolbar"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,A,5),2&e){let r;t.iGM(r=t.CRH())&&(i._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",0===i._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[t.qOj],ngContentSelectors:x,decls:2,vars:0,template:function(e,i){1&e&&(t.F$t(T),t.Hsn(0),t.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),o})(),P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.BQ],u.BQ]}),o})();var f=n(7392),g=n(1576),F=n(5829),m=n(8255);const O=function(o){return[o]},S=function(o){return{active:o}};function U(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){const r=t.CHM(e).$implicit,E=t.oxw();return t.KtG(E.navigate(r.path))}),t.TgZ(1,"i",10),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()}if(2&o){const e=l.$implicit,i=t.oxw(),a=t.MAs(3);t.Q6J("routerLink",t.VKq(5,O,e.path))("ngClass",t.VKq(7,S,i.isActive(e.path)))("matMenuTriggerFor",a),t.xp6(2),t.Oqu(e.icon),t.xp6(2),t.hij(" ",e.title," ")}}let w=(()=>{class o{constructor(e,i,a){this.element=i,this.router=a,this.menuItems=[{path:"/dashboard",title:"Inicio",icon:"dashboard"},{path:"/entities",title:"Entidades",icon:"person"},{path:"/operations",title:"Operaciones",icon:"content_paste"},{path:"/statistics",title:"Estad\xedticas",icon:"library_books"},{path:"/administration",title:"Administraci\xf3n",icon:"bubble_chart"},{path:"/settings",title:"Configuraci\xf3n",icon:"location_on"},{path:"/commercial",title:"Comercial",icon:"notifications"},{path:"/comptroller",title:"Contralor\xeda",icon:"notifications"}],this.mobile_menu_visible=0,this.location=e,this.sidebarVisible=!1}ngOnInit(){this.router.events.subscribe(e=>{this.sidebarClose();var i=document.getElementsByClassName("close-layer")[0];i&&(i.remove(),this.mobile_menu_visible=0)})}navigate(e){console.log("path ",e),this.router.navigate(["home",e.substring(1)])}sidebarOpen(){const e=this.toggleButton,i=document.getElementsByTagName("body")[0];setTimeout(function(){e.classList.add("toggled")},500),i.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){const e=document.getElementsByTagName("body")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,e.classList.remove("nav-open")}sidebarToggle(){}getTitle(){}isActive(e){return this.router.isActive("home"+e,!0)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.Ye),t.Y36(t.SBq),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-phk-sidenav"]],inputs:{menuItems:"menuItems"},decls:42,vars:11,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"sidenav-container"],["class","nav-item","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","15px","mat-button","",3,"routerLink","ngClass","matMenuTriggerFor","click",4,"ngFor","ngForOf"],[3,"xPosition"],["animals","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["vertebrates","matMenu"],["mat-menu-item",""],["invertebrates","matMenu"],["mat-button","",3,"matMenuTriggerFor"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","15px","mat-button","",1,"nav-item",3,"routerLink","ngClass","matMenuTriggerFor","click"],[1,"material-icons"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,U,5,9,"div",1),t.TgZ(2,"mat-menu",2,3)(4,"button",4),t._uU(5," Proveedores "),t.qZA(),t.TgZ(6,"button",4),t._uU(7," Clientes "),t.qZA(),t.TgZ(8,"button",4),t._uU(9," Navieras "),t.qZA(),t.TgZ(10,"button",4),t._uU(11," Consolidador A\xe9reo "),t.qZA(),t.TgZ(12,"button",4),t._uU(13," A\xe9reolineas "),t.qZA(),t.TgZ(14,"button",4),t._uU(15," Terrestre "),t.qZA(),t.TgZ(16,"button",4),t._uU(17," Choferes "),t.qZA()(),t.TgZ(18,"mat-menu",2,5)(20,"button",6),t._uU(21,"Birds"),t.qZA(),t.TgZ(22,"button",6),t._uU(23,"Mammals"),t.qZA()(),t.TgZ(24,"mat-menu",null,7)(26,"button",6),t._uU(27,"Insects"),t.qZA(),t.TgZ(28,"button",6),t._uU(29,"Molluscs"),t.qZA(),t.TgZ(30,"button",6),t._uU(31,"Crustaceans"),t.qZA(),t.TgZ(32,"button",6),t._uU(33,"Corals"),t.qZA(),t.TgZ(34,"button",6),t._uU(35,"Arachnids"),t.qZA(),t.TgZ(36,"button",6),t._uU(37,"Velvet worms"),t.qZA(),t.TgZ(38,"button",6),t._uU(39,"Horseshoe crabs"),t.qZA()()(),t.TgZ(40,"button",8),t._uU(41,"Animal index"),t.qZA()),2&e){const a=t.MAs(3),r=t.MAs(19);t.xp6(1),t.Q6J("ngForOf",i.menuItems),t.xp6(1),t.Q6J("xPosition","before"),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(2),t.Q6J("xPosition","after"),t.xp6(22),t.Q6J("matMenuTriggerFor",a)}},dependencies:[s.mk,s.sg,c.rH,g.xw,g.SQ,g.Wh,F.oO,m.VK,m.OP,m.p6],styles:[".sidenav-container[_ngcontent-%COMP%]{width:200px;padding:10px}i[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#2b2b2b}.nav-item[_ngcontent-%COMP%]{display:inline-block;width:100%;margin:auto;padding:15px 10px 15px 15px;border-radius:5px;cursor:pointer;transition:all .15s ease-in}.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.nav-item[_ngcontent-%COMP%]:hover{background-color:#eee;color:#3c4858;font-weight:300}p[_ngcontent-%COMP%]{margin:0!important}.active[_ngcontent-%COMP%]{background-color:#00518f!important;box-shadow:0 4px 20px #00000024,0 7px 10px -5px #f4433666!important}.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#eee}.child[_ngcontent-%COMP%]{display:none}.child[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#e4eff7;line-height:40px;border-bottom:#CCC 1px solid;border-right:#CCC 1px solid;width:100%}.child[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.parent[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%]{display:block;position:absolute}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;min-width:8.65em}"]}),o})();const B=["drawer"],G=[{path:"",component:(()=>{class o{constructor(e){this.fallgelbService=e,this.links=[{linkTitle:"Entidades",linkUrl:"entities"},{linkTitle:"Operaciones",linkUrl:"operations"},{linkTitle:"Estad\xedsticas",linkUrl:"statistics"},{linkTitle:"Administraci\xf3n",linkUrl:"administration"},{linkTitle:"Configuraciones",linkUrl:"settings"},{linkTitle:"Comercial",linkUrl:"commercial"},{linkTitle:"Contralor\xeda",linkUrl:"comptroller"}]}ngOnInit(){this.fallgelbService.setDrawer(this.drawer)}onToggleDrawer(){this.fallgelbService.isOpend()&&this.fallgelbService.close(),this.fallgelbService.toggle()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-fall-gelb"]],viewQuery:function(e,i){if(1&e&&t.Gf(B,7),2&e){let a;t.iGM(a=t.CRH())&&(i.drawer=a.first)}},decls:12,vars:2,consts:[[3,"hasBackdrop"],[3,"mode"],["drawer",""],[1,"h-100vh"],["color","primary"],["mat-icon-button","","aria-label","toolbar button",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2),t._UZ(3,"app-phk-sidenav"),t.qZA(),t.TgZ(4,"mat-drawer-content",3)(5,"mat-toolbar",4)(6,"button",5),t.NdJ("click",function(){return i.onToggleDrawer()}),t.TgZ(7,"mat-icon"),t._uU(8,"menu"),t.qZA()(),t.TgZ(9,"span"),t._uU(10,"Phoinike"),t.qZA()(),t._UZ(11,"router-outlet"),t.qZA()()),2&e&&(t.Q6J("hasBackdrop",!0),t.xp6(1),t.Q6J("mode","side"))},dependencies:[c.lC,d.jA,d.kh,d.LW,b.lW,Z,f.Hw,w]}),o})(),children:[{path:"dashboard",loadChildren:()=>Promise.all([n.e(592),n.e(337)]).then(n.bind(n,8337)).then(o=>o.DashboardModule)},{path:"entities",loadChildren:()=>Promise.all([n.e(592),n.e(923)]).then(n.bind(n,9923)).then(o=>o.EntitiesModule)},{path:"operations",loadChildren:()=>Promise.all([n.e(592),n.e(401)]).then(n.bind(n,8401)).then(o=>o.OperationsModule)},{path:"statistics",loadChildren:()=>Promise.all([n.e(592),n.e(981)]).then(n.bind(n,5981)).then(o=>o.StatisticsModule)},{path:"administration",loadChildren:()=>Promise.all([n.e(592),n.e(807)]).then(n.bind(n,3807)).then(o=>o.AdministrationModule)},{path:"settings",loadChildren:()=>n.e(515).then(n.bind(n,7429)).then(o=>o.SettingsModule)},{path:"commercial",loadChildren:()=>n.e(173).then(n.bind(n,1173)).then(o=>o.CommercialModule)},{path:"comptroller",loadChildren:()=>Promise.all([n.e(592),n.e(734)]).then(n.bind(n,6734)).then(o=>o.ComptrollerModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}];let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(G),c.Bz]}),o})();var M=n(9814);let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,c.Bz,M.o9,m.Tx]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p],imports:[s.ez,J,d.SJ,b.ot,P,f.Ps,Q,M.o9]}),o})()}}]);