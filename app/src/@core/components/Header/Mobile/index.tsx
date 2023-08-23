import { SearchBarShapeButton } from '@core/components/SearchBarShapeButton';
import styled from '@emotion/styled';
import { AppLogoTitle } from '@shared/components/AppLogoTitle';
import { ROUTES } from '@shared/constants/routes';
import { VStack } from '@shared/ui-kit';
import { Link } from 'react-router-dom';

export const MobileHeader = () => {
  return (
    <Layout>
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
  padding: 5rem 0;
`;
