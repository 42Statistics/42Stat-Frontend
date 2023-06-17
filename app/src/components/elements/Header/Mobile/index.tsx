import { VStack } from '@components/common';
import { AppLogoTitleButton } from '@components/elements/AppLogoTitle';
import { MobileSearchBar } from '@components/elements/SearchBar/Mobile';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <VStack spacing="4rem">
        <AppLogoTitleButton />
        <MobileSearchBar />
      </VStack>
    </MobileHeaderLayout>
  );
};

const MobileHeaderLayout = styled.header`
  padding: 5rem 0;
`;
