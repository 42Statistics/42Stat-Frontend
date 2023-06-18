import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3MediumText, Loader, Scroll, Text, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const GET_RECENT_COMMENT = gql(/* GraphQL */ `
  query getRecentComment($login: String!) {
    getPersonalEval(login: $login) {
      recentComment
    }
  }
`);

export const RecentComment = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 쓴 코멘트';
  const { loading, error, data } = useQuery(GET_RECENT_COMMENT, {
    variables: { login: username },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { recentComment } = data.getPersonalEval; // FIXME: null일 수 있음.

  // 내부에서 overflow가 발생하는 경우, div w='100%' h='100%'으로 밖을 감싸면 비정상적으로 작동함
  return (
    <DashboardContentLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          {title && <H3MediumText>{title}</H3MediumText>}
        </VStack>
        <Scroll>
          <Text selectable>{recentComment}</Text>
        </Scroll>
      </VStack>
    </DashboardContentLayout>
  );
};

const DashboardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
