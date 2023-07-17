import { userAtom } from '@atoms/userAtom';
import { Center, VStack } from '@components/common';
import { TabletNavProfile } from '@components/elements/NavProfile/Tablet';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { TabletNavDrawer } from './TabletNavDrawer';
import { TabletNavMenu } from './TabletNavMenu';

export const TabletNavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="4rem">
        <TabletNavDrawer />
        <Center h="15rem">
          <TabletNavProfile imgUrl={user.imgUrl} />
        </Center>
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
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  user-select: none;
`;
