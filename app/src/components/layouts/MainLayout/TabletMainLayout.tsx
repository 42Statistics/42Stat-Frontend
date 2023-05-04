import { HStack, VStack } from '@/components/common';
import { TabletHeader } from '@/components/elements/Header/TabletHeader';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <HStack w="100%" h="100%">
      <TabletNavBar />
      <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
        <TabletHeader />
        <TabletPageLayout>{children}</TabletPageLayout>
      </VStack>
    </HStack>
  );
};

const TabletPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
