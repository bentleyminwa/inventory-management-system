'use client';

import { useState } from 'react';
import Account from './account';
import Logo from './logo';
import NavItems from './nav-items';

export default function Sidebar() {
    const [panelOpen, setPanelOpen] = useState(true);

    return (
        <aside className='bg-secondary h-screen px-5 py-5 flex flex-col justify-between'>
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
