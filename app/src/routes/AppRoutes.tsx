import { DeferredComponent } from '@/components/common';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { FtOAuthGuard } from '@/components/guards/FtOAuthGuard';
import { NoFtOAuthGuard } from '@/components/guards/NoFtOAuthGuard';
import { LandingLayout } from '@/components/layouts/LandingLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import { FtOAuthPage } from '@/pages/FtOAuthPage';
import { LogoutPage } from '@/pages/LogoutPage';
import { HomePageSkeleton } from '@/pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@/pages/PageSkeletons/ProfilePageSkeleton';
import { needFtOAuthAtom } from '@/utils/atoms/needFtOAuthAtom';
import { useAtomValue } from 'jotai';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './ROUTES';

const LandingPage = lazy(() =>
  import('@/pages/LandingPage').then((module) => ({
    default: module.LandingPage,
  })),
);
const HomePage = lazy(() =>
  import('@/pages/HomePage').then((module) => ({
    default: module.HomePage,
  })),
);
const LoginPage = lazy(() =>
  import('@/pages/LoginPage').then((module) => ({
    default: module.LoginPage,
  })),
);
const FtOAuthage = lazy(() =>
  import('@/pages/FtOAuthPage').then((module) => ({
    default: module.FtOAuthPage,
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
const NotFoundPage = lazy(() =>
  import('@/pages/ErrorPages/404').then((module) => ({
    default: module.NotFoundPage,
  })),
);

export const AppRoutes = () => {
  const needFtOAuth = useAtomValue(needFtOAuthAtom);

  return (
    <Routes>
      <Route element={<LandingLayout />}>
        {needFtOAuth !== 'false' && (
          <Route
            path={ROUTES.ROOT}
            element={
              <Suspense>
                <LandingPage />
              </Suspense>
            }
          />
        )}
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense>
              <LoginPage />
            </Suspense>
          }
        />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<NoFtOAuthGuard />}>
          <Route element={<LandingLayout />}>
            <Route
              path={ROUTES.FTOAUTH}
              element={
                <Suspense>
                  <FtOAuthPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route element={<FtOAuthGuard />}>
          <Route element={<MainLayout />}>
            <Route
              path={ROUTES.ROOT}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <HomePageSkeleton />
                    </DeferredComponent>
                  }
                >
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROFILE}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <ProfilePageSkeleton />
                    </DeferredComponent>
                  }
                >
                  <ProfilePage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <></>
                    </DeferredComponent>
                  }
                >
                  <LeaderBoardPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.EVALLOG}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <></>
                    </DeferredComponent>
                  }
                >
                  <EvalLogSearchPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROJECT}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <></>
                    </DeferredComponent>
                  }
                >
                  <ProjectPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
