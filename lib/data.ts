import { Purchase, Sale, Supplier } from '@/types';

export const wines = [
    {
        name: 'Cabernet 2022',
        type: 'Red',
        vintage: 2022,
        stock: 480,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 22.5,
    },
    {
        name: 'Chardonnay 2021',
        type: 'White',
        vintage: 2021,
        stock: 210,
        status: 'Low Stock',
        bottleSize: '750ml',
        pricePerUnit: 19.0,
    },
    {
        name: 'Pinot Noir 2021',
        type: 'Red',
        vintage: 2021,
        stock: 180,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 25.0,
    },
    {
        name: 'Sauvignon Blanc 2022',
        type: 'White',
        vintage: 2021,
        stock: 300,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 18.0,
    },
];

export const sales: Sale[] = [
    {
        id: 'so_001',
        customerName: 'Olive Grove Bistro',
        date: '2025-06-01',
        items: [
            { wineId: 'wine_1', quantity: 60 },
            { wineId: 'wine_2', quantity: 40 },
        ],
        total: 2280.0,
        status: 'new',
    },
    {
        id: 'so_002',
        customerName: 'The Wine Cellar',
        date: '2025-06-02',
        items: [
            { wineId: 'wine_3', quantity: 120 },
            { wineId: 'wine_4', quantity: 80 },
        ],
        total: 1080.0,
        status: 'confirmed',
    },
    {
        id: 'so_003',
        customerName: 'The Wine Cellar',
        date: '2025-06-03',
        items: [
            { wineId: 'wine_1', quantity: 120 },
            { wineId: 'wine_2', quantity: 80 },
        ],
        total: 1320.0,
        status: 'shipped',
    },
    {
        id: 'so_004',
        customerName: 'Olive Grove Bistro',
        date: '2025-06-04',
        items: [
            { wineId: 'wine_3', quantity: 60 },
            { wineId: 'wine_4', quantity: 40 },
        ],
        total: 660.0,
        status: 'delivered',
    },
];

export const purchases: Purchase[] = [
    {
        id: 'po_001',
        supplierId: 'sup_001',
        supplier: 'VinoCraft Co.',
        date: '2025-05-28',
        items: [
            { name: 'Oak Barrels', quantity: 10 },
            { name: 'Empty Bottles (750ml)', quantity: 1000 },
        ],
        status: 'recieved',
        total: 900.0,
    },
    {
        id: 'po_002',
        supplierId: 'sup_002',
        supplier: 'VinoVine Co.',
        date: '2025-05-29',
        items: [
            { name: 'Bottle Labels', quantity: 1000 },
            { name: 'Corks', quantity: 1000 },
        ],
        status: 'sent',
        total: 1200.0,
    },
    {
        id: 'po_003',
        supplierId: 'sup_002',
        supplier: 'VinoVine Co.',
        date: '2025-05-30',
        items: [
            { name: 'Bottle Caps', quantity: 1000 },
            { name: 'Wine Bottles (750ml)', quantity: 1000 },
        ],
        status: 'recieved',
        total: 1100.0,
    },
    {
        id: 'po_004',
        supplierId: 'sup_001',
        supplier: 'VinoCraft Co.',
        date: '2025-05-31',
        items: [
            { name: 'Wine Bottles (750ml)', quantity: 1000 },
            { name: 'Bottle Caps', quantity: 1000 },
        ],
        status: 'draft',
        total: 1100.0,
    },
];

export const suppliers: Supplier[] = [
    {
        id: 'sup_001',
        name: 'VinoCraft Co.',
        email: 'vinocraft@example.com',
        phone: '+1-234-567-890',
        address: '123 Wine Valley Rd, Napa, CA',
        website: 'https://www.vino-craft.com',
        coverImage: '/images/sp-1.png',
    },
    {
        id: 'sup_002',
        name: 'VinoVine Co.',
        email: 'vinovine@example.com',
        phone: '+1-234-567-891',
        address: '456 Grape Lane, Sonoma, CA',
        website: 'https://www.vino-vine.com',
        coverImage: '/images/sp-2.png',
    },
];

export const wineStockDistribution = [
    { wine: 'Red', bottles: 1200, fill: 'var(--color-chart-1)' },
    { wine: 'White', bottles: 900, fill: 'var(--color-chart-2)' },
    { wine: 'Rose', bottles: 400, fill: 'var(--color-chart-3)' },
    { wine: 'Sparkling', bottles: 250, fill: 'var(--color-chart-4)' },
];

export const monthlySales = [
    { month: 'Jan', bottlesSold: 500 },
    { month: 'Feb', bottlesSold: 620 },
    { month: 'Mar', bottlesSold: 570 },
    { month: 'Apr', bottlesSold: 800 },
    { month: 'May', bottlesSold: 740 },
    { month: 'Jun', bottlesSold: 680 },
];

export const topSellingWines = [
    { name: 'Cabernet Sauvignon 2022', bottlesSold: 680 },
    { name: 'Chardonnay Reserve 2021', bottlesSold: 540 },
    { name: 'Rosé Sparkle 2023', bottlesSold: 320 },
];
