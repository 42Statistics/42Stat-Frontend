import { ProfileVersusPageSkeleton } from '@/Profile/components/skeletons/ProfileVersusPageSkeleton';
import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';
import { profileVersusPageDashboardContents } from '@/Profile/dashboard-frames/profileVersusPageDashboardContents';
import { profileVersusPageDashboardRows } from '@/Profile/dashboard-frames/profileVersusPageDashboardRows';
import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const ProfileVersusPage = () => {
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
    <MyUserProfileContext.Provider value={userProfile}>
      <Dashboard
        contents={profileVersusPageDashboardContents}
        rows={profileVersusPageDashboardRows}
      />
    </MyUserProfileContext.Provider>
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 나와 비교`} />;
};
export default withHead(withFooter(ProfileVersusPage), Head);
