import { Dashboard } from '@/components/templates/Dashboard';
import { Helmet } from 'react-helmet-async';
import { useStatPageDashboard } from './hooks';

export const StatPage = () => {
  return (
    <>
      <Helmet>
        <title>전체 통계 | 42Stat</title>
      </Helmet>
      <Dashboard {...useStatPageDashboard()} />
    </>
  );
};
