import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  SmileySadSvg,
  SmileyShockSvg,
  SmileySmile1Svg,
} from '@assets/blackhole';
import { H2BoldText, HStack, Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/Dashboard';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';

const GET_BLACKHOLED_AT = gql(/* GraphQL */ `
  query getBlackholedAt($login: String!) {
    getPersonGeneralPage(login: $login) {
      userProfile {
        blackholedAt
      }
    }
  }
`);

export const BlackholedAt = () => {
  const { username } = useParams() as { username: string };

  const theme = useTheme();

  const title = 'Black Hole Absorption';
  const { loading, error, data } = useQuery(GET_BLACKHOLED_AT, {
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

  const { blackholedAt } = data.getPersonGeneralPage.userProfile;
  const daysLeft = blackholedAt
    ? Math.floor(
        (new Date(blackholedAt).getTime() - Date.now()) / 1000 / 60 / 60 / 24,
      )
    : 0; // TODO: days left 로직 검증

  const getColorAndText = (isFree: boolean, daysLeft: number) => {
    if (isFree) return { color: theme.colors.mono.black, text: '🚀' }; // 반드시 Member일 때만 blackholedAt === null
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
        Svg: SmileyShockSvg,
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
      <HStack w="100%" h="100%" spacing="1rem">
        {Svg && <Svg width="24px" stroke={color} />}
        <H2BoldText color={color}>{text}</H2BoldText>
      </HStack>
    </DashboardContent>
  );
};
