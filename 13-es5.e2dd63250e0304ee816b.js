!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+jnO":function(e,i,a){"use strict";a.r(i),a.d(i,"PredictionLandingModule",(function(){return pt}));var c,o=a("2kYt"),r=a("sEIs"),s=a("EM62"),l=a("J7xr"),u=function(t,e){return{container:t,"container-filter":e}},d=((c=function(){function e(n){t(this,e),this.router=n,this.links=[{name:"Projects",route:"/"}]}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngDoCheck",value:function(){this.predictions=this.router.url.includes("predictions/taxa")}}]),e}()).\u0275fac=function(t){return new(t||c)(s.Pb(r.f))},c.\u0275cmp=s.Jb({type:c,selectors:[["mol-root"]],decls:3,vars:5,consts:[[3,"links"],[3,"ngClass"]],template:function(t,e){1&t&&(s.Qb(0,"mol-nav",0),s.Vb(1,"div",1),s.Qb(2,"router-outlet"),s.Ub()),2&t&&(s.mc("links",e.links),s.Cb(1),s.mc("ngClass",s.qc(2,u,!e.predictions,e.predictions)))},directives:[l.a,o.q,r.k],styles:[".container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%], .search-box[_ngcontent-%COMP%]{width:90%;margin:0 auto}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-filter[_ngcontent-%COMP%]{width:75%;margin:0 auto}"]}),c),m=a("XZLj"),b=a("wqq/"),f=a("Meci"),p=a("nts4");function g(t,e){if(1&t){var n=s.Wb();s.Vb(0,"div",5),s.Vb(1,"mat-card",6),s.dc("click",(function(){s.xc(n);var t=e.$implicit;return s.hc(2).navigate(t)})),s.Qb(2,"img",7),s.Vb(3,"mat-card-content"),s.Vb(4,"h5",8),s.Hc(5),s.Ub(),s.Vb(6,"h5"),s.Hc(7),s.Ub(),s.Vb(8,"h5"),s.Hc(9),s.Ub(),s.Vb(10,"h5"),s.Hc(11),s.Ub(),s.Vb(12,"h5"),s.Hc(13),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&t){var i=e.$implicit;s.Cb(2),s.mc("src",i.imgSrc,s.zc),s.Cb(3),s.Ic(i.taxa),s.Cb(2),s.Jc("Total Species: ",i.tsp,""),s.Cb(2),s.Jc("Total Species with Predictions: ",i.tspp,""),s.Cb(2),s.Jc("Total Predictions: ",i.tp,""),s.Cb(2),s.Jc("Total Evaluations Evaluated: ",i.tpe,"")}}function h(t,e){if(1&t&&(s.Vb(0,"div",3),s.Fc(1,g,14,6,"div",4),s.Ub()),2&t){var n=s.hc();s.Cb(1),s.mc("ngForOf",n.groupSummaries)}}function C(t,e){1&t&&(s.Vb(0,"div",3),s.Hc(1," This project has 0 species models. Please check back soon.\n"),s.Ub())}function v(t,e){1&t&&(s.Qb(0,"mol-spinner"),s.Hc(1," Loading... "))}var _,x,y=((_=function(){function e(n,i,a){t(this,e),this.router=n,this.route=i,this.predictions=a,this.groupSummaries=null,this.project_id=null}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.project_id=this.route.snapshot.queryParamMap.get("project_id"),this.predictions.taxaSummaries(this.project_id).pipe(Object(b.a)(1)).subscribe((function(e){e.forEach((function(t){t.imgSrc="odonates"!==t.taxa?"https://mol.org/static/img/groups/taxa_"+t.taxa.replace("sdm_","")+".png":"https://cdn.mol.org/static/images/groups/taxa_odonates.png"})),t.groupSummaries=e}))}},{key:"navigate",value:function(t){this.router.navigate(["taxa",t.taxa],{relativeTo:this.route,queryParams:{project_id:this.project_id}})}}]),e}()).\u0275fac=function(t){return new(t||_)(s.Pb(r.f),s.Pb(r.a),s.Pb(m.e))},_.\u0275cmp=s.Jb({type:_,selectors:[["mol-prediction-summary"]],decls:4,vars:3,consts:[["class","card-container",4,"ngIf","ngIfElse"],["class","card-container",4,"ngIf"],["loading",""],[1,"card-container"],["class","summary",4,"ngFor","ngForOf"],[1,"summary"],[1,"taxa-card",3,"click"],["mat-card-image","",3,"src"],[1,"taxa-header"]],template:function(t,e){if(1&t&&(s.Fc(0,h,2,1,"div",0),s.Fc(1,C,2,0,"div",1),s.Fc(2,v,2,0,"ng-template",null,2,s.Gc)),2&t){var n=s.tc(3);s.mc("ngIf",e.groupSummaries)("ngIfElse",n),s.Cb(1),s.mc("ngIf",e.groupSummaries&&0==e.groupSummaries.length)}},directives:[o.t,o.s,f.a,f.c,f.b,p.a],styles:[".taxa-card[_ngcontent-%COMP%]{max-width:250px;margin:13px;flex:0 0 33.333333%}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}mat-card-content[_ngcontent-%COMP%]{cursor:pointer}mat-card-content[_ngcontent-%COMP%]   .taxa-header[_ngcontent-%COMP%]{font-weight:500;font-size:14pt;margin-bottom:5px}mat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:10pt;margin-top:1px;margin-bottom:1px}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 auto;width:90%}.mat-card-image[_ngcontent-%COMP%]{height:180px}"]}),_),P=a("nIj0"),M=a("jxfh"),O=a("M0ag"),w=a("zmEM"),j=a("FlRo"),F=a("iAde"),k=a("cePI"),V=a("R7+U"),U=a("Cd2c"),H=a("+Tre"),I=a("PBFl"),S=a("KZIX"),D=a("a1hw"),q=a("Jb3d"),T=a("bFHC"),J=a("s2Ay"),z=((x=function e(){t(this,e)}).\u0275mod=s.Nb({type:x}),x.\u0275inj=s.Mb({factory:function(t){return new(t||x)},imports:[[o.c,O.a,j.k,k.c,V.b,F.b,r.j,M.c,f.d,w.b,U.c,P.l,P.B,M.b,M.f,H.b,I.c,S.c,D.b,q.a,T.b,J.b]]}),x);a("8bJt");var $=a("mWib"),Q=a("29Wa"),E=a("mFH5");function A(t,e){if(1&t&&(s.Vb(0,"mat-option",30),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t){var n=e.$implicit;s.mc("value",n.key),s.Cb(1),s.Ic(s.jc(2,2,n.key))}}function N(t,e){if(1&t&&(s.Vb(0,"mat-option",30),s.Hc(1),s.ic(2,"titlecase"),s.Ub()),2&t){var n=e.$implicit;s.mc("value",n),s.Cb(1),s.Ic(s.jc(2,2,n))}}function R(t,e){1&t&&(s.Vb(0,"th",31),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"sci_name"),""))}function L(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.scientificname)}}function G(t,e){1&t&&(s.Vb(0,"th",33),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Ic(s.jc(2,1,"model_name")))}function W(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.model_name||"NA")}}function B(t,e){1&t&&(s.Vb(0,"th",34),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"latests_v"),""))}function X(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.version)}}function Z(t,e){1&t&&(s.Vb(0,"th",33),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"taxa"),""))}function K(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.ic(2,"titlecase"),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(s.jc(2,1,n.taxa))}}function Y(t,e){1&t&&(s.Vb(0,"th",33),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"status"),""))}function tt(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.status)}}function et(t,e){1&t&&(s.Vb(0,"th",35),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"eval_priority"),""))}function nt(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.priority||"NA")}}function it(t,e){1&t&&(s.Vb(0,"th",33),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Ic(s.jc(2,1,"evaluated_me")))}function at(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.evaluated_by_me||"NA")}}function ct(t,e){1&t&&(s.Vb(0,"th",33),s.Hc(1),s.ic(2,"translate"),s.Ub()),2&t&&(s.Cb(1),s.Jc(" ",s.jc(2,1,"evaluated_others"),""))}function ot(t,e){if(1&t&&(s.Vb(0,"td",32),s.Hc(1),s.Ub()),2&t){var n=e.$implicit;s.Cb(1),s.Ic(n.evaluated_by_others||"NA")}}function rt(t,e){1&t&&s.Qb(0,"tr",36)}function st(t,e){if(1&t){var n=s.Wb();s.Vb(0,"tr",37),s.dc("click",(function(){s.xc(n);var t=e.$implicit;return s.hc().navigateModelPage(t)})),s.Ub()}}var lt,ut,dt,mt=function(){return[25,50,100]},bt=[{path:"",component:d,children:[{path:"",component:y},{path:"taxa/:taxa",component:(lt=function(){function e(n,i,a,c){t(this,e),this.route=n,this.router=i,this.predictions=a,this.translation=c,this.columns=["scientificname","model_name","version","AUC","status","evaluated_by_me","evaluated_by_others","priority","taxa"],this.displayedColumns=["scientificname","version","priority","evaluated_by_me","evaluated_by_others","taxa"],this.aucOptions={floor:0,ceil:1,step:.1,disabled:!1},this.versions=[],this.query={scientificname:"",status:"",taxa:""},this.modelFilters={version:"",auc:{value:0,highValue:1},evaluated_by_me:0,evaluated_by_others:0},this.scientificnameFilter=new P.f({value:"",disabled:!1}),this.sortedData=new j.j}return n(e,[{key:"ngAfterViewInit",value:function(){}},{key:"ngOnInit",value:function(){var t=this,e=this.route.snapshot.queryParamMap;console.log(e),this.project_id=e.get("project_id"),this.query.scientificname=e.get("scientificname")||"",this.scientificnameFilter.setValue(this.query.scientificname),this.query.status=e.get("status")||"",this.query.taxa=e.get("taxa")||"",this.modelFilters.version=e.get("version")||"",this.modelFilters.auc.value=Number(e.get("aucMin"))||0,this.modelFilters.auc.highValue=Number(e.get("aucMax"))||1,this.sortedData.paginator=this.paginator,this.predictions.predictionsRequested||this.predictions.predictions("A",this.project_id,this.query,this.modelFilters),this.project_id&&this.predictions.predictionList.subscribe((function(e){e&&(t.dataSource=e,t.sortedData.data=e,t.taxaGroups=t.predictions.taxaGroups,t.versions=t.predictions.versions)})),this.scientificnameFilter.valueChanges.pipe(Object($.a)(500)).subscribe((function(e){t.query.scientificname=e,t.predictions.filter(t.query)}))}},{key:"tabChange",value:function(){}},{key:"compare",value:function(t,e,n){return(t<e?-1:1)*(n?1:-1)}},{key:"versionCompare",value:function(t,e,n){return t.localeCompare(e,void 0,{sensitivity:"base"})*(n?1:-1)}},{key:"sortData",value:function(t){var e=this,n=this.dataSource.slice();this.sortedData.data=t.active&&""!==t.direction?n.sort((function(n,i){var a="asc"===t.direction;switch(t.active){case"scientificname":return e.compare(n.scientificname,i.scientificname,a);case"version":return e.versionCompare(n.version,i.version,a);default:return 0}})):n}},{key:"setFilterQuery",value:function(){this.predictions.filter(this.query)}},{key:"setFilterModel",value:function(){this.predictions.filter(this.query,this.modelFilters)}},{key:"clearFilters",value:function(){this.query={scientificname:"",status:"",taxa:""},this.modelFilters={version:"",auc:{value:0,highValue:1},evaluated_by_me:0,evaluated_by_others:0},this.setFilterModel()}},{key:"navigateModelPage",value:function(t){var e=Object.assign({},this.modelFilters);e.aucMin=e.auc.value,e.aucMax=e.auc.highValue,delete e.auc,this.router.navigate(["/predictions/species/",t.scientificname.split(" ").join("_")],{queryParams:Object.assign(Object.assign({project_id:this.project_id,prediction_id:t.prediction_id},this.query),e)})}}]),e}(),lt.\u0275fac=function(t){return new(t||lt)(s.Pb(r.a),s.Pb(r.f),s.Pb(m.e),s.Pb(m.j))},lt.\u0275cmp=s.Jb({type:lt,selectors:[["mol-prediction-table"]],viewQuery:function(t,e){var n;1&t&&s.Dc(F.a,!0),2&t&&s.sc(n=s.ec())&&(e.paginator=n.first)},decls:70,vars:42,consts:[[1,"filter-heading"],[1,"filter-container"],[1,"filter-content"],[1,"search-filter"],["matInput","","autocomplete","off",3,"placeholder","formControl"],["appearance","standard",1,"dropdown-container"],[3,"value","selectionChange","valueChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"checkbox",3,"checked","change"],["mat-stroked-button","",3,"click"],["mat-align-tabs","right",3,"selectedTabChange"],[3,"label"],["matSort","","mat-table","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","scientificname"],["mat-header-cell","","mat-sort-header","scientificname",4,"matHeaderCellDef"],["mat-Cell","",4,"matCellDef"],["matColumnDef","model_name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","version"],["mat-header-cell","","mat-sort-header","version",4,"matHeaderCellDef"],["matColumnDef","taxa"],["matColumnDef","status"],["matColumnDef","priority"],["mat-header-cell","","mat-sort-header","priority",4,"matHeaderCellDef"],["matColumnDef","evaluated_by_me"],["matColumnDef","evaluated_by_others"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],[3,"value"],["mat-header-cell","","mat-sort-header","scientificname"],["mat-Cell",""],["mat-header-cell",""],["mat-header-cell","","mat-sort-header","version"],["mat-header-cell","","mat-sort-header","priority"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,e){1&t&&(s.Vb(0,"h4",0),s.Hc(1,"Filters: "),s.Ub(),s.Vb(2,"div",1),s.Vb(3,"div",2),s.Vb(4,"mat-form-field",3),s.Qb(5,"input",4),s.ic(6,"translate"),s.Ub(),s.Vb(7,"mat-form-field",5),s.Vb(8,"mat-label"),s.Hc(9),s.ic(10,"translate"),s.Ub(),s.Vb(11,"mat-select",6),s.dc("selectionChange",(function(){return e.setFilterQuery()}))("valueChange",(function(t){return e.query.taxa=t})),s.Vb(12,"mat-option",7),s.Hc(13),s.ic(14,"translate"),s.Ub(),s.Fc(15,A,3,4,"mat-option",8),s.ic(16,"keyvalue"),s.Ub(),s.Ub(),s.Vb(17,"mat-form-field",5),s.Vb(18,"mat-label"),s.Hc(19,"Versions"),s.Ub(),s.Vb(20,"mat-select",6),s.dc("selectionChange",(function(){return e.setFilterModel()}))("valueChange",(function(t){return e.modelFilters.version=t})),s.Vb(21,"mat-option",7),s.Hc(22),s.ic(23,"translate"),s.Ub(),s.Fc(24,N,3,4,"mat-option",8),s.Ub(),s.Ub(),s.Ub(),s.Vb(25,"div",2),s.Vb(26,"mat-checkbox",9),s.dc("change",(function(){return{}})),s.Hc(27),s.ic(28,"translate"),s.Ub(),s.Vb(29,"mat-checkbox",9),s.dc("change",(function(){return{}})),s.Hc(30),s.ic(31,"translate"),s.Ub(),s.Vb(32,"div"),s.Vb(33,"button",10),s.dc("click",(function(){return e.clearFilters()})),s.Hc(34),s.ic(35,"translate"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(36,"mat-tab-group",11),s.dc("selectedTabChange",(function(){return e.tabChange()})),s.Vb(37,"mat-tab",12),s.ic(38,"translate"),s.Qb(39,"mol-spinner"),s.Vb(40,"table",13),s.dc("matSortChange",(function(t){return e.sortData(t)})),s.Tb(41,14),s.Fc(42,R,3,3,"th",15),s.Fc(43,L,2,1,"td",16),s.Sb(),s.Tb(44,17),s.Fc(45,G,3,3,"th",18),s.Fc(46,W,2,1,"td",16),s.Sb(),s.Tb(47,19),s.Fc(48,B,3,3,"th",20),s.Fc(49,X,2,1,"td",16),s.Sb(),s.Tb(50,21),s.Fc(51,Z,3,3,"th",18),s.Fc(52,K,3,3,"td",16),s.Sb(),s.Tb(53,22),s.Fc(54,Y,3,3,"th",18),s.Fc(55,tt,2,1,"td",16),s.Sb(),s.Tb(56,23),s.Fc(57,et,3,3,"th",24),s.Fc(58,nt,2,1,"td",16),s.Sb(),s.Tb(59,25),s.Fc(60,it,3,3,"th",18),s.Fc(61,at,2,1,"td",16),s.Sb(),s.Tb(62,26),s.Fc(63,ct,3,3,"th",18),s.Fc(64,ot,2,1,"td",16),s.Sb(),s.Fc(65,rt,1,0,"tr",27),s.Fc(66,st,1,0,"tr",28),s.Ub(),s.Qb(67,"mat-paginator",29),s.Ub(),s.Qb(68,"mat-tab",12),s.ic(69,"translate"),s.Ub()),2&t&&(s.Cb(5),s.mc("placeholder",s.jc(6,21,"search_species"))("formControl",e.scientificnameFilter),s.Cb(4),s.Ic(s.jc(10,23,"taxa")),s.Cb(2),s.mc("value",e.query.taxa),s.Cb(2),s.Ic(s.jc(14,25,"any")),s.Cb(2),s.mc("ngForOf",s.jc(16,27,e.taxaGroups)),s.Cb(5),s.mc("value",e.modelFilters.version),s.Cb(2),s.Ic(s.jc(23,29,"any")),s.Cb(2),s.mc("ngForOf",e.versions),s.Cb(2),s.mc("checked",e.modelFilters.evaluated_by_me),s.Cb(1),s.Ic(s.jc(28,31,"evaluated_me")),s.Cb(2),s.mc("checked",e.modelFilters.evaluated_by_others),s.Cb(1),s.Ic(s.jc(31,33,"evaluated_others")),s.Cb(4),s.Ic(s.jc(35,35,"clear")),s.Cb(3),s.mc("label",s.jc(38,37,"view_all_predictions")),s.Cb(3),s.mc("dataSource",e.sortedData),s.Cb(25),s.mc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Cb(1),s.mc("pageSizeOptions",s.oc(41,mt))("pageSize",25),s.Cb(1),s.mc("label",s.jc(69,39,"view_scoresheet")))},directives:[Q.c,U.b,P.c,P.r,P.g,Q.g,V.a,E.n,o.s,H.a,I.b,S.b,S.a,p.a,j.i,k.a,j.b,j.d,j.a,j.f,j.h,F.a,j.c,k.b,j.e,j.g],pipes:[J.c,o.l,o.F],styles:[".statistics[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%;padding:10px;margin-top:30px;margin-bottom:30px}.statistics[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{vertical-align:middle;text-align:left;height:100%;margin:0;font-size:26pt}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]{text-align:center}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:18pt;color:#ff903f;font-weight:700;padding-bottom:6px}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:14pt}hr[_ngcontent-%COMP%]{border:0;border-top:2px solid #000}table[_ngcontent-%COMP%]{width:100%;margin:0}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:12pt}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{word-wrap:break-word}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:11pt}.main-td[_ngcontent-%COMP%]{font-weight:350}tr.detail-row[_ngcontent-%COMP%]{height:0}tr.detail-row[_ngcontent-%COMP%]   .mat-column-expandedDetail[_ngcontent-%COMP%]{margin:0 24px!important;padding:0!important}.filter-heading[_ngcontent-%COMP%]{font-weight:700;font-size:13pt;margin:30px 8px 3px 15px}.filter-container[_ngcontent-%COMP%]{width:85%;max-height:200px;border-radius:8px;border:1px solid #777575;margin:25px auto;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.mat-row[_ngcontent-%COMP%]:hover{background-color:#e8eaf6;cursor:pointer}.mat-stroked-button[_ngcontent-%COMP%]{margin-bottom:6px;margin-top:6px;margin-left:3px;background-color:#ff903f;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]:hover{background-color:#f7b17e;color:#000;cursor:pointer}.mat-column-isExpanded[_ngcontent-%COMP%]{width:5%!important;text-align:left}.mat-column-scientificname[_ngcontent-%COMP%]{width:21%!important;justify-content:flex-start}  .mat-sort-header-container{justify-content:center;gap:0}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:#f5f5f5}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-detail[_ngcontent-%COMP%]{border-radius:8px}.filter-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:98%}.filter-content[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{font-size:11pt;align-items:right;margin-right:2px;margin-top:0;margin-bottom:0;width:15%}.filter-content[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]{justify-content:right;margin-top:17px;width:15%}.filter-content[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]{margin-top:17px;margin-bottom:2px}.filter-content[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]   .ngx-slider[_ngcontent-%COMP%]{min-width:160px}.filter-content[_ngcontent-%COMP%]   .slider-heading[_ngcontent-%COMP%]{width:100%;text-align:center;font-weight:280;font-size:1.1em}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:enabled{margin-bottom:5px;margin-top:32px;background-color:#8cbf44;color:#fff}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:enabled   .mat-stroked-button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#8cbf44;cursor:pointer}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:disabled{margin-bottom:5px;margin-top:32px;color:#e8e8e8;background-color:#9d9d9d}.taxa-menu[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;gap:10px}"]}),lt)}]}],ft=((dt=function e(){t(this,e)}).\u0275mod=s.Nb({type:dt}),dt.\u0275inj=s.Mb({factory:function(t){return new(t||dt)},imports:[[o.c,r.j.forChild(bt)],r.j]}),dt),pt=((ut=function e(){t(this,e)}).\u0275mod=s.Nb({type:ut}),ut.\u0275inj=s.Mb({factory:function(t){return new(t||ut)},imports:[[ft,z]]}),ut)}}])}();