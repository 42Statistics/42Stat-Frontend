import { VStack } from '@/styles/components';
import { Logo } from '@/components/elements/Logo';
import { UserSearchBar } from '@/components/elements/UserSearchBar';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  return (
    <MobileHeaderLayout>
      <VStack spacing="2rem">
        <Logo />
        <UserSearchBar device="mobile" />
      </VStack>
    </MobileHeaderLayout>
  );
};

const MobileHeaderLayout = styled.div`
  margin-top: 5rem;
`;
