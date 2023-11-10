import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { UserProfile } from '@/Profile/components/UserProfile';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';
import { userAtom } from '@shared/atoms/userAtom';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { ROUTES } from '@shared/constants/routes';
import { Tab, Tabs, VStack } from '@shared/ui-kit';

const ProfileLayout = () => {
  const { pathname } = useLocation();
  const { login } = useParams() as { login: string };
  const { loading, error, data } = useQuery(GET_USER_PROFILE_BY_LOGIN, {
    variables: { login },
  });

  const user = useAtomValue(userAtom);

  if (loading) {
    return null;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  const { userProfile } = data.getPersonalGeneral;

  return (
    <UserProfileContext.Provider value={userProfile}>
      <VStack w="100%" spacing="3rem">
        <UserProfile />
        <Tabs>
          <Tab
            selected={pathname.startsWith(ROUTES.PROFILE_GENERAL_OF(login))}
            link={ROUTES.PROFILE_GENERAL_OF(login)}
          >
            일반
          </Tab>
          <Tab
            selected={pathname.startsWith(
              ROUTES.PROFILE_LOGTIME_AND_PROJECT_OF(login),
            )}
            link={ROUTES.PROFILE_LOGTIME_AND_PROJECT_OF(login)}
          >
            접속 · 과제
          </Tab>
          <Tab
            selected={pathname.startsWith(ROUTES.PROFILE_EVAL_OF(login))}
            link={ROUTES.PROFILE_EVAL_OF(login)}
          >
            평가
          </Tab>
          {login !== user.login ? (
            <Tab
              selected={pathname.startsWith(ROUTES.PROFILE_VERSUS_OF(login))}
              link={ROUTES.PROFILE_VERSUS_OF(login)}
            >
              나와 비교
            </Tab>
          ) : null}
        </Tabs>
        <Outlet />
      </VStack>
    </UserProfileContext.Provider>
  );
};

export default ProfileLayout;
