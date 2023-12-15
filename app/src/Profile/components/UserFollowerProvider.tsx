import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { TypedDocumentNode } from '@apollo/client/core';

import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import {
  FollowListWithCount,
  FollowResult,
} from '@shared/__generated__/graphql';

import { UserFollowerContext } from '@/Profile/contexts/UserFollowerContext';
import { GET_USER_FOLLOWER_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_FOLLOWER_BY_LOGIN';

export const UserFollowerProvider = ({ children }: React.PropsWithChildren) => {
  const { login } = useParams() as { login: string };

  //todo: error fix
  const [, { loading, error, data }] = useMutation<
    FollowResult | FollowListWithCount
  >(
    GET_USER_FOLLOWER_BY_LOGIN as TypedDocumentNode<
      FollowResult,
      { login: string }
    >,
    {
      variables: { login: login },
    },
  );

  if (loading) {
    return null;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  const followerList = data.__typename === 'FollowListWithCount' ? data : null;

  if (!followerList) {
    return null;
  }

  console.log(followerList);

  return (
    <UserFollowerContext.Provider value={followerList}>
      {children}
    </UserFollowerContext.Provider>
  );
};
