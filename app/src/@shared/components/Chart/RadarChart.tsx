import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import ReactApexChart from 'react-apexcharts';
import { useDefaultOptions } from './hooks/useDefaultOptions';

type RadarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const RadarChart = ({
  series,
  options: additionalOptions,
}: RadarChartProps) => {
  const theme = useTheme();
  const { defaultOptions } = useDefaultOptions();

  const radarChartOptions: ApexCharts.ApexOptions = {
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: [theme.colors.mono.gray200],
          fill: {
            colors: [theme.colors.mono.gray100, theme.colors.mono.white],
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
