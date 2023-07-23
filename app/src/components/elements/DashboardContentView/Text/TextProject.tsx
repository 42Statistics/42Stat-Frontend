import { ROUTES } from '@/constants/ROUTES';
import { TextDefault } from './TextDefault';

type TextProjectProps = {
  projectName: string;
};

export const TextProject = ({ projectName }: TextProjectProps) => {
  return (
    <TextDefault
      text={projectName}
      link={`${ROUTES.PROJECT_ROOT}/${projectName}`}
    />
  );
};
