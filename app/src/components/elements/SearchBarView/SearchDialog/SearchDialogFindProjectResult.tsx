import { Exact, FindProjectPreviewQuery } from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { BoldText, Divider, VStack } from '@components/common';
import { SearchDialogFindProjectResultList } from './SearchDialogFindProjectResultList';

type SearchDialogFindProjectResultProps = {
  result: QueryResult<
    FindProjectPreviewQuery,
    Exact<{
      name: string;
      limit: number;
    }>
  >;
  startIndex: number;
};

export const SearchDialogFindProjectResult = ({
  result: { loading, error, data },
  startIndex,
}: SearchDialogFindProjectResultProps) => {
  if (loading || error || !data || data.findProjectPreview.length === 0) {
    return null;
  }
  return (
    <VStack w="100%" align="start" spacing="1rem">
      <BoldText style={{ padding: '0.4rem 2rem' }}>프로젝트</BoldText>
      <Divider />
      <SearchDialogFindProjectResultList
        list={data.findProjectPreview}
        startIndex={startIndex}
      />
    </VStack>
  );
};
