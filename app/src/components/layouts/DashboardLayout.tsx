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
            <AboveTabletPageLayout>{children}</AboveTabletPageLayout>
          </VStack>
        </HStack>
      </Desktop>
      <Tablet>
        <HStack w="100%" h="100%">
          <TabletNavBar />
          <VStack w="100%" h="100%">
            <TabletHeader />
            <AboveTabletPageLayout>{children}</AboveTabletPageLayout>
          </VStack>
        </HStack>
      </Tablet>
      <Mobile>
        <VStack w="100%" spacing="2rem">
          <MobileHeader />
          <Divider />
          <MobilePageLayout>{children}</MobilePageLayout>
        </VStack>
        <MobileNavBar />
      </Mobile>
    </>
  );
};

const AboveTabletPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 11rem 3rem 3rem 3rem;
  overflow: auto;
`;

const MobilePageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
  margin-bottom: 6rem;
  overflow: auto;
`;
