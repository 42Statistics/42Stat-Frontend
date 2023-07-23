import { MODAL_ID } from '@/constants/HTML_ID';
import type { DialogBaseProps } from '@/types/Modal';
import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { keyframes, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { fadeIn } from '@shared/styles/custom/fadeIn';
import { isEscapeKeyDown } from '@utils/keyboard';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Modal, Overlay } from '../Modal';

type DialogPosition = 'center' | 'top';

export type DialogProps = PropsWithReactElementChildren<
  DialogBaseProps & {
    position?: DialogPosition;
  }
>;

export const Dialog = ({
  isOpen,
  onClose,
  children,
  position = 'center',
}: DialogProps) => {
  const theme = useTheme();
  const [zIndex, setZIndex] = useState<number>();

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }
    const count = document.getElementById(MODAL_ID)?.childNodes.length ?? 0;
    setZIndex(theme.zIndex.modal + 10 * count);
  }, [isOpen, theme.zIndex.modal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEscapeKeyDown(e) && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Modal isOpen={isOpen} zIndex={zIndex}>
      <Overlay onClick={onClose} style={{ zIndex }} />
      <Layout
        position={position}
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex }}
      >
        {children}
      </Layout>
    </Modal>
  );
};

const slideDownCenterFixed = keyframes`
  from {
    transform: translate(-50%, calc(-50% - 30px));
  }
  
  to {
    transform: translate(-50%, -50%);
  }
`;

const slideDownTopFixed = keyframes`
  from {
    transform: translate(-50%, calc(-30px));
  }

  to {
    transform: translate(-50%, 0);
  } 
`;

type LayoutProps = {
  position: DialogPosition;
};

const Layout = styled.div<LayoutProps>`
  position: fixed;
  top: ${({ position }) => (position === 'top' ? '10%' : '50%')};
  left: 50%;
  transform: ${({ position }) =>
    position === 'top' ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'};
  animation-name: ${fadeIn},
    ${({ position }) =>
      position === 'top' ? slideDownTopFixed : slideDownCenterFixed};
  animation-duration: 0.3s, 0.3s;
`;
