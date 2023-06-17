import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_LAST_REGISTERED = gql(/* GraphQL */ `
  query getLastRegistered($login: String!) {
    getPersonalGeneralPage(login: $login) {
      teamInfo {
        lastRegistered
      }
    }
  }
`);

export const LastRegistered = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 신청한 과제';
  const { loading, error, data } = useQuery(GET_LAST_REGISTERED, {
    variables: { login: username },
  });
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

  const { lastRegistered } = data.getPersonalGeneralPage.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastRegistered != null ? (
        <TextDefault text={lastRegistered} />
      ) : (
        <TextDefault text="과제 신청 기록이 없어요 😓" />
      )}
    </DashboardContent>
  );
};
