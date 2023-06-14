import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { TextDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query GetPreferredClusterByDateTemplate(
    $login: String!
    $dateTemplate: DateTemplate!
  ) {
    getPersonalGeneralPage(login: $login) {
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

export const PrefferedCluster = () => {
  const { username } = useParams() as { username: string };

  const title = '주 접속 클러스터';
  const { loading, error, data } = useQuery(GET_PREFERRED_CLUSTER, {
    variables: { login: username, dateTemplate: DateTemplate.CurrMonth },
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

  const { data: preferredCluster, start } =
    data.getPersonalGeneralPage.preferredClusterByDateTemplate;

  const description = `${dayjs(start).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      {preferredCluster.name != null ? (
        <TextDefault text={`클러스터 ${preferredCluster.name.toUpperCase()}`} />
      ) : (
        <TextDefault text="출석 기록이 없어요 😓" />
      )}
    </DashboardContent>
  );
};
