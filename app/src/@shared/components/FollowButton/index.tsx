import { useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { H3BoldText } from '@shared/ui-kit';

import { useHitFollow } from '@/Profile/hooks/useHitFollow';

import { FollowButtonStatus } from './FollowButtonStatus';

export type FollowButtonColor = 'absoluteBlack' | 'default';

type FollowButtonProps = {
  id: number;
  isFollowing?: boolean | undefined;
  color?: FollowButtonColor;
};

type LayoutProps = {
  color: FollowButtonColor;
};

export const followStatusText = (followStatus: boolean | undefined) => {
  switch (followStatus) {
    case true:
      return 'Unfollow';
    case false:
      return 'Follow';
    default:
      return 'Unfollow';
  }
};

export const FollowButton = ({
  id,
  isFollowing = undefined,
  color = 'default',
}: FollowButtonProps) => {
  const [isFollowingLocalState, setIsFollowingLocalState] = useState<
    boolean | undefined
  >(isFollowing);

  const theme = useTheme();
  const { handleHitFollow, handleHitUnfollow } = useHitFollow({
    id,
    setIsFollowingLocalState,
  });

  const handleClick = () => {
    if (isFollowingLocalState === undefined) return undefined;

    if (isFollowingLocalState) {
      handleHitUnfollow();
    } else {
      handleHitFollow();
    }
  };

  return (
    <FollowButtonLayout color={color} onClick={handleClick}>
      <H3BoldText
        color={
          color === 'absoluteBlack'
            ? theme.colors.mono.absolute.white
            : theme.colors.mono.black
        }
      >
        {isFollowingLocalState === undefined ? (
          <FollowButtonStatus
            id={id}
            isFollowing={isFollowingLocalState}
            onIsFollowingChange={setIsFollowingLocalState}
          />
        ) : (
          followStatusText(isFollowingLocalState)
        )}
      </H3BoldText>
    </FollowButtonLayout>
  );
};

export const FollowButtonLayout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, color }) =>
      color === 'absoluteBlack'
        ? theme.colors.mono.absolute.white
        : theme.colors.mono.black};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme, color }) =>
    color === 'absoluteBlack'
      ? `${theme.colors.mono.absolute.black}95`
      : theme.colors.mono.white};
  width: 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
