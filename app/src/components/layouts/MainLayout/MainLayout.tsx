import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { DesktopMainLayout } from './DesktopMainLayout';
import { MobileMainLayout } from './MobileMainLayout';
import { TabletMainLayout } from './TabletMainLayout';

export const MainLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Desktop>
        <DesktopMainLayout {...props} />
      </Desktop>
      <Tablet>
        <TabletMainLayout {...props} />
      </Tablet>
      <Mobile>
        <MobileMainLayout {...props} />
      </Mobile>
    </>
  );
};
