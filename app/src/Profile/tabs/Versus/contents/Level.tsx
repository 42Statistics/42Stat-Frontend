import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberCompare } from '@shared/components/DashboardContentView/NumberCompare';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import { GET_VERSUS_ZERO_COST } from '../queries/GET_VERSUS_ZERO_COST';

export const Level = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '레벨';
  const { loading, error, data } = useQuery(GET_VERSUS_ZERO_COST, {
    variables: { login1: username, login2: user.login },
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

  const {
    data1: {
      userProfile: { level },
    },
    data2: {
      userProfile: { level: myLevel },
    },
  } = data;
  const unit = '';

  return (
    <DashboardContent title={title}>
      <NumberCompare curr={level} last={myLevel} unit={unit} />
    </DashboardContent>
  );
};
