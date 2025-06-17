import { wines } from '@/lib/data';
import ProductCard from './product-card';

const ProductList = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {wines.map((wine) => (
                <ProductCard key={wine.id} wine={wine} />
            ))}
        </div>
    );
};

export default ProductList;
