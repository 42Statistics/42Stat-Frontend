import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { MobileHeader } from '@core/components/Header/Mobile';
import { DesktopNavBar } from '@core/components/NavBar/Desktop';
import { TabBar } from '@core/components/NavBar/Mobile(TabBar)';
import { TabletNavBar } from '@core/components/NavBar/Tablet';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from '@shared/utils/facepaint/mq';
import { isCtrlKKeyDown, isMacKKeyDown } from '@shared/utils/keyboard';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { detect } from 'detect-browser';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { mainLayoutGlobalStyle } from './mainLayoutGlobalStyle';

const MainLayout = () => {
  const [isSpotlightOpen, setIsSpotlightOpen] = useAtom(isSpotlightOpenAtom);
  const device = useDeviceType();
  const browser = detect();
  const isMacOS = browser?.os === 'Mac OS';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((isMacOS && isMacKKeyDown(e)) || (!isMacOS && isCtrlKKeyDown(e))) {
        setIsSpotlightOpen((cur) => !cur);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSpotlightOpen, setIsSpotlightOpen, isMacOS]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Global styles={mainLayoutGlobalStyle} />
      {device === 'desktop' ? <DesktopNavBar /> : null}
      {device === 'tablet' ? <TabletNavBar /> : null}
      <MarginLayer>
        <Layout>
          {device === 'mobile' ? <MobileHeader /> : null}
          <Outlet />
        </Layout>
      </MarginLayer>
      {device === 'mobile' ? <TabBar /> : null}
    </>
  );
};

const MarginLayer = styled.div`
  ${mq({
    marginLeft: ['0', '7rem', '24rem'],
    paddingBottom: ['8rem', '0', '0'],
  })}
`;

const Layout = styled.main`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;

  ${mq({
    maxWidth: ['480px', '800px', '1440px'],
    padding: ['0 2rem', '3rem', '3rem 4.5rem'],
  })}
`;

export default MainLayout;
