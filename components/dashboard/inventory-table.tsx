import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { prisma } from '@/prisma/seed';
// import Image from 'next/image';

export default async function InventoryTable() {
    const wines = await prisma.wine.findMany();

    return (
        <Table className='border'>
            <TableCaption>Overview of your Inventory</TableCaption>
            <TableHeader className='bg-accent/20'>
                <TableRow>
                    <TableHead>Product Image</TableHead>
                    <TableHead>Product Name </TableHead>
                    <TableHead>Sale Price(&pound;)</TableHead>
                    <TableHead>Units Avavilable</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {wines.map((wine) => (
                    <TableRow key={wine.id}>
                        <TableCell>
                            {/* <Image
                                src={wine.imageSrc.small}
                                alt={wine.name}
                                width={60}
                                height={60}
                                className='rounded-lg'
                            /> */}
                        </TableCell>
                        <TableCell>{wine.name}</TableCell>
                        <TableCell>{wine.pricePerUnit}</TableCell>
                        <TableCell>{wine.stock}</TableCell>
                        <TableCell>{wine.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
