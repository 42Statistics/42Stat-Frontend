import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { HStack, SegmentedControl, Spacer, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import type { RankUserItemType } from '@utils/types/Rank';
import { useSegmentedControl } from '@utils/useSegmentedControl';
import { LeaderBoardTabSkeleton } from '@pages/PageSkeletons/LeaderBoardTabSkeleton';

// 임시
const GET_TOTAL_EVAL_COUNT_RANK = gql(/* GraphQL */ `
  query GetTotalEvalCountRank {
    getHomePage {
      totalEvalCountRank {
        userPreview {
          id
          login
          imgUrl
        }
        value
      }
    }
  }
`);

export const EvalCountRankTab = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT_RANK);
  const options = [
    {
      label: '주간',
      value: 'weekly',
    },
    {
      label: '월간',
      value: 'monthly',
    },
    {
      label: '누적',
      value: 'total',
    },
  ];
  const { controlRef, segments } = useSegmentedControl(options);

  if (loading) return <LeaderBoardTabSkeleton />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { totalEvalCountRank } = data.getHomePage;
  const unit = '회';

  const rankList: RankUserItemType[] = totalEvalCountRank.map(
    ({ userPreview, value }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

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
      <LeaderBoardItem rank={1} item={rankList[0]} unit={unit} />
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};
