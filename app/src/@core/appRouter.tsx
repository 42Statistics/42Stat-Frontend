import { Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { HomePageSkeleton } from '@/Home/components/skeletons/HomePageSkeleton';
import { LeaderboardPageSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardPageSkeleton';
import { ProfileEvalPageSkeleton } from '@/Profile/components/skeletons/ProfileEvalPageSkeleton';
import { ProfileGeneralPageSkeleton } from '@/Profile/components/skeletons/ProfileGeneralPageSkeleton';
import { ProfileVersusPageSkeleton } from '@/Profile/components/skeletons/ProfileVersusPageSkeleton';
import { UserProfileSkeleton } from '@/Profile/components/skeletons/UserProfileSkeleton';
import { AuthGuard } from '@core/guards/AuthGuard';
import { UnAuthGuard } from '@core/guards/UnAuthGuard';
import { ROUTES } from '@shared/constants/routes';
import { DeferredComponent } from '@shared/ui-kit';

const LandingLayout = lazy(() => import('@core/layouts/LandingLayout'));
const MainLayout = lazy(() => import('@core/layouts/MainLayout'));
const ProfileLayout = lazy(() => import('@/Profile'));
const LeaderboardLayout = lazy(() => import('@/Leaderboard'));
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
const LeaderboardScorePage = lazy(() => import('@/Leaderboard/pages/Score'));
const LeaderboardEvalCountPage = lazy(
  () => import('@/Leaderboard/pages/EvalCount'),
);
const LeaderboardCommentPage = lazy(
  () => import('@/Leaderboard/pages/Comment'),
);
const TeamPage = lazy(() => import('@/Team'));
const NotFoundPage = lazy(() => import('@/Error/404'));
const FtOAuthRequestPage = lazy(() => import('@/FtOAuthRequest'));
const FtOAuthRedirectPage = lazy(() => import('@/FtOAuthRedirect'));
const SettingPage = lazy(() => import('@/Setting'));
const CalculatorPage = lazy(() => import('@/Calculator'));

export const appRouter = createBrowserRouter([
  {
    element: <UnAuthGuard />,
    children: [
      {
        element: (
          <Suspense>
            <LandingLayout />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.ROOT,
            element: (
              <Suspense>
                <LandingPage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.FT_OAUTH_REQUEST,
            element: (
              <Suspense>
                <FtOAuthRequestPage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.FT_OAUTH_REDIRECT,
            element: (
              <Suspense>
                <FtOAuthRedirectPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: (
          <Suspense>
            <MainLayout />
          </Suspense>
        ),
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
            path: ROUTES.PROFILE,
            element: (
              <Suspense fallback={<UserProfileSkeleton />}>
                <ProfileLayout />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: <Navigate replace to="general" />,
              },
              {
                path: ROUTES.PROFILE_GENERAL,
                element: (
                  <Suspense fallback={<ProfileGeneralPageSkeleton />}>
                    <ProfileGeneralPage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.PROFILE_EVAL,
                element: (
                  <Suspense fallback={<ProfileEvalPageSkeleton />}>
                    <ProfileEvalPage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.PROFILE_VERSUS,
                element: (
                  <Suspense fallback={<ProfileVersusPageSkeleton />}>
                    <ProfileVersusPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: ROUTES.LEADERBOARD,
            element: (
              <Suspense>
                <LeaderboardLayout />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: <Navigate replace to="level" />,
              },
              {
                path: ROUTES.LEADERBOARD_LEVEL,
                element: (
                  <Suspense fallback={<LeaderboardPageSkeleton />}>
                    <LeaderboardLevelPage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.LEADERBOARD_EXP_INCREMENT,
                element: (
                  <Suspense fallback={<LeaderboardPageSkeleton />}>
                    <LeaderboardExpIncrementPage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.LEADERBOARD_SCORE,
                element: (
                  <Suspense fallback={<LeaderboardPageSkeleton />}>
                    <LeaderboardScorePage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.LEADERBOARD_EVAL_COUNT,
                element: (
                  <Suspense fallback={<LeaderboardPageSkeleton />}>
                    <LeaderboardEvalCountPage />
                  </Suspense>
                ),
              },
              {
                path: ROUTES.LEADERBOARD_COMMENT,
                element: (
                  <Suspense fallback={<LeaderboardPageSkeleton />}>
                    <LeaderboardCommentPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: ROUTES.TEAM,
            element: (
              <Suspense>
                <TeamPage />
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
          {
            path: ROUTES.PROJECT_DETAIL,
            element: (
              <Suspense>
                <ProjectDetailPage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.CALCULATOR,
            element: (
              <Suspense>
                <CalculatorPage />
              </Suspense>
            ),
          },
          {
            path: ROUTES.SETTING,
            element: (
              <Suspense>
                <SettingPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <LandingLayout />,
    children: [
      {
        path: '*',
        element: (
          <Suspense>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
