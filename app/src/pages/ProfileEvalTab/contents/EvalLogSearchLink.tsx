import { Center } from '@/components/common';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useParams } from 'react-router-dom';

export const EvalLogSearchLink = () => {
  const { userId } = useParams() as { userId: string };
  // TODO: userId로 평가로그 검색을 할 수 없음

  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center w="100%" h="100%">
        {/* <Link to={`/evallog?corrector=${corrector}`}>
          <AccentH3MediumText>바로가기</AccentH3MediumText>
        </Link> */}
      </Center>
    </DashboardContent>
  );
};
