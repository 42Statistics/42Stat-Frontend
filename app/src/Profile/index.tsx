import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { ROUTES } from '@shared/constants/(tmp)routes';
import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { UserProfileContext } from './contexts/UserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from './dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';

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
