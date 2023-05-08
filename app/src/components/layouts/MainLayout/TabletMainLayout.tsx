import { TabletHamburger } from '@/components/elements/Header/TabletHamburger';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <TabletNavBar />
      <TabletHamburger />
      <TabletMainPageLayout>{children}</TabletMainPageLayout>
    </Layout>
  );
};

const TabletMainPageLayout = styled.main`
  width: 100%;
  height: 100%;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
