import { useContext } from 'react';

import { Footer } from '@core/components/Footer';

import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileLogtimeAndProjectPageDashboardContents } from '@/Profile/dashboard-frames/profileLogtimeAndProjectPageDashboardContents';
import { profileLogtimeAndProjectPageDashboardRows } from '@/Profile/dashboard-frames/profileLogtimeAndProjectPageDashboardRows';

const ProfileLogtimeAndProjectPage = () => {
  const { login } = useContext(UserProfileContext);
  return (
    <>
      <Seo title={`${login} › 접속 · 과제`} />
      <Dashboard
        contents={profileLogtimeAndProjectPageDashboardContents}
        defaultRows={profileLogtimeAndProjectPageDashboardRows}
      />
      <Footer />
    </>
  );
};

export default ProfileLogtimeAndProjectPage;
