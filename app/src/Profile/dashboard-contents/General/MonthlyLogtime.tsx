import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberCompare } from '@shared/components/DashboardContentView/NumberCompare';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_LOGTIME_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetLogtimeByDateTemplate(
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

export const MonthlyLogtime = () => {
  const { username } = useParams() as { username: string };

  const title = '월간 접속 시간';
  const { loading, error, data } = useQuery(GET_LOGTIME_BY_DATE_TEMPLATE, {
    variables: {
      login: username,
      currDateTemplate: DateTemplate.CurrMonth,
      lastDateTemplate: DateTemplate.LastMonth,
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

  const {
    currData: { data: currLogtime, start, end },
    lastData: { data: lastLogtime },
  } = data.getPersonalGeneral;
  const currLogtimeByHours = Math.floor(currLogtime / 60);
  const lastLogtimeByHours = Math.floor(lastLogtime / 60);
  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;
  const unit = '시간';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currLogtimeByHours}
        last={lastLogtimeByHours}
        unit={unit}
      />
    </DashboardContent>
  );
};