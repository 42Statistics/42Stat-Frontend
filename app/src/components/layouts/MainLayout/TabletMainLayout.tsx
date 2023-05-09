import { HStack } from '@/components/common';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <HStack>
        <TabletNavBar />
        <TabletMainPageLayout>{children}</TabletMainPageLayout>
      </HStack>
    </Layout>
  );
};

const TabletMainPageLayout = styled.main`
  width: 100%;
  margin-left: 7rem;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
