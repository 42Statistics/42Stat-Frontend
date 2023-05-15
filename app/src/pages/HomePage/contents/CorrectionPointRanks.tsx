import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { DashboardContent } from '@/components/templates/Dashboard';
import type { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

const GET_CORRECTION_POINT_RANK = gql(/* GraphQL */ `
  query getCorrectionPointRank {
    getTotalPage {
      correctionPointRanks {
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

export const CorrectionPointRanks = () => {
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT_RANK);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { correctionPointRanks } = data.getTotalPage;

  const title = '보유 평가 포인트 랭킹';
  const unit = '개';

  const rankList: RankItemType[] = correctionPointRanks.map(
    ({ userPreview, value }) => ({
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return (
    <DashboardContent title={title}>
      <Rank rankList={rankList} cnt={5} unit={unit} />
    </DashboardContent>
  );
};
