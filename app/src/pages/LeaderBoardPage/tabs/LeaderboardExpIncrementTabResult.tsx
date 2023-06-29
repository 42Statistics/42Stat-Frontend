import {
  GetLeaderboardExpIncrementQuery,
  GetLeaderboardExpIncrementQueryVariables,
} from '@/__generated__/graphql';
import { RankingUserItemType } from '@/types/Ranking';
import { QueryResult } from '@apollo/client';
import { Divider, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import { LeaderBoardTabResultSkeleton } from '@pages/PageSkeletons/LeaderBoardTabResultSkeleton';
import { isDefined } from '@utils/isDefined';

type LeaderboardExpIncrementTabResultProps = {
  result: QueryResult<
    GetLeaderboardExpIncrementQuery,
    GetLeaderboardExpIncrementQueryVariables
  >;
};

export const LeaderboardExpIncrementTabResult = ({
  result: { data, loading, error },
}: LeaderboardExpIncrementTabResultProps) => {
  if (loading) return <LeaderBoardTabResultSkeleton />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { me, totalRanking } =
    data.getLeaderboardExpIncrement.byDateTemplate.data;
  const unit = 'XP';

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
