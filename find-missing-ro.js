const en = JSON.parse(require('fs').readFileSync('src/translations/en.json','utf8'));
const ro = JSON.parse(require('fs').readFileSync('src/translations/ro.json','utf8'));
function fl(o,p){p=p||'';let r={};for(let k of Object.keys(o)){let np=p?p+'.'+k:k;if(typeof o[k]==='object'&&o[k]!==null&&!Array.isArray(o[k]))Object.assign(r,fl(o[k],np));else if(Array.isArray(o[k]))o[k].forEach(function(v,i){if(typeof v==='object'&&v!==null)Object.assign(r,fl(v,np+'['+i+']'));else r[np+'['+i+']']=v});else r[np]=o[k]}return r}
const fe=fl(en);
for(const k of Object.keys(fe)){
  const parts=k.replace(/\[(\d+)\]/g,'.$1').split('.');
  let cur=ro;let found=true;
  for(const p of parts){const kk=isNaN(p)?p:Number(p);if(cur===undefined||cur===null||cur[kk]===undefined){found=false;break}cur=cur[kk]}
  if(!found)console.log(k+' => '+fe[k]);
}
