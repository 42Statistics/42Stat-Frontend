import { useContext } from 'react';

import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

import { Footer } from '@core/components/Footer';

import { userAtom } from '@shared/atoms/userAtom';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';

import { ProfileVersusPageSkeleton } from '@/Profile/components/skeletons/ProfileVersusPageSkeleton';
import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';
import { profileVersusPageDashboardContents } from '@/Profile/dashboard-frames/profileVersusPageDashboardContents';
import { profileVersusPageDashboardRows } from '@/Profile/dashboard-frames/profileVersusPageDashboardRows';

const ProfileVersusPage = () => {
  const { login } = useContext(UserProfileContext);
  const user = useAtomValue(userAtom);

  const { loading, error, data } = useQuery(GET_USER_PROFILE_BY_LOGIN, {
    variables: { login: user.login },
  });

  if (loading) {
    return <ProfileVersusPageSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }
  const { userProfile } = data.getPersonalGeneral;

  return (
    <>
      <Seo title={`${login} › 나와 비교`} />
      <MyUserProfileContext.Provider value={userProfile}>
        <Dashboard
          contents={profileVersusPageDashboardContents}
          defaultRows={profileVersusPageDashboardRows}
        />
      </MyUserProfileContext.Provider>
      <Footer />
    </>
  );
};
export default ProfileVersusPage;
