import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';
import { profileVersusTabDashboardContents } from '@/Profile/dashboard-frames/profileVersusTabDashboardContents';
import { profileVersusTabDashboardRows } from '@/Profile/dashboard-frames/profileVersusTabDashboardRows';
import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
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
    return null;
  }
  if (error) {
    return null;
  }
  if (!data) {
    return null;
  }
  const { userProfile } = data.getPersonalGeneral;

  return (
    <MyUserProfileContext.Provider value={userProfile}>
      <Dashboard
        contents={profileVersusTabDashboardContents}
        rows={profileVersusTabDashboardRows}
      />
    </MyUserProfileContext.Provider>
  );
};

const Head = () => {
  const { login } = useParams() as { login: string };

  return <Seo title={`${login} › 나와 비교`} />;
};
export default withHead(withFooter(ProfileVersusPage), Head);
