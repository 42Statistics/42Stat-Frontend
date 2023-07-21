import {
  Exact,
  FindProjectPreviewQuery,
  FindUserPreviewQuery,
} from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { Center, H3Text, VStack } from '@components/common';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SpotlightProjectSection } from './SpotlightProjectSection';
import { SpotlightUserSection } from './SpotlightUserSection';

type SpotlightResultProps = {
  findUserResult: QueryResult<
    FindUserPreviewQuery,
    Exact<{
      login: string;
      limit: number;
    }>
  >;
  findProjectResult: QueryResult<
    FindProjectPreviewQuery,
    Exact<{
      name: string;
      limit: number;
    }>
  >;
};

export const SpotlightResult = ({
  findUserResult,
  findProjectResult,
}: SpotlightResultProps) => {
  const theme = useTheme();

  if (findUserResult.loading || findProjectResult.loading) {
    return (
      <Layout>
        <Center>
          <H3Text color={theme.colors.mono.gray300}>검색 중...</H3Text>
        </Center>
      </Layout>
    );
  }

  if (findUserResult.error || findProjectResult.error) {
    return (
      <Layout>
        <Center>
          {findUserResult.error ? (
            <ApolloErrorView message={findUserResult.error.message} />
          ) : null}
          {findProjectResult.error ? (
            <ApolloErrorView message={findProjectResult.error.message} />
          ) : null}
        </Center>
      </Layout>
    );
  }

  if (
    findUserResult.data?.findUserPreview.length === 0 &&
    findProjectResult.data?.findProjectPreview.length === 0
  ) {
    return (
      <Layout>
        <Center>
          <H3Text>검색 결과가 없습니다.</H3Text>
        </Center>
      </Layout>
    );
  }

  const userResultLength = findUserResult.data?.findUserPreview.length ?? 0;

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem">
        <SpotlightUserSection result={findUserResult} startIndex={1} />
        <SpotlightProjectSection
          result={findProjectResult}
          startIndex={1 + userResultLength}
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
  border: 2px solid ${({ theme }) => theme.colors.mono.gray50};
`;
