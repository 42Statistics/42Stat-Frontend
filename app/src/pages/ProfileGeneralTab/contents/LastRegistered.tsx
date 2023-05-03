import { gql } from '@/__generated__';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_LAST_REGISTERED = gql(/* GraphQL */ `
  query getLastRegistered {
    getPersonGeneralPage {
      teamInfo {
        lastRegistered
      }
    }
  }
`);

export const LastRegistered = () => {
  const { loading, error, data } = useQuery(GET_LAST_REGISTERED);

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { lastRegistered } = data.getPersonGeneralPage.teamInfo;

  return <TextDefault text={lastRegistered ?? '-'} />;
};
