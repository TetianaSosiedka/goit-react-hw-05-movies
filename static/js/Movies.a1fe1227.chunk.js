"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{850:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(885),a=t(2791),o=t(5861),c=t(7757),u=t.n(c),s=t(4569),i=t.n(s),l="aec86298015b623e3598e86276b5a670",f="https://api.themoviedb.org/3",p=function(e){if(200===e.status&&0!==e.data.total_results)return{data:e.data,BasicURL:"https://image.tmdb.org/t/p/original"}},d=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("".concat(f,"/trending/movie/day?api_key=").concat(l)).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("".concat(f,"/movie/").concat(n,"?api_key=").concat(l,"&language=en-US")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,o.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("".concat(f,"/movie/").concat(n,"/credits?api_key=").concat(l,"&language=en-US")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("".concat(f,"/movie/").concat(n,"/reviews?api_key=").concat(l,"&language=en-US&page=1")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().get("".concat(f,"/search/movie?api_key=").concat(l,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],c=(0,a.useState)(""),u=(0,r.Z)(c,2),s=u[0],i=u[1],l=(0,a.useState)(""),f=(0,r.Z)(l,2),p=f[0],b=f[1],x=(0,a.useState)(""),Z=(0,r.Z)(x,2),k=Z[0],w=Z[1],S=(0,a.useState)(0),y=(0,r.Z)(S,2),_=y[0],j=y[1],q=(0,a.useState)(""),U=(0,r.Z)(q,2),M=U[0],C=U[1],L=(0,a.useState)([]),P=(0,r.Z)(L,2),B=P[0],D=P[1],R=(0,a.useState)(""),A=(0,r.Z)(R,2),z=A[0],F=A[1],H=(0,a.useState)([]),T=(0,r.Z)(H,2),E=T[0],I=T[1],G=(0,a.useState)(),J=(0,r.Z)(G,2),K=J[0],N=J[1],O=(0,a.useState)([]),Q=(0,r.Z)(O,2),V=Q[0],W=Q[1],X=(0,a.useState)(""),Y=(0,r.Z)(X,2),$=Y[0],ee=Y[1],ne=(0,a.useCallback)((function(e){var n=e.locationPathname,t=e.movieId,r=void 0===t?0:t,a=e.query,c=void 0===a?"":a;switch(n){case"/":d().then((function(e){var n=e.data;o(n.results)})).catch((function(e){console.log(e.message),ee("Request error !!!")}));break;case"/movies/".concat(r):!function(e){g(e).then((function(e){var n=e.data,t=e.BasicURL;i(t),b(n.original_title),w(n.release_date.slice(0,4)),j(n.vote_average),C(n.overview),D(n.genres),F(n.poster_path)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies/".concat(r,"/cast"):!function(e){h(e).then((function(e){var n=e.data,t=e.BasicURL;I(n.cast),i(t)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies/".concat(r,"/reviews"):!function(e){v(e).then((function(e){var n=e.data;N(n.results)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies?query=".concat(c):!function(e){m(e).then((function(e){var n=e.data;W(n.results),ee("")})).catch((function(n){console.log(n.message),W([]),ee("By request ".concat(e," nothing was found."))}))}(c);break;default:console.log("hook error")}}),[]);return{errorMessage:$,trendsMovies:t,basicUrl:s,title:p,releaseDate:k,rating:_,overview:M,genres:B,poster:z,profileActors:E,reviews:K,searchMoviews:V,setApiMoveDetails:ne}}},1266:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a,o,c=t(885),u=t(501),s=t(2791),i=t(168),l=t(6444),f=l.ZP.form(r||(r=(0,i.Z)(["\n  margin-top: 15px;\n  input {\n    padding: 5px 8px;\n    border: solid 2px #000000;\n    font-size: 15px;\n    &:focus {\n      color: #329fd6;\n    }\n  }\n  button {\n    padding: 5px 8px;\n    font-size: 15px;\n    background-color: transparent;\n    &:hover,\n    &:focus {\n      color: #329fd6;\n      border-color: #329fd6;\n    }\n    &[disabled] {\n      background-color: #e9e9ec9f;\n    }\n  }\n"]))),p=t(184),d=function(e){var n=e.onSubmit,t=(0,s.useState)(""),r=(0,c.Z)(t,2),a=r[0],o=r[1],u=(0,s.useState)(!0),i=(0,c.Z)(u,2),l=i[0],d=i[1];return(0,p.jsxs)(f,{onSubmit:function(e){e.preventDefault(),n(a),o(""),d("")},children:[(0,p.jsx)("input",{onChange:function(e){o(e.target.value),""!==a.trim()&&d(!1)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a}),(0,p.jsx)("button",{type:"submit",disabled:l,children:"Search"})]})},g=t(6871),h=l.ZP.ul(a||(a=(0,i.Z)(["\n  margin-top: 15px;\n  padding-bottom: 15px;\n  span {\n    color: #329fd6;\n  }\n"]))),v=l.ZP.p(o||(o=(0,i.Z)(["\n  padding-top: 5px;\n  color: #329fd6;\n"]))),m=t(850),b=function(e){var n=e.query,t="".concat((0,g.TH)().pathname||"").concat((0,g.TH)().search||""),r=(0,m.Z)(),a=r.errorMessage,o=r.searchMoviews,c=r.setApiMoveDetails;return(0,s.useEffect)((function(){n&&c({locationPathname:t,query:n})}),[t,c,n]),(0,p.jsxs)(p.Fragment,{children:[0===a.length&&0===o.length&&(0,p.jsx)(v,{children:"Loading ..."}),a.length>0&&(0,p.jsx)(v,{children:a}),o.length>0&&(0,p.jsx)(h,{children:o.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"".concat(e.id),children:e.original_title})},e.id)}))})]})},x=function(e){var n,t=e.onLocation,r=(0,u.lr)(),a=(0,c.Z)(r,2),o=a[0],s=a[1],i=null!==(n=o.get("query"))&&void 0!==n?n:"";return(0,p.jsxs)("main",{children:[(0,p.jsx)(d,{onSubmit:function(e){s(""!==e?{query:e}:{}),t(e)}}),i&&(0,p.jsx)(b,{query:i})]})}}}]);
//# sourceMappingURL=Movies.a1fe1227.chunk.js.map