import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H3BoldText, Scroll, Text, VStack } from '@shared/ui-kit';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN } from '../queries/GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN';

export const RecentComment = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 쓴 코멘트';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login: username },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { recentComment } = data.getPersonalEval; // FIXME: null일 수 있음.

  // 내부에서 overflow가 발생하는 경우, div w='100%' h='100%'으로 밖을 감싸면 비정상적으로 작동함
  return (
    <DashboardContentLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          <H3BoldText>{title}</H3BoldText>
        </VStack>
        <Scroll>
          <Layout>
            <Text>{recentComment}</Text>
          </Layout>
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

const Layout = styled.div`
  width: 100%;
  padding: 0 1rem;
`;
