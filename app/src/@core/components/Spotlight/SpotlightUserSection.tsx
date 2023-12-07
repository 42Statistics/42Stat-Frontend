import { SpotlightUserList } from '@core/components/Spotlight/SpotlightUserList';

import type { UserPreview } from '@shared/__generated__/graphql';
import { BoldText, Divider, VStack } from '@shared/ui-kit';

type SpotlightUserSectionProps = {
  list: UserPreview[];
  startIndex: number;
};

export const SpotlightUserSection = ({
  list,
  startIndex,
}: SpotlightUserSectionProps) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText style={{ padding: '0.4rem 2rem' }}>유저</BoldText>
      <Divider />
      <SpotlightUserList list={list} startIndex={startIndex} />
    </VStack>
  );
};
