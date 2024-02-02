import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { FollowList } from '@shared/__generated__/graphql';
import { ALT } from '@shared/constants/accessibility';
import { Avatar, H3BoldText } from '@shared/ui-kit';

import { useFollow } from '@/Profile/hooks/useFollow';

const FollowItem = ({ user }: { user: FollowList }) => {
  const { id, login, imgUrl } = user.userPreview;
  const isFollowing = user.isFollowing;
  const theme = useTheme();
  const { handleFollow, followStatus } = useFollow({
    id: id,
    isFollowing: isFollowing,
  });

  const handleFollowStatus = () => {
    handleFollow();
  };

  return (
    <Layout>
      <ProfileLayout>
        <Avatar
          size="2xl"
          name={login}
          src={imgUrl}
          alt={ALT.AVATAR_OF(login)}
        />
        <H3BoldText color={theme.colors.mono.black}>{login}</H3BoldText>
      </ProfileLayout>
      <FollowButtonLayout onClick={handleFollowStatus}>
        <H3BoldText color={theme.colors.mono.black}>
          {followStatus ? 'Unfollow' : 'Follow'}
        </H3BoldText>
      </FollowButtonLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  justify-content: space-around;
  align-items: center;
`;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FollowButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.mono.black};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.white};
  width: 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default FollowItem;
