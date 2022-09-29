(function(){"use strict";var e={61:function(e,o,t){var i=t(9242),n=t(3396);const r={class:"wrap"},a={class:"container"},s={key:0,class:"intro"};function l(e,o,t,l,c,u){const v=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",a,[(0,n.Wm)(i.uT,{name:"fade"},{default:(0,n.w5)((()=>[l.show?((0,n.wg)(),(0,n.iD)("div",s)):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(v,{onHide:l.hideIntro},null,8,["onHide"])])])}var c=t(65),u=t(4870),v={components:{},setup(){const e=(0,c.oR)();e.dispatch("fetchMovieList");const o=(0,u.iH)(!0),t=()=>{o.value=!1,document.querySelector("html").style.overflowY="auto"};return{show:o,hideIntro:t}}},d=t(89);const p=(0,d.Z)(v,[["render",l]]);var f=p,m=t(2483);function g(e,o,t,i,r,a){const s=(0,n.up)("MovieList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.movieList,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"movie",key:o},[(0,n.Wm)(s,{propsdata:e},null,8,["propsdata"])])))),128)),(0,n._)("button",{class:"gotop",ref:"gotop",onClick:o[0]||(o[0]=(...e)=>i.moveTop&&i.moveTop(...e))},"위로가기",512)],64)}var h=t(7139);const b={class:"movie-box"},w={class:"a-img"},_=["src"],I={class:"a-title"},k={class:"a-desc"};function M(e,o,t,r,a,s){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("a",{onClick:o[0]||(o[0]=(0,i.iM)(((...e)=>r.detailMove&&r.detailMove(...e)),["stop"]))},[(0,n._)("div",w,[(0,n._)("img",{src:t.propsdata.image},null,8,_)]),(0,n._)("h2",I,[(0,n.Uk)((0,h.zw)(t.propsdata.title)+" ",1),(0,n._)("small",null,(0,h.zw)(t.propsdata.original_title),1)]),(0,n._)("p",k,(0,h.zw)(t.propsdata.description),1)])])}var y={props:["propsdata"],setup(e){const o=(0,m.tv)(),t=()=>{o.push("/page-ghibli/detail/"+e.propsdata.id)};return{detailMove:t}}};const O=(0,d.Z)(y,[["render",M],["__scopeId","data-v-5592fca0"]]);var T=O,L={components:{MovieList:T},setup(e,o){const t=(0,c.oR)(),i=(0,n.Fl)((()=>t.getters.getMovieList)),r=(0,u.iH)(null);(0,n.bv)((()=>{})),(0,n.ic)((()=>{let e=setTimeout((()=>{clearTimeout(e),o.emit("hide")}),1500)}));const a=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return{movieList:i,gotop:r,moveTop:a}}};const z=(0,d.Z)(L,[["render",g],["__scopeId","data-v-445ae23e"]]);var D=z;const U=e=>((0,n.dD)("data-v-72db4ac4"),e=e(),(0,n.Cn)(),e),j={class:"movie-detail"},H=["src"],x={class:"movie-info-wrap"},C={class:"movie-title"},R={class:"movie-info"},S=U((()=>(0,n._)("br",null,null,-1))),q=U((()=>(0,n._)("br",null,null,-1))),E=U((()=>(0,n._)("br",null,null,-1))),F={class:"movie-desc"},P={key:0,class:"detail-intro"};function V(e,o,t,r,a,s){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",{class:"movie-box",style:(0,h.j5)({backgroundImage:`url(${r.movieInfo.movie_banner})`,backgroundSize:"cover",backgroundPosition:"center"})},[(0,n._)("a",{class:"a-back",onClick:o[0]||(o[0]=(0,i.iM)(((...e)=>r.back&&r.back(...e)),["stop"]))},"all list"),(0,n._)("div",j,[(0,n._)("img",{class:"movie-image",src:r.movieInfo.image},null,8,H),(0,n._)("div",x,[(0,n._)("h2",C,[(0,n.Uk)((0,h.zw)(r.movieInfo.title)+" ",1),(0,n._)("small",null,(0,h.zw)(r.movieInfo.original_title),1)]),(0,n._)("p",R,[(0,n.Uk)(" Release Date : "+(0,h.zw)(r.movieInfo.release_date)+" ",1),S,(0,n.Uk)(" Director : "+(0,h.zw)(r.movieInfo.director)+" ",1),q,(0,n.Uk)(" Producer : "+(0,h.zw)(r.movieInfo.producer)+" ",1),E,(0,n.Uk)(" Running Time : "+(0,h.zw)(r.movieInfo.running_time)+" 분 ",1)]),(0,n._)("p",F,(0,h.zw)(r.movieInfo.description),1)])])],4),(0,n.Wm)(i.uT,{name:"fade"},{default:(0,n.w5)((()=>[r.show?((0,n.wg)(),(0,n.iD)("div",P)):(0,n.kq)("",!0)])),_:1})])}var Y={setup(){const e=(0,m.yj)(),o=e.params.id,t=(0,c.oR)();t.dispatch("fetchMovieInfo",o);const i=(0,n.Fl)((()=>t.getters.getMovieInfo)),r=(0,m.tv)(),a=()=>{r.push("/page-ghibli/")},s=(0,u.iH)(!0);return(0,n.bv)((()=>{window.scrollTo(0,0),document.querySelector("html").style.overflowY="hidden"})),(0,n.ic)((()=>{s.value=!1,document.querySelector("html").style.overflowY="auto"})),{id:o,movieInfo:i,back:a,show:s}}};const N=(0,d.Z)(Y,[["render",V],["__scopeId","data-v-72db4ac4"]]);var W=N;const Z=(0,m.p7)({history:(0,m.PO)(),routes:[{path:"/page-ghibli/home",redirect:"/"},{path:"/page-ghibli/",component:D},{path:"/page-ghibli/detail/:id",component:W}]});var $=Z,K=t(6265),A=t.n(K);const B={baseUrl:"https://ghibliapi.herokuapp.com"};function G(){return A().get(`${B.baseUrl}/films`)}function J(e){return console.log("gogogo : ",e),A().get(`${B.baseUrl}/films/${e}`)}var Q=(0,c.MT)({state:{movieList:[],movieInfo:{}},actions:{fetchMovieList({commit:e}){G().then((o=>{e("MOVIE_LIST_INIT",o.data)})).catch((e=>console.log(e)))},fetchMovieInfo({commit:e},o){J(o).then((o=>{e("MOVIE_INFO",o.data)})).catch((e=>console.log(e)))}},mutations:{MOVIE_LIST_INIT(e,o){e.movieList=o},MOVIE_INFO(e,o){e.movieInfo=o}},getters:{getMovieList(e){return e.movieList},getMovieInfo(e){return e.movieInfo}}});(0,i.ri)(f).use($).use(Q).mount("#app")}},o={};function t(i){var n=o[i];if(void 0!==n)return n.exports;var r=o[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,i,n,r){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],r=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,n,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,i){var n,r,a=i[0],s=i[1],l=i[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(l)var u=l(t)}for(o&&o(i);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},i=self["webpackChunkghibli"]=self["webpackChunkghibli"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(61)}));i=t.O(i)})();
//# sourceMappingURL=app.eb30b514.js.map