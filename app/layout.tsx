import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/AuthContext'

export const metadata: Metadata = {
  title: 'Rooted — A Faith Foundation Journey',
  description:
    'A step-by-step journey through Norman Geisler\'s Twelve Points of classical apologetics, contextualised for young Christians in Singapore.',
  openGraph: {
    title: 'Rooted — A Faith Foundation Journey',
    description: 'Build your faith on solid ground. 12 points. Rock-solid logic.',
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
