import { HStack, VStack } from '@/components/common';
import { AboveTabletFooter } from '@/components/elements/Footer/AboveTabletFooter';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <DesktopNavBar />
        <DesktopMainPageLayout>
          <VStack w="100%">
            {children}
            <AboveTabletFooter />
          </VStack>
        </DesktopMainPageLayout>
      </HStack>
    </Layout>
  );
};

const DesktopMainPageLayout = styled.main`
  width: 100%;
  padding: 3rem;
  margin-left: 24rem;
`;

const Layout = styled.div`
  min-height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
