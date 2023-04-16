import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
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
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { lastPass } = data.getPersonGeneralPage.teamInfo;

  return <TextDefault text={lastPass ?? '-'} />;
};
