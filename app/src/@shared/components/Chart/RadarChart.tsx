import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { defaultOptions } from './options';

type RadarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const RadarChart = ({
  series,
  options: additionalOptions,
}: RadarChartProps) => {
  const radarChartOptions: ApexCharts.ApexOptions = {
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: ['#e8e8e8'],
          fill: {
            colors: ['#f8f8f8', '#fff'],
          },
        },
      },
    },
    markers: {
      size: 4,
      hover: {
        size: 7,
      },
    },
  };

  const options = merge(
    {},
    defaultOptions,
    radarChartOptions,
    additionalOptions,
  );

  return (
    <ReactApexChart
      type="radar"
      series={series}
      options={options}
      width="99%"
      height="100%"
    />
  );
};
