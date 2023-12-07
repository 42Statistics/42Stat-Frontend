import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';

import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

export const Wallet = () => {
  const { login } = useContext(UserProfileContext);

  const title = '보유 월렛';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login },
    },
  );

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
