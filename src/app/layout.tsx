import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chat from '@/components/tottico/Chat'
import Providers from '@/components/logic/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TOTTICO por el mundo',
  description: 'TOTTICO por el mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat/>
          {children}
          </body>
      </Providers>
    </html>
  )
}
