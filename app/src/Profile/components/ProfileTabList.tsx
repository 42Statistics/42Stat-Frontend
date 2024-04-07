import { useLocation, useParams } from 'react-router-dom';

import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { ROUTES } from '@shared/constants/routes';
import { Tab, Tabs } from '@shared/ui-kit';

import { FollowTabList } from './Follow/FollowTabList';

export const ProfileTabList = () => {
  const user = useAtomValue(userAtom);
  const { pathname } = useLocation();
  const { login } = useParams() as { login: string };

  const startsWith = pathname.startsWith.bind(pathname);

  const {
    PROFILE_EVAL_OF,
    PROFILE_GENERAL_OF,
    PROFILE_LOGTIME_AND_PROJECT_OF,
    PROFILE_VERSUS_OF,
  } = ROUTES;

  return (
    <>
      <Tabs>
        <Tab
          selected={startsWith(PROFILE_GENERAL_OF(login))}
          link={PROFILE_GENERAL_OF(login)}
        >
          일반
        </Tab>
        <Tab
          selected={startsWith(PROFILE_LOGTIME_AND_PROJECT_OF(login))}
          link={PROFILE_LOGTIME_AND_PROJECT_OF(login)}
        >
          접속 · 과제
        </Tab>
        <Tab
          selected={startsWith(PROFILE_EVAL_OF(login))}
          link={PROFILE_EVAL_OF(login)}
        >
          평가
        </Tab>
        <>
          {login !== user.login && (
            <Tab
              selected={startsWith(PROFILE_VERSUS_OF(login))}
              link={PROFILE_VERSUS_OF(login)}
            >
              나와 비교
            </Tab>
          )}
        </>
        <FollowTabList />
      </Tabs>
    </>
  );
};
