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

const GET_WALLET = gql(/* GraphQL */ `
  query GetWallet($login: String!) {
    getPersonalGeneralPage(login: $login) {
      wallet
    }
  }
`);

export const Wallet = () => {
  const { username } = useParams() as { username: string };

  const title = '보유 월렛';
  const { loading, error, data } = useQuery(GET_WALLET, {
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

  const { wallet } = data.getPersonalGeneralPage;
  const unit = '₳';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={wallet} unit={unit} />
    </DashboardContent>
  );
};
