import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
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
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currMonthLogtime, lastMonthLogtime } =
    data.getPersonGeneralPage.logtimeInfo;

  return (
    <TextCompare curr={currMonthLogtime} last={lastMonthLogtime} unit="시간" />
  );
};
