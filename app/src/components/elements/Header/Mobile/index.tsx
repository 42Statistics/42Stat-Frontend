import { VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { SearchBarShapeButton } from '@components/elements/SearchBarShapeButton';
import styled from '@emotion/styled';
import { ROUTES } from '@shared/constants/ROUTES';
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
