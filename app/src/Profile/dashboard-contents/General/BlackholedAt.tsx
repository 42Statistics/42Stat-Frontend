import { ReactComponent as SmileyCheekySvg } from '@/Profile/assets/blackhole/smiley-cheeky.svg';
import { ReactComponent as SmileySadSvg } from '@/Profile/assets/blackhole/smiley-sad.svg';
import { ReactComponent as SmileyScaredSvg } from '@/Profile/assets/blackhole/smiley-scared.svg';
import { ReactComponent as SmileySleepySvg } from '@/Profile/assets/blackhole/smiley-sleepy.svg';
import { ReactComponent as SmileySmile1Svg } from '@/Profile/assets/blackhole/smiley-smile-1.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H2BoldText, HStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { useContext } from 'react';

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

  const getColorAndText = (daysLeft: number | null) => {
    if (daysLeft === null)
      return {
        color: theme.colors.mono.black,
        Svg: SmileyCheekySvg,
        text: 'Never',
      };
    if (daysLeft >= 365)
      return {
        color: '#3db618',
        Svg: SmileySleepySvg,
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft >= 42)
      return {
        color: '#3db618',
        Svg: SmileySmile1Svg,
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft >= 19)
      return {
        color: '#d7a900',
        Svg: SmileyScaredSvg,
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft > 0)
      return {
        color: '#ff0303',
        Svg: SmileySadSvg,
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft === 0)
      return { color: '#ff0303', Svg: SmileySadSvg, text: 'a few hours left' };
    return {
      color: '#ff0303',
      Svg: null,
      text: 'Absorbed by Black Hole',
    };
  };

  const { color, Svg, text } = getColorAndText(daysLeft);

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
