import { Avatar } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { Link } from 'react-router-dom';

type TabletNavProfileProps = {
  imgUrl: string;
};

export const TabletNavProfile = ({ imgUrl }: TabletNavProfileProps) => {
  return (
    <Link to={ROUTES.SETTING}>
      <Avatar size="sm" src={imgUrl} />
    </Link>
  );
};
