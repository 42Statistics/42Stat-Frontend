import { atomWithStorage } from 'jotai/utils';

import { LOCAL_STORAGE_KEYS } from '@shared/constants/storage';

export type ThemePreference = 'light' | 'dark' | 'system';

export const themePreferenceAtom = atomWithStorage<ThemePreference>(
  LOCAL_STORAGE_KEYS.THEME_PREFERENCE,
  'light',
);
