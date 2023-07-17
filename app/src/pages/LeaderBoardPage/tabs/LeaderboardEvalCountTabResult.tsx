import {
  GetLeaderboardEvalCountQuery,
  GetLeaderboardEvalCountQueryVariables,
} from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { ApolloNotFoundView } from '@components/elements/ApolloNotFoundView';
import { Leaderboard } from '@components/templates/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@pages/PageSkeletons/LeaderboardTabResultSkeleton';
import { isDefined } from '@utils/isDefined';

type LeaderboardEvalCountTabResultProps = {
  result: QueryResult<
    GetLeaderboardEvalCountQuery,
    GetLeaderboardEvalCountQueryVariables
  >;
};

export const LeaderboardEvalCountTabResult = ({
  result: { data, loading, error },
}: LeaderboardEvalCountTabResultProps) => {
  if (loading) return <LeaderboardTabResultSkeleton />;
  if (error) return <ApolloErrorView message={error.message} />;
  if (!data) return <ApolloNotFoundView />;

  const { me, totalRanking } = data.getLeaderboardEvalCount.byDateTemplate.data;
  const unit = '회';

  const myRanking =
    me != null
      ? {
          id: me.userPreview.id,
          name: me.userPreview.login,
          value: me.value,
          rank: me.rank,
          imgUrl: me.userPreview.imgUrl,
        }
      : null;

  const list = totalRanking.nodes
    .filter(isDefined)
    .map(({ userPreview, value, rank }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      rank: rank,
      imgUrl: userPreview.imgUrl,
    }));

  return <Leaderboard me={myRanking} list={list} unit={unit} />;
};
