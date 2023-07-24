import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberCompare } from '@shared/components/DashboardContentView/NumberCompare';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_LOGTIME_BY_DATE_TEMPLATE_VERSUS = gql(/* GraphQL */ `
  query GetLogtimeByDateTemplateVersus(
    $login1: String!
    $login2: String!
    $dateTemplate: DateTemplate!
  ) {
    data1: getPersonalGeneral(login: $login1) {
      logtimeByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
    data2: getPersonalGeneral(login: $login2) {
      logtimeByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const TotalLogtime = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '누적 접속 시간';
  const { loading, error, data } = useQuery(
    GET_LOGTIME_BY_DATE_TEMPLATE_VERSUS,
    {
      variables: {
        login1: username,
        login2: user.login,
        dateTemplate: DateTemplate.Total,
      },
    },
  );

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
    data1: {
      logtimeByDateTemplate: { data: logtime },
    },
    data2: {
      logtimeByDateTemplate: { data: myLogtime },
    },
  } = data;
  const logtimeByHours = Math.floor(logtime / 60);
  const myLogtimeByHours = Math.floor(myLogtime / 60);
  const unit = '시간';

  return (
    <DashboardContent title={title}>
      <NumberCompare
        curr={logtimeByHours}
        last={myLogtimeByHours}
        unit={unit}
      />
    </DashboardContent>
  );
};
