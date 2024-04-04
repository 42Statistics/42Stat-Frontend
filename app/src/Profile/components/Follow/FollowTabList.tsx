import { useLocation, useParams } from 'react-router-dom';

import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { ROUTES } from '@shared/constants/routes';

export const FollowTabList = () => {
  const { pathname } = useLocation();
  const { login } = useParams() as { login: string };

  const startsWith = pathname.startsWith.bind(pathname);

  const { PROFILE_FOLLOWERS_OF, PROFILE_FOLLOWING_OF } = ROUTES;

  const isCurrentPathFollowPage =
    pathname.startsWith(PROFILE_FOLLOWERS_OF(login)) ||
    pathname.startsWith(PROFILE_FOLLOWING_OF(login))
      ? true
      : false;

  if (!isCurrentPathFollowPage) {
    return null;
  }

  return (
    <VStack w="100%" justify="start" align="start">
      <VStack>
        <Tabs>
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
        </Tabs>
      </VStack>
    </VStack>
  );
};
