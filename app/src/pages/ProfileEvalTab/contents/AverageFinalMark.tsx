import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_EVAL_BY_LOGIN } from '../GET_PERSONAL_EVAL_BY_LOGIN';

export const AverageFinalMark = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_PERSONAL_EVAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { averageFinalMark } = data.getPersonalEval;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageFinalMark} unit={unit} />
    </DashboardContent>
  );
};
