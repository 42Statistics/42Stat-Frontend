import { createPortal } from 'react-dom';

import { MODAL_ID } from '@shared/constants/htmlId';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const Portal = ({ children }: PropsWithReactElementChildren) => {
  return createPortal(
    children,
    document.getElementById(MODAL_ID) as HTMLElement,
  );
};
