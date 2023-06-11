import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberCompare } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_LOGTIME_INFO = gql(/* GraphQL */ `
  query getLogtimeInfo($login: String!) {
    getPersonalGeneralPage(login: $login) {
      currMonthLogtime: logtimeByDateTemplate(dateTemplate: CURR_MONTH) {
        data
        start
        end
      }
      lastMonthLogtime: logtimeByDateTemplate(dateTemplate: LAST_MONTH) {
        data
        start
        end
      }
    }
  }
`);

export const LogtimeInfo = () => {
  const { username } = useParams() as { username: string };

  const title = '월간 출석 시간';
  const { loading, error, data } = useQuery(GET_LOGTIME_INFO, {
    variables: { login: username },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { currMonthLogtime, lastMonthLogtime } = data.getPersonalGeneralPage;
  const { start, end } = currMonthLogtime;
  const description = `${dayjs(start).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthLogtime.data}
        last={lastMonthLogtime.data}
        unit="시간"
      />
    </DashboardContent>
  );
};
