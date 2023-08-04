import { QueryResult } from '@apollo/client';
import styled from '@emotion/styled';
import { Exact, GetSearchResultQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { Center, H3Text, VStack } from '@shared/ui-kit';
import { SpotlightProjectSection } from './SpotlightProjectSection';
import { SpotlightUserSection } from './SpotlightUserSection';

type SpotlightResultProps = {
  result: QueryResult<
    GetSearchResultQuery,
    Exact<{
      input: string;
      limit: number;
    }>
  >;
};

export const SpotlightResult = ({
  result: { loading, error, data },
}: SpotlightResultProps) => {
  if (loading) {
    return null;
  }
  if (error) {
    return (
      <Layout>
        <Center>
          <ApolloErrorView message={error.message} />
        </Center>
      </Layout>
    );
  }
  if (!data) {
    return null;
  }

  if (
    data?.getSearchResult.userPreviews.length === 0 &&
    data?.getSearchResult.projectPreviews.length === 0
  ) {
    return (
      <Layout>
        <Center>
          <H3Text>검색 결과가 없습니다.</H3Text>
        </Center>
      </Layout>
    );
  }

  const userResultLength = data?.getSearchResult.userPreviews.length ?? 0;
  const { userPreviews, projectPreviews } = data.getSearchResult;

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem">
        <SpotlightUserSection list={userPreviews} startIndex={0} />
        <SpotlightProjectSection
          list={projectPreviews}
          startIndex={userResultLength}
        />
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
