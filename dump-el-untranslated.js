const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/translations/en.json','utf8'));
const el = JSON.parse(fs.readFileSync('src/translations/el.json','utf8'));

function walk(obj, prefix, cb) {
  for (const [k,v] of Object.entries(obj)) {
    const p = prefix ? prefix+'.'+k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      walk(v,p,cb);
    } else if (Array.isArray(v)) {
      v.forEach((item,i) => {
        if (typeof item === 'object' && item !== null) walk(item, p+'['+i+']', cb);
        else cb(p+'['+i+']', item);
      });
    } else {
      cb(p,v);
    }
  }
}

function get(obj, path) {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let c = obj;
  for (const p of parts) {
    if (c === undefined) return undefined;
    c = c[isNaN(p) ? p : Number(p)];
  }
  return c;
}

const untranslated = [];
walk(en, '', (path, val) => {
  const v = get(el, path);
  if (v !== undefined && v === val && typeof val === 'string') {
    untranslated.push(path + ' ||| ' + val);
  }
});

fs.writeFileSync('/tmp/el-untranslated2.txt', untranslated.join('\n'), 'utf8');
console.log('Untranslated:', untranslated.length);
