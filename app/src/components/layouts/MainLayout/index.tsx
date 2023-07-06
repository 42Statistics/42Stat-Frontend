import { Global } from '@emotion/react';
import { mainLayoutGlobalStyle } from '@styles/mainLayoutGlobalStyle';
import { Desktop, Mobile, Tablet } from '@utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { DesktopMainLayout } from './Desktop';
import { MobileMainLayout } from './Mobile';
import { TabletMainLayout } from './Tablet';

export const MainLayout = () => {
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
