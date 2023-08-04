import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardExpIncrementQuery,
  GetLeaderboardExpIncrementQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

type LeaderboardExpIncrementPageResultProps = {
  result: QueryResult<
    GetLeaderboardExpIncrementQuery,
    GetLeaderboardExpIncrementQueryVariables
  >;
};

export const LeaderboardExpIncrementPageResult = ({
  result: { data, loading, error },
}: LeaderboardExpIncrementPageResultProps) => {
  if (loading) {
    return <LeaderboardResultSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardResultSkeleton />;
  }

  const {
    data: {
      me,
      totalRanking: { nodes },
    },
    start,
    end,
  } = data.getLeaderboardExpIncrement.byDateTemplate;
  const unit = 'XP';

  return (
    <Leaderboard
      me={me}
      list={nodes}
      unit={unit}
      start={new Date(start)}
      end={new Date(end)}
    />
  );
};
