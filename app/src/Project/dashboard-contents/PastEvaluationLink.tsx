import { useContext } from 'react';

import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';
import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/routes';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

export const PastEvaluationLink = () => {
  const projectName = useContext(ProjectNameContext);
  const title = '지난 평가 보기';

  return (
    <DashboardContent title={title}>
      <CustomLink to={`${ROUTES.EVALLOG}?projectName=${projectName}`}>
        Past Evaluations
      </CustomLink>
    </DashboardContent>
  );
};
