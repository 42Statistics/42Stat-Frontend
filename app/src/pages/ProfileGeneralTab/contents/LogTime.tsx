import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_LOGTIME_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query getLogtimeByDateTemplate(
    $login: String!
    $currDateTemplate: DateTemplate!
    $lastDateTemplate: DateTemplate!
  ) {
    getPersonalGeneral(login: $login) {
      currData: logtimeByDateTemplate(dateTemplate: $currDateTemplate) {
        data
        start
        end
      }
      lastData: logtimeByDateTemplate(dateTemplate: $lastDateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const LogTime = () => {
  const { username } = useParams() as { username: string };

  const title = '월간 접속 시간';
  const { loading, error, data } = useQuery(GET_LOGTIME_BY_DATE_TEMPLATE, {
    variables: {
      login: username,
      currDateTemplate: DateTemplate.CurrMonth,
      lastDateTemplate: DateTemplate.LastMonth,
    },
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

  const {
    currData: { data: CurrLogTime, start, end },
    lastData: { data: LastLogTime },
  } = data.getPersonalGeneral;
  const currLogTimeByHours = Math.floor(CurrLogTime / 60);
  const lastLogTimeByHours = Math.floor(LastLogTime / 60);
  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currLogTimeByHours}
        last={lastLogTimeByHours}
        unit="시간"
      />
    </DashboardContent>
  );
};
