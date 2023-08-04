import { UserProfile } from '@shared/__generated__/graphql';
import { createContext } from 'react';

export const MyUserProfileContext = createContext<UserProfile>(
  {} as UserProfile,
);
