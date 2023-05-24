import { gql } from '@/__generated__';
import {
  HStack,
  Loader,
  SegmentedControl,
  Spacer,
  VStack,
} from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { LeaderBoard } from '@/components/templates/LeaderBoard';
import { LeaderBoardItem } from '@/components/templates/LeaderBoard/LeaderBoardItem';
import type { RankItemType } from '@/utils/types/Rank';
import { useSegmentedControl } from '@/utils/useSegmentedControl';
import { useQuery } from '@apollo/client';

const GET_LEVEL_RANK = gql(/* GraphQL */ `
  query GetLevelRank {
    getHomePage {
      levelRank {
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

export const LevelRankTab = () => {
  const { loading, error, data } = useQuery(GET_LEVEL_RANK);
  const options = [
    {
      label: '누적',
      value: 'total',
    },
  ];
  const { controlRef, segments } = useSegmentedControl(options);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { levelRank } = data.getHomePage;
  const unit = '';

  const rankList: RankItemType[] = levelRank.map(({ userPreview, value }) => ({
    id: userPreview.id,
    name: userPreview.login,
    value: value,
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
      <LeaderBoardItem rank={1} item={rankList[0]} unit={unit} />
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};
