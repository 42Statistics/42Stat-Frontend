import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import space_background from '@shared/assets/space-background.webp';
import { ApolloErrorView } from '@shared/components/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloNotFoundView';
import {
  Center,
  Loader,
  VStack,
  WhiteH2BoldText,
  WhiteText,
} from '@shared/ui-kit';
import { getDateDiff } from '@shared/utils/getDateDiff';
import { getDailyProgrammingQuote } from './getDailyProgrammingQuote';

const GET_MY_INFO = gql(/* GraphQL */ `
  query GetMyInfo {
    getMyInfo {
      userPreview {
        id
        login
        imgUrl
      }
      recentValidatedTeam {
        status
        lastEventTime
        projectPreview {
          id
          name
          url
        }
      }
      isNewMember
      blackholedAt
      experienceRank
      scoreRank
      evalCountRank
    }
  }
`);

export const Hero = () => {
  const { loading, error, data } = useQuery(GET_MY_INFO);

  if (loading)
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <ApolloErrorView message={error.message} />
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <ApolloNotFoundView />
      </Layout>
    );

  const {
    userPreview,
    recentValidatedTeam,
    isNewMember,
    blackholedAt,
    experienceRank,
    scoreRank,
    evalCountRank,
  } = data.getMyInfo;

  const getIndividualizedMessage = () => {
    if (isNewMember) {
      return '🎉🎉 Member 달성 축하드려요 🎉🎉';
    }
    if (
      recentValidatedTeam != null &&
      recentValidatedTeam.lastEventTime != null
    ) {
      const diff = getDateDiff(
        new Date(),
        new Date(recentValidatedTeam.lastEventTime),
      );
      if (diff <= 2) {
        return `${diff}일 전에 ${recentValidatedTeam.projectPreview.name}를 통과하셨네요! 축하드려요 🎉`;
      }
    }
    if (blackholedAt != null) {
      const diff = Math.abs(getDateDiff(new Date(blackholedAt)));
      if (diff <= 7) {
        return "DON'T PANIC! You can do it 💙";
      }
      if (diff <= 21) {
        return `${diff}일 앞에 블랙홀이 보여요 👀 조심하세요`;
      }
    }
    const maxRank = Math.max(
      scoreRank ?? 4242,
      evalCountRank ?? 4242,
      experienceRank ?? 4242,
    );
    if (maxRank <= 3) {
      if (experienceRank === maxRank) {
        return `대단해요! 주간 경험치 증가량 랭킹 ${experienceRank}위를 차지했어요 🏅`;
      }
      if (scoreRank === maxRank) {
        return `대단해요! 주간 코알리숑 스코어 랭킹 ${scoreRank}위를 차지했어요 🏅`;
      }
      if (evalCountRank === maxRank) {
        return `대단해요! 주간 평가 횟수 랭킹 ${scoreRank}위를 차지했어요 🏅`;
      }
    }
    return getDailyProgrammingQuote();
  };

  return (
    <Layout>
      <VStack w="100%" h="100%" align="start" spacing="1rem">
        <WhiteH2BoldText>반가워요, {userPreview.login} 👋</WhiteH2BoldText>
        <WhiteText>{getIndividualizedMessage()}</WhiteText>
      </VStack>
    </Layout>
  );
};

const Layout = styled(Center)`
  background-image: url(${space_background});
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 0 4rem;
  height: 100%;
  user-select: none;
`;