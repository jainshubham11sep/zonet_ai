'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-serif">Terms &amp; Conditions</h1>
          </div>

          <div className="prose prose-lg text-[#4B5563] max-w-none">
            <p className="text-sm font-medium text-[#888888]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p className="mb-6 mt-6">Welcome to Zonnetech (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;), and Zonnetech, concerning your access to and use of our website, as well as any custom software development, AI automation workflows, consultation services, or digital products delivered by us (collectively, the &ldquo;Services&rdquo;).</p>

            <p className="mb-6">By accessing our website or engaging our Services, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using our Services or website.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">1. Scope of Services &amp; Development Framework</h2>
            <p className="mb-4">Zonnetech provides engineering services including custom AI software development, automated architecture workflows, UI/UX design, and end-to-end digital engineering.</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Statements of Work (SOW):</strong> Individual technical projects, milestones, delivery timelines, and financial compensation will be defined in separate, mutually executed Statements of Work or Service Agreements. The terms of any specific SOW will override these general Terms in the event of a conflict.</li>
              <li><strong>Project Specifications:</strong> We build engineering solutions based strictly on the technical blueprints and parameters agreed upon during the discovery phase. Any requests to change or modify these parameters after code implementation begins will be subject to our standard change-order review and may incur additional engineering fees.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">2. Client Obligations and Data Inputs</h2>
            <p className="mb-4">To ensure optimal performance and timely delivery of our custom systems, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Provide timely access to required development environments, clear technical specifications, secure API keys, or operational documentation as requested.</li>
              <li>Ensure that any assets, text, data models, or third-party integrations you provide do not infringe upon the intellectual property or data privacy rights of any third party.</li>
              <li>Maintain the security and confidentiality of any staging credentials or access portals provided to you by Zonnetech during the development life cycle.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">3. Financial Terms, Invoicing, and Milestone Payments</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Payment Architecture:</strong> Fees for our Services are structured based on the agreed-upon payment milestones defined in your specific SOW (e.g., discovery deposit, beta deployment, final handoff).</li>
              <li><strong>Invoicing and Late Fees:</strong> Invoices must be paid within the standard timeframe specified in your contract (typically net-15 days from the date of issuance). We reserve the right to pause all active development, pipeline processing, or system support if an invoice remains unpaid past its due date.</li>
              <li><strong>Taxes:</strong> You are responsible for all applicable regional, national, or international taxes associated with the purchase of our engineering Services, excluding taxes based strictly on Zonnetech&apos;s net corporate income.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">4. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">A. Zonnetech Core Code and Frameworks</h3>
            <p className="mb-6">We retain exclusive ownership, title, and intellectual property rights over our internal development methodologies, pre-existing code structures, baseline software libraries, generic AI training models, and proprietary automation architecture blueprints used across multiple projects (collectively, &ldquo;Zonnetech IP&rdquo;).</p>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">B. Client Deliverables and Custom Code</h3>
            <p className="mb-6">Upon successful completion of the project, fulfilment of all milestone criteria, and <strong>receipt of full final payment</strong>, ownership of the custom code, unique UI/UX layouts, and platform integrations engineered specifically for your product will transfer completely to you.</p>

            <h3 className="text-xl font-semibold text-[#1A1A1A] mt-6 mb-3">C. Case Studies and Marketing</h3>
            <p className="mb-6">Unless explicitly restricted via a signed Non-Disclosure Agreement (NDA) or a custom contract clause, you grant Zonnetech a non-exclusive, worldwide, royalty-free license to display your company name, brand logo, and generic project outcomes within our public portfolio, case studies, and marketing materials to demonstrate our engineering capabilities.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">5. Warranties and Technical Limitations</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Engineering Standards:</strong> Zonnetech guarantees that all code, scripts, and software frameworks will be built in a professional, workmanlike manner, aligning with standard modern engineering practices.</li>
              <li><strong>As-Is Platform Scope:</strong> Because software ecosystems rely on third-party integrations and evolving algorithms, our public website and unmaintained digital products are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind.</li>
              <li><strong>AI Output Disclaimers:</strong> For solutions incorporating generative AI models, machine learning algorithms, or automated data interpretation, Zonnetech does not warrant or guarantee absolute accuracy or predictable system outputs, as these behaviours are subject to external foundational model constraints.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by applicable law, in no event shall Zonnetech, its directors, employees, or tech partners be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages including lost profits, lost revenue, loss of data, or operational downtime arising from your use of our website or custom software, even if we have been advised of the possibility of such damages.</p>
            <p className="mb-6">Our total collective liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the total net amount paid by you to Zonnetech during the six (6) month period immediately preceding the event giving rise to the claim.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">7. Indemnification</h2>
            <p className="mb-4">You agree to defend, indemnify, and hold Zonnetech harmless from and against any loss, damage, liability, claim, or demand (including reasonable legal fees) made by any third party due to or arising out of:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Your misuse of any software or custom integrations built by us.</li>
              <li>A breach of your obligations regarding third-party data inputs or intellectual property laws.</li>
              <li>Malicious actions or security compromises originating from your internal corporate infrastructure or user endpoints.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">8. Term and Termination</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Duration:</strong> These Terms remain in full force and effect while you use our website or remain engaged under an active SOW.</li>
              <li><strong>Termination for Cause:</strong> Either party may terminate an active engineering agreement immediately if the other party commits a material breach of contract and fails to cure such breach within thirty (30) days of receiving written notice.</li>
              <li><strong>Survivals:</strong> Upon termination, all provisions of these Terms which by their nature should survive will do so, including but not limited to Intellectual Property ownership parameters, Liability Limitations, Indemnification clauses, and Payment obligations for completed milestones.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">9. Governing Law and Jurisdiction</h2>
            <p className="mb-6">These Terms and any separate service agreements shall be governed by and construed in accordance with the laws without regard to the conflict of law principles. Any legal action or dispute arising out of these Terms shall be brought exclusively in the courts located within that jurisdiction.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">10. Modifications to Terms</h2>
            <p className="mb-6">Zonnetech reserves the right, in our sole discretion, to make changes or modifications to these Terms at any time. We will alert you about any changes by updating the &ldquo;Effective Date&rdquo; at the top of this document. It is your responsibility to periodically review these Terms to stay informed of updates.</p>

            <h2 className="text-2xl font-semibold text-[#1A1A1A] mt-10 mb-4">11. Contact Us</h2>
            <p className="mb-4">To resolve a complaint regarding our Services, request technical clarification, or discuss custom terms for an enterprise-level engineering contract, please contact our legal team at:</p>
            <p className="mb-2"><strong>Zonnetech Solutions</strong> &mdash; Legal &amp; Contract Compliance</p>
            <p className="mb-6">Email: <strong>legal@zonnetech.com</strong></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
