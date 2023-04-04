import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
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
  const { desktopDashboardRows, mobileDashboardRows } = useHomePage();

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <AboveTablet>
        <DesktopDashboard
          rows={desktopDashboardRows}
          contents={dashboardContents}
        />
      </AboveTablet>
      <Mobile>
        <MobileDashboard
          rows={mobileDashboardRows}
          contents={dashboardContents}
        />
      </Mobile>
    </>
  );
};
