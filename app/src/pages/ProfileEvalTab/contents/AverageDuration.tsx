import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_DURATION = gql(/* GraphQL */ `
  query getAverageDuration($login: String!) {
    getPersonalEvalPage(login: $login) {
      averageDuration
    }
  }
`);

export const AverageDuration = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 평가 시간';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_DURATION, {
    variables: { login: username },
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

  const { averageDuration } = data.getPersonalEvalPage;
  const unit = '분';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageDuration} unit={unit} />
    </DashboardContent>
  );
};
