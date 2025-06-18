import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';
import { Separator } from '../ui/separator';

interface SalesCardProps {
    sale: {
        id: string;
        customerName: string;
        date: string;
        items: {
            wineId: string;
            quantity: number;
        }[];
        total: number;
        status: string;
    };
}

const SalesCard = ({ sale }: SalesCardProps) => {
    return (
        <Link href={`/sales-orders/${sale.id}`}>
            <Card className='w-full'>
                <CardHeader className='space-y-3'>
                    <CardTitle>{sale.customerName}</CardTitle>
                    <CardDescription className='border border-muted-foreground w-fit p-1 rounded text-xs font-semibold bg-background'>
                        {sale.status}
                    </CardDescription>
                </CardHeader>
                <CardContent className='w-full'>
                    <Separator />
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 mt-5 text-sm text-muted-foreground font-semibold'>
                        <div className='flex flex-col'>
                            Order ID
                            <span>{sale.id}</span>
                        </div>
                        <div>
                            Order Items
                            <p className='flex flex-col gap-2'>
                                {sale.items.map((item, index) => (
                                    <span key={index}>{item.wineId}</span>
                                ))}
                            </p>
                        </div>
                        <div>
                            Order Quantity
                            <p className='flex flex-col gap-2'>
                                {sale.items.map((item, index) => (
                                    <span key={index}>{item.quantity}</span>
                                ))}
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            Order Date
                            <span>{sale.date}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default SalesCard;
