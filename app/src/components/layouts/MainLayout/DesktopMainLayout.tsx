import { HStack, VStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const DesktopMainLayout = () => {
  return (
    <>
      <IntraLink />
      <HStack>
        <DesktopNavBar />
        <DesktopMainPageLayout>
          <VStack w="100%">
            <Outlet />
          </VStack>
        </DesktopMainPageLayout>
      </HStack>
    </>
  );
};

const DesktopMainPageLayout = styled.main`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  padding: 3rem 4.5rem;
  margin-left: 24rem;
`;
