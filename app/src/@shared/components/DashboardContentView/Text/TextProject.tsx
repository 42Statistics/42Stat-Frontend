import { ROUTES } from '@shared/constants/routes';
import { TextDefault } from './TextDefault';

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
