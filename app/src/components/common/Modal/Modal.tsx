import { usePreventScroll } from '@/hooks/usePreventScroll';
import type { ModalBaseProps } from '@/types/Modal';
import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Portal } from './Portal';

type ModalProps = PropsWithReactElementChildren<ModalBaseProps>;

export const Modal = ({ isOpen, children }: ModalProps) => {
  const { preventScroll, allowScroll } = usePreventScroll();

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen, preventScroll, allowScroll]);

  return (
    <>
      {isOpen && (
        <Portal>
          <Layout>{children}</Layout>
        </Portal>
      )}
    </>
  );
};

const Layout = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
