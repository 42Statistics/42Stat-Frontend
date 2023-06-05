import { DashboardContent } from '@components/templates/DashboardContent';

export const DestinyUsers = () => {
  const title = '운명의 장난 스코어';
  const description = '평가에서 가장 자주 마주친 유저 랭킹';

  return (
    <DashboardContent
      title={title}
      description={description}
    ></DashboardContent>
  );
};

// TODO: getPersonGeneralPage -> getPersonEvaluationPage
// const GET_DESTINY_USERS = gql(/* GraphQL */ `
//   query getDestinyUsers {
//     getPersonGeneralPage {
//       evalUserInfo {
//         destinyUsers {
//           id
//           login
//           imgUrl
//           score
//         }
//       }
//     }
//   }
// `);

// export const DestinyUsers = () => {
//   const { loading, error, data } = useQuery(GET_DESTINY_USERS);

//   if (loading) return <Loader />;
//   if (error) {
//     return <h1>{error.message}</h1>;
//   }
//   if (!data) {
//     return <h1>user not found</h1>;
//   }

//   const { destinyUsers } = data.getPersonGeneralPage.evalUserInfo;
//   const unit = '회';

//   const rankList: RankItemType[] = destinyUsers
//     .filter(isDefined)
//     .map((destinyUser) => {
//       return {
//         name: destinyUser.login,
//         value: destinyUser.score,
//         imgUrl: destinyUser.imgUrl,
//       };
//     });

//   return (
//     <>
//       <AboveTablet>
//         <Rank rankList={rankList} cnt={3} unit={unit} />
//       </AboveTablet>
//       <Mobile>
//         <Rank rankList={rankList} showImg={false} cnt={3} unit={unit} />
//       </Mobile>
//     </>
//   );
// };
