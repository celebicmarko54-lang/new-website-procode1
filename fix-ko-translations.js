const fs = require('fs');
const path = require('path');

const koPath = path.join(__dirname, 'src/translations/ko.json');
var ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));

// footer.documentation
ko.footer.documentation = "문서";

// enterprisePage.trustedByText
ko.enterprisePage.trustedByText = "전 세계 선도적인 팀과 기업이 신뢰합니다";

// supportPage.articles
ko.supportPage.articles = "개 문서";

// dashboardPage
ko.dashboardPage.welcome = "환영합니다";
ko.dashboardPage.loggedInAs = "로그인한 사용자:";
ko.dashboardPage.comingSoon = "곧 출시";
ko.dashboardPage.buildingMagic = "당신을 위해 마법 같은 것을 만들고 있습니다";
ko.dashboardPage.signOut = "로그아웃";

// settingsPage
ko.settingsPage.generalSettings = "일반 설정";
ko.settingsPage.timezone = "시간대";
ko.settingsPage.darkMode = "다크 모드";
ko.settingsPage.darkModeDesc = "앱 전체에 다크 테마 사용";
ko.settingsPage.notificationPreferences = "알림 설정";
ko.settingsPage.emailNotifications = "이메일 알림";
ko.settingsPage.emailNotificationsDesc = "이메일로 프로젝트 업데이트 받기";
ko.settingsPage.pushNotifications = "푸시 알림";
ko.settingsPage.pushNotificationsDesc = "브라우저에서 푸시 알림 받기";
ko.settingsPage.marketingEmails = "마케팅 이메일";
ko.settingsPage.marketingEmailsDesc = "팁, 업데이트 및 특가 정보 받기";
ko.settingsPage.securitySettings = "보안 설정";
ko.settingsPage.passwordLastChanged = "30일 전에 마지막으로 변경됨";
ko.settingsPage.changePassword = "비밀번호 변경";
ko.settingsPage.twoFactorAuth = "2단계 인증";
ko.settingsPage.twoFactorAuthDesc = "추가 보안 계층 추가";
ko.settingsPage.enable2FA = "2단계 인증 활성화";
ko.settingsPage.activeSessions = "활성 세션";
ko.settingsPage.activeSessionsDesc = "활성 세션 관리";
ko.settingsPage.viewSessions = "세션 보기";
ko.settingsPage.dangerZone = "위험 구역";
ko.settingsPage.deleteAccount = "계정 삭제";
ko.settingsPage.deleteAccountDesc = "계정과 모든 데이터를 영구적으로 삭제";
ko.settingsPage.deleteAccountConfirm = "계정을 삭제하시겠습니까?";
ko.settingsPage.deleteAccountWarning = "이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.";

// profilePage
ko.profilePage.editProfile = "프로필 수정";
ko.profilePage.fullName = "이름";
ko.profilePage.email = "이메일";
ko.profilePage.role = "역할";
ko.profilePage.companyOptional = "회사 (선택 사항)";
ko.profilePage.companyPlaceholder = "회사 이름";
ko.profilePage.avatarColor = "아바타 색상";
ko.profilePage.memberSince = "가입일";
ko.profilePage.notSpecified = "지정되지 않음";
ko.profilePage.saveChanges = "변경 사항 저장";
ko.profilePage.saving = "저장 중...";

// billingPage
ko.billingPage.currentPlan = "현재 플랜";
ko.billingPage.upgradeToUnlock = "업그레이드하여 더 많은 기능 잠금 해제";
ko.billingPage.planRenews = "플랜 갱신일: 2025년 12월 1일";
ko.billingPage.freePlan = "무료 플랜";
ko.billingPage.active = "활성";
ko.billingPage.availablePlans = "이용 가능한 플랜";
ko.billingPage.mostPopular = "가장 인기";
ko.billingPage.currentPlanLabel = "현재 플랜";
ko.billingPage.upgrade = "업그레이드";
ko.billingPage.downgrade = "다운그레이드";
ko.billingPage.paymentMethod = "결제 수단";
ko.billingPage.noPaymentRequired = "무료 플랜에는 결제 수단이 필요하지 않습니다.";
ko.billingPage.edit = "수정";
ko.billingPage.billingHistory = "결제 내역";
ko.billingPage.upgradeToTitle = "업그레이드:";
ko.billingPage.upgradeAccessMessage = "모든 기능에 즉시 접근할 수 있습니다.";
ko.billingPage.featuresImmediately = "기능을 즉시 사용 가능합니다.";
ko.billingPage.confirmUpgrade = "업그레이드 확인";

// teamsPage
ko.teamsPage.badge = "팀 협업";
ko.teamsPage.titleStart = "함께 빌드하세요";
ko.teamsPage.titleHighlight = "팀";
ko.teamsPage.subtitle = "AppNode의 힘을 전체 팀에 가져오세요. 실시간으로 협업하고, 프로젝트를 공유하고, 함께 더 빠르게 배포하세요.";
ko.teamsPage.startTeamTrial = "팀 체험 시작";
ko.teamsPage.enterpriseOptions = "기업 옵션";
ko.teamsPage.teamWorkspace = "팀 워크스페이스";
ko.teamsPage.online = "온라인";
ko.teamsPage.teamProjects = "팀 프로젝트";
ko.teamsPage.activity = "활동";
ko.teamsPage.teamFeatures = "팀 기능";
ko.teamsPage.startFreeTeamTrial = "무료 팀 체험 시작";
ko.teamsPage.pricing.title = "팀 가격";
ko.teamsPage.pricing.subtitle = "모든 규모의 팀을 위한 간단하고 투명한 가격.";
ko.teamsPage.pricing.billedAnnually = "연간 결제";
ko.teamsPage.cta.title = "함께 빌드할 준비가 되셨나요?";
ko.teamsPage.cta.subtitle = "팀을 AppNode에서 시작하고 그 어느 때보다 빠르게 배포하세요.";

// cookiesPage
ko.cookiesPage.badge = "개인정보";
ko.cookiesPage.subtitle = "쿠키 환경설정을 관리하세요. 당사는 브라우징 경험을 향상시키고 맞춤형 콘텐츠를 제공하며 트래픽을 분석하기 위해 쿠키를 사용합니다.";
ko.cookiesPage.required = "필수";
ko.cookiesPage.saveSuccess = "쿠키 환경설정이 성공적으로 저장되었습니다!";
ko.cookiesPage.savePreferences = "환경설정 저장";
ko.cookiesPage.acceptAll = "모두 수락";
ko.cookiesPage.aboutTitle = "쿠키에 대하여";
ko.cookiesPage.aboutDescription = "쿠키는 웹사이트를 방문할 때 기기에 저장되는 작은 텍스트 파일입니다. 환경설정을 기억하고 사이트 사용 방식을 이해하여 더 나은 경험을 제공하는 데 도움이 됩니다.";
ko.cookiesPage.moreInfo = "쿠키 및 개인 데이터 사용에 대한 자세한 내용은 다음을 참조하세요:";
ko.cookiesPage.essential.title = "필수 쿠키";
ko.cookiesPage.essential.description = "이 쿠키는 웹사이트가 올바르게 작동하는 데 필요합니다. 보안, 네트워크 관리, 접근성 등 핵심 기능을 활성화합니다. 이 쿠키를 비활성화할 수 없습니다.";
ko.cookiesPage.analytics.title = "분석 쿠키";
ko.cookiesPage.analytics.description = "이 쿠키는 정보를 익명으로 수집하고 보고하여 방문자가 웹사이트와 어떻게 상호 작용하는지 이해하는 데 도움이 됩니다. 이를 통해 서비스를 개선합니다.";
ko.cookiesPage.marketing.title = "마케팅 쿠키";
ko.cookiesPage.marketing.description = "이 쿠키는 웹사이트 간 방문자를 추적하는 데 사용됩니다. 개별 사용자에게 관련성 있고 매력적인 광고를 표시하는 데 사용됩니다.";
ko.cookiesPage.personalization.title = "개인화 쿠키";
ko.cookiesPage.personalization.description = "이 쿠키를 통해 환경설정을 기억하고 향상된 맞춤형 기능을 제공할 수 있습니다. 당사 또는 타사 제공업체가 설정할 수 있습니다.";

// statusPage
ko.statusPage.subtitle = "AppNode 서비스의 실시간 상태 및 가동 시간 정보";
ko.statusPage.allOperational = "모든 시스템 정상 운영 중";
ko.statusPage.uptimeTitle = "가동 시간 - 최근 7일";
ko.statusPage.servicesTitle = "서비스";
ko.statusPage.incidentsTitle = "최근 인시던트";
ko.statusPage.subscribeTitle = "상태 업데이트 받기";
ko.statusPage.subscribeSubtitle = "시스템 상태 및 인시던트에 대한 알림을 받으려면 구독하세요";
ko.statusPage.subscribeButton = "구독";

// changelogPage
ko.changelogPage.badge = "업데이트";
ko.changelogPage.title = "변경 로그";
ko.changelogPage.subtitle = "AppNode의 모든 최신 업데이트, 개선 사항 및 수정 사항";
ko.changelogPage.stayUpToDate = "최신 정보 확인";
ko.changelogPage.getNotified = "새로운 기능 출시 시 알림 받기";
ko.changelogPage.subscribeButton = "구독";
ko.changelogPage.viewOlder = "이전 릴리스 보기";
ko.changelogPage.changeTypes.new = "신규";
ko.changelogPage.changeTypes.improved = "개선";
ko.changelogPage.changeTypes.fixed = "수정";

// changelog releases
ko.changelogPage.releases.v250.date = "2025년 11월 28일";
ko.changelogPage.releases.v250.title = "스마트 스타일 및 자동 레이아웃";
ko.changelogPage.releases.v250.description = "애플리케이션에 자동으로 아름답고 일관된 디자인을 만드는 AI 기반 스타일링을 도입합니다.";
ko.changelogPage.releases.v250.changes = [
  "스마트 스타일: AI가 앱 전체에 일관된 스타일을 자동으로 적용",
  "자동 레이아웃: 콘텐츠에 맞게 조정되는 지능형 반응형 레이아웃",
  "테마 프리셋: 20개 이상의 전문 디자인 테마 중 선택",
  "최적화된 프롬프트로 더 빠른 코드 생성",
  "생성된 코드의 TypeScript 지원 개선",
  "모바일 기기 레이아웃 문제 수정"
];

ko.changelogPage.releases.v242.date = "2025년 11월 15일";
ko.changelogPage.releases.v242.title = "성능 개선";
ko.changelogPage.releases.v242.description = "주요 성능 최적화 및 버그 수정.";
ko.changelogPage.releases.v242.changes = [
  "프로젝트 로딩 시간 50% 단축",
  "에디터 메모리 사용량 감소",
  "대규모 프로젝트의 코드 내보내기 실패 수정",
  "타사 제공업체 인증 문제 수정"
];

ko.changelogPage.releases.v240.date = "2025년 11월 1일";
ko.changelogPage.releases.v240.title = "팀 협업";
ko.changelogPage.releases.v240.description = "팀과 실시간으로 협업하세요.";
ko.changelogPage.releases.v240.changes = [
  "실시간 협업: 여러 사용자가 동시에 편집 가능",
  "역할 기반 권한이 있는 팀 워크스페이스",
  "컴포넌트에 대한 댓글 및 피드백",
  "복원 기능이 있는 버전 기록",
  "동시 편집을 위한 충돌 해결 개선"
];

ko.changelogPage.releases.v230.date = "2025년 10월 15일";
ko.changelogPage.releases.v230.title = "데이터베이스 통합";
ko.changelogPage.releases.v230.description = "앱을 데이터베이스에 쉽게 연결하세요.";
ko.changelogPage.releases.v230.changes = [
  "PostgreSQL 데이터베이스를 위한 Supabase 통합",
  "시각적 데이터베이스 스키마 디자이너",
  "자동 생성 CRUD 작업",
  "실시간 데이터 구독",
  "데이터베이스 연결 처리 개선",
  "프로덕션 빌드의 데이터 가져오기 문제 수정"
];

ko.changelogPage.releases.v220.date = "2025년 9월 28일";
ko.changelogPage.releases.v220.title = "컴포넌트 라이브러리";
ko.changelogPage.releases.v220.description = "100개 이상의 새로운 컴포넌트로 확장된 컴포넌트 라이브러리.";
ko.changelogPage.releases.v220.changes = [
  "100개 이상의 새로운 사전 구축 컴포넌트",
  "차트 및 데이터 시각화 컴포넌트",
  "유효성 검증이 포함된 폼 빌더",
  "애니메이션 프리셋 라이브러리",
  "컴포넌트 검색 및 필터링"
];

ko.changelogPage.releases.v210.date = "2025년 9월 10일";
ko.changelogPage.releases.v210.title = "간편한 인증";
ko.changelogPage.releases.v210.description = "몇 초 만에 앱에 사용자 인증을 추가하세요.";
ko.changelogPage.releases.v210.changes = [
  "원클릭 인증 설정",
  "소셜 로그인 제공업체 (Google, GitHub 등)",
  "사용자 관리 대시보드",
  "비밀번호 재설정 흐름",
  "인증 토큰 보안 개선"
];

// privacyPage
ko.privacyPage.lastUpdated = "최종 업데이트: 2025년 12월 1일";
ko.privacyPage.contactTitle = "10. 문의하기";
ko.privacyPage.contactDescription = "이 개인정보 보호정책 또는 당사의 개인정보 보호 관행에 대해 질문이 있으신 경우 다음으로 연락해 주세요:";
ko.privacyPage.intro.p1 = "AppNode Inc. (\"AppNode\", \"당사\", \"저희\")는 귀하의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 귀하가 당사의 웹사이트, 모바일 애플리케이션, API, AI 기반 코드 생성 도구, 플랫폼 및 관련 서비스(통칭 \"서비스\")에 접근하거나 사용할 때 당사가 귀하의 개인 정보를 어떻게 수집, 사용, 공개, 저장 및 보호하는지 설명합니다.";
ko.privacyPage.intro.p2 = "서비스를 사용함으로써 귀하는 이 개인정보 보호정책에 설명된 관행에 동의합니다. 동의하지 않는 경우 서비스를 사용하지 마십시오.";
ko.privacyPage.intro.p3 = "당사는 수시로 이 개인정보 보호정책을 업데이트할 수 있습니다. 중요한 변경 사항이 있을 경우 여기에 업데이트된 정책을 게시하고 \"최종 업데이트\" 날짜를 업데이트하며, 변경이 중대한 경우 이메일로 알려드립니다. 변경 후 계속 사용하시면 동의한 것으로 간주됩니다.";

ko.privacyPage.section1.title = "1. 수집하는 정보";
ko.privacyPage.section1.s1Title = "1.1 직접 제공하는 정보";
ko.privacyPage.section1.s1Items = [
  "계정 데이터: 이름, 이메일, 비밀번호, 사용자명",
  "프로필 데이터: 아바타, 소개, 환경설정, 설정",
  "결제 데이터: 청구 정보 (Stripe 등 타사 제공업체를 통해 안전하게 처리 – 전체 카드 번호는 저장하지 않음)",
  "사용자 콘텐츠: 프롬프트, 입력, 코드 스니펫, 업로드된 파일, 저장 또는 공유한 생성 결과물",
  "커뮤니케이션: 지원 티켓, 이메일, 피드백, 채팅 메시지"
];
ko.privacyPage.section1.s2Title = "1.2 자동 수집 정보";
ko.privacyPage.section1.s2Items = [
  "기기 및 기술 데이터: IP 주소, 브라우저 종류/버전, 운영체제, 기기 ID, 화면 해상도",
  "사용 데이터: 방문 페이지, 사용 기능, 체류 시간, 제출한 프롬프트(메타데이터), 오류 로그",
  "쿠키 및 추적: 세션 ID, 분석(Google Analytics, Mixpanel 등), 성능 지표"
];
ko.privacyPage.section1.s3Title = "1.3 AI 관련 데이터 (입력 및 출력)";
ko.privacyPage.section1.s3Items = [
  "코드, 앱, 워크플로우를 생성하기 위해 제출하는 프롬프트/입력",
  "생성된 출력물 (코드, 텍스트 등)",
  "출력물에 대한 피드백/평가 (좋아요/싫어요, 댓글)"
];
ko.privacyPage.section1.s3Note = "당사는 의도적으로 민감한 개인 데이터(건강, 인종, 종교 등)를 수집하지 않습니다. 프롬프트에 자발적으로 포함하는 경우 귀하가 책임을 집니다.";

ko.privacyPage.section2.title = "2. 정보 사용 방법";
ko.privacyPage.section2.intro = "당사는 귀하의 정보를 다음 목적으로 사용합니다:";
ko.privacyPage.section2.items = [
  "서비스 제공, 운영, 유지 및 개선 (AI 출력물 생성 포함)",
  "구독, 결제 및 청구 처리",
  "계정 인증 및 사기/악용 방지",
  "서비스 관련 커뮤니케이션 발송 (업데이트, 보안 알림, 지원 응답)",
  "AI 모델 개선을 위한 사용 추세 분석 (익명화/집계 데이터만 – 섹션 3 참조)",
  "경험 개인화 (예: 추천 템플릿)",
  "법적 의무 준수, 약관 시행, 권리/안전 보호"
];
ko.privacyPage.section2.marketing = "마케팅: 옵트인한 경우 AppNode 기능에 대한 홍보 이메일을 보낼 수 있습니다 (언제든지 구독 취소 가능).";

ko.privacyPage.section3.title = "3. AI 모델 훈련 및 개선 (중요 섹션)";
ko.privacyPage.section3.intro = "기본적으로, 귀하가 계정 설정을 통해 명시적으로 옵트인하지 않는 한, 당사는 귀하의 개인 프롬프트, 입력, 출력 또는 사용자 콘텐츠를 기본 AI 모델 훈련이나 미세 조정에 사용하지 않습니다.";
ko.privacyPage.section3.items = [
  "훈련 옵트인: 설정 → 개인정보에서 \"내 데이터로 AppNode AI 개선 허용\"을 활성화할 수 있습니다. 활성화된 경우: 프롬프트, 출력물 및 피드백의 익명화/집계 버전이 AI 모델 및 안전 시스템을 훈련, 미세 조정, 평가 및 개선하는 데 사용될 수 있습니다.",
  "옵트아웃 / 기본값: 활성화하지 않은 경우(또는 비활성화한 경우), 귀하의 데이터는 모델 훈련에 사용되지 않습니다. 당사는 일반 시스템 개선을 위해 완전히 익명화된 집계 사용 통계(프롬프트/콘텐츠 제외)를 사용할 수 있습니다.",
  "당사는 귀하의 프롬프트, 출력물 또는 개인 데이터를 타사의 훈련 목적으로 판매하지 않습니다.",
  "옵트인한 경우 언제든지 마음을 바꿀 수 있습니다 – 이미 사용된 이전 데이터는 모델에서 소급적으로 제거할 수 없지만, 새로운 데이터는 사용되지 않습니다."
];
ko.privacyPage.section3.note = "이는 모범 사례(예: Cursor/Anthropic 스타일 옵트인)에 부합하며 GDPR 목적 제한 및 EU AI법 투명성 준수에 도움이 됩니다.";

ko.privacyPage.section4.title = "4. 정보의 공유 및 공개";
ko.privacyPage.section4.noSell = "당사는 귀하의 개인 정보를 판매하지 않습니다.";
ko.privacyPage.section4.intro = "당사는 다음 경우에만 데이터를 공유합니다:";
ko.privacyPage.section4.items = [
  "서비스 제공업체(처리자): 클라우드 호스팅(AWS/GCP), 결제 처리업체, 분석 도구 – 엄격한 DPA 계약에 의해 구속",
  "법적 사유: 소환장, 법원 명령, 권리/안전 보호(예: 악용 감지)",
  "사업 이전: 합병, 인수, 자산 매각(동일한 보호 조건 하에 데이터 이전)",
  "귀하의 동의 또는 지시에 따라(예: 공개 링크를 통해 생성된 코드 공유)"
];
ko.privacyPage.section4.international = "국제 이전: 데이터는 주로 미국에 저장됩니다. EU/EEA/영국 사용자의 경우: 해당되는 경우 표준 계약 조항(SCC) 또는 EU-미국 데이터 프라이버시 프레임워크에 의존합니다.";

ko.privacyPage.section5.title = "5. 데이터 보존";
ko.privacyPage.section5.intro = "당사는 필요한 기간 동안만 데이터를 보존합니다:";
ko.privacyPage.section5.items = [
  "계정 활성 → 무기한(삭제 요청 시까지)",
  "프롬프트/출력물: 귀하의 접근을 위해 보존(삭제하지 않는 한); 분석을 위해 익명화된 집계 데이터는 더 오래 보존",
  "로그/기술 데이터: 보안/사기 방지를 위해 최대 12~24개월",
  "계정 삭제 후: 30일 이내 데이터 삭제(법적 백업 또는 익명화된 집계 데이터 제외)"
];
ko.privacyPage.section5.note = "언제든지 삭제를 요청할 수 있습니다(아래 권리 참조).";

ko.privacyPage.section6.title = "6. 개인정보 보호 권리";
ko.privacyPage.section6.intro = "귀하의 위치에 따라(EU/EEA/영국의 GDPR, 캘리포니아의 CCPA/CPRA 등):";
ko.privacyPage.section6.items = [
  "접근: 당사가 보유한 데이터 확인",
  "정정: 부정확한 데이터 업데이트",
  "삭제: 데이터 삭제(법적 예외 적용)",
  "처리/판매 거부: 훈련 옵트아웃 포함",
  "처리 제한 또는 이의 제기",
  "이동성: 구조화된 형식으로 데이터 수령",
  "동의 철회(이전 처리에는 영향 없음)"
];
ko.privacyPage.section6.california = "캘리포니아 거주자의 경우: 사이트에 \"개인 정보 판매 또는 공유 금지\" 링크가 있습니다(당사는 판매하지 않지만).";
ko.privacyPage.section6.submit = "요청 제출: privacy@appnode.ai";
ko.privacyPage.section6.response = "30~45일 이내에 응답합니다(법률에 따라 연장 가능). 인증이 필요합니다. 권리 행사에 대한 차별 금지.";

ko.privacyPage.section7.title = "7. 데이터 보안";
ko.privacyPage.section7.p1 = "당사는 업계 표준 조치를 사용합니다: 암호화(TLS 1.3, 저장 시 AES-256), 접근 제어, 정기 감사, 침투 테스트.";
ko.privacyPage.section7.p2 = "그러나 어떤 시스템도 100% 안전하지 않습니다. 절대적인 보안을 보장할 수 없으며, 서비스는 귀하의 책임 하에 사용하는 것입니다.";
ko.privacyPage.section7.p3 = "침해 발생 시: 법률에 따라 영향을 받는 사용자와 당국에 통보합니다(예: GDPR 72시간).";

ko.privacyPage.section8.title = "8. 쿠키 및 추적 기술";
ko.privacyPage.section8.content = "당사는 필수 쿠키(기능용), 분석 및 성능 쿠키를 사용합니다. 브라우저 설정 또는 쿠키 배너를 통해 관리할 수 있습니다. 차단하면 기능이 제한될 수 있습니다.";

ko.privacyPage.section9.title = "9. 아동 개인정보";
ko.privacyPage.section9.content = "서비스는 16세(일부 관할권에서는 13세) 미만의 아동을 대상으로 하지 않습니다. 아동의 데이터를 의도적으로 수집하지 않습니다. 발견 시 즉시 삭제합니다.";

ko.privacyPage.section10.title = "10. 타사 링크 및 통합";
ko.privacyPage.section10.content = "서비스는 타사(예: GitHub 통합)에 연결될 수 있습니다. 당사는 해당 업체의 개인정보 보호 관행에 대해 책임지지 않습니다.";

ko.privacyPage.section11.title = "11. 문의하기";
ko.privacyPage.section11.company = "AppNode Inc.";
ko.privacyPage.section11.privacyEmail = "이메일: privacy@appnode.ai (개인정보 관련 요청)";
ko.privacyPage.section11.generalEmail = "일반 문의: contact@appnode.ai";

// termsPage
ko.termsPage.lastUpdated = "최종 업데이트: 2025년 12월 1일";
ko.termsPage.contactTitle = "12. 연락처 정보";
ko.termsPage.contactDescription = "이 약관에 대해 질문이 있으신 경우 다음으로 연락해 주세요:";
ko.termsPage.intro.p1 = "이 서비스 약관(\"약관\")은 AppNode Inc.(\"AppNode\", \"회사\", \"당사\")가 제공하는 AppNode 플랫폼에 대한 접근 및 사용을 규율하며, 여기에는 웹사이트, 모바일 애플리케이션, API, 소프트웨어, 인공지능 도구, 문서, 및 관련 서비스, 기능, 또는 콘텐츠(통칭 \"서비스\")가 포함되나 이에 한정되지 않습니다. 서비스는 AI 기반 도구를 통해 웹 애플리케이션, 코드, 워크플로우 및 기타 디지털 결과물을 생성하는 것을 돕기 위해 설계되었습니다.";
ko.termsPage.intro.p2 = "서비스에 접근, 등록 또는 사용함으로써 귀하(\"사용자\", \"귀하\")는 이 약관, 당사의 개인정보 보호정책(여기에 참조로 포함됨) 및 당사가 수시로 제공할 수 있는 추가 약관 또는 정책에 법적으로 구속되는 것에 동의합니다. 이 약관에 동의하지 않는 경우 서비스 사용을 즉시 중단해야 하며 접근이 금지됩니다.";
ko.termsPage.intro.p3 = "이 약관은 귀하와 AppNode 간의 구속력 있는 법적 계약을 형성합니다. 조직, 단체 또는 제3자(예: 고용주 또는 고객)를 대신하여 서비스를 사용하는 경우, 해당 조직, 단체 또는 제3자를 이 약관에 구속할 수 있는 완전한 권한이 있음을 진술하고 보증하며, \"귀하\"는 해당 조직, 단체 또는 제3자를 지칭합니다.";
ko.termsPage.intro.p4 = "당사는 아래 섹션 20에 설명된 대로 언제든지 이 약관을 수정할 권리를 보유합니다. 수정 후 서비스를 계속 사용하면 수정된 약관을 수락한 것으로 간주됩니다.";

ko.termsPage.section1.title = "1. 자격 및 제한";
ko.termsPage.section1.intro = "서비스를 사용하려면 다음 조건을 충족해야 합니다:";
ko.termsPage.section1.items = [
  "만 18세 이상 또는 관할권의 법정 성년 연령 중 더 큰 나이 이상이어야 합니다.",
  "미국의 포괄적 제재 또는 금수 대상 국가 또는 지역(쿠바, 이란, 북한, 시리아, 크림반도, 도네츠크 인민공화국 또는 루한스크 인민공화국을 포함하되 이에 한정되지 않음)에 위치하거나 거주 또는 국적이 아니어야 하며, 해당 수출 통제법에 따라 미국 수출을 받을 수 없는 사람 또는 단체가 아니어야 합니다.",
  "미국 재무부가 관리하는 특별 지정 국민 목록을 포함하여 미국 정부의 금지 또는 제한 대상 목록에 등재되어 있지 않아야 합니다."
];
ko.termsPage.section1.minor = "만 18세 미만 또는 법정 성년 연령 미만인 경우, 이 약관에 구속되는 것에 동의한 부모 또는 법적 후견인의 직접적인 감독 하에 명시적 서면 동의를 받아야만 서비스를 사용할 수 있습니다. 당사는 언제든지 해당 동의의 증거를 요구할 수 있습니다.";
ko.termsPage.section1.suspended = "이전에 서비스에서 정지 또는 해지된 경우 서비스를 사용하지 않겠다는 데 동의합니다.";

ko.termsPage.section2.title = "2. 계정 등록, 보안 및 책임";
ko.termsPage.section2.intro = "서비스의 특정 기능에 접근하려면 계정(\"계정\")을 생성해야 합니다. 다음에 동의합니다:";
ko.termsPage.section2.items = [
  "등록 시 정확하고 최신이며 완전한 정보를 제공하고 해당 정보를 업데이트된 상태로 유지합니다.",
  "계정 자격 증명(예: 사용자명, 비밀번호, API 키)의 엄격한 기밀을 유지하고 제3자와 공유하지 않습니다.",
  "귀하의 승인 여부에 관계없이 계정에서 발생하는 모든 활동, 행동 및 누락에 대해 전적으로 책임을 집니다.",
  "계정과 관련된 승인되지 않은 사용, 의심되는 침해 또는 보안 사고를 support@appnode.ai로 즉시 서면 통지합니다.",
  "강력하고 고유한 비밀번호를 사용하고 사용 가능한 보안 기능(예: 2단계 인증)을 활성화합니다."
];
ko.termsPage.section2.reserve = "당사는 이 약관 위반, 사기 의심, 보안 위험, 법적 요구사항 또는 운영상의 이유를 포함하되 이에 한정되지 않는 어떤 이유로든, 통지 유무에 관계없이 언제든지 등록을 거부하거나 계정을 정지 또는 해지할 권리를 보유합니다. 정지 또는 해지 시 서비스의 모든 사용을 즉시 중단해야 합니다.";
ko.termsPage.section2.acknowledge = "귀하는 이러한 보안 의무를 준수하지 못하여 발생하는 손실이나 손해에 대해 당사가 책임지지 않음을 인정합니다. 당사는 보안, 규정 준수 또는 악용 방지 목적으로 계정 활동을 모니터링할 수 있지만 의무는 아닙니다.";

ko.termsPage.section3.title = "3. 서비스 설명";
ko.termsPage.section3.intro = "서비스에는 자연어 프롬프트 또는 기타 입력을 기반으로 웹 애플리케이션, 코드, 워크플로우, 스크립트, 디지털 콘텐츠 및 관련 출력물을 생성, 수정 및 배포할 수 있는 AI 기반 도구가 포함됩니다. 기능에는 다음이 포함되나 이에 한정되지 않습니다:";
ko.termsPage.section3.items = [
  "AI 기반 코드 생성 및 편집.",
  "애플리케이션의 호스팅, 배포 및 확장.",
  "협업 및 공유 도구.",
  "API, 타사 서비스 통합 및 플러그인.",
  "사전 구축된 템플릿, 라이브러리 및 프레임워크.",
  "분석, 디버깅 및 성능 모니터링 도구.",
  "향상된 기능이 포함된 유료 구독 등급(예: 우선 처리, 더 높은 사용 한도).",
  "컴퓨팅 리소스, API 호출 또는 스토리지에 대한 사용량 기반 결제."
];
ko.termsPage.section3.evolve = "서비스는 시간이 지남에 따라 발전할 수 있으며, 당사는 통지나 책임 없이 언제든지 서비스의 기능, 기능성 또는 측면을 추가, 수정, 중단 또는 중지할 권리를 보유합니다. 당사는 서비스의 가용성, 가동 시간 또는 성능을 보장하지 않으며, 접근은 예정된 유지보수, 예정되지 않은 중단 또는 기타 중단의 영향을 받을 수 있습니다.";
ko.termsPage.section3.thirdParty = "특정 기능은 타사 서비스(예: 클라우드 제공업체, 결제 처리업체)와의 통합이 필요할 수 있으며, 해당 타사의 약관 및 정책을 준수할 책임은 귀하에게 있습니다. 당사는 이러한 통합으로 인해 발생하는 문제에 대해 책임지지 않습니다.";

ko.termsPage.section4.title = "4. AI 생성 출력물 면책조항 및 위험";
ko.termsPage.section4.intro = "서비스는 입력을 처리하고 출력물(\"AI 출력물\")을 생성하기 위해 인공지능 모델 및 알고리즘(\"AI 시스템\")에 의존하며, 여기에는 코드, 텍스트, 이미지, 디자인 또는 기타 콘텐츠가 포함될 수 있습니다.";
ko.termsPage.section4.acknowledge = "귀하는 다음을 명시적으로 인정하고 동의합니다:";
ko.termsPage.section4.items = [
  "AI 출력물은 알고리즘에 의해 생성되며 오류, 버그, 취약점, 부정확성, 편향, 환각 또는 누락을 포함할 수 있습니다.",
  "AI 출력물은 전문적인 조언, 프로덕션 준비 코드 또는 보장된 솔루션으로 의도되거나 취급되어서는 안 됩니다.",
  "AppNode는 어떤 목적으로든 AI 출력물의 정확성, 완전성, 보안, 합법성, 신뢰성, 독창성, 비침해 또는 적합성에 대해 어떠한 진술이나 보증도 하지 않습니다.",
  "모든 AI 출력물을 사용, 배포 또는 의존하기 전에 독립적으로 검토, 테스트, 검증, 보안 및 감사할 전적인 책임은 귀하에게 있습니다.",
  "AI 출력물은 의도치 않게 타사 지적 재산을 포함하거나 유사할 수 있으며, AI 출력물 사용으로 인한 지적 재산 침해 청구의 모든 위험은 귀하가 부담합니다.",
  "AI 시스템은 입력에 따라 예상치 못한 또는 바람직하지 않은 결과를 생성할 수 있으며, 당사는 생성된 유해하거나 공격적이거나 부적절한 콘텐츠에 대해 책임지지 않습니다.",
  "수출 통제, 데이터 보호 규정 및 산업별 표준(예: 건강 데이터의 HIPAA)을 포함한 모든 적용 가능한 법률을 준수하여 AI 출력물을 사용해야 합니다."
];
ko.termsPage.section4.disclaimer = "AppNode는 AI 출력물의 사용 또는 의존으로 인해 발생하는 모든 손해, 손실 또는 청구에 대해 직접적, 간접적, 부수적, 결과적 또는 징벌적 손해를 포함하되 이에 한정되지 않는 모든 책임을 부인합니다. 귀하는 AI 출력물을 자신의 위험과 책임 하에 사용하는 데 동의합니다.";

ko.termsPage.section5.title = "5. 사용자 콘텐츠, 데이터 및 라이선스";
ko.termsPage.section5.definition = "\"사용자 콘텐츠\"란 서비스에 업로드, 제출 또는 입력하는 모든 프롬프트, 데이터, 코드, 텍스트, 이미지, 파일 또는 기타 자료를 의미합니다.";
ko.termsPage.section5.ownership = "소유권: 여기에 부여된 라이선스에 따라 사용자 콘텐츠에 대한 모든 소유권을 보유합니다.";
ko.termsPage.section5.licenseIntro = "AppNode에 대한 라이선스: 사용자 콘텐츠를 제출함으로써 AppNode에 영구적, 취소 불능, 전 세계적, 비독점적, 로열티 무료, 전액 지급, 재라이선스 및 양도 가능한 라이선스를 부여합니다:";
ko.termsPage.section5.licenseItems = [
  "서비스를 제공, 유지 및 개선하기 위해 필요한 사용자 콘텐츠의 호스팅, 저장, 처리, 복제, 수정, 배포, 표시 및 수행.",
  "악용, 사기, 보안 위협 또는 이 약관 위반을 감지, 방지 및 완화하기 위해 사용자 콘텐츠 사용.",
  "AI 시스템, 모델, 알고리즘 및 서비스를 훈련, 미세 조정 또는 개선하기 위한 분석 목적으로 사용자 콘텐츠를 익명화, 집계 또는 비식별화.",
  "법적 의무 준수, 소환장 응답 또는 권리 행사."
];
ko.termsPage.section5.represent = "귀하는 다음을 진술하고 보증합니다: (i) 사용자 콘텐츠를 제출하고 위의 라이선스를 부여하는 데 필요한 모든 권리, 동의 및 권한이 있음; (ii) 사용자 콘텐츠가 타사 권리(예: 지적 재산, 개인정보)를 침해하지 않음; (iii) 사용자 콘텐츠가 모든 적용 가능한 법률을 준수함.";
ko.termsPage.section5.noSell = "당사는 귀하의 사용자 콘텐츠를 타사에 판매하지 않습니다. 그러나 연구 또는 개선 목적으로 파트너와 익명화되거나 집계된 데이터를 공유할 수 있으며, 이는 합리적으로 귀하에게 재식별될 수 없어야 합니다.";
ko.termsPage.section5.dataProcessing = "데이터 처리: 사용자 콘텐츠의 처리는 당사의 개인정보 보호정책에 의해 추가로 규율됩니다. 귀하는 서버 또는 계약 업체가 위치한 미국 또는 기타 관할권에서 사용자 콘텐츠의 전송, 저장 및 처리에 동의합니다.";

ko.termsPage.section6.title = "6. 이용 규정";
ko.termsPage.section6.intro = "귀하는 합법적인 목적으로만 이 약관을 준수하여 서비스를 사용하는 데 동의합니다. 금지된 활동에는 다음이 포함되나 이에 한정되지 않습니다:";
ko.termsPage.section6.items = [
  "지역, 주, 국가 또는 국제 법률, 규정 또는 조약 위반.",
  "저작권, 상표, 특허, 영업 비밀 또는 퍼블리시티권을 포함한 지적 재산권 침해 또는 도용.",
  "악성 코드, 바이러스, 멀웨어, 랜섬웨어, 스파이웨어 또는 기타 유해한 소프트웨어를 생성, 배포 또는 서비스를 사용하여 생성.",
  "서비스 또는 관련 시스템에 대한 무단 접근, 해킹, 탐색, 스캔 또는 취약점 악용.",
  "서비스 또는 AI 시스템에서 소스 코드, 알고리즘 또는 독점 정보를 스크래핑, 추출, 역공학, 디컴파일, 디스어셈블 또는 기타 방법으로 도출하려는 시도.",
  "보안 조치, 속도 제한, 사용 할당량 또는 접근 제어를 우회, 회피 또는 방해.",
  "악용 목적으로 여러 계정 생성, 계정 생성 자동화 또는 승인 없이 봇/스크립트로 서비스와 상호 작용.",
  "불법적, 음란한, 명예훼손적, 괴롭히는, 위협적, 차별적, 혐오적이거나 폭력, 테러 또는 타인에 대한 위해를 조장하는 콘텐츠 업로드 또는 생성.",
  "서비스 간섭, 방해 또는 과부하(서비스 거부 공격, 스패밍 또는 과도한 리소스 소비 포함).",
  "인적 감독 없이 고용, 신용, 주거 또는 법적 맥락에서 자동화된 의사 결정과 같은 고위험 활동에 서비스 사용.",
  "미국 수출 통제법(예: EAR, ITAR) 위반으로 서비스 또는 AI 출력물의 수출 또는 재수출."
];
ko.termsPage.section6.monitor = "당사는 이 정책을 시행하고 위반을 감지하거나 서비스를 개선하기 위해 서비스 사용을 모니터링, 검토 또는 분석할 수 있습니다. 위반 시 환불이나 책임 없이 계정이 즉시 정지 또는 해지될 수 있습니다.";

ko.termsPage.section7.title = "7. 구독, 청구, 수수료 및 결제";
ko.termsPage.section7.intro = "특정 서비스에는 유료 구독(\"구독\")이 필요합니다. 구독함으로써 다음에 동의합니다:";
ko.termsPage.section7.items = [
  "귀하가 제공하는 결제 방법을 통해 미국 달러로 모든 해당 수수료, 세금 및 요금(\"수수료\")을 지불합니다.",
  "갱신일 최소 24시간 전에 취소하지 않는 한 자동으로 갱신되는 구독에 대한 자동 반복 청구를 승인합니다.",
  "정확하고 완전하며 최신의 청구 정보를 제공하고 필요에 따라 즉시 업데이트합니다.",
  "결제 실패로 인해 발생하는 초과 인출, 잔액 부족 또는 기타 요금에 대한 책임을 수락합니다."
];
ko.termsPage.section7.fees = "수수료에는 고정 구독 비용, 사용량 기반 요금(예: API 호출당, 컴퓨팅 시간당 또는 스토리지 GB당) 또는 플랜 한도 초과에 대한 초과 요금이 포함될 수 있습니다. 당사는 통지에 따라 언제든지 수수료를 조정할 수 있으며, 계속 사용하면 수락한 것으로 간주됩니다.";
ko.termsPage.section7.failure = "수수료를 지불하지 않으면 계정이 정지 또는 해지될 수 있으며, 모든 미결제 잔액은 여전히 지불해야 합니다.";
ko.termsPage.section7.refunds = "환불: 적용 가능한 법률에 따라 필요하거나 별도의 환불 정책에 명시적으로 명시된 경우를 제외하고 모든 수수료는 환불되지 않습니다. 구독의 미사용 부분에 대한 부분 환불은 제공되지 않습니다.";
ko.termsPage.section7.processors = "당사는 타사 결제 처리업체(예: Stripe)를 사용하며 해당 업체의 행위, 오류 또는 보안 침해에 대해 책임지지 않습니다.";

ko.termsPage.section8.title = "8. 속도 제한, 할당량 및 리소스 사용";
ko.termsPage.section8.intro = "공정한 사용과 시스템 안정성을 보장하기 위해 서비스에 속도 제한, 사용 할당량, 컴퓨팅 제한 또는 기타 제어를 적용할 수 있습니다(예: 분당 최대 API 요청 수, 월별 총 컴퓨팅 크레딧).";
ko.termsPage.section8.items = [
  "한도 초과 시 스로틀링, 추가 수수료, 정지 또는 해지될 수 있습니다.",
  "이 한도를 우회하려는 시도를 하지 않겠다는 데 동의합니다.",
  "리소스 집약적 활동(예: 대규모 데이터 처리)은 사전 승인이 필요할 수 있습니다."
];
ko.termsPage.section8.noLiability = "당사는 이러한 한도 적용으로 인해 발생하는 손실에 대해 책임지지 않습니다.";

ko.termsPage.section9.title = "9. 지적 재산권";
ko.termsPage.section9.ownership = "소프트웨어, AI 시스템, 모델, 알고리즘, 데이터베이스, 사용자 인터페이스, 브랜딩, 상표, 로고, 문서 및 이의 개선 또는 파생물(통칭 \"AppNode IP\")을 포함하되 이에 한정되지 않는 서비스에 대한 모든 권리, 권원 및 이익은 AppNode 또는 라이선서의 독점적 재산으로 유지됩니다.";
ko.termsPage.section9.license = "귀하에게는 이 약관에 따라 내부 목적으로만 서비스에 접근하고 사용할 수 있는 제한적, 비독점적, 양도 불가능, 재라이선스 불가능, 취소 가능한 라이선스가 부여됩니다. 이 라이선스는 위반 또는 이 약관의 종료 시 종료됩니다.";
ko.termsPage.section9.agreeNot = "다음을 하지 않겠다는 데 동의합니다:";
ko.termsPage.section9.items = [
  "AppNode IP를 복사, 수정, 적응, 번역, 배포, 판매, 임대, 대여 또는 파생 작품을 만들지 않습니다.",
  "저작권, 상표 또는 독점 고지를 제거, 변경 또는 불명확하게 하지 않습니다.",
  "소비자를 혼동시키거나 후원을 암시할 수 있는 방식으로 AppNode IP를 사용하지 않습니다."
];
ko.termsPage.section9.feedback = "서비스에 관한 피드백, 제안 또는 아이디어(\"피드백\")는 AppNode가 소유하며, 귀하는 보상이나 귀속 없이 해당 피드백을 사용, 통합 또는 상업화할 수 있는 영구적이고 취소 불능인 라이선스를 부여합니다.";

ko.termsPage.section10.title = "10. 기밀 유지";
ko.termsPage.section10.content = "기술 사양, 가격, 베타 기능 및 사업 전략을 포함하되 이에 한정되지 않는 AppNode가 공개하는 비공개 정보의 기밀을 유지하는 데 동의합니다. 이 의무는 이 약관의 종료 후에도 유지됩니다.";

ko.termsPage.section11.title = "11. 면책조항 및 책임 제한";
ko.termsPage.section11.asIs = "서비스는 상품성, 특정 목적에의 적합성, 비침해, 정확성 또는 신뢰성에 대한 보증을 포함하되 이에 한정되지 않는 어떠한 종류의 명시적 또는 묵시적 보증 없이 \"있는 그대로\" 및 \"이용 가능한 상태로\" 제공됩니다.";
ko.termsPage.section11.noWarranties = "APPNODE는 서비스가 중단 없이, 오류 없이, 안전하게 또는 바이러스나 유해 구성 요소 없이 작동할 것을 보증하지 않습니다.";
ko.termsPage.section11.limitation = "법률이 허용하는 최대 범위 내에서, 이 약관 또는 서비스와 관련하여 발생하는 모든 청구에 대한 APPNODE의 총 책임은 (A) 청구 전 12개월 동안 귀하가 APPNODE에 지불한 금액 또는 (B) $100 중 더 큰 금액을 초과하지 않습니다.";
ko.termsPage.section11.exclusion = "어떠한 경우에도 APPNODE는 이익, 데이터, 영업권 또는 사용의 손실을 포함하되 이에 한정되지 않는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임지지 않습니다.";

ko.termsPage.section12.title = "12. 면책";
ko.termsPage.section12.content = "귀하는 다음과 관련하여 발생하는 모든 청구, 책임, 손해, 손실, 비용 또는 경비(합리적인 변호사 비용 포함)에 대해 AppNode, 계열사, 임원, 이사, 직원, 대리인 및 라이선서를 면책, 방어 및 보호할 것에 동의합니다: (a) 서비스 사용; (b) 사용자 콘텐츠; (c) 이 약관 위반; 또는 (d) 타사 권리 위반.";

ko.termsPage.section13.title = "13. 해지";
ko.termsPage.section13.byYou = "서비스의 지침을 따르거나 support@appnode.ai에 연락하여 언제든지 계정을 해지할 수 있습니다.";
ko.termsPage.section13.byUs = "당사는 이 약관 위반, 미결제, 사기 의심 또는 법적 요구사항을 포함하되 이에 한정되지 않는 어떤 이유로든 통지 유무에 관계없이 즉시 계정을 정지 또는 해지할 수 있습니다.";
ko.termsPage.section13.effect = "해지 시: (a) 서비스에 대한 접근이 중단됩니다; (b) 미결제 수수료는 여전히 지불해야 합니다; (c) 귀하에게 부여된 라이선스는 종료됩니다; (d) 성격상 유지되어야 하는 조항(예: 면책, 책임 제한, 기밀 유지)은 유지됩니다.";

ko.termsPage.section14.title = "14. 준거법 및 분쟁 해결";
ko.termsPage.section14.law = "이 약관은 법 충돌 원칙에 관계없이 미국 델라웨어주의 법률에 따라 규율되고 해석됩니다.";
ko.termsPage.section14.arbitration = "이 약관과 관련하여 발생하는 모든 분쟁은 미국중재협회(AAA)의 상사 중재 규칙에 따라 관리되는 구속력 있는 중재를 통해 독점적으로 해결됩니다. 중재는 델라웨어주 윌밍턴에서 진행됩니다.";
ko.termsPage.section14.classWaiver = "귀하와 APPNODE는 배심 재판에 대한 권리와 집단 소송 또는 집단 중재에 참여할 권리를 포기하는 데 동의합니다.";

ko.termsPage.section15.title = "15. 기타";
ko.termsPage.section15.entireAgreement = "이 약관은 개인정보 보호정책 및 여기에 참조된 기타 정책과 함께 서비스에 관한 귀하와 AppNode 간의 전체 합의를 구성합니다.";
ko.termsPage.section15.severability = "어떤 조항이 집행 불가능한 것으로 판명되더라도 나머지 조항은 완전한 효력을 유지합니다.";
ko.termsPage.section15.waiver = "어떤 조항을 시행하지 않더라도 해당 조항의 포기를 구성하지 않습니다.";
ko.termsPage.section15.assignment = "당사의 사전 서면 동의 없이 이 약관을 양도하거나 이전할 수 없습니다. 당사는 이 약관을 자유롭게 양도할 수 있습니다.";

ko.termsPage.section16.title = "16. 연락처 정보";
ko.termsPage.section16.company = "AppNode Inc.";
ko.termsPage.section16.supportEmail = "이메일: support@appnode.ai";
ko.termsPage.section16.legalEmail = "법무: legal@appnode.ai";

// guidesPage categories
if (ko.guidesPage && ko.guidesPage.categories) {
  ko.guidesPage.categories.saas = "SaaS";
}

// Write back
fs.writeFileSync(koPath, JSON.stringify(ko, null, 2) + '\n', 'utf8');
console.log('Korean translations updated successfully!');

// Verify
var koNew = JSON.parse(fs.readFileSync(koPath, 'utf8'));
var en = require('./src/translations/en.json');

function getAllKeys(obj, prefix) {
  prefix = prefix || '';
  var keys = [];
  for (var key of Object.keys(obj)) {
    var val = obj[key];
    var fullKey = prefix ? prefix + '.' + key : key;
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      keys = keys.concat(getAllKeys(val, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getVal(obj, path) {
  var parts = path.split('.');
  var cur = obj;
  for (var p of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[p];
  }
  return cur;
}

var enKeys = getAllKeys(en);
var koKeys = getAllKeys(koNew);

var untranslated = enKeys.filter(function(k) {
  var enVal = getVal(en, k);
  var koVal = getVal(koNew, k);
  return koVal !== undefined && enVal === koVal && typeof enVal === 'string' && enVal.length > 3;
});

console.log('\nRemaining untranslated strings:', untranslated.length);
untranslated.forEach(function(k) { console.log('  ' + k + ' => ' + getVal(koNew, k)); });
