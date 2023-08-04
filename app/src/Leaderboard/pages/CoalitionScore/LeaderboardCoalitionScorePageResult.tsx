import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@/Leaderboard/components/LeaderboardTabResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardCoalitionScoreQuery,
  GetLeaderboardCoalitionScoreQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

type LeaderboardCoalitionScorePageResultProps = {
  result: QueryResult<
    GetLeaderboardCoalitionScoreQuery,
    GetLeaderboardCoalitionScoreQueryVariables
  >;
};

export const LeaderboardCoalitionScorePageResult = ({
  result: { data, loading, error },
}: LeaderboardCoalitionScorePageResultProps) => {
  if (loading) {
    return <LeaderboardTabResultSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardTabResultSkeleton />;
  }

  const {
    data: {
      me,
      totalRanking: { nodes },
    },
    start,
    end,
  } = data.getLeaderboardScore.byDateTemplate;

  return (
    <Leaderboard
      me={me}
      list={nodes}
      start={new Date(start)}
      end={new Date(end)}
    />
  );
};
