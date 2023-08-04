import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { CoalitionMark } from '@shared/components/CoalitionMark';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { Body1Text, H2MediumText, HStack } from '@shared/ui-kit';
import { useContext } from 'react';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../../dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const CoalitionScore = () => {
  const { login } = useContext(UserProfileContext);

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login },
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

  const {
    userProfile: { coalition },
    scoreInfo: { value, rankInCoalition },
  } = data.getPersonalGeneral;
  const unit = '위';

  return (
    <DashboardContent title={title}>
      <HStack spacing="2rem" align="baseline">
        <H2MediumText>{value.toLocaleString()}</H2MediumText>
        <HStack spacing="0.5rem">
          <CoalitionMark size="18px" coalition={coalition} />
          {rankInCoalition ? (
            <HStack align="baseline">
              <Body1Text>
                {rankInCoalition.toLocaleString()}
                {unit}
              </Body1Text>
            </HStack>
          ) : null}
        </HStack>
      </HStack>
    </DashboardContent>
  );
};
