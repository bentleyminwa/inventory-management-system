import Sidebar from '@/components/sidebar';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Gran Cielo',
    description: 'Smart Inventory Management System for Gran Cielo Winery',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='overflow-x-hidden'>
            <body className={`${quicksand.className} antialiased`}>
                <main className='w-screen min-h-screen flex'>
                    <Sidebar />
                    <section className='bg-background text-secondary-foreground w-full'>
                        {children}
                    </section>
                </main>
            </body>
        </html>
    );
}
