import { createContext } from 'react';

import type { UserProfile } from '@shared/__generated__/graphql';

export const UserProfileContext = createContext<UserProfile>({} as UserProfile);
