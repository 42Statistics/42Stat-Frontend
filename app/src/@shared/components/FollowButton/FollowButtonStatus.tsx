import { useQuery } from '@apollo/client';

import { H3BoldText } from '@shared/ui-kit';

import { GET_IS_FOLLOWING } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

import { followStatusText } from '.';

type FollowButtonStatusProps = {
  id: number;
  onIsFollowingChange: (isFollowing: boolean) => void;
};

export const FollowButtonStatus = ({
  id,
  onIsFollowingChange,
}: FollowButtonStatusProps) => {
  const { data, loading, error } = useQuery(GET_IS_FOLLOWING, {
    variables: { id },
  });

  if (!data || loading || error)
    return <H3BoldText>{followStatusText(false)}</H3BoldText>;

  const isFollowing = data.getIsFollowing;

  onIsFollowingChange(isFollowing);

  return <H3BoldText>{followStatusText(isFollowing)}</H3BoldText>;
};
