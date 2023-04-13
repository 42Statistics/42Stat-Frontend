import { useTheme } from '@emotion/react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

type AreaChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const AreaChart = ({
  series,
  options: additionalOptions,
}: AreaChartProps) => {
  const theme = useTheme();

  const areaChartOptions: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default],
    stroke: {
      width: 1.5,
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [],
  };

  const options = merge(
    {},
    defaultOptions,
    areaChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="area"
      series={series}
      options={options}
      width="100%"
      height="100%"
    />
  );
};
