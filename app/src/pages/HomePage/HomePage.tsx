import { Dashboard } from '@/components/templates/Dashboard';
import { Helmet } from 'react-helmet-async';
import { useHomePageDashboard } from './hooks';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>홈 | 42Stat</title>
      </Helmet>
      <Dashboard {...useHomePageDashboard()} />
    </>
  );
};
