import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { ROUTES } from '@shared/constants/ROUTES';
import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ProfilePageSkeleton } from './components/ProfilePageSkeleton';
import { UserProfile } from './components/UserProfile';

const GET_USER_EXISTS = gql(/* GraphQL */ `
  query GetUserExists($login: String!) {
    getPersonalGeneral(login: $login) {
      userProfile {
        id
      }
    }
  }
`);

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const ProfilePage = () => {
  const { login } = useParams() as { login: string };
  const { loading, error, data } = useQuery(GET_USER_EXISTS, {
    variables: { login },
  });

  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  if (loading) {
    return <ProfilePageSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  return (
    <VStack w="100%" spacing="3rem">
      <UserProfile />
      <Tabs>
        <Tab
          selected={location.pathname.startsWith(
            ROUTES.PROFILE_GENERAL_TAB_OF(login),
          )}
          onClick={() => navigate(ROUTES.PROFILE_GENERAL_TAB_OF(login))}
        >
          일반
        </Tab>
        <Tab
          selected={location.pathname.startsWith(
            ROUTES.PROFILE_EVAL_TAB_OF(login),
          )}
          onClick={() => navigate(ROUTES.PROFILE_EVAL_TAB_OF(login))}
        >
          평가
        </Tab>
        {login !== user.login ? (
          <Tab
            selected={location.pathname.startsWith(
              ROUTES.PROFILE_VERSUS_TAB_OF(login),
            )}
            onClick={() => navigate(ROUTES.PROFILE_VERSUS_TAB_OF(login))}
          >
            나와 비교
          </Tab>
        ) : null}
      </Tabs>
      <Outlet />
    </VStack>
  );
};

export default ProfilePage;
