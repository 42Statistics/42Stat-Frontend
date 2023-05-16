import { Center, HStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { DesktopNavBar } from '@/components/elements/NavBar/DesktopNavBar';
import styled from '@emotion/styled';

export const DesktopMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <DesktopNavBar />
        <Center w="100%" css={{ marginLeft: '24rem' }}>
          <DesktopMainPageLayout>{children}</DesktopMainPageLayout>
        </Center>
      </HStack>
    </Layout>
  );
};

const DesktopMainPageLayout = styled.main`
  width: 100%;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
