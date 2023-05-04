import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { DesktopMainLayout } from './DesktopMainLayout';
import { MobileMainLayout } from './MobileMainLayout';
import { TabletMainLayout } from './TabletMainLayout';

// const { DesktopMainLayout } = lazyImport(
//   () => import('./DesktopMainLayout'),
//   'DesktopMainLayout',
// );
// const { TabletMainLayout } = lazyImport(
//   () => import('./TabletMainLayout'),
//   'TabletMainLayout',
// );
// const { MobileMainLayout } = lazyImport(
//   () => import('./MobileMainLayout'),
//   'MobileMainLayout',
// );

export const MainLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Desktop>
        {/* <Suspense> */}
        <DesktopMainLayout {...props} />
        {/* </Suspense> */}
      </Desktop>
      <Tablet>
        {/* <Suspense> */}
        <TabletMainLayout {...props} />
        {/* </Suspense> */}
      </Tablet>
      <Mobile>
        {/* <Suspense> */}
        <MobileMainLayout {...props} />
        {/* </Suspense> */}
      </Mobile>
    </>
  );
};
