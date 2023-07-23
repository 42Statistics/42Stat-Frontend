import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H1BoldText, H3Text, HStack } from '@components/common';
import { CoalitionMark } from '@components/elements/CoalitionMark';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_COALITION_SCORE_BY_LOGIN = gql(/* GraphQL */ `
  query GetCoalitionScoreByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      userProfile {
        coalition {
          ...coalitionFields
        }
      }
      scoreInfo {
        value
        rankInCoalition
      }
    }
  }
`);

export const CoalitionScore = () => {
  const { username } = useParams() as { username: string };

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { userProfile, scoreInfo } = data.getPersonalGeneral;
  const { coalition } = userProfile;
  const { value } = scoreInfo;
  const unit = '위';

  return (
    <DashboardContent title={title}>
      <HStack spacing="2rem" align="baseline">
        <H1BoldText>{value.toLocaleString()}</H1BoldText>
        <HStack spacing="0.5rem">
          <CoalitionMark size="18px" coalition={coalition} />
          {scoreInfo?.rankInCoalition ? (
            <HStack align="baseline">
              <H3Text>
                {scoreInfo.rankInCoalition.toLocaleString()}
                {unit}
              </H3Text>
            </HStack>
          ) : null}
        </HStack>
      </HStack>
    </DashboardContent>
  );
};
