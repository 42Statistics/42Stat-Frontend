import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_BEGIN_AT = gql(/* GraphQL */ `
  query getBeginAt($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        beginAt
      }
    }
  }
`);

export const BeginAt = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);
  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_BEGIN_AT, {
    variables: { uid: username === 'me' ? user.id : 110650 },
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
