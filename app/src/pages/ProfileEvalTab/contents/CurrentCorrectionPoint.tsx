import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

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
  const user = useAtomValue(userAtom);
  const title = '보유 평가 포인트';
  const { loading, error, data } = useQuery(GET_CURRENT_CORRECTION_POINT, {
    variables: { uid: user.id },
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
