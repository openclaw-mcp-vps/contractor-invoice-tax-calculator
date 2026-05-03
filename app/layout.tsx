import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Invoice Tax Calculator',
  description: 'Calculate quarterly taxes from contractor invoices automatically. Track deductions, generate payment vouchers, and never miss an IRS deadline.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f1039757-8b1b-4acc-8606-ff6a22b685e8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
