import { VStack } from '@/components/common';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import styled from '@emotion/styled';
import { UserSearchBar } from './UserSearchBar';

export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <VStack spacing="2rem">
        <AppLogoTitleButton />
        <UserSearchBar device="mobile" />
      </VStack>
    </MobileHeaderLayout>
  );
};

const MobileHeaderLayout = styled.div`
  margin-top: 5rem;
`;
