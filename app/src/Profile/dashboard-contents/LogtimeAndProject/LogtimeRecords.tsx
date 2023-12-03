import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_LOGTIME_RECORDS_BY_LOGIN = gql(/* GraphQL */ `
  query GetLogtimeRecords($login: String!, $last: Int!) {
    getPersonalGeneral(login: $login) {
      logtimeRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const LogtimeRecords = () => {
  const { login } = useContext(UserProfileContext);

  const title = '월간 접속 시간 추이';
  const { loading, error, data } = useQuery(GET_LOGTIME_RECORDS_BY_LOGIN, {
    variables: {
      login,
      last: 48,
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

  const { logtimeRecords } = data.getPersonalGeneral;
  const seriesData = logtimeRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '접속 시간',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <LogtimeRecordsChart series={series} />
    </DashboardContent>
  );
};

type LogtimeRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const LogtimeRecordsChart = ({ series }: LogtimeRecordsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',

      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => Math.floor(value / 60).toString(),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) =>
          `${numberWithUnitFormatter(
            Math.floor(value / 60),
            '시간',
          )} ${numberWithUnitFormatter(value % 60, '분')}`,
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
