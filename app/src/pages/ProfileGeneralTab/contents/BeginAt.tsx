import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { TextDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_BEGIN_AT = gql(/* GraphQL */ `
  query getBeginAt($login: String!) {
    getPersonGeneralPage(login: $login) {
      userProfile {
        beginAt
      }
    }
  }
`);

export const BeginAt = () => {
  const { username } = useParams() as { username: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_BEGIN_AT, {
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

  const { beginAt } = data.getPersonGeneralPage.userProfile;

  return (
    <DashboardContent title={title}>
      <TextDefault text={dayjs(beginAt).format('YYYY. MM. DD.')} />
    </DashboardContent>
  );
};
