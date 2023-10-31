import { SpotlightProjectList } from '@core/components/Spotlight/SpotlightProjectList';
import type { ProjectPreview } from '@shared/__generated__/graphql';
import { BoldText, Divider, VStack } from '@shared/ui-kit';

type SpotlightProjectSectionProps = {
  list: ProjectPreview[];
  startIndex: number;
};

export const SpotlightProjectSection = ({
  list,
  startIndex,
}: SpotlightProjectSectionProps) => {
  if (list.length === 0) {
    return null;
  }
  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText style={{ padding: '0.4rem 2rem' }}>프로젝트</BoldText>
      <Divider />
      <SpotlightProjectList list={list} startIndex={startIndex} />
    </VStack>
  );
};
