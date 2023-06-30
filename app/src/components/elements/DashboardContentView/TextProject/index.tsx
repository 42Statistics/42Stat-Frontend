import { H3Text } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';

type TextProjectProps = {
  text: string;
};

export const TextProject = ({ text }: TextProjectProps) => {
  return (
    <Link to={`${ROUTES.PROJECT_ROOT}/${text}`}>
      <H3Text>{text}</H3Text>
    </Link>
  );
};
