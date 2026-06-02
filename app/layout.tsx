import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/AuthContext'

export const metadata: Metadata = {
  title: 'Quest — A Journey to Solid Faith',
  description:
    'A step-by-step journey through Norman Geisler\'s Twelve Points of classical apologetics, contextualised for young Christians in Singapore.',
  openGraph: {
    title: 'Quest — A Journey to Solid Faith',
    description: 'Truth is worth the quest. 12 stages. Rock-solid answers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
