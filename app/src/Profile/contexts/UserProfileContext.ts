import { createContext } from 'react';

import type { UserProfile } from '@shared/types/UserProfile';

export const UserProfileContext = createContext<UserProfile>({} as UserProfile);
