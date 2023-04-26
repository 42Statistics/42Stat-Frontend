import { useTheme } from '@emotion/react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

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
        borderRadius: 4,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      offsetX: 40,
      style: {
        colors: [theme.colors.mono.gray.default],
        fontWeight: 400,
      },
    },
    colors: [theme.colors.primary.default],
    stroke: {
      width: 1.5,
    },
    fill: {
      type: 'solid',
      opacity: 0.4,
    },
  };

  const options = merge(
    {},
    defaultOptions,
    horizontalBarChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="bar"
      series={series}
      options={options}
      width="100%"
      height="100%"
    />
  );
};