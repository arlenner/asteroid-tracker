(this["webpackJsonpasteroid-tracker"]=this["webpackJsonpasteroid-tracker"]||[]).push([[0],{14:function(e,t,a){e.exports=a(36)},19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(19),a(20),a(10)),l=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(){return t.reduceRight((function(e,t){return t(e)}),t.pop().apply(void 0,arguments))}},s=function(e){return e},m=function e(t){return{fork:t,map:function(t){var a=this;return e((function(e,n){return a.fork(e,l(n,t))}))},chain:function(t){var a=this;return e((function(e,n){return a.fork(e,(function(a){return t(a).fork(e,n)}))}))},unwrap:function(){this.chain(s)}}};m.http=function(e,t,a){return m((function(n,r){var c=new XMLHttpRequest;c.open(e,t),c.addEventListener("readystatechange",(function(e){return 0==c.readyState?console.log("Awaiting Send..."):1==c.readyState?console.log("Opened request."):2==c.readyState?console.log("Headers recieved."):3==c.readyState?console.log("Acquiring data..."):4==c.readyState&&200===c.status?r(JSON.parse(c.responseText)):n(c.responseText)})),c.send(a)}))};var u=a(2),d=Symbol.for("value"),f=Symbol.for("tag"),p=Symbol.for("type"),h=function(e){throw new Error(e)},E=function(e){var t;return t={},Object(u.a)(t,p,"Option"),Object(u.a)(t,d,e),Object(u.a)(t,f,"Some"),Object(u.a)(t,"map",(function(e){return v.of(e(this[d]))})),Object(u.a)(t,"chain",(function(e){return e(this[d])})),Object(u.a)(t,"unwrap",(function(){return this[d]})),Object(u.a)(t,"ap",(function(e){return e.map(this[d])})),t},g=function(e){var t;return t={},Object(u.a)(t,p,"Option"),Object(u.a)(t,d,null),Object(u.a)(t,f,"None"),Object(u.a)(t,"map",(function(e){return this})),Object(u.a)(t,"chain",(function(e){return this})),Object(u.a)(t,"unwrap",(function(){return this})),Object(u.a)(t,"ap",(function(e){return e})),t},v={Some:E,None:g,isOption:function(e){return e[p]&&"Option"===e[p]},isSome:function(e){return e[f]&&"Some"===e[f]},isNone:function(e){return void 0===e||null===e||e[f]&&"None"===e[f]},of:function(e){return v.isNone(e)?g():E(e)},expect:function(e,t){return v.isNone(t)?h(e):v.isOption(t)?t.unwrap():h("Supplied parameter to fn:expect must be of type <Option>")}},b=function e(t){return function(){for(var a,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return r.length<t.length?(a=e(t)).bind.apply(a,[null].concat(r)):t.call.apply(t,[null].concat(r))}},y=(b((function(e,t){return Option.of(t[e])})),b((function(e,t){return t.split(e)}))),_=b((function(e,t){return t.join(e)})),N=function(e){return e.toString()},O=b((function(e,t,a){return a.slice(e,t)})),w=b((function(e,t){return e(t),t})),j=function(e){var t,a=e.value,n=e.max;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"distance-meter-bg"},r.a.createElement("div",{style:{background:(t=a/n,"rgb(".concat(255-255*t,",").concat(255*t,",0)")),width:"".concat(a/n*100,"%"),height:".6em",zIndex:2}})))},k=a(5),x=function(e){var t=e.name,a=e.risk,n=e.diameter,c=e.approachData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"asteroid-item-hazard":"asteroid-item"},r.a.createElement(k.Fade,{left:!0,big:!0},r.a.createElement("h2",{className:"asteroid-name"},t,a?r.a.createElement("div",{className:"potential-hazard"},"POTENTIAL HAZARD"):r.a.createElement(r.a.Fragment,null))),r.a.createElement("div",{className:"asteroid-item-prop"},r.a.createElement("h4",{className:"asteroid-propname"},"Diameter: "),r.a.createElement("h4",null,n.min.toFixed(2),"-",n.max.toFixed(2),"m")),r.a.createElement("div",{className:"asteroid-item-prop"},r.a.createElement("h4",{className:"asteroid-propname"},"Distance: "),r.a.createElement("h4",null,Number.parseFloat(c.km_miss).toFixed(2),"km")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("h6",null,"near"),r.a.createElement("h6",null,"far")),r.a.createElement(j,{value:c.km_miss,max:"80000000"})))},S=a(7),F=a(9),z=function(e,t){return(e+t)/2},A=function(e){var t,a,n=e.diameter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"asteroid-diameter-chart"},r.a.createElement("div",{style:{background:(t=n.min,a=n.max,"\n    radial-gradient(\n        red 0% ".concat(t/800*100,"%, \n        yellow ").concat(t/800*100,"% ").concat(z(t,a)/800*100,"%,\n        blue ").concat(z(t,a)/800*100,"% ").concat(a/800*100,"%, \n        transparent ").concat(a/800*100,"% 100%)")),width:"100%",height:"100%",borderRadius:".25em"}})))},D=function(e){var t,a=Object(i.a)(e,3),n=a[0],r=a[1];return[a[2],(t=n,"Jan"===t?"01":"Feb"===t?"02":"Mar"===t?"03":"Apr"===t?"04":"May"===t?"05":"Jun"===t?"06":"Jul"===t?"07":"Aug"===t?"08":"Sep"===t?"09":"Oct"===t?"10":"Nov"===t?"11":"Dec"===t?"12":h("Unexpected string ".concat(t," passed to fn:monthToNum. Expected 3 letter month prefix (ie. 'Aug')."))),r]},J=function(e){return l(_("-"),D,y(" "),O(4,15),N)(e)},T=function(e){return{date:e.close_approach_date_full,astro_miss:e.miss_distance.astronomical,lunar_miss:e.miss_distance.lunar,km_miss:e.miss_distance.kilometers,orbiting:e.orbiting_body,relativeVelocity:e.relative_velocity.kilometers_per_hour}},B=function(e){return console.log(e),{magnitude:e.absolute_magnitude_h,approachData:T(e.close_approach_data[0]),diameter:{min:e.estimated_diameter.meters.estimated_diameter_min,max:e.estimated_diameter.meters.estimated_diameter_max},name:e.name,risk:e.is_potentially_hazardous_asteroid,isSentry:e.is_sentry_object,jplUrl:e.nasa_jpl_url}},I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"404-div"},r.a.createElement("h1",{className:"404-h"},"404 Not Found"),r.a.createElement("p",null,e)))},L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-img"},r.a.createElement("div",{className:"main-img-shadowed"},r.a.createElement(k.Fade,{bottom:!0,cascade:!0},r.a.createElement(S.a,{icon:F.b,size:"6x"}),r.a.createElement("h1",{style:{fontSize:"2.5em"}},"NEOViz"),r.a.createElement("h1",{style:{fontSize:"2em"}},"Today's Near Earth Objects"),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(k.Bounce,null,r.a.createElement(S.a,{icon:F.a,size:"2x"})))))),r.a.createElement("div",{className:"neo-container"},e.map((function(e){return e.is_potentially_hazardous_asteroid?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:e.name,className:"asteroid-data-container"},r.a.createElement(k.Bounce,{bottom:!0},r.a.createElement(x,B(e))),r.a.createElement(k.Bounce,{bottom:!0},r.a.createElement(A,B(e))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:e.name,className:"asteroid-data-container"},r.a.createElement(k.Fade,{bottom:!0},r.a.createElement(x,B(e))),r.a.createElement(k.Fade,{bottom:!0},r.a.createElement(A,B(e)))))}))))},q=function(){var e=J(new Date),t=Object(n.useState)(v.None()),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){var t,a;(t=e,a=e,m.http("GET","https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(t,"&end_date=").concat(a,"&api_key=").concat("AdlPfqH3XwQd3hJfABoUg8sIhLiUfaF3cf3wzVni")).map((function(e){return e.near_earth_objects[J(new Date)]}))).fork(I,l(L,w(o)))}),[e]),v.isNone(c)?r.a.createElement("div",{className:"home-load"},r.a.createElement("h1",null,"{ Loading... }")):L(c)},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"head"},r.a.createElement("h3",{className:"head-title"},"{ NEOViz }")))},M=(a(35),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(q,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c236301.chunk.js.map