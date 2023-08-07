import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { useContext } from 'react';

const GET_COUNT_RECORD_BY_LOGIN = gql(/* GraphQL */ `
  query GetCountRecordByLogin($login: String!, $last: Int!) {
    getPersonalEval(login: $login) {
      countRecord(last: $last) {
        at
        value
      }
    }
  }
`);

export const CountRecord = () => {
  const { login } = useContext(UserProfileContext);

  const title = '월간 평가 횟수 추이';
  const { loading, error, data } = useQuery(GET_COUNT_RECORD_BY_LOGIN, {
    variables: {
      login,
      last: 12,
    },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { countRecord } = data.getPersonalEval;
  const seriesData = countRecord.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '평가 횟수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <CountRecordChart series={series} />
    </DashboardContent>
  );
};

type CountRecordChartProps = {
  series: ApexAxisChartSeries;
};

const CountRecordChart = ({ series }: CountRecordChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',

      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '회'),
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
