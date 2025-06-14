import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { PopoverContent } from '@radix-ui/react-popover';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { Popover, PopoverTrigger } from '../ui/popover';

interface AccountProps {
    panelOpen: boolean;
}

export default function Account({ panelOpen }: AccountProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='flex items-center gap-3 cursor-pointer text-xs w-full hover:bg-accent rounded-lg p-2'>
                    <Avatar className='w-10 h-10'>
                        <AvatarImage
                            src='https://github.com/shadcn.png'
                            className='w-10 h-10 rounded-full'
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {panelOpen && (
                        <div>
                            <h3 className='font-semibold'>Quan Chi</h3>
                            <p className='text-muted-foreground'>
                                quan@gmail.com
                            </p>
                        </div>
                    )}
                </div>
            </PopoverTrigger>
            <PopoverContent
                className='p-4 text-xs space-y-1 font-semibold bg-popover rounded-lg'
                sideOffset={10}
            >
                <Link
                    href={'/profile'}
                    className='flex items-center gap-2 hover:bg-accent rounded-lg px-2 py-1 cursor-pointer'
                >
                    <User />
                    <span>Account Settings</span>
                </Link>
                <div className='flex items-center gap-2 hover:bg-accent rounded-lg px-2 py-1 cursor-pointer'>
                    <LogOut />
                    <span>Sign Out</span>
                </div>
            </PopoverContent>
        </Popover>
    );
}
