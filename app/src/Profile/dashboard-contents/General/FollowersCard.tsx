import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { ROUTES } from '@shared/constants/routes';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import { FollowDashboardCardBody } from '@/Profile/components/Follow/FollowDashboardCardBody';

export const FollowersCard = () => {
  const { login, id } = useContext(UserProfileContext);

  const title = '팔로워';

  const { data, loading, error } = useQuery(GET_FOLLOWER_LIST, {
    variables: { id, pageSize: 3, pageNumber: 1 },
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const followerList = data.getFollowerPaginated.nodes;
  const totalCount = data.getFollowerPaginated.totalCount;

  return (
    <DashboardContent title={title}>
      <Link to={ROUTES.PROFILE_FOLLOWERS_OF(login)}>
        <FollowDashboardCardBody
          title={title}
          totalCount={totalCount}
          followList={followerList}
        />
      </Link>
    </DashboardContent>
  );
};
