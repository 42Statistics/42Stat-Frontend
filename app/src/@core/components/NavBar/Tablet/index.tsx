import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { TabletNavDrawer } from '@core/components/NavBar/Tablet/TabletNavDrawer';
import { TabletNavMenu } from '@core/components/NavBar/Tablet/TabletNavMenu';
import { TabletNavProfile } from '@core/components/NavProfile/Tablet';
import { SearchButtonTriggerSpotlight } from '@core/components/Spotlight/SearchButtonTriggerSpotlight';
import { userAtom } from '@shared/atoms/userAtom';
import { Center, VStack } from '@shared/ui-kit';

export const TabletNavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="4rem">
        <TabletNavDrawer />
        <Center h="12rem">
          <TabletNavProfile imgUrl={user.imgUrl} />
        </Center>
        <SearchButtonTriggerSpotlight />
        <TabletNavMenu />
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 7rem;
  height: 100%;
  padding: 3rem 0;
  user-select: none;
`;
