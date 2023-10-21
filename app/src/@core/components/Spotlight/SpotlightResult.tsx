import { QueryResult } from '@apollo/client';
import styled from '@emotion/styled';

import { SpotlightProjectSection } from '@core/components/Spotlight/SpotlightProjectSection';
import { SpotlightUserSection } from '@core/components/Spotlight/SpotlightUserSection';
import type { Exact, GetSpotlightQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { Center, H3Text, VStack } from '@shared/ui-kit';

type SpotlightResultProps = {
  result: QueryResult<
    GetSpotlightQuery,
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
    data?.getSpotlight.userPreviews.length === 0 &&
    data?.getSpotlight.projectPreviews.length === 0
  ) {
    return (
      <Layout>
        <Center>
          <H3Text>검색 결과가 없습니다.</H3Text>
        </Center>
      </Layout>
    );
  }

  const userResultLength = data?.getSpotlight.userPreviews.length ?? 0;
  const { userPreviews, projectPreviews } = data.getSpotlight;

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
