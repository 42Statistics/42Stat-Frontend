import { userAtom } from '@shared/atoms/userAtom';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { Tab, Tabs, VStack } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const ProfilePage = () => {
  const { login } = useParams() as { login: string };
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

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

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={login} />;
};

export default withHead(withFooter(ProfilePage), Head);
