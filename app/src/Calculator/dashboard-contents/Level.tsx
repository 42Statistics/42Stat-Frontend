import { DashboardContent } from '@shared/components/DashboardContent';
import { AreaChart } from '@shared/components/Chart';
import { useAtom } from 'jotai';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';

export const Level = () => {
  const [subjectList] = useAtom(subjectListAtom);
  const [CalculatorProps] = useAtom(calculatorPropsAtom);

  const levelList = [
    { x: '현재 레벨', y: CalculatorProps.currentLevel },
    ...subjectList
      .filter((subject) => subject.name !== '')
      .map((subject) => ({
        x: subject.name,
        y: subject.finishLevel,
      })),
  ];

  const series: ApexAxisChartSeries = [
    {
      name: '레벨',
      data: levelList,
    },
  ];

  return (
    <DashboardContent title="레벨 증가 그래프" type="ApexCharts">
      <LevelCalculatorChart series={series} />
    </DashboardContent>
  );
};

type LevelCalculatorChartProps = {
  series: ApexAxisChartSeries;
};

const LevelCalculatorChart = ({ series }: LevelCalculatorChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      labels: {
        formatter: (value) => value,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => value.toLocaleString(),
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
