import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
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
  const title = '최근 신청한 과제';
  const { loading, error, data } = useQuery(GET_LAST_REGISTERED);
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

  const { lastRegistered } = data.getPersonGeneralPage.teamInfo;

  return (
    <DashboardContent title={title}>
      <TextDefault text={lastRegistered ?? '-'} />
    </DashboardContent>
  );
};
