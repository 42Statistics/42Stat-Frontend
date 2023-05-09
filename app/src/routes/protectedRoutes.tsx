import { DeferredComponent } from '@/components/common';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { HomePageSkeleton } from '@/pages/SkeletonPages/HomePageSkeleton';
import { ProfilePageSkeleton } from '@/pages/SkeletonPages/ProfilePageSkeleton';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { HomePage } = lazyImport(() => import('@/pages/HomePage'), 'HomePage');
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

const { DashboardLayout } = lazyImport(
  () => import('@/components/layouts/DashboardLayout'),
  'DashboardLayout',
);

const { MainLayout } = lazyImport(
  () => import('@/components/layouts/MainLayout'),
  'MainLayout',
);

const DashboardApp = () => {
  return (
    <AuthGuard>
      <Suspense>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </Suspense>
    </AuthGuard>
  );
};

const MainApp = () => {
  return (
    <AuthGuard>
      <Suspense>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Suspense>
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
          <Suspense
            fallback={
              <DeferredComponent>
                <HomePageSkeleton />
              </DeferredComponent>
            }
          >
            <HomePage />
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
    ],
  },
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/evallog',
        element: (
          <Suspense>
            <EvalLogSearchPage />
          </Suspense>
        ),
      },
    ],
  },
];
