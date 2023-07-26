import { H2MediumText } from '@shared/ui-kit';
import { Link } from 'react-router-dom';

type TextDefaultProps = {
  text: string;
  link?: string;
};

export const TextDefault = ({ text, link }: TextDefaultProps) => {
  return (
    <>
      {link !== undefined ? (
        <Link to={link}>
          <H2MediumText style={{ textAlign: 'center' }}>{text}</H2MediumText>
        </Link>
      ) : (
        <H2MediumText style={{ textAlign: 'center' }}>{text}</H2MediumText>
      )}
    </>
  );
};
