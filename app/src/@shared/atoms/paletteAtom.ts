import { atom } from 'jotai';
import { ThemePreference } from './themePreferenceAtom';

export type Palette = Omit<ThemePreference, 'system'>;

export const paletteAtom = atom<Palette>('light');
