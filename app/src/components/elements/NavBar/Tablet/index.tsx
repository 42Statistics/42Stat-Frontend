import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Overlay } from '@/components/common';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import { useAtom } from 'jotai';
import { DesktopNavBarLayout } from '../Desktop';
import { AboveTabletNavBar } from '../common/AboveTabletNavBar';

export const TabletNavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useAtom(isNavBarOpenAtom);

  useEffect(() => {
    setIsNavBarOpen(false);
    return () => setIsNavBarOpen(false);
  }, [setIsNavBarOpen]);

  return (
    <>
      {isNavBarOpen && (
        <Overlay onClick={() => setIsNavBarOpen((cur) => !cur)} />
      )}
      <TabletNavBarLayout isOpen={isNavBarOpen}>
        <AboveTabletNavBar />
      </TabletNavBarLayout>
    </>
  );
};

type TabletNavBarLayoutProps = {
  isOpen: boolean;
};

const TabletNavBarLayout = styled(DesktopNavBarLayout)<TabletNavBarLayoutProps>`
  transform: ${({ isOpen }) => !isOpen && 'translateX(-100%)'};
  transition: all 0.3s;
  z-index: 3;
`;
