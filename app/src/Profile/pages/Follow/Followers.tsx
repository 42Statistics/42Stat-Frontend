import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import Follow from '@/Profile/dashboard-contents/Follow';
import { followPageArgs } from '@/Profile/utils/followPageArgs';

const FollowerPage = () => {
  const { id } = useContext(UserProfileContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageNumber, pageSize } = followPageArgs(searchParams);

  const { data, loading, error, refetch } = useQuery(GET_FOLLOWER_LIST, {
    variables: { id: id, pageSize: pageSize, pageNumber: pageNumber },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  const followList = data.getFollowerPaginated.nodes;
  const totalCount = data.getFollowerPaginated.totalCount;

  return (
    <>
      <Follow
        followList={followList}
        totalCount={totalCount}
        currentPage={pageNumber}
        setSearchParams={setSearchParams}
      />
    </>
  );
};

export default FollowerPage;
