import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';

import { followErrorDialogAtom } from '@core/atoms/followErrorDialogAtom';

import { GET_IS_FOLLOWING } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

import { followStatusText } from '.';

type FollowButtonStatusProps = {
  id: number;
  isFollowing: boolean | undefined;
  onIsFollowingChange: (isFollowing: boolean) => void;
};

export const FollowButtonStatus = ({
  id,
  isFollowing,
  onIsFollowingChange,
}: FollowButtonStatusProps) => {
  const { data, error } = useQuery(GET_IS_FOLLOWING, {
    variables: { id },
  });
  const setFollowErrorDialog = useSetAtom(followErrorDialogAtom);

  useEffect(() => {
    if (data && !error) {
      onIsFollowingChange(data.getIsFollowing);
    }
    if (error) {
      setFollowErrorDialog(true);
    }
  }, [data, error, onIsFollowingChange, setFollowErrorDialog]);

  return <>{followStatusText(isFollowing)}</>;
};
