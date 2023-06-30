import { userAtom } from '@atoms/userAtom';
import { VStack } from '@components/common';
import { AppLogoTitleButton } from '@components/elements/AppLogoTitle';
import { TabletAndAboveSearchBar } from '@components/elements/SearchBar/TabletAndAbove';
import { ROUTES } from '@routes/ROUTES';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { NavProfile } from './NavProfile';

export const NavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <VStack h="100%" spacing="4rem">
      <AppLogoTitleButton />
      <Link to={`${ROUTES.PROFILE_ROOT}/${user.login}`}>
        <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
      </Link>
      <TabletAndAboveSearchBar />
      <NavMenu />
    </VStack>
  );
};
