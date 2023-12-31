import { useContext, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import { FollowListEdge } from '@shared/__generated__/graphql';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import Follow from '@/Profile/dashboard-contents/Follow';

const FollowerPage = () => {
  const { login } = useContext(UserProfileContext);

  //todo: variable page size, page number 추가 필요
  const { data, loading, error, refetch } = useQuery(GET_FOLLOWER_LIST, {
    variables: { login: login },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  const followList = data.getFollowerPaginated.edges.map(
    (item: FollowListEdge) => item.node.user,
  );
  const totalCount = data.getFollowerPaginated.pageInfo.totalCount;

  return (
    <>
      <Follow followList={followList} totalCount={totalCount} />
    </>
  );
};

export default FollowerPage;
