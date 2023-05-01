"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{600:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(861),a=t(687),s=t.n(a),c="https://api.themoviedb.org/3",i="63021acb907201a1471dfb5721049566",u=t(243).Z.create({baseURL:c,params:{api_key:i}}),o={getTrendingMovies:function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/trending/movie/day");case 3:return n=e.sent,t=n.data.results,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),getSaughtMovies:function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/search/movie",{params:{query:n,language:"en-US",page:1,include_adult:!1}});case 3:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(n),{params:{language:"en-US"}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),getCredits:function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(n,"/credits"),{params:{language:"en-US"}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),getReviews:function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("/movie/".concat(n,"/reviews"),{params:{language:"en-US",page:1}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}},425:function(e,n,t){t.d(n,{h:function(){return h}});var r,a,s=t(128),c=t(766),i=t(934),u=t(87),o=(0,i.Z)(u.rU)(r||(r=(0,c.Z)(["\n    display: block;\n    margin: 5px;\n"]))),l=i.Z.button(a||(a=(0,c.Z)(["\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 8px;\n\n    &:hover {\n        background-color: blue;\n        color: white;\n    }\n"]))),p=t(184),h=function(e){var n=e.to,t=e.children;return(0,p.jsx)(o,{to:n,children:(0,p.jsxs)(l,{type:"button",children:[(0,p.jsx)(s.jTe,{size:"16"}),t]})})}},257:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,s=t(861),c=t(439),i=t(687),u=t.n(i),o=t(600),l=t(425),p=t(791),h=t(689),d=t(87),v=t(766),f=t(934),x=f.Z.div(r||(r=(0,v.Z)(["\n    display: flex;\n    gap: 16px;\n"]))),g=f.Z.img(a||(a=(0,v.Z)(["\n    width: 250px;\n"]))),m=t(184),j=function(){var e,n=(0,h.TH)(),t=null!==(e=(0,h.UO)().movieId)&&void 0!==e?e:"",r=(0,p.useState)(""),a=(0,c.Z)(r,2),i=a[0],v=a[1],f=(0,p.useState)(""),j=(0,c.Z)(f,2),w=j[0],Z=j[1],b=(0,p.useState)(0),k=(0,c.Z)(b,2),y=k[0],S=k[1],U=(0,p.useState)(""),_=(0,c.Z)(U,2),M=_[0],C=_[1],D=(0,p.useState)([]),G=(0,c.Z)(D,2),O=G[0],R=G[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.h.getMovieDetails(t);case 2:n=e.sent,v("https://image.tmdb.org/t/p/w500/".concat(n.poster_path)),Z(n.original_title),S(Math.round(10*n.vote_average)),C(n.overview),R(n.genres.map((function(e){return e.name})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.h,{to:"/",children:"Go back"}),(0,m.jsxs)(x,{children:[(0,m.jsx)(g,{src:i,alt:w}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:w}),(0,m.jsxs)("p",{children:["User score: ",y,"%"]}),(0,m.jsx)("h4",{children:"Overview"}),(0,m.jsx)("p",{children:M}),(0,m.jsx)("h5",{children:"Genres"}),(0,m.jsx)("p",{children:O.map((function(e){return String(e)+" "}))})]})]}),(0,m.jsx)("hr",{}),(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(d.rU,{to:"cast",state:{from:n},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(d.rU,{to:"reviews",state:{from:n},children:"Reviews"})})]}),(0,m.jsx)("hr",{}),(0,m.jsx)(p.Suspense,{fallback:(0,m.jsx)("div",{children:"LOADING..."}),children:(0,m.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=257.6fea28ee.chunk.js.map