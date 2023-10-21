import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';

import { Chart } from '@shared/components/Chart/Chart';

type BarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const HorizontalBarChart = ({
  series,
  options: additionalOptions,
}: BarChartProps) => {
  const theme = useTheme();

  const horizontalBarChartOptions: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      offsetX: 37,
      style: {
        colors: [theme.colors.mono.gray500],
        fontWeight: 400,
      },
    },
    colors: [theme.colors.chart.accent.default],
    stroke: {
      width: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'diagonal2',
      },
    },
  };

  const options = merge({}, horizontalBarChartOptions, additionalOptions);

  return <Chart type="bar" series={series} options={options} />;
};
