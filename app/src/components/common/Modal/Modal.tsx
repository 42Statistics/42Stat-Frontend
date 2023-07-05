import { usePreventScroll } from '@/hooks/usePreventScroll';
import type { ModalType } from '@/types/Modal';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Portal } from './Portal';

type ModalProps = ModalType & React.PropsWithChildren;

export const Modal = ({ isOpen, children }: ModalProps) => {
  const { preventScroll, allowScroll } = usePreventScroll();

  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen, preventScroll, allowScroll]);

  return (
    <Portal>
      <Layout isOpen={isOpen}>{children}</Layout>
    </Portal>
  );
};

type LayoutProps = {
  isOpen: boolean;
};

// FIXME: Modal !isOpen일 때도 컴포넌트가 남아있어야 애니메이션이 되는데, 그렇게 하면 모달 생성 및 삭제 자체가 부자연스러워짐.
// 현재는 Drawer의 애니메이션이 작동하지 않음.
const Layout = styled.div<LayoutProps>`
  display: ${({ isOpen }) => !isOpen && 'none'};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
