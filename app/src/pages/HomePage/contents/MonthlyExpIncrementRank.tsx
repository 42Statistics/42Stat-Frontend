import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

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

export const MonthlyExpIncrementRank = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EXP_INCREMENT_RANK);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { monthlyExpIncrementRank } = data.getHomePage;
  const unit = 'XP';

  const rankList: RankItemType[] = monthlyExpIncrementRank.map(
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
        <Rank rankList={rankList} cnt={5} unit={unit} />
      </Desktop>
      <BelowTablet>
        <Rank rankList={rankList} showImg={false} cnt={3} unit={unit} />
      </BelowTablet>
    </>
  );
};
