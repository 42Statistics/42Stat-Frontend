import { atomWithStorage } from 'jotai/utils';

export type ThemePreference = 'light' | 'dark' | 'system';

export const themePreferenceAtom = atomWithStorage<ThemePreference>(
  'theme_preference',
  'light',
);
