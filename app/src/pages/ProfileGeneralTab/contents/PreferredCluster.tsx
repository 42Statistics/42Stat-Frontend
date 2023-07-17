import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/Text/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

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
  const { username } = useParams() as { username: string };

  const title = '주 접속 클러스터';
  const { loading, error, data } = useQuery(
    GET_PREFERRED_CLUSTER_BY_DATE_TEMPLATE_BY_LOGIN,
    {
      variables: { login: username, dateTemplate: DateTemplate.CurrMonth },
    },
  );
  if (loading) return <DashboardContentLoading title={title} />;
  if (error)
    return <DashboardContentBadRequest title={title} message={error.message} />;
  if (!data) return <DashboardContentNotFound title={title} />;

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
