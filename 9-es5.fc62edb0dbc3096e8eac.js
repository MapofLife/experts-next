!function(){function e(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(s)throw a}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5+sL":function(n,t,i){"use strict";i.r(t),i.d(t,"DashboardModule",(function(){return ue}));var a,c=i("sEIs"),s=i("2kYt"),p=i("jxfh"),d=i("M0ag"),l=i("PBFl"),_=i("csyo"),g=i("EM62"),b=((a=function e(){r(this,e)}).\u0275mod=g.Nb({type:a}),a.\u0275inj=g.Mb({factory:function(e){return new(e||a)},imports:[[s.c,l.c,d.a,_.a,p.c,c.j]]}),a),m=i("XZLj"),u=i("nIj0"),f=i("IVkz"),h=i("OZ4H"),C=i("QlUG"),M=i("wnGv"),O=i("UwWW"),P=i("VkHG");function v(e,n){if(1&e&&(g.Vb(0,"div"),g.Ic(1),g.Ub(),g.Vb(2,"div",14),g.Ic(3),g.Ub()),2&e){var t=n.$implicit;g.Cb(1),g.Jc(t.scientificname),g.Cb(2),g.Jc(t.vernacular)}}var w,y,x=((y=function(){function e(n,t,o,i,a){r(this,e),this.dialogRef=n,this.speciesService=t,this.userDatasetService=o,this.authService=i,this.router=a,this.taxonomicGroupItems=[],this.userFullName=""}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.form=new u.i({title:new u.f("",[u.F.required]),group:new u.f("",[u.F.required]),species:new u.f({value:"",disabled:!0},[u.F.required])}),this.authService.currentUser.subscribe((function(n){e.userFullName=n.fullname})),this.form.get("group").valueChanges.subscribe((function(n){n?e.form.get("species").enable():e.form.get("species").disable()})),this.speciesDisplayFn=function(e){return null==e?void 0:e.scientificname},this.speciesSearchFn=function(n){return e.speciesService.search(n,e.form.get("group").value.value)},this.speciesService.availableTaxa().subscribe((function(n){e.taxonomicGroupItems=n.map((function(e){return{value:e.taxa,label:e.title}}))}))}},{key:"selectSpecies",value:function(e){this.form.patchValue({species:e})}},{key:"createMap",value:function(){var e=this;if(this.form.valid){var n=f.a();this.userDatasetService.addDataset({dataset_id:n,dataset_title:this.form.get("title").value,taxa:this.form.get("group").value.label,product_type:"range",license_holder:this.userFullName,license:"cco"}).subscribe((function(){e.router.navigate(["map",n],{queryParams:{species:e.form.get("species").value.scientificname}}),e.dialogRef.close()}))}}}]),e}()).\u0275fac=function(e){return new(e||y)(g.Pb(h.g),g.Pb(m.g),g.Pb(m.k),g.Pb(m.b),g.Pb(c.f))},y.\u0275cmp=g.Jb({type:y,selectors:[["mol-dataset-create-modal"]],decls:16,vars:12,consts:[[1,"create-map__wrapper"],[1,"title"],[1,"rectangle"],[1,"create-map__form",3,"formGroup"],["ngForm","ngForm"],[1,"title-input-wrapper"],["formControlName","title",1,"title-input",3,"title","required"],[1,"tax-group-wrapper"],["formControlName","group",3,"title","items","required"],[1,"species-group-wrapper"],["formControlName","species",3,"title","searchFn","displayFn","itemTemplate","selectedItem"],["speciesSearchTemplate",""],[1,"button-wrapper"],[3,"title","disabled","click"],[1,"sub-select"]],template:function(e,n){if(1&e&&(g.Vb(0,"div",0),g.Vb(1,"h2",1),g.Ic(2,"Create a new Range Map dataset:"),g.Ub(),g.Vb(3,"div",2),g.Vb(4,"form",3,4),g.Vb(6,"div",5),g.Qb(7,"mol-input",6),g.Ub(),g.Vb(8,"div",7),g.Qb(9,"mol-select",8),g.Ub(),g.Vb(10,"div",9),g.Vb(11,"mol-search-select",10),g.dc("selectedItem",(function(e){return n.selectSpecies(e)})),g.Ub(),g.Gc(12,v,4,2,"ng-template",null,11,g.Hc),g.Ub(),g.Vb(14,"div",12),g.Vb(15,"mol-button",13),g.dc("click",(function(){return n.createMap()})),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e){var t=g.uc(5),o=g.uc(13);g.Cb(4),g.nc("formGroup",n.form),g.Cb(3),g.nc("title","Project Title:")("required",!0),g.Cb(2),g.nc("title","Taxonomic group:")("items",n.taxonomicGroupItems)("required",!0),g.Cb(2),g.nc("title","Select your first species:")("searchFn",n.speciesSearchFn)("displayFn",n.speciesDisplayFn)("itemTemplate",o),g.Cb(4),g.nc("title","Create Range Map")("disabled",t.invalid)}},directives:[u.H,u.s,u.j,C.a,u.r,u.h,u.C,M.a,O.a,P.a],styles:[".create-map__wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-family:Fira Sans;font-size:16px;font-weight:500;letter-spacing:0;line-height:23px}.create-map__wrapper[_ngcontent-%COMP%]   .sub-select[_ngcontent-%COMP%]{margin-left:10px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]{width:404px;padding:50px 50px 36px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .tax-group-wrapper[_ngcontent-%COMP%], .create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .title-input-wrapper[_ngcontent-%COMP%]{margin-bottom:40px}.create-map__wrapper[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin-top:35px;display:flex;justify-content:center}"]}),y),V=((w=function e(){r(this,e)}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=g.Jb({type:w,selectors:[["mol-dashboard-header"]],decls:1,vars:0,consts:[[1,"dashboard-header__wrapper"]],template:function(e,n){1&e&&g.Qb(0,"section",0)},styles:[".dashboard-header__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;height:30px;padding:0 40px;background-color:#8cbf44;font-family:Fira Sans}.dashboard-header__wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;font-size:18px;color:#fff;margin-left:50px;cursor:pointer}"]}),w);function U(e,n){if(1&e&&(g.Vb(0,"section",5),g.Vb(1,"a",6),g.Qb(2,"div",7),g.Vb(3,"div",8),g.Ic(4),g.Ub(),g.Vb(5,"div",9),g.Ic(6,"Datasets created"),g.Ub(),g.Ub(),g.Vb(7,"a",10),g.Qb(8,"div",7),g.Vb(9,"div",8),g.Ic(10),g.Ub(),g.Vb(11,"div",9),g.Ic(12,"Species with evaluated models"),g.Ub(),g.Ub(),g.Ub()),2&e){var t=g.hc();g.Cb(4),g.Jc(t.userDatasets.length),g.Cb(6),g.Jc(t.votedSpecies.length)}}var k=function(e){return["/dataset",e]},I=function(e){return["/map",e]};function S(e,n){if(1&e&&(g.Vb(0,"div",18),g.Vb(1,"div",16),g.Ic(2),g.Ub(),g.Vb(3,"div",19),g.Vb(4,"div",20),g.Qb(5,"img",21),g.Ub(),g.Vb(6,"div",22),g.Ic(7),g.Ub(),g.Ub(),g.Vb(8,"div",23),g.Ic(9),g.Ub(),g.Ub()),2&e){var t=n.$implicit;g.nc("routerLink",0!==t.no_species?g.qc(5,k,t.dataset_id):g.qc(7,I,t.dataset_id)),g.Cb(2),g.Jc(t.dataset_title),g.Cb(3),g.oc("src","https://mol.org/static/img/groups/taxa_"+t.taxa.toLowerCase()+".png",g.Ac),g.Cb(2),g.Jc(t.taxa),g.Cb(2),g.Kc("",t.no_species," Species")}}function D(e,n){if(1&e){var t=g.Wb();g.Vb(0,"section",11),g.Vb(1,"div",12),g.Ic(2),g.Ub(),g.Vb(3,"div",13),g.Gc(4,S,10,9,"div",14),g.Vb(5,"div",15),g.dc("click",(function(){return g.yc(t),g.hc().createDataset()})),g.Vb(6,"div",16),g.Ic(7,"Create New Range Map Dataset"),g.Ub(),g.Vb(8,"span",17),g.Ic(9," add "),g.Ub(),g.Ub(),g.Ub(),g.Ub()}if(2&e){var o=g.hc();g.Cb(2),g.Kc("Drafts (",o.userDatasets.length,")"),g.Cb(2),g.nc("ngForOf",o.userDatasets)}}function F(e,n){1&e&&g.Qb(0,"mat-spinner")}function G(e,n){if(1&e&&(g.Vb(0,"div",18),g.Vb(1,"div",16),g.Ic(2),g.Ub(),g.Vb(3,"div",19),g.Vb(4,"div",20),g.Qb(5,"img",21),g.Ub(),g.Vb(6,"div",22),g.Ic(7),g.Ub(),g.Ub(),g.Vb(8,"div",23),g.Ic(9),g.Ub(),g.Ub()),2&e){var t=n.$implicit;g.nc("routerLink",0!==t.no_species?g.qc(5,k,t.dataset_id):g.qc(7,I,t.dataset_id)),g.Cb(2),g.Jc(t.dataset_title),g.Cb(3),g.oc("src","https://mol.org/static/img/groups/taxa_"+t.taxa.toLowerCase()+".png",g.Ac),g.Cb(2),g.Jc(t.taxa),g.Cb(2),g.Kc("",t.no_species," Species")}}function L(e,n){if(1&e&&(g.Vb(0,"section",11),g.Vb(1,"div",12),g.Ic(2,"Finalised range map datasets"),g.Ub(),g.Vb(3,"div",13),g.Gc(4,G,10,9,"div",14),g.Vb(5,"div",24),g.Vb(6,"div",16),g.Ic(7,"Create New Range Map Dataset"),g.Ub(),g.Vb(8,"span",17),g.Ic(9," add "),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e){var t=g.hc();g.Cb(4),g.nc("ngForOf",t.userFinalizedDatasets)}}var T,j=((T=function(){function e(n,t,o){r(this,e),this.userDatasetService=n,this.speciesService=t,this.dialog=o,this.isLoadingDatasets=!0,this.isLoadingVotedSpecies=!0,this.userDatasets=[],this.userFinalizedDatasets=[],this.votedSpecies=[]}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.userDatasetService.list().subscribe((function(n){e.isLoadingDatasets=!1,e.userDatasets=n.filter((function(e){return"QUEUED"===e.status})),e.userFinalizedDatasets=n.filter((function(e){return"QUEUED"!==e.status}))})),this.speciesService.getSpeciesWithVotes().subscribe((function(n){e.isLoadingVotedSpecies=!1,e.votedSpecies=n}))}},{key:"createDataset",value:function(){this.dialog.open(x,{})}},{key:"isLoading",get:function(){return!(!this.isLoadingDatasets&&!this.isLoadingVotedSpecies)}}]),e}()).\u0275fac=function(e){return new(e||T)(g.Pb(m.k),g.Pb(m.g),g.Pb(h.b))},T.\u0275cmp=g.Jb({type:T,selectors:[["mol-dashboard-root"]],decls:7,vars:4,consts:[[1,"dashboard-page__wrapper"],["class","species-ranges__wrapper",4,"ngIf"],["class","blocks",4,"ngIf"],[1,"spinner__wrapper"],[4,"ngIf"],[1,"species-ranges__wrapper"],["routerLink","summary",1,"species-item","ranges"],[1,"coloured-line"],[1,"number"],[1,"text"],["routerLink","summary",1,"species-item","models"],[1,"blocks"],[1,"title"],[1,"blocks__wrapper"],["class","block",3,"routerLink",4,"ngFor","ngForOf"],[1,"block","new",3,"click"],[1,"block-title"],[1,"material-icons","add","block-plus-sign"],[1,"block",3,"routerLink"],[1,"block-type"],[1,"block-type-image"],["alt","Species taxa",3,"src"],[1,"block-type-name"],[1,"clovk-species-amount"],["routerLink","/welcome",1,"block","new"]],template:function(e,n){1&e&&(g.Qb(0,"mol-dashboard-header"),g.Vb(1,"section",0),g.Gc(2,U,13,2,"section",1),g.Gc(3,D,10,2,"section",2),g.Vb(4,"div",3),g.Gc(5,F,1,0,"mat-spinner",4),g.Ub(),g.Gc(6,L,10,1,"section",2),g.Ub()),2&e&&(g.Cb(2),g.nc("ngIf",!n.isLoading),g.Cb(1),g.nc("ngIf",!n.isLoading),g.Cb(2),g.nc("ngIf",n.isLoading),g.Cb(1),g.nc("ngIf",!n.isLoading&&0!==n.userFinalizedDatasets.length))},directives:[V,s.t,c.i,s.s,c.g,_.b],styles:[".dashboard-page__wrapper[_ngcontent-%COMP%]{max-width:1040px;margin-left:auto;margin-right:auto}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]{font-family:Fira Sans;display:flex;align-items:center;justify-content:space-between;margin-top:51px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:21px;font-weight:300;letter-spacing:0;height:131px;width:47%;position:relative;box-shadow:0 2px 6px 0 #ddd;color:#000}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]:hover{background-color:#e9e9e9}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{position:absolute;background-color:#e9e9e9;height:100%;width:19px;left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item.ranges[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{background-color:#8cbf44}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:60px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:20px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]{margin-top:50px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333;font-family:Fira Sans;font-size:21px;font-weight:500;letter-spacing:0;line-height:31px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]{margin-top:12px;display:flex;flex-wrap:wrap}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{transition:all .3s;border-radius:4px;box-shadow:0 2px 6px 0 #ddd;height:247px;width:245px;cursor:pointer;padding-left:28px;margin-bottom:14px;margin-right:14px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:hover{background-color:#e9e9e9;box-shadow:0 10px 6px 0 #ddd;margin-top:-8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.blue[_ngcontent-%COMP%]{background-color:#062d66;color:#fff}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.blue[_ngcontent-%COMP%]:hover{background-color:#001d47;margin-top:-8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]{border:3px dashed #062d66}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{color:#062d66;font-family:Fira Sans;font-size:16px;margin-top:124px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block.new[_ngcontent-%COMP%]   .block-plus-sign[_ngcontent-%COMP%]{margin-top:19px;margin-left:-9px;height:30px;line-height:30px;color:#062d66;font-size:50px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-top:117px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]{display:flex;margin-top:17px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-image[_ngcontent-%COMP%]{height:30px;width:30px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-type[_ngcontent-%COMP%]   .block-type-name[_ngcontent-%COMP%]{margin-left:7px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .blocks[_ngcontent-%COMP%]   .blocks__wrapper[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-species-amount[_ngcontent-%COMP%]{margin-top:8px}.dashboard-page__wrapper[_ngcontent-%COMP%]   .spinner__wrapper[_ngcontent-%COMP%]{margin-top:50px;width:100%;display:flex;justify-content:center}"]}),T),J=i("D57K"),z=i("8bJt");function E(e,n){if(1&e){var t=g.Wb();g.Vb(0,"div",10),g.Vb(1,"button",11),g.dc("click",(function(){g.yc(t);var e=g.hc();return e.redirectToMap(e.species.scientificname)})),g.Ic(2,"Change votes on map"),g.Ub(),g.Ub()}}function Q(e,n){1&e&&(g.Vb(0,"span",27),g.Ic(1," thumb_up_alt "),g.Ub())}function A(e,n){if(1&e&&g.Qb(0,"img",28),2&e){var t=g.hc(3);g.nc("src",t.bestModel.modelThumb,g.Ac)}}function R(e,n){if(1&e&&(g.Vb(0,"div",15),g.Vb(1,"div",6),g.Ic(2,"Best model"),g.Ub(),g.Vb(3,"div",16),g.Vb(4,"div",17),g.Vb(5,"div",18),g.Vb(6,"div",19),g.Ic(7),g.Ub(),g.Vb(8,"span",20),g.Ic(9," info "),g.Ub(),g.Ub(),g.Vb(10,"div",21),g.Vb(11,"div",22),g.Ic(12),g.Ub(),g.Gc(13,Q,2,0,"span",23),g.Ub(),g.Vb(14,"div",24),g.Gc(15,A,1,1,"img",25),g.Vb(16,"span",26),g.Ic(17,"stars"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e){var t=g.hc(2);g.Cb(7),g.Jc(t.bestModel.short_name),g.Cb(5),g.Jc(t.round(t.bestModel.vis.default)),g.Cb(1),g.nc("ngIf",t.bestModel.vis.default),g.Cb(2),g.nc("ngIf",!!t.bestModel.modelThumb)}}function N(e,n){1&e&&(g.Vb(0,"span",27),g.Ic(1," thumb_up_alt "),g.Ub())}function q(e,n){if(1&e&&g.Qb(0,"img",31),2&e){var t=g.hc().$implicit;g.nc("src",t.modelThumb,g.Ac)}}function $(e,n){if(1&e&&(g.Vb(0,"div",17),g.Vb(1,"div",18),g.Vb(2,"div",19),g.Ic(3),g.Ub(),g.Vb(4,"span",20),g.Ic(5," info "),g.Ub(),g.Ub(),g.Vb(6,"div",21),g.Vb(7,"div",22),g.Ic(8),g.Ub(),g.Gc(9,N,2,0,"span",23),g.Ub(),g.Vb(10,"div",24),g.Gc(11,q,1,1,"img",30),g.Ub(),g.Ub()),2&e){var t=n.$implicit,o=g.hc(3);g.Cb(3),g.Jc(t.short_name),g.Cb(5),g.Jc(o.round(t.vis.default)),g.Cb(1),g.nc("ngIf",!!t.vis.default),g.Cb(2),g.nc("ngIf",!!t.modelThumb)}}function W(e,n){if(1&e&&(g.Vb(0,"div",15),g.Vb(1,"div",6),g.Ic(2,"Retained models"),g.Ub(),g.Vb(3,"div",16),g.Gc(4,$,12,4,"div",29),g.Ub(),g.Ub()),2&e){var t=g.hc(2);g.Cb(4),g.nc("ngForOf",t.retainedModels)}}function H(e,n){1&e&&(g.Vb(0,"span",27),g.Ic(1," thumb_up_alt "),g.Ub())}function K(e,n){if(1&e&&g.Qb(0,"img",31),2&e){var t=g.hc().$implicit;g.nc("src",t.modelThumb,g.Ac)}}function B(e,n){if(1&e&&(g.Vb(0,"div",17),g.Vb(1,"div",18),g.Vb(2,"div",19),g.Ic(3),g.Ub(),g.Vb(4,"span",20),g.Ic(5," info "),g.Ub(),g.Ub(),g.Vb(6,"div",21),g.Vb(7,"div",22),g.Ic(8),g.Ub(),g.Gc(9,H,2,0,"span",23),g.Ub(),g.Vb(10,"div",24),g.Gc(11,K,1,1,"img",30),g.Ub(),g.Ub()),2&e){var t=n.$implicit,o=g.hc(3);g.Cb(3),g.Jc(t.short_name),g.Cb(5),g.Jc(o.round(t.vis.default)),g.Cb(1),g.nc("ngIf",!!t.vis.default),g.Cb(2),g.nc("ngIf",!!t.modelThumb)}}function Y(e,n){if(1&e&&(g.Vb(0,"div",15),g.Vb(1,"div",6),g.Ic(2,"Not ratained models"),g.Ub(),g.Vb(3,"div",16),g.Gc(4,B,12,4,"div",29),g.Ub(),g.Ub()),2&e){var t=g.hc(2);g.Cb(4),g.nc("ngForOf",t.notEvaluatedModels)}}function Z(e,n){1&e&&(g.Vb(0,"span",27),g.Ic(1," thumb_up_alt "),g.Ub())}function X(e,n){if(1&e&&g.Qb(0,"img",31),2&e){var t=g.hc().$implicit;g.nc("src",t.modelThumb,g.Ac)}}function ee(e,n){if(1&e&&(g.Vb(0,"div",17),g.Vb(1,"div",18),g.Vb(2,"div",19),g.Ic(3),g.Ub(),g.Vb(4,"span",20),g.Ic(5," info "),g.Ub(),g.Ub(),g.Vb(6,"div",21),g.Vb(7,"div",22),g.Ic(8),g.Ub(),g.Gc(9,Z,2,0,"span",23),g.Ub(),g.Vb(10,"div",32),g.Gc(11,X,1,1,"img",30),g.Ub(),g.Ub()),2&e){var t=n.$implicit,o=g.hc(3);g.Cb(3),g.Jc(t.short_name),g.Cb(5),g.Jc(o.round(t.vis.default)),g.Cb(1),g.nc("ngIf",!!t.vis.default),g.Cb(2),g.nc("ngIf",!!t.modelThumb)}}function ne(e,n){if(1&e&&(g.Vb(0,"div",15),g.Vb(1,"div",6),g.Ic(2,"Discarded models"),g.Ub(),g.Vb(3,"div",16),g.Gc(4,ee,12,4,"div",29),g.Ub(),g.Ub()),2&e){var t=g.hc(2);g.Cb(4),g.nc("ngForOf",t.discardedModels)}}function te(e,n){if(1&e&&(g.Vb(0,"div",12),g.Vb(1,"div",13),g.Gc(2,R,18,4,"div",14),g.Gc(3,W,5,1,"div",14),g.Gc(4,Y,5,1,"div",14),g.Gc(5,ne,5,1,"div",14),g.Ub(),g.Ub()),2&e){var t=g.hc();g.Cb(2),g.nc("ngIf",!!t.bestModel),g.Cb(1),g.nc("ngIf",0!==t.retainedModels.length),g.Cb(1),g.nc("ngIf",0!==t.notEvaluatedModels.length),g.Cb(1),g.nc("ngIf",0!==t.discardedModels.length)}}var oe,re=((oe=function(){function n(e,t){r(this,n),this.speciesService=e,this.router=t,this.existedModelThumb=[],this.isOpen=!1}return o(n,[{key:"ngOnInit",value:function(){var n=this;this.speciesService.getSpeciesModels(this.species.scientificname).subscribe((function(t){n.models=t;var o,r=e(t);try{for(r.s();!(o=r.n()).done;){var i=o.value;n.getModelSrc(i.molid)}}catch(a){r.e(a)}finally{r.f()}}))}},{key:"getModelSrc",value:function(e){return Object(J.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=this.models.find((function(n){return n.molid===e})),this.existedModelThumb.includes(t.molid)||(this.existedModelThumb.push(t.molid),this.speciesService.getSpeciesModelThumb(t.molid,156,156).subscribe((function(e){return t.modelThumb=e})));case 2:case"end":return n.stop()}}),n,this)})))}},{key:"toggle",value:function(){this.isOpen=!this.isOpen}},{key:"redirectToMap",value:function(e){this.router.navigate(["map","vote"],{queryParams:{dataset:e}})}},{key:"round",value:function(e){return Math.round(100*e)/100}},{key:"bestModel",get:function(){return this.models.find((function(e){return e.user.status===z.a.BEST}))}},{key:"retainedModels",get:function(){return this.models.filter((function(e){return e.user.status===z.a.RETAINED}))}},{key:"notEvaluatedModels",get:function(){return this.models.filter((function(e){return e.user.status===z.a.NOT_EVALUATED}))}},{key:"discardedModels",get:function(){return this.models.filter((function(e){return e.user.status===z.a.DISCARDED}))}}]),n}()).\u0275fac=function(e){return new(e||oe)(g.Pb(m.g),g.Pb(c.f))},oe.\u0275cmp=g.Jb({type:oe,selectors:[["mol-models-container"]],inputs:{species:"species"},decls:13,vars:6,consts:[[1,"model-container__wrapper"],[1,"model-container__header"],[1,"header-left-part"],[1,"arrow__wrapper"],[1,"material-icons","arrow-up",3,"click"],[1,"header-text"],[1,"name"],[1,"title"],["class","header-right-part",4,"ngIf"],["class","model-container__content",4,"ngIf"],[1,"header-right-part"],["mat-button","",1,"view-on-map",3,"click"],[1,"model-container__content"],[1,"models__wrapper"],["class","model-items",4,"ngIf"],[1,"model-items"],[1,"model-items__wrapper"],[1,"model-item"],[1,"model-number__wrapper"],[1,"model-number"],[1,"material-icons","info"],[1,"model-rating__wrapper"],[1,"model-rating"],["class","material-icons thumb_up_alt",4,"ngIf"],[1,"model-picture"],["alt","map picture","class","best",3,"src",4,"ngIf"],["md-16","",1,"material-icons","stars","star-icon"],[1,"material-icons","thumb_up_alt"],["alt","map picture",1,"best",3,"src"],["class","model-item",4,"ngFor","ngForOf"],["alt","map picture",3,"src",4,"ngIf"],["alt","map picture",3,"src"],[1,"model-picture","discard"]],template:function(e,n){1&e&&(g.Vb(0,"section",0),g.Vb(1,"div",1),g.Vb(2,"div",2),g.Vb(3,"div",3),g.Vb(4,"span",4),g.dc("click",(function(){return n.toggle()})),g.Ic(5," keyboard_arrow_up "),g.Ub(),g.Ub(),g.Vb(6,"div",5),g.Vb(7,"div",6),g.Ic(8),g.Ub(),g.Vb(9,"div",7),g.Ic(10),g.Ub(),g.Ub(),g.Ub(),g.Gc(11,E,3,0,"div",8),g.Ub(),g.Gc(12,te,6,4,"div",9),g.Ub()),2&e&&(g.Cb(4),g.Gb("rotate",n.isOpen),g.Cb(4),g.Jc(n.species.commonname),g.Cb(2),g.Jc(n.species.scientificname),g.Cb(1),g.nc("ngIf",n.isOpen),g.Cb(1),g.nc("ngIf",n.isOpen))},directives:[s.t,l.b,s.s],styles:[".model-container__wrapper[_ngcontent-%COMP%]{margin-top:10px;font-family:Fira Sans;color:#424242;border-bottom:2px solid #ddd}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:space-between;margin-bottom:50px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]{display:flex}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%]{transition:all .3s;transform:rotate(0)}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .arrow-up.rotate[_ngcontent-%COMP%]{transform:rotate(180deg)}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{margin-left:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:21px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-left-part[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;font-style:italic;font-weight:300;letter-spacing:0;margin-top:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__header[_ngcontent-%COMP%]   .header-right-part[_ngcontent-%COMP%]   .view-on-map[_ngcontent-%COMP%]{background-color:#062d66;color:#fff;height:40px;font-family:Fira Sans;width:190px;border-radius:2px;font-size:16px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:34px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:21px;font-weight:300}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]{display:flex;margin-right:50px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]{margin-right:20px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:16px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]   .model-number[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-number__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-left:12px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]{display:flex;margin-top:15px;height:27px}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]   .model-rating[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-rating__wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-left:10px;color:#6b6}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]{margin-top:9px;height:156px;width:156px;margin-bottom:63px;position:relative}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture.discard[_ngcontent-%COMP%]{opacity:1%}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   img.best[_ngcontent-%COMP%]{border:4px solid #6b6}.model-container__wrapper[_ngcontent-%COMP%]   .model-container__content[_ngcontent-%COMP%]   .models__wrapper[_ngcontent-%COMP%]   .model-items__wrapper[_ngcontent-%COMP%]   .model-item[_ngcontent-%COMP%]   .model-picture[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]{position:absolute;font-size:30px;left:calc(50% - 16px);top:calc(50% - 16px);color:#6b6;border-radius:50%;border:2px solid #fff;background-color:#fff}"]}),oe);function ie(e,n){if(1&e&&(g.Vb(0,"section",6),g.Vb(1,"a",7),g.Qb(2,"div",8),g.Vb(3,"div",9),g.Ic(4),g.Ub(),g.Vb(5,"div",10),g.Ic(6,"Datasets created"),g.Ub(),g.Ub(),g.Vb(7,"a",11),g.Qb(8,"div",8),g.Vb(9,"div",9),g.Ic(10),g.Ub(),g.Vb(11,"div",10),g.Ic(12,"Species with evaluated models"),g.Ub(),g.Ub(),g.Ub()),2&e){var t=g.hc();g.Cb(4),g.Jc(t.userDatasets.length),g.Cb(6),g.Jc(t.votedSpecies.length)}}function ae(e,n){1&e&&(g.Vb(0,"section",12),g.Ic(1," Here is a summary of your votes for species distribution models, ordered by species, model and suitability threshold. "),g.Ub())}function ce(e,n){1&e&&(g.Vb(0,"section",13),g.Vb(1,"div",14),g.Vb(2,"div",15),g.Vb(3,"span",16),g.Ic(4," thumb_up_alt "),g.Ub(),g.Ub(),g.Vb(5,"div",10),g.Ic(6,"You gave a positive vote to this threshold."),g.Ub(),g.Ub(),g.Vb(7,"div",14),g.Vb(8,"div",15),g.Vb(9,"span",17),g.Ic(10," stars "),g.Ub(),g.Ub(),g.Vb(11,"div",10),g.Ic(12," You marked this model as the best one for a given species. "),g.Ub(),g.Ub(),g.Ub())}function se(e,n){1&e&&g.Qb(0,"mol-models-container",19),2&e&&g.nc("species",n.$implicit)}function pe(e,n){if(1&e&&(g.Tb(0),g.Gc(1,se,1,1,"mol-models-container",18),g.Sb()),2&e){var t=g.hc();g.Cb(1),g.nc("ngForOf",t.votedSpecies)}}function de(e,n){1&e&&g.Qb(0,"mat-spinner")}var le,_e,ge,be=[{path:"",component:j},{path:"summary",component:(le=function(){function e(n,t){r(this,e),this.userDatasetService=n,this.speciesService=t,this.isLoadingDatasets=!0,this.isLoadingVotedSpecies=!0,this.userDatasets=[],this.votedSpecies=[]}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.userDatasetService.list().subscribe((function(n){e.isLoadingDatasets=!1,e.userDatasets=n})),this.speciesService.getSpeciesWithVotes().subscribe((function(n){e.isLoadingVotedSpecies=!1,e.votedSpecies=n}))}},{key:"isLoading",get:function(){return!(!this.isLoadingDatasets&&!this.isLoadingVotedSpecies)}}]),e}(),le.\u0275fac=function(e){return new(e||le)(g.Pb(m.k),g.Pb(m.g))},le.\u0275cmp=g.Jb({type:le,selectors:[["mol-dashboard-summary"]],decls:8,vars:5,consts:[[1,"dashboard-summary-page__wrapper"],["class","species-ranges__wrapper",4,"ngIf"],["class","dashboard-summary-text",4,"ngIf"],["class","dashboard-summary-votes",4,"ngIf"],[4,"ngIf"],[1,"spinner__wrapper"],[1,"species-ranges__wrapper"],["routerLink","/dashboard",1,"species-item","ranges"],[1,"coloured-line"],[1,"number"],[1,"text"],["routerLink","/dashboard/summary",1,"species-item","models"],[1,"dashboard-summary-text"],[1,"dashboard-summary-votes"],[1,"text-with-icon-group"],[1,"icon"],[1,"material-icons","thumb_up_alt"],[1,"material-icons","stars"],[3,"species",4,"ngFor","ngForOf"],[3,"species"]],template:function(e,n){1&e&&(g.Qb(0,"mol-dashboard-header"),g.Vb(1,"section",0),g.Gc(2,ie,13,2,"section",1),g.Gc(3,ae,2,0,"section",2),g.Gc(4,ce,13,0,"section",3),g.Gc(5,pe,2,1,"ng-container",4),g.Vb(6,"div",5),g.Gc(7,de,1,0,"mat-spinner",4),g.Ub(),g.Ub()),2&e&&(g.Cb(2),g.nc("ngIf",!n.isLoading),g.Cb(1),g.nc("ngIf",!n.isLoading),g.Cb(1),g.nc("ngIf",!n.isLoading),g.Cb(1),g.nc("ngIf",!n.isLoading),g.Cb(2),g.nc("ngIf",n.isLoading))},directives:[V,s.t,c.i,s.s,re,_.b],styles:[".dashboard-summary-page__wrapper[_ngcontent-%COMP%]{max-width:1040px;color:#333;font-family:Fira Sans;margin-left:auto;margin-right:auto}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .spinner__wrapper[_ngcontent-%COMP%]{margin-top:50px;width:100%;display:flex;justify-content:center}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:51px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:21px;font-weight:300;letter-spacing:0;height:131px;width:47%;position:relative;box-shadow:0 2px 6px 0 #ddd;color:#000}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]:hover{background-color:#e9e9e9}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{position:absolute;background-color:#e9e9e9;height:100%;width:19px;left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item.ranges[_ngcontent-%COMP%]   .coloured-line[_ngcontent-%COMP%]{background-color:#8cbf44}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-size:60px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .species-ranges__wrapper[_ngcontent-%COMP%]   .species-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:20px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-text[_ngcontent-%COMP%]{margin-top:50px;width:602px;font-size:16px;font-weight:500;letter-spacing:0;line-height:22px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]{margin-top:20px;display:flex}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]{display:flex;margin-right:27px;align-items:center}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#6b6}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px}.dashboard-summary-page__wrapper[_ngcontent-%COMP%]   .dashboard-summary-votes[_ngcontent-%COMP%]   .text-with-icon-group[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:10px;font-size:16px;font-weight:300;letter-spacing:0}"]}),le)}],me=((ge=function e(){r(this,e)}).\u0275mod=g.Nb({type:ge}),ge.\u0275inj=g.Mb({factory:function(e){return new(e||ge)},imports:[[s.c,c.j.forChild(be)],c.j]}),ge),ue=((_e=function e(){r(this,e)}).\u0275mod=g.Nb({type:_e}),_e.\u0275inj=g.Mb({factory:function(e){return new(e||_e)},imports:[[c.j,b,me]]}),_e)},D57K:function(e,n,t){"use strict";function o(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(n){i(n)}}function c(e){try{s(o.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((o=o.apply(e,n||[])).next())}))}function r(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(t){n[t]=e[t]&&function(n){return new Promise((function(o,r){!function(e,n,t,o){Promise.resolve(o).then((function(n){e({value:n,done:t})}),n)}(o,r,(n=e[t](n)).done,n.value)}))}}}t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return r}))},IVkz:function(e,n,t){"use strict";var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function i(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}for(var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,c=function(e){return"string"==typeof e&&a.test(e)},s=[],p=0;p<256;++p)s.push((p+256).toString(16).substr(1));n.a=function(e,n,t){var o=(e=e||{}).random||(e.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=o[r];return n}return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(s[e[n+0]]+s[e[n+1]]+s[e[n+2]]+s[e[n+3]]+"-"+s[e[n+4]]+s[e[n+5]]+"-"+s[e[n+6]]+s[e[n+7]]+"-"+s[e[n+8]]+s[e[n+9]]+"-"+s[e[n+10]]+s[e[n+11]]+s[e[n+12]]+s[e[n+13]]+s[e[n+14]]+s[e[n+15]]).toLowerCase();if(!c(t))throw TypeError("Stringified UUID is invalid");return t}(o)}}}])}();