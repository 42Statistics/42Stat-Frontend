import { VStack } from '@components/common';
import { AppLogoTitleButton } from '@components/elements/AppLogoTitle';
import { MobileSearchBar } from '@components/elements/SearchBar/Mobile';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  return (
    <Layout>
      <VStack spacing="4rem">
        <AppLogoTitleButton />
        <MobileSearchBar />
      </VStack>
    </Layout>
  );
};

const Layout = styled.header`
  padding: 5rem 0;
`;
