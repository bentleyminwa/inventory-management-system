import { prisma } from '@/prisma/seed';
import ProductCard from './product-card';

const ProductList = async () => {
    const wines = await prisma.wine.findMany();

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {wines.map((wine) => (
                <ProductCard key={wine.id} wine={wine} />
            ))}
        </div>
    );
};

export default ProductList;
