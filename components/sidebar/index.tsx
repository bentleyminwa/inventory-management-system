'use client';

// import { useState } from 'react';
import { useStore } from '@/hooks/useStore';
import Account from './account';
import Logo from './logo';
import NavItems from './nav-items';

export default function Sidebar() {
    const { panelOpen, setPanelOpen } = useStore();

    return (
        <aside
            className={`${
                !panelOpen ? 'w-20' : 'w-64'
            } fixed bg-secondary h-screen px-5 py-5 flex flex-col justify-between border`}
        >
            <section>
                <Logo panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
                <NavItems panelOpen={panelOpen} />
            </section>
            <section>
                <Account panelOpen={panelOpen} />
            </section>
        </aside>
    );
}
