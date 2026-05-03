export default function Home() {
  const faqs = [
    {
      q: 'How does invoice parsing work?',
      a: 'Upload PDF or CSV invoices and we extract amounts, dates, and client info automatically using pattern recognition.'
    },
    {
      q: 'Which tax formulas are used?',
      a: 'We use current IRS Schedule SE and Form 1040-ES formulas, updated each tax year, covering self-employment and income taxes.'
    },
    {
      q: 'Can I generate official payment vouchers?',
      a: 'Yes. Export IRS-formatted 1040-ES payment vouchers as PDFs ready to mail or use for EFTPS payments.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Freelancers & Contractors
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Calculate Quarterly Taxes from<br />
          <span className="text-[#58a6ff]">Contractor Invoices</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your invoices, track deductions, and get accurate quarterly tax estimates with IRS-ready payment vouchers — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Invoice parsing</span>
          <span>✓ IRS formulas</span>
          <span>✓ PDF vouchers</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">PRO</div>
          <div className="flex items-end gap-1 mb-4">
            <span className="text-4xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span>
              <span>Unlimited invoice uploads (PDF & CSV)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span>
              <span>Automated quarterly tax estimates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span>
              <span>Deduction tracking & categorization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span>
              <span>IRS 1040-ES payment voucher PDFs</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span>
              <span>Quarterly deadline reminders</span>
            </li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
          <p className="text-center text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} Contractor Invoice Tax Calculator. Built for freelancers.</p>
      </footer>
    </main>
  )
}
