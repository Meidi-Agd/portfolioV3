import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Meidi Augendre',
  description: 'Je suis étudiant en développement Web dans l’optique d’être développeur fullstack',
  author: 'Meidi augendre',
  keywords: 'augendre, meidi, developpeur, nevers, fullstack, web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
