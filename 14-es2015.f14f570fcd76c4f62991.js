(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+jnO":function(t,e,n){"use strict";n.r(e),n.d(e,"PredictionLandingModule",(function(){return mt}));var a=n("2kYt"),i=n("sEIs"),c=n("EM62"),o=n("J7xr");const r=function(t,e){return{container:t,"container-filter":e}};let s=(()=>{class t{constructor(t){this.router=t,this.links=[{name:"Projects",route:"/"},{name:"Background",route:"/background"}]}ngOnInit(){}ngDoCheck(){this.predictions=this.router.url.includes("predictions/taxa")}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(i.f))},t.\u0275cmp=c.Kb({type:t,selectors:[["mol-root"]],decls:3,vars:5,consts:[[3,"links"],[3,"ngClass"]],template:function(t,e){1&t&&(c.Rb(0,"mol-nav",0),c.Wb(1,"div",1),c.Rb(2,"router-outlet"),c.Vb()),2&t&&(c.oc("links",e.links),c.Cb(1),c.oc("ngClass",c.sc(2,r,!e.predictions,e.predictions)))},directives:[o.a,a.q,i.k],styles:[".container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%], .search-box[_ngcontent-%COMP%]{width:90%;margin:0 auto}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-filter[_ngcontent-%COMP%]{width:75%;margin:0 auto}"]}),t})();var l=n("XZLj"),b=n("wqq/"),d=n("Meci"),u=n("nts4");function m(t,e){if(1&t){const t=c.Xb();c.Wb(0,"div",5),c.Wb(1,"mat-card",6),c.ec("click",(function(){c.zc(t);const n=e.$implicit;return c.ic(2).navigate(n)})),c.Rb(2,"img",7),c.Wb(3,"mat-card-content"),c.Wb(4,"h5",8),c.Jc(5),c.Vb(),c.Wb(6,"h5"),c.Jc(7),c.Vb(),c.Wb(8,"h5"),c.Jc(9),c.Vb(),c.Wb(10,"h5"),c.Jc(11),c.Vb(),c.Wb(12,"h5"),c.Jc(13),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){const t=e.$implicit;c.Cb(2),c.oc("src",t.imgSrc,c.Bc),c.Cb(3),c.Kc(t.taxa),c.Cb(2),c.Lc("Total Species: ",t.tsp,""),c.Cb(2),c.Lc("Total Species with Predictions: ",t.tspp,""),c.Cb(2),c.Lc("Total Predictions: ",t.tp,""),c.Cb(2),c.Lc("Total Evaluations Evaluated: ",t.tpe,"")}}function g(t,e){if(1&t&&(c.Wb(0,"div",3),c.Hc(1,m,14,6,"div",4),c.Vb()),2&t){const t=c.ic();c.Cb(1),c.oc("ngForOf",t.groupSummaries)}}function p(t,e){1&t&&(c.Wb(0,"div",3),c.Jc(1," This project has 0 species models. Please check back soon.\n"),c.Vb())}function h(t,e){1&t&&(c.Rb(0,"mol-spinner"),c.Jc(1," Loading... "))}let f=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.predictions=n,this.groupSummaries=null,this.project_id=null}ngOnInit(){this.project_id=this.route.snapshot.queryParamMap.get("project_id"),this.predictions.taxaSummaries(this.project_id).pipe(Object(b.a)(1)).subscribe(t=>{t.forEach(t=>{t.imgSrc="odonates"!==t.taxa?"https://mol.org/static/img/groups/taxa_"+t.taxa.replace("sdm_","")+".png":"https://cdn.mol.org/static/images/groups/taxa_odonates.png"}),this.groupSummaries=t})}navigate(t){this.router.navigate(["taxa",t.taxa],{relativeTo:this.route,queryParams:{project_id:this.project_id}})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(i.f),c.Qb(i.a),c.Qb(l.e))},t.\u0275cmp=c.Kb({type:t,selectors:[["mol-prediction-summary"]],decls:4,vars:3,consts:[["class","card-container",4,"ngIf","ngIfElse"],["class","card-container",4,"ngIf"],["loading",""],[1,"card-container"],["class","summary",4,"ngFor","ngForOf"],[1,"summary"],[1,"taxa-card",3,"click"],["mat-card-image","",3,"src"],[1,"taxa-header"]],template:function(t,e){if(1&t&&(c.Hc(0,g,2,1,"div",0),c.Hc(1,p,2,0,"div",1),c.Hc(2,h,2,0,"ng-template",null,2,c.Ic)),2&t){const t=c.vc(3);c.oc("ngIf",e.groupSummaries)("ngIfElse",t),c.Cb(1),c.oc("ngIf",e.groupSummaries&&0==e.groupSummaries.length)}},directives:[a.t,a.s,d.a,d.c,d.b,u.a],styles:[".taxa-card[_ngcontent-%COMP%]{max-width:250px;margin:13px;flex:0 0 33.333333%}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}mat-card-content[_ngcontent-%COMP%]{cursor:pointer}mat-card-content[_ngcontent-%COMP%]   .taxa-header[_ngcontent-%COMP%]{font-weight:500;font-size:14pt;margin-bottom:5px}mat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:10pt;margin-top:1px;margin-bottom:1px}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 auto;width:90%}.mat-card-image[_ngcontent-%COMP%]{height:180px}"]}),t})();var v=n("nIj0"),C=n("jxfh"),_=n("M0ag"),x=n("zmEM"),y=n("FlRo"),O=n("iAde"),M=n("cePI"),P=n("R7+U"),V=n("Cd2c"),W=n("+Tre"),j=n("PBFl"),k=n("KZIX"),w=n("a1hw"),J=n("Jb3d"),F=n("bFHC"),H=n("s2Ay");let E=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[a.c,_.a,y.k,M.c,P.b,O.b,i.j,C.c,d.d,x.b,V.c,v.l,v.B,C.b,C.f,W.b,j.c,k.c,w.b,J.a,F.b,H.b]]}),t})();n("8bJt");var q=n("mWib"),D=n("29Wa"),S=n("mFH5");function K(t,e){if(1&t&&(c.Wb(0,"mat-option",44),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t){const t=e.$implicit;c.oc("value",t.key),c.Cb(1),c.Kc(c.kc(2,2,t.key))}}function T(t,e){if(1&t&&(c.Wb(0,"mat-option",44),c.Jc(1),c.jc(2,"titlecase"),c.Vb()),2&t){const t=e.$implicit;c.oc("value",t),c.Cb(1),c.Kc(c.kc(2,2,t))}}function L(t,e){1&t&&(c.Wb(0,"th",45),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"sci_name"),""))}function I(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(t.scientificname)}}function R(t,e){1&t&&(c.Wb(0,"th",47),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Kc(c.kc(2,1,"model_name")))}function z(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(t.model_name||"NA")}}function $(t,e){1&t&&(c.Wb(0,"th",48),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"latests_v"),""))}function Q(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(t.version)}}function A(t,e){1&t&&(c.Wb(0,"th",49),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"taxa"),""))}function U(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.jc(2,"titlecase"),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(c.kc(2,1,t.taxa))}}function N(t,e){1&t&&(c.Wb(0,"th",47),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"status"),""))}function G(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(t.status)}}function B(t,e){1&t&&(c.Wb(0,"th",50),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"eval_priority"),""))}function X(t,e){if(1&t&&(c.Wb(0,"td",46),c.Jc(1),c.jc(2,"number"),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.Kc(c.lc(2,1,t.eval_priority,"1.0-2"))}}function Z(t,e){1&t&&(c.Wb(0,"th",47),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Kc(c.kc(2,1,"evaluated_me")))}function Y(t,e){1&t&&(c.Wb(0,"mat-icon"),c.Jc(1,"check_circle_outline"),c.Vb())}function tt(t,e){if(1&t&&(c.Wb(0,"td",46),c.Hc(1,Y,2,0,"mat-icon",51),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.oc("ngIf",t.evaluated_by_me)}}function et(t,e){1&t&&(c.Wb(0,"th",47),c.Jc(1),c.jc(2,"translate"),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",c.kc(2,1,"evaluated_others"),""))}function nt(t,e){1&t&&(c.Wb(0,"mat-icon"),c.Jc(1,"check_circle_outline"),c.Vb())}function at(t,e){if(1&t&&(c.Wb(0,"td",46),c.Hc(1,nt,2,0,"mat-icon",51),c.Vb()),2&t){const t=e.$implicit;c.Cb(1),c.oc("ngIf",t.evaluated_by_others)}}function it(t,e){1&t&&c.Rb(0,"tr",52)}function ct(t,e){if(1&t){const t=c.Xb();c.Wb(0,"tr",53),c.ec("click",(function(){c.zc(t);const n=e.$implicit;return c.ic().navigateModelPage(n)})),c.Vb()}}function ot(t,e){if(1&t&&(c.Wb(0,"div",54),c.Wb(1,"h3"),c.Jc(2),c.jc(3,"titlecase"),c.Vb(),c.Wb(4,"div",55),c.Wb(5,"div",56),c.Jc(6),c.jc(7,"number"),c.Vb(),c.Wb(8,"div",57),c.Jc(9),c.jc(10,"number"),c.Vb(),c.Vb(),c.Vb()),2&t){const t=e.$implicit,n=c.ic();c.Cb(2),c.Kc(c.kc(3,9,t.key)),c.Cb(3),c.Gc("background",n.backgroundColors[t.key],c.Jb)("flex-basis",t.value.eval/(t.value.eval+t.value.n_eval)*100+"%"),c.Cb(1),c.Lc(" ",c.lc(7,11,t.value.eval/(t.value.eval+t.value.n_eval)*100,"1.2-2"),"% "),c.Cb(2),c.Gc("flex-basis",t.value.n_eval/(t.value.eval+t.value.n_eval)*100+"%"),c.Cb(1),c.Lc(" ",c.lc(10,14,t.value.n_eval/(t.value.eval+t.value.n_eval)*100,"1.2-2"),"% Models Remaining ")}}function rt(t,e){if(1&t&&(c.Wb(0,"div",58),c.Wb(1,"h1"),c.Jc(2),c.Vb(),c.Wb(3,"h3"),c.Jc(4," TOTAL EVALUATIONS"),c.Vb(),c.Wb(5,"h2"),c.Jc(6),c.Vb(),c.Vb()),2&t){const t=c.ic();c.Cb(2),c.Kc(t.topEvals[0].evals),c.Cb(4),c.Lc("1. ",t.topEvals[0].mol_id,"")}}function st(t,e){if(1&t&&(c.Wb(0,"div"),c.Wb(1,"h4"),c.Wb(2,"strong"),c.Jc(3),c.Vb(),c.Jc(4," Total evaluations"),c.Vb(),c.Wb(5,"h3"),c.Wb(6,"strong"),c.Jc(7),c.Vb(),c.Vb(),c.Vb()),2&t){const t=e.$implicit,n=e.index;c.Cb(3),c.Lc(" ",t.evals," "),c.Cb(4),c.Mc("",n+2,". ",t.mol_id," ")}}function lt(t,e){if(1&t&&(c.Wb(0,"div",54),c.Wb(1,"h3"),c.Jc(2),c.jc(3,"titlecase"),c.Vb(),c.Wb(4,"div",55),c.Rb(5,"div",56),c.Wb(6,"h3"),c.Jc(7),c.jc(8,"titlecase"),c.Vb(),c.Vb(),c.Vb()),2&t){const t=e.$implicit,n=c.ic();c.Cb(2),c.Kc(c.kc(3,9,t.taxa)),c.Cb(2),c.Gc("border","none"),c.Cb(1),c.Gc("background",n.backgroundColors[t.taxa]||"#AA73E0",c.Jb)("flex-basis",t.my_evaluation/n.myEvals.total*100+"%"),c.Cb(2),c.Mc(" ",t.my_evaluation," ",c.kc(8,11,t.taxa)," ")}}const bt=function(){return[25,50,100]},dt=[{path:"",component:s,children:[{path:"",component:f},{path:"taxa/:taxa",component:(()=>{class t{constructor(t,e,n,a,i){this.route=t,this.router=e,this.predictions=n,this.translation=a,this.cdf=i,this.evalSummary=[],this.totalProgress={},this.backgroundColors={vertebrates:"#F1C424",mammals:"#F1C424",reptiles:"#F1C424",amphibians:"#F1C424",invertebrates:"#AA73E0",trees:"#75CF2E"},this.columns=["scientificname","model_name","version","AUC","status","evaluated_by_me","evaluated_by_others","priority","taxa"],this.displayedColumns=["scientificname","version","priority","evaluated_by_me","evaluated_by_others","taxa"],this.aucOptions={floor:0,ceil:1,step:.1,disabled:!1},this.versions=[],this.query={scientificname:"",status:"",taxa:"",evaluated_by_me:!1,evaluated_by_others:!1},this.modelFilters={version:"",auc:{value:0,highValue:1}},this.scientificnameFilter=new v.f({value:"",disabled:!1}),this.sortedData=new y.j;let c=this.route.snapshot.queryParamMap;this.query.scientificname=c.get("scientificname")||"",this.query.evaluated_by_me="true"==c.get("evaluated_by_me"),this.query.evaluated_by_others="true"==c.get("evaluated_by_others"),this.scientificnameFilter.setValue(this.query.scientificname),this.query.status=c.get("status")||"",this.query.taxa=c.get("taxa")||"",this.modelFilters.version=c.get("version")||"",this.modelFilters.auc.value=Number(c.get("aucMin"))||0,this.modelFilters.auc.highValue=Number(c.get("aucMax"))||1,this.project_id=c.get("project_id"),this.predictions.sdmProject.subscribe(t=>{this.projectName=null==t?void 0:t.filter(t=>t.project_id==this.project_id)[0].project_name});let o=["mammals","amphibians","trees","reptiles"];this.predictions.getEvalSummary(this.project_id).subscribe(t=>{this.totalProgress.vertebrates=this.reduceEval(t.progress.filter(t=>o.indexOf(t.taxa)>0)),this.totalProgress.invertebrates=this.reduceEval(t.progress.filter(t=>o.indexOf(t.taxa)<0&&"trees"!=t.taxa)),this.totalProgress.trees=this.reduceEval(t.progress.filter(t=>"trees"==t.taxa)),this.topEvals=t.top_evals,this.myEvals=t.progress.filter(t=>t.my_evaluation>0).map(t=>({taxa:t.taxa,my_evaluation:t.my_evaluation})),this.myEvals.total=this.myEvals.reduce((t,e)=>t+e.my_evaluation,0)})}reduceEval(t){return t.reduce((t,e)=>(t.eval=t.eval+e.tot_evaluated,t.n_eval=t.n_eval+e.tot_not_evaluated,t),{eval:0,n_eval:0})}ngOnChanges(t){this.cdf.detectChanges()}ngOnInit(){this.sortedData.paginator=this.paginator,this.predictions.predictionsRequested||this.predictions.predictions("A",this.project_id,this.query,this.modelFilters),console.log("here","project_id",this.project_id),this.project_id&&this.predictions.predictionList.subscribe(t=>{t&&(this.dataSource=t,this.sortedData.data=t,this.taxaGroups=this.predictions.taxaGroups,this.versions=this.predictions.versions)}),this.scientificnameFilter.valueChanges.pipe(Object(q.a)(500)).subscribe(t=>{this.query.scientificname=t,this.predictions.filter(this.query)})}tabChange(){}compare(t,e,n){return(t<e?-1:1)*(n?1:-1)}versionCompare(t,e,n){return t.localeCompare(e,void 0,{sensitivity:"base"})*(n?1:-1)}sortData(t){const e=this.dataSource.slice();this.sortedData.data=t.active&&""!==t.direction?e.sort((e,n)=>{const a="asc"===t.direction;switch(t.active){case"scientificname":return this.compare(e.scientificname,n.scientificname,a);case"version":return this.versionCompare(e.version,n.version,a);case"priority":return this.compare(e.eval_priority,n.eval_priority,a);case"taxa":return this.compare(e.taxa,n.taxa,a);default:return 0}}):e}setFilterQuery(){this.predictions.filter(this.query)}setFilterModel(){this.predictions.filter(this.query,this.modelFilters)}clearFilters(){this.query={scientificname:"",status:"",taxa:"",evaluated_by_me:!1,evaluated_by_others:!1},this.modelFilters={version:"",auc:{value:0,highValue:1}},this.setFilterModel()}navigateModelPage(t){let e=Object.assign({},this.modelFilters);e.aucMin=e.auc.value,e.aucMax=e.auc.highValue,delete e.auc,this.router.navigate(["/predictions/species/",t.scientificname.split(" ").join("_")],{queryParams:Object.assign(Object.assign({project_id:this.project_id,prediction_id:t.prediction_id},this.query),e)})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(i.a),c.Qb(i.f),c.Qb(l.e),c.Qb(l.j),c.Qb(c.h))},t.\u0275cmp=c.Kb({type:t,selectors:[["mol-prediction-table"]],viewQuery:function(t,e){var n;1&t&&c.Fc(O.a,!0),2&t&&c.uc(n=c.fc())&&(e.paginator=n.first)},features:[c.Ab],decls:94,vars:49,consts:[[1,"project-title"],[1,"filter-heading"],[1,"filter-container"],[1,"filter-content"],[1,"search-filter"],["matInput","","autocomplete","off",3,"placeholder","formControl"],["appearance","standard",1,"dropdown-container"],[3,"value","selectionChange","valueChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"checkbox",3,"ngModel","ngModelChange","change"],["mat-stroked-button","",3,"click"],["mat-align-tabs","right",3,"selectedTabChange"],[3,"label"],["matSort","","mat-table","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","scientificname"],["mat-header-cell","","mat-sort-header","scientificname",4,"matHeaderCellDef"],["mat-Cell","",4,"matCellDef"],["matColumnDef","model_name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","version"],["mat-header-cell","","mat-sort-header","version",4,"matHeaderCellDef"],["matColumnDef","taxa"],["mat-header-cell","","mat-sort-header","taxa",4,"matHeaderCellDef"],["matColumnDef","status"],["matColumnDef","priority"],["mat-header-cell","","mat-sort-header","priority",4,"matHeaderCellDef"],["matColumnDef","evaluated_by_me"],["matColumnDef","evaluated_by_others"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],[1,"score-sheet"],[1,"row-element"],[1,"total-progress"],[1,"ss-header"],["class","item",4,"ngFor","ngForOf"],[1,"top-evaluators"],[1,"items"],["class","first",4,"ngIf"],[1,"others"],[4,"ngFor","ngForOf"],[1,"my-evals"],[1,"country-evals"],[3,"value"],["mat-header-cell","","mat-sort-header","scientificname"],["mat-Cell",""],["mat-header-cell",""],["mat-header-cell","","mat-sort-header","version"],["mat-header-cell","","mat-sort-header","taxa"],["mat-header-cell","","mat-sort-header","priority"],[4,"ngIf"],["mat-header-row",""],["mat-row","",3,"click"],[1,"item"],[1,"bar-container"],[1,"bar","val-a"],[1,"bar","val-b"],[1,"first"]],template:function(t,e){1&t&&(c.Wb(0,"h1",0),c.Jc(1),c.Vb(),c.Wb(2,"h4",1),c.Jc(3,"Filters: "),c.Vb(),c.Wb(4,"div",2),c.Wb(5,"div",3),c.Wb(6,"mat-form-field",4),c.Rb(7,"input",5),c.jc(8,"translate"),c.Vb(),c.Wb(9,"mat-form-field",6),c.Wb(10,"mat-label"),c.Jc(11),c.jc(12,"translate"),c.Vb(),c.Wb(13,"mat-select",7),c.ec("selectionChange",(function(){return e.setFilterQuery()}))("valueChange",(function(t){return e.query.taxa=t})),c.Wb(14,"mat-option",8),c.Jc(15),c.jc(16,"translate"),c.Vb(),c.Hc(17,K,3,4,"mat-option",9),c.jc(18,"keyvalue"),c.Vb(),c.Vb(),c.Wb(19,"mat-form-field",6),c.Wb(20,"mat-label"),c.Jc(21,"Versions"),c.Vb(),c.Wb(22,"mat-select",7),c.ec("selectionChange",(function(){return e.setFilterModel()}))("valueChange",(function(t){return e.modelFilters.version=t})),c.Wb(23,"mat-option",8),c.Jc(24),c.jc(25,"translate"),c.Vb(),c.Hc(26,T,3,4,"mat-option",9),c.Vb(),c.Vb(),c.Vb(),c.Wb(27,"div",3),c.Wb(28,"mat-checkbox",10),c.ec("ngModelChange",(function(t){return e.query.evaluated_by_me=t}))("change",(function(){return e.setFilterQuery()})),c.Jc(29),c.jc(30,"translate"),c.Vb(),c.Wb(31,"mat-checkbox",10),c.ec("ngModelChange",(function(t){return e.query.evaluated_by_others=t}))("change",(function(){return e.setFilterQuery()})),c.Jc(32),c.jc(33,"translate"),c.Vb(),c.Wb(34,"div"),c.Wb(35,"button",11),c.ec("click",(function(){return e.clearFilters()})),c.Jc(36),c.jc(37,"translate"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(38,"mat-tab-group",12),c.ec("selectedTabChange",(function(){return e.tabChange()})),c.Wb(39,"mat-tab",13),c.jc(40,"translate"),c.Rb(41,"mol-spinner"),c.Wb(42,"table",14),c.ec("matSortChange",(function(t){return e.sortData(t)})),c.Ub(43,15),c.Hc(44,L,3,3,"th",16),c.Hc(45,I,2,1,"td",17),c.Tb(),c.Ub(46,18),c.Hc(47,R,3,3,"th",19),c.Hc(48,z,2,1,"td",17),c.Tb(),c.Ub(49,20),c.Hc(50,$,3,3,"th",21),c.Hc(51,Q,2,1,"td",17),c.Tb(),c.Ub(52,22),c.Hc(53,A,3,3,"th",23),c.Hc(54,U,3,3,"td",17),c.Tb(),c.Ub(55,24),c.Hc(56,N,3,3,"th",19),c.Hc(57,G,2,1,"td",17),c.Tb(),c.Ub(58,25),c.Hc(59,B,3,3,"th",26),c.Hc(60,X,3,4,"td",17),c.Tb(),c.Ub(61,27),c.Hc(62,Z,3,3,"th",19),c.Hc(63,tt,2,1,"td",17),c.Tb(),c.Ub(64,28),c.Hc(65,et,3,3,"th",19),c.Hc(66,at,2,1,"td",17),c.Tb(),c.Hc(67,it,1,0,"tr",29),c.Hc(68,ct,1,0,"tr",30),c.Vb(),c.Rb(69,"mat-paginator",31),c.Vb(),c.Wb(70,"mat-tab",13),c.jc(71,"translate"),c.Wb(72,"div",32),c.Wb(73,"div",33),c.Wb(74,"div",34),c.Wb(75,"h2",35),c.Jc(76,"Total Progress"),c.Vb(),c.Hc(77,ot,11,17,"div",36),c.jc(78,"keyvalue"),c.Vb(),c.Wb(79,"div",37),c.Wb(80,"h2",35),c.Jc(81,"Top Evaluators"),c.Vb(),c.Wb(82,"div",38),c.Hc(83,rt,7,2,"div",39),c.Wb(84,"div",40),c.Hc(85,st,8,3,"div",41),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(86,"div",33),c.Wb(87,"div",42),c.Wb(88,"h2",35),c.Jc(89,"My Evaluations"),c.Vb(),c.Hc(90,lt,9,13,"div",36),c.Vb(),c.Wb(91,"div",43),c.Wb(92,"h2",35),c.Jc(93,"Country Evaluations"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(1),c.Lc(" ",e.projectName,""),c.Cb(6),c.oc("placeholder",c.kc(8,26,"search_species"))("formControl",e.scientificnameFilter),c.Cb(4),c.Kc(c.kc(12,28,"taxa")),c.Cb(2),c.oc("value",e.query.taxa),c.Cb(2),c.Kc(c.kc(16,30,"any")),c.Cb(2),c.oc("ngForOf",c.kc(18,32,e.taxaGroups)),c.Cb(5),c.oc("value",e.modelFilters.version),c.Cb(2),c.Kc(c.kc(25,34,"any")),c.Cb(2),c.oc("ngForOf",e.versions),c.Cb(2),c.oc("ngModel",e.query.evaluated_by_me),c.Cb(1),c.Kc(c.kc(30,36,"evaluated_me")),c.Cb(2),c.oc("ngModel",e.query.evaluated_by_others),c.Cb(1),c.Kc(c.kc(33,38,"evaluated_others")),c.Cb(4),c.Kc(c.kc(37,40,"clear")),c.Cb(3),c.oc("label",c.kc(40,42,"view_all_predictions")),c.Cb(3),c.oc("dataSource",e.sortedData),c.Cb(25),c.oc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.oc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.oc("pageSizeOptions",c.qc(48,bt))("pageSize",25),c.Cb(1),c.oc("label",c.kc(71,44,"view_scoresheet")),c.Cb(7),c.oc("ngForOf",c.kc(78,46,e.totalProgress)),c.Cb(6),c.oc("ngIf",e.topEvals&&e.topEvals.length>0),c.Cb(2),c.oc("ngForOf",null==e.topEvals?null:e.topEvals.slice(1,4)),c.Cb(5),c.oc("ngForOf",e.myEvals))},directives:[D.c,V.b,v.c,v.r,v.g,D.g,P.a,S.n,a.s,W.a,v.u,j.b,k.b,k.a,u.a,y.i,M.a,y.b,y.d,y.a,y.f,y.h,O.a,a.t,y.c,M.b,F.a,y.e,y.g],pipes:[H.c,a.l,a.F,a.g],styles:['.statistics[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%;padding:10px;margin-top:30px;margin-bottom:30px}.statistics[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{vertical-align:middle;text-align:left;height:100%;margin:0;font-size:26pt}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]{text-align:center}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:18pt;color:#ff903f;font-weight:700;padding-bottom:6px}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:14pt}hr[_ngcontent-%COMP%]{border:0;border-top:2px solid #000}table[_ngcontent-%COMP%]{width:100%;margin:0}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:12pt}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{word-wrap:break-word}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:11pt}.main-td[_ngcontent-%COMP%]{font-weight:350}table[_ngcontent-%COMP%]   .mat-column-scientificname[_ngcontent-%COMP%]{text-align:right!important}tr.detail-row[_ngcontent-%COMP%]{height:0}tr.detail-row[_ngcontent-%COMP%]   .mat-column-expandedDetail[_ngcontent-%COMP%]{margin:0 24px!important;padding:0!important}.project-title[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.filter-heading[_ngcontent-%COMP%]{font-weight:700;font-size:13pt;margin:15px 8px 3px 15px}.filter-container[_ngcontent-%COMP%]{width:85%;max-height:200px;border-radius:8px;border:1px solid #777575;margin:25px auto;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.mat-row[_ngcontent-%COMP%]:hover{background-color:#e8eaf6;cursor:pointer}.mat-stroked-button[_ngcontent-%COMP%]{margin-bottom:6px;margin-top:6px;margin-left:3px;background-color:#ff903f;color:#fff}.mat-stroked-button[_ngcontent-%COMP%]:hover{background-color:#f7b17e;color:#000;cursor:pointer}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:#f5f5f5}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-detail[_ngcontent-%COMP%]{border-radius:8px}.filter-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:98%}.filter-content[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{font-size:11pt;align-items:right;margin-right:2px;margin-top:0;margin-bottom:0;width:15%}.filter-content[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]{justify-content:right;margin-top:17px;width:15%}.filter-content[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]{margin-top:17px;margin-bottom:2px}.filter-content[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]   .ngx-slider[_ngcontent-%COMP%]{min-width:160px}.filter-content[_ngcontent-%COMP%]   .slider-heading[_ngcontent-%COMP%]{width:100%;text-align:center;font-weight:280;font-size:1.1em}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:enabled{margin-bottom:5px;margin-top:32px;background-color:#8cbf44;color:#fff}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:enabled   .mat-stroked-button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#8cbf44;cursor:pointer}.filter-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:disabled{margin-bottom:5px;margin-top:32px;color:#e8e8e8;background-color:#9d9d9d}.taxa-menu[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;gap:10px}.score-sheet[_ngcontent-%COMP%]{display:flex;flex-direction:column}.row-element[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:30px}.total-progress[_ngcontent-%COMP%]{flex-grow:2.5}.item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.ss-header[_ngcontent-%COMP%]{background-color:#1f1684;color:#fff;padding-left:23px}.top-evaluators[_ngcontent-%COMP%]{flex-grow:1}.top-evaluators[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}.top-evaluators[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]{text-align:center}.others[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.country-evals[_ngcontent-%COMP%], .my-evals[_ngcontent-%COMP%]{flex-grow:1}.bar-container[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;max-height:40px;max-width:75%;border:1px solid;margin-bottom:15px}.bar-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-left:5px;margin:0}.bar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:40px;color:#000}.val-a[_ngcontent-%COMP%]{background:""}.val-b[_ngcontent-%COMP%]{color:#626262;border:none}']}),t})()}]}];let ut=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[a.c,i.j.forChild(dt)],i.j]}),t})(),mt=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[ut,E]]}),t})()}}]);