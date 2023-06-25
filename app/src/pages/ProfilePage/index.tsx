import { VStack } from '@components/common';
import { Tab, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import ProfileEvalTab from '@pages/ProfileEvalTab';
import ProfileGeneralTab from '@pages/ProfileGeneralTab';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProfilePageDashboard } from './hooks/useProfilePageDashboard';

type ProfileTabNames = 'General' | 'Eval';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
export const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState<ProfileTabNames>('General');

  return (
    <VStack w="100%" spacing="2rem">
      <Dashboard {...useProfilePageDashboard()} />
      <Tabs>
        <Tab
          selected={selectedTab === 'General'}
          onClick={() => setSelectedTab('General')}
        >
          일반
        </Tab>
        <Tab
          selected={selectedTab === 'Eval'}
          onClick={() => setSelectedTab('Eval')}
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
