import { useQuery } from '@apollo/client';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberCompare } from '@shared/components/DashboardContentView/NumberCompare';
import { getDateDiff } from '@shared/utils/getDateDiff';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import { GET_VERSUS_ZERO_COST } from '../../dashboard-contents-queries/GET_VERSUS_ZERO_COST';

export const DayFromBeginAt = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '본과정 시작한지';
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
    data1: { beginAt },
    data2: { beginAt: myBeginAt },
  } = data;

  const diff = getDateDiff(new Date(), new Date(beginAt));
  const myDiff = getDateDiff(new Date(), new Date(myBeginAt));
  const unit = '일째';

  return (
    <DashboardContent title={title}>
      <NumberCompare curr={diff} last={myDiff} unit={unit} />
    </DashboardContent>
  );
};
