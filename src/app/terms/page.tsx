'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function TermsOfServicePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-2 dark:border-gray-800 rounded-full text-sm font-medium mb-4">
              {t('termsPage.badge')}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('termsPage.title')}</h1>
            <p className="text-gray-500 dark:text-gray-400">{t('termsPage.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <section className="mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the AppNode platform, including but not limited to its website, mobile applications, APIs, software, artificial intelligence tools, documentation, and any related services, features, or content (collectively, the &ldquo;Services&rdquo;) provided by AppNode Inc. (&ldquo;AppNode,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). The Services are designed to assist users in generating web applications, code, workflows, and other digital outputs through AI-powered tools.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By accessing, registering for, or using the Services in any manner, you (the &ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree to be legally bound by these Terms, our Privacy Policy (incorporated herein by reference), and any additional terms or policies we may provide from time to time. If you do not agree to these Terms, you must immediately cease all use of the Services and are prohibited from accessing them.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                These Terms form a binding legal agreement between you and AppNode. If you are using the Services on behalf of an organization, entity, or third party (e.g., your employer or client), you represent and warrant that you have the full authority to bind that organization, entity, or third party to these Terms, and &ldquo;you&rdquo; and &ldquo;your&rdquo; shall refer to such organization, entity, or third party.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time, as detailed in Section 20 below. Your continued use of the Services after any such modifications constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* 1. Eligibility and Restrictions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Eligibility and Restrictions</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                To use the Services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Be at least 18 years of age or the age of legal majority in your jurisdiction, whichever is greater.</li>
                <li>Not be located in, or a resident or national of, any country or region subject to comprehensive U.S. sanctions or embargoes (including but not limited to Cuba, Iran, North Korea, Syria, Crimea, Donetsk People&apos;s Republic, or Luhansk People&apos;s Republic), or otherwise be a person or entity prohibited from receiving U.S. exports under applicable export control laws.</li>
                <li>Not be listed on any U.S. government list of prohibited or restricted parties, including the Specially Designated Nationals List maintained by the U.S. Department of the Treasury.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you are under 18 years of age or the age of legal majority, you may only use the Services under the direct supervision and with the express written consent of a parent or legal guardian who agrees to be bound by these Terms on your behalf. We may require proof of such consent at any time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You agree not to use the Services if you have previously been suspended or terminated from the Services.
              </p>
            </section>

            {/* 2. Account Registration, Security, and Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Account Registration, Security, and Responsibilities</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                To access certain features of the Services, you must create an account (&ldquo;Account&rdquo;). You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during registration and keep such information updated.</li>
                <li>Maintain the strict confidentiality of your Account credentials (e.g., username, password, API keys) and not share them with any third party.</li>
                <li>Be solely responsible for all activities, actions, and omissions that occur under your Account, whether or not authorized by you.</li>
                <li>Immediately notify us in writing at [Insert Email] of any unauthorized use, suspected breach, or security incident related to your Account.</li>
                <li>Use strong, unique passwords and enable any available security features (e.g., two-factor authentication).</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We reserve the right to refuse registration, suspend, or terminate your Account at any time, with or without notice, for any reason or no reason, including but not limited to violations of these Terms, suspected fraud, security risks, legal requirements, or operational concerns. Upon suspension or termination, you must immediately cease all use of the Services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You acknowledge that we are not responsible for any loss or damage arising from your failure to comply with these security obligations. We may, but are not obligated to, monitor Account activity for security, compliance, or abuse prevention purposes.
              </p>
            </section>

            {/* 3. Description of Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Description of Services</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Services include AI-powered tools that enable users to generate, modify, and deploy web applications, code, workflows, scripts, digital content, and related outputs based on natural language prompts or other inputs. Features may include, without limitation:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>AI-driven code generation and editing.</li>
                <li>Hosting, deployment, and scaling of applications.</li>
                <li>Collaboration and sharing tools.</li>
                <li>APIs, integrations with third-party services, and plugins.</li>
                <li>Pre-built templates, libraries, and frameworks.</li>
                <li>Analytics, debugging, and performance monitoring tools.</li>
                <li>Paid subscription tiers with enhanced features (e.g., priority processing, higher usage limits).</li>
                <li>Usage-based billing for computational resources, API calls, or storage.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Services may evolve over time, and we reserve the right to add, modify, suspend, or discontinue any features, functionalities, or aspects of the Services at any time, without notice or liability. We do not guarantee the availability, uptime, or performance of the Services, and access may be subject to scheduled maintenance, unscheduled downtime, or other interruptions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Certain features may require integration with third-party services (e.g., cloud providers, payment processors), and you are responsible for complying with those third parties&apos; terms and policies. We are not liable for any issues arising from such integrations.
              </p>
            </section>

            {/* 4. AI-Generated Output Disclaimer and Risks */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. AI-Generated Output Disclaimer and Risks</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Services rely on artificial intelligence models and algorithms (&ldquo;AI Systems&rdquo;) to process inputs and generate outputs (&ldquo;AI Outputs&rdquo;), which may include code, text, images, designs, or other content.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You expressly acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>AI Outputs are generated algorithmically and may contain errors, bugs, vulnerabilities, inaccuracies, biases, hallucinations, or omissions.</li>
                <li>AI Outputs are not intended to be, and should not be treated as, professional advice, production-ready code, or guaranteed solutions.</li>
                <li>AppNode makes no representations or warranties regarding the accuracy, completeness, security, legality, reliability, originality, non-infringement, or suitability of any AI Outputs for any purpose.</li>
                <li>You are solely responsible for independently reviewing, testing, validating, securing, and auditing all AI Outputs before any use, deployment, or reliance thereon.</li>
                <li>AI Outputs may inadvertently incorporate or resemble third-party intellectual property, and you assume all risks of intellectual property infringement claims arising from your use of AI Outputs.</li>
                <li>The AI Systems may produce unexpected or undesirable results based on your inputs, and we are not responsible for any harmful, offensive, or inappropriate content generated.</li>
                <li>You must comply with all applicable laws when using AI Outputs, including export controls, data protection regulations, and industry-specific standards (e.g., HIPAA for health data).</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                AppNode disclaims all liability for any damages, losses, or claims arising from your use of or reliance on AI Outputs, including but not limited to direct, indirect, incidental, consequential, or punitive damages. You agree to use AI Outputs at your own risk and peril.
              </p>
            </section>

            {/* 5. User Content, Data, and Licenses */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. User Content, Data, and Licenses</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                &ldquo;User Content&rdquo; means any prompts, data, code, text, images, files, or other materials you upload, submit, or input into the Services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>Ownership:</strong> You retain all ownership rights in your User Content, subject to the licenses granted herein.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>License to AppNode:</strong> By submitting User Content, you grant AppNode a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid-up, sublicensable, and transferable license to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Host, store, process, reproduce, modify, distribute, display, and perform User Content as necessary to provide, maintain, and improve the Services.</li>
                <li>Use User Content to detect, prevent, and mitigate abuse, fraud, security threats, or violations of these Terms.</li>
                <li>Anonymize, aggregate, or de-identify User Content for analytical purposes, including to train, fine-tune, or improve our AI Systems, models, algorithms, and services.</li>
                <li>Comply with legal obligations, respond to subpoenas, or enforce our rights.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You represent and warrant that: (i) you have all necessary rights, consents, and permissions to submit User Content and grant the above licenses; (ii) User Content does not infringe any third-party rights (e.g., intellectual property, privacy); and (iii) User Content complies with all applicable laws.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We do not sell your User Content to third parties. However, we may share anonymized or aggregated data with partners for research or improvement purposes, provided it cannot be reasonably re-identified to you.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>Data Processing:</strong> Our processing of User Content is further governed by our Privacy Policy. You consent to the transfer, storage, and processing of User Content in the United States or other jurisdictions where our servers or affiliates are located.
              </p>
            </section>

            {/* 6. Acceptable Use Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Acceptable Use Policy</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You agree to use the Services only for lawful purposes and in compliance with these Terms. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Violating any local, state, national, or international laws, regulations, or treaties.</li>
                <li>Infringing or misappropriating any intellectual property rights, including copyrights, trademarks, patents, trade secrets, or rights of publicity.</li>
                <li>Generating, distributing, or using the Services to create malicious code, viruses, malware, ransomware, spyware, or other harmful software.</li>
                <li>Engaging in unauthorized access, hacking, probing, scanning, or exploiting vulnerabilities in the Services or any related systems.</li>
                <li>Attempting to scrape, extract, reverse engineer, decompile, disassemble, or otherwise derive source code, algorithms, or proprietary information from the Services or AI Systems.</li>
                <li>Bypassing, circumventing, or interfering with any security measures, rate limits, usage quotas, or access controls.</li>
                <li>Creating multiple Accounts for abusive purposes, automating Account creation, or using bots/scripts to interact with the Services without authorization.</li>
                <li>Uploading or generating content that is illegal, obscene, defamatory, harassing, threatening, discriminatory, hateful, or promotes violence, terrorism, or harm to others.</li>
                <li>Interfering with, disrupting, or overloading the Services, including denial-of-service attacks, spamming, or excessive resource consumption.</li>
                <li>Using the Services for high-risk activities, such as automated decision-making in employment, credit, housing, or legal contexts, without human oversight.</li>
                <li>Exporting or re-exporting the Services or AI Outputs in violation of U.S. export control laws (e.g., EAR, ITAR).</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may monitor, review, or analyze your use of the Services to enforce this policy, detect violations, or improve the Services. Violations may result in immediate suspension or termination of your Account, without refund or liability.
              </p>
            </section>

            {/* 7. Subscriptions, Billing, Fees, and Payments */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Subscriptions, Billing, Fees, and Payments</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Certain Services require a paid subscription (&ldquo;Subscription&rdquo;). By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Pay all applicable fees, taxes, and charges (&ldquo;Fees&rdquo;) in U.S. dollars via the payment method you provide.</li>
                <li>Authorize automatic recurring billing for Subscriptions, which renew automatically unless canceled at least 24 hours before the renewal date.</li>
                <li>Provide accurate, complete, and current billing information and promptly update it as needed.</li>
                <li>Accept responsibility for any overdraft, insufficient funds, or other charges incurred due to payment failures.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Fees may include fixed subscription costs, usage-based charges (e.g., per API call, compute hour, or storage GB), or overage fees for exceeding plan limits. We may adjust Fees at any time upon notice, and continued use constitutes acceptance.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Failure to pay Fees may result in suspension or termination of your Account, with all outstanding balances remaining due and payable.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>Refunds:</strong> All Fees are non-refundable except as required by applicable law or explicitly stated in a separate Refund Policy. Partial refunds for unused portions of Subscriptions are not provided.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We use third-party payment processors (e.g., Stripe) and are not liable for their actions, errors, or security breaches.
              </p>
            </section>

            {/* 8. Rate Limits, Quotas, and Resource Usage */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Rate Limits, Quotas, and Resource Usage</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                To ensure fair usage and system stability, we may impose rate limits, usage quotas, computational restrictions, or other controls on the Services (e.g., maximum API requests per minute, total compute credits per month).
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Exceeding limits may result in throttling, additional Fees, suspension, or termination.</li>
                <li>You agree not to attempt to circumvent these limits.</li>
                <li>Resource-intensive activities (e.g., large-scale data processing) may be subject to prior approval.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We are not liable for any losses arising from enforcement of these limits.
              </p>
            </section>

            {/* 9. Intellectual Property Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Intellectual Property Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                All rights, title, and interest in and to the Services, including but not limited to software, AI Systems, models, algorithms, databases, user interfaces, branding, trademarks, logos, documentation, and any improvements or derivatives thereof (collectively, &ldquo;AppNode IP&rdquo;), are and shall remain the exclusive property of AppNode or its licensors.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You are granted a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your internal purposes, subject to these Terms. This license terminates upon any violation or termination of these Terms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Copy, modify, adapt, translate, distribute, sell, lease, rent, or create derivative works of any AppNode IP.</li>
                <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices.</li>
                <li>Use AppNode IP in any manner that could confuse consumers or imply endorsement.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Any feedback, suggestions, or ideas you provide regarding the Services (&ldquo;Feedback&rdquo;) shall be owned by AppNode, and you grant us a perpetual, irrevocable license to use, incorporate, or commercialize such Feedback without compensation or attribution.
              </p>
            </section>

            {/* 10. Confidentiality */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Confidentiality</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You may have access to non-public information about the Services, including technical specifications, system architecture, pricing details, security protocols, or proprietary technology (&ldquo;Confidential Information&rdquo;). You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Maintain the confidentiality of Confidential Information using at least the same degree of care as you use for your own confidential information.</li>
                <li>Not disclose, reproduce, or use Confidential Information except as necessary to use the Services.</li>
                <li>Return or destroy Confidential Information upon request or termination.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This obligation survives termination of these Terms for five (5) years or indefinitely for trade secrets.
              </p>
            </section>

            {/* 11. Termination and Suspension */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Termination and Suspension</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may suspend or terminate your access to the Services, in whole or in part, at any time, with or without notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Violation of these Terms or applicable laws.</li>
                <li>Non-payment of Fees.</li>
                <li>Security risks, fraud, or abuse.</li>
                <li>Legal requirements or government orders.</li>
                <li>Protection of our infrastructure, users, or third parties.</li>
                <li>Inactivity for an extended period (e.g., 6 months).</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Your license to use the Services ceases immediately.</li>
                <li>All outstanding Fees become due and payable.</li>
                <li>We may delete or anonymize your User Content and data after a reasonable retention period (e.g., 30 days), subject to Section 12.</li>
                <li>You must cease all use of AI Outputs and AppNode IP.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Termination does not relieve you of any obligations accrued prior to termination. Sections that by their nature should survive (e.g., disclaimers, limitations of liability, indemnification) shall survive.
              </p>
            </section>

            {/* 12. Data Retention and Deletion */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Data Retention and Deletion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may retain your User Content, Account data, and usage logs after termination or suspension for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Legal compliance (e.g., responding to subpoenas or audits).</li>
                <li>Fraud prevention, dispute resolution, or enforcement of these Terms.</li>
                <li>Security investigations or backup purposes.</li>
                <li>As required by our Privacy Policy.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Data deletion requests must be submitted in writing, but we are not obligated to delete data retained for legitimate purposes. Deletion timelines are outlined in our Privacy Policy. We are not liable for any data loss.
              </p>
            </section>

            {/* 13. Disclaimer of Warranties */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Disclaimer of Warranties</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase font-semibold">
                THE SERVICES, AI SYSTEMS, AND AI OUTPUTS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. APPNODE EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4 uppercase font-semibold">
                <li>MERCHANTABILITY.</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE.</li>
                <li>NON-INFRINGEMENT.</li>
                <li>ACCURACY, COMPLETENESS, TIMELINESS, OR RELIABILITY OF AI OUTPUTS OR SERVICES.</li>
                <li>UNINTERRUPTED, SECURE, VIRUS-FREE, OR ERROR-FREE OPERATION.</li>
                <li>COMPATIBILITY WITH YOUR SYSTEMS OR THIRD-PARTY SERVICES.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed uppercase font-semibold">
                WE DO NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR ACHIEVE ANY INTENDED RESULTS. NO ADVICE OR INFORMATION FROM US SHALL CREATE ANY WARRANTY.
              </p>
            </section>

            {/* 14. Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">14. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL APPNODE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITIES, OR USE, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase font-semibold">
                APPNODE SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4 uppercase font-semibold">
                <li>YOUR RELIANCE ON AI OUTPUTS.</li>
                <li>INTERRUPTIONS, DELAYS, OR FAILURES OF THE SERVICES.</li>
                <li>THIRD-PARTY CONTENT, SERVICES, OR INTEGRATIONS.</li>
                <li>UNAUTHORIZED ACCESS TO YOUR ACCOUNT OR DATA.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 uppercase font-semibold">
                OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL FEES PAID BY YOU TO APPNODE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (USD $100).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These limitations apply notwithstanding any failure of essential purpose of any limited remedy.
              </p>
            </section>

            {/* 15. Indemnification */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">15. Indemnification</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless AppNode, its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, demands, actions, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising from or related to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4">
                <li>Your use or misuse of the Services or AI Outputs.</li>
                <li>Your User Content, including any infringement of third-party rights.</li>
                <li>Your violation of these Terms, applicable laws, or third-party rights.</li>
                <li>Any deployment, distribution, or reliance on AI Outputs by you or third parties.</li>
                <li>Disputes between you and any third party related to the Services.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to assume control of the defense of any claim at our expense, and you agree to cooperate fully. You may not settle any claim without our prior written consent.
              </p>
            </section>

            {/* 16. Force Majeure */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">16. Force Majeure</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                AppNode shall not be liable for any delay, failure to perform, or interruption of the Services caused by events beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, wars, terrorism, riots, embargoes, government actions, labor strikes, cyberattacks, internet or utility outages, supply chain disruptions, or third-party failures.
              </p>
            </section>

            {/* 17. Dispute Resolution and Arbitration */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">17. Dispute Resolution and Arbitration</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Any dispute, claim, or controversy arising from or related to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, rather than in court. The arbitration shall be conducted in San Francisco, California, by a single arbitrator.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You waive any right to participate in class actions, class arbitrations, or representative actions. Judgment on the arbitration award may be entered in any court of competent jurisdiction.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Notwithstanding the above, we may seek injunctive or equitable relief in any court to enforce intellectual property rights or prevent irreparable harm.
              </p>
            </section>

            {/* 18. Governing Law and Jurisdiction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">18. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of laws principles.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You irrevocably consent to the exclusive jurisdiction and venue of the state and federal courts located in San Francisco, California, for any disputes not subject to arbitration.
              </p>
            </section>

            {/* 19. Miscellaneous Provisions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">19. Miscellaneous Provisions</h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force.</li>
                <li><strong>Waiver:</strong> No waiver of any term shall be deemed a further or continuing waiver.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign them freely.</li>
                <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any referenced policies, constitute the entire agreement between you and AppNode.</li>
                <li><strong>Notices:</strong> Notices to us must be sent to [Insert Email]. Notices to you may be sent via email or posted on the Services.</li>
                <li><strong>Export Controls:</strong> You agree to comply with all U.S. export laws and not to use the Services for prohibited end-uses.</li>
                <li><strong>No Third-Party Beneficiaries:</strong> These Terms do not confer rights on any third parties.</li>
                <li><strong>Headings:</strong> Section headings are for convenience only and do not affect interpretation.</li>
              </ul>
            </section>

            {/* 20. Modifications to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">20. Modifications to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may update these Terms at any time by posting the revised version on our website or notifying you via email or in-app notice. Changes become effective immediately upon posting, except for material changes affecting your rights, which shall become effective 30 days after notice.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your continued use of the Services after any changes constitutes your binding acceptance. If you do not agree to changes, you must terminate your use immediately.
              </p>
            </section>

            {/* 21. Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">21. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                For questions, support, or notices:
              </p>
              <div className="mt-4 p-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">AppNode Inc.</p>
                <p className="text-gray-600 dark:text-gray-400">Email: contact@appnode.ai</p>
                <p className="text-gray-600 dark:text-gray-400">Website: appnode.ai</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
