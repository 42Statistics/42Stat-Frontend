import { VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitle';
import { AboveTabletUserSearchBar } from '@/components/elements/UserSearchBar/AboveTabletUserSearchBar';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { NavMenu } from './NavMenu';
import { NavProfile } from './NavProfile';

export const NavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <VStack h="100%" spacing="4rem">
      <AppLogoTitleButton />
      <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
      <AboveTabletUserSearchBar />
      <NavMenu />
    </VStack>
  );
};
