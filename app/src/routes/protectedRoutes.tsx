import { AuthGuard } from '@/components/guards/AuthGuard';
import { MainLayout } from '@/components/layouts/MainLayout';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { HomePage } = lazyImport(() => import('@/pages/HomePage'), 'HomePage');
const { TotalPage } = lazyImport(
  () => import('@/pages/TotalPage'),
  'TotalPage',
);
const { EvaluationLogSearchPage } = lazyImport(
  () => import('@/pages/EvaluationLogSearchPage'),
  'EvaluationLogSearchPage',
);
const { ProfilePage } = lazyImport(
  () => import('@/pages/ProfilePage'),
  'ProfilePage',
);

const { AboutPage } = lazyImport(
  () => import('@/pages/AboutPage'),
  'AboutPage',
);
const { SettingsPage } = lazyImport(
  () => import('@/pages/SettingsPage'),
  'SettingsPage',
);

// TODO: Suspense fallback
const App = () => {
  return (
    <AuthGuard>
      <MainLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainLayout>
    </AuthGuard>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/total', element: <TotalPage /> },
      { path: '/evaluation-log-search', element: <EvaluationLogSearchPage /> },
      { path: '/profile/:username', element: <ProfilePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
];
