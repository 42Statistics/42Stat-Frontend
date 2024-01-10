import { useContext } from 'react';

import { Footer } from '@core/components/Footer';

import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import {
  profileGeneralPageDashboardRows,
  profileGeneralPageDashboardRowsMobile,
} from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';

const ProfileGeneralPage = () => {
  const { login } = useContext(UserProfileContext);

  return (
    <>
      <Seo title={`${login} › 일반`} />
      <Dashboard
        contents={profileGeneralPageDashboardContents}
        defaultRows={profileGeneralPageDashboardRows}
        mobileRows={profileGeneralPageDashboardRowsMobile}
      />
      <Footer />
    </>
  );
};

export default ProfileGeneralPage;
