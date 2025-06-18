import { suppliers } from '@/lib/data';
import SupplierCard from './supplier-card';

const SuppliersList = () => {
    return (
        <section>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {suppliers.length === 0 ? (
                    <div>
                        <p>No sales found.</p>
                    </div>
                ) : (
                    suppliers.map((supplier) => {
                        return (
                            <li key={supplier.id} className='last:mb-5'>
                                <SupplierCard supplier={supplier} />
                            </li>
                        );
                    })
                )}
            </ul>
        </section>
    );
};

export default SuppliersList;
