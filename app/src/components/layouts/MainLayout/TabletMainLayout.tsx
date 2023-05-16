import { Center, HStack } from '@/components/common';
import { IntraLink } from '@/components/elements/IntraLink';
import { TabletNavBar } from '@/components/elements/NavBar/TabletNavBar';
import styled from '@emotion/styled';

export const TabletMainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <IntraLink />
      <HStack>
        <TabletNavBar />
        <Center w="100%" css={{ marginLeft: '7rem' }}>
          <TabletMainPageLayout>{children}</TabletMainPageLayout>
        </Center>
      </HStack>
    </Layout>
  );
};

const TabletMainPageLayout = styled.main`
  width: 100%;
`;

const Layout = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
