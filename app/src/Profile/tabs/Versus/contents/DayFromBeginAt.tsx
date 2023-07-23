import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@components/templates/DashboardContent';
import { getDateDiff } from '@shared/utils/getDateDiff';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import { GET_VERSUS_ZERO_COST } from '../queries/GET_VERSUS_ZERO_COST';

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
