import {
  GetLeaderboardLevelQuery,
  GetLeaderboardLevelQueryVariables,
} from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import { LeaderBoardTabResultSkeleton } from '@pages/PageSkeletons/LeaderBoardTabResultSkeleton';
import { isDefined } from '@utils/isDefined';
import { RankUserItemType } from '@utils/types/Rank';

type LeaderboardLevelTabResultProps = {
  result: QueryResult<
    GetLeaderboardLevelQuery,
    GetLeaderboardLevelQueryVariables
  >;
};

export const LeaderboardLevelTabResult = ({
  result: { data, loading, error },
}: LeaderboardLevelTabResultProps) => {
  if (loading) return <LeaderBoardTabResultSkeleton />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { me, totalRanking } = data.getLeaderboardLevel.total;
  const unit = 'XP';

  const myRank: RankUserItemType | null =
    me != null
      ? {
          id: me.userPreview.id,
          name: me.userPreview.login,
          value: me.value,
          rank: me.rank,
          imgUrl: me.userPreview.imgUrl,
        }
      : null;

  const rankList: RankUserItemType[] = totalRanking.nodes
    .filter(isDefined)
    .map(({ userPreview, value, rank }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      rank: rank,
      imgUrl: userPreview.imgUrl,
    }));

  return (
    <VStack w="100%" spacing="2rem">
      {myRank && <LeaderBoardItem item={myRank} unit={unit} />}
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};