import { useTheme } from '@emotion/react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from '../options';

type RangeBarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const RangeBarChart = ({
  series,
  options: additionalOptions,
}: RangeBarChartProps) => {
  const theme = useTheme();

  const rangeBarChartOptions: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    stroke: {
      width: 1.5,
    },
    colors: [theme.colors.primary.default],
    fill: {
      type: 'solid',
      opacity: 0.4,
    },
    responsive: [],
  };

  const options = merge(
    {},
    defaultOptions,
    rangeBarChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="rangeBar"
      series={series}
      options={options}
      width="100%"
      height="100%"
    />
  );
};
