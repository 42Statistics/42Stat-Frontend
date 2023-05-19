import { DeferredComponent } from '@/components/common';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { LogoutPage } from '@/pages/LogoutPage';
import { HomePageSkeleton } from '@/pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@/pages/PageSkeletons/ProfilePageSkeleton';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ROUTES } from './ROUTES';

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
const { ProjectPage } = lazyImport(
  () => import('@/pages/ProjectPage'),
  'ProjectPage',
);
const { MainLayout } = lazyImport(
  () => import('@/components/layouts/MainLayout'),
  'MainLayout',
);

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
    path: ROUTES.ROOT,
    element: <MainApp />,
    children: [
      {
        path: ROUTES.HOME,
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
        path: ROUTES.LEADERBOARD,
        element: (
          <Suspense>
            <LeaderBoardPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.PROFILE,
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
        path: ROUTES.PROJECT,
        element: (
          <Suspense>
            <ProjectPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.EVALLOG,
        element: (
          <Suspense>
            <EvalLogSearchPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: ROUTES.LOGOUT,
    element: (
      <AuthGuard>
        <LogoutPage />
      </AuthGuard>
    ),
  },
];
