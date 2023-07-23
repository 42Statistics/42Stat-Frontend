import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { MODAL_ID } from '@shared/constants/HTML_ID';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithReactElementChildren) => {
  return createPortal(
    children,
    document.getElementById(MODAL_ID) as HTMLElement,
  );
};
