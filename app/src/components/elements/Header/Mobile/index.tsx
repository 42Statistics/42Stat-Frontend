import { VStack } from '@/styles/components';
import { Logo } from '../../Logo';
import { UserSearchBar } from '@/components/elements/UserSearchBar';

export const MobileHeader = () => {
  return (
    <VStack spacing="1rem">
      <Logo />
      <UserSearchBar device="mobile" />
    </VStack>
  );
};
