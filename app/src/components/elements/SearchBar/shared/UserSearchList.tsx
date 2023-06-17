import { UserPreview } from '@/__generated__/graphql';
import { BoldText, Divider, VStack } from '@components/common';
import { UserSearchItem } from './UserSearchItem';

type UserSearchListProps = {
  users: UserPreview[];
  onSubmit: (name: string) => void;
};

export const UserSearchList = ({ users, onSubmit }: UserSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      <BoldText>유저</BoldText>
      <Divider />
      {users.slice(0, 4).map((user) => (
        <UserSearchItem key={user.id} user={user} onSubmit={onSubmit} />
      ))}
    </VStack>
  );
};
