import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { ALT } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Avatar, Text } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useFollow } from '@/Profile/hooks/useFollow';

export const Following = () => {
  const { login } = useContext(UserProfileContext);
  const theme = useTheme();

  const title = 'Following';

  const { followingList, loading, error } = useFollow(login);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!followingList) {
    return <DashboardContentNotFound title={title} />;
  }

  return (
    <DashboardContent title={title}>
      <Link to={ROUTES.PROFILE_FOLLOWING_OF(login)}>
        <Layout>
          {followingList.getFollowingList.followList.map((user) => (
            <Avatar
              key={user.user.login}
              name={user.user.login}
              src={user.user.imgUrl}
              alt={ALT.AVATAR_OF(user.user.login)}
              radius={theme.radius.xs}
            />
          ))}
          <Text style={{ marginLeft: '1rem' }}>
            {followingList.getFollowingList.count === 0
              ? '팔로잉 0'
              : followingList.getFollowingList.count}
          </Text>
        </Layout>
      </Link>
    </DashboardContent>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  &:hover {
    border-radius: ${({ theme }) => theme.radius.xs};
    border: 1.5px solid ${({ theme }) => theme.colors.mono.gray400};
  }
`;
