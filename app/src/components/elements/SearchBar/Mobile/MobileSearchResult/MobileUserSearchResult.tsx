import { UserPreview } from '@/__generated__/graphql';
import { Divider, H3BoldText, VStack } from '@components/common';
import { MobileUserSearchList } from './MobileUserSearchList';

export type MobileUserSearchResultProps = {
  users: UserPreview[];
  onSubmit: (name: string) => void;
};

export const MobileUserSearchResult = (props: MobileUserSearchResultProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.6rem">
      <H3BoldText>유저</H3BoldText>
      <Divider />
      <MobileUserSearchList {...props} />
    </VStack>
  );
};
