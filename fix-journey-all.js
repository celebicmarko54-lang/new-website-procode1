const fs = require('fs');
const path = require('path');

const translationsDir = path.join(__dirname, 'src', 'translations');

// New milestone translations for each language
const translations = {
  bg: {
    title: "Нашето пътуване",
    subtitle: "От идея до глобална платформа.",
    milestone1: {
      year: "2025",
      title: "Основаване / Старт на разработката",
      description: "AppNode официално започна сериозна работа през октомври 2025 г. (идеите се зараждаха по-рано). Изградихме основния AI двигател, който съчетава програмиране на живо с генериране на потребителски интерфейс чрез AI. Създадохме X акаунт, за да споделяме тийзъри и да изграждаме ранна общност."
    },
    milestone2: {
      year: "2026",
      title: "Бета стартиране и начално финансиране",
      description: "Стартирахме частна/публична бета с мощен AI за уеб приложения. Привлякохме начално финансиране (в диапазона $2-5M), за да разширим екипа и ускорим мобилните функции. Партнирахме с ключови AI доставчици и инструменти за разработка за повишаване на доверието и интереса."
    },
    milestone3: {
      year: "2026",
      title: "10 000 потребители",
      description: "Достигнахме 10 000 потребители само няколко месеца след бета стартирането. Ранните потребители обичат скоростта – превръщат идеи в готови за разгръщане приложения за минути. Започнахме да загатваме за iOS поддръжка и вграден App Store за споделяне/публикуване на приложения."
    },
    milestone4: {
      year: "2026",
      title: "Продължаваме да растем",
      description: "Разширяваме функциите, развиваме общността си и следим последните AI напредъци. Следвайте ни в X за актуализации в реално време за нови версии и предстоящи функции."
    }
  },
  de: {
    title: "Unsere Reise",
    subtitle: "Von einer Idee zur globalen Plattform.",
    milestone1: {
      year: "2025",
      title: "Gründung / Entwicklungsstart",
      description: "AppNode begann im Oktober 2025 offiziell mit der ernsthaften Arbeit (Ideen entstanden schon früher). Wir bauten die zentrale KI-Engine, die Live-Coding mit KI-gesteuerter UI-Generierung verbindet. Wir erstellten einen X-Account, um Teaser zu teilen und eine frühe Community aufzubauen."
    },
    milestone2: {
      year: "2026",
      title: "Beta-Start & Seed-Finanzierung",
      description: "Private/öffentliche Beta mit leistungsstarker KI für Web-Apps gestartet. Seed-Finanzierung ($2-5M Bereich) eingeworben, um das Team zu vergrößern und mobile Funktionen zu beschleunigen. Partnerschaften mit wichtigen KI-Anbietern und Entwicklertools zur Steigerung der Glaubwürdigkeit und Begeisterung."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Nutzer",
      description: "10.000 Nutzer in nur wenigen Monaten nach der Beta erreicht. Early Adopters lieben die Geschwindigkeit – Ideen in Minuten in einsatzbereite Apps verwandeln. Begonnen, iOS-Unterstützung und einen integrierten App Store zum Teilen/Veröffentlichen von Apps anzudeuten."
    },
    milestone4: {
      year: "2026",
      title: "Weiteres Wachstum",
      description: "Funktionen erweitern, unsere Community ausbauen und mit den neuesten KI-Fortschritten Schritt halten. Folgt uns auf X für Echtzeit-Updates zu neuen Versionen und kommenden Funktionen."
    }
  },
  el: {
    title: "Η Πορεία μας",
    subtitle: "Από μια ιδέα σε μια παγκόσμια πλατφόρμα.",
    milestone1: {
      year: "2025",
      title: "Ίδρυση / Έναρξη Ανάπτυξης",
      description: "Η AppNode ξεκίνησε επίσημα σοβαρή εργασία τον Οκτώβριο του 2025 (οι ιδέες ωρίμαζαν νωρίτερα). Χτίσαμε τον βασικό AI μηχανισμό που συνδυάζει ζωντανό προγραμματισμό με δημιουργία UI μέσω AI. Δημιουργήσαμε λογαριασμό X για να μοιραζόμαστε teasers και να χτίζουμε πρώιμη κοινότητα."
    },
    milestone2: {
      year: "2026",
      title: "Κυκλοφορία Beta & Αρχική Χρηματοδότηση",
      description: "Κυκλοφορήσαμε ιδιωτική/δημόσια beta με ισχυρό AI για web εφαρμογές. Εξασφαλίσαμε αρχική χρηματοδότηση (εύρος $2-5M) για να αναπτύξουμε την ομάδα και να επιταχύνουμε τα χαρακτηριστικά για κινητά. Συνεργαστήκαμε με βασικούς παρόχους AI και εργαλεία ανάπτυξης για ενίσχυση της αξιοπιστίας."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Χρήστες",
      description: "Φτάσαμε τους 10.000 χρήστες σε λίγους μόνο μήνες μετά τη beta. Οι πρώτοι χρήστες λατρεύουν την ταχύτητα – μετατρέπουν ιδέες σε έτοιμες προς ανάπτυξη εφαρμογές σε λεπτά. Αρχίσαμε να αποκαλύπτουμε υποστήριξη iOS και ενσωματωμένο App Store για κοινή χρήση/δημοσίευση εφαρμογών."
    },
    milestone4: {
      year: "2026",
      title: "Συνεχίζουμε να Αναπτυσσόμαστε",
      description: "Επεκτείνουμε χαρακτηριστικά, αναπτύσσουμε την κοινότητά μας και παραμένουμε ενημερωμένοι με τις τελευταίες εξελίξεις στο AI. Ακολουθήστε μας στο X για ενημερώσεις σε πραγματικό χρόνο σχετικά με νέες εκδόσεις και επερχόμενα χαρακτηριστικά."
    }
  },
  es: {
    title: "Nuestro Recorrido",
    subtitle: "De una idea a una plataforma global.",
    milestone1: {
      year: "2025",
      title: "Fundación / Inicio del Desarrollo",
      description: "AppNode comenzó oficialmente el trabajo serio en octubre de 2025 (las ideas venían gestándose desde antes). Construimos el motor central de IA que combina programación en vivo con generación de interfaces mediante IA. Creamos una cuenta en X para compartir avances y construir una comunidad temprana."
    },
    milestone2: {
      year: "2026",
      title: "Lanzamiento Beta y Financiación Semilla",
      description: "Lanzamos una beta privada/pública con potente IA para aplicaciones web. Obtuvimos financiación semilla (rango de $2-5M) para hacer crecer el equipo y acelerar las funciones móviles. Nos asociamos con proveedores clave de IA y herramientas de desarrollo para impulsar la credibilidad y el entusiasmo."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Usuarios",
      description: "Alcanzamos 10.000 usuarios en solo unos meses después de la beta. Los primeros usuarios adoran la velocidad: convierten ideas en aplicaciones desplegables en minutos. Empezamos a anticipar soporte para iOS y un App Store integrado para compartir/publicar aplicaciones."
    },
    milestone4: {
      year: "2026",
      title: "Seguimos Creciendo",
      description: "Ampliando funciones, haciendo crecer nuestra comunidad y manteniéndonos al día con los últimos avances en IA. Síguenos en X para actualizaciones en tiempo real sobre nuevos lanzamientos y funciones próximas."
    }
  },
  fr: {
    title: "Notre Parcours",
    subtitle: "D'une idée à une plateforme mondiale.",
    milestone1: {
      year: "2025",
      title: "Fondation / Lancement du Développement",
      description: "AppNode a officiellement commencé le travail sérieux en octobre 2025 (les idées mûrissaient depuis plus longtemps). Nous avons construit le moteur IA central qui combine le codage en direct avec la génération d'interfaces par IA. Nous avons créé un compte X pour partager des aperçus et construire une communauté précoce."
    },
    milestone2: {
      year: "2026",
      title: "Lancement Bêta & Financement d'Amorçage",
      description: "Lancement de la bêta privée/publique avec une IA puissante pour les applications web. Levée de fonds d'amorçage (gamme $2-5M) pour agrandir l'équipe et accélérer les fonctionnalités mobiles. Partenariats avec des fournisseurs IA clés et des outils de développement pour renforcer la crédibilité et l'enthousiasme."
    },
    milestone3: {
      year: "2026",
      title: "10 000 Utilisateurs",
      description: "Atteint 10 000 utilisateurs en quelques mois seulement après la bêta. Les premiers utilisateurs adorent la rapidité — transformer des idées en applications déployables en quelques minutes. Début des annonces sur le support iOS et un App Store intégré pour le partage/la publication d'applications."
    },
    milestone4: {
      year: "2026",
      title: "Poursuite de la Croissance",
      description: "Extension des fonctionnalités, développement de notre communauté et suivi des dernières avancées en IA. Suivez-nous sur X pour des mises à jour en temps réel sur les nouvelles versions et les fonctionnalités à venir."
    }
  },
  hi: {
    title: "हमारा सफ़र",
    subtitle: "एक विचार से एक वैश्विक प्लेटफ़ॉर्म तक।",
    milestone1: {
      year: "2025",
      title: "स्थापना / विकास की शुरुआत",
      description: "AppNode ने अक्टूबर 2025 में आधिकारिक रूप से गंभीर काम शुरू किया (विचार पहले से पक रहे थे)। हमने वह मुख्य AI इंजन बनाया जो लाइव कोडिंग को AI-संचालित UI जेनरेशन के साथ जोड़ता है। टीज़र साझा करने और प्रारंभिक समुदाय बनाने के लिए X अकाउंट बनाया।"
    },
    milestone2: {
      year: "2026",
      title: "बीटा लॉन्च और सीड फ़ंडिंग",
      description: "वेब ऐप्स के लिए शक्तिशाली AI के साथ प्राइवेट/पब्लिक बीटा लॉन्च किया। टीम बढ़ाने और मोबाइल सुविधाओं में तेज़ी लाने के लिए सीड फ़ंडिंग ($2-5M रेंज) जुटाई। विश्वसनीयता और उत्साह बढ़ाने के लिए प्रमुख AI प्रदाताओं और डेव टूल्स के साथ साझेदारी की।"
    },
    milestone3: {
      year: "2026",
      title: "10,000 उपयोगकर्ता",
      description: "बीटा के बाद कुछ ही महीनों में 10,000 उपयोगकर्ताओं तक पहुँचे। शुरुआती अपनाने वालों को गति पसंद है – विचारों को मिनटों में तैनात करने योग्य ऐप्स में बदलना। iOS सपोर्ट और ऐप्स साझा/प्रकाशित करने के लिए बिल्ट-इन App Store की झलक देना शुरू किया।"
    },
    milestone4: {
      year: "2026",
      title: "लगातार बढ़ रहे हैं",
      description: "सुविधाओं का विस्तार, हमारे समुदाय को बढ़ाना, और नवीनतम AI प्रगति से अपडेट रहना। नई रिलीज़ और आने वाली सुविधाओं पर रीयल-टाइम अपडेट के लिए X पर हमें फ़ॉलो करें।"
    }
  },
  hr: {
    title: "Naš put",
    subtitle: "Od ideje do globalne platforme.",
    milestone1: {
      year: "2025",
      title: "Osnivanje / Početak razvoja",
      description: "AppNode je službeno započeo ozbiljan rad u listopadu 2025. (ideje su se rađale i ranije). Izgradili smo temeljni AI motor koji kombinira programiranje uživo s generiranjem korisničkog sučelja pomoću AI-ja. Stvorili smo X račun za dijeljenje najava i izgradnju rane zajednice."
    },
    milestone2: {
      year: "2026",
      title: "Beta lansiranje i početno financiranje",
      description: "Pokrenuli smo privatnu/javnu betu s moćnim AI-jem za web aplikacije. Prikupili smo početno financiranje (raspon $2-5M) za rast tima i ubrzanje mobilnih značajki. Partnerstvo s ključnim AI pružateljima i razvojnim alatima za jačanje vjerodostojnosti i entuzijazma."
    },
    milestone3: {
      year: "2026",
      title: "10.000 korisnika",
      description: "Dosegli smo 10.000 korisnika u samo nekoliko mjeseci nakon bete. Rani korisnici obožavaju brzinu – pretvaranje ideja u aplikacije spremne za pokretanje u minutama. Počeli smo najave podrške za iOS i ugrađenog App Storea za dijeljenje/objavljivanje aplikacija."
    },
    milestone4: {
      year: "2026",
      title: "Nastavljamo rasti",
      description: "Proširujemo značajke, razvijamo našu zajednicu i pratimo najnovija dostignuća u AI-ju. Pratite nas na X za ažuriranja u stvarnom vremenu o novim izdanjima i nadolazećim značajkama."
    }
  },
  id: {
    title: "Perjalanan Kami",
    subtitle: "Dari sebuah ide menjadi platform global.",
    milestone1: {
      year: "2025",
      title: "Didirikan / Awal Pengembangan",
      description: "AppNode secara resmi memulai pekerjaan serius pada Oktober 2025 (ide-ide sudah berkembang sebelumnya). Kami membangun mesin AI inti yang menggabungkan live coding dengan pembuatan UI berbasis AI. Membuat akun X untuk mulai berbagi teaser dan membangun komunitas awal."
    },
    milestone2: {
      year: "2026",
      title: "Peluncuran Beta & Pendanaan Awal",
      description: "Meluncurkan beta privat/publik dengan AI yang powerful untuk aplikasi web. Mengumpulkan pendanaan awal (kisaran $2-5M) untuk memperbesar tim dan mempercepat fitur mobile. Bermitra dengan penyedia AI utama dan alat pengembang untuk meningkatkan kredibilitas dan antusiasme."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Pengguna",
      description: "Mencapai 10.000 pengguna hanya dalam beberapa bulan setelah beta. Pengguna awal menyukai kecepatannya – mengubah ide menjadi aplikasi siap deploy dalam hitungan menit. Mulai mengumumkan dukungan iOS dan App Store bawaan untuk berbagi/mempublikasikan aplikasi."
    },
    milestone4: {
      year: "2026",
      title: "Terus Bertumbuh",
      description: "Memperluas fitur, mengembangkan komunitas kami, dan mengikuti perkembangan AI terbaru. Ikuti kami di X untuk pembaruan real-time tentang rilis baru dan fitur yang akan datang."
    }
  },
  it: {
    title: "Il Nostro Percorso",
    subtitle: "Da un'idea a una piattaforma globale.",
    milestone1: {
      year: "2025",
      title: "Fondazione / Avvio dello Sviluppo",
      description: "AppNode ha ufficialmente iniziato il lavoro serio nell'ottobre 2025 (le idee fermentavano da prima). Abbiamo costruito il motore AI principale che combina la programmazione dal vivo con la generazione di interfacce tramite AI. Creato un account X per condividere anteprime e costruire una comunità iniziale."
    },
    milestone2: {
      year: "2026",
      title: "Lancio Beta & Finanziamento Seed",
      description: "Lanciata la beta privata/pubblica con un potente AI per le app web. Raccolto un finanziamento seed (range $2-5M) per far crescere il team e accelerare le funzionalità mobile. Partnership con i principali fornitori di AI e strumenti di sviluppo per aumentare credibilità ed entusiasmo."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Utenti",
      description: "Raggiunti 10.000 utenti in pochi mesi dopo la beta. I primi utenti adorano la velocità – trasformare idee in app pronte al deploy in pochi minuti. Iniziato ad anticipare il supporto iOS e un App Store integrato per la condivisione/pubblicazione di app."
    },
    milestone4: {
      year: "2026",
      title: "Continuiamo a Crescere",
      description: "Espandiamo le funzionalità, facciamo crescere la nostra comunità e restiamo aggiornati con gli ultimi progressi dell'AI. Seguici su X per aggiornamenti in tempo reale su nuove versioni e funzionalità in arrivo."
    }
  },
  ja: {
    title: "私たちの歩み",
    subtitle: "アイデアからグローバルプラットフォームへ。",
    milestone1: {
      year: "2025",
      title: "設立 / 開発キックオフ",
      description: "AppNodeは2025年10月に本格的な作業を公式に開始しました（アイデアはそれ以前から温めていました）。ライブコーディングとAI駆動のUI生成を組み合わせたコアAIエンジンを構築。ティーザーを共有し、初期コミュニティを構築するためにXアカウントを作成しました。"
    },
    milestone2: {
      year: "2026",
      title: "ベータローンチ＆シード資金調達",
      description: "Webアプリ向けの強力なAIを搭載したプライベート/パブリックベータを開始。チーム拡大とモバイル機能の加速のためにシード資金（$2-5M規模）を調達。信頼性と注目度を高めるため、主要なAIプロバイダーや開発ツールと提携しました。"
    },
    milestone3: {
      year: "2026",
      title: "ユーザー1万人達成",
      description: "ベータ開始からわずか数ヶ月で10,000ユーザーに到達。アーリーアダプターはそのスピードに夢中 – アイデアを数分でデプロイ可能なアプリに変換。iOSサポートとアプリの共有/公開のためのビルトインApp Storeのティーザーを開始しました。"
    },
    milestone4: {
      year: "2026",
      title: "成長を続けて",
      description: "機能を拡張し、コミュニティを成長させ、最新のAIの進歩に対応し続けています。新しいリリースや今後の機能に関するリアルタイムアップデートはXでフォローしてください。"
    }
  },
  ko: {
    title: "우리의 여정",
    subtitle: "아이디어에서 글로벌 플랫폼으로.",
    milestone1: {
      year: "2025",
      title: "설립 / 개발 시작",
      description: "AppNode는 2025년 10월에 공식적으로 본격적인 작업을 시작했습니다 (아이디어는 이전부터 구상 중이었습니다). 라이브 코딩과 AI 기반 UI 생성을 결합한 핵심 AI 엔진을 구축했습니다. 티저를 공유하고 초기 커뮤니티를 구축하기 위해 X 계정을 만들었습니다."
    },
    milestone2: {
      year: "2026",
      title: "베타 출시 & 시드 펀딩",
      description: "웹 앱을 위한 강력한 AI가 탑재된 프라이빗/퍼블릭 베타를 출시했습니다. 팀 확장과 모바일 기능 가속을 위해 시드 펀딩($2-5M 규모)을 유치했습니다. 신뢰성과 관심을 높이기 위해 주요 AI 제공업체 및 개발 도구와 파트너십을 맺었습니다."
    },
    milestone3: {
      year: "2026",
      title: "사용자 10,000명 달성",
      description: "베타 출시 후 불과 몇 달 만에 10,000명의 사용자에 도달했습니다. 얼리 어답터들은 속도에 열광합니다 – 아이디어를 몇 분 만에 배포 가능한 앱으로 전환. iOS 지원과 앱 공유/게시를 위한 내장 App Store를 예고하기 시작했습니다."
    },
    milestone4: {
      year: "2026",
      title: "계속 성장 중",
      description: "기능을 확장하고, 커뮤니티를 성장시키며, 최신 AI 발전에 발맞추고 있습니다. 새로운 릴리스와 다가오는 기능에 대한 실시간 업데이트를 위해 X에서 팔로우하세요."
    }
  },
  pa: {
    title: "ਸਾਡਾ ਸਫ਼ਰ",
    subtitle: "ਇੱਕ ਵਿਚਾਰ ਤੋਂ ਇੱਕ ਗਲੋਬਲ ਪਲੈਟਫ਼ਾਰਮ ਤੱਕ।",
    milestone1: {
      year: "2025",
      title: "ਸਥਾਪਨਾ / ਵਿਕਾਸ ਦੀ ਸ਼ੁਰੂਆਤ",
      description: "AppNode ਨੇ ਅਕਤੂਬਰ 2025 ਵਿੱਚ ਅਧਿਕਾਰਤ ਤੌਰ 'ਤੇ ਗੰਭੀਰ ਕੰਮ ਸ਼ੁਰੂ ਕੀਤਾ (ਵਿਚਾਰ ਪਹਿਲਾਂ ਤੋਂ ਪੱਕ ਰਹੇ ਸਨ)। ਅਸੀਂ ਮੁੱਖ AI ਇੰਜਣ ਬਣਾਇਆ ਜੋ ਲਾਈਵ ਕੋਡਿੰਗ ਨੂੰ AI-ਸੰਚਾਲਿਤ UI ਜੈਨਰੇਸ਼ਨ ਨਾਲ ਜੋੜਦਾ ਹੈ। ਟੀਜ਼ਰ ਸਾਂਝੇ ਕਰਨ ਅਤੇ ਮੁਢਲੀ ਕਮਿਊਨਿਟੀ ਬਣਾਉਣ ਲਈ X ਅਕਾਊਂਟ ਬਣਾਇਆ।"
    },
    milestone2: {
      year: "2026",
      title: "ਬੀਟਾ ਲਾਂਚ ਅਤੇ ਸੀਡ ਫੰਡਿੰਗ",
      description: "ਵੈੱਬ ਐਪਸ ਲਈ ਸ਼ਕਤੀਸ਼ਾਲੀ AI ਨਾਲ ਪ੍ਰਾਈਵੇਟ/ਪਬਲਿਕ ਬੀਟਾ ਲਾਂਚ ਕੀਤਾ। ਟੀਮ ਵਧਾਉਣ ਅਤੇ ਮੋਬਾਈਲ ਫੀਚਰਾਂ ਨੂੰ ਤੇਜ਼ ਕਰਨ ਲਈ ਸੀਡ ਫੰਡਿੰਗ ($2-5M ਰੇਂਜ) ਇਕੱਠੀ ਕੀਤੀ। ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਉਤਸ਼ਾਹ ਵਧਾਉਣ ਲਈ ਮੁੱਖ AI ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਡੈਵ ਟੂਲਜ਼ ਨਾਲ ਭਾਈਵਾਲੀ ਕੀਤੀ।"
    },
    milestone3: {
      year: "2026",
      title: "10,000 ਉਪਭੋਗਤਾ",
      description: "ਬੀਟਾ ਤੋਂ ਬਾਅਦ ਕੁਝ ਹੀ ਮਹੀਨਿਆਂ ਵਿੱਚ 10,000 ਉਪਭੋਗਤਾਵਾਂ ਤੱਕ ਪਹੁੰਚੇ। ਸ਼ੁਰੂਆਤੀ ਅਪਣਾਉਣ ਵਾਲੇ ਤੇਜ਼ੀ ਨੂੰ ਪਸੰਦ ਕਰਦੇ ਹਨ – ਵਿਚਾਰਾਂ ਨੂੰ ਮਿੰਟਾਂ ਵਿੱਚ ਤੈਨਾਤ ਕਰਨ ਯੋਗ ਐਪਸ ਵਿੱਚ ਬਦਲਣਾ। iOS ਸਪੋਰਟ ਅਤੇ ਐਪਸ ਸਾਂਝੇ/ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਬਿਲਟ-ਇਨ App Store ਦੀ ਝਲਕ ਦੇਣੀ ਸ਼ੁਰੂ ਕੀਤੀ।"
    },
    milestone4: {
      year: "2026",
      title: "ਲਗਾਤਾਰ ਵਧ ਰਹੇ ਹਾਂ",
      description: "ਫੀਚਰਾਂ ਦਾ ਵਿਸਤਾਰ ਕਰ ਰਹੇ ਹਾਂ, ਸਾਡੀ ਕਮਿਊਨਿਟੀ ਵਧਾ ਰਹੇ ਹਾਂ, ਅਤੇ ਨਵੀਨਤਮ AI ਤਰੱਕੀਆਂ ਨਾਲ ਅੱਪਡੇਟ ਰਹਿ ਰਹੇ ਹਾਂ। ਨਵੀਆਂ ਰਿਲੀਜ਼ਾਂ ਅਤੇ ਆਉਣ ਵਾਲੇ ਫੀਚਰਾਂ ਬਾਰੇ ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟ ਲਈ X 'ਤੇ ਸਾਨੂੰ ਫ਼ਾਲੋ ਕਰੋ।"
    }
  },
  pt: {
    title: "Nossa Jornada",
    subtitle: "De uma ideia a uma plataforma global.",
    milestone1: {
      year: "2025",
      title: "Fundação / Início do Desenvolvimento",
      description: "A AppNode começou oficialmente o trabalho sério em outubro de 2025 (as ideias estavam amadurecendo antes). Construímos o motor central de IA que combina programação ao vivo com geração de interfaces por IA. Criámos uma conta no X para partilhar teasers e construir uma comunidade inicial."
    },
    milestone2: {
      year: "2026",
      title: "Lançamento Beta & Financiamento Semente",
      description: "Lançámos a beta privada/pública com IA poderosa para aplicações web. Captámos financiamento semente (faixa de $2-5M) para expandir a equipa e acelerar funcionalidades móveis. Parcerias com fornecedores-chave de IA e ferramentas de desenvolvimento para aumentar a credibilidade e o entusiasmo."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Utilizadores",
      description: "Atingimos 10.000 utilizadores em apenas alguns meses após a beta. Os primeiros utilizadores adoram a velocidade – transformar ideias em aplicações prontas a implementar em minutos. Começámos a antecipar o suporte iOS e uma App Store integrada para partilha/publicação de aplicações."
    },
    milestone4: {
      year: "2026",
      title: "Continuamos a Crescer",
      description: "Expandindo funcionalidades, fazendo crescer a nossa comunidade e mantendo-nos atualizados com os últimos avanços em IA. Siga-nos no X para atualizações em tempo real sobre novos lançamentos e funcionalidades futuras."
    }
  },
  ro: {
    title: "Călătoria Noastră",
    subtitle: "De la o idee la o platformă globală.",
    milestone1: {
      year: "2025",
      title: "Fondare / Începutul Dezvoltării",
      description: "AppNode a început oficial munca serioasă în octombrie 2025 (ideile se conturau de mai devreme). Am construit motorul AI de bază care combină programarea live cu generarea de interfețe prin AI. Am creat un cont X pentru a împărtăși teasere și a construi o comunitate timpurie."
    },
    milestone2: {
      year: "2026",
      title: "Lansare Beta & Finanțare Seed",
      description: "Am lansat beta privată/publică cu AI puternic pentru aplicații web. Am obținut finanțare seed (interval $2-5M) pentru a crește echipa și a accelera funcționalitățile mobile. Parteneriat cu furnizori AI cheie și instrumente de dezvoltare pentru a crește credibilitatea și entuziasmul."
    },
    milestone3: {
      year: "2026",
      title: "10.000 de Utilizatori",
      description: "Am ajuns la 10.000 de utilizatori în doar câteva luni după beta. Utilizatorii timpurii adoră viteza – transformă ideile în aplicații gata de implementare în câteva minute. Am început să anunțăm suport iOS și un App Store integrat pentru partajarea/publicarea aplicațiilor."
    },
    milestone4: {
      year: "2026",
      title: "Continuăm să Creștem",
      description: "Extindem funcționalitățile, creștem comunitatea noastră și rămânem la curent cu cele mai recente progrese în AI. Urmăriți-ne pe X pentru actualizări în timp real despre lansări noi și funcționalități viitoare."
    }
  },
  ru: {
    title: "Наш путь",
    subtitle: "От идеи к глобальной платформе.",
    milestone1: {
      year: "2025",
      title: "Основание / Старт разработки",
      description: "AppNode официально начал серьёзную работу в октябре 2025 года (идеи вынашивались раньше). Мы создали основной AI-движок, объединяющий живое программирование с генерацией интерфейсов на базе AI. Создали аккаунт в X для публикации тизеров и формирования раннего сообщества."
    },
    milestone2: {
      year: "2026",
      title: "Запуск бета-версии и начальное финансирование",
      description: "Запустили приватную/публичную бета-версию с мощным AI для веб-приложений. Привлекли начальное финансирование (в диапазоне $2-5M) для расширения команды и ускорения мобильных функций. Установили партнёрства с ключевыми AI-поставщиками и инструментами разработки для повышения доверия и интереса."
    },
    milestone3: {
      year: "2026",
      title: "10 000 пользователей",
      description: "Достигли 10 000 пользователей всего за несколько месяцев после бета-запуска. Ранние пользователи в восторге от скорости — превращение идей в готовые к развёртыванию приложения за считанные минуты. Начали анонсировать поддержку iOS и встроенный App Store для обмена/публикации приложений."
    },
    milestone4: {
      year: "2026",
      title: "Продолжаем расти",
      description: "Расширяем функциональность, развиваем наше сообщество и следим за последними достижениями в области AI. Подписывайтесь на нас в X для получения обновлений в реальном времени о новых выпусках и предстоящих функциях."
    }
  },
  sr: {
    title: "Наш пут",
    subtitle: "Од идеје до глобалне платформе.",
    milestone1: {
      year: "2025",
      title: "Оснивање / Почетак развоја",
      description: "AppNode је званично започео озбиљан рад у октобру 2025. (идеје су сазревале раније). Изградили смо основни AI мотор који комбинује програмирање уживо са генерисањем корисничког интерфејса помоћу AI-ја. Направили смо X налог за дељење најава и изградњу ране заједнице."
    },
    milestone2: {
      year: "2026",
      title: "Бета лансирање и почетно финансирање",
      description: "Покренули смо приватну/јавну бету са моћним AI-јем за веб апликације. Прикупили смо почетно финансирање (опсег $2-5M) за раст тима и убрзавање мобилних функција. Партнерство са кључним AI провајдерима и развојним алатима за повећање кредибилитета и ентузијазма."
    },
    milestone3: {
      year: "2026",
      title: "10.000 корисника",
      description: "Достигли смо 10.000 корисника за само неколико месеци након бете. Рани корисници обожавају брзину – претварање идеја у апликације спремне за покретање за неколико минута. Почели смо да најављујемо подршку за iOS и уграђени App Store за дељење/објављивање апликација."
    },
    milestone4: {
      year: "2026",
      title: "Настављамо да растемо",
      description: "Проширујемо функције, развијамо нашу заједницу и пратимо најновија достигнућа у AI-ју. Пратите нас на X за ажурирања у реалном времену о новим издањима и предстојећим функцијама."
    }
  },
  sw: {
    title: "Safari Yetu",
    subtitle: "Kutoka wazo hadi jukwaa la kimataifa.",
    milestone1: {
      year: "2025",
      title: "Kuanzishwa / Kuanza Maendeleo",
      description: "AppNode ilianza rasmi kazi kubwa mnamo Oktoba 2025 (mawazo yalikuwa yakiiva mapema zaidi). Tulijenga injini kuu ya AI inayounganisha uandishi wa msimbo moja kwa moja na utengenezaji wa UI unaodhibitiwa na AI. Tuliunda akaunti ya X kuanza kushiriki matangazo na kujenga jamii ya mapema."
    },
    milestone2: {
      year: "2026",
      title: "Uzinduzi wa Beta na Ufadhili wa Awali",
      description: "Tulizindua beta ya faragha/umma yenye AI yenye nguvu kwa programu za wavuti. Tulikusanya ufadhili wa awali (kiwango cha $2-5M) kukuza timu na kuharakisha vipengele vya simu. Tulishirikiana na watoa huduma wakuu wa AI na zana za maendeleo kuongeza uaminifu na msisimko."
    },
    milestone3: {
      year: "2026",
      title: "Watumiaji 10,000",
      description: "Tulifikia watumiaji 10,000 kwa miezi michache tu baada ya beta. Watumiaji wa mapema wanapenda kasi – kubadilisha mawazo kuwa programu zinazoweza kutumika kwa dakika chache. Tulianza kutangaza msaada wa iOS na App Store iliyojengwa ndani kwa kushiriki/kuchapisha programu."
    },
    milestone4: {
      year: "2026",
      title: "Tunaendelea Kukua",
      description: "Tunapanua vipengele, tunakuza jamii yetu, na tunabaki na habari za hivi karibuni za maendeleo ya AI. Tufuate kwenye X kwa masasisho ya wakati halisi kuhusu matoleo mapya na vipengele vijavyo."
    }
  },
  tr: {
    title: "Yolculuğumuz",
    subtitle: "Bir fikirden küresel bir platforma.",
    milestone1: {
      year: "2025",
      title: "Kuruluş / Geliştirme Başlangıcı",
      description: "AppNode, Ekim 2025'te resmi olarak ciddi çalışmalara başladı (fikirler daha öncesinden olgunlaşıyordu). Canlı kodlamayı AI destekli UI oluşturma ile birleştiren çekirdek AI motorunu inşa ettik. Tanıtımları paylaşmak ve erken bir topluluk oluşturmak için X hesabı oluşturduk."
    },
    milestone2: {
      year: "2026",
      title: "Beta Lansmanı & Tohum Yatırımı",
      description: "Web uygulamaları için güçlü AI ile özel/genel beta başlatıldı. Ekibi büyütmek ve mobil özellikleri hızlandırmak için tohum yatırımı ($2-5M aralığında) toplandı. Güvenilirliği ve heyecanı artırmak için önemli AI sağlayıcıları ve geliştirici araçlarıyla ortaklık kuruldu."
    },
    milestone3: {
      year: "2026",
      title: "10.000 Kullanıcı",
      description: "Beta'dan sadece birkaç ay sonra 10.000 kullanıcıya ulaşıldı. Erken benimseyenler hızı seviyor – fikirleri dakikalar içinde dağıtılabilir uygulamalara dönüştürme. iOS desteği ve uygulama paylaşma/yayınlama için yerleşik App Store'un ipuçları verilmeye başlandı."
    },
    milestone4: {
      year: "2026",
      title: "Büyümeye Devam Ediyoruz",
      description: "Özellikleri genişletiyoruz, topluluğumuzu büyütüyoruz ve en son AI gelişmelerini takip ediyoruz. Yeni sürümler ve yaklaşan özellikler hakkında gerçek zamanlı güncellemeler için X'te bizi takip edin."
    }
  },
  ur: {
    title: "ہمارا سفر",
    subtitle: "ایک خیال سے ایک عالمی پلیٹ فارم تک۔",
    milestone1: {
      year: "2025",
      title: "بنیاد / ترقی کا آغاز",
      description: "AppNode نے اکتوبر 2025 میں باضابطہ طور پر سنجیدہ کام شروع کیا (خیالات پہلے سے پک رہے تھے)۔ ہم نے بنیادی AI انجن بنایا جو لائیو کوڈنگ کو AI سے چلنے والی UI جنریشن کے ساتھ جوڑتا ہے۔ ٹیزر شیئر کرنے اور ابتدائی کمیونٹی بنانے کے لیے X اکاؤنٹ بنایا۔"
    },
    milestone2: {
      year: "2026",
      title: "بیٹا لانچ اور سیڈ فنڈنگ",
      description: "ویب ایپس کے لیے طاقتور AI کے ساتھ پرائیویٹ/پبلک بیٹا لانچ کیا۔ ٹیم بڑھانے اور موبائل فیچرز میں تیزی لانے کے لیے سیڈ فنڈنگ ($2-5M رینج) اکٹھی کی۔ اعتبار اور جوش بڑھانے کے لیے اہم AI فراہم کنندگان اور ڈیو ٹولز کے ساتھ شراکت داری کی۔"
    },
    milestone3: {
      year: "2026",
      title: "10,000 صارفین",
      description: "بیٹا کے بعد صرف چند مہینوں میں 10,000 صارفین تک پہنچ گئے۔ ابتدائی صارفین رفتار کو پسند کرتے ہیں – خیالات کو منٹوں میں قابل تعیناتی ایپس میں تبدیل کرنا۔ iOS سپورٹ اور ایپس شیئر/شائع کرنے کے لیے بلٹ ان App Store کی جھلکیاں دکھانا شروع کیا۔"
    },
    milestone4: {
      year: "2026",
      title: "مسلسل بڑھ رہے ہیں",
      description: "فیچرز کی توسیع، ہماری کمیونٹی کو بڑھانا، اور تازہ ترین AI پیشرفت کے ساتھ اپ ڈیٹ رہنا۔ نئی ریلیزز اور آنے والے فیچرز کے بارے میں ریئل ٹائم اپ ڈیٹس کے لیے X پر ہمیں فالو کریں۔"
    }
  }
};

const langCodes = Object.keys(translations);

let updated = 0;
let errors = [];

for (const lang of langCodes) {
  const filePath = path.join(translationsDir, `${lang}.json`);
  
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    
    if (!data.aboutPage) {
      errors.push(`${lang}: No aboutPage section found`);
      continue;
    }
    
    if (!data.aboutPage.journey) {
      errors.push(`${lang}: No aboutPage.journey section found`);
      continue;
    }
    
    const t = translations[lang];
    
    // Update title and subtitle
    data.aboutPage.journey.title = t.title;
    data.aboutPage.journey.subtitle = t.subtitle;
    
    // Remove old milestones (could be 1-6 or more)
    const oldKeys = Object.keys(data.aboutPage.journey).filter(k => k.startsWith('milestone'));
    for (const key of oldKeys) {
      delete data.aboutPage.journey[key];
    }
    
    // Set new milestones
    data.aboutPage.journey.milestone1 = t.milestone1;
    data.aboutPage.journey.milestone2 = t.milestone2;
    data.aboutPage.journey.milestone3 = t.milestone3;
    data.aboutPage.journey.milestone4 = t.milestone4;
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    updated++;
    console.log(`✓ ${lang}: Updated journey milestones`);
    
  } catch (e) {
    errors.push(`${lang}: ${e.message}`);
  }
}

console.log(`\nDone: ${updated}/${langCodes.length} languages updated.`);
if (errors.length > 0) {
  console.log('\nErrors:');
  errors.forEach(e => console.log(`  ✗ ${e}`));
}

// Verification: read all files back and check milestones
console.log('\n--- Verification ---');
for (const lang of langCodes) {
  const filePath = path.join(translationsDir, `${lang}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const j = data.aboutPage.journey;
    const has4 = j.milestone1 && j.milestone2 && j.milestone3 && j.milestone4;
    const noOld = !j.milestone5 && !j.milestone6;
    const correctYears = j.milestone1?.year === '2025' && j.milestone2?.year === '2026' && j.milestone3?.year === '2026' && j.milestone4?.year === '2026';
    const notEnglish = lang === 'en' || (j.milestone1?.title !== 'Founded / Development Kickoff');
    
    if (has4 && noOld && correctYears && notEnglish) {
      console.log(`✓ ${lang}: OK (4 milestones, correct years, translated)`);
    } else {
      const issues = [];
      if (!has4) issues.push('missing milestones');
      if (!noOld) issues.push('still has old milestone5/6');
      if (!correctYears) issues.push('wrong years');
      if (!notEnglish) issues.push('still English');
      console.log(`✗ ${lang}: ISSUES: ${issues.join(', ')}`);
    }
  } catch (e) {
    console.log(`✗ ${lang}: Could not verify: ${e.message}`);
  }
}
