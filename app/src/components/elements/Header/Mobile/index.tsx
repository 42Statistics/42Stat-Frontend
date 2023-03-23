import { VStack } from '@/styles/components';
import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { UserSearchBar } from '@/components/elements/UserSearchBar';
import styled from '@emotion/styled';

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
