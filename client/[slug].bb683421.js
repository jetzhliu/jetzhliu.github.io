import{S as t,i as s,s as o,a,e,t as n,d as r,c as i,b as p,f as c,g as l,h,o as u,n as f}from"./chunk.d7b899e1.js";import{o as m}from"./chunk.54ef5736.js";function d(t){var s,o,d,g,j,v,x=t.post.title,b=t.post.html;return document.title=s=t.post.title+" | Blog | "+m,{c(){o=a(),d=e("h1"),g=n(x),j=a(),v=e("div"),this.h()},l(t){o=r(t,"\n\n"),d=i(t,"H1",{},!1);var s=p(d);g=r(s,x),s.forEach(c),j=r(t,"\n\n"),v=i(t,"DIV",{class:!0},!1),p(v).forEach(c),this.h()},h(){v.className="content svelte-gnxal1"},m(t,s){l(t,o,s),l(t,d,s),h(d,g),l(t,j,s),l(t,v,s),v.innerHTML=b},p(t,o){(t.post||t.owner)&&s!==(s=o.post.title+" | Blog | "+m)&&(document.title=s),t.post&&x!==(x=o.post.title)&&u(g,x),t.post&&b!==(b=o.post.html)&&(v.innerHTML=b)},i:f,o:f,d(t){t&&(c(o),c(d),c(j),c(v))}}}async function g({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function j(t,s,o){let{post:a}=s;return t.$set=t=>{"post"in t&&o("post",a=t.post)},{post:a}}export default class extends t{constructor(t){super(),s(this,t,j,d,o,["post"])}}export{g as preload};
//# sourceMappingURL=[slug].bb683421.js.map