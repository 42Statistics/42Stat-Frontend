import { useQuery } from '@apollo/client';
import { CoalitionMark } from '@shared/components/CoalitionMark';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H1BoldText, H3Text, HStack } from '@shared/ui-kit';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const CoalitionScore = () => {
  const { username } = useParams() as { username: string };

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login: username },
    },
  );

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
