import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { monthlySales } from '@/lib/data';

export const description = 'A bar chart';

const chartConfig = {
    bottlesSold: {
        label: 'Bottles',
        color: 'var(--chart-1)',
    },
} satisfies ChartConfig;

export function SalesBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
                <CardDescription>January - June 2025</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={monthlySales}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey='bottlesSold'
                            fill='var(--chart)'
                            radius={8}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='text-muted-foreground leading-none'>
                    Showing wine distribution by wine type
                </div>
            </CardFooter>
        </Card>
    );
}
