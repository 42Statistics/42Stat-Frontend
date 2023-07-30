import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/ROUTES';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';
import { useParams } from 'react-router-dom';

export const PastEvaluationLink = () => {
  const { projectName } = useParams() as { projectName: string };
  const title = '지난 평가 보기';

  return (
    <DashboardContent title={title}>
      <CustomLink to={`${ROUTES.EVALLOG}?projectName=${projectName}`}>
        Past Evaluations
      </CustomLink>
    </DashboardContent>
  );
};
