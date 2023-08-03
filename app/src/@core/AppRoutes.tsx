import NotFoundPage from '@/Error/404';
import FtOAuthPage from '@/FtOAuth';
import FtOAuthRedirectPage from '@/FtOAuthRedirect';
import { HomePageSkeleton } from '@/Home/components/HomePageSkeleton';
import LaederboardPage from '@/Leaderboard';
import LeaderboardCoalitionScoreTab from '@/Leaderboard/tabs/CoalitionScore';
import LeaderboardEvalCountTab from '@/Leaderboard/tabs/EvalCount';
import LeaderboardExpIncrementTab from '@/Leaderboard/tabs/ExpIncrement';
import LeaderboardLevelTab from '@/Leaderboard/tabs/Level';
import ProfilePage from '@/Profile';
import ProfileEvalTab from '@/Profile/tabs/Eval';
import ProfileGeneralTab from '@/Profile/tabs/General';
import ProfileVersusTab from '@/Profile/tabs/Versus';
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
          <Route path={ROUTES.PROFILE} element={<ProfilePage />}>
            <Route index element={<Navigate replace to="general" />} />
            <Route
              path={ROUTES.PROFILE_GENERAL_TAB}
              element={<ProfileGeneralTab />}
            />
            <Route
              path={ROUTES.PROFILE_EVAL_TAB}
              element={<ProfileEvalTab />}
            />
            <Route
              path={ROUTES.PROFILE_VERSUS_TAB}
              element={<ProfileVersusTab />}
            />
          </Route>
          <Route path={ROUTES.LEADERBOARD} element={<LaederboardPage />}>
            <Route
              index
              element={<Navigate replace to={ROUTES.LEADERBOARD_LEVEL} />}
            />
            <Route
              path={ROUTES.LEADERBOARD_LEVEL}
              element={<LeaderboardLevelTab />}
            />
            <Route
              path={ROUTES.LEADERBOARD_EXP_INCREMENT}
              element={<LeaderboardExpIncrementTab />}
            />
            <Route
              path={ROUTES.LEADERBOARD_COALITION_SCORE}
              element={<LeaderboardCoalitionScoreTab />}
            />
            <Route
              path={ROUTES.LEADERBOARD_EVAL_COUNT}
              element={<LeaderboardEvalCountTab />}
            />
          </Route>
          <Route path={ROUTES.EVALLOG} element={<EvalLogSearchPage />} />
          <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailPage />} />
          <Route path={ROUTES.SETTING} element={<SettingPage />} />
        </Route>
      </Route>
      <Route element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
