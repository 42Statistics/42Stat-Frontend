import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { dateFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_POOLED_AT = gql(/* GraphQL */ `
  query getPooledAt {
    getPersonGeneralPage {
      userProfile {
        pooledAt
      }
    }
  }
`);

export const PooledAt = () => {
  const { loading, error, data } = useQuery(GET_POOLED_AT);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { pooledAt } = data.getPersonGeneralPage.userProfile;
  const title = '본과정 시작일';

  return (
    <DashboardContent title={title}>
      <TextDefault text={dateFormatter(pooledAt, 'lg')} />
    </DashboardContent>
  );
};
