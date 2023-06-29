import { VStack } from '@components/common';
import { MobileHeader } from '@components/elements/Header/Mobile';
import { TabBar } from '@components/elements/NavBar/Mobile(TabBar)';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const MobileMainLayout = () => {
  return (
    <>
      <VStack w="100%">
        <MobileMainPageLayout>
          <MobileHeader />
          <Outlet />
        </MobileMainPageLayout>
      </VStack>
      <TabBar />
    </>
  );
};

const MobileMainPageLayout = styled.main`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: calc(2rem + 6rem);
`;
