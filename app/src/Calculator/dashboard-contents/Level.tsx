import { DashboardContent } from '@shared/components/DashboardContent';
import { AreaChart } from '@shared/components/Chart';
import { useAtom } from 'jotai';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { calculatorPropsAtom } from '@/Calculator/atoms/CalculatorPropsAtom';

export const Level = () => {
  const [subjectList] = useAtom(SubjectListAtom);
  const [CalculatorProps] = useAtom(calculatorPropsAtom);

	const levelList = [
		{ x: '현재 레벨', y: CalculatorProps.currentLevel },
		...subjectList.map((subject) => ({
			x: subject.name,
			y: subject.level,
		})),
	];

  const series: ApexAxisChartSeries = [
    {
      name: '레벨',
      data: levelList,
    },
  ];

  return (
    <DashboardContent title="Level" type="ApexCharts">
      <LevelCalculatorChart series={series} />
    </DashboardContent>
  );
};

type LevelProp = {
  x: string;
  y: number;
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
