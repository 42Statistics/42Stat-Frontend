import { useContext } from 'react';

import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H2BoldText, HStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getBlackholeColorAndText } from '@shared/utils/getBlackholeColorsAndText';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const BlackholedAt = () => {
  const theme = useTheme();
  const { login } = useContext(UserProfileContext);

  const title = 'Black Hole Absorption';
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

  const { blackholedAt } = data.getPersonalGeneral;
  const daysLeft =
    blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : null;

  const { color, Svg, text } = getBlackholeColorAndText(theme, daysLeft);

  return (
    <DashboardContent title={title}>
      <HStack spacing="1rem">
        {Svg !== null ? <Svg width={24} height={24} stroke={color} /> : null}
        <H2BoldText color={color} style={{ textAlign: 'center' }}>
          {text}
        </H2BoldText>
      </HStack>
    </DashboardContent>
  );
};
