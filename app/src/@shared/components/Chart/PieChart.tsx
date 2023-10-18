import { useTheme } from '@emotion/react';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import { useAtomValue } from 'jotai';
import { merge } from 'lodash-es';
import Chart from './Chart';

type PieChartProps = {
  labels: string[];
  series: number[];
  options: ApexCharts.ApexOptions;
};

export const PieChart = ({
  labels,
  series,
  options: additionalOptions,
}: PieChartProps) => {
  const theme = useTheme();
  const palette = useAtomValue(paletteAtom);

  const pieChartOptions: ApexCharts.ApexOptions = {
    labels,
    chart: {
      dropShadow: {
        enabled: palette === 'dark',
      },
    },
    plotOptions: {
      pie: {
        // startAngle: -270,
        // endAngle: 90,
        dataLabels: {
          offset: -20,
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: '1.3rem',
        fontWeight: 400,
      },
    },
    legend: {
      position: 'bottom',
    },
    colors: [
      theme.colors.chart.primary.default,
      theme.colors.chart.primary.light,
    ],
    stroke: {
      show: false,
    },
    responsive: [],
  };

  const options = merge({}, pieChartOptions, additionalOptions);

  return <Chart type="pie" series={series} options={options} />;
};
