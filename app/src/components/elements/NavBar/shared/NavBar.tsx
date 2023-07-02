import { userAtom } from '@atoms/userAtom';
import { Center, Spacer, VStack } from '@components/common';
import { AppLogoTitleButton } from '@components/elements/AppLogoTitle';
import { TabletAndAboveSearchBar } from '@components/elements/SearchBar/TabletAndAbove';
import { useAtomValue } from 'jotai';
import { NavMenu } from './NavMenu';
import { NavProfile } from './NavProfile';

export const NavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <VStack w="100%" h="100%" spacing="4rem">
      <Center h="6rem">
        <AppLogoTitleButton />
      </Center>
      <TabletAndAboveSearchBar />
      <NavMenu />
      <Spacer />
      <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
    </VStack>
  );
};
