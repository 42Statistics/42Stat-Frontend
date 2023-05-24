import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const GET_AVERAGE_FINAL_MARK = gql(/* GraphQL */ `
  query getAverageFinalMark($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  // const { username } = useParams() as { username: string };
  const { pathname } = useLocation();

  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK, {
    variables: { uid: Number(pathname.split('/')[2]) },
  });
  if (loading)
    return (
      <DashboardContent title={title} description={description}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { averageFinalMark } = data.getPersonalEvalPage;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageFinalMark} unit={unit} />
    </DashboardContent>
  );
};
