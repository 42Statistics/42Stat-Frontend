import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { AboveTablet, Mobile } from '@/styles/responsive';
import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/elements/Dashboard';
import { DashboardItem } from '@/components/elements/DashboardItem';
import { vstack } from '@/styles/components';
import { Helmet } from 'react-helmet-async';
import {
  DesktopDashboardRow,
  MobileDashboardRow,
} from '@/components/elements/DashboardRow';
import { LineTestChart } from '@/components/elements/charts/LineTestChart';
import { BarTestChart } from '@/components/elements/charts/BarTestChart';
import { PieTestChart } from '@/components/elements/charts/PieTestChart';

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
    <HomePageLayout>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <AboveTablet>
        <DesktopDashboard>
          <DesktopDashboardRow row={2} col={4}>
            <DashboardItem row={1} col={1} rowSpan={1} colSpan={1}>
              1/8
            </DashboardItem>
            <DashboardItem row={2} col={1} rowSpan={1} colSpan={1}>
              1/8
            </DashboardItem>
            <DashboardItem row={1} col={2} rowSpan={2} colSpan={1}>
              {/* <LineTestChart size={'sm'} /> */}
            </DashboardItem>
            <DashboardItem row={1} col={3} rowSpan={2} colSpan={1}>
              {/* <BarTestChart size={'sm'} /> */}
            </DashboardItem>
            <DashboardItem row={1} col={4} rowSpan={2} colSpan={1}>
              {/* <PieTestChart size={'sm'} /> */}
            </DashboardItem>
          </DesktopDashboardRow>
          <DesktopDashboardRow row={2} col={3}>
            <DashboardItem row={1} col={1} rowSpan={2} colSpan={1}>
              {/* <PieTestChart size={'lg'} /> */}
            </DashboardItem>
            <DashboardItem row={1} col={2} rowSpan={2} colSpan={1}>
              {/* <LineTestChart size={'lg'} /> */}
            </DashboardItem>
            <DashboardItem row={1} col={3} rowSpan={2} colSpan={1}>
              {/* <BarTestChart size={'lg'} /> */}
            </DashboardItem>
          </DesktopDashboardRow>
        </DesktopDashboard>
      </AboveTablet>
      <Mobile>
        <MobileDashboard>
          <MobileDashboardRow row={1} col={2}>
            <DashboardItem row={1} col={1} rowSpan={1} colSpan={1}>
              1/4
            </DashboardItem>
            <DashboardItem row={1} col={2} rowSpan={1} colSpan={1}>
              1/4
            </DashboardItem>
          </MobileDashboardRow>
          <MobileDashboardRow row={2} col={2}>
            <DashboardItem row={1} col={1} rowSpan={2} colSpan={1}>
              2/4
            </DashboardItem>
            <DashboardItem row={1} col={2} rowSpan={2} colSpan={1}>
              2/4
            </DashboardItem>
          </MobileDashboardRow>
          <MobileDashboardRow row={2} col={2}>
            <DashboardItem row={1} col={1} rowSpan={2} colSpan={1}>
              2/4
            </DashboardItem>
            <DashboardItem row={1} col={2} rowSpan={2} colSpan={1}>
              2/4
            </DashboardItem>
          </MobileDashboardRow>
          <MobileDashboardRow row={2} col={2}>
            <DashboardItem row={1} col={1} rowSpan={2} colSpan={1}>
              2/4
            </DashboardItem>
          </MobileDashboardRow>
          <MobileDashboardRow row={1} col={1}>
            <DashboardItem row={1} col={1} rowSpan={1} colSpan={1}>
              1/1
            </DashboardItem>
          </MobileDashboardRow>
        </MobileDashboard>
      </Mobile>
    </HomePageLayout>
  );
};

const HomePageLayout = styled.main`
  width: 100%;
  height: 100%;
  ${vstack}
`;
