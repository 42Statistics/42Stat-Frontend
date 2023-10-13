import { DashboardContent } from '@shared/components/DashboardContent';
import { DonutChart } from '@shared/components/Chart';
import { blackholeFormatter } from '@shared/utils/formatters/blackholeFormatter';
import { useAtom } from 'jotai';
import { SubjectListAtom } from '../atoms/SubjectListAtom';
import { CalculatorPropsAtom } from '../atoms/CalculatorPropsAtom';
import { useEffect, useState } from 'react';
import { toInteger } from 'lodash-es';

export const Blackhole = () => {
  const [subjectList] = useAtom(SubjectListAtom);
  const [CalculatorProps] = useAtom(CalculatorPropsAtom);
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const filterList = subjectList.map((subject) => {
      const blackhole = subject.blackhole;

      if (!isNaN(blackhole)) {
        subject.blackhole = toInteger(blackhole);
        return subject;
      }
      return subject;
    });
    setSeries([
      CalculatorProps.daysFromStart,
      ...filterList.map((subject) => subject.blackhole),
    ]);
    setLabels(['현재', ...filterList.map((subject) => subject.name)]);
  }, [CalculatorProps, subjectList]);

  return (
    <DashboardContent title={'Blackhole'} type="ApexCharts">
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
