'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { purchases } from '@/lib/data';
import { purchaseStatus } from '@/types';
import PurchaseCard from './purchase-card';

const statuses: (purchaseStatus | 'all')[] = [
    'all',
    'draft',
    'sent',
    'recieved',
];

const PurchaseList = () => {
    const [filter, setFilter] = useState<purchaseStatus | 'all'>('all');
    const [selectedSupplier, setSelectedSupplier] = useState<string>('all');

    const uniqueSuppliers = Array.from(
        new Set(purchases.map((purchase) => purchase.supplier))
    );

    console.log(uniqueSuppliers);

    const purchasesBySupplier =
        selectedSupplier === 'all'
            ? purchases
            : purchases.filter(
                  (purchase) => purchase.supplier === selectedSupplier
              );

    const filteredPurchases =
        filter === 'all'
            ? purchasesBySupplier
            : purchasesBySupplier.filter(
                  (purchase) => purchase.status === filter
              );

    return (
        <section>
            <div className='space-y-2 mb-7'>
                <h3 className='text-sm text-muted-foreground font-semibold'>
                    Suppliers
                </h3>
                <ul className='flex items-center gap-2'>
                    {uniqueSuppliers.map((supplier, index) => {
                        return (
                            <li key={index}>
                                <Button
                                    variant={
                                        selectedSupplier === supplier
                                            ? 'default'
                                            : 'outline'
                                    }
                                    onClick={() =>
                                        setSelectedSupplier(supplier)
                                    }
                                >
                                    {supplier.charAt(0).toUpperCase() +
                                        supplier.slice(1)}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </div>

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

            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {filteredPurchases.length === 0 ? (
                    <div>
                        <p>No Purchases found.</p>
                    </div>
                ) : (
                    filteredPurchases.map((purchase) => {
                        return (
                            <li key={purchase.id} className='last:mb-5'>
                                <PurchaseCard purchase={purchase} />
                            </li>
                        );
                    })
                )}
            </ul>
        </section>
    );
};

export default PurchaseList;
