import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { DesktopDashboardLayout } from './DesktopDashboardLayout';
import { MobileDashboardLayout } from './MobileDashboardLayout';
import { TabletDashboardLayout } from './TabletDashboardLayout';

// 다른 Device 정보를 lazy로 두면 창 조절 시 렌더링 끊김 현상 발생으로 ux가 좋지 않음
// 많은 리소스가 드는 게 아닌 이상 다른 Device 정보도 미리 받아오는게 좋을듯
// 아래 주석을 풀면 lazy를 체험해볼 수 있음

// const { DesktopDashboardLayout } = lazyImport(
//   () => import('./DesktopDashboardLayout'),
//   'DesktopDashboardLayout',
// );
// const { TabletDashboardLayout } = lazyImport(
//   () => import('./TabletDashboardLayout'),
//   'TabletDashboardLayout',
// );
// const { MobileDashboardLayout } = lazyImport(
//   () => import('./MobileDashboardLayout'),
//   'MobileDashboardLayout',
// );

export const DashboardLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Desktop>
        {/* <Suspense> */}
        <DesktopDashboardLayout {...props} />
        {/* </Suspense> */}
      </Desktop>
      <Tablet>
        {/* <Suspense> */}
        <TabletDashboardLayout {...props} />
        {/* </Suspense> */}
      </Tablet>
      <Mobile>
        {/* <Suspense> */}
        <MobileDashboardLayout {...props} />
        {/* </Suspense> */}
      </Mobile>
    </>
  );
};
