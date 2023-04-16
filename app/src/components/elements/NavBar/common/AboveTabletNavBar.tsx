import { Button, VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { AboveTabletNavMenu } from './AboveTabletNavMenu';
import { NavProfile } from './NavProfile';

export const AboveTabletNavBar = () => {
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/profile/${user.login}`);
  };

  return (
    <VStack h="100%" spacing="6rem">
      <AppLogoTitleButton />
      <Button
        onClick={handleClick}
        element={
          <NavProfile
            imgUrl={user.imgUrl}
            name={user.name}
            login={user.login}
          />
        }
      />
      <AboveTabletNavMenu />
    </VStack>
  );
};
