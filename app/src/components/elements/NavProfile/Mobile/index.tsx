import { Avatar } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';

type MobileNavProfileProps = {
  imgUrl: string;
};

export const MobileNavProfile = ({ imgUrl }: MobileNavProfileProps) => {
  return (
    <Link to={ROUTES.SETTING}>
      <Avatar src={imgUrl} />
    </Link>
  );
};
