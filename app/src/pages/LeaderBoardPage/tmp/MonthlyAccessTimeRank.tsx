import { gql } from '@/__generated__';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

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

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { monthlyAccessTimeRank } = data.getHomePage;
  const unit = '시간';

  const rankList: RankItemType[] = monthlyAccessTimeRank.map(
    ({ userPreview, value }) => ({
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
