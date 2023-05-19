import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

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
        borderRadius: 4,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      offsetY: -20,
      style: {
        colors: [theme.colors.mono.gray300],
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

  const options = merge({}, defaultOptions, barChartOptions, additionalOptions);

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
