import { AuthGuard } from '@/components/guards/AuthGuard';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { HomePage } = lazyImport(() => import('@/pages/HomePage'), 'HomePage');
const { TotalPage } = lazyImport(
  () => import('@/pages/TotalPage'),
  'TotalPage',
);
const { EvalLogSearchPage } = lazyImport(
  () => import('@/pages/EvalLogSearchPage'),
  'EvalLogSearchPage',
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
const DashboardApp = () => {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    </AuthGuard>
  );
};

const MainApp = () => {
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
    element: <DashboardApp />,
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/total', element: <TotalPage /> },
      { path: '/profile/:username', element: <ProfilePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/',
    element: <MainApp />,
    children: [{ path: '/eval-log-search', element: <EvalLogSearchPage /> }],
  },
];
