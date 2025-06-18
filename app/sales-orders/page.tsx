import SalesList from '@/components/sales/sales-list';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';

const orderStatus = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'New',
        value: 'new',
    },
    {
        label: 'Confirmed',
        value: 'confirmed',
    },
    {
        label: 'Shipped',
        value: 'shipped',
    },
    {
        label: 'Delivered',
        value: 'delivered',
    },
];

export default function SalesPage() {
    return (
        <section>
            <header className='space-y-5 mb-10'>
                <h1 className='text-3xl font-semibold'>Sales Orders</h1>
                <div className='flex items-center gap-2 w-full h-10'>
                    <form className='flex nowrap items-center w-full border rounded-lg pl-2'>
                        <label htmlFor='search'>
                            <Search className='w-5 h-5 text-muted-foreground' />
                        </label>
                        <Input
                            type='text'
                            id='search'
                            placeholder='Search'
                            className='w-full border-none shadow-none outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </form>
                    <Separator orientation='vertical' />
                    <Button>Create Order</Button>
                </div>
            </header>

            {/* Sales Orders */}
            <section>
                <div className='space-y-2 mb-7'>
                    <h3 className='text-sm text-muted-foreground font-semibold'>
                        Status
                    </h3>
                    <ul className='flex items-center gap-2'>
                        {orderStatus.map((status) => {
                            return (
                                <li key={status.value}>
                                    <Button
                                        variant={'outline'}
                                        className='cursor-pointer'
                                    >
                                        {status.label}
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <SalesList />
            </section>
        </section>
    );
}
