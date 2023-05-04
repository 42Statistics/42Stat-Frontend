import { Divider, VStack } from '@/components/common';
import { MobileHeader } from '@/components/elements/Header/MobileHeader';
import { MobileNavBar } from '@/components/elements/NavBar/MobileNavBar';
import styled from '@emotion/styled';

export const MobileDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <>
      <VStack w="100%" spacing="2rem">
        <MobileHeader />
        <Divider />
        <MobileDashboardPageLayout>{children}</MobileDashboardPageLayout>
      </VStack>
      <MobileNavBar />
    </>
  );
};

const MobileDashboardPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
  margin-bottom: 6rem;
  overflow: auto;
`;
