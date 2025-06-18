import { Purchase } from '@/types';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

type PurchaseCardProps = {
    purchase: Purchase;
};

const PurchaseCard = ({ purchase }: PurchaseCardProps) => {
    return (
        <Card>
            <Link href={`/purchase-orders/${purchase.id}`}>
                <CardHeader>
                    <CardTitle>{purchase.supplier}</CardTitle>
                </CardHeader>
                <CardContent className='mt-5 text-sm text-muted-foreground font-semibold'>
                    <div className='flex flex-col gap-1 mb-3'>
                        Cost
                        <span>{purchase.total}</span>
                    </div>
                    <div className='flex flex-col gap-1 mb-3'>
                        Order made on
                        <span>{purchase.date}</span>
                    </div>
                    <div className='flex flex-col gap-1 mb-3'>
                        Order Status
                        <span className='w-fit border border-muted-foreground p-1 rounded text-xs bg-background'>
                            {purchase.status.charAt(0).toUpperCase() +
                                purchase.status.slice(1)}
                        </span>
                    </div>
                </CardContent>
            </Link>
            <CardFooter>
                <Button className='w-full'>Send Order</Button>
            </CardFooter>
        </Card>
    );
};

export default PurchaseCard;
