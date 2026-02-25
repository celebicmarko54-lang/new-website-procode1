import en from './en.json';
import fr from './fr.json';
import de from './de.json';
import ja from './ja.json';
import pt from './pt.json';
import ru from './ru.json';
import it from './it.json';
import es from './es.json';
import id from './id.json';
import ar from './ar.json';
import tr from './tr.json';
import ko from './ko.json';
import sw from './sw.json';
import ta from './ta.json';
import ur from './ur.json';
import pa from './pa.json';
import hi from './hi.json';
import hr from './hr.json';
import bg from './bg.json';
import ro from './ro.json';
import el from './el.json';
import sr from './sr.json';

// Translation registry - last updated 2025-06-26
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
  ar,
  tr,
  ko,
  sw,
  ta,
  ur,
  pa,
  hi,
  hr,
  bg,
  ro,
  el,
  sr,
};

export default translations;
