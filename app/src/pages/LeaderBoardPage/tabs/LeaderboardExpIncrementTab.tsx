import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { HStack, SegmentedControl, Spacer, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import { LeaderBoardTabSkeleton } from '@pages/PageSkeletons/LeaderBoardTabSkeleton';
import { isDefined } from '@utils/isDefined';
import type { RankUserItemType } from '@utils/types/Rank';
import { useSegmentedControl } from '@utils/useSegmentedControl';

const GET_LEADERBOARD_EXP_INCREMENT = gql(/* GraphQL */ `
  query GetLeaderboardExpIncrement(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardExpIncrement {
      byDateTemplate(
        pageSize: $pageSize
        pageNumber: $pageNumber
        dateTemplate: $dateTemplate
      ) {
        data {
          me {
            userPreview {
              id
              login
              imgUrl
            }
            value
            rank
          }
          totalRanking {
            nodes {
              userPreview {
                id
                login
                imgUrl
              }
              value
              rank
            }
            totalCount
            pageSize
            pageNumber
          }
        }
        start
        end
      }
    }
  }
`);

export const LeaderboardExpIncrementTab = () => {
  const { loading, error, data } = useQuery(GET_LEADERBOARD_EXP_INCREMENT, {
    variables: {
      pageSize: 50,
      pageNumber: 1,
      dateTemplate: DateTemplate.CurrMonth,
    },
  });
  const options = [
    {
      label: '주간',
      value: 'weekly',
    },
    {
      label: '월간',
      value: 'monthly',
    },
  ];
  const { controlRef, segments } = useSegmentedControl(options);

  if (loading) return <LeaderBoardTabSkeleton />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { me, totalRanking } =
    data.getLeaderboardExpIncrement.byDateTemplate.data;
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
      <HStack w="100%">
        <SegmentedControl
          callback={console.log}
          controlRef={controlRef}
          segments={segments}
        />
        <Spacer />
      </HStack>
      {myRank && <LeaderBoardItem item={myRank} unit={unit} />}
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};
