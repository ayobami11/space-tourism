import './globals.css';

import { Metadata } from 'next';

import { barlow, barlow_condensed, bellefair } from './fonts';

import Header from './components/header/Header';

import { AppContextProvider } from './contexts/app';

export const metadata: Metadata = {
  title: {
    template: 'Space Tourism | %s',
    default: 'Space Tourism'
  },
  description: 'This project is a collaboration between Frontendmentor, Scrimba, and Kevin Powell, by Ayobami Tunwase.',
  applicationName: 'Space Tourism',
  keywords: ['Next.js', 'React', 'JavaScript', 'Space', 'Tourism'],
  authors: [{ name: 'Ayobami Tunwase', url: 'https://github.com/ayobami11' }],
  colorScheme: 'dark',
  openGraph: {
    title: 'Space Tourism',
    description: 'This project is a collaboration between Frontendmentor, Scrimba, and Kevin Powell, by Ayobami Tunwase.',
    siteName: 'Space Tourism',
    // url: '',
    locale: 'en-US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}>
      <body className='bodyText'>
        <AppContextProvider>
          <Header />
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
  )
}
