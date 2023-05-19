import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_BLACKHOLED_AT = gql(/* GraphQL */ `
  query getBlackholedAt {
    getPersonGeneralPage {
      userProfile {
        blackholedAt
      }
    }
  }
`);

export const BlackholedAt = () => {
  const title = 'Black Hole Absorption';
  const { loading, error, data } = useQuery(GET_BLACKHOLED_AT);
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { blackholedAt } = data.getPersonGeneralPage.userProfile;

  return (
    <DashboardContent title={title}>
      {blackholedAt == null ? (
        <TextDefault text="I'm FREE 🕶️" /> // 반드시 Member만 blackholedAt == null인지 확인해야 함
      ) : (
        <TextDefault text={`${blackholedAt.toLocaleString()} days left`} />
      )}
    </DashboardContent>
  );
};
