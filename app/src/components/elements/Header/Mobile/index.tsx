import { VStack } from '@components/common';
import { AppLogoTitle } from '@components/elements/AppLogoTitle';
import { MobileSearchBar } from '@components/elements/SearchBar/Mobile';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';

export const MobileHeader = () => {
  return (
    <Layout>
      <VStack spacing="4rem">
        <Link to={ROUTES.ROOT}>
          <AppLogoTitle size="sm" />
        </Link>
        <MobileSearchBar />
      </VStack>
    </Layout>
  );
};

const Layout = styled.header`
  padding: 5rem 0;
`;
