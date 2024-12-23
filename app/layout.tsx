import React from 'react'
import type { Viewport } from 'next'
import { Antonio, Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const antonio = Antonio({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={antonio.className}>{children}</body>
      <script
        defer
        src='https://umami.substorm.cc/script.js'
        data-website-id='131418ba-085b-49e4-930d-07b400acda33'
      ></script>
    </html>
  )
}

import { Metadata } from 'next'
export const metadata: Metadata = {
  openGraph: {
    title: 'Filmmaker',
    description: "You're gonna carry that weight",
    url: 'https://KaterinaErnst.com',
    siteName: 'Katerina Ernst',
    images: [
      {
        url: 'https://www.katerinaernst.com/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Katerina Ernst Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  title: 'Katerina Ernst Filmmaker',
  description: "Katerina Ernst, filmmaker's portfolio.",
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  userScalable: false,
}
