import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

const GET_COALITION_SCORE_RANK = gql(/* GraphQL */ `
  query getCoalitionScoreRank {
    getTotalPage {
      monthlyScoreRanks {
        data {
          userPreview {
            id
            login
            imgUrl
          }
          value
        }
        from
        to
      }
    }
  }
`);

export const MonthlyScoreRanks = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RANK);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { monthlyScoreRanks } = data.getTotalPage;
  const unit = 'P';

  const rankList: RankItemType[] = monthlyScoreRanks.data.map(
    ({ userPreview, value }) => ({
      id: userPreview.id,
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
