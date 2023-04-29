import { Divider, HStack, VStack } from '@/components/common';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import styled from '@emotion/styled';
import { DesktopHeader, MobileHeader, TabletHeader } from '../elements/Header';
import { DesktopNavBar, MobileNavBar, TabletNavBar } from '../elements/NavBar';

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Desktop>
        <HStack w="100%" h="100%">
          <DesktopNavBar />
          <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
            <DesktopHeader />
            <PageLayout>{children}</PageLayout>
          </VStack>
        </HStack>
      </Desktop>
      <Tablet>
        <HStack w="100%" h="100%">
          <TabletNavBar />
          <VStack w="100%" h="100%">
            <TabletHeader />
            <PageLayout>{children}</PageLayout>
          </VStack>
        </HStack>
      </Tablet>
      <Mobile>
        <VStack w="100%" spacing="2rem">
          <MobileHeader />
          <Divider />
          <PageLayout css={{ marginBottom: '6rem' }}>{children}</PageLayout>
        </VStack>
        <MobileNavBar />
      </Mobile>
    </>
  );
};

const PageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
  overflow: auto;
`;
