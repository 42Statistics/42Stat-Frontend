import { useMemo } from 'react';

import { useAtomValue } from 'jotai';
import { truncate } from 'lodash-es';

import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';

import { calculatorUserInfoAtom } from '@/Calculator/atoms/calculatorUserInfoAtom';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import {
  MAX_XAXIS_COUNT,
  MAX_XVALUE_LENGTH,
} from '@/Calculator/constants/levelRecords';

export const LevelRecords = () => {
  const subjectList = useAtomValue(subjectListAtom);
  const { currentLevel } = useAtomValue(calculatorUserInfoAtom);

  const filteredSubjectList = useMemo(
    () => subjectList.filter((subject) => subject.name !== ''),
    [subjectList],
  );

  const title = '레벨 증가 그래프';

  const levelList = [
    { x: '현재', y: currentLevel },
    ...filteredSubjectList.map(({ name, finishLevel }) => ({
      x: name,
      y: finishLevel,
    })),
  ];

  const series: CalculatorLevelSeries = [
    {
      name: '레벨',
      data: levelList,
    },
  ];

  return (
    <>
      {filteredSubjectList.length === 0 ? (
        <DashboardContent title={title}>
          <TextDefault text="프로젝트를 추가하세요" />
        </DashboardContent>
      ) : (
        <DashboardContent title={title} type="ApexCharts">
          <LevelCalculatorChart series={series} />
        </DashboardContent>
      )}
    </>
  );
};

type CalculatorLevelSeries = [
  {
    name: string;
    data: { x: string; y: number }[];
  },
];

type LevelCalculatorChartProps = {
  series: CalculatorLevelSeries;
};

const LevelCalculatorChart = ({ series }: LevelCalculatorChartProps) => {
  const subjectLength = series[0].data.length;

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
        tools: {
          zoom: false,
        },
      },
    },
    xaxis: {
      overwriteCategories: series[0].data.map((item) => {
        if (subjectLength > MAX_XAXIS_COUNT) {
          return '';
        }
        return truncate(item.x, { length: MAX_XVALUE_LENGTH });
      }),
      labels: {
        formatter: (value) => value,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${Math.round(value * 100) / 100}`,
      },
    },
  };

  return <AreaChart series={series} options={options} />;
};
