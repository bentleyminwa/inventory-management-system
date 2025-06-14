import { Archive, Banknote, House, Truck, Wallet } from 'lucide-react';

export const navItems = [
    {
        id: 0,
        label: 'Dashboard',
        path: '/',
        icon: <House />,
    },
    {
        id: 1,
        label: 'Inventory',
        path: '/inventory',
        icon: <Archive />,
    },
    {
        id: 2,
        label: 'Sales Orders',
        path: '/sales-orders',
        icon: <Wallet />,
    },
    {
        id: 3,
        label: 'Purchase Orders',
        path: '/purchase-orders',
        icon: <Banknote />,
    },
    {
        id: 5,
        label: 'Suppliers',
        path: '/suppliers',
        icon: <Truck />,
    },
];
