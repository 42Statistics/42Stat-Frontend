import { useAtomValue } from 'jotai';
import { truncate } from 'lodash-es';

import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import {
  MAX_BLACKHOLE_DAYS,
  MAX_BLACKHOLE_NAME_LENGTH,
} from '@/Calculator/constants/blackhole';
import type { Subject } from '@/Calculator/types/OrderItemButtonGroup';
import { DonutChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const getBlackholeDaysLeft = (currentDays: number, subjectList: Subject[]) => {
  let sum = 0;
  subjectList.forEach((subject) => {
    sum += subject.blackhole;
    if (subject.exp !== 0 && subject.blackhole === 0) {
      sum = -1;
      return false;
    }
  });
  const total = MAX_BLACKHOLE_DAYS - sum - currentDays;
  if (total <= 0 || sum === -1) return 0;
  return total;
};

export const Blackhole = () => {
  const subjectList = useAtomValue(subjectListAtom);
  const { currentBlackhole, daysFromStart } = useAtomValue(calculatorPropsAtom);

  const blackholeDaysLeft = getBlackholeDaysLeft(
    daysFromStart + currentBlackhole,
    subjectList,
  );

  const labels = [
    '본과정 시작한지',
    '현재 블랙홀',
    ...subjectList.map((subject) => subject.name),
    '670일까지 남은 일수',
  ];

  const series = [
    daysFromStart,
    currentBlackhole,
    ...subjectList.map((subject) => subject.blackhole),
    blackholeDaysLeft,
  ];

  const sumOfNewBlackholeDays = subjectList.reduce(
    (acc, subject) => acc + subject.blackhole,
    0,
  );

  return (
    <DashboardContent title="블랙홀" type="ApexCharts">
      <BlackholeCalculatorChart
        labels={labels}
        series={series}
        sumOfNewBlackholeDays={sumOfNewBlackholeDays}
      />
    </DashboardContent>
  );
};

type BlackholeCalculatorChartProps = {
  labels: string[];
  series: number[];
  sumOfNewBlackholeDays: number;
};

const BlackholeCalculatorChart = ({
  labels,
  series,
  sumOfNewBlackholeDays,
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
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              formatter: () =>
                `+${numberWithUnitFormatter(sumOfNewBlackholeDays, '일')}`,
            },
            name: {
              show: true,
              offsetY: 130,
              formatter: (value) =>
                truncate(value, { length: MAX_BLACKHOLE_NAME_LENGTH }),
            },
            value: {
              show: true,
              offsetY: -5,
              formatter: (value) =>
                numberWithUnitFormatter(parseInt(value), '일'),
            },
          },
        },
      },
    },
  };
  return <DonutChart labels={labels} series={series} options={options} />;
};
