import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

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
  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_POOLED_AT);
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

  const { pooledAt } = data.getPersonGeneralPage.userProfile;

  return (
    <DashboardContent title={title}>
      <TextDefault text={dayjs(pooledAt).format('YYYY년 M월 D일')} />
    </DashboardContent>
  );
};
