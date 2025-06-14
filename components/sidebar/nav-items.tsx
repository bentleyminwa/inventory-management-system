'use client';

import { navItems } from '@/config/site-config';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemsProps {
    panelOpen: boolean;
}

export default function NavItems({ panelOpen }: NavItemsProps) {
    const pathname = usePathname();

    return (
        <nav className='mt-10'>
            <ul className='flex flex-col gap-3'>
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                className={clsx(
                                    'flex items-center gap-3 py-2 rounded-lg transition-all duration-200 ease-in-out',
                                    {
                                        'bg-accent': isActive,
                                        'hover:bg-accent': !isActive,
                                    }
                                )}
                            >
                                <span className={!panelOpen ? 'px-2' : 'pl-2'}>
                                    {item.icon}
                                </span>
                                {panelOpen && (
                                    <span className='font-semibold text-sm'>
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
