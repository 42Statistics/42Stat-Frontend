import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Desktop, Mobile } from '@/styles/responsive';
import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/elements/Dashboard';
import { DashboardItem } from '@/components/elements/Dashboard/DashboardItem';
import { DashboardRow } from '@/components/elements/Dashboard/DashboardRow';
import { vstack } from '@/styles/components';
import { Helmet } from 'react-helmet-async';

const GET_USER = gql(`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      login
    }
  }
`);

export const HomePage = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: 99947,
    },
  });

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }

  console.log(data);

  return (
    <HomePageLayout>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <Desktop>
        <DesktopDashboard>
          <DashboardRow row={2} col={4}>
            <DashboardItem size="1/8" col={1} row={1}>
              1/8
            </DashboardItem>
            <DashboardItem size="1/8" col={1} row={2}>
              1/8
            </DashboardItem>
            <DashboardItem size="1/4" col={2}>
              1/4
            </DashboardItem>
            <DashboardItem size="1/4" col={3}>
              1/4
            </DashboardItem>
            <DashboardItem size="1/4" col={4}>
              1/4
            </DashboardItem>
          </DashboardRow>
        </DesktopDashboard>
      </Desktop>
      <Mobile>
        <MobileDashboard>
          <DashboardRow row={2} col={4}>
            <DashboardItem size="1/8" col={1} row={1}>
              1/8
            </DashboardItem>
            <DashboardItem size="1/8" col={1} row={2}>
              1/8
            </DashboardItem>
            <DashboardItem size="1/4" col={2}>
              1/4
            </DashboardItem>
            <DashboardItem size="1/4" col={3}>
              1/4
            </DashboardItem>
            <DashboardItem size="1/4" col={4}>
              1/4
            </DashboardItem>
          </DashboardRow>
        </MobileDashboard>
      </Mobile>
    </HomePageLayout>
  );
};

const HomePageLayout = styled.div`
  ${vstack}
`;
