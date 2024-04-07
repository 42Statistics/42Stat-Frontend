import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { Footer } from '@core/components/Footer';

import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Seo } from '@shared/components/Seo';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import { FollowTabBody } from '@/Profile/components/Follow/FollowTabBody';
import { followPageArgs } from '@/Profile/utils/followPageArgs';
import { FollowPageHeader } from '@/Profile/components/Follow/FollowPageHeader';
import { ProfileFollowPageSkeleton } from '@/Profile/components/skeletons/ProfileFollowPageSkeleton';

const FollowerPage = () => {
  const { id } = useContext(UserProfileContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const { pageNumber, pageSize } = followPageArgs(searchParams);
  const title = '팔로워';

  const { data, loading, error } = useQuery(GET_FOLLOWER_LIST, {
    variables: { id: id, pageSize: pageSize, pageNumber: pageNumber },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <ProfileFollowPageSkeleton title={title} />;
  if (error || !data) return <FullPageApolloErrorView />;

  const myFollow = data.getFollowerPaginated.nodes;
  const totalCount = data.getFollowerPaginated.totalCount;

  return (
    <>
      <Seo title={title} />
      <FollowPageHeader title={title} totalCount={totalCount} />
      <FollowTabBody
        myFollow={myFollow}
        totalCount={totalCount}
        currentPage={pageNumber}
        setSearchParams={setSearchParams}
      />
      <Footer />
    </>
  );
};

export default FollowerPage;
