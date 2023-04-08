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

  //TODO: UserPreview 형식으로 오게 된다면 수정해야함. 일단 임시
  const rankList: RankItemType[] = destinyUsers.map((v) => {
    return {
      name: v!.login,
      value: v!.score,
      imgUrl: v!.imgUrl,
    };
  });

  return <Rank rankList={rankList} cnt={3} unit="회" />;
};
