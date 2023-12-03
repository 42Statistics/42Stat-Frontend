import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { BeginAtContext } from '@/Profile/contexts/BeginAtContext';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';

export const BeginAtProvider = ({ children }: React.PropsWithChildren) => {
  const { login } = useParams() as { login: string };

  // FIXME: DailyActivities에서만 쓰는데 굳이 여기서 쓸 필요 없음.
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login },
    },
  );

  if (loading) {
    return null;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  const { beginAt } = data.getPersonalGeneral;

  return (
    <BeginAtContext.Provider
      value={beginAt !== undefined ? new Date(beginAt) : new Date()}
    >
      {children}
    </BeginAtContext.Provider>
  );
};
