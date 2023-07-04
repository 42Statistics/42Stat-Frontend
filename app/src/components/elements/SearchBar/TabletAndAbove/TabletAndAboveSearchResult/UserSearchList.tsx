import { VStack } from '@components/common';
import { UserSearchItem } from './UserSearchItem';
import type { UserSearchResultProps } from './UserSearchResult';

type UserSearchListProps = UserSearchResultProps;

export const UserSearchList = ({ users, onSubmit }: UserSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      {users.slice(0, 4).map((user) => (
        <UserSearchItem key={user.id} user={user} onSubmit={onSubmit} />
      ))}
    </VStack>
  );
};
