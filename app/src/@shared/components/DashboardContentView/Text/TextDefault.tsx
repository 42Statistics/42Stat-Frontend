import { Link } from 'react-router-dom';

import { H3MediumText } from '@shared/ui-kit';

type TextDefaultProps = {
  text: string;
  link?: string;
};

export const TextDefault = ({ text, link }: TextDefaultProps) => {
  return (
    <>
      {link !== undefined ? (
        <Link to={link}>
          <H3MediumText style={{ textAlign: 'center' }}>{text}</H3MediumText>
        </Link>
      ) : (
        <H3MediumText style={{ textAlign: 'center' }}>{text}</H3MediumText>
      )}
    </>
  );
};
