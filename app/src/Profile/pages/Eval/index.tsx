import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { profileEvalPageDashboardContents } from '@/Profile/dashboard-frames/profileEvalPageDashboardContents';
import { profileEvalPageDashboardRows } from '@/Profile/dashboard-frames/profileEvalPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

const ProfileEvalPage = () => {
  const { login } = useContext(UserProfileContext);

  return (
    <>
      <Seo title={`${login} › 평가`} />
      <Dashboard
        contents={profileEvalPageDashboardContents}
        rows={profileEvalPageDashboardRows}
      />
      <Footer />
    </>
  );
};

export default ProfileEvalPage;
