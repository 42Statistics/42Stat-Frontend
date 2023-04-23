import { Spinner } from '@/components/common';
import { Dashboard } from '@/components/templates/Dashboard';
import { lazyImport } from '@/utils/lazyImport';
import { ProfileMenu } from '@/utils/types/ProfileMenu';
import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ProfileTabBar } from './ProfileTabBar';
import { useProfilePage, useProfilePageDashboard } from './hooks';

const { ProfileGeneralPage } = lazyImport(
  () => import('@/pages/ProfileGeneralPage'),
  'ProfileGeneralPage',
);
const { ProfileEvalPage } = lazyImport(
  () => import('@/pages/ProfileEvalPage'),
  'ProfileEvalPage',
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
      <Dashboard {...useProfilePageDashboard()} />
      <Layout>
        <ProfileTabBar
          value={selected}
          onChange={setSelected}
          options={options}
        />
      </Layout>
      <Suspense fallback={<Spinner />}>
        {selected === 'General' ? <ProfileGeneralPage /> : <ProfileEvalPage />}
      </Suspense>
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 4rem 3rem;
`;
