import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { AboveTablet, Mobile } from '@/utils/responsive';
import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/elements/Dashboard';
import { DashboardItemContainer } from '@/components/elements/DashboardItemContainer';
import { Helmet } from 'react-helmet-async';
import {
  DesktopDashboardRow,
  MobileDashboardRow,
} from '@/components/elements/DashboardRow';
import { LineTestChart } from '@/components/elements/charts/LineTestChart';
import { BarTestChart } from '@/components/elements/charts/BarTestChart';
import { PieTestChart } from '@/components/elements/charts/PieTestChart';
import { DashboardItem } from '@/components/elements/DashboardItem';
import { useHomePage } from './hooks/useHomePage';
import { dashboardContents } from './hooks/dashboardContents';

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

  // const { loading, error, data } = useQuery(GET_USER, {
  //   variables: {
  //     id: 99947,
  //   },
  // });

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }

  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }

  // if (!data) {
  //   return <h1>user not found</h1>;
  // }

  // console.log(data);

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
                        element={<p>...</p>}
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
                        element={<p>...</p>}
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
