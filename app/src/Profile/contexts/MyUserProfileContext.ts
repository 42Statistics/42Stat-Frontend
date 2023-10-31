import { createContext } from 'react';

import type { UserProfile } from '@shared/types/UserProfile';

export const MyUserProfileContext = createContext<UserProfile>(
  {} as UserProfile,
);
