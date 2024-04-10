import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { Loader, VStack } from '@shared/ui-kit';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { MyFollow } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/routes';

import { GET_FOLLOW_LISTS } from '@/Feed/queries/GET_FOLLOW_LISTS';

import { MyFollowCardFollowList } from './MyFollowCardFollowList';

export const MyFollowCard = () => {
  const { login, id } = useAtomValue(userAtom);
  const { data, loading, error } = useQuery(GET_FOLLOW_LISTS, {
    variables: { id, pageSize: 5, pageNumber: 1 },
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <ApolloErrorView />
      </Layout>
    );
  }
  if (!data) {
    return (
      <Layout>
        <ApolloNotFoundView />
      </Layout>
    );
  }

  const followerList: MyFollow[] = data.getFollowerPaginated.nodes;
  const followerTotalCount = data.getFollowerPaginated.totalCount;
  const followingList: MyFollow[] = data.getFollowingPaginated.nodes;
  const followingTotalCount = data.getFollowingPaginated.totalCount;

  return (
    <Layout>
      <MyFollowCardFollowList
        title="팔로워"
        followList={followerList}
        totalCount={followerTotalCount}
        route={ROUTES.PROFILE_FOLLOWERS_OF(login)}
      />
      <MyFollowCardFollowList
        title="팔로잉"
        followList={followingList}
        totalCount={followingTotalCount}
        route={ROUTES.PROFILE_FOLLOWING_OF(login)}
      />
    </Layout>
  );
};

const Layout = styled(VStack)`
  border-sizing: border-box;
  height: 24rem;
  width: 100%;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;
