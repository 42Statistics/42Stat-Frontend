import { DashboardContent } from '@shared/components/DashboardContent';
import { AreaChart } from '@shared/components/Chart';
import { useAtom } from 'jotai';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import {
  MAX_XAXIS_COUNT,
  MAX_XVALUE_LENGTH,
} from '@/Calculator/constants/level';

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

  const series: CalculatorLevelSeries = [
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
  series: CalculatorLevelSeries;
};

type CalculatorLevelSeries = [
  {
    name: string;
    data: Item[];
  },
];

type Item = {
  x: string;
  y: number;
};

const LevelCalculatorChart = ({ series }: LevelCalculatorChartProps) => {
  const subjectLength = series[0].data.length;
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      overwriteCategories: series[0].data.map((item) => {
        if (subjectLength > MAX_XAXIS_COUNT) {
          return '';
        }
        if (item.x.length > MAX_XVALUE_LENGTH) {
          return item.x.slice(0, MAX_XVALUE_LENGTH - 3) + '...';
        }
        return item.x;
      }),
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
