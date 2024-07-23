import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
const play = Play({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
    title: 'Ecam Resources',
    description: 'Access all the latest Ecam Resources',
    publisher: 'Ecam',
    authors: [
        {
            name: 'Mohit',
            url: 'https://ecam-resources.vercel.app/',
        },
    ],
    creator: 'Mohit',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Ecam Resources',
        description: 'Access all the latest Ecam Resources',
        url: 'https://ecam-resources.vercel.app/',
        siteName: 'Ecam Resources',
        locale: 'en-US',
        type: 'website',
    },
    icons: {
        shortcut: '/favicon.ico',
    },
    keywords: [
        'Study',
        'ECAM',
        'ecam',
        'ecam resources',
        'Ecam resources',
        'Nsut',
        'nsut',
        'NSUT',
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={play.className}>
                <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gradient-to-br from-zinc-900 via-neutral-950 to-gray-950 py-6">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
