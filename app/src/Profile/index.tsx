import { Outlet, useLocation, useParams } from 'react-router-dom';

import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { ROUTES } from '@shared/constants/routes';
import { Tab, Tabs, VStack } from '@shared/ui-kit';

import { BeginAtProvider } from '@/Profile/components/BeginAtProvider';
import { UserProfile } from '@/Profile/components/UserProfile';
import { UserFollowerProvider } from '@/Profile/components/UserFollowerProvider';
import { UserProfileProvider } from '@/Profile/components/UserProfileProvider';

const ProfileLayout = () => {
  const { pathname } = useLocation();
  const { login } = useParams() as { login: string };

  const user = useAtomValue(userAtom);

  return (
    <UserProfileProvider>
      <UserFollowerProvider>
        <BeginAtProvider>
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
                  selected={pathname.startsWith(
                    ROUTES.PROFILE_VERSUS_OF(login),
                  )}
                  link={ROUTES.PROFILE_VERSUS_OF(login)}
                >
                  나와 비교
                </Tab>
              ) : null}
            </Tabs>
            <Outlet />
          </VStack>
        </BeginAtProvider>
      </UserFollowerProvider>
    </UserProfileProvider>
  );
};

export default ProfileLayout;
