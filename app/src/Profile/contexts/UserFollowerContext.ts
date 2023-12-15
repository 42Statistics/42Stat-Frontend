import { createContext } from 'react';

import { FollowListWithCount } from '@shared/__generated__/graphql';

//todo: type 수정
export const UserFollowerContext = createContext<FollowListWithCount>(
  {} as FollowListWithCount,
);
