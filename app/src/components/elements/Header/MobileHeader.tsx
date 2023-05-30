import { VStack } from '@components/common';
import { AppLogoTitleButton } from '@components/elements/AppLogoTitle';
import { MobileUserSearchBar } from '@components/elements/UserSearchBar/MobileUserSearchBar';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <VStack spacing="4rem">
        <AppLogoTitleButton />
        <MobileUserSearchBar />
      </VStack>
    </MobileHeaderLayout>
  );
};

const MobileHeaderLayout = styled.header`
  padding: 5rem 0;
`;
