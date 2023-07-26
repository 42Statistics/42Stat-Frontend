import { MobileHeader } from '@core/components/Header/Mobile';
import { TabBar } from '@core/components/NavBar/Mobile(TabBar)';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const MobileMainLayout = () => {
  return (
    <>
      <Layout>
        <MobileHeader />
        <Outlet />
      </Layout>
      <TabBar />
    </>
  );
};

const Layout = styled.main`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  padding: 0 2rem;
  padding-bottom: calc(2rem + 6rem);
  margin: auto;
`;
