import { useTheme } from '@emotion/react';
import type { ModalBaseProps } from '@shared/types/Modal';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { usePreventScroll } from '@shared/utils/hooks/usePreventScroll';
import { useEffect } from 'react';
import { Portal } from './Portal';

type ModalProps = PropsWithReactElementChildren<
  ModalBaseProps & {
    zIndex?: number;
  }
>;

export const Modal = ({ isOpen, children, zIndex }: ModalProps) => {
  const theme = useTheme();

  const { preventScroll, allowScroll } = usePreventScroll();

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen, preventScroll, allowScroll]);

  return (
    <>
      {isOpen ? (
        <Portal>
          <div style={{ zIndex: zIndex ?? theme.zIndex.modal }}>{children}</div>
        </Portal>
      ) : null}
    </>
  );
};
