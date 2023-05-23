import { gql } from '@/__generated__';
import { Loader, SegmentedControl, VStack } from '@/components/common';
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
      <VStack w="100%" align="start">
        <SegmentedControl
          callback={console.log}
          controlRef={controlRef}
          segments={segments}
        />
      </VStack>
      <LeaderBoardItem rank={6} item={rankList[5]} unit={unit} />
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};
