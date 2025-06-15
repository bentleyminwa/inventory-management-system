'use client';

import InventoryTable from '@/components/dashboard/inventory-table';
import ReportingCharts from '@/components/dashboard/reporting-charts';
import { dashboardLinks } from '@/config/site-config';
import clsx from 'clsx';
import { ChartColumn, List } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
    const [viewTab, setViewTab] = useState(0);

    const toggleViewTab = (tab: number) => {
        setViewTab(tab);
    };

    return (
        <main className='w-11/12 mx-auto'>
            <header className='my-10 space-y-10'>
                <h1 className='text-2xl'>
                    Welcome Back,{' '}
                    <span className='font-semibold text-primary'>Quan!</span>
                </h1>
                <div className='grid grid-cols-4 gap-4'>
                    {dashboardLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.path}
                            className='border rounded-lg p-5 space-y-3 hover:bg-accent/50 transition-all duration-200 ease-in-out'
                        >
                            <h3>{link.icon}</h3>
                            <h3 className='font-semibold'>{link.label}</h3>
                            <p className='text-sm text-muted-foreground'>
                                {link.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </header>

            <section className='border-b flex gap-8 text-sm text-muted-foreground my-10'>
                <h3
                    className={clsx(
                        'pb-3 flex items-end gap-2 cursor-pointer',
                        {
                            'border-b border-b-primary text-primary font-semibold':
                                viewTab === 0,
                        }
                    )}
                    onClick={() => toggleViewTab(0)}
                >
                    <span>
                        <List />
                    </span>
                    Inventory
                </h3>
                <h3
                    className={clsx(
                        'pb-3 flex items-end gap-2 cursor-pointer',
                        {
                            'border-b border-b-primary text-primary font-semibold':
                                viewTab === 1,
                        }
                    )}
                    onClick={() => toggleViewTab(1)}
                >
                    <span>
                        <ChartColumn />
                    </span>
                    Reporting
                </h3>
            </section>

            {viewTab === 0 ? <InventoryTable /> : <ReportingCharts />}
        </main>
    );
}
