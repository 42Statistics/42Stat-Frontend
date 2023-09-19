import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import {
  blackholeNameFormatter,
  blackholeValueFormatter,
} from '@shared/utils/formatters/blackholeFormatter';
import { useAtomValue } from 'jotai';
import { SubjectListAtom } from '../atoms/SubjectListAtom';
import { calculatorPropsAtom } from '../atoms/CalculatorPropsAtom';

export const Blackhole = () => {
  const subjectList = useAtomValue(SubjectListAtom);
  const calculatorProps = useAtomValue(calculatorPropsAtom);

  const series = [
    calculatorProps.daysFromStart,
    ...subjectList.map((subject) => subject.blackhole),
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
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
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
            name: {
              show: true,
              offsetY: 130,
              formatter: (value) => blackholeNameFormatter(value),
            },
            value: {
              show: true,
              offsetY: -5,
              formatter: (value) => blackholeValueFormatter(parseInt(value)),
            },
          },
        },
      },
    },
  };
  return <DonutChart labels={labels} series={series} options={options} />;
};
