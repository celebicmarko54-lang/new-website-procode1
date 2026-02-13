'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-2 dark:border-gray-800 rounded-full text-sm font-medium mb-4">
              {t('privacyPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('privacyPage.title')}</h1>
            <p className="text-gray-500 dark:text-gray-400">{t('privacyPage.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <section className="mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                AppNode Inc. (&ldquo;AppNode&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our website, mobile applications, APIs, AI-powered code generation tools, platform, and related services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By using the Services, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy here and updating the &ldquo;Last Updated&rdquo; date, and/or by email if the change is significant. Your continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Information You Provide Directly</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                <li><strong>Account data:</strong> name, email, password, username</li>
                <li><strong>Profile data:</strong> avatar, bio, preferences, settings</li>
                <li><strong>Payment data:</strong> billing details (processed securely via third-party providers like Stripe &ndash; we do not store full card numbers)</li>
                <li><strong>User Content:</strong> prompts, inputs, code snippets, uploaded files, generated outputs you save or share</li>
                <li><strong>Communications:</strong> support tickets, emails, feedback, chat messages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                <li><strong>Device &amp; technical data:</strong> IP address, browser type/version, OS, device ID, screen resolution</li>
                <li><strong>Usage data:</strong> pages visited, features used, time spent, prompts submitted (metadata), error logs</li>
                <li><strong>Cookies &amp; tracking:</strong> session IDs, analytics (Google Analytics, Mixpanel or similar), performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.3 AI-Specific Data (Inputs &amp; Outputs)</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Prompts/Inputs you submit to generate code, apps, workflows</li>
                <li>Generated Outputs (code, text, etc.)</li>
                <li>Feedback/ratings on Outputs (thumbs up/down, comments)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We do not intentionally collect sensitive personal data (health, race, religion, etc.) unless you voluntarily include it in prompts &ndash; in which case you assume responsibility.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Provide, operate, maintain, and improve the Services (including generating AI Outputs)</li>
                <li>Process subscriptions, payments, and billing</li>
                <li>Authenticate accounts and prevent fraud/abuse</li>
                <li>Send service-related communications (updates, security alerts, support responses)</li>
                <li>Analyze usage trends to improve AI models (anonymized/aggregated only &ndash; see Section 3)</li>
                <li>Personalize experience (e.g., recommended templates)</li>
                <li>Comply with legal obligations, enforce Terms, protect rights/safety</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>Marketing:</strong> We may send promotional emails about AppNode features if you opt-in (you can unsubscribe anytime).
              </p>
            </section>

            {/* 3. AI Model Training & Improvement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. AI Model Training &amp; Improvement (Critical Section)</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By default, we <strong>do not</strong> use your personal prompts, inputs, outputs, or User Content to train or fine-tune our foundational AI models unless you explicitly opt-in via account settings.
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>Opt-in for Training:</strong> You can enable &ldquo;Allow my data to improve AppNode AI&rdquo; in Settings &rarr; Privacy. If enabled: anonymized/aggregated versions of your prompts, outputs, and feedback may be used to train, fine-tune, evaluate, and improve our AI models and safety systems.</li>
                <li><strong>Opt-out / Default:</strong> If not enabled (or if you disable it), your data is never used for model training. We may still use fully anonymized, aggregated usage statistics (no prompts/content) for general system improvements.</li>
                <li>We do not sell your prompts, outputs, or personal data to third parties for their training.</li>
                <li>If you opt-in, you can change your mind anytime &ndash; previous data already used cannot be retroactively removed from models, but new data won&apos;t be used.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This aligns with best practices (e.g., Cursor/Anthropic-style opt-in) and helps comply with GDPR purpose limitation and EU AI Act transparency.
              </p>
            </section>

            {/* 4. Sharing & Disclosure of Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Sharing &amp; Disclosure of Information</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>We do not sell your personal information.</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We share data only:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>With service providers (processors):</strong> cloud hosting (AWS/GCP), payment processors, analytics tools &ndash; bound by strict DPA contracts</li>
                <li><strong>For legal reasons:</strong> subpoenas, court orders, protect rights/safety (e.g., abuse detection)</li>
                <li><strong>In business transfers:</strong> merger, acquisition, asset sale (your data transferred under same protections)</li>
                <li><strong>With your consent or at your direction</strong> (e.g., sharing generated code via public link)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>International transfers:</strong> Data is primarily stored in the US. For EU/EEA/UK users: we rely on Standard Contractual Clauses (SCCs) or EU-US Data Privacy Framework where applicable. Montenegro aligns closely with GDPR via recent harmonization.
              </p>
            </section>

            {/* 5. Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We retain your data only as long as necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>Account active</strong> &rarr; indefinite (until deletion request)</li>
                <li><strong>Prompts/Outputs:</strong> retained for your access (unless deleted); anonymized aggregates longer for analytics</li>
                <li><strong>Logs/technical data:</strong> up to 12&ndash;24 months for security/fraud prevention</li>
                <li><strong>After account deletion:</strong> data deleted within 30 days (except legal backups or anonymized aggregates)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You can request deletion anytime (see Rights below).
              </p>
            </section>

            {/* 6. Your Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Depending on your location (GDPR for EU/EEA/UK/Montenegro equivalent, CCPA/CPRA for California, etc.):
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li><strong>Access:</strong> See what data we hold</li>
                <li><strong>Correction:</strong> Update inaccurate data</li>
                <li><strong>Deletion:</strong> Erase your data (subject to legal exceptions)</li>
                <li><strong>Opt-out of processing/sale:</strong> Including training opt-out</li>
                <li><strong>Restrict processing or object</strong></li>
                <li><strong>Portability:</strong> Receive data in structured format</li>
                <li><strong>Withdraw consent</strong> anytime (doesn&apos;t affect prior processing)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                For California residents: &ldquo;Do Not Sell or Share My Personal Information&rdquo; link on our site (though we don&apos;t sell).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>Submit requests:</strong> privacy@appnode.ai
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We respond within 30&ndash;45 days (extendable per law). Verification required. No discrimination for exercising rights.
              </p>
            </section>

            {/* 7. Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We use industry-standard measures: encryption (TLS 1.3, at-rest AES-256), access controls, regular audits, penetration testing.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                However, no system is 100% secure. We cannot guarantee absolute security &ndash; you use Services at your own risk.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In case of breach: we notify affected users and authorities as required by law (e.g., GDPR 72h).
              </p>
            </section>

            {/* 8. Cookies & Tracking Technologies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Cookies &amp; Tracking Technologies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We use essential cookies (for functionality), analytics, and performance cookies. You can manage via browser settings or our cookie banner. Blocking may limit functionality.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Services not directed to children under 16 (or 13 in some jurisdictions). We do not knowingly collect data from children. If discovered, we delete immediately.
              </p>
            </section>

            {/* 10. Third-Party Links & Integrations */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Third-Party Links &amp; Integrations</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Services may link to third parties (e.g., GitHub integration). We are not responsible for their privacy practices.
              </p>
            </section>

            {/* 11. Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
              <div className="mt-4 p-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">AppNode Inc.</p>
                <p className="text-gray-600 dark:text-gray-400">Email: privacy@appnode.ai (for privacy requests)</p>
                <p className="text-gray-600 dark:text-gray-400">General: contact@appnode.ai</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
