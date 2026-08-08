import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CampusMesh',
  description: 'Connecting campuses with resilient, offline-first mesh networks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
