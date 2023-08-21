import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { useDefaultOptions } from './hooks/useDefaultOptions';

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
  const { defaultOptions } = useDefaultOptions();

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

  const options = merge(
    {},
    defaultOptions,
    donutChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="donut"
      series={series}
      options={options}
      width="99%"
      height="100%"
    />
  );
};
