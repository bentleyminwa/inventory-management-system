import { Supplier } from '@/types';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type SupplierCardProps = {
    supplier: Supplier;
};

const SupplierCard = ({ supplier }: SupplierCardProps) => {
    return (
        <Link href={`/suppliers/${supplier.id}`}>
            <Card>
                <CardHeader>
                    <CardTitle className='relative w-full h-48'>
                        <Image
                            src={supplier.coverImage ?? ''}
                            alt=''
                            fill
                            className='object-cover'
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent className='mt-5 text-sm text-muted-foreground font-semibold'>
                    <h2 className='text-lg text-primary'>{supplier.name}</h2>
                    <p>{supplier.email}</p>
                </CardContent>
            </Card>
        </Link>
    );
};

export default SupplierCard;
