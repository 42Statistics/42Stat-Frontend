import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

type LineChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const LineChart = ({
  series,
  options: additionalOptions,
}: LineChartProps) => {
  const theme = useTheme();

  const lineChartOptions: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default],
    stroke: {
      width: 1.5,
    },
  };

  const options = merge(
    {},
    defaultOptions,
    lineChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="line"
      series={series}
      options={options}
      width="100%"
      height="100%"
    />
  );
};
