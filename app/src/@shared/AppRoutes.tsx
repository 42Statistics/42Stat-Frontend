import NotFoundPage from '@/Error/404';
import FtOAuthPage from '@/FtOAuth';
import FtOAuthRedirectPage from '@/FtOAuthRedirect';
import { HomePageSkeleton } from '@/Home/components/HomePageSkeleton';
import { ProfilePageSkeleton } from '@/Profile/components/ProfilePageSkeleton';
import SettingPage from '@/Setting';
import { LandingLayout } from '@shared/layouts/LandingLayout';
import { MainLayout } from '@shared/layouts/MainLayout';
import { ROUTES } from '@shared/constants/ROUTES';
import { AuthGuard } from '@shared/guards/AuthGuard';
import { NoAuthGuard } from '@shared/guards/NoAuthGuard';
import { UserMiddleware } from '@shared/guards/UserMiddleware';
import { DeferredComponent } from '@shared/ui-kit';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('@/Landing'));
const HomePage = lazy(() => import('@/Home'));
const LeaderboardPage = lazy(() => import('@/Leaderboard'));
const EvalLogSearchPage = lazy(() => import('@/EvalLogSearch'));
const ProfilePage = lazy(() => import('@/Profile'));
const ProjectDetailPage = lazy(() => import('@/Project/ProjectDetailPage'));

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
