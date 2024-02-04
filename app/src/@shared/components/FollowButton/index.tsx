import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { H3BoldText } from '@shared/ui-kit';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

import { FollowButtonActive } from './FollowButtonActive';

export type FollowButtonColor = 'absoluteBlack' | 'default';

type FollowButtonProps = {
  id: number;
  followStatusFromList?: boolean | undefined;
  color?: FollowButtonColor;
};

type LayoutProps = {
  color: FollowButtonColor;
};

export const FollowButton = ({
  id,
  followStatusFromList = undefined,
  color = 'default',
}: FollowButtonProps) => {
  const theme = useTheme();
  const [needFollowData, setNeedFollowData] = useState<boolean>(
    followStatusFromList === undefined,
  );
  const [hitFollow] = useMutation(FOLLOW_USER, {
    onCompleted: () => {
      setNeedFollowData(true);
    },
  });
  const [hitUnfollow] = useMutation(UNFOLLOW_USER, {
    onCompleted: () => {
      setNeedFollowData(true);
    },
  });

  const handleClick = () => {
    if (followStatusFromList) {
      hitUnfollow({ variables: { id: id } });
    } else {
      hitFollow({ variables: { id: id } });
    }
  };

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
    <>
      {needFollowData ? (
        <FollowButtonActive color={color} id={id} />
      ) : (
        <FollowButtonLayout color={color} onClick={handleClick}>
          <H3BoldText
            color={
              color === 'absoluteBlack'
                ? theme.colors.mono.absolute.white
                : theme.colors.mono.black
            }
          >
            {followStatusText(followStatusFromList)}
          </H3BoldText>
        </FollowButtonLayout>
      )}
    </>
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
