import { VStack } from '@/styles/components';
import { Logo } from '../../Logo';
import { UserSearchBar } from '../UserSearchBar';

export const MobileHeader = () => {
  return (
    <VStack spacing="1rem">
      <Logo />
      <UserSearchBar />
    </VStack>
  );
};
