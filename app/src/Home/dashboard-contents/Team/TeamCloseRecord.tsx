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

const GET_TEAM_CLOSE_RECORD = gql(/* GraphQL */ `
  query GetTeamCloseRecord($last: Int!) {
    getHomeTeam {
      teamCloseRecord(last: $last) {
        at
        value
      }
    }
  }
`);

export const TeamCloseRecord = () => {
  const title = '일간 팀 제출 횟수 추이';
  const { loading, error, data } = useQuery(GET_TEAM_CLOSE_RECORD, {
    variables: {
      last: 30,
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

  const { teamCloseRecord } = data.getHomeTeam;
  const seriesData = teamCloseRecord.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '제출 횟수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <EvalCountRecordChart series={series} />
    </DashboardContent>
  );
};

type EvalCountRecordChartProps = {
  series: ApexAxisChartSeries;
};

const EvalCountRecordChart = ({ series }: EvalCountRecordChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM d',
        datetimeUTC: false,
      },
    },
    tooltip: {
      x: {
        format: 'M월 d일',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '회'),
      },
    },
  };
  return <AreaChart series={series} options={options} />;
};
