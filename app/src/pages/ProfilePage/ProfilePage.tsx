import { Text, VStack } from '@components/common';
import { Tab, TabList, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import { Dashboard } from '@components/templates/Dashboard';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import ProfileEvalTab from '@pages/ProfileEvalTab';
import ProfileGeneralTab from '@pages/ProfileGeneralTab';
import { useParams } from 'react-router-dom';
import { useProfilePageDashboard } from './hooks';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
export const ProfilePage = () => {
  return (
    <VStack w="100%" spacing="2rem">
      <Dashboard {...useProfilePageDashboard()} />
      <Tabs>
        <TabList>
          <Tab>
            <Text>일반</Text>
          </Tab>
          <Tab>
            <Text>평가</Text>
          </Tab>
        </TabList>
        <TabPanel>
          <ProfileGeneralTab />
        </TabPanel>
        <TabPanel>
          <ProfileEvalTab />
        </TabPanel>
      </Tabs>
    </VStack>
  );
};

const Head = () => {
  const { username } = useParams() as { username: string };

  return <Seo title={username} />;
};

export default withHead(withFooter(ProfilePage), Head);
