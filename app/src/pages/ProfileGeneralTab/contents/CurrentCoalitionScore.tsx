import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import {
  NumberDefault,
  TextDefault,
} from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_CURRENT_COALITION_SCORE = gql(/* GraphQL */ `
  query getCurrentCoalitionScore($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        coalition {
          score
        }
      }
    }
  }
`);

export const CurrentCoalitionScore = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(GET_CURRENT_COALITION_SCORE, {
    variables: {
      uid: username === 'me' ? user.id : 110650,
    },
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

  const { coalition } = data.getPersonGeneralPage.userProfile;

  return (
    <DashboardContent title={title}>
      {coalition == null ? (
        <TextDefault text="-" />
      ) : (
        <NumberDefault number={coalition.score} />
      )}
    </DashboardContent>
  );
};
