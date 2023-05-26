import { HStack, VStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const DesktopMainLayout = () => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <DesktopNavBar />
        <DesktopMainPageLayout>
          <VStack w="100%">
            <Outlet />
          </VStack>
        </DesktopMainPageLayout>
      </HStack>
    </Layout>
  );
};

const DesktopMainPageLayout = styled.main`
  width: 100%;
  padding: 3rem 4.5rem;
  margin-left: 24rem;
`;

const Layout = styled.div`
  min-height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
