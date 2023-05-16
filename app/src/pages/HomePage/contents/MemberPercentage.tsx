import { PieChart } from '@/components/elements/Chart';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useTheme } from '@emotion/react';

export const MemberPercentage = () => {
  const { memberPercentage } = { memberPercentage: 4.242 };

  const title = 'Member 비율';
  const description = '비활성화 유저도 직전 상태로 포함';

  return (
    <DashboardContent title={title} description={description}>
      <MemberPercentageChart
        labels={['Member', 'Learner']}
        series={[memberPercentage, 100 - memberPercentage]}
      />
    </DashboardContent>
  );
};

type MemberPercentageChartProps = {
  labels: string[];
  series: number[];
};

const MemberPercentageChart = ({
  labels,
  series,
}: MemberPercentageChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.accent.default, theme.colors.primary.light],
    tooltip: {
      y: {
        formatter: (value) => `${value.toFixed(1)}%`,
      },
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
