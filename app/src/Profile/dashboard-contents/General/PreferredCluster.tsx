import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import dayjs from 'dayjs';
import { useContext } from 'react';

const GET_PREFERRED_CLUSTER_BY_DATE_TEMPLATE_BY_LOGIN = gql(/* GraphQL */ `
  query GetPreferredClusterByDateTemplateByLogin(
    $login: String!
    $dateTemplate: DateTemplate!
  ) {
    getPersonalGeneral(login: $login) {
      preferredClusterByDateTemplate(dateTemplate: $dateTemplate) {
        data {
          name
        }
        start
        end
      }
    }
  }
`);

export const PreferredCluster = () => {
  const { login } = useContext(UserProfileContext);

  const title = '주 접속 클러스터';
  const { loading, error, data } = useQuery(
    GET_PREFERRED_CLUSTER_BY_DATE_TEMPLATE_BY_LOGIN,
    {
      variables: { login, dateTemplate: DateTemplate.CurrMonth },
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
    data: preferredCluster,
    start,
    end,
  } = data.getPersonalGeneral.preferredClusterByDateTemplate;

  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;

  return (
    <DashboardContent title={title} description={description}>
      {preferredCluster.name != null ? (
        <TextDefault text={`클러스터 ${preferredCluster.name.toUpperCase()}`} />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
