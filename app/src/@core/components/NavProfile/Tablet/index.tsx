import { userAtom } from '@shared/atoms/userAtom';
import { ROUTES } from '@shared/constants/ROUTES';
import { Avatar } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

type TabletNavProfileProps = {
  imgUrl: string | null | undefined;
};

export const TabletNavProfile = ({ imgUrl }: TabletNavProfileProps) => {
  const user = useAtomValue(userAtom);

  return (
    <Link to={`${ROUTES.PROFILE_ROOT}/${user.login}`}>
      <Avatar size="sm" src={imgUrl} />
    </Link>
  );
};