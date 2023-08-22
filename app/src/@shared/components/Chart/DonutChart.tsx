import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import Chart from './Chart';

type DonutChartProps = {
  labels: string[];
  series: number[];
  options: ApexCharts.ApexOptions;
};

export const DonutChart = ({
  labels,
  series,
  options: additionalOptions,
}: DonutChartProps) => {
  const theme = useTheme();

  const donutChartOptions: ApexCharts.ApexOptions = {
    labels,
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
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
    fill: {
      type: 'solid',
      opacity: 1,
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        color: theme.colors.chart.primary.default,
      },
    },
    stroke: {
      show: false,
    },
    responsive: [],
  };

  const options = merge({}, donutChartOptions, additionalOptions);

  return <Chart type="donut" series={series} options={options} />;
};
