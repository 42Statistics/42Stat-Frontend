import { gql } from '@/__generated__';
import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/elements/Dashboard';
import { DashboardItem } from '@/components/elements/DashboardItem';
import { DashboardItemContainer } from '@/components/elements/DashboardItemContainer';
import {
  DesktopDashboardRow,
  MobileDashboardRow,
} from '@/components/elements/DashboardRow';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { dashboardContents } from './hooks/dashboardContents';
import { useHomePage } from './hooks/useHomePage';

const GET_USER = gql(`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      login
    }
  }
`);

// TODO: Mobile Page에는 Tabbar 때문에 아래 marginBottom 필요
export const HomePage = () => {
  const { desktopDashboard, mobileDashboard } = useHomePage();

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <AboveTablet>
        <DesktopDashboard>
          {desktopDashboard.map(({ row, col, items }, rowIdx) => (
            <DesktopDashboardRow key={rowIdx} row={row} col={col}>
              {items.map(
                ({ row, col, rowSpan, colSpan, elementId }, itemIdx) => (
                  <DashboardItemContainer
                    key={itemIdx}
                    row={row}
                    col={col}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    element={
                      <DashboardItem
                        title={dashboardContents[elementId].title}
                        description={dashboardContents[elementId].description}
                        element={dashboardContents[elementId].element}
                        // fieldString={dashboardContents[elementId].fieldString}
                      />
                    }
                  />
                ),
              )}
            </DesktopDashboardRow>
          ))}
        </DesktopDashboard>
      </AboveTablet>
      <Mobile>
        <MobileDashboard>
          {mobileDashboard.map(({ row, col, items }, rowIdx) => (
            <MobileDashboardRow key={rowIdx} row={row} col={col}>
              {items.map(
                ({ row, col, rowSpan, colSpan, elementId }, itemIdx) => (
                  <DashboardItemContainer
                    key={itemIdx}
                    row={row}
                    col={col}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    element={
                      <DashboardItem
                        title={dashboardContents[elementId].title}
                        description={dashboardContents[elementId].description}
                        element={dashboardContents[elementId].element}
                        // fieldString={dashboardContents[elementId].fieldString}
                      />
                    }
                  />
                ),
              )}
            </MobileDashboardRow>
          ))}
        </MobileDashboard>
      </Mobile>
    </>
  );
};
