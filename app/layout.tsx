import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layout/Header'
import Footer from './layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neo Blog App',
  description: 'A modern and dynamic blog application that enables users to create, share, and explore engaging content effortlessly.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}