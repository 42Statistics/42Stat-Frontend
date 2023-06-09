import { PieChart } from '@components/elements/Chart';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';

export const BlackholedPercentage = () => {
  const title = '블랙홀 유저 비율';

  const { blackholedPercentage } = { blackholedPercentage: 72.42 };

  return (
    <DashboardContent title={title}>
      <BlackholedPercentageChart
        labels={['Blackholed', '여행 중']}
        series={[blackholedPercentage, 100 - blackholedPercentage]}
      />
    </DashboardContent>
  );
};

type BlackholedPercentageChartProps = {
  labels: string[];
  series: number[];
};

const BlackholedPercentageChart = ({
  labels,
  series,
}: BlackholedPercentageChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.mono.black, theme.colors.primary.light],
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(1)}%`,
      },
      fillSeriesColor: false,
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
