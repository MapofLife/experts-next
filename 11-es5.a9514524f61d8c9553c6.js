!function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{UubB:function(n,o,c){"use strict";c.r(o),c.d(o,"WelcomeModule",(function(){return j}));var i,r=c("2kYt"),a=c("jxfh"),s=c("M0ag"),p=c("nIj0"),l=c("Meci"),g=c("W1gw"),m=c("s2Ay"),f=c("EM62"),b=((i=function n(){e(this,n)}).\u0275mod=f.Nb({type:i}),i.\u0275inj=f.Mb({factory:function(n){return new(n||i)},imports:[[r.c,s.a,a.c,p.l,p.B,l.d,g.b,m.b,a.b]]}),i),u=c("XZLj"),d=c("sEIs"),_=c("J7xr"),h=c("nts4");function P(n,t){if(1&n){var e=f.Wb();f.Vb(0,"mat-card",12),f.dc("click",(function(){f.xc(e);var n=t.$implicit;return f.hc(3).navigate(["/predictions"],n.project_id)})),f.Qb(1,"img",13),f.Vb(2,"mat-card-title"),f.Hc(3),f.Ub(),f.Vb(4,"mat-card-content"),f.Vb(5,"p"),f.Hc(6),f.Ub(),f.Ub(),f.Ub()}if(2&n){var o=t.$implicit;f.Cb(1),f.mc("src",o.thumbnail,f.zc),f.Cb(2),f.Ic(o.project_name),f.Cb(3),f.Ic(o.description)}}function C(n,t){if(1&n&&(f.Vb(0,"div",10),f.Fc(1,P,7,3,"mat-card",11),f.Ub()),2&n){var e=f.hc(2);f.Cb(1),f.mc("ngForOf",e.sdmProjects)}}function w(n,t){if(1&n&&(f.Vb(0,"div",7),f.Vb(1,"div",8),f.Vb(2,"h2"),f.Hc(3),f.Ub(),f.Vb(4,"p"),f.Hc(5," Ready to work? Dive right back in, and continue where you left off. "),f.Ub(),f.Ub(),f.Qb(6,"mol-spinner"),f.Fc(7,C,2,1,"div",9),f.Ub()),2&n){var e=f.hc();f.Cb(3),f.Jc("Welcome back, ",e.fullName,"!"),f.Cb(4),f.mc("ngIf",e.sdmProjects)}}function M(n,t){if(1&n&&(f.Vb(0,"div"),f.Hc(1," Please contact MOL, or "),f.Vb(2,"a",14),f.Hc(3,"log in"),f.Ub(),f.Hc(4,". "),f.Ub()),2&n){var e=f.hc();f.Cb(2),f.mc("href","https://auth.mol.org/login?next="+e.router.location._platformLocation.location.href,f.zc)}}var O,x,v,y=[{path:"",component:(O=function(){function n(t,o,c,i,r){var a=this;e(this,n),this.auth=t,this.router=o,this._snackBar=c,this.predictions=i,this.translate=r,this.loggedIn=!1,this.sdmProjects=null,this.links=[{name:"Projects",route:"/"},{name:"Background",route:"/background"}],this.predictions.getSDMProjects().subscribe((function(n){return a.sdmProjects=n})),this.auth.loggedIn.subscribe((function(n){a.loggedIn=n})),this.auth.currentUser.subscribe((function(n){null!==n&&(a.role=n.role,a.fullName=n.fullname)}))}return t(n,[{key:"ngOnInit",value:function(){}},{key:"navigate",value:function(n,t){this.predictions.resetPredictions(),this.predictions.predictionsRequested=!1,this.router.navigate(["/predictions","taxa","amphibians"],{queryParams:{project_id:t}})}}]),n}(),O.\u0275fac=function(n){return new(n||O)(f.Pb(u.b),f.Pb(d.f),f.Pb(g.a),f.Pb(u.e),f.Pb(u.j))},O.\u0275cmp=f.Jb({type:O,selectors:[["mol-welcome-root"]],decls:12,vars:3,consts:[[3,"links"],[1,"welcome__wrapper"],[1,"title-container"],[1,"title"],[1,"content"],["class","content-wrapper",4,"ngIf"],[4,"ngIf"],[1,"content-wrapper"],[1,"welcome-text"],["class","options",4,"ngIf"],[1,"options"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["mat-card-image","","alt","predictions",3,"src"],[3,"href"]],template:function(n,t){1&n&&(f.Qb(0,"mol-nav",0),f.Vb(1,"div",1),f.Vb(2,"div",2),f.Vb(3,"h1",3),f.Vb(4,"b"),f.Hc(5,"Expert"),f.Ub(),f.Hc(6," Tools"),f.Ub(),f.Vb(7,"h3"),f.Hc(8,"Create, collaborate, evaluate and share with everyone."),f.Ub(),f.Ub(),f.Vb(9,"div",4),f.Fc(10,w,8,2,"div",5),f.Fc(11,M,5,1,"div",6),f.Ub(),f.Ub()),2&n&&(f.mc("links",t.links),f.Cb(10),f.mc("ngIf",t.loggedIn&&t.fullName),f.Cb(1),f.mc("ngIf",!t.loggedIn))},directives:[_.a,r.t,h.a,r.s,l.a,l.c,l.e,l.b],styles:[".green-header[_ngcontent-%COMP%]{height:15px;background-color:#8cbf44}.welcome__wrapper[_ngcontent-%COMP%]{margin:0 auto;max-width:1024px;padding-top:42px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:80px;font-weight:300;margin-bottom:34px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#062d66}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-bottom:3em}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#707070;margin-left:5px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;margin-left:auto;margin-right:auto;gap:38px;grid-template-columns:7fr 5fr}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{width:581px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic[_ngcontent-%COMP%]{margin-bottom:24px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:16px;letter-spacing:0;line-height:23px;margin:0 0 12px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-text[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:14px;font-weight:300;letter-spacing:0;line-height:22px;margin-bottom:20px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]{display:flex}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child){margin-right:41px}.content[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.options[_ngcontent-%COMP%]{display:flex;flex-direction:row}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}.test[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{pointer-events:none!important;background-color:#f5f5f5!important}.welcome-text[_ngcontent-%COMP%]{margin-left:5px;margin-bottom:2em}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:350}"]}),O)}],k=((v=function n(){e(this,n)}).\u0275mod=f.Nb({type:v}),v.\u0275inj=f.Mb({factory:function(n){return new(n||v)},imports:[[r.c,d.j.forChild(y),m.b],d.j]}),v),j=((x=function n(){e(this,n)}).\u0275mod=f.Nb({type:x}),x.\u0275inj=f.Mb({factory:function(n){return new(n||x)},imports:[[b,k]]}),x)},nts4:function(n,o,c){"use strict";c.d(o,"a",(function(){return l}));var i=c("XZLj"),r=c("EM62"),a=c("2kYt"),s=c("csyo");function p(n,t){1&n&&r.Qb(0,"mat-spinner",1)}var l=function(){var n=function(){function n(t){e(this,n),this.spinner=t,this.display=!1}return t(n,[{key:"ngOnInit",value:function(){var n=this;this.spinner.activeRequests.subscribe((function(t){n.display=t>0}))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(r.Pb(i.h))},n.\u0275cmp=r.Jb({type:n,selectors:[["mol-spinner"]],decls:1,vars:1,consts:[["class","main-spinner","color","accent","diameter","60",4,"ngIf"],["color","accent","diameter","60",1,"main-spinner"]],template:function(n,t){1&n&&r.Fc(0,p,1,0,"mat-spinner",0),2&n&&r.mc("ngIf",t.display)},directives:[a.t,s.b],styles:[".main-spinner[_ngcontent-%COMP%]{z-index:1000000;position:absolute;top:30px;left:calc((100% / 2) - 30px)}"]}),n}()}}])}();