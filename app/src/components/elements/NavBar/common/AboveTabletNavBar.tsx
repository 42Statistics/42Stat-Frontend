import { Clickable, HStack, Spacer, Text, VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { AboveTabletUserSearchBar } from '@/components/elements/UserSearchBar/AboveTabletUserSearchBar';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';
import { userAtom } from '@/utils/atoms/userAtom';
import styled from '@emotion/styled';
import { RiLogoutBoxRFill } from '@react-icons/all-files/ri/RiLogoutBoxRFill';
import { useAtomValue, useSetAtom } from 'jotai';
import { AboveTabletNavMenu } from './AboveTabletNavMenu';
import { NavProfile } from './NavProfile';

export const AboveTabletNavBar = () => {
  const user = useAtomValue(userAtom);
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  return (
    <VStack h="100%" spacing="4rem">
      <AppLogoTitleButton />
      <NavProfile imgUrl={user.imgUrl} name={user.name} login={user.login} />
      <AboveTabletUserSearchBar />
      <AboveTabletNavMenu />
      <Spacer />
      <Clickable
        onClick={() => setIsAuthenticated(false)}
        element={
          <NavItemLayout>
            <HStack spacing="1.5rem" justify="start">
              <RiLogoutBoxRFill size="16px" />
              <Text>로그아웃</Text>
            </HStack>
          </NavItemLayout>
        }
        css={{ width: '100%' }}
      />
    </VStack>
  );
};

const NavItemLayout = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 2rem;
`;
