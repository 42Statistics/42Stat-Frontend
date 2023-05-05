import { HStack, VStack } from '@/components/common';
import { DesktopHeader } from '@/components/elements/Header/DesktopHeader';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <HStack w="100%" h="100%">
      <DesktopNavBar />
      <VStack w="100%" h="100%" css={{ marginLeft: '24rem' }}>
        <DesktopHeader />
        <DesktopDashboardPageLayout>{children}</DesktopDashboardPageLayout>
      </VStack>
    </HStack>
  );
};

const DesktopDashboardPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8rem 3rem 3rem 3rem;
  overflow: auto;
`;
