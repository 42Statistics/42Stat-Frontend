import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
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

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currMonthLogtime, lastMonthLogtime } =
    data.getPersonGeneralPage.logtimeInfo.data;

  return (
    <NumberCompare
      curr={currMonthLogtime}
      last={lastMonthLogtime}
      unit="시간"
    />
  );
};
