import type { ModalType } from '@/types/Modal';
import { Center, Overlay } from '@components/common';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const ModalView = styled.div`
  display: flex;
  padding: 4rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

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

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const prevScrollY = preventScroll();
      return () => allowScroll(prevScrollY);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <>
          {createPortal(
            <Overlay onClick={onClose}>
              <Center>
                <ModalView role="dialog" onClick={(e) => e.stopPropagation()}>
                  {children}
                </ModalView>
              </Center>
            </Overlay>,
            document.getElementById('modal') as HTMLElement,
          )}
        </>
      ) : null}
    </>
  );
};
