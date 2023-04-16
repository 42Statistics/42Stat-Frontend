import { Spinner } from '@/components/common';
import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { TabletDashboard } from '@/components/templates/Dashboard/TabletDashboard';
import { lazyImport } from '@/utils/lazyImport';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { ProfileMenu } from '@/utils/types/ProfileMenu';
import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ProfileTabBar } from './ProfileTabBar';
import { useProfilePage } from './hooks/useProfilePage';
import { dashboardContents } from './hooks/dashboardContents';

const { ProfileGeneralPage } = lazyImport(
  () => import('@/pages/ProfileGeneralPage'),
  'ProfileGeneralPage',
);
const { ProfileEvaluationPage } = lazyImport(
  () => import('@/pages/ProfileEvaluationPage'),
  'ProfileEvaluationPage',
);

export const ProfilePage = () => {
  const { username } = useParams();
  const {
    options,
    desktopDashboardRows,
    tabletDashboardRows,
    mobileDashboardRows,
  } = useProfilePage();
  const [selected, setSelected] = useState<ProfileMenu>('General');

  return (
    <>
      <Helmet>
        <title>{username} | 42Stat</title>
      </Helmet>
      <Desktop>
        <DesktopDashboard
          rows={desktopDashboardRows}
          contents={dashboardContents}
        />
      </Desktop>
      <Tablet>
        <TabletDashboard
          rows={tabletDashboardRows}
          contents={dashboardContents}
        />
      </Tablet>
      <Mobile>
        <MobileDashboard
          rows={mobileDashboardRows}
          contents={dashboardContents}
        />
      </Mobile>
      <ProfileTabBarLayout>
        <ProfileTabBar
          value={selected}
          onChange={setSelected}
          options={options}
        />
      </ProfileTabBarLayout>
      <Suspense fallback={<Spinner />}>
        {selected === 'General' ? (
          <ProfileGeneralPage />
        ) : (
          <ProfileEvaluationPage />
        )}
      </Suspense>
    </>
  );
};

const ProfileTabBarLayout = styled.div`
  width: 100%;
  padding: 4rem 3rem;
`;
