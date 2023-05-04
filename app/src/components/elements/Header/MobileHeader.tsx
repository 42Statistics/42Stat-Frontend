import { VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { MobileUserSearchBar } from '@/components/elements/UserSearchBar/MobileUserSearchBar';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <VStack spacing="2rem">
        <AppLogoTitleButton />
        <MobileUserSearchBar />
      </VStack>
    </MobileHeaderLayout>
  );
};

const MobileHeaderLayout = styled.div`
  margin-top: 5rem;
`;
