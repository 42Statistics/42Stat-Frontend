import { ProjectPreview } from '@/__generated__/graphql';
import { Divider, H3BoldText, VStack } from '@components/common';
import { MobileProjectSearchList } from './MobileProjectSearchList';

export type MobileProjectSearchResultProps = {
  projects: ProjectPreview[];
  onSubmit: (name: string) => void;
};

export const MobileProjectSearchResult = (
  props: MobileProjectSearchResultProps,
) => {
  return (
    <VStack w="100%" align="start" spacing="1.6rem">
      <H3BoldText>프로젝트</H3BoldText>
      <Divider style={{ width: '100%' }} />
      <MobileProjectSearchList {...props} />
    </VStack>
  );
};
