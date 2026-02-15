import en from './en.json';
import fr from './fr.json';
import de from './de.json';
import ja from './ja.json';
import pt from './pt.json';
import ru from './ru.json';
import it from './it.json';
import es from './es.json';
import id from './id.json';

// Force re-import of JSON modules
export type TranslationKeys = typeof en;

export const translations: Record<string, TranslationKeys> = {
  en,
  fr,
  de,
  ja,
  pt,
  ru,
  it,
  es,
  id,
};

export default translations;
