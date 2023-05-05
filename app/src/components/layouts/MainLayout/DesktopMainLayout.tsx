import { HStack, VStack } from '@/components/common';
import { DesktopHeader } from '@/components/elements/Header/DesktopHeader';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <HStack w="100%" h="100%">
      <DesktopNavBar />
      <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
        <DesktopHeader />
        <DesktopPageLayout>{children}</DesktopPageLayout>
      </VStack>
    </HStack>
  );
};

const DesktopPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8rem 0 0 0;
  overflow: auto;
`;
