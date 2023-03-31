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
import { useTotalPage } from './hooks/useTotalPage';

export const TotalPage = () => {
  const { desktopDashboard, mobileDashboard } = useTotalPage();
  return (
    <>
      <Helmet>
        <title>전체 정보 보기 | 42Stat</title>
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
                        content={dashboardContents[elementId].content}
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
                        content={dashboardContents[elementId].content}
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
