import { H3Text, HStack } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';

type TextProjectProps = {
  text: string;
};

export const TextProject = ({ text }: TextProjectProps) => {
  return (
    <HStack h="100%">
      <Link to={`${ROUTES.PROJECT_ROOT}/${text}`}>
        <H3Text>{text}</H3Text>
      </Link>
    </HStack>
  );
};
