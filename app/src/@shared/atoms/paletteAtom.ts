import { atom } from 'jotai';

export type Palette = 'light' | 'dark' | 'system';

export const paletteAtom = atom<Palette>('light');
