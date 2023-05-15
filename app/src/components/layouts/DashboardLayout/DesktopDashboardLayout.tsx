import { Center, HStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopDashboardLayout = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack w="100%">
        <DesktopNavBar />
        <Center w="100%" css={{ marginLeft: '24rem' }}>
          <DesktopDashboardPageLayout>{children}</DesktopDashboardPageLayout>
        </Center>
      </HStack>
    </Layout>
  );
};

const DesktopDashboardPageLayout = styled.main`
  width: 100%;
  max-width: 1440px;
  padding: 3rem;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
