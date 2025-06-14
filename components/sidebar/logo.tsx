import { PanelLeftClose, PanelRightClose } from 'lucide-react';
import Image from 'next/image';

interface LogoProps {
    panelOpen: boolean;
    setPanelOpen: (value: boolean) => void;
}

export default function Logo({ panelOpen, setPanelOpen }: LogoProps) {
    const toggleSidebar = () => {
        setPanelOpen(!panelOpen);
    };

    const renderedPanel = panelOpen ? (
        <div className='flex items-start gap-3'>
            <Image
                src={'/images/gran-cielo.png'}
                alt='Gran Cielo brand logo'
                width={150}
                height={100}
            />

            <PanelLeftClose
                className='w-5 cursor-pointer'
                onClick={toggleSidebar}
            />
        </div>
    ) : (
        <div className='flex items-start'>
            <div className='w-0 h-[114px]' />
            <PanelRightClose
                className='w-5 cursor-pointer'
                onClick={toggleSidebar}
            />
        </div>
    );

    return <>{renderedPanel}</>;
}
