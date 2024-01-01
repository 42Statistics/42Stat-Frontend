import { atom } from 'jotai';

import { TooltipPosition } from '@shared/types/TooltipPosition';

export type TooltipAtomProps = {
  ref: HTMLDivElement | null;
  text: string;
  position: TooltipPosition;
};

export const tooltipAtom = atom<TooltipAtomProps>({
  ref: null,
  text: '',
  position: 'top',
});
