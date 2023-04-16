import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { isDefined } from '@/utils/isDefined';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

// TODO: getPersonGeneralPage -> getPersonEvaluationPage
const GET_DESTINY_USERS = gql(/* GraphQL */ `
  query getDestinyUsers {
    getPersonGeneralPage {
      evalUserInfo {
        destinyUsers {
          id
          login
          imgUrl
          score
        }
      }
    }
  }
`);

export const DestinyUsers = () => {
  const { loading, error, data } = useQuery(GET_DESTINY_USERS);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { destinyUsers } = data.getPersonGeneralPage.evalUserInfo;
  const unit = '회';

  const rankList: RankItemType[] = destinyUsers
    .filter(isDefined)
    .map((destinyUser) => {
      return {
        name: destinyUser.login,
        value: destinyUser.score,
        imgUrl: destinyUser.imgUrl,
      };
    });

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
