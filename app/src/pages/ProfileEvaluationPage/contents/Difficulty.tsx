import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

// TODO: getPersonGeneralPage -> getPersonEvaluationPage
const GET_DIFFICULTY = gql(/* GraphQL */ `
  query getDifficulty {
    getPersonGeneralPage {
      evalUserInfo {
        difficulty
      }
    }
  }
`);

export const Difficulty = () => {
  const { loading, error, data } = useQuery(GET_DIFFICULTY);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { difficulty } = data.getPersonGeneralPage.evalUserInfo;

  return <TextDefault text={difficulty} />;
};
