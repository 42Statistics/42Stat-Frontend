import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import Chart from './Chart';

type BarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};
export const BarChart = ({
  series,
  options: additionalOptions,
}: BarChartProps) => {
  const theme = useTheme();

  const barChartOptions: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      offsetY: -20,
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
        type: 'vertical',
      },
    },
  };

  const options = merge({}, barChartOptions, additionalOptions);

  return <Chart type="bar" series={series} options={options} />;
};
