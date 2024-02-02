import { useContext, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWING_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import Follow from '@/Profile/dashboard-contents/Follow';

const FollowingPage = () => {
  const { id } = useContext(UserProfileContext);

  //todo: variable page size, page number 추가 필요
  const { data, loading, error, refetch } = useQuery(GET_FOLLOWING_LIST, {
    variables: { id: id, pageSize: 20, pageNumber: 1 },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  const followList = data.getFollowingPaginated.nodes;
  const totalCount = data.getFollowingPaginated.totalCount;

  return (
    <>
      <Follow followList={followList} totalCount={totalCount} />
    </>
  );
};

export default FollowingPage;