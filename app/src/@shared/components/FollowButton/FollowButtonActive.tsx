import { useTheme } from '@emotion/react';

import { H3BoldText } from '@shared/ui-kit';

import { useFollow } from '@/Profile/hooks/useFollow';

import { type FollowButtonColor, FollowButtonLayout } from '.';

type FollowButtonActiveProps = {
  color?: FollowButtonColor;
  id: number;
};

export const FollowButtonActive = ({
  id,
  color = 'default',
}: FollowButtonActiveProps) => {
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
    <FollowButtonLayout color={color} onClick={handleFollow}>
      <H3BoldText
        color={
          color === 'absoluteBlack'
            ? theme.colors.mono.absolute.white
            : theme.colors.mono.black
        }
      >
        {followStatusText(followStatus)}
      </H3BoldText>
    </FollowButtonLayout>
  );
};
