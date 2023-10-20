import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import { ROUTES } from '@shared/constants/routes';

type TextProjectProps = {
  projectName: string;
};

export const TextProject = ({ projectName }: TextProjectProps) => {
  return (
    <TextDefault
      text={projectName}
      link={ROUTES.PROJECT_DETAIL_OF(projectName)}
    />
  );
};
