import { sales } from '@/lib/data';
import SalesCard from './sales-card';

const SalesList = () => {
    return (
        <ul className='flex flex-col gap-5'>
            {sales.map((sale) => {
                return (
                    <li key={sale.id}>
                        <SalesCard sale={sale} />
                    </li>
                );
            })}
        </ul>
    );
};

export default SalesList;
