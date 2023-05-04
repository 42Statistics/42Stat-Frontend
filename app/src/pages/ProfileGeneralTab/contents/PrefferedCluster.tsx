import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query getPrefferedCluster {
    getPersonGeneralPage {
      logtimeInfo {
        data {
          preferredCluster
        }
      }
    }
  }
`);

export const PrefferedCluster = () => {
  const { loading, error, data } = useQuery(GET_PREFERRED_CLUSTER);
  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { preferredCluster } = data.getPersonGeneralPage.logtimeInfo.data;

  return <TextDefault text={`클러스터 ${preferredCluster.toUpperCase()}`} />;
};
