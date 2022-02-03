(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5+sL":function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",(function(){return ce}));var o=n("sEIs"),r=n("2kYt"),c=n("jxfh"),i=n("M0ag"),a=n("PBFl"),s=n("csyo"),p=n("EM62");let d=(()=>{class e{}return e.\u0275mod=p.Nb({type:e}),e.\u0275inj=p.Mb({factory:function(t){return new(t||e)},imports:[[r.c,a.c,i.a,s.a,c.c,o.j]]}),e})();var _=n("XZLj"),l=n("nIj0"),g=n("IVkz"),b=n("OZ4H"),m=n("QlUG"),u=n("wnGv"),f=n("UwWW"),h=n("VkHG");function C(e,t){if(1&e&&(p.Vb(0,"div"),p.Jc(1),p.Ub(),p.Vb(2,"div",14),p.Jc(3),p.Ub()),2&e){const e=t.$implicit;p.Cb(1),p.Kc(e.scientificname),p.Cb(2),p.Kc(e.vernacular)}}let M=(()=>{class e{constructor(e,t,n,o,r){this.dialogRef=e,this.speciesService=t,this.userDatasetService=n,this.authService=o,this.router=r,this.taxonomicGroupItems=[],this.userFullName=""}ngOnInit(){this.form=new l.i({title:new l.f("",[l.F.required]),group:new l.f("",[l.F.required]),species:new l.f({value:"",disabled:!0},[l.F.required])}),this.authService.currentUser.subscribe(e=>{this.userFullName=e.fullname}),this.form.get("group").valueChanges.subscribe(e=>{e?this.form.get("species").enable():this.form.get("species").disable()}),this.speciesDisplayFn=e=>null==e?void 0:e.scientificname,this.speciesSearchFn=e=>this.speciesService.search(e,this.form.get("group").value.value),this.speciesService.availableTaxa().subscribe(e=>{this.taxonomicGroupItems=e.map(e=>({value:e.taxa,label:e.title}))})}selectSpecies(e){this.form.patchValue({species:e})}createMap(){if(this.form.valid){const e=g.a();this.userDatasetService.addDataset({dataset_id:e,dataset_title:this.form.get("title").value,taxa:this.form.get("group").value.label,product_type:"range",license_holder:this.userFullName,license:"cco"}).subscribe(()=>{this.router.navigate(["map",e],{queryParams:{species:this.form.get("species").value.scientificname}}),this.dialogRef.close()})}}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(b.g),p.Pb(_.g),p.Pb(_.k),p.Pb(_.b),p.Pb(o.f))},e.\u0275cmp=p.Jb({type:e,selectors:[["mol-dataset-create-modal"]],decls:16,vars:12,consts:[[1,"create-map__wrapper"],[1,"title"],[1,"rectangle"],[1,"create-map__form",3,"formGroup"],["ngForm","ngForm"],[1,"title-input-wrapper"],["formControlName","title",1,"title-input",3,"title","required"],[1,"tax-group-wrapper"],["formControlName","group",3,"title","items","required"],[1,"species-group-wrapper"],["formControlName","species",3,"title","searchFn","displayFn","itemTemplate","selectedItem"],["speciesSearchTemplate",""],[1,"button-wrapper"],[3,"title","disabled","click"],[1,"sub-select"]],template:function(e,t){if(1&e&&(p.Vb(0,"div",0),p.Vb(1,"h2",1),p.Jc(2,"Create a new Range Map dataset:"),p.Ub(),p.Vb(3,"div",2),p.Vb(4,"form",3,4),p.Vb(6,"div",5),p.Qb(7,"mol-input",6),p.Ub(),p.Vb(8,"div",7),p.Qb(9,"mol-select",8),p.Ub(),p.Vb(10,"div",9),p.Vb(11,"mol-search-select",10),p.dc("selectedItem",(function(e){return t.selectSpecies(e)})),p.Ub(),p.Hc(12,C,4,2,"ng-template",null,11,p.Ic),p.Ub(),p.Vb(14,"div",12),p.Vb(15,"mol-button",13),p.dc("click",(function(){return t.createMap()})),p.Ub(),p.Ub(),p.Ub(),p.Ub(),p.Ub()),2&e){const e=p.uc(5),n=p.uc(13);p.Cb(4),p.nc("formGroup",t.form),p.Cb(3),p.nc("title","Project Title:")("required",!0),p.Cb(2),p.nc("title","Taxonomic group:")("items",t.taxonomicGroupItems)("required",!0),p.Cb(2),p.nc("title","Select your first species:")("searchFn",t.speciesSearchFn)("displayFn",t.speciesDisplayFn)("itemTemplate",n),p.Cb(4),p.nc("title","Create Range Map")("disabled",e.invalid)}},directives:[l.H,l.s,l.j,m.a,l.r,l.h,l.C,u.a,f.a,h.a],styles:[".create-map__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-family:Fira Sans;font-size:16px;font-weight:500;letter-spacing:0;line-height:23px}.create-map__wrapper[_ngcontent-%COMP%]   .sub-select[_ngcontent-%COMP%]{margin-left:10px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]{width:404px;padding:50px 50px 36px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .tax-group-wrapper[_ngcontent-%COMP%], .create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .title-input-wrapper[_ngcontent-%COMP%]{margin-bottom:40px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin-top:35px;display:flex;justify-content:center}"]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Jb({type:e,selectors:[["mol-dashboard-header"]],decls:1,vars:0,consts:[[1,"dashboard-header__wrapper"]],template:function(e,t){1&e&&p.Qb(0,"section",0)},styles:[".dashboard-header__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;height:30px;padding:0 40px;background-color:#8cbf44;font-family:Fira Sans}.dashboard-header__wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;font-size:18px;color:#fff;margin-left:50px;cursor:pointer}"]}),e})();function P(e,t){if(1&e&&(p.Vb(0,"section",5),p.Vb(1,"a",6),p.Qb(2,"div",7),p.Vb(3,"div",8),p.Jc(4),p.Ub(),p.Vb(5,"div",9),p.Jc(6,"Datasets created"),p.Ub(),p.Ub(),p.Vb(7,"a",10),p.Qb(8,"div",7),p.Vb(9,"div",8),p.Jc(10),p.Ub(),p.Vb(11,"div",9),p.Jc(12,"Species with evaluated models"),p.Ub(),p.Ub(),p.Ub()),2&e){const e=p.hc();p.Cb(4),p.Kc(e.userDatasets.length),p.Cb(6),p.Kc(e.votedSpecies.length)}}const w=function(e){return["/dataset",e]},v=function(e){return["/map",e]};function x(e,t){if(1&e&&(p.Vb(0,"div",18),p.Vb(1,"div",16),p.Jc(2),p.Ub(),p.Vb(3,"div",19),p.Vb(4,"div",20),p.Qb(5,"img",21),p.Ub(),p.Vb(6,"div",22),p.Jc(7),p.Ub(),p.Ub(),p.Vb(8,"div",23),p.Jc(9),p.Ub(),p.Ub()),2&e){const e=t.$implicit;p.nc("routerLink",0!==e.no_species?p.qc(5,w,e.dataset_id):p.qc(7,v,e.dataset_id)),p.Cb(2),p.Kc(e.dataset_title),p.Cb(3),p.oc("src","https://mol.org/static/img/groups/taxa_"+e.taxa.toLowerCase()+".png",p.Ac),p.Cb(2),p.Kc(e.taxa),p.Cb(2),p.Lc("",e.no_species," Species")}}function y(e,t){if(1&e){const e=p.Wb();p.Vb(0,"section",11),p.Vb(1,"div",12),p.Jc(2),p.Ub(),p.Vb(3,"div",13),p.Hc(4,x,10,9,"div",14),p.Vb(5,"div",15),p.dc("click",(function(){return p.yc(e),p.hc().createDataset()})),p.Vb(6,"div",16),p.Jc(7,"Create New Range Map Dataset"),p.Ub(),p.Vb(8,"span",17),p.Jc(9," add "),p.Ub(),p.Ub(),p.Ub(),p.Ub()}if(2&e){const e=p.hc();p.Cb(2),p.Lc("Drafts (",e.userDatasets.length,")"),p.Cb(2),p.nc("ngForOf",e.userDatasets)}}function V(e,t){1&e&&p.Qb(0,"mat-spinner")}function U(e,t){if(1&e&&(p.Vb(0,"div",18),p.Vb(1,"div",16),p.Jc(2),p.Ub(),p.Vb(3,"div",19),p.Vb(4,"div",20),p.Qb(5,"img",21),p.Ub(),p.Vb(6,"div",22),p.Jc(7),p.Ub(),p.Ub(),p.Vb(8,"div",23),p.Jc(9),p.Ub(),p.Ub()),2&e){const e=t.$implicit;p.nc("routerLink",0!==e.no_species?p.qc(5,w,e.dataset_id):p.qc(7,v,e.dataset_id)),p.Cb(2),p.Kc(e.dataset_title),p.Cb(3),p.oc("src","https://mol.org/static/img/groups/taxa_"+e.taxa.toLowerCase()+".png",p.Ac),p.Cb(2),p.Kc(e.taxa),p.Cb(2),p.Lc("",e.no_species," Species")}}function k(e,t){if(1&e&&(p.Vb(0,"section",11),p.Vb(1,"div",12),p.Jc(2,"Finalised range map datasets"),p.Ub(),p.Vb(3,"div",13),p.Hc(4,U,10,9,"div",14),p.Vb(5,"div",24),p.Vb(6,"div",16),p.Jc(7,"Create New Range Map Dataset"),p.Ub(),p.Vb(8,"span",17),p.Jc(9," add "),p.Ub(),p.Ub(),p.Ub(),p.Ub()),2&e){const e=p.hc();p.Cb(4),p.nc("ngForOf",e.userFinalizedDatasets)}}let S=(()=>{class e{constructor(e,t,n){this.userDatasetService=e,this.speciesService=t,this.dialog=n,this.isLoadingDatasets=!0,this.isLoadingVotedSpecies=!0,this.userDatasets=[],this.userFinalizedDatasets=[],this.votedSpecies=[]}get isLoading(){return!(!this.isLoadingDatasets&&!this.isLoadingVotedSpecies)}ngOnInit(){this.userDatasetService.list().subscribe(e=>{this.isLoadingDatasets=!1,this.userDatasets=e.filter(e=>"QUEUED"===e.status),this.userFinalizedDatasets=e.filter(e=>"QUEUED"!==e.status)}),this.speciesService.getSpeciesWithVotes().subscribe(e=>{this.isLoadingVotedSpecies=!1,this.votedSpecies=e})}createDataset(){this.dialog.open(M,{})}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(_.k),p.Pb(_.g),p.Pb(b.b))},e.\u0275cmp=p.Jb({type:e,selectors:[["mol-dashboard-root"]],decls:7,vars:4,consts:[[1,"dashboard-page__wrapper"],["class","species-ranges__wrapper",4,"ngIf"],["class","blocks",4,"ngIf"],[1,"spinner__wrapper"],[4,"ngIf"],[1,"species-ranges__wrapper"],["routerLink","summary",1,"species-item","ranges"],[1,"coloured-line"],[1,"number"],[1,"text"],["routerLink","summary",1,"species-item","models"],[1,"blocks"],[1,"title"],[1,"blocks__wrapper"],["class","block",3,"routerLink",4,"ngFor","ngForOf"],[1,"block","new",3,"click"],[1,"block-title"],[1,"material-icons","add","block-plus-sign"],[1,"block",3,"routerLink"],[1,"block-type"],[1,"block-type-image"],["alt","Species taxa",3,"src"],[1,"block-type-name"],[1,"clovk-species-amount"],["routerLink","/welcome",1,"block","new"]],template:function(e,t){1&e&&(p.Qb(0,"mol-dashboard-header"),p.Vb(1,"section",0),p.Hc(2,P,13,2,"section",1),p.Hc(3,y,10,2,"section",2),p.Vb(4,"div",3),p.Hc(5,V,1,0,"mat-spinner",4),p.Ub(),p.Hc(6,k,10,1,"section",2),p.Ub()),2&e&&(p.Cb(2),p.nc("ngIf",!t.isLoading),p.Cb(1),p.nc("ngIf",!t.isLoading),p.Cb(2),p.nc("ngIf",t.isLoading),p.Cb(1),p.nc("ngIf",!t.isLoading&&0!==t.userFinalizedDatasets.length))},directives:[O,r.t,o.i,r.s,o.g,s.b],styles:[".dashboard-page__wrapper[_ngcontent-%COMP%]{max-width:1040px;margin-left:auto;margin-right:auto}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]{font-family:Fira Sans;display:flex;align-items:center;justify-content:space-between;margin-top:51px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:21px;font-weight:300;letter-spacing:0;height:131px;width:47%;position:relative;box-shadow:0 2px 6px 0 #ddd;color:#000}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]:hover{background-color:#e9e9e9}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{position:absolute;background-color:#e9e9e9;height:100%;width:19px;left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item.ranges[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{background-color:#8cbf44}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:60px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:20px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]{margin-top:50px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-family:Fira Sans;font-size:21px;font-weight:500;letter-spacing:0;line-height:31px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]{margin-top:12px;display:flex;flex-wrap:wrap}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{transition:all .3s;border-radius:4px;box-shadow:0 2px 6px 0 #ddd;height:247px;width:245px;cursor:pointer;padding-left:28px;margin-bottom:14px;margin-right:14px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:hover{background-color:#e9e9e9;box-shadow:0 10px 6px 0 #ddd;margin-top:-8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.blue[_ngcontent-%COMP%]{background-color:#062d66;color:#fff}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.blue[_ngcontent-%COMP%]:hover{background-color:#001d47;margin-top:-8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]{border:3px dashed #062d66}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{color:#062d66;font-family:Fira Sans;font-size:16px;margin-top:124px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]   .block-plus-sign[_ngcontent-%COMP%]{margin-top:19px;margin-left:-9px;height:30px;line-height:30px;color:#062d66;font-size:50px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-top:117px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]{display:flex;margin-top:17px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-image[_ngcontent-%COMP%]{height:30px;width:30px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-name[_ngcontent-%COMP%]{margin-left:7px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-species-amount[_ngcontent-%COMP%]{margin-top:8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .spinner__wrapper[_ngcontent-%COMP%]{margin-top:50px;width:100%;display:flex;justify-content:center}"]}),e})();var J=n("D57K"),I=n("8bJt");function D(e,t){if(1&e){const e=p.Wb();p.Vb(0,"div",10),p.Vb(1,"button",11),p.dc("click",(function(){p.yc(e);const t=p.hc();return t.redirectToMap(t.species.scientificname)})),p.Jc(2,"Change votes on map"),p.Ub(),p.Ub()}}function F(e,t){1&e&&(p.Vb(0,"span",27),p.Jc(1," thumb_up_alt "),p.Ub())}function L(e,t){if(1&e&&p.Qb(0,"img",28),2&e){const e=p.hc(3);p.nc("src",e.bestModel.modelThumb,p.Ac)}}function H(e,t){if(1&e&&(p.Vb(0,"div",15),p.Vb(1,"div",6),p.Jc(2,"Best model"),p.Ub(),p.Vb(3,"div",16),p.Vb(4,"div",17),p.Vb(5,"div",18),p.Vb(6,"div",19),p.Jc(7),p.Ub(),p.Vb(8,"span",20),p.Jc(9," info "),p.Ub(),p.Ub(),p.Vb(10,"div",21),p.Vb(11,"div",22),p.Jc(12),p.Ub(),p.Hc(13,F,2,0,"span",23),p.Ub(),p.Vb(14,"div",24),p.Hc(15,L,1,1,"img",25),p.Vb(16,"span",26),p.Jc(17,"stars"),p.Ub(),p.Ub(),p.Ub(),p.Ub(),p.Ub()),2&e){const e=p.hc(2);p.Cb(7),p.Kc(e.bestModel.short_name),p.Cb(5),p.Kc(e.round(e.bestModel.vis.default)),p.Cb(1),p.nc("ngIf",e.bestModel.vis.default),p.Cb(2),p.nc("ngIf",!!e.bestModel.modelThumb)}}function T(e,t){1&e&&(p.Vb(0,"span",27),p.Jc(1," thumb_up_alt "),p.Ub())}function z(e,t){if(1&e&&p.Qb(0,"img",31),2&e){const e=p.hc().$implicit;p.nc("src",e.modelThumb,p.Ac)}}function j(e,t){if(1&e&&(p.Vb(0,"div",17),p.Vb(1,"div",18),p.Vb(2,"div",19),p.Jc(3),p.Ub(),p.Vb(4,"span",20),p.Jc(5," info "),p.Ub(),p.Ub(),p.Vb(6,"div",21),p.Vb(7,"div",22),p.Jc(8),p.Ub(),p.Hc(9,T,2,0,"span",23),p.Ub(),p.Vb(10,"div",24),p.Hc(11,z,1,1,"img",30),p.Ub(),p.Ub()),2&e){const e=t.$implicit,n=p.hc(3);p.Cb(3),p.Kc(e.short_name),p.Cb(5),p.Kc(n.round(e.vis.default)),p.Cb(1),p.nc("ngIf",!!e.vis.default),p.Cb(2),p.nc("ngIf",!!e.modelThumb)}}function K(e,t){if(1&e&&(p.Vb(0,"div",15),p.Vb(1,"div",6),p.Jc(2,"Retained models"),p.Ub(),p.Vb(3,"div",16),p.Hc(4,j,12,4,"div",29),p.Ub(),p.Ub()),2&e){const e=p.hc(2);p.Cb(4),p.nc("ngForOf",e.retainedModels)}}function Q(e,t){1&e&&(p.Vb(0,"span",27),p.Jc(1," thumb_up_alt "),p.Ub())}function E(e,t){if(1&e&&p.Qb(0,"img",31),2&e){const e=p.hc().$implicit;p.nc("src",e.modelThumb,p.Ac)}}function N(e,t){if(1&e&&(p.Vb(0,"div",17),p.Vb(1,"div",18),p.Vb(2,"div",19),p.Jc(3),p.Ub(),p.Vb(4,"span",20),p.Jc(5," info "),p.Ub(),p.Ub(),p.Vb(6,"div",21),p.Vb(7,"div",22),p.Jc(8),p.Ub(),p.Hc(9,Q,2,0,"span",23),p.Ub(),p.Vb(10,"div",24),p.Hc(11,E,1,1,"img",30),p.Ub(),p.Ub()),2&e){const e=t.$implicit,n=p.hc(3);p.Cb(3),p.Kc(e.short_name),p.Cb(5),p.Kc(n.round(e.vis.default)),p.Cb(1),p.nc("ngIf",!!e.vis.default),p.Cb(2),p.nc("ngIf",!!e.modelThumb)}}function R(e,t){if(1&e&&(p.Vb(0,"div",15),p.Vb(1,"div",6),p.Jc(2,"Not ratained models"),p.Ub(),p.Vb(3,"div",16),p.Hc(4,N,12,4,"div",29),p.Ub(),p.Ub()),2&e){const e=p.hc(2);p.Cb(4),p.nc("ngForOf",e.notEvaluatedModels)}}function q(e,t){1&e&&(p.Vb(0,"span",27),p.Jc(1," thumb_up_alt "),p.Ub())}function A(e,t){if(1&e&&p.Qb(0,"img",31),2&e){const e=p.hc().$implicit;p.nc("src",e.modelThumb,p.Ac)}}function $(e,t){if(1&e&&(p.Vb(0,"div",17),p.Vb(1,"div",18),p.Vb(2,"div",19),p.Jc(3),p.Ub(),p.Vb(4,"span",20),p.Jc(5," info "),p.Ub(),p.Ub(),p.Vb(6,"div",21),p.Vb(7,"div",22),p.Jc(8),p.Ub(),p.Hc(9,q,2,0,"span",23),p.Ub(),p.Vb(10,"div",32),p.Hc(11,A,1,1,"img",30),p.Ub(),p.Ub()),2&e){const e=t.$implicit,n=p.hc(3);p.Cb(3),p.Kc(e.short_name),p.Cb(5),p.Kc(n.round(e.vis.default)),p.Cb(1),p.nc("ngIf",!!e.vis.default),p.Cb(2),p.nc("ngIf",!!e.modelThumb)}}function G(e,t){if(1&e&&(p.Vb(0,"div",15),p.Vb(1,"div",6),p.Jc(2,"Discarded models"),p.Ub(),p.Vb(3,"div",16),p.Hc(4,$,12,4,"div",29),p.Ub(),p.Ub()),2&e){const e=p.hc(2);p.Cb(4),p.nc("ngForOf",e.discardedModels)}}function W(e,t){if(1&e&&(p.Vb(0,"div",12),p.Vb(1,"div",13),p.Hc(2,H,18,4,"div",14),p.Hc(3,K,5,1,"div",14),p.Hc(4,R,5,1,"div",14),p.Hc(5,G,5,1,"div",14),p.Ub(),p.Ub()),2&e){const e=p.hc();p.Cb(2),p.nc("ngIf",!!e.bestModel),p.Cb(1),p.nc("ngIf",0!==e.retainedModels.length),p.Cb(1),p.nc("ngIf",0!==e.notEvaluatedModels.length),p.Cb(1),p.nc("ngIf",0!==e.discardedModels.length)}}let B=(()=>{class e{constructor(e,t){this.speciesService=e,this.router=t,this.existedModelThumb=[],this.isOpen=!1}get bestModel(){return this.models.find(e=>e.user.status===I.a.BEST)}get retainedModels(){return this.models.filter(e=>e.user.status===I.a.RETAINED)}get notEvaluatedModels(){return this.models.filter(e=>e.user.status===I.a.NOT_EVALUATED)}get discardedModels(){return this.models.filter(e=>e.user.status===I.a.DISCARDED)}ngOnInit(){this.speciesService.getSpeciesModels(this.species.scientificname).subscribe(e=>{this.models=e;for(const t of e)this.getModelSrc(t.molid)})}getModelSrc(e){return Object(J.b)(this,void 0,void 0,(function*(){const t=this.models.find(t=>t.molid===e);this.existedModelThumb.includes(t.molid)||(this.existedModelThumb.push(t.molid),this.speciesService.getSpeciesModelThumb(t.molid,156,156).subscribe(e=>t.modelThumb=e))}))}toggle(){this.isOpen=!this.isOpen}redirectToMap(e){this.router.navigate(["map","vote"],{queryParams:{dataset:e}})}round(e){return Math.round(100*e)/100}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(_.g),p.Pb(o.f))},e.\u0275cmp=p.Jb({type:e,selectors:[["mol-models-container"]],inputs:{species:"species"},decls:13,vars:6,consts:[[1,"model-container__wrapper"],[1,"model-container__header"],[1,"header-left-part"],[1,"arrow__wrapper"],[1,"material-icons","arrow-up",3,"click"],[1,"header-text"],[1,"name"],[1,"title"],["class","header-right-part",4,"ngIf"],["class","model-container__content",4,"ngIf"],[1,"header-right-part"],["mat-button","",1,"view-on-map",3,"click"],[1,"model-container__content"],[1,"models__wrapper"],["class","model-items",4,"ngIf"],[1,"model-items"],[1,"model-items__wrapper"],[1,"model-item"],[1,"model-number__wrapper"],[1,"model-number"],[1,"material-icons","info"],[1,"model-rating__wrapper"],[1,"model-rating"],["class","material-icons thumb_up_alt",4,"ngIf"],[1,"model-picture"],["alt","map picture","class","best",3,"src",4,"ngIf"],["md-16","",1,"material-icons","stars","star-icon"],[1,"material-icons","thumb_up_alt"],["alt","map picture",1,"best",3,"src"],["class","model-item",4,"ngFor","ngForOf"],["alt","map picture",3,"src",4,"ngIf"],["alt","map picture",3,"src"],[1,"model-picture","discard"]],template:function(e,t){1&e&&(p.Vb(0,"section",0),p.Vb(1,"div",1),p.Vb(2,"div",2),p.Vb(3,"div",3),p.Vb(4,"span",4),p.dc("click",(function(){return t.toggle()})),p.Jc(5," keyboard_arrow_up "),p.Ub(),p.Ub(),p.Vb(6,"div",5),p.Vb(7,"div",6),p.Jc(8),p.Ub(),p.Vb(9,"div",7),p.Jc(10),p.Ub(),p.Ub(),p.Ub(),p.Hc(11,D,3,0,"div",8),p.Ub(),p.Hc(12,W,6,4,"div",9),p.Ub()),2&e&&(p.Cb(4),p.Gb("rotate",t.isOpen),p.Cb(4),p.Kc(t.species.commonname),p.Cb(2),p.Kc(t.species.scientificname),p.Cb(1),p.nc("ngIf",t.isOpen),p.Cb(1),p.nc("ngIf",t.isOpen))},directives:[r.t,a.b,r.s],styles:[".model-container__wrapper[_ngcontent-%COMP%]{margin-top:10px;font-family:Fira Sans;color:#424242;border-bottom:2px solid #ddd}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:space-between;margin-bottom:50px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]{display:flex}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{transition:all .3s;transform:rotate(0)}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .arrow-up.rotate[_ngcontent-%COMP%]{transform:rotate(180deg)}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{margin-left:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:21px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;font-style:italic;font-weight:300;letter-spacing:0;margin-top:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-right-part[_ngcontent-%COMP%]   .view-on-map[_ngcontent-%COMP%]{background-color:#062d66;color:#fff;height:40px;font-family:Fira Sans;width:190px;border-radius:2px;font-size:16px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:34px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:21px;font-weight:300}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]{display:flex;margin-right:50px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]{margin-right:20px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:16px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]   .model-number[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-left:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]{display:flex;margin-top:15px;height:27px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]   .model-rating[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-left:10px;color:#6b6}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]{margin-top:9px;height:156px;width:156px;margin-bottom:63px;position:relative}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture.discard[_ngcontent-%COMP%]{opacity:1%}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   img.best[_ngcontent-%COMP%]{border:4px solid #6b6}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]{position:absolute;font-size:30px;left:calc(50% - 16px);top:calc(50% - 16px);color:#6b6;border-radius:50%;border:2px solid #fff;background-color:#fff}"]}),e})();function Y(e,t){if(1&e&&(p.Vb(0,"section",6),p.Vb(1,"a",7),p.Qb(2,"div",8),p.Vb(3,"div",9),p.Jc(4),p.Ub(),p.Vb(5,"div",10),p.Jc(6,"Datasets created"),p.Ub(),p.Ub(),p.Vb(7,"a",11),p.Qb(8,"div",8),p.Vb(9,"div",9),p.Jc(10),p.Ub(),p.Vb(11,"div",10),p.Jc(12,"Species with evaluated models"),p.Ub(),p.Ub(),p.Ub()),2&e){const e=p.hc();p.Cb(4),p.Kc(e.userDatasets.length),p.Cb(6),p.Kc(e.votedSpecies.length)}}function Z(e,t){1&e&&(p.Vb(0,"section",12),p.Jc(1," Here is a summary of your votes for species distribution models, ordered by species, model and suitability threshold. "),p.Ub())}function X(e,t){1&e&&(p.Vb(0,"section",13),p.Vb(1,"div",14),p.Vb(2,"div",15),p.Vb(3,"span",16),p.Jc(4," thumb_up_alt "),p.Ub(),p.Ub(),p.Vb(5,"div",10),p.Jc(6,"You gave a positive vote to this threshold."),p.Ub(),p.Ub(),p.Vb(7,"div",14),p.Vb(8,"div",15),p.Vb(9,"span",17),p.Jc(10," stars "),p.Ub(),p.Ub(),p.Vb(11,"div",10),p.Jc(12," You marked this model as the best one for a given species. "),p.Ub(),p.Ub(),p.Ub())}function ee(e,t){1&e&&p.Qb(0,"mol-models-container",19),2&e&&p.nc("species",t.$implicit)}function te(e,t){if(1&e&&(p.Tb(0),p.Hc(1,ee,1,1,"mol-models-container",18),p.Sb()),2&e){const e=p.hc();p.Cb(1),p.nc("ngForOf",e.votedSpecies)}}function ne(e,t){1&e&&p.Qb(0,"mat-spinner")}const oe=[{path:"",component:S},{path:"summary",component:(()=>{class e{constructor(e,t){this.userDatasetService=e,this.speciesService=t,this.isLoadingDatasets=!0,this.isLoadingVotedSpecies=!0,this.userDatasets=[],this.votedSpecies=[]}get isLoading(){return!(!this.isLoadingDatasets&&!this.isLoadingVotedSpecies)}ngOnInit(){this.userDatasetService.list().subscribe(e=>{this.isLoadingDatasets=!1,this.userDatasets=e}),this.speciesService.getSpeciesWithVotes().subscribe(e=>{this.isLoadingVotedSpecies=!1,this.votedSpecies=e})}}return e.\u0275fac=function(t){return new(t||e)(p.Pb(_.k),p.Pb(_.g))},e.\u0275cmp=p.Jb({type:e,selectors:[["mol-dashboard-summary"]],decls:8,vars:5,consts:[[1,"dashboard-summary-page__wrapper"],["class","species-ranges__wrapper",4,"ngIf"],["class","dashboard-summary-text",4,"ngIf"],["class","dashboard-summary-votes",4,"ngIf"],[4,"ngIf"],[1,"spinner__wrapper"],[1,"species-ranges__wrapper"],["routerLink","/dashboard",1,"species-item","ranges"],[1,"coloured-line"],[1,"number"],[1,"text"],["routerLink","/dashboard/summary",1,"species-item","models"],[1,"dashboard-summary-text"],[1,"dashboard-summary-votes"],[1,"text-with-icon-group"],[1,"icon"],[1,"material-icons","thumb_up_alt"],[1,"material-icons","stars"],[3,"species",4,"ngFor","ngForOf"],[3,"species"]],template:function(e,t){1&e&&(p.Qb(0,"mol-dashboard-header"),p.Vb(1,"section",0),p.Hc(2,Y,13,2,"section",1),p.Hc(3,Z,2,0,"section",2),p.Hc(4,X,13,0,"section",3),p.Hc(5,te,2,1,"ng-container",4),p.Vb(6,"div",5),p.Hc(7,ne,1,0,"mat-spinner",4),p.Ub(),p.Ub()),2&e&&(p.Cb(2),p.nc("ngIf",!t.isLoading),p.Cb(1),p.nc("ngIf",!t.isLoading),p.Cb(1),p.nc("ngIf",!t.isLoading),p.Cb(1),p.nc("ngIf",!t.isLoading),p.Cb(2),p.nc("ngIf",t.isLoading))},directives:[O,r.t,o.i,r.s,B,s.b],styles:[".dashboard-summary-page__wrapper[_ngcontent-%COMP%]{max-width:1040px;color:#333;font-family:Fira Sans;margin-left:auto;margin-right:auto}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .spinner__wrapper[_ngcontent-%COMP%]{margin-top:50px;width:100%;display:flex;justify-content:center}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:51px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:21px;font-weight:300;letter-spacing:0;height:131px;width:47%;position:relative;box-shadow:0 2px 6px 0 #ddd;color:#000}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]:hover{background-color:#e9e9e9}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{position:absolute;background-color:#e9e9e9;height:100%;width:19px;left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item.ranges[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{background-color:#8cbf44}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:60px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:20px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-text[_ngcontent-%COMP%]{margin-top:50px;width:602px;font-size:16px;font-weight:500;letter-spacing:0;line-height:22px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]{margin-top:20px;display:flex}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]{display:flex;margin-right:27px;align-items:center}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#6b6}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:10px;font-size:16px;font-weight:300;letter-spacing:0}"]}),e})()}];let re=(()=>{class e{}return e.\u0275mod=p.Nb({type:e}),e.\u0275inj=p.Mb({factory:function(t){return new(t||e)},imports:[[r.c,o.j.forChild(oe)],o.j]}),e})(),ce=(()=>{class e{}return e.\u0275mod=p.Nb({type:e}),e.\u0275inj=p.Mb({factory:function(t){return new(t||e)},imports:[[o.j,d,re]]}),e})()},D57K:function(e,t,n){"use strict";function o(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(t){c(t)}}function a(e){try{s(o.throw(e))}catch(t){c(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))}function r(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){!function(e,t,n,o){Promise.resolve(o).then((function(t){e({value:t,done:n})}),t)}(o,r,(t=e[n](t)).done,t.value)}))}}}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},IVkz:function(e,t,n){"use strict";var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function c(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}for(var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&i.test(e)},s=[],p=0;p<256;++p)s.push((p+256).toString(16).substr(1));t.a=function(e,t,n){var o=(e=e||{}).random||(e.rng||c)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n}(o)}}}]);