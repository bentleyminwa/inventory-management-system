'use client';

import { useStore } from '@/hooks/useStore';

export default function SuppliersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { panelOpen } = useStore();

    return (
        <section
            className={`${
                panelOpen && 'ml-64'
            } flex-1 transition-all duration-300 ml-20 px-10`}
        >
            {children}
        </section>
    );
}
