import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_USER_PROFILE_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_USER_PROFILE_BY_LOGIN';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';

export const UserProfileProvider = ({ children }: React.PropsWithChildren) => {
  const { login } = useParams() as { login: string };

  const { loading, error, data } = useQuery(GET_USER_PROFILE_BY_LOGIN, {
    variables: { login },
  });

  if (loading) {
    return null;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  const { userProfile } = data.getPersonalGeneral;

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};
