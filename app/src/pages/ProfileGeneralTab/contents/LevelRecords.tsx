import { useQuery } from '@apollo/client';
import { LineChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { isDefined } from '@utils/isDefined';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_BY_LOGIN } from '../GET_PERSONAL_GENERAL_BY_LOGIN';

export const LevelRecords = () => {
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `본과정 시작일로부터 24개월`;
  const { loading, error, data } = useQuery(GET_PERSONAL_GENERAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { userLevelRecords, promoLevelRecords, promoMemberLevelRecords } =
    data.getPersonalGeneral;

  const userLevelSeries = userLevelRecords
    .filter(isDefined)
    .map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }));
  const promoLevelSeries = promoLevelRecords.map(({ monthsPassed, level }) => ({
    x: monthsPassed,
    y: level,
  }));
  const promoMemberLevelSeries = promoMemberLevelRecords.map(
    ({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }),
  );

  const series = [
    {
      name: username,
      data: userLevelSeries,
    },
    {
      name: '동일 기수 평균',
      data: promoLevelSeries,
    },
    {
      name: '동일 기수 중 멤버 평균',
      data: promoMemberLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description} isApexChart>
      <LevelRecordsChart series={series} />
    </DashboardContent>
  );
};

type LevelRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const LevelRecordsChart = ({ series }: LevelRecordsChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [
      theme.colors.primary.default,
      theme.colors.mono.gray300,
      theme.colors.accent.default,
    ],
    xaxis: {
      max: 24,
      tickAmount: 24,
      labels: {
        formatter: (value) => `${value}개월`,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `lv. ${value}`,
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `${value}개월 차`,
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
