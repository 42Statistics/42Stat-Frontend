import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { MyFollow } from '@shared/__generated__/graphql';
import { userAtom } from '@shared/atoms/userAtom';
import { FollowButton } from '@shared/components/FollowButton';
import { ALT } from '@shared/constants/accessibility';
import { Avatar, H3BoldText } from '@shared/ui-kit';

type FollowItemProps = {
  user: MyFollow;
};

const FollowItem = ({ user }: FollowItemProps) => {
  const { id: userId } = useAtomValue(userAtom);
  const { id, login, imgUrl } = user.userPreview;
  const theme = useTheme();

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
      {userId !== id && <FollowButton id={id} isFollowing={user.isFollowing} />}
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

export default FollowItem;
