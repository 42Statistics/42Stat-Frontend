import { gql } from '@/__generated__';
import { Loader, VStack } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { LeaderBoard } from '@/components/templates/LeaderBoard';
import type { RankItemType } from '@/utils/types/Rank';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { levelRank } = data.getHomePage;
  const unit = '';

  const rankList: RankItemType[] = levelRank.map(({ userPreview, value }) => ({
    name: userPreview.login,
    value: value,
    imgUrl: userPreview.imgUrl,
  }));

  // https://letsbuildui.dev/articles/building-a-segmented-control-component
  return (
    <VStack w="100%" spacing="2rem">
      <VStack w="100%" align="start">
        SegmentedControl
      </VStack>
      <LeaderBoard rankList={rankList} unit={unit} />
    </VStack>
  );
};
