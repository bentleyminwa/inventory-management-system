import {
    Archive,
    Banknote,
    House,
    List,
    ShoppingBag,
    Store,
    Truck,
    Wallet,
    WalletCards,
} from 'lucide-react';

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

export const dashboardLinks = [
    {
        label: 'Inventory',
        path: '/inventory',
        icon: <List />,
        description: 'View and Manage all your Inventory',
    },
    {
        label: 'Sales Orders',
        path: '/sales-orders',
        icon: <WalletCards />,
        description: 'View all of your recent Sales',
    },
    {
        label: 'Purchase Orders',
        path: '/purchase-orders',
        icon: <ShoppingBag />,
        description: 'View your recent Purchase Orders',
    },
    {
        label: 'Suppliers',
        path: '/suppliers',
        icon: <Store />,
        description: 'Vendors we order from',
    },
];

export const orderStatus = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'New',
        value: 'new',
    },
    {
        label: 'Confirmed',
        value: 'confirmed',
    },
    {
        label: 'Shipped',
        value: 'shipped',
    },
    {
        label: 'Delivered',
        value: 'delivered',
    },
];
