import { Overlay } from '@/components/common';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { DesktopNavBarLayout } from './DesktopNavBar';
import { AboveTabletNavBar } from './common/AboveTabletNavBar';

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
  background-color: ${({ theme }) => rgba(theme.colors.mono.black, 0.95)};
  transform: ${({ isOpen }) => !isOpen && 'translateX(-100%)'};
  transition: all 0.2s;
  z-index: 200;
`;
