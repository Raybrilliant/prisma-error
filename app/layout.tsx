import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Gabutverse',
  description: 'Free watch movies, Situs nonton film gratis',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <body className='container' >
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
