import { Spinner } from '@/components/common';
import { DashboardItem } from '@/components/templates/DashboardItem';
import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { DesktopDashboardRow } from '@/components/templates/DashboardRow';
import { DesktopDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import { lazyImport } from '@/utils/lazyImport';
import { ProfileMenu } from '@/utils/types/ProfileMenu';
import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { UserProfile } from './contents';
import { useProfilePage } from './hooks/useProfilePage';
import { ProfileTabBar } from './ProfileTabBar';

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
  const { options } = useProfilePage();
  const [selected, setSelected] = useState<ProfileMenu>('General');

  return (
    <>
      <Helmet>
        <title>{username} | 42Stat</title>
      </Helmet>
      <DesktopDashboardRowContainer>
        <DesktopDashboardRow row={2} col={3}>
          <DashboardItemWrapper
            row={1}
            col={1}
            rowSpan={2}
            colSpan={3}
            element={<DashboardItem content={UserProfile} />}
          ></DashboardItemWrapper>
        </DesktopDashboardRow>
      </DesktopDashboardRowContainer>
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
