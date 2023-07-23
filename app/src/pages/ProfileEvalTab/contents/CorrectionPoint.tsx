import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_CORRECTION_POINT_BY_LOGIN = gql(/* GraphQL */ `
  query GetCorrectionPointByLogin($login: String!) {
    getPersonalEval(login: $login) {
      correctionPoint
    }
  }
`);

export const CorrectionPoint = () => {
  const { username } = useParams() as { username: string };

  const title = '보유 평가 포인트';
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { correctionPoint } = data.getPersonalEval;
  const unit = '개';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={correctionPoint} unit={unit} />
    </DashboardContent>
  );
};
