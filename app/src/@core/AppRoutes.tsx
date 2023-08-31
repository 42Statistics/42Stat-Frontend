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
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

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
const CalculationPage = lazy(() => import('@/Calculator'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<UnAuthGuard />}>
        <Route
          element={
            <Suspense>
              <LandingLayout />
            </Suspense>
          }
        >
          <Route
            path={ROUTES.ROOT}
            element={
              <Suspense>
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.FT_OAUTH_REQUEST}
            element={
              <Suspense>
                <FtOAuthRequestPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.FT_OAUTH_REDIRECT}
            element={
              <Suspense>
                <FtOAuthRedirectPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route element={<AuthGuard />}>
        <Route
          element={
            <Suspense>
              <MainLayout />
            </Suspense>
          }
        >
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
            path={ROUTES.PROFILE}
            element={
              <Suspense fallback={<UserProfileSkeleton />}>
                <ProfileLayout />
              </Suspense>
            }
          >
            <Route index element={<Navigate replace to="general" />} />
            <Route
              path={ROUTES.PROFILE_GENERAL}
              element={
                <Suspense fallback={<ProfileGeneralPageSkeleton />}>
                  <ProfileGeneralPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROFILE_EVAL}
              element={
                <Suspense fallback={<ProfileEvalPageSkeleton />}>
                  <ProfileEvalPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.PROFILE_VERSUS}
              element={
                <Suspense fallback={<ProfileVersusPageSkeleton />}>
                  <ProfileVersusPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={ROUTES.LEADERBOARD}
            element={
              <Suspense>
                <LeaderboardLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={<Navigate replace to={ROUTES.LEADERBOARD_LEVEL} />}
            />
            <Route
              path={ROUTES.LEADERBOARD_LEVEL}
              element={
                <Suspense fallback={<LeaderboardPageSkeleton />}>
                  <LeaderboardLevelPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_EXP_INCREMENT}
              element={
                <Suspense fallback={<LeaderboardPageSkeleton />}>
                  <LeaderboardExpIncrementPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_SCORE}
              element={
                <Suspense fallback={<LeaderboardPageSkeleton />}>
                  <LeaderboardScorePage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_EVAL_COUNT}
              element={
                <Suspense fallback={<LeaderboardPageSkeleton />}>
                  <LeaderboardEvalCountPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.LEADERBOARD_COMMENT}
              element={
                <Suspense fallback={<LeaderboardPageSkeleton />}>
                  <LeaderboardCommentPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={ROUTES.TEAM}
            element={
              <Suspense>
                <TeamPage />
              </Suspense>
            }
          />
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
					<Route
						path={ROUTES.CALCULATOR}
						element={
							<Suspense>
								<CalculationPage />
							</Suspense>
						}
					/>
          <Route
            path={ROUTES.SETTING}
            element={
              <Suspense>
                <SettingPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route element={<LandingLayout />}>
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
