import NotFoundPage from '@/Error/404';
import FtOAuthPage from '@/FtOAuth';
import FtOAuthRedirectPage from '@/FtOAuthRedirect';
import { HomePageSkeleton } from '@/Home/components/HomePageSkeleton';
import LeaderboardLayout from '@/Leaderboard';
import ProfileLayout from '@/Profile';
import SettingPage from '@/Setting';
import { AuthGuard } from '@core/guards/AuthGuard';
import { NoAuthGuard } from '@core/guards/NoAuthGuard';
import { LandingLayout } from '@core/layouts/LandingLayout';
import { MainLayout } from '@core/layouts/MainLayout';
import { ROUTES } from '@shared/constants/ROUTES';
import { DeferredComponent } from '@shared/ui-kit';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('@/Landing'));
const HomePage = lazy(() => import('@/Home'));
const EvalLogSearchPage = lazy(() => import('@/EvalLogSearch'));
const ProjectDetailPage = lazy(() => import('@/Project/ProjectDetailPage'));
const ProfileGeneralPage = lazy(() => import('@/Profile/pages/General'));
const ProfileEvalPage = lazy(() => import('@/Profile/pages/Eval'));
const ProfileVersusPage = lazy(() => import('@/Profile/pages/Versus'));
const LeaderboardLevelPage = lazy(() => import('@/Leaderboard/pages/Level'));
const LeaderboardExpIncrementPage = lazy(
  () => import('@/Leaderboard/pages/ExpIncrement'),
);
const LeaderboardCoalitionScorePage = lazy(
  () => import('@/Leaderboard/pages/CoalitionScore'),
);
const LeaderboardEvalCountPage = lazy(
  () => import('@/Leaderboard/pages/EvalCount'),
);

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
          <Route path={ROUTES.PROFILE} element={<ProfileLayout />}>
            <Route index element={<Navigate replace to="general" />} />
            <Route
              path={ROUTES.PROFILE_GENERAL}
              element={
                <Suspense>
                  <ProfileGeneralPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROFILE_EVAL}
              element={
                <Suspense>
                  <ProfileEvalPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROFILE_VERSUS}
              element={
                <Suspense>
                  <ProfileVersusPage />
                </Suspense>
              }
            />
          </Route>
          <Route path={ROUTES.LEADERBOARD} element={<LeaderboardLayout />}>
            <Route
              index
              element={<Navigate replace to={ROUTES.LEADERBOARD_LEVEL} />}
            />
            <Route
              path={ROUTES.LEADERBOARD_LEVEL}
              element={
                <Suspense>
                  <LeaderboardLevelPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_EXP_INCREMENT}
              element={
                <Suspense>
                  <LeaderboardExpIncrementPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_COALITION_SCORE}
              element={
                <Suspense>
                  <LeaderboardCoalitionScorePage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_EVAL_COUNT}
              element={
                <Suspense>
                  <LeaderboardEvalCountPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={ROUTES.EVALLOG}
            element={
              <Suspense>
                <EvalLogSearchPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PROJECT_DETAIL}
            element={
              <Suspense>
                <ProjectDetailPage />
              </Suspense>
            }
          />
          <Route path={ROUTES.SETTING} element={<SettingPage />} />
        </Route>
      </Route>
      <Route element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
