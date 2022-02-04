!function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UubB:function(e,o,c){"use strict";c.r(o),c.d(o,"WelcomeModule",(function(){return P}));var i,r=c("2kYt"),a=c("jxfh"),p=c("M0ag"),g=c("nIj0"),l=c("Meci"),s=c("EM62"),m=((i=function t(){n(this,t)}).\u0275mod=s.Nb({type:i}),i.\u0275inj=s.Mb({factory:function(t){return new(t||i)},imports:[[r.c,p.a,a.c,g.l,g.B,l.d]]}),i),b=c("XZLj"),f=c("sEIs");function d(t,n){if(1&t){var e=s.Wb();s.Vb(0,"div",7),s.Vb(1,"div",8),s.Vb(2,"h2"),s.Jc(3),s.Ub(),s.Vb(4,"p"),s.Jc(5," Ready to work? Dive right back in, and continue where you left off. "),s.Ub(),s.Ub(),s.Vb(6,"div",9),s.Vb(7,"mat-card",10),s.dc("click",(function(){return s.yc(e),s.hc().navigate(["/"])})),s.Qb(8,"img",11),s.Vb(9,"mat-card-title"),s.Jc(10,"Range Mapper"),s.Ub(),s.Vb(11,"mat-card-content"),s.Vb(12,"p"),s.Jc(13,"Create Range datasets and share with collaborators."),s.Ub(),s.Ub(),s.Ub(),s.Vb(14,"mat-card",12),s.dc("click",(function(){return s.yc(e),s.hc().navigate(["/predictions"])})),s.Qb(15,"img",13),s.Vb(16,"mat-card-title"),s.Jc(17,"Predictions"),s.Ub(),s.Vb(18,"mat-card-content"),s.Vb(19,"p"),s.Jc(20,"Evaluate SDM's and provide feedback for additional runs."),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&t){var o=s.hc();s.Cb(3),s.Lc("Welcome back, ",o.fullName,"!")}}function _(t,n){1&t&&(s.Vb(0,"div"),s.Jc(1," Please contact MOL, or "),s.Vb(2,"a",14),s.Jc(3,"log in"),s.Ub(),s.Jc(4,". "),s.Ub())}var u,h,w,M=[{path:"",component:(u=function(){function e(t,o){var c=this;n(this,e),this.auth=t,this.router=o,this.loggedIn=!1,this.auth.loggedIn.subscribe((function(t){c.loggedIn=t})),this.auth.currentUser.subscribe((function(t){c.fullName=t.fullname}))}var o,c,i;return o=e,(c=[{key:"ngOnInit",value:function(){}},{key:"navigate",value:function(t){this.router.navigate(t)}}])&&t(o.prototype,c),i&&t(o,i),e}(),u.\u0275fac=function(t){return new(t||u)(s.Pb(b.b),s.Pb(f.f))},u.\u0275cmp=s.Jb({type:u,selectors:[["mol-welcome-root"]],decls:12,vars:2,consts:[[1,"green-header"],[1,"welcome__wrapper"],[1,"title-container"],[1,"title"],[1,"content"],["class","content-wrapper",4,"ngIf"],[4,"ngIf"],[1,"content-wrapper"],[1,"welcome-text"],[1,"options"],[1,"range-mapper",3,"click"],["mat-card-image","","src","https://mapoflife.github.io/experts-next/assets/range.png","alt","range"],[1,"predictions",3,"click"],["mat-card-image","","src","https://mapoflife.github.io/experts-next/assets/predictions.png","alt","predictions"],["href"," https://auth.mol.org/login?next=https://mol.org/experts-next/welcome"]],template:function(t,n){1&t&&(s.Qb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"h1",3),s.Vb(4,"b"),s.Jc(5,"Expert"),s.Ub(),s.Jc(6," Tools"),s.Ub(),s.Vb(7,"h3"),s.Jc(8,"Create, collaborate, evaluate and share with everyone."),s.Ub(),s.Ub(),s.Vb(9,"div",4),s.Hc(10,d,21,1,"div",5),s.Hc(11,_,5,0,"div",6),s.Ub(),s.Ub()),2&t&&(s.Cb(10),s.nc("ngIf",n.loggedIn&&n.fullName),s.Cb(1),s.nc("ngIf",!n.loggedIn))},directives:[r.t,l.a,l.c,l.e,l.b],styles:[".green-header[_ngcontent-%COMP%]{height:15px;background-color:#8cbf44}.welcome__wrapper[_ngcontent-%COMP%]{margin:0 auto;max-width:1024px;padding-top:42px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:80px;font-weight:300;margin-bottom:34px}.welcome__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#062d66}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-bottom:3em}.welcome__wrapper[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#707070;margin-left:5px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;margin-left:auto;margin-right:auto;gap:38px;grid-template-columns:7fr 5fr}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{width:581px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic[_ngcontent-%COMP%]{margin-bottom:24px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-title[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:16px;letter-spacing:0;line-height:23px;margin:0 0 12px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-text[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-size:14px;font-weight:300;letter-spacing:0;line-height:22px;margin-bottom:20px}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]{display:flex}.welcome__wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description-topic-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child){margin-right:41px}.content[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.options[_ngcontent-%COMP%]{display:flex;flex-direction:row}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}.welcome-text[_ngcontent-%COMP%]{margin-left:5px;margin-bottom:2em}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:350}"]}),u)}],C=((w=function t(){n(this,t)}).\u0275mod=s.Nb({type:w}),w.\u0275inj=s.Mb({factory:function(t){return new(t||w)},imports:[[r.c,f.j.forChild(M)],f.j]}),w),P=((h=function t(){n(this,t)}).\u0275mod=s.Nb({type:h}),h.\u0275inj=s.Mb({factory:function(t){return new(t||h)},imports:[[m,C]]}),h)}}])}();