"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[739],{850:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(8152),a=t(2791),o=t(5861),s=t(7757),c=t.n(s),i=t(4569),u=t.n(i),l="aec86298015b623e3598e86276b5a670",d="https://api.themoviedb.org/3",p=function(n){if(200===n.status&&0!==n.data.total_results)return{data:n.data,BasicURL:"https://image.tmdb.org/t/p/original"}},f=function(){var n=(0,o.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/trending/movie/day?api_key=").concat(l)).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"?api_key=").concat(l,"&language=en-US")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"/credits?api_key=").concat(l,"&language=en-US")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"/reviews?api_key=").concat(l,"&language=en-US&page=1")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1],s=(0,a.useState)(""),c=(0,r.Z)(s,2),i=c[0],u=c[1],l=(0,a.useState)(""),d=(0,r.Z)(l,2),p=d[0],x=d[1],m=(0,a.useState)(""),b=(0,r.Z)(m,2),j=b[0],Z=b[1],w=(0,a.useState)(0),k=(0,r.Z)(w,2),_=k[0],S=k[1],U=(0,a.useState)(""),y=(0,r.Z)(U,2),P=y[0],C=y[1],M=(0,a.useState)([]),R=(0,r.Z)(M,2),A=R[0],D=R[1],L=(0,a.useState)(""),B=(0,r.Z)(L,2),F=B[0],G=B[1],O=(0,a.useState)([]),q=(0,r.Z)(O,2),z=q[0],E=q[1],H=(0,a.useState)(),I=(0,r.Z)(H,2),T=I[0],J=I[1],K=(0,a.useState)(""),N=(0,r.Z)(K,2),Q=N[0],V=N[1],W=function(){f().then((function(n){var e=n.data;o(e.results)})).catch((function(n){console.log(n.message),V("Request error !!!")}))},X=function(n){h(n).then((function(n){var e=n.data,t=n.BasicURL;u(t),x(e.original_title),Z(e.release_date.slice(0,4)),S(e.vote_average),C(e.overview),D(e.genres),G(e.poster_path)})).catch((function(n){return console.log(n.message),n.message}))},Y=function(n){g(n).then((function(n){var e=n.data,t=n.BasicURL;E(e.cast),u(t)})).catch((function(n){return console.log(n.message),n.message}))},$=function(n){v(n).then((function(n){var e=n.data;J(e.results)})).catch((function(n){return console.log(n.message),n.message}))},nn=(0,a.useCallback)((function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(n){case"/":W();break;case"/movies/".concat(e):X(e);break;case"/movies/".concat(e,"/cast"):Y(e);break;case"/movies/".concat(e,"/reviews"):$(e);break;default:console.log("hook error")}}),[]);return{errorMessage:Q,trendsMovies:t,basicUrl:i,title:p,releaseDate:j,rating:_,overview:P,genres:A,poster:F,profileActors:z,reviews:T,setApiMoveDetails:nn}}},4838:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,o,s,c,i,u=t(6871),l=t(168),d=t(6444),p=d.ZP.button(r||(r=(0,l.Z)(["\n  margin-top: 15px;\n  padding: 5px 8px;\n  font-size: 15px;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    color: #329fd6;\n    border-color: #329fd6;\n  }\n  span {\n    margin-right: 3px;\n    font-weight: bold;\n  }\n"]))),f=t(184),h=function(){var n=(0,u.s0)();return(0,f.jsxs)(p,{type:"button",onClick:function(){n("/")},children:[(0,f.jsx)("span",{children:"\u21d0"})," Go back"]})},g=t(3504),v=t(2791),x=d.ZP.article(a||(a=(0,l.Z)(["\n  margin-top: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  flex-direction: row-reverse;\n  border-bottom: solid #d1d1d3 4px;\n"]))),m=d.ZP.div(o||(o=(0,l.Z)([""]))),b=d.ZP.img(s||(s=(0,l.Z)(["\n  margin-right: 15px;\n"]))),j=d.ZP.div(c||(c=(0,l.Z)(["\n  ul {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: solid #d1d1d3 4px;\n  }\n\n  li {\n    padding: 5px 0;\n    &:hover,\n    &:focus {\n      background-color: #f0f3f7;\n    }\n    a {\n      color: #000000;\n    }\n  }\n"]))),Z=d.ZP.p(i||(i=(0,l.Z)(["\n  padding-top: 5px;\n  color: #329fd6;\n"]))),w=t(850),k=function(){var n=(0,u.TH)().pathname,e=(0,u.UO)().movieId,t=(0,w.Z)(),r=t.errorMessage,a=t.basicUrl,o=t.title,s=t.releaseDate,c=t.rating,i=t.overview,l=t.genres,d=t.poster,p=t.setApiMoveDetails;(0,v.useEffect)((function(){p(n,e)}),[n,e,p]);return(0,f.jsxs)(f.Fragment,{children:[0===r.length&&0===o.length&&(0,f.jsx)(Z,{children:"Loading ..."}),o.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(x,{children:[(0,f.jsxs)(m,{children:[(0,f.jsxs)("h2",{children:[o," (",s,")"]}),(0,f.jsxs)("p",{children:["User Score: ",c]}),(0,f.jsx)("h3",{children:"Overvlew"}),(0,f.jsx)("p",{children:i}),(0,f.jsx)("h3",{children:"Genres: "}),(0,f.jsx)("p",{children:function(){var n=[];return l.map((function(e){return n.push(e.name)})),n.join(", ")}()})]}),(0,f.jsx)(b,{src:[a,d].join(""),alt:o,height:"300"})]}),(0,f.jsxs)(j,{children:[(0,f.jsx)("h3",{children:"Additional information:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(u.j3,{})]})]}),r.length>0&&(0,f.jsx)(Z,{children:r})]})},_=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=MovieDetails.4e1bd41e.chunk.js.map