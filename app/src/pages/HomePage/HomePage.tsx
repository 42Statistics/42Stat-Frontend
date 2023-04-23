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
  return (
    <>
      <Helmet>
        <title>42Stat</title>
      </Helmet>
      <Dashboard {...useHomePageDashboard()} />
    </>
  );
};
