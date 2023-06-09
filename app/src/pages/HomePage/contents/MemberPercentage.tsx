import { PieChart } from '@components/elements/Chart';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';

export const MemberPercentage = () => {
  const title = 'Member 비율';
  const description = '블랙홀 유저 포함';

  const { memberPercentage } = { memberPercentage: 4.242 };

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
      fillSeriesColor: false,
    },
  };

  return <PieChart labels={labels} series={series} options={options} />;
};
