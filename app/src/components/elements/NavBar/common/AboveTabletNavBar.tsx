import { VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { AboveTabletNavMenu } from './AboveTabletNavMenu';
import { NavProfile } from './NavProfile';

export const AboveTabletNavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <VStack h="100%" spacing="6rem">
      <AppLogoTitleButton />
      <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
      <AboveTabletNavMenu />
    </VStack>
  );
};
