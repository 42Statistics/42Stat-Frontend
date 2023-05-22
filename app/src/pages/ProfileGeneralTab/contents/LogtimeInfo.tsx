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

const GET_LOGTIME_INFO = gql(/* GraphQL */ `
  query getLogtimeInfo($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      logtimeInfo {
        data {
          currMonthLogtime
          lastMonthLogtime
          preferredTime {
            morning
            daytime
            evening
            night
          }
          preferredCluster
        }
        from
        to
      }
    }
  }
`);

export const LogtimeInfo = () => {
  const user = useAtomValue(userAtom);

  const title = '월간 출석 시간';
  const { loading, error, data } = useQuery(GET_LOGTIME_INFO, {
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

  const { currMonthLogtime, lastMonthLogtime } =
    data.getPersonGeneralPage.logtimeInfo.data;
  const { from, to } = data.getPersonGeneralPage.logtimeInfo;
  const description = `${dayjs(from).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthLogtime}
        last={lastMonthLogtime}
        unit="시간"
      />
    </DashboardContent>
  );
};
