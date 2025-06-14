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
        <html lang='en'>
            <body className={`${quicksand.className} antialiased flex`}>
                <Sidebar />
                <main className='bg-gray-50 text-secondary-foreground'>
                    {children}
                </main>
            </body>
        </html>
    );
}
