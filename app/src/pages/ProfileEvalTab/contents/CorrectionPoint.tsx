import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_CORRECTION_POINT = gql(/* GraphQL */ `
  query GetCorrectionPoint($login: String!) {
    getPersonalEval(login: $login) {
      correctionPoint
    }
  }
`);

export const CorrectionPoint = () => {
  const { username } = useParams() as { username: string };

  const title = '보유 평가 포인트';
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT, {
    variables: { login: username },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { correctionPoint } = data.getPersonalEval;
  const unit = '개';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={correctionPoint} unit={unit} />
    </DashboardContent>
  );
};
