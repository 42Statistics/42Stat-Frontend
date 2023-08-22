import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';
import Chart from './Chart';

type RadarChartProps = {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
};

export const RadarChart = ({
  series,
  options: additionalOptions,
}: RadarChartProps) => {
  const theme = useTheme();

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

  const options = merge({}, radarChartOptions, additionalOptions);

  return <Chart type="radar" series={series} options={options} />;
};
