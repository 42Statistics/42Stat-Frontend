import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';

const GET_MONTHLY_EVAL_CNT = gql(/* GraphQL */ `
  query getMonthlyEvalCnt($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      currMonthCount {
        data
        from
        to
      }
      lastMonthCount {
        data
        from
        to
      }
    }
  }
`);

export const MonthlyEvalCnt = () => {
  const user = useAtomValue(userAtom);
  const title = '월간 평가 횟수';
  const { loading, error, data } = useQuery(GET_MONTHLY_EVAL_CNT, {
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

  const { currMonthCount, lastMonthCount } = data.getPersonalEvalPage;
  const { from, to } = currMonthCount;
  const description = `${dayjs(from).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthCount.data}
        last={lastMonthCount.data}
        unit="회"
      />
    </DashboardContent>
  );
};
