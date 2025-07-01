import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Wine } from '@/lib/generated/prisma';
import Link from 'next/link';

interface ProductCardProps {
    wine: Wine;
}

const ProductCard = ({ wine }: ProductCardProps) => {
    return (
        <Link href={`/inventory/${wine.id}`}>
            <Card>
                <CardHeader>
                    <CardTitle className='w-full h-40 relative'>
                        {/* <Image
                            src={wine.imageSrc.medium || '/images/placeholder.png'}
                            alt={wine.name}
                            fill
                            className='object-cover'
                        /> */}
                    </CardTitle>
                    <CardDescription className='border border-accent-foreground w-fit p-1 rounded-md text-xs font-semibold absolute mt-2 ml-2 bg-background text-primary'>
                        {wine.status}
                    </CardDescription>
                </CardHeader>
                <CardContent className='text-sm text-muted-foreground flex flex-col gap-2'>
                    <h3 className='text-lg text-primary font-semibold'>
                        {wine.name}
                    </h3>
                    <p>Type: {wine.type}</p>
                    <p>Stock: {wine.stock}</p>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
