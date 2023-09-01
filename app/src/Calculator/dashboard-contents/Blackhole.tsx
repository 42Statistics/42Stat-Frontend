import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';


export const Blackhole = () => {
	const series: number[] = [
		12, 14, 15, 60,
	];
	const labels: string[] = [
		'1번', '2번', '3번', '4번'
	]
	return (
    <DashboardContent title={"blackhole"} type="ApexCharts">
      <BlackholeCalculatorChart labels={labels} series={series} />
    </DashboardContent>
	);
}

type BlackholeCalculatorChartProps = {
  labels: string[];
  series: number[];
};

const BlackholeCalculatorChart = ({
	labels,
  series,
}: BlackholeCalculatorChartProps) => {
  const options: ApexCharts.ApexOptions = {
    tooltip: {
      enabled: true,
    },
		dataLabels: {
			enabled: false,
		},
    plotOptions: {
      pie: {
				startAngle: -135,
				endAngle: 135,
        donut: {
					size: '80%',
          labels: {
            show: true,
            total: {
              show: true,
							formatter: () => {
								return "+350일";
							}
            },
            value: {
              show: true,
              formatter: (value) =>
                numberWithUnitFormatter(parseInt(value), '명'),
            },
          },
        },
      },
    },
  };
  return <DonutChart labels={labels} series={series} options={options} />;
};
