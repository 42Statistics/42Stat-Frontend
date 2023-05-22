import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import type { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

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

export const TotalEvalCountRank = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT_RANK);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { totalEvalCountRank } = data.getHomePage;
  const unit = '회';

  const rankList: RankItemType[] = totalEvalCountRank.map(
    ({ userPreview, value }) => ({
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return (
    <>
      <Desktop>
        <Rank rankList={rankList} cnt={3} unit={unit} />
      </Desktop>
      <BelowTablet>
        <Rank rankList={rankList} showImg={false} cnt={3} unit={unit} />
      </BelowTablet>
    </>
  );
};