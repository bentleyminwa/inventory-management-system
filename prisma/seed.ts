import { wines } from '@/lib/data';
import { PrismaClient } from '@/lib/generated/prisma';

export const prisma = new PrismaClient();

async function main() {
    const t0 = performance.now();
    console.log(`Db seeding started`);

    await prisma.wine.deleteMany();

    await prisma.wine.createMany({
        data: wines,
    });

    const t1 = performance.now();
    console.log(`Db seeding finished in ${t1 - t0} ms`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
