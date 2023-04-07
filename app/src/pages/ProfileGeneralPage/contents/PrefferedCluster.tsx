import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query getPrefferedCluster {
    getPersonGeneralPage {
      logtimeInfo {
        preferredCluster
      }
    }
  }
`);

export const PrefferedCluster = () => {
  const { loading, error, data } = useQuery(GET_PREFERRED_CLUSTER);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const theme = useTheme();

  const { preferredCluster } = data.getPersonGeneralPage.logtimeInfo;

  return <TextDefault text={`클러스터 ${preferredCluster}`} />;
};
