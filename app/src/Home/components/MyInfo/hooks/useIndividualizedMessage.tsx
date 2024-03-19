import { useQuery } from '@apollo/client';

import type { GetIndividualizedMessageQuery } from '@shared/__generated__/graphql';
import { timeDiffStringFormatter } from '@shared/utils/formatters/timeDiffStringFormatter';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

import { getDailyProgrammingQuote } from '@/Stat/utils/getDailyProgrammingQuote';
import { GET_INDIVIDUALIZED_MESSAGE } from '@/Home/components/MyInfo/api/getInidividualizedMessage';

export const useIndividualizedMessageQuery = () => {
  const { loading, error, data } = useQuery(GET_INDIVIDUALIZED_MESSAGE);

  if (isUserExist(data)) {
    return { loading, error, data, message: getIndividualizedMessage(data) };
  }

  return { loading, error, data, message: getDailyProgrammingQuote() };
};

const getIndividualizedMessage = (userExistData: UserExistData) => {
  const {
    lastValidatedTeam,
    isNewMember,
    blackholedAt,
    experienceRank,
    scoreRank,
    evalCountRank,
  } = userExistData.getMyInfo;

  if (isNewMember) {
    return '🎉🎉 멤버 달성 축하드려요 🎉🎉';
  }

  if (isRecentValidatedTeam(lastValidatedTeam)) {
    const timeDiffString = timeDiffStringFormatter(
      new Date(lastValidatedTeam.lastEventTime),
    );

    return `${timeDiffString}에 ${lastValidatedTeam.projectPreview.name}를 통과하셨네요! 축하드려요 🎉`;
  }

  const blackholeDaysLeft = blackholedAt
    ? getBlackholeDaysLeft(new Date(blackholedAt))
    : undefined;

  if (isAboutToBlackholed(blackholeDaysLeft)) {
    // todo: constant
    if (blackholeDaysLeft <= 7) {
      return "DON'T PANIC! You can do it 💙";
    }

    return `${blackholeDaysLeft}일 앞에 블랙홀이 보여요 👀 조심하세요`;
  }

  if (isHighRank(experienceRank)) {
    return `대단해요! 주간 경험치 증가량 랭킹 ${experienceRank}위를 차지했어요 🏅`;
  }

  if (isHighRank(scoreRank)) {
    return `대단해요! 주간 코알리숑 스코어 랭킹 ${scoreRank}위를 차지했어요 🏅`;
  }

  if (isHighRank(evalCountRank)) {
    return `대단해요! 주간 평가 횟수 랭킹 ${evalCountRank}위를 차지했어요 🏅`;
  }

  return getDailyProgrammingQuote();
};

type UserExistData = Omit<GetIndividualizedMessageQuery, 'getMyInfo'> & {
  getMyInfo: NonNullable<GetIndividualizedMessageQuery['getMyInfo']>;
};

const isUserExist = (
  data?: GetIndividualizedMessageQuery,
): data is UserExistData => {
  return !!data?.getMyInfo;
};

type LastValidatedTeam = Pick<
  NonNullable<GetIndividualizedMessageQuery['getMyInfo']>,
  'lastValidatedTeam'
>['lastValidatedTeam'];

type RecentValidatedTeam = Exclude<
  NonNullable<
    Pick<
      NonNullable<GetIndividualizedMessageQuery['getMyInfo']>,
      'lastValidatedTeam'
    >
  >['lastValidatedTeam'],
  null | undefined
>;

const isRecentValidatedTeam = (
  lastValidatedTeam: LastValidatedTeam,
): lastValidatedTeam is RecentValidatedTeam => {
  if (!lastValidatedTeam) {
    return false;
  }

  const diffDays = getTimeDiffFromNow(
    new Date(lastValidatedTeam.lastEventTime),
    'day',
  );

  // todo: constant
  return -2 <= diffDays && diffDays <= 0;
};

const isAboutToBlackholed = (
  blackholeDaysLeft?: number,
): blackholeDaysLeft is number => {
  return blackholeDaysLeft !== undefined && blackholeDaysLeft < 22;
};

const isHighRank = (rank: number | null | undefined): rank is number => {
  // todo: constant
  return typeof rank === 'number' && rank <= 3 && rank !== 0;
};
