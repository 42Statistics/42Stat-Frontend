import type { ModalType } from '@/types/Modal';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Portal } from './Portal';

type ModalProps = ModalType & React.PropsWithChildren;

// https://velog.io/@sunohvoiin/ReactCSS-%EB%AA%A8%EB%8B%AC%EC%B0%BD%EC%9D%B4-%EC%97%B4%EB%A0%A4%EC%9E%88%EC%9D%84-%EB%95%8C-body-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0
const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
  document.body.style.overflowY = 'scroll';
  return currentScrollY;
};

const allowScroll = (prevScrollY: number) => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.overflowY = '';
  window.scrollTo(0, prevScrollY);
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen]);

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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => !isOpen && 'none'};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
