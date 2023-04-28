import { Dashboard } from '@/components/templates/Dashboard';
import { Helmet } from 'react-helmet-async';
import { useHomePageDashboard } from './hooks';

// const GET_USER = gql(`
//   query GetUser($id: Int!) {
//     user(id: $id) {
//       id
//       login
//     }
//   }
// `);

export const HomePage = () => {
  // TODO: 리더보드 만든 이후 BE 쿼리 위치 정착되면 기준일 HomePage 단에서 전체 다 받아서 description에 주입
  // const { data, loading, error } = useQuery(GET_HOME_PAGE_DESCRIPTION_DATE);

  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <Dashboard {...useHomePageDashboard()} />
    </>
  );
};
