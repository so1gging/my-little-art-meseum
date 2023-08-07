'use client'
import { Jost } from 'next/font/google'
import '@/libs/styles/global.css'
import styles from '@/libs/styles/layout.module.css'

const jostFont = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={styles.layout}>
      <body className={jostFont.className}>
        <div className={styles.body}>{children}</div>
      </body>
    </html>
  )
}
