import { createPortal } from 'react-dom';

const MODAL_ID = 'modal';

export const Portal = ({ children }: React.PropsWithChildren) => {
  return createPortal(
    children,
    document.getElementById(MODAL_ID) as HTMLElement,
  );
};
