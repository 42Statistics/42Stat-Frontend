import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { TextDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

/**
 * @description
 * 여러 시간단위에 대한 데이터를 얻고싶으면
 * currMonth: preferredClusterByDateTemplate(dateTemplate: CURR_MONTH) {
        data {
          name
        }
        start
        end
        }
    }
  lastMonth: preferredClusterByDateTemplate(dateTemplate: LAST_MONTH) {
    data {
      name
    }
    start
    end
  }
    등으로 복제해서 사용
 */
const GET_PREFERRED_CLUSTER = gql(/* GraphQL */ `
  query getPrefferedCluster($login: String!) {
    getPersonalGeneralPage(login: $login) {
      preferredClusterByDateTemplate(dateTemplate: CURR_MONTH) {
        data {
          name
        }
        start
        end
      }
    }
  }
`);

export const PrefferedCluster = () => {
  const { username } = useParams() as { username: string };

  const title = '주 접속 클러스터';
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_PREFERRED_CLUSTER, {
    variables: { login: username },
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
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { preferredClusterByDateTemplate } = queryData.getPersonalGeneralPage;
  const { data, start, end } = preferredClusterByDateTemplate;

  const description = `${dayjs(start).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <TextDefault
        text={data.name ? `클러스터 ${data.name.toUpperCase()}` : '-'}
      />
    </DashboardContent>
  );
};
