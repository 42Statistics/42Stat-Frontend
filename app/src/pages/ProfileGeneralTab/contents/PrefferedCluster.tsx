import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query getPrefferedCluster($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
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
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '주 접속 클러스터';
  const { loading, error, data } = useQuery(GET_PREFERRED_CLUSTER, {
    variables: { uid: username === 'me' ? user.id : 110650 },
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

  const { preferredCluster } = data.getPersonGeneralPage.logtimeInfo.data;
  const { from, to } = data.getPersonGeneralPage.logtimeInfo;
  const description = `${dayjs(from).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <TextDefault text={`클러스터 ${preferredCluster.toUpperCase()}`} />
    </DashboardContent>
  );
};
