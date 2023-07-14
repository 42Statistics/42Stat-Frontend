import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
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
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      offsetX: 40,
      style: {
        colors: [theme.colors.mono.gray300],
        fontWeight: 400,
      },
    },
    colors: [theme.colors.primary.default],
    stroke: {
      width: 1,
    },
    fill: {
      type: 'solid',
      opacity: 0.5,
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
      width="99%"
      height="100%"
    />
  );
};
