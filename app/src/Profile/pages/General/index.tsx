import { useContext } from 'react';

import { Footer } from '@core/components/Footer';

import { Seo } from '@shared/components/Seo';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { Dashboard } from '@shared/components/Dashboard';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import {
  profileGeneralPageDashboardRowsDesktop,
  profileGeneralPageDashboardRowsMobile,
} from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';

const ProfileGeneralPage = () => {
  const { login } = useContext(UserProfileContext);
  const device = useDeviceType();

  return (
    <>
      <Seo title={`${login} › 일반`} />
      {device !== 'mobile' ? (
        <Dashboard
          contents={profileGeneralPageDashboardContents}
          rows={profileGeneralPageDashboardRowsDesktop}
        />
      ) : (
        <Dashboard
          contents={profileGeneralPageDashboardContents}
          rows={profileGeneralPageDashboardRowsMobile}
        />
      )}
      <Footer />
    </>
  );
};

export default ProfileGeneralPage;
