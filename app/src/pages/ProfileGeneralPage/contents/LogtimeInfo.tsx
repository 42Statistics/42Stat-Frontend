import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_LOGTIME_INFO = gql(/* GraphQL */ `
  query getLogtimeInfo {
    getPersonGeneralPage {
      logtimeInfo {
        currMonthLogtime
        lastMonthLogtime
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
    data.getPersonGeneralPage.logtimeInfo;

  return (
    <TextCompare curr={currMonthLogtime} last={lastMonthLogtime} unit="시간" />
  );
};
