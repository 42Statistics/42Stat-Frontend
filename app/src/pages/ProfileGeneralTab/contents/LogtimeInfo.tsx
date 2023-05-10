import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { dateFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_LOGTIME_INFO = gql(/* GraphQL */ `
  query getLogtimeInfo {
    getPersonGeneralPage {
      logtimeInfo {
        data {
          currMonthLogtime
          lastMonthLogtime
          preferredTime {
            morning
            daytime
            evening
            night
          }
          preferredCluster
        }
        from
        to
      }
    }
  }
`);

export const LogtimeInfo = () => {
  const { loading, error, data } = useQuery(GET_LOGTIME_INFO);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currMonthLogtime, lastMonthLogtime } =
    data.getPersonGeneralPage.logtimeInfo.data;
  const { from, to } = data.getPersonGeneralPage.logtimeInfo;
  const [fromStr, toStr] = [dateFormatter(from, 'lg'), dateFormatter(to, 'lg')];

  const title = '월간 출석 시간';
  const description = `(${fromStr} 시작 / 1개월)`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthLogtime}
        last={lastMonthLogtime}
        unit="시간"
      />
    </DashboardContent>
  );
};
