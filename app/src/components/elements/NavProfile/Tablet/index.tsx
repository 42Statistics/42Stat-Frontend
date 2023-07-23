import { Avatar } from '@components/common';
import { ROUTES } from '@shared/constants/ROUTES';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
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
