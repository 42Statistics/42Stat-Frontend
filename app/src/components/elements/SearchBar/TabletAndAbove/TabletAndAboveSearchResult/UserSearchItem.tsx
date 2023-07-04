import { UserPreview } from '@/__generated__/graphql';
import { Avatar, Clickable, HStack, Text } from '@components/common';

type UserSearchItemProps = {
  user: UserPreview;
  onSubmit: (name: string) => void;
};

export const UserSearchItem = ({ user, onSubmit }: UserSearchItemProps) => {
  return (
    <Clickable key={user.id} onClick={() => onSubmit(user.login)}>
      <HStack spacing="1.2rem">
        <Avatar size="xs" src={user.imgUrl} />
        <Text>{user.login}</Text>
      </HStack>
    </Clickable>
  );
};
