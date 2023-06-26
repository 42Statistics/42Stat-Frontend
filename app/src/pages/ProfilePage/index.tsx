import { VStack } from '@components/common';
import { Tab, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import ProfileEvalTab from '@pages/ProfileEvalTab';
import ProfileGeneralTab from '@pages/ProfileGeneralTab';
import { history } from '@utils/history';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useProfilePageDashboard } from './hooks/useProfilePageDashboard';

type ProfileTabNames = 'General' | 'Eval';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
export const ProfilePage = () => {
  const getSelectedTab = (tab: string | null): ProfileTabNames => {
    switch (tab) {
      case 'general':
        return 'General';
      case 'eval':
        return 'Eval';
      default:
        return 'General';
    }
  };

  const [searchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState<ProfileTabNames>(
    getSelectedTab(searchParams.get('tab')),
  );
  const navigate = useNavigate();
  const { username } = useParams() as { username: string };

  useEffect(() => {
    // 탭 간 앞으로 가기, 뒤로 가기
    history.listen((location) => {
      if (location.action === 'POP') {
        const searchParams = new URLSearchParams(location.location.search);
        setSelectedTab(getSelectedTab(searchParams.get('tab')));
      }
    });
  }, []);

  return (
    <VStack w="100%" spacing="2rem">
      <Dashboard {...useProfilePageDashboard()} />
      <Tabs>
        <Tab
          selected={selectedTab === 'General'}
          onClick={() => {
            setSelectedTab('General');
            navigate(`/profile/${username}?tab=general`);
          }}
        >
          일반
        </Tab>
        <Tab
          selected={selectedTab === 'Eval'}
          onClick={() => {
            setSelectedTab('Eval');
            navigate(`/profile/${username}?tab=eval`);
          }}
        >
          평가
        </Tab>
      </Tabs>
      <TabPanel show={selectedTab === 'General'}>
        <ProfileGeneralTab />
      </TabPanel>
      <TabPanel show={selectedTab === 'Eval'}>
        <ProfileEvalTab />
      </TabPanel>
    </VStack>
  );
};

const Head = () => {
  const { username } = useParams() as { username: string };

  return <Seo title={username} />;
};

export default withHead(withFooter(ProfilePage), Head);