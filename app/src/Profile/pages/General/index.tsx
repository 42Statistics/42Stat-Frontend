import { useContext } from 'react';

import { Footer } from '@core/components/Footer';

import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { Seo } from '@shared/components/Seo';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileGeneralPageDashboardMobileRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardMobileRows';

const ProfileGeneralPage = () => {
  const { login } = useContext(UserProfileContext);
  const device = useDeviceType();

  return (
    <>
      <Seo title={`${login} › 일반`} />
      {device !== 'mobile' ? (
        <DashboardTemp
          contents={profileGeneralPageDashboardContents}
          rows={profileGeneralPageDashboardRows}
        />
      ) : (
        <DashboardTemp
          contents={profileGeneralPageDashboardContents}
          rows={profileGeneralPageDashboardMobileRows}
        />
      )}
      <Footer />
    </>
  );
};

export default ProfileGeneralPage;
