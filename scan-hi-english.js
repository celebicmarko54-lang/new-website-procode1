const hi = require('./src/translations/hi.json');
const skip = /^(AppNode|AI |CDN|CTO|http|@|Facebook|Instagram|TikTok|X \/ Twitter|GitHub|Discord|LinkedIn|YouTube|Reddit|REST|OAuth|JWT|WebSocket|GraphQL|CSS|Tailwind|API|Stripe|Acme|GDPR|CCPA|SOC|ISO|HIPAA|AWS|Vercel|Netlify|Docker|Kubernetes|PostgreSQL|MongoDB|Redis|Firebase|Supabase|Next\.js|React|Vue|Angular|Svelte|Node\.js|Python|TypeScript|JavaScript|security-researcher)/;

function findEnglish(obj, path) {
  path = path || '';
  for (const [k,v] of Object.entries(obj)) {
    const p = path ? path+'.'+k : k;
    if (typeof v === 'string' && v.length > 3) {
      const ascii = v.replace(/[^a-zA-Z]/g, '').length;
      const total = v.replace(/\s/g, '').length;
      if (total > 0 && ascii/total > 0.7 && !skip.test(v)) {
        console.log(p + ' => ' + v.substring(0, 100));
      }
    } else if (Array.isArray(v)) {
      v.forEach(function(item, i) {
        if (typeof item === 'string' && item.length > 3) {
          const ascii = item.replace(/[^a-zA-Z]/g, '').length;
          const total = item.replace(/\s/g, '').length;
          if (total > 0 && ascii/total > 0.7 && !skip.test(item)) {
            console.log(p+'['+i+'] => ' + item.substring(0, 100));
          }
        } else if (typeof item === 'object' && item !== null) {
          findEnglish(item, p+'['+i+']');
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      findEnglish(v, p);
    }
  }
}
findEnglish(hi);
