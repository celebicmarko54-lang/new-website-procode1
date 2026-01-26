'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black transition-colors">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium mb-4">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-gray-500 dark:text-gray-400">Last updated: December 1, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By accessing or using AppNode&apos;s services, website, or any applications (collectively, the &quot;Services&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
                please do not use our Services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We may modify these Terms at any time. Your continued use of the Services after any such changes 
                constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                AppNode provides an AI-powered platform that enables users to create web applications through 
                natural language prompts. Our Services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>AI-assisted application development tools</li>
                <li>Code generation and export capabilities</li>
                <li>Hosting and deployment services</li>
                <li>Collaboration features</li>
                <li>Template and component libraries</li>
                <li>Educational resources and documentation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To access certain features of our Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 13 years old to create an account. If you are under 18, you must have 
                parental or guardian consent to use our Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content and Ownership</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                <strong>Your Content:</strong> You retain ownership of all content, applications, and code you 
                create using our Services (&quot;User Content&quot;). You grant AppNode a limited license to host, store, 
                and display your User Content as necessary to provide the Services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Code Export:</strong> You may export and use the code generated through our platform 
                in accordance with your subscription plan. Exported code is yours to use, modify, and distribute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Responsibility:</strong> You are solely responsible for your User Content and must ensure 
                it does not violate any laws or third-party rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Create or distribute malicious software or content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Generate content that is illegal, harmful, or offensive</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription and Payments</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some features of our Services require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Pay all applicable fees for your chosen plan</li>
                <li>Provide accurate billing information</li>
                <li>Accept automatic renewal unless cancelled</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Refunds are provided in accordance with our refund policy. Prices may change with 30 days' notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Services, including all content, features, and functionality, are owned by AppNode and 
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of our Services without our 
                prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, 
                SECURE, OR ERROR-FREE. YOU USE THE SERVICES AT YOUR OWN RISK.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AppNode SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER 
                INTANGIBLE LOSSES.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Services at any time, without 
                prior notice, for conduct that we believe violates these Terms or is harmful to other users, 
                us, or third parties, or for any other reason.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the Services will immediately cease. You may export your 
                data before termination in accordance with your subscription plan.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                California, United States, without regard to its conflict of law provisions. Any disputes 
                arising under these Terms shall be resolved in the courts of San Francisco, California.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">AppNode Inc.</p>
                <p className="text-gray-600 dark:text-gray-400">Email: legal@appnode.dev</p>
                <p className="text-gray-600 dark:text-gray-400">Address: 123 Innovation Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
