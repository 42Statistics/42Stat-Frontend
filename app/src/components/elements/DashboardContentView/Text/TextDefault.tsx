import { H3Text } from '@components/common';
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
          <H3Text style={{ textAlign: 'center' }}>{text}</H3Text>
        </Link>
      ) : (
        <H3Text style={{ textAlign: 'center' }}>{text}</H3Text>
      )}
    </>
  );
};
