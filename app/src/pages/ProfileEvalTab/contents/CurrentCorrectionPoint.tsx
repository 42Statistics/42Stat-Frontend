import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_CURRENT_CORRECTION_POINT = gql(/* GraphQL */ `
  query getCurrentCorrectionPoint($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        correctionPoint
      }
    }
  }
`);

export const CurrentCorrectionPoint = () => {
  const { userId } = useParams() as { userId: string };

  const title = '보유 평가 포인트';
  const { loading, error, data } = useQuery(GET_CURRENT_CORRECTION_POINT, {
    variables: { uid: Number(userId) },
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

  const { correctionPoint } = data.getPersonGeneralPage.userProfile;
  const unit = '개';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={correctionPoint} unit={unit} />
    </DashboardContent>
  );
};
