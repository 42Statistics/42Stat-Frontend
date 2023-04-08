import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

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

  // FIXME: BE와 논의 후 Type Assertion 제거
  const rankList: RankItemType[] = destinyUsers.map((destinyUser) => ({
    name: destinyUser!.login,
    value: destinyUser!.score,
    imgUrl: destinyUser!.imgUrl,
  }));

  return <Rank rankList={rankList} cnt={3} unit="회" />;
};
