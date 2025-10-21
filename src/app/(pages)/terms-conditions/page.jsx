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
            Terms & Conditions
          </h1>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/60 leading-[120%] tracking-[-0.04em] text-[16px] md:text-[18px] lg:text-[20px]`}
          >
            <strong>Last updated:</strong> October 5, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-6`}
          >
            These Terms and Conditions govern your use of Flawless's website and your purchase of our services. By accessing the website or engaging Flawless, you agree to these Terms. If you do not agree, do not use the website and do not engage our services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              1) Interpretation and Definitions
            </h2>
            
            <h3
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-4`}
            >
              Interpretation
            </h3>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-6`}
            >
              Words with capitalized initial letters have meanings defined in this section. The definitions apply whether singular or plural.
            </p>

            <h3
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-4`}
            >
              Definitions
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                { term: "Company, Flawless, We, Us, Our", definition: "[Legal entity name], trading as Flawless. Registered address: [address]. Company number: [number]." },
                { term: "Client, You, Your", definition: "The individual or entity that uses the Website or engages Our services." },
                { term: "Website", definition: "[https://yourdomain.tld] and any subdomains." },
                { term: "Services", definition: "Branding, design, motion, web design, web development, related strategy, and any deliverables stated in a proposal, SOW, or order form." },
                { term: "Deliverables", definition: "The final outputs specified in the scope such as brand assets, design files, motion videos, source code, documents, and other materials." },
                { term: "Project", definition: "A one-off engagement with fixed scope." },
                { term: "Retainer", definition: "A recurring monthly allocation of Our capacity." },
                { term: "Order", definition: "Your acceptance of a proposal, SOW, or checkout that references these Terms." },
                { term: "Third-Party Materials", definition: "Fonts, stock media, software, frameworks, licenses, APIs, and other items created by others." }
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

          {/* Section 2 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              2) Website Terms of Use
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  2.1 Eligibility
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  You must be at least 18 years old or have a parent or guardian's supervision.
                </p>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  2.2 Acceptable Use
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  Use the Website only for lawful purposes. Do not disrupt the Website, attempt unauthorized access, or infringe the rights of others.
                </p>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  2.3 Intellectual Property on the Website
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  All content on the Website is owned by Flawless or its licensors and is protected by law. Do not copy, reuse, or distribute without prior written consent.
                </p>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  2.4 Links to Third Parties
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  The Website may link to third-party sites. We are not responsible for their content, policies, or practices.
                </p>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  2.5 Termination of Website Access
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  We may suspend or terminate access at any time for any reason, including breach of these Terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              3) Engagement Models and Scope of Services
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  3.1 Retainers
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • Retainers provide a recurring monthly capacity. The scope is flexible within that capacity.
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • Work that exceeds capacity can be added at Our then-current rate if You approve.
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • Retainers renew automatically each month unless canceled per Section 7.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  3.2 Projects
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • Fixed scope with defined deliverables and a set number of revision rounds stated in the proposal or SOW.
                  </li>
                  <li className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                    • Out-of-scope requests may be quoted separately at Our then-current rate.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  3.3 Custom or Multi-phase Work
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  Larger builds such as brand systems, design systems, web apps, and motion campaigns are structured with milestones, deliverables, and payment schedules.
                </p>
              </div>

              <div>
                <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
                  3.4 What Is Not Included Unless Stated
                </h3>
                <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
                  Ongoing maintenance, hosting, domain renewals, paid ads, SEO retainers, legal review, compliance audits, penetration testing, localization, copywriting, complex data migration, and content population beyond samples. These can be contracted separately.
                </p>
              </div>
            </div>
          </section>

          {/* Important Notice Box */}
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-[16px] p-6 my-8">
            <h3 className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[18px] md:text-[20px] mb-3`}>
              📋 Important Notice
            </h3>
            <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}>
              This document contains the complete terms and conditions. For specific questions about our services or to discuss custom arrangements, please contact us directly.
            </p>
          </div>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[#9876EC]/5 to-[#6B46C1]/5 border border-[#9876EC]/20 rounded-[16px] p-8">
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-4`}
            >
              18) Notices
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px] mb-4`}
            >
              Send legal notices to:
            </p>
            <div className="space-y-2">
              <p className={`${geistSans.className} font-semibold text-black text-[16px] md:text-[18px]`}>
                Flawless
              </p>
              <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 text-[16px] md:text-[18px]`}>
                Email: [legal@yourdomain.tld]
              </p>
              <p className={`${geistSans.className} font-normal text-[#0E0E0F]/80 text-[16px] md:text-[18px]`}>
                Address: [Full legal address]
              </p>
            </div>
          </section>

          {/* Final Sections */}
          <section>
            <h2
              className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] mb-6`}
            >
              20) Entire Agreement
            </h2>
            <p
              className={`${geistSans.className} font-normal text-[#0E0E0F]/80 leading-[150%] tracking-[-0.02em] text-[16px] md:text-[18px]`}
            >
              These Terms, together with any proposal, SOW, and Order, form the entire agreement for the Services and supersede prior discussions. If there is a conflict, the SOW or Order controls, then these Terms.
            </p>
          </section>
        </div>

        {/* Back to top or navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className={`${geistSans.className} font-normal text-[#0E0E0F]/60 text-[14px] md:text-[16px]`}>
            Have questions about these terms? <a href="/contact" className="text-[#9876EC] hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  )
}