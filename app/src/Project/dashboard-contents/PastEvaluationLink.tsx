import { useContext } from 'react';

import { useTheme } from '@emotion/react';

import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/routes';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';

export const PastEvaluationLink = () => {
  const theme = useTheme();
  const projectName = useContext(ProjectNameContext);
  const title = '지난 평가 보기';

  return (
    <DashboardContent title={title}>
      <CustomLink
        to={`${ROUTES.EVALLOG}?projectName=${projectName}`}
        fontSize={theme.fonts.size.body1}
      >
        Past Evaluations
      </CustomLink>
    </DashboardContent>
  );
};
