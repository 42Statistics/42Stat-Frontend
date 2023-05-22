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
import { useAtomValue } from 'jotai';

const GET_LAST_PASS = gql(/* GraphQL */ `
  query getLastPass($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      teamInfo {
        lastPass
      }
    }
  }
`);

export const LastPass = () => {
  const user = useAtomValue(userAtom);

  const title = '최근 통과한 과제';
  const { loading, error, data } = useQuery(GET_LAST_PASS, {
    variables: { uid: user.id },
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

  const { lastPass } = data.getPersonGeneralPage.teamInfo;

  return (
    <DashboardContent title={title}>
      <TextDefault text={lastPass ?? '-'} />
    </DashboardContent>
  );
};
