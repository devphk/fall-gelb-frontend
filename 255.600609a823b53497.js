"use strict";(self.webpackChunkfall_gelb=self.webpackChunkfall_gelb||[]).push([[255],{8255:(oe,K,r)=>{r.d(K,{OP:()=>D,Tx:()=>se,VK:()=>q,p6:()=>ie});var d=r(2687),B=r(1281),_=r(9521),n=r(4650),P=r(7579),v=r(727),O=r(6451),w=r(9646),k=r(3101),I=r(8675),x=r(3900),T=r(5698),b=r(9300),A=r(2722),S=r(1005),u=r(7340),j=r(4080),y=r(6895),h=r(3238),N=r(445),E=r(8184),W=r(3353),G=r(5589);const X=["mat-menu-item",""];function z(s,a){1&s&&(n.O4$(),n.TgZ(0,"svg",2),n._UZ(1,"polygon",3),n.qZA())}const L=["*"];function V(s,a){if(1&s){const e=n.EpF();n.TgZ(0,"div",0),n.NdJ("keydown",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._handleKeydown(i))})("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.closed.emit("click"))})("@transformMenu.start",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._onAnimationStart(i))})("@transformMenu.done",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._onAnimationDone(i))}),n.TgZ(1,"div",1),n.Hsn(2),n.qZA()()}if(2&s){const e=n.oxw();n.Q6J("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),n.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const C={transformMenu:(0,u.X$)("transformMenu",[(0,u.SB)("void",(0,u.oB)({opacity:0,transform:"scale(0.8)"})),(0,u.eR)("void => enter",(0,u.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,u.oB)({opacity:1,transform:"scale(1)"}))),(0,u.eR)("* => void",(0,u.jt)("100ms 25ms linear",(0,u.oB)({opacity:0})))]),fadeInItems:(0,u.X$)("fadeInItems",[(0,u.SB)("showing",(0,u.oB)({opacity:1})),(0,u.eR)("void => *",[(0,u.oB)({opacity:0}),(0,u.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Z=new n.OlP("MatMenuContent"),R=new n.OlP("MAT_MENU_PANEL"),Q=(0,h.Kr)((0,h.Id)(class{}));let D=(()=>{class s extends Q{constructor(e,t,i,o,l){super(),this._elementRef=e,this._focusMonitor=i,this._parentMenu=o,this._changeDetectorRef=l,this.role="menuitem",this._hovered=new P.x,this._focused=new P.x,this._highlighted=!1,this._triggersSubmenu=!1,o&&o.addItem&&o.addItem(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(y.K0),n.Y36(d.tE),n.Y36(R,8),n.Y36(n.sBO))},s.\u0275cmp=n.Xpm({type:s,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(e,t){1&e&&n.NdJ("click",function(o){return t._checkDisabled(o)})("mouseenter",function(){return t._handleMouseEnter()}),2&e&&(n.uIk("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),n.ekj("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[n.qOj],attrs:X,ngContentSelectors:L,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,t){1&e&&(n.F$t(),n.Hsn(0),n._UZ(1,"div",0),n.YNc(2,z,2,0,"svg",1)),2&e&&(n.xp6(1),n.Q6J("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()),n.xp6(1),n.Q6J("ngIf",t._triggersSubmenu))},dependencies:[h.wG,y.O5],encapsulation:2,changeDetection:0}),s})();const F=new n.OlP("mat-menu-default-options",{providedIn:"root",factory:function $(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let J=0,p=(()=>{class s{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._defaultOptions=i,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new n.n_E,this._tabSubscription=v.w0.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new P.x,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new n.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+J++}get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(e){this._overlapTrigger=(0,B.Ig)(e)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(e){this._hasBackdrop=(0,B.Ig)(e)}set panelClass(e){const t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new d.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._tabSubscription=this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,I.O)(this._directDescendantItems),(0,x.w)(e=>(0,O.T)(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e))}ngOnDestroy(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}_hovered(){return this._directDescendantItems.changes.pipe((0,I.O)(this._directDescendantItems),(0,x.w)(t=>(0,O.T)(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const t=e.keyCode,i=this._keyManager;switch(t){case _.hY:(0,_.Vb)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case _.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case _.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:(t===_.LH||t===_.JH)&&i.setFocusOrigin("keyboard"),i.onKeydown(e)}}focusFirstItem(e="program"){this.lazyContent?this._ngZone.onStable.pipe((0,T.q)(1)).subscribe(()=>this._focusFirstItem(e)):this._focusFirstItem(e)}_focusFirstItem(e){const t=this._keyManager;if(t.setFocusOrigin(e).setFirstItemActive(),!t.activeItem&&this._directDescendantItems.length){let i=this._directDescendantItems.first._getHostElement().parentElement;for(;i;){if("menu"===i.getAttribute("role")){i.focus();break}i=i.parentElement}}}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,o=Object.keys(this._classList).find(l=>l.startsWith(this._elevationPrefix));(!o||o===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,t=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===e,i["mat-menu-after"]="after"===e,i["mat-menu-above"]="above"===t,i["mat-menu-below"]="below"===t}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,I.O)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(F))},s.\u0275dir=n.lG2({type:s,contentQueries:function(e,t,i){if(1&e&&(n.Suo(i,Z,5),n.Suo(i,D,5),n.Suo(i,D,4)),2&e){let o;n.iGM(o=n.CRH())&&(t.lazyContent=o.first),n.iGM(o=n.CRH())&&(t._allItems=o),n.iGM(o=n.CRH())&&(t.items=o)}},viewQuery:function(e,t){if(1&e&&n.Gf(n.Rgc,5),2&e){let i;n.iGM(i=n.CRH())&&(t.templateRef=i.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),s})(),q=(()=>{class s extends p{constructor(e,t,i){super(e,t,i),this._elevationPrefix="mat-elevation-z",this._baseElevation=4}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(F))},s.\u0275cmp=n.Xpm({type:s,selectors:[["mat-menu"]],hostVars:3,hostBindings:function(e,t){2&e&&n.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[n._Bn([{provide:R,useExisting:s}]),n.qOj],ngContentSelectors:L,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(e,t){1&e&&(n.F$t(),n.YNc(0,V,3,6,"ng-template"))},dependencies:[y.mk],styles:["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],encapsulation:2,data:{animation:[C.transformMenu,C.fadeInItems]},changeDetection:0}),s})();const Y=new n.OlP("mat-menu-scroll-strategy"),te={provide:Y,deps:[E.aV],useFactory:function ee(s){return()=>s.scrollStrategies.reposition()}},H=(0,W.i$)({passive:!0});let ne=(()=>{class s{constructor(e,t,i,o,l,c,m,M){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=c,this._dir=m,this._focusMonitor=M,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=v.w0.EMPTY,this._hoverSubscription=v.w0.EMPTY,this._menuCloseSubscription=v.w0.EMPTY,this._handleTouchStart=g=>{(0,d.yG)(g)||(this._openedBy="touch")},this._openedBy=void 0,this._ariaHaspopup=!0,this.restoreFocus=!0,this.menuOpened=new n.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new n.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=o,this._parentMaterialMenu=l instanceof p?l:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,H),c&&(c._triggersSubmenu=this.triggersSubmenu())}get _ariaExpanded(){return this.menuOpen||null}get _ariaControl(){return this.menuOpen?this.menu.panelId:null}get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),("click"===t||"tab"===t)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})))}ngAfterContentInit(){this._checkMenu(),this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,H),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!(!this._menuItemInstance||!this._parentMaterialMenu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){if(this._menuOpen)return;this._checkMenu();const e=this._createOverlay(),t=e.getConfig();this._setPosition(t.positionStrategy),t.hasBackdrop=this.menu.hasBackdrop??!this.triggersSubmenu(),e.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(),this.menu instanceof p&&this.menu._startAnimation()}closeMenu(){this.menu.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof p?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe((0,b.h)(i=>"void"===i.toState),(0,T.q)(1),(0,A.R)(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t.lazyContent&&t.lazyContent.detach())}_initMenu(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this.menu.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(){if(this.menu.setElevation){let e=0,t=this.menu.parentMenu;for(;t;)e++,t=t.parentMenu;this.menu.setElevation(e)}}_setIsMenuOpen(e){this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e)}_checkMenu(){}_createOverlay(){if(!this._overlayRef){const e=this._getOverlayConfig();this._subscribeToPositions(e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(){return new E.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this.menu.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e){this.menu.setPositionClasses&&e.positionChanges.subscribe(t=>{this.menu.setPositionClasses("start"===t.connectionPair.overlayX?"after":"before","top"===t.connectionPair.overlayY?"below":"above")})}_setPosition(e){let[t,i]="before"===this.menu.xPosition?["end","start"]:["start","end"],[o,l]="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],[c,m]=[o,l],[M,g]=[t,i],f=0;this.triggersSubmenu()?(g=t="before"===this.menu.xPosition?"start":"end",i=M="end"===t?"start":"end",f="bottom"===o?8:-8):this.menu.overlapTrigger||(c="top"===o?"bottom":"top",m="top"===l?"bottom":"top"),e.withPositions([{originX:t,originY:c,overlayX:M,overlayY:o,offsetY:f},{originX:i,originY:c,overlayX:g,overlayY:o,offsetY:f},{originX:t,originY:m,overlayX:M,overlayY:l,offsetY:-f},{originX:i,originY:m,overlayX:g,overlayY:l,offsetY:-f}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,w.of)(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,b.h)(l=>l!==this._menuItemInstance),(0,b.h)(()=>this._menuOpen)):(0,w.of)();return(0,O.T)(e,i,o,t)}_handleMousedown(e){(0,d.X6)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const t=e.keyCode;(t===_.K5||t===_.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===_.SV&&"ltr"===this.dir||t===_.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,b.h)(e=>e===this._menuItemInstance&&!e.disabled),(0,S.g)(0,k.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof p&&this.menu._isAnimating?this.menu._animationDone.pipe((0,T.q)(1),(0,S.g)(0,k.E),(0,A.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(){return(!this._portal||this._portal.templateRef!==this.menu.templateRef)&&(this._portal=new j.UE(this.menu.templateRef,this._viewContainerRef)),this._portal}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(E.aV),n.Y36(n.SBq),n.Y36(n.s_b),n.Y36(Y),n.Y36(R,8),n.Y36(D,10),n.Y36(N.Is,8),n.Y36(d.tE))},s.\u0275dir=n.lG2({type:s,hostVars:3,hostBindings:function(e,t){1&e&&n.NdJ("mousedown",function(o){return t._handleMousedown(o)})("keydown",function(o){return t._handleKeydown(o)})("click",function(o){return t._handleClick(o)}),2&e&&n.uIk("aria-expanded",t._ariaExpanded)("aria-controls",t._ariaControl)("aria-haspopup",t._ariaHaspopup)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),s})(),ie=(()=>{class s extends ne{}return s.\u0275fac=function(){let a;return function(t){return(a||(a=n.n5z(s)))(t||s)}}(),s.\u0275dir=n.lG2({type:s,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-menu-trigger"],exportAs:["matMenuTrigger"],features:[n.qOj]}),s})(),se=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({providers:[te],imports:[[y.ez,h.BQ,h.si,E.U8],G.ZD,h.BQ]}),s})()}}]);