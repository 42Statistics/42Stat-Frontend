import { DeferredComponent } from '@/components/common';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { LogoutPage } from '@/pages/LogoutPage';
import { HomePageSkeleton } from '@/pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@/pages/PageSkeletons/ProfilePageSkeleton';
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { ROUTES } from './ROUTES';

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((module) => ({
    default: module.HomePage,
  })),
);
const LeaderBoardPage = lazy(() =>
  import('@/pages/LeaderBoardPage').then((module) => ({
    default: module.LeaderBoardPage,
  })),
);
const EvalLogSearchPage = lazy(() =>
  import('@/pages/EvalLogSearchPage').then((module) => ({
    default: module.EvalLogSearchPage,
  })),
);
const ProfilePage = lazy(() =>
  import('@/pages/ProfilePage').then((module) => ({
    default: module.ProfilePage,
  })),
);
const ProjectPage = lazy(() =>
  import('@/pages/ProjectPage').then((module) => ({
    default: module.ProjectPage,
  })),
);
const MainLayout = lazy(() =>
  import('@/components/layouts/MainLayout').then((module) => ({
    default: module.MainLayout,
  })),
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
