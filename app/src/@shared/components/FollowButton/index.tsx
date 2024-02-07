import { useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { H3BoldText } from '@shared/ui-kit';

import { useHitFollow } from '@/Profile/hooks/useHitFollow';

import { FollowButtonStatus } from './FollowButtonStatus';

export type FollowButtonColor = 'absoluteBlack' | 'default';

type FollowButtonProps = {
  id: number;
  followStatusFromList?: boolean | undefined;
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
  followStatusFromList = undefined,
  color = 'default',
}: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean | undefined>(
    followStatusFromList,
  );

  const theme = useTheme();
  const { handleHitFollow, handleHitUnfollow, error } = useHitFollow({
    id,
    setIsFollowing,
  });

  const handleClick = () => {
    if (isFollowing === undefined) return undefined;

    if (isFollowing) {
      handleHitUnfollow();
      setIsFollowing(false);
    } else {
      handleHitFollow();
      setIsFollowing(true);
    }
  };

  //todo: modal로 변경
  if (error) {
    console.error(error);
  }

  return (
    <FollowButtonLayout color={color} onClick={handleClick}>
      <H3BoldText
        color={
          color === 'absoluteBlack'
            ? theme.colors.mono.absolute.white
            : theme.colors.mono.black
        }
      >
        {isFollowing === undefined ? (
          <FollowButtonStatus id={id} onIsFollowingChange={setIsFollowing} />
        ) : (
          followStatusText(isFollowing)
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
