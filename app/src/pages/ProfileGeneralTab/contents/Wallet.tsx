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

const GET_WALLET_BY_LOGIN = gql(/* GraphQL */ `
  query GetWalletByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      wallet
    }
  }
`);

export const Wallet = () => {
  const { username } = useParams() as { username: string };

  const title = '보유 월렛';
  const { loading, error, data } = useQuery(GET_WALLET_BY_LOGIN, {
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

  const { wallet } = data.getPersonalGeneral;
  const unit = '₳';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={wallet} unit={unit} />
    </DashboardContent>
  );
};
