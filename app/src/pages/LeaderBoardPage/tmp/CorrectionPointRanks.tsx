import { gql } from '@/__generated__';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
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

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

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
