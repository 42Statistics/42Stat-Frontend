import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/ROUTES';
import { AccentH3BoldText, Center } from '@shared/ui-kit';
import { Link, useParams } from 'react-router-dom';

export const EvalLogSearchLink = () => {
  const { username } = useParams() as { username: string };
  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center>
        <Link to={`${ROUTES.EVALLOG}?corrector=${username}`}>
          <AccentH3BoldText>바로가기</AccentH3BoldText>
        </Link>
      </Center>
    </DashboardContent>
  );
};