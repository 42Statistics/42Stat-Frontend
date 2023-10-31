import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { MobileNavBarButton } from '@core/components/NavBar/Mobile/MobileNavBarButton';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { ROUTES } from '@shared/constants/routes';
import { HStack } from '@shared/ui-kit';

export const MobileHeader = () => {
  return (
    <Layout>
      <HStack w="100%" h="6rem" justify="space-between">
        <Link to={ROUTES.ROOT}>
          <AppLogoTitle size="sm" />
        </Link>
        <MobileNavBarButton />
      </HStack>
    </Layout>
  );
};

const Layout = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  padding: 0 3rem;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: ${({ theme }) => theme.colors.mono.white};
  opacity: 0.9;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mono.gray200};
`;
