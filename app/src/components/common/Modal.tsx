import { ModalType } from '@/utils/types/Modal';
import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 컨테이너 CSS
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// z-index: ${({ theme }) => theme.zIndex.modal};
export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS
  z-index: 500;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalView = styled.div`
  // Modal창 CSS를 구현합니다.
  padding: 4rem;
  display: flex;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

type ModalProps = ModalType & React.PropsWithChildren;

export const Modal = ({ isOpen, toggle, children }: ModalProps) => {
  const openModalHandler = () => {
    toggle();
  };
  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView role="dialog" onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
