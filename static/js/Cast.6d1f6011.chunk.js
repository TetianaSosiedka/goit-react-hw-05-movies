"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{3104:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,a=n(2791),c=n(6871),o=n(168),s=n(6444).ZP.p(r||(r=(0,o.Z)(["\n  padding-top: 5px;\n  color: #329fd6;\n"]))),i=n(850),u=n(184),f=function(){var e=(0,i.Z)(),t=e.basicUrl,n=e.profileActors,r=e.errorMessage,o=e.setApiMoveDetails,f=(0,c.UO)().movieId,l=(0,c.TH)().pathname||"";return(0,a.useEffect)((function(){return o({locationPathname:l,movieId:f})}),[l,f,o]),(0,u.jsxs)(u.Fragment,{children:[0===r.length&&0===n.length&&(0,u.jsx)(s,{children:"Loading ..."}),r.length>0&&(0,u.jsx)(s,{children:r}),(0,u.jsx)("ul",{children:n.map((function(e){var n=e.profile_path?[t,e.profile_path].join(""):"http://dummyimage.com/150x200/329fd6.gif&text=Actor+Photo!";return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:n,alt:e.name,width:"150",loading:"lazy"}),(0,u.jsx)("p",{children:e.name}),(0,u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}},850:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(885),a=n(2791),c=n(5861),o=n(7757),s=n.n(o),i=n(4569),u=n.n(i),f="aec86298015b623e3598e86276b5a670",l="https://api.themoviedb.org/3",p=function(e){if(200===e.status&&0!==e.data.total_results)return{data:e.data,BasicURL:"https://image.tmdb.org/t/p/original"}},h=function(){var e=(0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("".concat(l,"/trending/movie/day?api_key=").concat(f)).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("".concat(l,"/movie/").concat(t,"?api_key=").concat(f,"&language=en-US")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("".concat(l,"/movie/").concat(t,"/credits?api_key=").concat(f,"&language=en-US")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("".concat(l,"/movie/").concat(t,"/reviews?api_key=").concat(f,"&language=en-US&page=1")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("".concat(l,"/search/movie?api_key=").concat(f,"&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(e){return p(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],o=(0,a.useState)(""),s=(0,r.Z)(o,2),i=s[0],u=s[1],f=(0,a.useState)(""),l=(0,r.Z)(f,2),p=l[0],w=l[1],k=(0,a.useState)(""),Z=(0,r.Z)(k,2),_=Z[0],b=Z[1],y=(0,a.useState)(0),x=(0,r.Z)(y,2),S=x[0],U=x[1],j=(0,a.useState)(""),M=(0,r.Z)(j,2),q=M[0],A=M[1],B=(0,a.useState)([]),C=(0,r.Z)(B,2),L=C[0],P=C[1],R=(0,a.useState)(""),D=(0,r.Z)(R,2),I=D[0],z=D[1],E=(0,a.useState)([]),F=(0,r.Z)(E,2),H=F[0],O=F[1],T=(0,a.useState)(),G=(0,r.Z)(T,2),J=G[0],K=G[1],N=(0,a.useState)([]),Q=(0,r.Z)(N,2),V=Q[0],W=Q[1],X=(0,a.useState)(""),Y=(0,r.Z)(X,2),$=Y[0],ee=Y[1],te=(0,a.useCallback)((function(e){var t=e.locationPathname,n=e.movieId,r=void 0===n?0:n,a=e.query,o=void 0===a?"":a;switch(t){case"/":h().then((function(e){var t=e.data;c(t.results)})).catch((function(e){console.log(e.message),ee("Request error !!!")}));break;case"/movies/".concat(r):!function(e){g(e).then((function(e){var t=e.data,n=e.BasicURL;u(n),w(t.original_title),b(t.release_date.slice(0,4)),U(t.vote_average),A(t.overview),P(t.genres),z(t.poster_path)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies/".concat(r,"/cast"):!function(e){v(e).then((function(e){var t=e.data,n=e.BasicURL;O(t.cast),u(n)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies/".concat(r,"/reviews"):!function(e){d(e).then((function(e){var t=e.data;K(t.results)})).catch((function(e){return console.log(e.message),e.message}))}(r);break;case"/movies?query=".concat(o):!function(e){m(e).then((function(e){var t=e.data;W(t.results),ee("")})).catch((function(t){console.log(t.message),W([]),ee("By request ".concat(e," nothing was found."))}))}(o);break;default:console.log("hook error")}}),[]);return{errorMessage:$,trendsMovies:n,basicUrl:i,title:p,releaseDate:_,rating:S,overview:q,genres:L,poster:I,profileActors:H,reviews:J,searchMoviews:V,setApiMoveDetails:te}}}}]);
//# sourceMappingURL=Cast.6d1f6011.chunk.js.map