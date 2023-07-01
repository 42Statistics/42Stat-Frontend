import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/Text/TextDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_EVAL_BY_LOGIN } from '../GET_PERSONAL_EVAL_BY_LOGIN';

export const TotalDuration = () => {
  const { username } = useParams() as { username: string };

  const title = '누적 평가 시간';

  const { loading, error, data } = useQuery(GET_PERSONAL_EVAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { totalDuration } = data.getPersonalEval;

  return (
    <DashboardContent title={title}>
      <TextDefault
        text={`${Math.floor(totalDuration / 60).toLocaleString()}시간 ${
          totalDuration % 60
        }분`}
      />
    </DashboardContent>
  );
};
