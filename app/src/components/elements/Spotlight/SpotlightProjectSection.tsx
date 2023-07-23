import { Exact, FindProjectPreviewQuery } from '@shared/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { BoldText, Divider, VStack } from '@components/common';
import { SpotlightProjectList } from './SpotlightProjectList';

type SpotlightProjectSectionProps = {
  result: QueryResult<
    FindProjectPreviewQuery,
    Exact<{
      name: string;
      limit: number;
    }>
  >;
  startIndex: number;
};

export const SpotlightProjectSection = ({
  result: { loading, error, data },
  startIndex,
}: SpotlightProjectSectionProps) => {
  if (loading || error || !data || data.findProjectPreview.length === 0) {
    return null;
  }
  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText style={{ padding: '0.4rem 2rem' }}>프로젝트</BoldText>
      <Divider />
      <SpotlightProjectList
        list={data.findProjectPreview}
        startIndex={startIndex}
      />
    </VStack>
  );
};
