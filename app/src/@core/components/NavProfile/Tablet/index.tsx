import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { userAtom } from '@shared/atoms/userAtom';
import { ALT } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Avatar } from '@shared/ui-kit';

type TabletNavProfileProps = {
  imgUrl: string | null | undefined;
};

export const TabletNavProfile = ({ imgUrl }: TabletNavProfileProps) => {
  const { login } = useAtomValue(userAtom);

  return (
    <Link to={ROUTES.PROFILE_OF(login)}>
      <Avatar size="sm" src={imgUrl} name={login} alt={ALT.AVATAR_OF(login)} />
    </Link>
  );
};
