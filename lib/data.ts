export const wines = [
    {
        id: 'wine_1',
        name: 'Cabernet 2022',
        imageSrc: '/images/wine1.jpg',
        type: 'Red',
        vintage: 2022,
        stock: 480,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 22.5,
    },
    {
        id: 'wine_2',
        name: 'Chardonnay 2021',
        imageSrc: '/images/wine2.jpg',
        type: 'White',
        vintage: 2021,
        stock: 210,
        status: 'Low Stock',
        bottleSize: '750ml',
        pricePerUnit: 19.0,
    },
    {
        id: 'wine_3',
        name: 'Pinot Noir 2021',
        imageSrc: '/images/wine3.jpg',
        type: 'Red',
        vintage: 2021,
        stock: 180,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 25.0,
    },
    {
        id: 'wine_4',
        name: 'Sauvignon Blanc 2022',
        imageSrc: '/images/wine4.jpg',
        type: 'White',
        vintage: 2021,
        stock: 300,
        status: 'In Stock',
        bottleSize: '750ml',
        pricePerUnit: 18.0,
    },
];

export const salesOrders = [
    {
        id: 'so_001',
        customerName: 'Olive Grove Bistro',
        date: '2025-06-01',
        items: [
            { wineId: 'wine_1', quantity: 60 },
            { wineId: 'wine_2', quantity: 40 },
        ],
        total: 2280.0,
        status: 'Shipped',
    },
];

export const purchaseOrders = [
    {
        id: 'po_001',
        supplierId: 'sup_001',
        date: '2025-05-28',
        items: [
            { itemName: 'Oak Barrels', quantity: 10 },
            { itemName: 'Empty Bottles (750ml)', quantity: 1000 },
        ],
        status: 'Received',
        total: 900.0,
    },
];

export const suppliers = [
    {
        id: 'sup_001',
        name: 'VinoCraft Co.',
        contact: 'vinocraft@example.com',
        phone: '+1-234-567-890',
        address: '123 Wine Valley Rd, Napa, CA',
    },
];
