import { gql } from '@/__generated__';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { useQuery } from '@apollo/client';
import { RankItemType } from '@/utils/types/Rank';

const GET_MONTHLY_ACCESS_TIME_RANK = gql(/* GraphQL */ `
  query GetMonthlyAccessTimeRank {
    getHomePage {
      monthlyAccessTimeRank {
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

export const MonthlyAccessTimeRank = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_ACCESS_TIME_RANK);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const rankList: RankItemType[] = data.getHomePage.monthlyAccessTimeRank.map(
    ({ userPreview, value }) => ({
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return <Rank rankList={rankList} cnt={5} unit="시간" />;
};
