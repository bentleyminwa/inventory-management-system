export type SaleStatus = 'new' | 'confirmed' | 'shipped' | 'delivered';

export type Sale = {
    id: string;
    customerName: string;
    date: string;
    items: {
        wineId: string;
        quantity: number;
    }[];
    total: number;
    status: SaleStatus;
};

export type purchaseStatus = 'draft' | 'sent' | 'recieved';

export type Purchase = {
    id: string;
    supplierId: string;
    supplier: string;
    date: string;
    items: {
        name: string;
        quantity: number;
    }[];
    total: number;
    status: purchaseStatus;
};

export type Supplier = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    coverImage?: string;
    website?: string;
};
