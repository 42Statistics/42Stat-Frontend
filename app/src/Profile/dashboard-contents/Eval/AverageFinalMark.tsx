import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { useContext } from 'react';

const GET_AVERAGE_FINAL_MARK_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageFinalMarkByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  const { login } = useContext(UserProfileContext);

  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK_BY_LOGIN, {
    variables: { login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { averageFinalMark } = data.getPersonalEval;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageFinalMark} unit={unit} />
    </DashboardContent>
  );
};
