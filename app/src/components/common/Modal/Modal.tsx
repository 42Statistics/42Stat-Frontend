import { usePreventScroll } from '@/hooks/usePreventScroll';
import type { ModalBaseProps } from '@/types/Modal';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Portal } from './Portal';

type ModalProps = ModalBaseProps & React.PropsWithChildren;

export const Modal = ({ isOpen, children }: ModalProps) => {
  const { preventScroll, allowScroll } = usePreventScroll();

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen, preventScroll, allowScroll]);

  return <Portal>{isOpen && <Layout>{children}</Layout>}</Portal>;
};

const Layout = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
