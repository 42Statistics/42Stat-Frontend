import { MODAL_ID } from '@/constants/HTML_ID';
import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithReactElementChildren) => {
  return createPortal(
    children,
    document.getElementById(MODAL_ID) as HTMLElement,
  );
};
