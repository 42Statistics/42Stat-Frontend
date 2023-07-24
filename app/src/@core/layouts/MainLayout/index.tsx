import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { Global } from '@emotion/react';
import { isMacKKeyDown } from '@shared/utils/keyboard';
import { Desktop, Mobile, Tablet } from '@shared/utils/react-responsive/Device';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DesktopMainLayout } from './Desktop';
import { MobileMainLayout } from './Mobile';
import { TabletMainLayout } from './Tablet';
import { mainLayoutGlobalStyle } from './mainLayoutGlobalStyle';

export const MainLayout = () => {
  const [isSpotlightOpen, setIsSpotlightOpen] = useAtom(isSpotlightOpenAtom);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMacKKeyDown(e)) {
        setIsSpotlightOpen((cur) => !cur);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSpotlightOpen, setIsSpotlightOpen]);

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
