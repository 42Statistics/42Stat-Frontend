import { Desktop, Mobile, Tablet } from '@utils/responsive/Device';
import { DesktopMainLayout } from './Desktop';
import { MobileMainLayout } from './Mobile';
import { TabletMainLayout } from './Tablet';

export const MainLayout = () => {
  return (
    <>
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
