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
