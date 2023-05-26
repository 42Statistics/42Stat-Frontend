import { VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitle';
import { AboveTabletUserSearchBar } from '@/components/elements/UserSearchBar/AboveTabletUserSearchBar';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { NavProfile } from './NavProfile';

export const NavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <VStack h="100%" spacing="4rem">
      <AppLogoTitleButton />
      <Link to={`/profile/${user.login}`}>
        <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
      </Link>
      <AboveTabletUserSearchBar />
      <NavMenu />
    </VStack>
  );
};
