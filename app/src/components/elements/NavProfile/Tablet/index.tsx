import { userAtom } from '@atoms/userAtom';
import { Avatar } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

type TabletNavProfileProps = {
  imgUrl: string;
};

export const TabletNavProfile = ({ imgUrl }: TabletNavProfileProps) => {
  const user = useAtomValue(userAtom);

  return (
    <Link to={`${ROUTES.PROFILE_ROOT}/${user.login}`}>
      <Avatar size="sm" src={imgUrl} />
    </Link>
  );
};
