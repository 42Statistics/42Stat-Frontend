import { useTheme } from '@emotion/react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

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

  const pieChartOptions: ApexCharts.ApexOptions = {
    labels,
    plotOptions: {
      pie: {
        startAngle: -270,
        endAngle: 90,
      },
    },
    legend: {
      position: 'bottom',
    },
    colors: [theme.colors.primary.default],
    responsive: [],
  };

  const options = merge({}, defaultOptions, pieChartOptions, additionalOptions);

  return (
    <ReactApexChart
      type="pie"
      series={series}
      options={options}
      width="100%"
      height="100%"
    />
  );
};
