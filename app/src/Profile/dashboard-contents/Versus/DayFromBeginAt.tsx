import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import { GET_VERSUS_ZERO_COST } from '../../dashboard-contents-queries/GET_VERSUS_ZERO_COST';

export const DayFromBeginAt = () => {
  const { login } = useParams() as { login: string };
  const user = useAtomValue(userAtom);

  const title = '본과정 시작한지';
  const { loading, error, data } = useQuery(GET_VERSUS_ZERO_COST, {
    variables: { login1: login, login2: user.login },
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
    data1: { beginAt },
    data2: { beginAt: myBeginAt },
  } = data;

  const diff = Math.abs(getTimeDiffFromNow(new Date(beginAt), 'day'));
  const myDiff = Math.abs(getTimeDiffFromNow(new Date(myBeginAt), 'day'));
  const unit = '일째';

  return (
    <DashboardContent title={title}>
      <NumberVersus number1={diff} number2={myDiff} unit={unit} />
    </DashboardContent>
  );
};
