import { AccentH3MediumText, Center } from '@components/common';
import { DashboardContent } from '@components/templates/Dashboard';
import { Link, useParams } from 'react-router-dom';

export const EvalLogSearchLink = () => {
  const { username } = useParams() as { username: string };
  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center w="100%" h="100%">
        <Link to={`/evallog?corrector=${username}`}>
          <AccentH3MediumText>바로가기</AccentH3MediumText>
        </Link>
      </Center>
    </DashboardContent>
  );
};
