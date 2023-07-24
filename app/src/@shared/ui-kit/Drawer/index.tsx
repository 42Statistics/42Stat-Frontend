import { keyframes, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal, Overlay } from '@shared/ui-kit';
import { MODAL_ID } from '@shared/constants/HTML_ID';
import { ModalBaseProps } from '@shared/types/Modal';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useLayoutEffect, useState } from 'react';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = PropsWithReactElementChildren<
  ModalBaseProps & {
    onClose: () => void;
    anchor: Anchor;
  }
>;

export const Drawer = ({ anchor, isOpen, onClose, children }: DrawerProps) => {
  const theme = useTheme();
  const [zIndex, setZIndex] = useState<number>();

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }
    const count = document.getElementById(MODAL_ID)?.childNodes.length ?? 0;
    setZIndex(theme.zIndex.modal + 10 * count);
  }, [isOpen, theme.zIndex.modal]);

  return (
    <Modal isOpen={isOpen} zIndex={zIndex}>
      <Overlay onClick={onClose} style={{ zIndex }} />
      <Layout
        isOpen={isOpen}
        anchor={anchor}
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex }}
      >
        {children}
      </Layout>
    </Modal>
  );
};

const drawerSlideFromLeft = keyframes`
  from { 
    transform: translateX(-100%);
  }
    
  to {
      transform: translateX(0);
  }      
`;

const drawerSlideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const drawerSlideFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const drawerSlideFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

type LayoutProps = {
  anchor: Anchor;
  isOpen: boolean;
};

const Layout = styled.div<LayoutProps>`
  position: fixed;
  top: ${({ anchor }) => anchor !== 'bottom' && 0};
  right: ${({ anchor }) => anchor !== 'left' && 0};
  bottom: ${({ anchor }) => anchor !== 'bottom' && 0};
  left: ${({ anchor }) => anchor !== 'right' && 0};

  animation-name: ${({ anchor }) =>
    (anchor === 'left' && drawerSlideFromLeft) ||
    (anchor === 'right' && drawerSlideFromRight) ||
    (anchor === 'top' && drawerSlideFromTop) ||
    (anchor === 'bottom' && drawerSlideFromBottom)};
  animation-duration: 0.3s;
`;
