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

const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query getPrefferedCluster {
    getPersonGeneralPage {
      logtimeInfo {
        data {
          preferredCluster
        }
        from
        to
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
  const { from, to } = data.getPersonGeneralPage.logtimeInfo;

  const title = '주 접속 클러스터';
  const description = `${dayjs(from).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <TextDefault text={`클러스터 ${preferredCluster.toUpperCase()}`} />
    </DashboardContent>
  );
};
