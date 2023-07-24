import { H2BoldText } from '@shared/ui-kit';
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
          <H2BoldText style={{ textAlign: 'center' }}>{text}</H2BoldText>
        </Link>
      ) : (
        <H2BoldText style={{ textAlign: 'center' }}>{text}</H2BoldText>
      )}
    </>
  );
};
