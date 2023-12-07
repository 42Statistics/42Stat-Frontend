import { useTheme } from '@emotion/react';

import { Skeleton } from '@shared/ui-kit';

export const LeaderboardListItemSkeleteon = () => {
  const theme = useTheme();

  return <Skeleton w="100%" h="5rem" radius={theme.radius.sm} />;
};
