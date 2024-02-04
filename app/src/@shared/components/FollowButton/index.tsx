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

type FollowButtonProps = {
  id: number;
  followStatusFromList?: boolean | undefined;
};

export const FollowButton = ({
  id,
  followStatusFromList = undefined,
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
        <FollowButtonActive id={id} />
      ) : (
        <Layout onClick={handleClick}>
          <H3BoldText color={theme.colors.mono.absolute.white}>
            {followStatusText(followStatusFromList)}
          </H3BoldText>
        </Layout>
      )}
    </>
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
