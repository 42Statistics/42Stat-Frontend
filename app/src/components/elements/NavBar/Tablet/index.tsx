import { Center, Clickable, VStack } from '@components/common';
import { TabletNavProfile } from '@components/elements/NavProfile/Tablet';
import styled from '@emotion/styled';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { isSpotlightOpenAtom } from '@shared/utils/jotai/atoms/isSpotlightOpenAtom';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { TabletNavDrawer } from './TabletNavDrawer';
import { TabletNavMenu } from './TabletNavMenu';

export const TabletNavBar = () => {
  const user = useAtomValue(userAtom);
  const setIsSpotlightOpen = useSetAtom(isSpotlightOpenAtom);

  const openSpotlight = () => {
    setIsSpotlightOpen(true);
  };

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="4rem">
        <TabletNavDrawer />
        <Center h="12rem">
          <TabletNavProfile imgUrl={user.imgUrl} />
        </Center>
        <Clickable onClick={openSpotlight}>
          <MdSearch width={20} height={20} />
        </Clickable>
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
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  user-select: none;
`;
