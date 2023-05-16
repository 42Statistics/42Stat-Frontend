import { PieChart } from '@/components/elements/Chart';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useTheme } from '@emotion/react';

export const BlackholedPercentage = () => {
  const { blackholedPercentage } = { blackholedPercentage: 72.42 };

  const title = '블랙홀 유저 비율';
  const description = '비활성화 Member는 Survived에 포함';

  return (
    <DashboardContent title={title} description={description}>
      <BlackholedPercentageChart
        labels={['Blackholed', 'Survived']}
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
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
