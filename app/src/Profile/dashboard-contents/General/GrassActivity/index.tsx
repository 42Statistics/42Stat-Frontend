import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { TotalActivity } from '@/Profile/dashboard-contents/General/GrassActivity/TotalActivity';
import { DailyActivity } from '@/Profile/dashboard-contents/General/GrassActivity/DailyActivity';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';

// const GET_PERSONAL_ACTIVITY_LOG = gql(/* GraphQL */ `
//   query GetPersonalActivityLog($login: String!) {
//   }
// `);

export const CoalitionScore = () => {
  const { login } = useContext(UserProfileContext);

  const title = '활동 내역';
};
// const { loading, error, data } = useQuery(GET_PERSONAL_ACTIVITY_LOG);

// if (loading) {
//   return <DashboardContentLoading title={title} />;
// }
// if (error) {
//   return <DashboardContentBadRequest title={title} message={error.message} />;
// }
// if (!data) {
//   return <DashboardContentNotFound title={title} />;
// }

//   return (
//     <Layout>
//       <TotalActivity />
//       <DailyActivity />
//     <Layout/>
//   );
// };

// const Layout = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	width: 100%;
// `;
