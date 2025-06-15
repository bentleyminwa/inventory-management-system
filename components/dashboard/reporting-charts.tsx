import { SalesBarChart } from './sales-bar-chart';
import { WineDistributionPieChart } from './type-pie-chart';

export default function ReportingCharts() {
    return (
        <section className='grid md:grid-cols-2 gap-4'>
            <SalesBarChart />
            <WineDistributionPieChart />
        </section>
    );
}
