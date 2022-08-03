!function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UubB:function(e,o,c){"use strict";c.r(o),c.d(o,"WelcomeModule",(function(){return O}));var i,r=c("2kYt"),a=c("jxfh"),p=c("M0ag"),g=c("nIj0"),l=c("Meci"),s=c("W1gw"),b=c("EM62"),f=((i=function t(){n(this,t)}).\u0275mod=b.Nb({type:i}),i.\u0275inj=b.Mb({factory:function(t){return new(t||i)},imports:[[r.c,p.a,a.c,g.l,g.B,l.d,s.b]]}),i),m=c("XZLj"),d=c("sEIs");function _(t,n){if(1&t){var e=b.Wb();b.Vb(0,"div",7),b.Vb(1,"div",8),b.Vb(2,"h2"),b.Jc(3),b.Ub(),b.Vb(4,"p"),b.Jc(5," Ready to work? Dive right back in, and continue where you left off. "),b.Ub(),b.Ub(),b.Vb(6,"div",9),b.Vb(7,"mat-card",10),b.dc("click",(function(){return b.zc(e),b.hc().navigate(["/"])})),b.Qb(8,"img",11),b.Vb(9,"mat-card-title"),b.Jc(10,"Range Mapper"),b.Ub(),b.Vb(11,"mat-card-content"),b.Vb(12,"p"),b.Jc(13,"Create Range datasets and share with collaborators."),b.Ub(),b.Ub(),b.Ub(),b.Vb(14,"mat-card",10),b.dc("click",(function(){return b.zc(e),b.hc().navigate(["/predictions"])})),b.Qb(15,"img",12),b.Vb(16,"mat-card-title"),b.Jc(17,"Predictions"),b.Ub(),b.Vb(18,"mat-card-content"),b.Vb(19,"p"),b.Jc(20,"Evaluate SDM's and provide feedback for additional runs."),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()}if(2&t){var o=b.hc();b.Cb(3),b.Lc("Welcome back, ",o.fullName,"!")}}function u(t,n){if(1&t&&(b.Vb(0,"div"),b.Jc(1," Please contact MOL, or "),b.Vb(2,"a",13),b.Jc(3,"log in"),b.Ub(),b.Jc(4,". "),b.Ub()),2&t){var e=b.hc();b.Cb(2),b.oc("href","https://auth.mol.org/login?next="+e.router.location._platformLocation.location.href,b.Bc)}}var h,w,M,C=[{path:"",component:(h=function(){function e(t,o,c){var i=this;n(this,e),this.auth=t,this.router=o,this._snackBar=c,this.loggedIn=!1,this.auth.loggedIn.subscribe((function(t){i.loggedIn=t})),this.auth.currentUser.subscribe((function(t){null!==t&&(i.role=t.role,i.fullName=t.fullname)}))}var o,c,i;return o=e,(c=[{key:"ngOnInit",value:function(){}},{key:"navigate",value:function(t){this.router.navigate(t)}}])&&t(o.prototype,c),i&&t(o,i),e}(),h.\u0275fac=function(t){return new(t||h)(b.Pb(m.b),b.Pb(d.f),b.Pb(s.a))},h.\u0275cmp=b.Jb({type:h,selectors:[["mol-welcome-root"]],decls:12,vars:2,consts:[[1,"green-header"],[1,"welcome__wrapper"],[1,"title-container"],[1,"title"],[1,"content"],["class","content-wrapper",4,"ngIf"],[4,"ngIf"],[1,"content-wrapper"],[1,"welcome-text"],[1,"options"],[3,"click"],["mat-card-image","","src","https://mapoflife.github.io/experts-next/assets/range.png","alt","range"],["mat-card-image","","src","https://mapoflife.github.io/experts-next/assets/predictions.png","alt","predictions"],[3,"href"]],template:function(t,n){1&t&&(b.Qb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Vb(3,"h1",3),b.Vb(4,"b"),b.Jc(5,"Expert"),b.Ub(),b.Jc(6," Tools"),b.Ub(),b.Vb(7,"h3"),b.Jc(8,"Create, collaborate, evaluate and share with everyone."),b.Ub(),b.Ub(),b.Vb(9,"div",4),b.Hc(10,_,21,1,"div",5),b.Hc(11,u,5,1,"div",6),b.Ub(),b.Ub()),2&t&&(b.Cb(10),b.oc("ngIf",n.loggedIn&&n.fullName),b.Cb(1),b.oc("ngIf",!n.loggedIn))},directives:[r.t,l.a,l.c,l.e,l.b],styles:[".green-header[_ngcontent-%COMP%]{height:15px;background-color:#8cbf44}.welcome__wrapper[_ngcontent-%COMP%]{margin:0 auto;max-width:1024px;padding-top:42px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:80px;font-weight:300;margin-bottom:34px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#062d66}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-bottom:3em}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#707070;margin-left:5px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;margin-left:auto;margin-right:auto;gap:38px;grid-template-columns:7fr 5fr}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{width:581px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic[_ngcontent-%COMP%]{margin-bottom:24px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:16px;letter-spacing:0;line-height:23px;margin:0 0 12px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-text[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:14px;font-weight:300;letter-spacing:0;line-height:22px;margin-bottom:20px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]{display:flex}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child){margin-right:41px}.content[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.options[_ngcontent-%COMP%]{display:flex;flex-direction:row}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}.test[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{pointer-events:none!important;background-color:#f5f5f5!important}.welcome-text[_ngcontent-%COMP%]{margin-left:5px;margin-bottom:2em}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:350}"]}),h)}],P=((M=function t(){n(this,t)}).\u0275mod=b.Nb({type:M}),M.\u0275inj=b.Mb({factory:function(t){return new(t||M)},imports:[[r.c,d.j.forChild(C)],d.j]}),M),O=((w=function t(){n(this,t)}).\u0275mod=b.Nb({type:w}),w.\u0275inj=b.Mb({factory:function(t){return new(t||w)},imports:[[f,P]]}),w)}}])}();