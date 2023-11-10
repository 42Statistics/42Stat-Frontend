import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileLogtimeAndProjectPageDashboardContents } from '@/Profile/dashboard-frames/profileLogtimeAndProjectPageDashboardContents';
import { profileLogtimeAndProjectPageDashboardRows } from '@/Profile/dashboard-frames/profileLogtimeAndProjectPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

const ProfileLogtimeAndProjectPage = () => {
  const { login } = useContext(UserProfileContext);
  return (
    <>
      <Seo title={`${login} › 접속 · 과제`} />
      <Dashboard
        contents={profileLogtimeAndProjectPageDashboardContents}
        rows={profileLogtimeAndProjectPageDashboardRows}
      />
      <Footer />
    </>
  );
};

export default ProfileLogtimeAndProjectPage;
