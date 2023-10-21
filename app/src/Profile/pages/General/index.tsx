import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

const ProfileGeneralPage = () => {
  const { login } = useContext(UserProfileContext);

  return (
    <>
      <Seo title={`${login} › 일반`} />
      <Dashboard
        contents={profileGeneralPageDashboardContents}
        rows={profileGeneralPageDashboardRows}
      />
      <Footer />
    </>
  );
};

export default ProfileGeneralPage;
