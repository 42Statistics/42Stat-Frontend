import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { NavMenu } from '@core/components/NavBar/shared/NavMenu';
import { MobileNavProfile } from '@core/components/NavProfile/Mobile';

import { ReactComponent as MdClose } from '@shared/assets/icon/md-close.svg';
import { userAtom } from '@shared/atoms/userAtom';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Clickable, Drawer, HStack, VStack } from '@shared/ui-kit';

type MobileNavBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNavBar = ({ isOpen, onClose }: MobileNavBarProps) => {
  const theme = useTheme();
  const user = useAtomValue(userAtom);

  return (
    <Drawer anchor="left" isOpen={isOpen} onClose={onClose}>
      <Layout>
        <VStack w="100%" h="100%" align="start" spacing="3rem">
          <HStack w="100%" justify="space-between">
            <Link to={ROUTES.HOME} aria-label={ARIA_LABEL.LINK.STAT}>
              <AppLogoTitle size="sm" />
            </Link>
            <Clickable onClick={onClose}>
              <MdClose width={24} height={24} fill={theme.colors.mono.black} />
            </Clickable>
          </HStack>
          <MobileNavProfile
            imgUrl={user.imgUrl}
            name={user.displayname}
            login={user.login}
          />
          <NavMenu hasSpacer={false} />
        </VStack>
      </Layout>
    </Drawer>
  );
};

const Layout = styled.nav`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  user-select: none;
`;
