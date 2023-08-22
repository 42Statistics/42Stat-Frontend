import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { useDefaultOptions } from './hooks/useDefaultOptions';
import { ApexOptions } from 'apexcharts';

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

const Chart = ({ type, options: chartOptions, series }: ChartProps) => {
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

export default Chart;
