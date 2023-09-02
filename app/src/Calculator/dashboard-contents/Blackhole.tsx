import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { useAtom } from 'jotai';
import SubjectListAtom from '../atoms/SubjectListAtom';

export const Blackhole = () => {
  const [subjectList] = useAtom(SubjectListAtom);
  const series: number[] = subjectList.map((subject) => subject.blackhole);
  const labels: string[] = subjectList.map((subject) => subject.name);

  return (
    <DashboardContent title={'blackhole'} type="ApexCharts">
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
              formatter: () => {
                return '+350일';
              },
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
