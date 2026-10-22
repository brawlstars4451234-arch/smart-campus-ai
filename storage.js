(function(){
const defaults=window.SC_DEFAULTS;
function load(key,fallback){try{const x=localStorage.getItem("sc_"+key);return x===null?structuredClone(fallback):JSON.parse(x)}catch(e){return structuredClone(fallback)}}
function save(key,value){localStorage.setItem("sc_"+key,JSON.stringify(value));}
function get(key){return load(key,defaults[key]||[])}
function set(key,value){save(key,value)}
function reset(){["rooms","devices","incidents","energy"].forEach(k=>save(k,defaults[k]));}
function getUser(){try{return JSON.parse(localStorage.getItem("sc_user")||'{"name":"Александр Иванов","role":"Operator"}')}catch(e){return {name:"Александр Иванов",role:"Operator"}}}
window.SCStore={get,set,reset,getUser};
})();