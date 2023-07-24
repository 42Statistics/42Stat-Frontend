import styled from '@emotion/styled';
import { DesktopNavBar } from '@shared/components/NavBar/Desktop';
import { HStack } from '@shared/ui-kit';
import { Outlet } from 'react-router-dom';

export const DesktopMainLayout = () => {
  return (
    <HStack>
      <DesktopNavBar />
      <Layout>
        <Outlet />
      </Layout>
    </HStack>
  );
};

const Layout = styled.main`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  padding: 3rem 4.5rem;
  margin-left: 24rem;
`;
