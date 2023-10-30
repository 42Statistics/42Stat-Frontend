import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { MobileNavBarButton } from '@core/components/NavBar/Mobile/MobileNavBarButton';
import { SearchBarShapeButton } from '@core/components/SearchBarShapeButton';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { ROUTES } from '@shared/constants/routes';
import { VStack } from '@shared/ui-kit';

export const MobileHeader = () => {
  return (
    <Layout>
      <MobileNavBarButton />
      <VStack spacing="4rem">
        <Link to={ROUTES.ROOT}>
          <AppLogoTitle size="sm" />
        </Link>
        <SearchBarShapeButton />
      </VStack>
    </Layout>
  );
};

const Layout = styled.header`
  padding: 2rem 0 5rem 0;
`;
