import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { Tab, TabPanel, Tabs, VStack } from '@shared/ui-kit';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';
import { useProfilePageDashboard } from './hooks/useProfilePageDashboard';
import ProfileEvalTab from './tabs/Eval';
import ProfileGeneralTab from './tabs/General';
import ProfileVersusTab from './tabs/Versus';

type ProfileTabNames = 'General' | 'Eval' | 'Versus';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
export const ProfilePage = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();
  const params = useParams();

  const getSelectedTab = (tab?: string | null): ProfileTabNames => {
    switch (tab) {
      case 'general':
        return 'General';
      case 'eval':
        return 'Eval';
      case 'versus':
        return 'Versus';
      default:
        return 'General';
    }
  };

  const tab = getSelectedTab(params.tab);

  return (
    <VStack w="100%" spacing="3rem">
      <Dashboard {...useProfilePageDashboard()} />
      <Tabs>
        <Tab
          selected={tab === 'General'}
          onClick={() => navigate(`${ROUTES.PROFILE_ROOT}/${username}/general`)}
        >
          일반
        </Tab>
        <Tab
          selected={tab === 'Eval'}
          onClick={() => navigate(`${ROUTES.PROFILE_ROOT}/${username}/eval`)}
        >
          평가
        </Tab>
        {username !== user.login ? (
          <Tab
            selected={tab === 'Versus'}
            onClick={() =>
              navigate(`${ROUTES.PROFILE_ROOT}/${username}/versus`)
            }
          >
            나와 비교
          </Tab>
        ) : null}
      </Tabs>
      <TabPanel show={tab === 'General'}>
        <ProfileGeneralTab />
      </TabPanel>
      <TabPanel show={tab === 'Eval'}>
        <ProfileEvalTab />
      </TabPanel>
      <TabPanel show={tab === 'Versus'}>
        <ProfileVersusTab />
      </TabPanel>
    </VStack>
  );
};

const Head = () => {
  const { username } = useParams() as { username: string };

  return <Seo title={username} />;
};

export default withHead(withFooter(ProfilePage), Head);
