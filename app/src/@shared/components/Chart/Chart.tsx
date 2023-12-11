import ReactApexChart from 'react-apexcharts';

import { ApexOptions } from 'apexcharts';
import { merge } from 'lodash-es';

import { useDefaultOptions } from '@shared/components/Chart/hooks/useDefaultOptions';

type ApexChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'histogram'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'treemap'
  | 'boxPlot'
  | 'candlestick'
  | 'radar'
  | 'polarArea'
  | 'rangeBar';

type ChartProps = {
  type: ApexChartType;
  series: ApexOptions['series'];
  options: ApexCharts.ApexOptions;
};

export const Chart = ({ type, options: chartOptions, series }: ChartProps) => {
  const { defaultOptions } = useDefaultOptions();

  const options = merge({}, defaultOptions, chartOptions);

  return (
    <ReactApexChart
      type={type}
      series={series}
      options={options}
      width="99%"
      height="100%"
    />
  );
};
