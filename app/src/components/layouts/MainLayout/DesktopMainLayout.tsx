import { HStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <DesktopNavBar />
        <DesktopMainPageLayout>{children}</DesktopMainPageLayout>
      </HStack>
    </Layout>
  );
};

const DesktopMainPageLayout = styled.main`
  width: 100%;
  margin-left: 24rem;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
