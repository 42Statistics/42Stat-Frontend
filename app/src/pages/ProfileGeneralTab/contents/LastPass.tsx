import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { lastPass } = data.getPersonGeneralPage.teamInfo;
  const title = '최근 통과한 과제';

  return (
    <DashboardContent title={title}>
      <TextDefault text={lastPass ?? '-'} />
    </DashboardContent>
  );
};
