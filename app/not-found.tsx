import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className='flex flex-col items-center justify-center gap-3 h-screen'>
            <h2 className='text-3xl text-destructive'>404 Page Error</h2>
            <p className='text-sm'>
                Sorry, the page you are looking for could not be found!
            </p>
            <Link href='/'>
                <Button variant={'default'} className='cursor-pointer'>
                    Back to Home
                </Button>
            </Link>
        </section>
    );
}
