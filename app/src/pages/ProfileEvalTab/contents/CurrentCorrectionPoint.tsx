import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_CURRENT_CORRECTION_POINT = gql(/* GraphQL */ `
  query getCurrentCorrectionPoint {
    getPersonGeneralPage {
      userProfile {
        correctionPoint
      }
    }
  }
`);

export const CurrentCorrectionPoint = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_CORRECTION_POINT);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { correctionPoint } = data.getPersonGeneralPage.userProfile;
  const title = '보유 평가 포인트';
  const unit = '개';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={correctionPoint} unit={unit} />
    </DashboardContent>
  );
};
