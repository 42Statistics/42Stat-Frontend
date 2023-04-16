import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { TabletDashboard } from '@/components/templates/Dashboard/TabletDashboard';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { dashboardContents } from './hooks/dashboardContents';
import { useHomePage } from './hooks/useHomePage';

// const GET_USER = gql(`
//   query GetUser($id: Int!) {
//     user(id: $id) {
//       id
//       login
//     }
//   }
// `);

export const HomePage = () => {
  const { desktopDashboardRows, tabletDashboardRows, mobileDashboardRows } =
    useHomePage();

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <Desktop>
        <DesktopDashboard
          rows={desktopDashboardRows}
          contents={dashboardContents}
        />
      </Desktop>
      <Tablet>
        <TabletDashboard
          rows={tabletDashboardRows}
          contents={dashboardContents}
        />
      </Tablet>
      <Mobile>
        <MobileDashboard
          rows={mobileDashboardRows}
          contents={dashboardContents}
        />
      </Mobile>
    </>
  );
};
