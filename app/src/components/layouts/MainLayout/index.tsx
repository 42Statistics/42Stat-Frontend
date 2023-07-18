import { isSearchDialogOpenAtom } from '@atoms/isSearchDialogOpenAtom';
import { Global } from '@emotion/react';
import { mainLayoutGlobalStyle } from '@styles/mainLayoutGlobalStyle';
import { isMacKKeyDown } from '@utils/keyboard';
import { Desktop, Mobile, Tablet } from '@utils/responsive/Device';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DesktopMainLayout } from './Desktop';
import { MobileMainLayout } from './Mobile';
import { TabletMainLayout } from './Tablet';

export const MainLayout = () => {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useAtom(
    isSearchDialogOpenAtom,
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMacKKeyDown(e)) {
        setIsSearchDialogOpen((cur) => !cur);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchDialogOpen, setIsSearchDialogOpen]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#f9f9f9" />
      </Helmet>
      <Global styles={mainLayoutGlobalStyle} />
      <Desktop>
        <DesktopMainLayout />
      </Desktop>
      <Tablet>
        <TabletMainLayout />
      </Tablet>
      <Mobile>
        <MobileMainLayout />
      </Mobile>
    </>
  );
};
