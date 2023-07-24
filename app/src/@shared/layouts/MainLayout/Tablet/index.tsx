import styled from '@emotion/styled';
import { TabletNavBar } from '@shared/components/NavBar/Tablet';
import { HStack } from '@shared/ui-kit';
import { Outlet } from 'react-router-dom';

export const TabletMainLayout = () => {
  return (
    <HStack>
      <TabletNavBar />
      <Layout>
        <Outlet />
      </Layout>
    </HStack>
  );
};

const Layout = styled.main`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  padding: 3rem;
  margin-left: 7rem;
`;
