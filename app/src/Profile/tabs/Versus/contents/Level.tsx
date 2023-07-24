import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@shared/components/DashboardContent';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
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
