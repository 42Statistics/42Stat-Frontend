import { UserPreview } from '@/__generated__/graphql';
import { Avatar, Clickable, H3Text, HStack } from '@components/common';

type UserSearchItemProps = {
  user: UserPreview;
  onSubmit: (name: string) => void;
};

export const MobileUserSearchItem = ({
  user,
  onSubmit,
}: UserSearchItemProps) => {
  return (
    <Clickable key={user.id} onClick={() => onSubmit(user.login)}>
      <HStack spacing="1.6rem">
        <Avatar size="sm" src={user.imgUrl} />
        <H3Text>{user.login}</H3Text>
      </HStack>
    </Clickable>
  );
};
