import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { DashboardContent } from '@/components/templates/Dashboard';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import type { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

const GET_CORRECTION_POINT_RANK = gql(/* GraphQL */ `
  query getCorrectionPointRank($limit: Int!) {
    getTotalPage {
      correctionPointRanks(limit: $limit) {
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
  const title = '보유 평가 포인트 랭킹';
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT_RANK, {
    variables: { limit: 5 },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { correctionPointRanks } = data.getTotalPage;

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
      <AboveTablet>
        <Rank rankList={rankList} cnt={5} unit={unit} />
      </AboveTablet>
      <Mobile>
        <Rank rankList={rankList} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
