// TODO: getPersonGeneralPage -> getPersonEvaluationPage
// const GET_DIFFICULTY = gql(/* GraphQL */ `
//   query getDifficulty {
//     getPersonGeneralPage {
//       evalUserInfo {
//         difficulty
//       }
//     }
//   }
// `);

// export const Difficulty = () => {
//   const { loading, error, data } = useQuery(GET_DIFFICULTY);

//   if (loading) return <Spinner />;
//   if (error) {
//     return <h1>{error.message}</h1>;
//   }
//   if (!data) {
//     return <h1>user not found</h1>;
//   }

//   const { difficulty } = data.getPersonGeneralPage.evalUserInfo;

//   return <TextDefault text={difficulty} />;
// };

export const Difficulty = () => {
  return <></>;
};
