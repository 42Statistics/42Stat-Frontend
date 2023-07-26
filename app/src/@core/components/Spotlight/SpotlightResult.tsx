import { QueryResult } from '@apollo/client';
import styled from '@emotion/styled';
import {
  Exact,
  FindProjectPreviewQuery,
  FindUserPreviewQuery,
} from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloErrorView';
import { Center, H3Text, VStack } from '@shared/ui-kit';
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
  if (findUserResult.loading || findProjectResult.loading) {
    return null;
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

  if (!findUserResult.data || !findProjectResult.data) {
    return null;
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
        <SpotlightUserSection result={findUserResult} startIndex={0} />
        <SpotlightProjectSection
          result={findProjectResult}
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
  border: 2px solid ${({ theme }) => theme.colors.mono.gray50};
`;
