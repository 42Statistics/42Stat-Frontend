import { useTheme } from '@emotion/react';
import { merge } from 'lodash-es';

import { Chart } from '@shared/components/Chart/Chart';

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
    chart: {
      animations: {
        enabled: false, // curve smooth일 때 간헐적으로 curve straight 애니메이션이 적용되는 문제가 있어서 비활성화
      },
    },
    colors: [theme.colors.chart.primary.default],
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },
  };

  const options = merge({}, lineChartOptions, additionalOptions);

  return <Chart type="line" series={series} options={options} />;
};
