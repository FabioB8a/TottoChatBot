import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chat from '@/components/Chat'

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
      <body className={inter.className}>
        <Chat/>
        {children}
        </body>
    </html>
  )
}
