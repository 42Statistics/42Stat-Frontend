import { useLocation, useParams } from 'react-router-dom';

import { useAtomValue } from 'jotai';

import { Tab } from '@shared/ui-kit';
import { ROUTES } from '@shared/constants/routes';
import { userAtom } from '@shared/atoms/userAtom';

export const FollowTabList = () => {
  const { pathname } = useLocation();
  const { login } = useParams() as { login: string };
  const user = useAtomValue(userAtom);

  const startsWith = pathname.startsWith.bind(pathname);

  const { PROFILE_FOLLOWERS_OF, PROFILE_FOLLOWING_OF } = ROUTES;

  const isCurrentPathFollowPage =
    pathname.startsWith(PROFILE_FOLLOWERS_OF(login)) ||
    pathname.startsWith(PROFILE_FOLLOWING_OF(login))
      ? true
      : false;

  if (!isCurrentPathFollowPage && login !== user.login) {
    return null;
  }

  return (
    <>
      <Tab
        selected={startsWith(PROFILE_FOLLOWERS_OF(login))}
        link={PROFILE_FOLLOWERS_OF(login)}
      >
        팔로워
      </Tab>
      <Tab
        selected={startsWith(PROFILE_FOLLOWING_OF(login))}
        link={PROFILE_FOLLOWING_OF(login)}
      >
        팔로잉
      </Tab>
    </>
  );
};
