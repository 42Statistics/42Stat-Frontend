import { UserProfile } from '@shared/__generated__/graphql';
import { createContext } from 'react';

export const UserProfileContext = createContext<UserProfile>({} as UserProfile);
