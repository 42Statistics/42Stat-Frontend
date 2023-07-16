import { ModalBaseProps } from '@/types/Modal';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal, Overlay } from '../Modal';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = ModalBaseProps & {
  onClose: () => void;
  anchor: Anchor;
} & React.PropsWithChildren;

export const Drawer = ({ anchor, isOpen, onClose, children }: DrawerProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Overlay onClick={onClose} />
      <Layout
        isOpen={isOpen}
        anchor={anchor}
        onClick={(e) => e.stopPropagation()}
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
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
