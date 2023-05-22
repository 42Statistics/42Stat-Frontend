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

const GET_CURRENT_WALLET = gql(/* GraphQL */ `
  query getCurrentWallet($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        wallet
      }
    }
  }
`);

export const CurrentWallet = () => {
  const user = useAtomValue(userAtom);

  const title = '보유 월렛';
  const { loading, error, data } = useQuery(GET_CURRENT_WALLET, {
    variables: {
      uid: user.id,
    },
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

  const { wallet } = data.getPersonGeneralPage.userProfile;
  const unit = '₳';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={wallet} unit={unit} />
    </DashboardContent>
  );
};
