import { getDailyProgrammingQuote } from '@/Home/utils/getDailyProgrammingQuote';
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
  WhiteH1BoldText,
  WhiteText,
} from '@shared/ui-kit';
import { timeDiffStringFormatter } from '@shared/utils/formatters/timeDiffStringFormatter';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

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
      const diffDays = getTimeDiffFromNow(
        new Date(recentValidatedTeam.lastEventTime),
        'day',
      );
      const timeDiffString = timeDiffStringFormatter(
        new Date(recentValidatedTeam.lastEventTime),
      );
      if (-2 <= diffDays && diffDays <= 0) {
        return `${timeDiffString}에 ${recentValidatedTeam.projectPreview.name}를 통과하셨네요! 축하드려요 🎉`;
      }
    }
    if (blackholedAt != null) {
      const daysLeft = getBlackholeDaysLeft(new Date(blackholedAt));
      if (daysLeft <= 7) {
        return "DON'T PANIC! You can do it 💙";
      }
      if (daysLeft <= 21) {
        return `${daysLeft}일 앞에 블랙홀이 보여요 👀 조심하세요`;
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
        <WhiteH1BoldText>반가워요, {userPreview.login} 👋</WhiteH1BoldText>
        <WhiteText>{getIndividualizedMessage()}</WhiteText>
      </VStack>
    </Layout>
  );
};

const Layout = styled(Center)`
  background-image: url(${space_background});
  background-size: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0 4rem;
  height: 100%;
  user-select: none;
`;
