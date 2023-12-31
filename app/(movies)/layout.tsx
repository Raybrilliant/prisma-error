import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <section className='p-15'>
    {children}
    </section>
    </>
  )
}
