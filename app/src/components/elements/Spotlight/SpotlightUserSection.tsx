import { Exact, FindUserPreviewQuery } from '@shared/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { BoldText, Divider, VStack } from '@components/common';
import { SpotlightUserList } from './SpotlightUserList';

type SpotlightUserSectionProps = {
  result: QueryResult<
    FindUserPreviewQuery,
    Exact<{
      login: string;
      limit: number;
    }>
  >;
  startIndex: number;
};

export const SpotlightUserSection = ({
  result: { loading, error, data },
  startIndex,
}: SpotlightUserSectionProps) => {
  if (loading || error || !data || data.findUserPreview.length === 0) {
    return null;
  }

  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText style={{ padding: '0.4rem 2rem' }}>유저</BoldText>
      <Divider />
      <SpotlightUserList list={data.findUserPreview} startIndex={startIndex} />
    </VStack>
  );
};
