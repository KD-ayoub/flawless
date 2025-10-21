import React from 'react'
import { geistSans } from '../../layout'

export default function page() {
  return (
    <div className="text-black mt-10 lg:mt-16 mx-3 md:mx-10 xl:mx-20 mb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            className={`${geistSans.className} font-semibold text-[#9876EC] tracking-[-0.04em] text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-[100%] mb-4`}
          >
            Privacy Policy
          </h1>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/60 leading-[120%] tracking-[-0.04em] text-[16px] md:text-[18px] lg:text-[20px]`}
          >
            <strong>Last updated:</strong> October 20, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-6`}
          >
            This Privacy Policy explains how <strong>Flawless</strong> ("we", "us", "our") collects, uses, discloses, and protects Personal Data when you interact with our website, our services, and any related pages that link to this policy (together, the "Service"). It also describes your privacy rights and how to exercise them.
          </p>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}
          >
            By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              1) Who we are and how to contact us
            </h2>
            <ul className="space-y-3">
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">Controller:</span> Flawless, registered at [full address, country].
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">Email:</span> privacy@flawless.com
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">DPO or privacy contact:</span> [Name or Role, if any] at dpo@flawless.com
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              2) Scope and audience
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-4`}
            >
              This policy applies to:
            </p>
            <ul className="space-y-2 ml-4">
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Visitors to our website and landing pages
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Prospective, current, and former clients
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Newsletter subscribers and event attendees
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Applicants for roles and contractors who interact with us
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              3) Key definitions
            </h2>
            <ul className="space-y-3">
              {[
                { term: "Personal Data", definition: "Any information that identifies or can reasonably be linked to an individual." },
                { term: "Processing", definition: "Any operation performed on Personal Data, such as collection, storage, use, disclosure, or deletion." },
                { term: "Service Providers or Processors", definition: "Third parties who process Personal Data on our behalf." },
                { term: "Website", definition: "Our website and subdomains." },
                { term: "Client", definition: "An individual or organization engaging our branding, motion, or web development services." },
                { term: "Device Data or Usage Data", definition: "Information automatically collected from devices and browsers when you access the Service." }
              ].map((item, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <span className={`${geistSans.className} font-medium text-black text-[16px] md:text-[18px]`}>
                    {item.term}:
                  </span>
                  <span className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] ml-4`}>
                    {item.definition}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              4) What we collect
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-6`}
            >
              We collect the categories of data listed below. The exact fields depend on your relationship with us and your settings.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  4.1 Information you provide directly
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Contact and identity data:</span> name, email, phone, company, role, country
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Account credentials:</span> if we enable accounts on our site or client portals
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Project data:</span> briefs, references, copy, images, brand files, media assets, code or repositories you share
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Billing data:</span> billing address, tax IDs, payment method details handled via our payment processors
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Communications:</span> emails, messages, feedback, survey responses, testimonials, support requests
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  4.2 Information collected automatically
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Device and technical data:</span> IP address, browser type and version, OS, time zone, language
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Usage data:</span> page views, pages and files viewed, clicks, referring URLs, session duration
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Cookies and similar technologies:</span> see Section 9
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • <span className="font-medium">Error and performance logs:</span> load times, crashes, diagnostics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              5) Why we process data and legal bases
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-6`}
            >
              We process Personal Data for the purposes below. Where applicable laws require a legal basis, we rely on:
            </p>
            <ul className="space-y-2 ml-4 mb-6">
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • <span className="font-medium text-black">Contract:</span> to perform a contract or take steps at your request
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • <span className="font-medium text-black">Legitimate interests:</span> to operate, protect, and improve our Service
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • <span className="font-medium text-black">Consent:</span> where required for certain analytics, cookies, and marketing
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • <span className="font-medium text-black">Legal obligation:</span> to comply with laws, tax, accounting, and court orders
              </li>
            </ul>
          </section>

          {/* Important Notice Box */}
          <div className="bg-gradient-to-br from-[#9876EC]/5 to-[#6B46C1]/5 border border-[#9876EC]/20 rounded-[16px] p-6 my-8">
            <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
              🔒 Your Privacy Matters
            </h3>
            <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
              We are committed to protecting your privacy and only collect data necessary to provide our services. You have full control over your personal information and can exercise your rights at any time.
            </p>
          </div>

          {/* Section on Security */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              14) Security
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}
            >
              We use administrative, technical, and physical safeguards appropriate to the nature of the data, including access controls, encryption in transit, secure development practices, and vendor due diligence. No method is perfectly secure. If we believe a breach may affect your rights, we will notify you and regulators as required by law.
            </p>
          </section>

          {/* Section 15 - Your Rights */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              15) Your rights
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-4`}
            >
              Your rights depend on your location. Subject to legal limits, you may have the right to:
            </p>
            <ul className="space-y-2 ml-4 mb-6">
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Access your Personal Data
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Correct inaccurate data
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Delete data
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Restrict or object to processing
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Data portability
              </li>
              <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                • Withdraw consent where processing relies on consent
              </li>
            </ul>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}
            >
              <span className="font-medium text-black">How to exercise rights:</span> email privacy@flawless.com. We may need to verify your identity before responding.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[#9876EC]/5 to-[#6B46C1]/5 border border-[#9876EC]/20 rounded-[16px] p-8">
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-4`}
            >
              21) How to contact us
            </h2>
            <div className="space-y-3">
              <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">Email:</span> privacy@flawless.com
              </p>
              <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">Address:</span> [Full legal address]
              </p>
              <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 text-[16px] md:text-[18px]`}>
                <span className="font-medium text-black">Web form:</span> <a href="/privacy-request" className="text-black hover:underline">Submit a privacy request</a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              19) Changes to this policy
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}
            >
              We may update this policy from time to time. The updated version will be posted here with a new "Last updated" date. Material changes may be announced by email or a site notice. Your continued use of the Service means you accept the updated policy.
            </p>
          </section>
        </div>

        {/* Back to top or navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className={`${geistSans.className} font-normal text-[#0E0E0F]/60 text-[14px] md:text-[16px]`}>
            Have questions about this privacy policy? <a href="/contact" className="text-black hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  )
}