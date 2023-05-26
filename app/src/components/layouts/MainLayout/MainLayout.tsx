import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { DesktopMainLayout } from './DesktopMainLayout';
import { MobileMainLayout } from './MobileMainLayout';
import { TabletMainLayout } from './TabletMainLayout';

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
