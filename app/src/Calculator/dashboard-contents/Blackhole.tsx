import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import { blackholeFormatter } from '@shared/utils/formatters/blackholeFormatter';
import { useAtom, useAtomValue } from 'jotai';
import { SubjectListAtom } from '../atoms/SubjectListAtom';
import { calculatorPropsAtom } from '../atoms/CalculatorPropsAtom';

export const Blackhole = () => {
  const subjectList = useAtomValue(SubjectListAtom);
  const calculatorProps = useAtomValue(calculatorPropsAtom);
	
	console.log(calculatorProps);

	const series = [
		calculatorProps.daysFromStart,
		...subjectList.map((subject) => subject.score),
	];

	const labels = ['현재', ...subjectList.map((subject) => subject.name)];

  return (
    <DashboardContent title="Blackhole" type="ApexCharts">
      <BlackholeCalculatorChart labels={labels} series={series} />
    </DashboardContent>
  );
};

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
            },
            value: {
              show: true,
              formatter: (value) => blackholeFormatter(parseInt(value)),
            },
          },
        },
      },
    },
  };
  return <DonutChart labels={labels} series={series} options={options} />;
};
