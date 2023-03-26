import { Button, VStack } from '@/components/common';
import { AppLogoTitleButton } from '../../AppLogoTitleButton';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { AboveTabletNavMenu } from './AboveTabletNavMenu';
import { userAtom } from '@/utils/atoms/userAtom';
import { MouseEvent } from 'react';
import { NavProfile } from './NavProfile';

export const AboveTabletNavBar = () => {
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/profile/${user.login}`);
  };

  return (
    <>
      <VStack h="100%" spacing="6rem">
        <AppLogoTitleButton />
        <Button
          onClick={handleClick}
          element={
            <NavProfile
              imageUrl={user.imageUrl}
              name={user.name}
              login={user.login}
            />
          }
        />
        <AboveTabletNavMenu />
      </VStack>
    </>
  );
};
