'use client'
import { Jost } from 'next/font/google'
import '@/libs/styles/global.css'

const jostFont = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={jostFont.className}>{children}</body>
    </html>
  )
}
