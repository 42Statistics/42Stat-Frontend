import { useMutation } from '@apollo/client';
import { useSetAtom } from 'jotai';

import { followErrorDialogAtom } from '@core/atoms/followErrorDialogAtom';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

type HitFollowProps = {
  id: number;
  setIsFollowingLocalState: (isFollowing: boolean) => void;
};

export const useHitFollow = ({
  id,
  setIsFollowingLocalState,
}: HitFollowProps) => {
  const [hitFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW_USER, {
      onCompleted: () => {
        setIsFollowingLocalState(true);
      },
    });
  const [hitUnfollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW_USER, {
      onCompleted: () => {
        setIsFollowingLocalState(false);
      },
    });
  const setFollowErrorDialog = useSetAtom(followErrorDialogAtom);

  const loading = loadingFollow || loadingUnfollow;
  const error = errorFollow || errorUnfollow;

  if (error) {
    setFollowErrorDialog(true);
  }

  const handleHitFollow = async () => {
    if (loading) return;
    hitFollow({ variables: { id: id } });
  };
  const handleHitUnfollow = async () => {
    if (loading) return;
    hitUnfollow({ variables: { id: id } });
  };

  return {
    handleHitFollow,
    handleHitUnfollow,
  };
};
