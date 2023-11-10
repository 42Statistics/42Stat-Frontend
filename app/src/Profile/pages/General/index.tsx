import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { BeginAtContext } from '@/Profile/contexts/BeginAtContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { profileGeneralPageDashboardContents } from '@/Profile/dashboard-frames/profileGeneralPageDashboardContents';
import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

const ProfileGeneralPage = () => {
  const { login } = useContext(UserProfileContext);

  // FIXME: DailyActivities에서만 쓰는데 굳이 여기서 쓸 필요 없음.
  const { data } = useQuery(GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN, {
    variables: { login },
  });

  if (!data) {
    return null; // FIXME: handling
  }

  const { beginAt } = data.getPersonalGeneral;

  return (
    <>
      <Seo title={`${login} › 일반`} />
      <BeginAtContext.Provider
        value={beginAt !== undefined ? new Date(beginAt) : new Date()}
      >
        <Dashboard
          contents={profileGeneralPageDashboardContents}
          rows={profileGeneralPageDashboardRows}
        />
      </BeginAtContext.Provider>
      <Footer />
    </>
  );
};

export default ProfileGeneralPage;
