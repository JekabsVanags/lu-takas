import{n as b,s as p}from"./scheduler.DWY5Y_d_.js";const e=[];function g(n,l=b){let i;const o=new Set;function r(t){if(p(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=l(r,f)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_cdzinp)==null?void 0:u.base)??"";var a;const z=((a=globalThis.__sveltekit_cdzinp)==null?void 0:a.assets)??d;export{z as a,d as b,g as w};
