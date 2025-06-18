'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { sales } from '@/lib/data';
import { SaleStatus } from '@/types';
import SalesCard from './sales-card';

const statuses: (SaleStatus | 'all')[] = [
    'all',
    'new',
    'confirmed',
    'shipped',
    'delivered',
];

const SalesList = () => {
    const [filter, setFilter] = useState<SaleStatus | 'all'>('all');

    const filteredSales =
        filter === 'all'
            ? sales
            : sales.filter((sale) => sale.status === filter);

    return (
        <section>
            <div className='space-y-2 mb-7'>
                <h3 className='text-sm text-muted-foreground font-semibold'>
                    Status
                </h3>
                <ul className='flex items-center gap-2'>
                    {statuses.map((status) => {
                        return (
                            <li key={status}>
                                <Button
                                    variant={
                                        filter === status
                                            ? 'default'
                                            : 'outline'
                                    }
                                    onClick={() => setFilter(status)}
                                >
                                    {status.charAt(0).toUpperCase() +
                                        status.slice(1)}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <ul className='flex flex-col gap-5'>
                {filteredSales.map((sale) => {
                    return (
                        <li key={sale.id} className='last:mb-5'>
                            <SalesCard sale={sale} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default SalesList;
