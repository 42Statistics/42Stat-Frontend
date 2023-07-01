import { useQuery } from '@apollo/client';
import { H3MediumText, Scroll, Text, VStack } from '@components/common';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_EVAL_BY_LOGIN } from '../GET_PERSONAL_EVAL_BY_LOGIN';

export const RecentComment = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 쓴 코멘트';
  const { loading, error, data } = useQuery(GET_PERSONAL_EVAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

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
