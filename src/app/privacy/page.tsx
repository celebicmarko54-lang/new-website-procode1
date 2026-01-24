'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-gray-50 text-gray-900 rounded-full text-sm font-medium mb-4">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: December 1, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Procode. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and use our services, and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This privacy policy applies to all information collected through our website, mobile applications, 
                and any related services, sales, marketing, or events (collectively, the "Services").
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (avatar, bio, preferences)</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Content you create using our platform</li>
                <li>Communications with us (support requests, feedback)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We also automatically collect certain information when you use our Services, including your IP address, 
                browser type, operating system, device information, and usage data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and receive a copy of your data</li>
                <li>Rectify or update your personal data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to collect and track information about your browsing 
                activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Services are not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If we learn we have collected personal information from a child under 13, 
                we will delete that information promptly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy 
                policy periodically for any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 font-medium">Procode Inc.</p>
                <p className="text-gray-600">Email: privacy@Procode.dev</p>
                <p className="text-gray-600">Address: 123 Innovation Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
