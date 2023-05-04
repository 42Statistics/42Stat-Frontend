import { DeferredComponent } from '@/components/common';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import { ProfilePageSkeleton } from '@/pages/SkeletonPages/ProfilePageSkeleton';
import { StatPageSkeleton } from '@/pages/SkeletonPages/StatPageSkeleton';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { HomePage } = lazyImport(() => import('@/pages/HomePage'), 'HomePage');
const { StatPage } = lazyImport(() => import('@/pages/StatPage'), 'StatPage');
const { LeaderBoardPage } = lazyImport(
  () => import('@/pages/LeaderBoardPage'),
  'LeaderBoardPage',
);
const { EvalLogSearchPage } = lazyImport(
  () => import('@/pages/EvalLogSearchPage'),
  'EvalLogSearchPage',
);
const { ProfilePage } = lazyImport(
  () => import('@/pages/ProfilePage'),
  'ProfilePage',
);

const { SettingsPage } = lazyImport(
  () => import('@/pages/SettingsPage'),
  'SettingsPage',
);

const DashboardApp = () => {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AuthGuard>
  );
};

const MainApp = () => {
  return (
    <AuthGuard>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AuthGuard>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <DashboardApp />,
    children: [
      {
        path: '/home',
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/stat',
        element: (
          <Suspense
            fallback={
              <DeferredComponent>
                <StatPageSkeleton />
              </DeferredComponent>
            }
          >
            <StatPage />
          </Suspense>
        ),
      },
      {
        path: '/leaderboard',
        element: (
          <Suspense>
            <LeaderBoardPage />
          </Suspense>
        ),
      },
      {
        path: '/profile/:username',
        element: (
          <Suspense
            fallback={
              <DeferredComponent>
                <ProfilePageSkeleton />
              </DeferredComponent>
            }
          >
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: '/settings',
        element: (
          <Suspense>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/eval-log-search',
        element: (
          <Suspense>
            <EvalLogSearchPage />
          </Suspense>
        ),
      },
    ],
  },
];
