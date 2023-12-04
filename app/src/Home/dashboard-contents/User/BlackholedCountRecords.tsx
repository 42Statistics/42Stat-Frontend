import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { CALENDAR_MONTHS_FROM_FT_BEGIN_AT } from '@shared/constants/date';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { injectEmptyMonth } from '@shared/utils/injectEmptyMonth';

const GET_BLACKHOLED_COUNT_RECORDS = gql(/* GraphQL */ `
  query GetBlackholedCountRecords($last: Int!) {
    getHomeUser {
      blackholedCountRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const BlackholedCountRecords = () => {
  const title = '월간 블랙홀 인원 추이';
  const last = CALENDAR_MONTHS_FROM_FT_BEGIN_AT + 1;

  const { loading, error, data } = useQuery(GET_BLACKHOLED_COUNT_RECORDS, {
    variables: {
      last,
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

  const { blackholedCountRecords } = data.getHomeUser;
  const seriesData = injectEmptyMonth(
    blackholedCountRecords.map(({ at, value }) => ({
      x: new Date(at),
      y: value,
    })),
    last,
  );

  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <BlackholedCountRecordsChart series={series} />
    </DashboardContent>
  );
};

type BlackholedCountRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const BlackholedCountRecordsChart = ({
  series,
}: BlackholedCountRecordsChartProps) => {
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
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
