import { ReactComponent as SmileyCheekySvg } from '@/Profile/assets/blackhole/smiley-cheeky.svg';
import { ReactComponent as SmileySadSvg } from '@/Profile/assets/blackhole/smiley-sad.svg';
import { ReactComponent as SmileyScaredSvg } from '@/Profile/assets/blackhole/smiley-scared.svg';
import { ReactComponent as SmileySmile1Svg } from '@/Profile/assets/blackhole/smiley-smile-1.svg';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H2BoldText, HStack } from '@shared/ui-kit';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const BlackholedAt = () => {
  const theme = useTheme();
  const { username } = useParams() as { username: string };

  const title = 'Black Hole Absorption';
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

  const { blackholedAt } = data.getPersonalGeneral;
  const daysLeft = blackholedAt
    ? Math.floor(
        (new Date(blackholedAt).getTime() - Date.now()) / 1000 / 60 / 60 / 24,
      )
    : 0; // TODO: days left 로직 검증

  const getColorAndText = (isFree: boolean, daysLeft: number) => {
    if (isFree)
      return {
        color: theme.colors.mono.black,
        Svg: SmileyCheekySvg,
        text: 'Never',
      }; // 반드시 Member일 때만 blackholedAt === null
    if (daysLeft >= 365)
      return {
        color: '#3db618',
        Svg: SmileySmile1Svg, // 다른 Svg로 변경
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft >= 100)
      return {
        color: '#3db618',
        Svg: SmileySmile1Svg,
        text: `${daysLeft.toLocaleString()} days left`,
      };
    if (daysLeft >= 15)
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
      color: theme.colors.mono.black,
      Svg: null,
      text: 'Absorbed by Black Hole',
    };
  };

  const { color, Svg, text } = getColorAndText(blackholedAt === null, daysLeft);

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
