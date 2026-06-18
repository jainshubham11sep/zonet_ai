'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FEF3DC] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#E8A020]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Privacy Policy</h1>
          </div>

          <div className="prose prose-lg text-[#4B5563] max-w-none">
            <p className="text-sm font-medium text-[#888888]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p className="mb-6 mt-6">Zonnetech (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy, security, and intellectual data of our clients, partners, and website visitors. This Privacy Policy governs our data collection, processing, and storage practices across our corporate website, communication channels, and technical development environments.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information across two main categories: data required to manage our business relationship, and technical telemetry data required to optimize our web infrastructure.</p>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">A. Personal and Corporate Identifiers</h3>
            <p className="mb-4">When you initiate contact, request a technical consultation, or enter into a development contract, we collect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Identity Data:</strong> Full name, corporate title, and company affiliation.</li>
              <li><strong>Contact Data:</strong> Corporate email address, telephone number, physical business address, and messaging handles (e.g., Slack, WhatsApp, or LinkedIn).</li>
              <li><strong>Project and Technical Specifications:</strong> Source code access (where authorized), UI blueprints, workflow descriptions, and system architecture diagrams shared during discovery phases.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">B. Automated Technical Telemetry</h3>
            <p className="mb-4">When you interact with our website, our infrastructure logs standard network data via cookies and server logs:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Device &amp; Usage Data:</strong> IP addresses, browser specifications, operating system versions, referring URLs, access times, and clickstream behaviour across our site architecture.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">2. Technical Data Architecture and System Isolation</h2>
            <p className="mb-4">As an engineering firm specializing in custom AI software, automated workflows, and data processing, we enforce strict boundaries regarding data separation:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Client System Isolation:</strong> Any data, API tokens, server credentials, or databases made accessible to Zonnetech during a development cycle or case study analysis remain under the exclusive ownership and control of the client.</li>
              <li><strong>Zero Proprietary Retention:</strong> We do not retain, copy, or scrape data processed through the custom software or AI tools we build for our clients unless explicitly required under a signed maintenance contract.</li>
              <li><strong>AI Data Training Boundaries:</strong> We strictly adhere to compliant development protocols. The custom AI models, LLM fine-tuning pipelines, and automation tools we build for you are configured to prevent data leakage. Client data is never used to train our proprietary tools or shared with unauthorized foundational model providers.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">3. Legal Grounds and Methods for Data Utilization</h2>
            <p className="mb-4">We process personal and operational data exclusively under the following legal frameworks:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Performance of a Contract:</strong> To draft proposals, manage code deployment milestones, and deliver contracted engineering services.</li>
              <li><strong>Legitimate Interests:</strong> To secure our network, prevent malicious traffic, optimize our web design layouts, and maintain clear communications regarding project timelines.</li>
              <li><strong>Explicit Consent:</strong> For featuring client case studies, verified performance reviews, and logos on our public-facing platforms.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">4. Information Sharing and Disclosure Restraints</h2>
            <p className="mb-4">Zonnetech enforces a zero-monetisation policy on data. <strong>We do not sell, lease, or trade corporate or personal information to third-party brokers or marketing networks.</strong> Information is only shared under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Subcontractors and Infrastructure Providers:</strong> We may share project technical telemetry with verified cloud infrastructure providers (e.g., AWS, Google Cloud) or encrypted project management tools under strict Non-Disclosure Agreements (NDAs).</li>
              <li><strong>Legal &amp; Compliance Mandates:</strong> We will disclose data if required by a court order, enforceable government request, or to protect the legal rights, safety, and security of Zonnetech and our engineering partners.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">5. Enterprise-Grade Security and Retention Protocols</h2>
            <p className="mb-4">Security is engineered directly into our daily operational workflows:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Data Protection:</strong> We utilize industry-standard encryption protocols for data in transit (TLS 1.3) and at rest (AES-256). Code repositories and client secrets are stored within secure, access-controlled environments utilizing multi-factor authentication (MFA).</li>
              <li><strong>Data Retention:</strong> We retain corporate identifiers and communication history for as long as necessary to fulfil our business contract, legal obligations, or resolve active disputes. Upon contract termination and request, all client-side technical assets are permanently purged from our active local development environments.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">6. International Data Transfers</h2>
            <p className="mb-6">Because we build global digital products, the data we process may be transferred to and maintained on servers located outside your state, province, or country. We employ robust cross-border data protection mechanisms, including Standard Contractual Clauses (SCCs), to ensure your data is treated with the same level of security wherever it is located.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">7. Your Statutory Rights</h2>
            <p className="mb-4">Depending on your operational jurisdiction (such as GDPR, CCPA, or regional data protection laws), you possess the following legal rights regarding your information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Right to Access &amp; Portability:</strong> Request a comprehensive breakdown of all personal data we retain.</li>
              <li><strong>Right to Rectification:</strong> Mandate the immediate correction of incomplete or inaccurate data.</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request the permanent deletion of your data from our internal databases, subject to legal or contractual retention overrides.</li>
              <li><strong>Right to Object/Restrict Processing:</strong> Limit how we process specific subsets of your operational data.</li>
            </ul>
            <p className="mb-6">To exercise any of these rights, submit a formal request to our privacy team at <strong>privacy@zonnetech.com</strong>.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">8. Updates to This Policy</h2>
            <p className="mb-6">We reserve the right to modify this Privacy Policy to reflect evolving technical frameworks, security standards, or international legal updates. Any changes will be published transparently on this page with an updated &ldquo;Effective Date.&rdquo;</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">9. Contact Information</h2>
            <p className="mb-6">For formal inquiries regarding our data handling methodologies, security compliance, or privacy standards, please contact our data supervisor:</p>
            <p className="mb-2"><strong>Zonnetech</strong> &mdash; Privacy &amp; Data Security Compliance</p>
            <p className="mb-6">Email: <strong>privacy@zonnetech.com</strong></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
