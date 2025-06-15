import { LabelList, Pie, PieChart } from 'recharts';

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
import { wineStockDistribution } from '@/lib/data';

export const description = 'A pie chart with a label list';

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

const chartConfig = {
    bottles: {
        label: 'Bottles',
    },
    red: {
        label: 'Red',
        color: 'var(--chart-1)',
    },
    white: {
        label: 'White',
        color: 'var(--chart-2)',
    },
    rose: {
        label: 'Rose',
        color: 'var(--chart-3)',
    },
    sparkling: {
        label: 'Sparkling',
        color: 'var(--chart-4)',
    },
} satisfies ChartConfig;

export function WineDistributionPieChart() {
    return (
        <Card className='flex flex-col'>
            <CardHeader className='items-center pb-0'>
                <CardTitle>Wine Distribution by type</CardTitle>
                <CardDescription>January - June 2025</CardDescription>
            </CardHeader>
            <CardContent className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]'
                >
                    <PieChart>
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    nameKey='bottles'
                                    hideLabel
                                />
                            }
                        />
                        <Pie data={wineStockDistribution} dataKey='bottles'>
                            <LabelList
                                dataKey='wine'
                                className='fill-background'
                                stroke='none'
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col gap-2 text-sm'>
                <div className='text-muted-foreground leading-none'>
                    Showing wine distribution by wine type
                </div>
            </CardFooter>
        </Card>
    );
}
