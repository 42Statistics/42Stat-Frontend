import { HStack, VStack } from '@/components/common';
import { TabletHeader } from '@/components/elements/Header/TabletHeader';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <HStack w="100%" h="100%">
      <TabletNavBar />
      <VStack w="100%" h="100%">
        <TabletHeader />
        <TabletDashboardPageLayout>{children}</TabletDashboardPageLayout>
      </VStack>
    </HStack>
  );
};

const TabletDashboardPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8rem 3rem 3rem 3rem;
  overflow: auto;
`;
