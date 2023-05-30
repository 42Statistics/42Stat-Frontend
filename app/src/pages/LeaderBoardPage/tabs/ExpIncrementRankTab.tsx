import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  HStack,
  Loader,
  SegmentedControl,
  Spacer,
  VStack,
} from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { LeaderBoard } from '@components/templates/LeaderBoard';
import { LeaderBoardItem } from '@components/templates/LeaderBoard/LeaderBoardItem';
import type { RankUserItemType } from '@utils/types/Rank';
import { useSegmentedControl } from '@utils/useSegmentedControl';

// 임시
const GET_MONTHLY_EXP_INCREMENT_RANK = gql(/* GraphQL */ `
  query GetMonthlyExpIncrementRank {
    getHomePage {
      monthlyExpIncrementRank {
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

export const ExpIncrementRankTab = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EXP_INCREMENT_RANK);
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { monthlyExpIncrementRank } = data.getHomePage;
  const unit = 'XP';

  const rankList: RankUserItemType[] = monthlyExpIncrementRank.map(
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
