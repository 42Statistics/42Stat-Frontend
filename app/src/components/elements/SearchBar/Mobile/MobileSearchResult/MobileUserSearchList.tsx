import { VStack } from '@components/common';
import { MobileUserSearchItem } from './MobileUserSearchItem';
import type { MobileUserSearchResultProps } from './MobileUserSearchResult';

type MobileUserSearchListProps = MobileUserSearchResultProps;

export const MobileUserSearchList = ({
  users,
  onSubmit,
}: MobileUserSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      {users.slice(0, 4).map((user) => (
        <MobileUserSearchItem key={user.id} user={user} onSubmit={onSubmit} />
      ))}
    </VStack>
  );
};
