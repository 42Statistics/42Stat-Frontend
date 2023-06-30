import {
  GetLeaderboardCoalitionScoreQuery,
  GetLeaderboardCoalitionScoreQueryVariables,
} from '@/__generated__/graphql';
import { RankingUserItemType } from '@/types/Ranking';
import { QueryResult } from '@apollo/client';
import { Divider, VStack } from '@components/common';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import { LeaderBoardTabResultSkeleton } from '@pages/PageSkeletons/LeaderBoardTabResultSkeleton';
import { isDefined } from '@utils/isDefined';

type LeaderboardCoalitionScoreTabResultProps = {
  result: QueryResult<
    GetLeaderboardCoalitionScoreQuery,
    GetLeaderboardCoalitionScoreQueryVariables
  >;
};

export const LeaderboardCoalitionScoreTabResult = ({
  result: { data, loading, error },
}: LeaderboardCoalitionScoreTabResultProps) => {
  if (loading) return <LeaderBoardTabResultSkeleton />;
  if (error || !data) return <ApolloErrorView message={error?.message} />;

  const { me, totalRanking } = data.getLeaderboardScore.byDateTemplate.data;
  const unit = '';

  const myRanking: RankingUserItemType | null =
    me != null
      ? {
          id: me.userPreview.id,
          name: me.userPreview.login,
          value: me.value,
          rank: me.rank,
          imgUrl: me.userPreview.imgUrl,
        }
      : null;

  const list: RankingUserItemType[] = totalRanking.nodes
    .filter(isDefined)
    .map(({ userPreview, value, rank }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      rank: rank,
      imgUrl: userPreview.imgUrl,
    }));

  return (
    <VStack w="100%" spacing="5rem">
      {myRanking && <LeaderBoardItem item={myRanking} unit={unit} isMe />}
      <Divider />
      <LeaderBoard list={list} me={myRanking} unit={unit} />
    </VStack>
  );
};
