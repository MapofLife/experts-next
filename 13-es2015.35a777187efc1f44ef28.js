(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+jnO":function(t,e,i){"use strict";i.r(e),i.d(e,"PredictionLandingModule",(function(){return Bt}));var n=i("2kYt"),c=i("sEIs"),a=i("EM62"),o=i("J7xr");const s=function(t,e){return{container:t,"container-filter":e}};let r=(()=>{class t{constructor(t){this.router=t,this.links=[{name:"Range Mapper",route:"/"},{name:"Predictions",route:"/predictions"}]}ngOnInit(){}ngDoCheck(){this.predictions=this.router.url.includes("predictions/taxa")}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(c.f))},t.\u0275cmp=a.Jb({type:t,selectors:[["mol-root"]],decls:3,vars:5,consts:[[3,"links"],[3,"ngClass"]],template:function(t,e){1&t&&(a.Qb(0,"mol-nav",0),a.Vb(1,"div",1),a.Qb(2,"router-outlet"),a.Ub()),2&t&&(a.oc("links",e.links),a.Cb(1),a.oc("ngClass",a.sc(2,s,!e.predictions,e.predictions)))},directives:[o.a,n.q,c.k],styles:[".container[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%], .search-box[_ngcontent-%COMP%]{width:90%;margin:0 auto}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-filter[_ngcontent-%COMP%]{width:75%;margin:0 auto}"]}),t})();var l=i("XZLj"),d=i("wqq/"),b=i("Meci"),m=i("nts4");function p(t,e){if(1&t){const t=a.Wb();a.Vb(0,"div",4),a.Vb(1,"mat-card",5),a.dc("click",(function(){a.zc(t);const i=e.$implicit;return a.hc(2).navigate(i)})),a.Qb(2,"img",6),a.Vb(3,"mat-card-content"),a.Vb(4,"h5",7),a.Jc(5),a.Ub(),a.Vb(6,"h5"),a.Jc(7),a.Ub(),a.Vb(8,"h5"),a.Jc(9),a.Ub(),a.Vb(10,"h5"),a.Jc(11),a.Ub(),a.Vb(12,"h5"),a.Jc(13),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&t){const t=e.$implicit;a.Cb(2),a.oc("src",t.imgSrc,a.Bc),a.Cb(3),a.Kc(t.taxa),a.Cb(2),a.Lc("Total Species: ",t.tsp,""),a.Cb(2),a.Lc("Total Species with Predictions: ",t.tspp,""),a.Cb(2),a.Lc("Total Predictions: ",t.tp,""),a.Cb(2),a.Lc("Total Evaluations Evaluated: ",t.tpe,"")}}function u(t,e){if(1&t&&(a.Vb(0,"div",2),a.Hc(1,p,14,6,"div",3),a.Ub()),2&t){const t=a.hc();a.Cb(1),a.oc("ngForOf",t.groupSummaries)}}function h(t,e){1&t&&(a.Qb(0,"mol-spinner"),a.Jc(1," Loading... "))}let f=(()=>{class t{constructor(t,e,i){this.router=t,this.route=e,this.predictions=i,this.groupSummaries=null}ngOnInit(){this.predictions.taxaSummaries().pipe(Object(d.a)(1)).subscribe(t=>{t.forEach(t=>{t.imgSrc="odonates"!==t.taxa?"https://mol.org/static/img/groups/taxa_"+t.taxa.replace("sdm_","")+".png":"https://cdn.mol.org/static/images/groups/taxa_odonates.png"}),this.groupSummaries=t})}navigate(t){this.router.navigate(["taxa",t.taxa],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(c.f),a.Pb(c.a),a.Pb(l.e))},t.\u0275cmp=a.Jb({type:t,selectors:[["mol-prediction-summary"]],decls:3,vars:2,consts:[["class","card-container",4,"ngIf","ngIfElse"],["loading",""],[1,"card-container"],["class","summary",4,"ngFor","ngForOf"],[1,"summary"],[1,"taxa-card",3,"click"],["mat-card-image","",3,"src"],[1,"taxa-header"]],template:function(t,e){if(1&t&&(a.Hc(0,u,2,1,"div",0),a.Hc(1,h,2,0,"ng-template",null,1,a.Ic)),2&t){const t=a.vc(2);a.oc("ngIf",e.groupSummaries)("ngIfElse",t)}},directives:[n.t,n.s,b.a,b.c,b.b,m.a],styles:[".taxa-card[_ngcontent-%COMP%]{max-width:250px;margin:13px;flex:0 0 33.333333%}mat-card[_ngcontent-%COMP%]:hover{box-shadow:2px 5px 5px #d3d3d3}mat-card-content[_ngcontent-%COMP%]{cursor:pointer}mat-card-content[_ngcontent-%COMP%]   .taxa-header[_ngcontent-%COMP%]{font-weight:500;font-size:14pt;margin-bottom:5px}mat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:10pt;margin-top:1px;margin-bottom:1px}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}mat-card[_ngcontent-%COMP%]{margin:0 1em;cursor:pointer}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 auto;width:90%}.mat-card-image[_ngcontent-%COMP%]{height:180px}"]}),t})();var g=i("nIj0"),C=i("jxfh"),O=i("M0ag"),S=i("zmEM"),x=i("FlRo"),V=i("iAde"),w=i("cePI"),v=i("R7+U"),_=i("Cd2c"),D=i("+Tre"),U=i("PBFl"),M=i("KZIX"),E=i("a1hw");let P=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[n.c,O.a,x.l,w.c,v.b,V.b,c.j,C.c,b.d,S.b,_.c,g.l,g.B,C.b,C.e,D.b,U.c,M.c,E.a]]}),t})();var k=i("f7+R"),J=(i("C05f"),i("ROBh"),i("4e/d"),i("YtkY"),i("mWib")),T=i("29Wa"),H=i("mFH5");const N=["table"],L=["worksheet"];function I(t,e){if(1&t&&(a.Vb(0,"div",50),a.Vb(1,"div",51),a.Vb(2,"h2"),a.Jc(3),a.ic(4,"uppercase"),a.Ub(),a.Ub(),a.Vb(5,"div",51),a.Vb(6,"div",52),a.Jc(7),a.Ub(),a.Vb(8,"div",53),a.Jc(9,"Species"),a.Ub(),a.Ub(),a.Vb(10,"div",51),a.Vb(11,"div",52),a.Jc(12),a.Ub(),a.Vb(13,"div",53),a.Jc(14,"Total Models"),a.Ub(),a.Ub(),a.Vb(15,"div",51),a.Vb(16,"div",52),a.Jc(17),a.Ub(),a.Vb(18,"div",53),a.Jc(19,"Models Evaluated"),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.hc();a.Cb(3),a.Kc(a.jc(4,4,t.taxaMetrics.taxa)),a.Cb(4),a.Kc(t.taxaMetrics.tsp),a.Cb(5),a.Kc(t.taxaMetrics.tp),a.Cb(5),a.Kc(t.taxaMetrics.tpe)}}function A(t,e){if(1&t){const t=a.Wb();a.Vb(0,"th",54),a.Vb(1,"mat-checkbox",55),a.dc("change",(function(e){a.zc(t);const i=a.hc();return e?i.masterToggle():null})),a.Ub(),a.Ub()}if(2&t){const t=a.hc();a.Cb(1),a.oc("checked",t.isAllSelected())("indeterminate",-1!==t.selection.indexOf(t.element)&&!t.isAllSelected())}}function F(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",56),a.Vb(1,"mat-checkbox",57),a.dc("click",(function(e){return a.zc(t),e.stopPropagation()}))("change",(function(i){a.zc(t);const n=e.$implicit,c=a.hc();return i?c.toggle(n):null})),a.Ub(),a.Ub()}if(2&t){const t=e.$implicit,i=a.hc();a.Cb(1),a.oc("checked",t.checked||t.status===i.NOT_EVALUATED)("disabled",t.status===i.NOT_EVALUATED||t.isDisabled)}}function R(t,e){1&t&&a.Qb(0,"th",54)}function j(t,e){if(1&t){const t=a.Wb();a.Vb(0,"span",60),a.dc("click",(function(){a.zc(t);const e=a.hc().$implicit;return e.isExpanded=!e.isExpanded})),a.Ub()}}function y(t,e){if(1&t){const t=a.Wb();a.Vb(0,"span",61),a.dc("click",(function(){a.zc(t);const e=a.hc().$implicit;return e.isExpanded=!e.isExpanded})),a.Ub()}}function $(t,e){if(1&t&&(a.Vb(0,"td",56),a.Hc(1,j,1,0,"span",58),a.Hc(2,y,1,0,"span",59),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.oc("ngIf",!t.isExpanded),a.Cb(1),a.oc("ngIf",t.isExpanded)}}function z(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Scientific Name"),a.Ub())}function G(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",63),a.dc("click",(function(){a.zc(t);const i=e.$implicit;return a.hc().navigateModelPage(i)})),a.Jc(1),a.Ub()}if(2&t){const t=e.$implicit;a.Cb(1),a.Lc(" ",t.scientificname," ")}}function W(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Model Rank"),a.Ub())}function K(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.prediction_rank)}}function Q(t,e){1&t&&(a.Vb(0,"th",65),a.Jc(1,"AUC"),a.Ub())}function B(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.ic(2,"number"),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc(" ",a.kc(2,1,t.auc,".03")," ")}}function Y(t,e){1&t&&(a.Vb(0,"th",54),a.Jc(1,"Version"),a.Ub())}function q(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.version)}}function X(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Number of Points"),a.Ub())}function Z(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc("",t.num_points," ")}}function tt(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Total Models"),a.Ub())}function et(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc("",t.num_models," ")}}function it(t,e){1&t&&(a.Vb(0,"th",66),a.Jc(1,"Status"),a.Ub())}function nt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.status)}}function ct(t,e){if(1&t&&(a.Vb(0,"td",71),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.scientificname)}}function at(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.prediction_rank)}}function ot(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.auc)}}function st(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.version)}}function rt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.num_points)}}function lt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.status)}}function dt(t,e){1&t&&a.Qb(0,"tr",72)}function bt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Vb(1,"div",67),a.Vb(2,"table",68),a.Tb(3,30),a.Hc(4,ct,2,1,"td",69),a.Sb(),a.Tb(5,33),a.Hc(6,at,2,1,"td",28),a.Sb(),a.Tb(7,35),a.Hc(8,ot,2,1,"td",28),a.Sb(),a.Tb(9,37),a.Hc(10,st,2,1,"td",28),a.Sb(),a.Tb(11,38),a.Hc(12,rt,2,1,"td",28),a.Sb(),a.Tb(13,40),a.Hc(14,lt,2,1,"td",28),a.Sb(),a.Hc(15,dt,1,0,"tr",70),a.Ub(),a.Ub(),a.Ub()),2&t){const t=e.$implicit,i=a.hc();a.Db("colspan",i.columns.length),a.Cb(1),a.oc("@detailExpand",t.isExpanded?"expanded":"collapsed"),a.Cb(1),a.oc("dataSource",t.models),a.Cb(13),a.oc("matRowDefColumns",i.columnsExpand)}}function mt(t,e){1&t&&a.Qb(0,"tr",73)}function pt(t,e){1&t&&a.Qb(0,"tr",72),2&t&&a.Gb("expanded-row",e.$implicit.isExpanded)}function ut(t,e){1&t&&a.Qb(0,"tr",74)}function ht(t,e){1&t&&a.Qb(0,"th",54)}function ft(t,e){if(1&t){const t=a.Wb();a.Vb(0,"span",60),a.dc("click",(function(){a.zc(t);const e=a.hc().$implicit;return e.isExpanded=!e.isExpanded})),a.Ub()}}function gt(t,e){if(1&t){const t=a.Wb();a.Vb(0,"span",61),a.dc("click",(function(){a.zc(t);const e=a.hc().$implicit;return e.isExpanded=!e.isExpanded})),a.Ub()}}function Ct(t,e){if(1&t&&(a.Vb(0,"td",56),a.Hc(1,ft,1,0,"span",58),a.Hc(2,gt,1,0,"span",59),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.oc("ngIf",!t.isExpanded),a.Cb(1),a.oc("ngIf",t.isExpanded)}}function Ot(t,e){1&t&&(a.Vb(0,"th",54),a.Jc(1,"X"),a.Ub())}function St(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",56),a.Vb(1,"mat-checkbox",75),a.dc("click",(function(e){return a.zc(t),e.stopPropagation()}))("change",(function(i){a.zc(t);const n=e.$implicit,c=a.hc();return i?c.toggleSelected(n):null})),a.Ub(),a.Ub()}}function xt(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Scientific Name"),a.Ub())}function Vt(t,e){if(1&t){const t=a.Wb();a.Vb(0,"td",63),a.dc("click",(function(){a.zc(t);const i=e.$implicit;return a.hc().navigateModelPage(i)})),a.Jc(1),a.Ub()}if(2&t){const t=e.$implicit;a.Cb(1),a.Lc(" ",t.scientificname," ")}}function wt(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Model Rank"),a.Ub())}function vt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.prediction_rank)}}function _t(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"AUC"),a.Ub())}function Dt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.ic(2,"number"),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc(" ",a.kc(2,1,t.auc,".03")," ")}}function Ut(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Version"),a.Ub())}function Mt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.version)}}function Et(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Total Models"),a.Ub())}function Pt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc("",t.num_models," ")}}function kt(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Number of Points"),a.Ub())}function Jt(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Lc("",t.num_points," ")}}function Tt(t,e){1&t&&(a.Vb(0,"th",62),a.Jc(1,"Status"),a.Ub())}function Ht(t,e){if(1&t&&(a.Vb(0,"td",64),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.status)}}function Nt(t,e){if(1&t&&(a.Vb(0,"td",71),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.scientificname)}}function Lt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.prediction_rank)}}function It(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.auc)}}function At(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.version)}}function Ft(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.num_points)}}function Rt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Jc(1),a.Ub()),2&t){const t=e.$implicit;a.Cb(1),a.Kc(t.status)}}function jt(t,e){1&t&&a.Qb(0,"tr",72)}function yt(t,e){if(1&t&&(a.Vb(0,"td",56),a.Vb(1,"div",67),a.Vb(2,"table",68),a.Tb(3,30),a.Hc(4,Nt,2,1,"td",69),a.Sb(),a.Tb(5,33),a.Hc(6,Lt,2,1,"td",28),a.Sb(),a.Tb(7,35),a.Hc(8,It,2,1,"td",28),a.Sb(),a.Tb(9,37),a.Hc(10,At,2,1,"td",28),a.Sb(),a.Tb(11,38),a.Hc(12,Ft,2,1,"td",28),a.Sb(),a.Tb(13,40),a.Hc(14,Rt,2,1,"td",28),a.Sb(),a.Hc(15,jt,1,0,"tr",70),a.Ub(),a.Ub(),a.Ub()),2&t){const t=e.$implicit,i=a.hc();a.Db("colspan",i.columns.length),a.Cb(1),a.oc("@detailExpand",t.isExpanded?"expanded":"collapsed"),a.Cb(1),a.oc("dataSource",t.models),a.Cb(13),a.oc("matRowDefColumns",i.columnsExpand)}}function $t(t,e){1&t&&a.Qb(0,"tr",73)}function zt(t,e){1&t&&a.Qb(0,"tr",72),2&t&&a.Gb("expanded-row",e.$implicit.isExpanded)}function Gt(t,e){1&t&&a.Qb(0,"tr",74)}const Wt=function(){return["expandedDetail"]},Kt=[{path:"",component:r,children:[{path:"",component:f},{path:"taxa/:taxa",component:(()=>{class t{constructor(t,e,i){this.route=t,this.router=e,this.predictions=i,this.taxaData=null,this.models=null,this.predictionsDataSource=null,this.selectedTaxa="",this.filters=[],this.sortKey="",this.sortDirection="",this.pageSize=25,this.pageSizes=[25,50,100],this.columns=["isExpanded","select","scientificname","nummodels","model_rank","auc","version","num_points","status"],this.columnsExpand=["scientificname","model_rank","auc","version","num_points","status"],this.predictionList=[],this.speciesObj=new Object,this.speciesDataList=new x.k,this.speciesDataBackup=[],this.disableFormControl=!1,this.statusFilter=new g.f({value:"",disabled:!0}),this.scientificnameFilter=new g.f({value:"",disabled:!0}),this.aucSliderForm=new g.i({aucSliderControl:new g.f([0,1])}),this.aucOptions={floor:0,ceil:1,step:.1,disabled:!0},this.pointsSliderForm=new g.i({pointsSliderControl:new g.f([0,2e3])}),this.pointsOptions={floor:0,ceil:2e3,step:50,disabled:!0},this.activeAucFilter=null,this.activePointsFilter=null,this.activeStatusFilter=null,this.aucSliderValue=new Number,this.pointsSliderValue=new Number,this.filterValues={num_points:"",auc:"",status:"",scientificname:""},this.selection=[],this.toRemove=[],this.evaluatedModels=[],this.worksheetDataSource=new x.k,this.worksheetData=[],this.worksheetColumns=["isExpanded","select","scientificname","model_rank","auc","version","num_points","status"],this.taxaMetrics=null}ngAfterViewInit(){this.speciesDataList.paginator=this.paginator,this.speciesDataList.sort=this.sort,this.worksheetDataSource.paginator=this.paginator,this.worksheetDataSource.sort=this.sort2}ngOnInit(){this.selectedTaxa=this.route.snapshot.paramMap.get("taxa"),this.predictions.taxaMetrics(this.selectedTaxa).subscribe(t=>this.taxaMetrics=t[0]),""!==this.selectedTaxa&&this.predictions.predictions(this.selectedTaxa).pipe(Object(d.a)()).subscribe(t=>{this.predictionList=t.map(t=>Object.assign(Object.assign({},t),{scientificname:t.scientificname.replace("_"," "),status:"NOT_EVALUATED",checked:!1,isExpanded:!1,isDisabled:!1})),this.processPredictions(),this.fillSpeciesDataList(),this.tabChange()}),this.scientificnameFilter.valueChanges.pipe(Object(J.a)(500)).subscribe(t=>{this.filterValues.scientificname=t,this.speciesDataList.filter=JSON.stringify(this.filterValues)}),this.speciesDataList.filterPredicate=this.customFilterPredicate()}ngOnChanges(t){this.selectionChange()}processPredictions(){if(null!==localStorage.getItem("Evaluated")&&localStorage.getItem("Evaluated").length>0&&(this.evaluatedModels=JSON.parse(localStorage.getItem("Evaluated"))),null!==localStorage.getItem("Species")&&localStorage.getItem("Species").length>0){let t=JSON.parse(localStorage.getItem("Species")||"{}");this.predictionList.map(e=>{-1!==t.indexOf(e.scientificname)&&(e.checked=!0,e.isDisabled=!0)})}this.predictionList.forEach(t=>{if(9999==t.coalesce?t.status="NOT EVALUATED":0==t.coalesce?t.status="WRONG":1==t.coalesce?t.status="AGGREGATIONS ONLY":2==t.coalesce?t.status="IMPROVEMENT NEEDED":3==t.coalesce&&(t.status="GOOD"),this.speciesObj[t.scientificname])this.speciesObj[t.scientificname].push(Object.assign(Object.assign({},t),{checked:!1,isExpanded:!1,isDisabled:!1}));else{let e=[Object.assign(Object.assign({},t),{checked:!1,isExpanded:!1,isDisabled:!1})];this.speciesObj[t.scientificname]=e}})}fillSpeciesDataList(){let t=Object.keys(this.speciesObj),e=[],i=[];null!==JSON.parse(localStorage.getItem("Evaluated"))&&JSON.parse(localStorage.getItem("Evaluated")),t.forEach(t=>{let n=this.speciesObj[t].find(t=>1===t.prediction_rank);if(n.num_models=this.speciesObj[t].length,e=[],i=[],this.speciesObj[t].forEach(t=>{e.push(t.prediction_id),i.push(t)}),n.models=i,this.speciesDataList.data.push(n),null!==localStorage.getItem("Species")&&localStorage.getItem("Species").length>0){let t=JSON.parse(localStorage.getItem("Species")||"{}");this.speciesDataList.data.map(e=>{-1!==t.indexOf(e.scientificname)&&(e.checked=!0,e.isDisabled=!0),e.isExpanded=!1})}this.speciesDataBackup=this.speciesDataList.data})}applyFilter(t){let e={scientificname:t.trim().toLowerCase()};this.speciesDataList.filter=JSON.stringify(e)}customFilterPredicate(){return function(t,e){let i=JSON.parse(e);return-1!==t.scientificname.toLowerCase().indexOf(i.scientificname.toLowerCase())}}selectionChange(){this.speciesDataList.data=this.speciesDataBackup,null===this.activeStatusFilter&&(this.activeStatusFilter=["GOOD","IMPROVEMENT NEEDED","AGGREGATIONS ONLY","WRONG","NOT EVALUATED"]);let t=[];t=this.speciesDataList.data.filter(2e3===this.pointsSliderForm.value.pointsSliderControl[1]?t=>t.auc>=this.aucSliderForm.value.aucSliderControl[0]&&t.auc<=this.aucSliderForm.value.aucSliderControl[1]&&-1!==this.activeStatusFilter.indexOf(t.status)&&t.num_points>=this.pointsSliderForm.value.pointsSliderControl[0]:t=>t.auc>=this.aucSliderForm.value.aucSliderControl[0]&&t.auc<=this.aucSliderForm.value.aucSliderControl[1]&&-1!==this.activeStatusFilter.indexOf(t.status)&&t.num_points>=this.pointsSliderForm.value.pointsSliderControl[0]&&t.num_points<=this.pointsSliderForm.value.pointsSliderControl[1]),this.speciesDataList.data=t}statusSelectionChange(t){this.speciesDataList.data=this.speciesDataBackup,this.activeStatusFilter="Any"===t.value?["GOOD","IMPROVEMENT NEEDED","AGGREGATIONS ONLY","WRONG","NOT EVALUATED"]:"EVALUATED"===t.value?["GOOD","IMPROVEMENT NEEDED","AGGREGATIONS ONLY","WRONG"]:t.value;let e=this.speciesDataList.data.filter(t=>t.auc>=this.aucSliderForm.value.aucSliderControl[0]+.1&&t.auc<=this.aucSliderForm.value.aucSliderControl[1]-.1&&-1!==this.activeStatusFilter.indexOf(t.status)&&t.num_points>=this.pointsSliderForm.value.pointsSliderControl[0]+50&&t.num_points<=this.pointsSliderForm.value.pointsSliderControl[1]-50);this.speciesDataList.data=e}navigateModelPage(t){this.router.navigate(["/predictions/species/",t.scientificname.replace(" ","_")],{queryParams:{prediction_id:t.prediction_id}})}toggle(t){if(-1===this.selection.indexOf(t))this.selection.push(t),t.checked=!0;else{let e=this.selection.indexOf(t);this.selection.splice(e,1),t.checked=!1}}isAllSelected(){return this.selection.length===this.speciesDataList.data.length}masterToggle(){this.isAllSelected()?(this.speciesDataList.data.forEach(t=>{t.checked="NOT_EVALUATED"!==t.status||!1!==t.isDisabled}),this.selection=[]):(this.selection=[],this.speciesDataList.filteredData.forEach(t=>{this.selection.push(t),t.checked=!0}))}addSelectedToWorksheet(){let t=[],e=[];this.selection.forEach(e=>t.push(e.scientificname)),t.forEach(t=>{this.speciesDataList.data.forEach(e=>{e.scientificname===t&&(e.checked=!0,e.isDisabled=!0)})}),null!==localStorage.getItem("Species")&&localStorage.getItem("Species").length>0?(e=JSON.parse(localStorage.getItem("Species")||"{}"),t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})):t.forEach(t=>e.push(t)),t.forEach(t=>{if(-1===Object.keys(localStorage).indexOf(t)){let e=[],i=[];e=this.predictionList.filter(e=>e.scientificname===t),e.forEach(t=>i.push(t.prediction_id)),localStorage.setItem(t+"",JSON.stringify(i))}}),localStorage.setItem("Species",JSON.stringify(e))}refreshWorksheet(){this.worksheetData=[];null!==localStorage.getItem("Evaluated")&&localStorage.getItem("Evaluated").length>0&&JSON.parse(localStorage.getItem("Evaluated")||"{}"),null!==localStorage.getItem("Species")&&localStorage.getItem("Species").length>0&&JSON.parse(localStorage.getItem("Species")||"{}").forEach(t=>{let e=this.speciesDataBackup.find(e=>e.scientificname===t);void 0!==e&&this.worksheetData.push(e)}),this.worksheetDataSource.data=this.worksheetData,this.worksheetDataSource.paginator=this.paginator,this.worksheetDataSource.sort=this.sort2}toggleFilters(){this.aucOptions=Object.assign({},this.aucOptions,!0===this.aucOptions.disabled?{disabled:!1}:{disabled:!0}),this.pointsOptions=Object.assign({},this.pointsOptions,!0===this.pointsOptions.disabled?{disabled:!1}:{disabled:!0}),!0===this.scientificnameFilter.disabled?this.scientificnameFilter.enable():this.scientificnameFilter.disable(),!0===this.statusFilter.disabled?this.statusFilter.enable():this.statusFilter.disable()}tabChange(){this.refreshWorksheet(),this.toggleFilters()}toggleSelected(t){if(this.toRemove.indexOf(t)<0)this.toRemove.push(t);else{let e=this.toRemove.indexOf(t);this.toRemove.splice(e)}}removeSelectedFromWorksheet(){if(localStorage.getItem("Species").length>0){let t=JSON.parse(localStorage.getItem("Species")||"{}"),e=[];this.toRemove.forEach(t=>e.push(t.scientificname)),e.forEach(e=>{let i=t.indexOf(e);if(i>-1){t.splice(i,1);let n=this.speciesDataList.data.find(t=>t.scientificname===e+"");n.checked=!1,n.isDisabled=!1}}),this.toRemove.forEach(t=>localStorage.removeItem(t.scientificname.replace("_"," ")+"")),localStorage.setItem("Species",JSON.stringify(t)),this.refreshWorksheet()}}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(c.a),a.Pb(c.f),a.Pb(l.e))},t.\u0275cmp=a.Jb({type:t,selectors:[["mol-prediction-table"]],viewQuery:function(t,e){var i;1&t&&(a.Pc(V.a,!0),a.Pc(N,!0),a.Pc(L,!0)),2&t&&(a.uc(i=a.ec())&&(e.paginator=i.first),a.uc(i=a.ec())&&(e.sort=i.first),a.uc(i=a.ec())&&(e.sort2=i.first))},features:[a.Ab],decls:119,vars:24,consts:[["class","statistics",4,"ngIf"],[1,"filter-container"],[1,"filter-heading"],[1,"filter-content"],["appearance","standard",1,"dropdown-container"],[3,"formControl","selectionChange"],["value","Any"],["value","NOT EVALUATED"],["value","EVALUATED"],["value","GOOD"],["value","IMPROVEMENT NEEDED"],["value","AGGREGATIONS ONLY"],["value","WRONG"],[3,"formGroup"],[1,"custom-slider"],["formControlName","aucSliderControl",3,"options","userChange"],[1,"slider-heading"],["formControlName","pointsSliderControl",3,"options","userChange"],[1,"search-filter"],["matInput","","placeholder","Search Species","autocomplete","off",3,"formControl"],["mat-align-tabs","right",3,"selectedTabChange"],["label","View All Predictions"],["mat-stroked-button","",3,"click"],[1,"divider"],["mat-table","","multiTemplateDataRows","","matSort","",3,"dataSource"],["table","matSort"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","isExpanded"],["matColumnDef","scientificname"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","main-td",3,"click",4,"matCellDef"],["matColumnDef","model_rank"],["mat-cell","","class","main-td",4,"matCellDef"],["matColumnDef","auc"],["mat-header-cell","","mat-sort-header","","style","text-align:right",4,"matHeaderCellDef"],["matColumnDef","version"],["matColumnDef","num_points"],["matColumnDef","nummodels"],["matColumnDef","status"],["mat-header-cell","","mat-sort-header","","style","text-align:center",4,"matHeaderCellDef"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","detail-row",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSizeOptions","pageSize"],["label","View My Worksheet"],["worksheet","matSort"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],[1,"statistics"],[1,"statistic"],[1,"value"],[1,"label"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","disabled","click","change"],["class","fa fa-angle-up",3,"click",4,"ngIf"],["class","fa fa-angle-down",3,"click",4,"ngIf"],[1,"fa","fa-angle-up",3,"click"],[1,"fa","fa-angle-down",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"main-td",3,"click"],["mat-cell","",1,"main-td"],["mat-header-cell","","mat-sort-header","",2,"text-align","right"],["mat-header-cell","","mat-sort-header","",2,"text-align","center"],[1,"element-detail"],["mat-table","",1,"table-expand",3,"dataSource"],["mat-cell","","class","expanded-sciname",4,"matCellDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-cell","",1,"expanded-sciname"],["mat-row",""],["mat-header-row",""],["mat-row","",1,"detail-row"],[3,"click","change"]],template:function(t,e){1&t&&(a.Hc(0,I,20,6,"div",0),a.Qb(1,"hr"),a.Vb(2,"div",1),a.Vb(3,"h4",2),a.Jc(4,"Quick Filters: "),a.Ub(),a.Vb(5,"div",3),a.Vb(6,"mat-form-field",4),a.Vb(7,"mat-label"),a.Jc(8,"Status"),a.Ub(),a.Vb(9,"mat-select",5),a.dc("selectionChange",(function(t){return e.statusSelectionChange(t)})),a.Vb(10,"mat-option",6),a.Jc(11,"Any"),a.Ub(),a.Vb(12,"mat-option",7),a.Jc(13,"NOT EVALUATED"),a.Ub(),a.Vb(14,"mat-option",8),a.Jc(15,"EVALUATED"),a.Ub(),a.Vb(16,"mat-option",9),a.Jc(17,"GOOD"),a.Ub(),a.Vb(18,"mat-option",10),a.Jc(19,"IMPROVEMENT NEEDED"),a.Ub(),a.Vb(20,"mat-option",11),a.Jc(21,"AGGREGATIONS ONLY"),a.Ub(),a.Vb(22,"mat-option",12),a.Jc(23,"WRONG"),a.Ub(),a.Ub(),a.Ub(),a.Vb(24,"form",13),a.Vb(25,"div",14),a.Vb(26,"ngx-slider",15),a.dc("userChange",(function(){return e.selectionChange()})),a.Ub(),a.Ub(),a.Vb(27,"h3",16),a.Jc(28,"AUC"),a.Ub(),a.Ub(),a.Vb(29,"form",13),a.Vb(30,"div",14),a.Vb(31,"ngx-slider",17),a.dc("userChange",(function(){return e.selectionChange()})),a.Ub(),a.Ub(),a.Vb(32,"h3",16),a.Jc(33,"Number of Points"),a.Ub(),a.Ub(),a.Vb(34,"mat-form-field",18),a.Qb(35,"input",19),a.Ub(),a.Ub(),a.Ub(),a.Vb(36,"mat-tab-group",20),a.dc("selectedTabChange",(function(){return e.tabChange()})),a.Vb(37,"mat-tab",21),a.Vb(38,"div"),a.Vb(39,"button",22),a.dc("click",(function(){return e.addSelectedToWorksheet()})),a.Jc(40,"Add Selected to Worksheet"),a.Ub(),a.Ub(),a.Qb(41,"div",23),a.Qb(42,"mol-spinner"),a.Vb(43,"table",24,25),a.Tb(45,26),a.Hc(46,A,2,2,"th",27),a.Hc(47,F,2,2,"td",28),a.Sb(),a.Tb(48,29),a.Hc(49,R,1,0,"th",27),a.Hc(50,$,3,2,"td",28),a.Sb(),a.Tb(51,30),a.Hc(52,z,2,0,"th",31),a.Hc(53,G,2,1,"td",32),a.Sb(),a.Tb(54,33),a.Hc(55,W,2,0,"th",31),a.Hc(56,K,2,1,"td",34),a.Sb(),a.Tb(57,35),a.Hc(58,Q,2,0,"th",36),a.Hc(59,B,3,4,"td",34),a.Sb(),a.Tb(60,37),a.Hc(61,Y,2,0,"th",27),a.Hc(62,q,2,1,"td",34),a.Sb(),a.Tb(63,38),a.Hc(64,X,2,0,"th",31),a.Hc(65,Z,2,1,"td",34),a.Sb(),a.Tb(66,39),a.Hc(67,tt,2,0,"th",31),a.Hc(68,et,2,1,"td",34),a.Sb(),a.Tb(69,40),a.Hc(70,it,2,0,"th",41),a.Hc(71,nt,2,1,"td",34),a.Sb(),a.Tb(72,42),a.Hc(73,bt,16,4,"td",28),a.Sb(),a.Hc(74,mt,1,0,"tr",43),a.Hc(75,pt,1,2,"tr",44),a.Hc(76,ut,1,0,"tr",45),a.Ub(),a.Qb(77,"mat-paginator",46),a.Ub(),a.Vb(78,"mat-tab",47),a.Vb(79,"div"),a.Vb(80,"button",22),a.dc("click",(function(){return e.removeSelectedFromWorksheet()})),a.Jc(81,"Remove from Worksheet"),a.Ub(),a.Ub(),a.Qb(82,"div",23),a.Qb(83,"mol-spinner"),a.Vb(84,"table",24,48),a.Tb(86,29),a.Hc(87,ht,1,0,"th",27),a.Hc(88,Ct,3,2,"td",28),a.Sb(),a.Tb(89,26),a.Hc(90,Ot,2,0,"th",27),a.Hc(91,St,2,0,"td",28),a.Sb(),a.Tb(92,30),a.Hc(93,xt,2,0,"th",31),a.Hc(94,Vt,2,1,"td",32),a.Sb(),a.Tb(95,33),a.Hc(96,wt,2,0,"th",31),a.Hc(97,vt,2,1,"td",34),a.Sb(),a.Tb(98,35),a.Hc(99,_t,2,0,"th",31),a.Hc(100,Dt,3,4,"td",34),a.Sb(),a.Tb(101,37),a.Hc(102,Ut,2,0,"th",31),a.Hc(103,Mt,2,1,"td",34),a.Sb(),a.Tb(104,39),a.Hc(105,Et,2,0,"th",31),a.Hc(106,Pt,2,1,"td",34),a.Sb(),a.Tb(107,38),a.Hc(108,kt,2,0,"th",31),a.Hc(109,Jt,2,1,"td",34),a.Sb(),a.Tb(110,40),a.Hc(111,Tt,2,0,"th",31),a.Hc(112,Ht,2,1,"td",34),a.Sb(),a.Tb(113,42),a.Hc(114,yt,16,4,"td",28),a.Sb(),a.Hc(115,$t,1,0,"tr",49),a.Hc(116,zt,1,2,"tr",44),a.Hc(117,Gt,1,0,"tr",45),a.Ub(),a.Qb(118,"mat-paginator",46),a.Ub(),a.Ub()),2&t&&(a.oc("ngIf",e.taxaMetrics),a.Cb(9),a.oc("formControl",e.statusFilter),a.Cb(15),a.oc("formGroup",e.aucSliderForm),a.Cb(2),a.oc("options",e.aucOptions),a.Cb(3),a.oc("formGroup",e.pointsSliderForm),a.Cb(2),a.oc("options",e.pointsOptions),a.Cb(4),a.oc("formControl",e.scientificnameFilter),a.Cb(8),a.oc("dataSource",e.speciesDataList),a.Cb(31),a.oc("matHeaderRowDef",e.columns),a.Cb(1),a.oc("matRowDefColumns",e.columns),a.Cb(1),a.oc("matRowDefColumns",a.qc(22,Wt)),a.Cb(1),a.oc("length",null==e.taxaData?null:e.taxaData.n_models)("pageSizeOptions",e.pageSizes)("pageSize",e.pageSize),a.Cb(7),a.oc("dataSource",e.worksheetDataSource),a.Cb(31),a.oc("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),a.Cb(1),a.oc("matRowDefColumns",e.columns),a.Cb(1),a.oc("matRowDefColumns",a.qc(23,Wt)),a.Cb(1),a.oc("length",e.worksheetDataSource.data.length)("pageSizeOptions",e.pageSizes)("pageSize",e.pageSize))},directives:[n.t,T.c,T.g,v.a,g.r,g.g,H.n,g.H,g.s,g.j,E.b,g.h,_.b,g.c,M.b,M.a,U.b,m.a,x.j,w.a,x.c,x.e,x.b,x.g,x.i,V.a,x.d,D.a,x.a,w.b,x.h,x.f],pipes:[n.G,n.g],styles:[".statistics[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%;padding:10px;margin-top:30px;margin-bottom:30px}.statistics[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{vertical-align:middle;text-align:left;height:100%;margin:0;font-size:26pt}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]{text-align:center}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:18pt;color:#ff903f;font-weight:700;padding-bottom:6px}.statistics[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:14pt}hr[_ngcontent-%COMP%]{border:0;border-top:2px solid #000}table[_ngcontent-%COMP%]{width:100%;margin:0}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:12pt}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{word-wrap:break-word}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:11pt}.main-td[_ngcontent-%COMP%]{font-weight:350}.table-expand[_ngcontent-%COMP%]{width:100%}.table-expand[_ngcontent-%COMP%]   .mat-column-scientificname[_ngcontent-%COMP%]{width:48%!important;text-align:right}.table-expand[_ngcontent-%COMP%]   .mat-column-model_rank[_ngcontent-%COMP%]{width:12%!important;text-align:center}.table-expand[_ngcontent-%COMP%]   .mat-column-auc[_ngcontent-%COMP%]{width:8%!important}.table-expand[_ngcontent-%COMP%]   .mat-column-version[_ngcontent-%COMP%]{width:8%!important;text-align:center}.table-expand[_ngcontent-%COMP%]   .mat-column-num_points[_ngcontent-%COMP%]{width:12%!important;text-align:center}.table-expand[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{width:22%!important}tr.detail-row[_ngcontent-%COMP%]{height:0}tr.detail-row[_ngcontent-%COMP%]   .mat-column-expandedDetail[_ngcontent-%COMP%]{margin:0 24px!important;padding:0!important}.filter-container[_ngcontent-%COMP%]{width:100%;max-height:100px;border-radius:8px;border:1px solid #777575;margin-top:25px;margin-bottom:25px;text-align:left;display:flex;flex-direction:row;justify-content:left}.filter-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{font-size:11pt;align-items:right;margin-right:8px;margin-top:0;margin-bottom:0;width:18%}.filter-container[_ngcontent-%COMP%]   .search-filter[_ngcontent-%COMP%]{justify-content:right;margin-top:17px;width:20%}.filter-container[_ngcontent-%COMP%]   .filter-heading[_ngcontent-%COMP%]{font-weight:700;font-size:11pt;margin-right:8px;margin-left:5px;margin-top:30px}.filter-container[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]{width:180px;margin-top:17px;margin-bottom:2px}.filter-container[_ngcontent-%COMP%]   .slider-heading[_ngcontent-%COMP%]{margin-left:30px;margin-top:2px;font-weight:380}.filter-container[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:90%}.mat-row[_ngcontent-%COMP%]:hover{background-color:#e8eaf6;cursor:pointer}.mat-stroked-button[_ngcontent-%COMP%]{margin-bottom:6px;margin-top:6px;margin-left:3px}.mat-stroked-button[_ngcontent-%COMP%]:hover{background-color:#ff903f;color:#fff;cursor:pointer}.mat-column-isExpanded[_ngcontent-%COMP%]{width:5%!important;text-align:left}.mat-column-scientificname[_ngcontent-%COMP%]{width:22%!important;text-align:left}.mat-column-model_rank[_ngcontent-%COMP%]{width:12%!important;text-align:center}.mat-column-auc[_ngcontent-%COMP%]{width:8%!important}.mat-column-auc[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:right}.mat-column-version[_ngcontent-%COMP%]{width:8%!important;text-align:center}.mat-column-nummodels[_ngcontent-%COMP%]{width:12%;text-align:center}.mat-column-num_points[_ngcontent-%COMP%]{width:12%!important;text-align:center}.mat-column-status[_ngcontent-%COMP%]{width:22%!important}.mat-column-select[_ngcontent-%COMP%]{width:9%!important;text-align:left}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):hover{background:#f5f5f5}tr.element-row[_ngcontent-%COMP%]:not(.expanded-row):active{background:#efefef}.element-detail[_ngcontent-%COMP%]{border-radius:8px}"],data:{animation:[Object(k.n)("detailExpand",[Object(k.k)("collapsed, void",Object(k.l)({height:"0px",minHeight:"0",display:"none"})),Object(k.k)("expanded",Object(k.l)({height:"*"})),Object(k.m)("expanded <=> collapsed",Object(k.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),Object(k.m)("expanded <=> void",Object(k.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])]}}),t})()}]}];let Qt=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[n.c,c.j.forChild(Kt)],c.j]}),t})(),Bt=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[Qt,P]]}),t})()}}]);