import { DeferredComponent, VStack } from '@/components/common';
import { Tab, TabList, TabPanel, Tabs } from '@/components/common/Tab';
import { Dashboard } from '@/components/templates/Dashboard';
import { lazyImport } from '@/utils/lazyImport';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ProfileEvalTabSkeleton } from '../ProfileEvalTab';
import { ProfileGeneralTabSkeleton } from '../ProfileGeneralTab';
import { useProfilePageDashboard } from './hooks';

const { ProfileGeneralTab } = lazyImport(
  () => import('@/pages/ProfileGeneralTab'),
  'ProfileGeneralTab',
);
const { ProfileEvalTab } = lazyImport(
  () => import('@/pages/ProfileEvalTab'),
  'ProfileEvalTab',
);

export const ProfilePage = () => {
  const { username } = useParams();

  return (
    <>
      <Helmet>
        <title>{username} | 42Stat</title>
      </Helmet>
      <ProfilePageLayout>
        <VStack w="100%" spacing="2rem">
          <Dashboard {...useProfilePageDashboard()} />
          <Tabs>
            <TabList>
              <Tab>일반</Tab>
              <Tab>평가</Tab>
            </TabList>
            <TabPanel>
              <Suspense
                fallback={
                  <DeferredComponent>
                    <ProfileGeneralTabSkeleton />
                  </DeferredComponent>
                }
              >
                <ProfileGeneralTab />
              </Suspense>
            </TabPanel>
            <TabPanel>
              <Suspense
                fallback={
                  <DeferredComponent>
                    <ProfileEvalTabSkeleton />
                  </DeferredComponent>
                }
              >
                <ProfileEvalTab />
              </Suspense>
            </TabPanel>
          </Tabs>
        </VStack>
      </ProfilePageLayout>
    </>
  );
};

const ProfilePageLayout = styled.div`
  width: 100%;
`;
