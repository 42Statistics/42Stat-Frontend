import { ROUTES } from '@/constants/ROUTES';
import { AccentH3BoldText } from '@components/common';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Link, useParams } from 'react-router-dom';

export const PastEvaluationLink = () => {
  const { projectName } = useParams() as { projectName: string };
  const title = '지난 평가 보기';

  return (
    <DashboardContent title={title}>
      <Link to={`${ROUTES.EVALLOG}?projectName=${projectName}`}>
        <AccentH3BoldText>Past Evaluations</AccentH3BoldText>
      </Link>
    </DashboardContent>
  );
};
