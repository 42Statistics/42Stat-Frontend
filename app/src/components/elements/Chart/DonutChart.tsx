import { useTheme } from '@emotion/react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

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
    legend: {
      position: 'bottom',
    },
    fill: {
      type: 'solid',
    },
    colors: [theme.colors.primary.default],
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
      width="100%"
      height="100%"
    />
  );
};
