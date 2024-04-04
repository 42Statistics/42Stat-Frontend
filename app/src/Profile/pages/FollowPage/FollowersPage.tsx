import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { Seo } from '@shared/components/Seo';
import { VStack } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import Follow from '@/Profile/components/Follow';
import { followPageArgs } from '@/Profile/utils/followPageArgs';
import { FollowPageHeader } from '@/Profile/components/Follow/FollowPageHeader';

const FollowerPage = () => {
  const { id } = useContext(UserProfileContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const { pageNumber, pageSize } = followPageArgs(searchParams);
  const title = '팔로워';

  const { data, loading, error } = useQuery(GET_FOLLOWER_LIST, {
    variables: { id: id, pageSize: pageSize, pageNumber: pageNumber },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  const myFollow = data.getFollowerPaginated.nodes;
  const totalCount = data.getFollowerPaginated.totalCount;

  return (
    <>
      <Seo title={title} />
      <VStack w="100%" spacing="2rem" align="start">
        <FollowPageHeader title={title} totalCount={totalCount} />
        <Follow
          myFollow={myFollow}
          totalCount={totalCount}
          currentPage={pageNumber}
          setSearchParams={setSearchParams}
        />
      </VStack>
    </>
  );
};

export default FollowerPage;
