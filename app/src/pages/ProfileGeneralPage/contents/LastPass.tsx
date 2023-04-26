import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_LAST_PASS = gql(/* GraphQL */ `
  query getLastPass {
    getPersonGeneralPage {
      teamInfo {
        lastPass
      }
    }
  }
`);

export const LastPass = () => {
  const { loading, error, data } = useQuery(GET_LAST_PASS);

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { lastPass } = data.getPersonGeneralPage.teamInfo;

  return <TextDefault text={lastPass ?? '-'} />;
};
