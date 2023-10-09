import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import {
  blackholeNameFormatter,
  blackholeValueFormatter,
} from '@shared/utils/formatters/blackholeFormatter';
import { useAtomValue } from 'jotai';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { MAX_BLACKHOLE_VALUE } from '@/Calculator/constants/blackhole';

export const Blackhole = () => {
  const subjectList = useAtomValue(subjectListAtom);
  const calculatorProps = useAtomValue(calculatorPropsAtom);
  const { currentBlackhole, daysFromStart } = calculatorProps;
  const currentDays = daysFromStart + currentBlackhole;
  const blackholeDaysLeft = () => {
    let sum = 0;
    subjectList.forEach((subject) => {
      sum += subject.blackhole;
      if (subject.exp !== 0 && subject.blackhole === 0) {
        sum = -1;
        return false;
      }
    });
    const tot = MAX_BLACKHOLE_VALUE - sum - currentDays;
    if (tot <= 0 || sum === -1) return 0;
    return tot;
  };
  const series = [
    currentDays,
    ...subjectList.map((subject) => subject.blackhole),
    blackholeDaysLeft(),
  ];

  const current = `현재 (${currentBlackhole}일 + ${daysFromStart}일)`;

  const labels = [
    current,
    ...subjectList.map((subject) => subject.name),
    '총 670일 중 남은 일수',
  ];

  return (
    <DashboardContent title="블랙홀" type="ApexCharts">
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
  const sumBlackhole = () => {
    let sum = 0;
    series.forEach((blackhole, i) => {
      if (i !== 0 && i !== series.length - 1) sum += blackhole;
    });
    return `+${sum.toString()}일`;
  };
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
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              formatter: () => sumBlackhole(),
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
