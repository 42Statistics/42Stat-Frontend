import { Divider, VStack } from '@/components/common';
import { MobileHeader } from '@/components/elements/Header/MobileHeader';
import { MobileNavBar } from '@/components/elements/NavBar/MobileNavBar';
import styled from '@emotion/styled';

export const MobileMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <VStack w="100%" spacing="2rem">
        <MobileHeader />
        <Divider />
        <MobilePageLayout>{children}</MobilePageLayout>
      </VStack>
      <MobileNavBar />
    </>
  );
};

const MobilePageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6rem;
  overflow: auto;
`;
