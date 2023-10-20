import { atom } from 'jotai';

import type { ThemePreference } from '@shared/atoms/themePreferenceAtom';

export type Palette = Omit<ThemePreference, 'system'>;

export const paletteAtom = atom<Palette>('light');
