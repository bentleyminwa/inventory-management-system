import ProductList from '@/components/inventory/product-list';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';

export default function InventoryPage() {
    return (
        <section>
            <header className='space-y-5 mb-10'>
                <h1 className='text-3xl font-semibold'>Inventory</h1>
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
                    <Button>Add Product</Button>
                </div>
            </header>

            {/* Products */}
            <section>
                <ProductList />
            </section>
        </section>
    );
}
