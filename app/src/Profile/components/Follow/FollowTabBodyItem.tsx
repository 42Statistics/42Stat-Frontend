import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { MyFollow } from '@shared/__generated__/graphql';
import { userAtom } from '@shared/atoms/userAtom';
import { FollowButton } from '@shared/components/FollowButton';
import { ALT } from '@shared/constants/accessibility';
import { Avatar, H3BoldText } from '@shared/ui-kit';
import { ROUTES } from '@shared/constants/routes';

type FollowItemProps = {
  user: MyFollow;
};

export const FollowTabBodyItem = ({ user }: FollowItemProps) => {
  const { id: userId } = useAtomValue(userAtom);
  const { id, login, imgUrl } = user.userPreview;
  const theme = useTheme();

  return (
    <Layout>
      <Link to={ROUTES.PROFILE_GENERAL_OF(login)}>
        <ProfileLayout>
          <Avatar
            size="2xl"
            name={login}
            src={imgUrl}
            alt={ALT.AVATAR_OF(login)}
          />
          <H3BoldText color={theme.colors.mono.black}>{login}</H3BoldText>
        </ProfileLayout>
      </Link>
      {userId !== id && <FollowButton id={id} isFollowing={user.isFollowing} />}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
