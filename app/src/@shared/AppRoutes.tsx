import { DeferredComponent } from '@components/common';
import { AuthGuard } from '@guards/AuthGuard';
import { NoAuthGuard } from '@guards/NoAuthGuard';
import { UserMiddleware } from '@guards/UserMiddleware';
import { LandingLayout } from '@layouts/LandingLayout';
import { MainLayout } from '@layouts/MainLayout';
import NotFoundPage from '@pages/Error/404';
import FtOAuthPage from '@pages/FtOAuthPage';
import FtOAuthRedirectPage from '@pages/FtOAuthRedirectPage';
import { HomePageSkeleton } from '@pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@pages/PageSkeletons/ProfilePageSkeleton';
import SettingPage from '@pages/SettingPage';
import { ROUTES } from '@shared/constants/ROUTES';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('@/Landing'));
const HomePage = lazy(() => import('@/Home'));
const LeaderboardPage = lazy(() => import('@pages/LeaderboardPage'));
const EvalLogSearchPage = lazy(() => import('@pages/EvalLogSearchPage'));
const ProfilePage = lazy(() => import('@pages/ProfilePage'));
const ProjectDetailPage = lazy(() => import('@pages/ProjectDetailPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<NoAuthGuard />}>
        <Route element={<LandingLayout />}>
          <Route
            path={ROUTES.ROOT}
            element={
              <Suspense>
                <LandingPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route element={<LandingLayout />}>
        <Route path={ROUTES.FT_OAUTH} element={<FtOAuthPage />} />
        <Route
          path={ROUTES.FT_OAUTH_REDIRECT}
          element={<FtOAuthRedirectPage />}
        />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<UserMiddleware />}>
          <Route element={<MainLayout />}>
            <Route
              path={ROUTES.HOME}
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
              path={ROUTES.PROFILE_USERNAME_ROOT}
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
              path={ROUTES.PROFILE_USERNAME}
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
              path={ROUTES.LEADERBOARD_ROOT}
              element={<LeaderboardPage />}
            />
            <Route path={ROUTES.LEADERBOARD} element={<LeaderboardPage />} />
            <Route path={ROUTES.EVALLOG} element={<EvalLogSearchPage />} />
            <Route
              path={ROUTES.PROJECT_DETAIL}
              element={<ProjectDetailPage />}
            />
            <Route path={ROUTES.SETTING} element={<SettingPage />} />
          </Route>
        </Route>
      </Route>
      <Route element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
