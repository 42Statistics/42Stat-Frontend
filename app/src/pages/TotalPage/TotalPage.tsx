import { Dashboard } from '@/components/templates/Dashboard';
import { Helmet } from 'react-helmet-async';
import { useTotalPageDashboard } from './hooks';

export const TotalPage = () => {
  return (
    <>
      <Helmet>
        <title>전체 정보 보기 | 42Stat</title>
      </Helmet>
      <Dashboard {...useTotalPageDashboard()} />
    </>
  );
};
