import { UserPreview } from '@/__generated__/graphql';
import { BoldText, Divider, VStack } from '@components/common';
import { UserSearchList } from './UserSearchList';

export type UserSearchResultProps = {
  users: UserPreview[];
  onSubmit: (name: string) => void;
};

export const UserSearchResult = (props: UserSearchResultProps) => {
  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText>유저</BoldText>
      <Divider style={{ width: '100%' }} />
      <UserSearchList {...props} />
    </VStack>
  );
};
