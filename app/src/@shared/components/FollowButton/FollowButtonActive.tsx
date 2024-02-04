import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { H3BoldText } from '@shared/ui-kit';

import { useFollow } from '@/Profile/hooks/useFollow';

export const FollowButtonActive = ({ id }: { id: number }) => {
  const theme = useTheme();
  const { handleFollow, followStatus } = useFollow(id);

  const followStatusText = (followStatus: boolean | undefined) => {
    switch (followStatus) {
      case true:
        return 'Unfollow';
      case false:
        return 'Follow';
      default:
        return 'Unfollow';
    }
  };

  return (
    <Layout onClick={handleFollow}>
      <H3BoldText color={theme.colors.mono.absolute.white}>
        {followStatusText(followStatus)}
      </H3BoldText>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.mono.absolute.white};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.absolute.black}95;
  width: 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
