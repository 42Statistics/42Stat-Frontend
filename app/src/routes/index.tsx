import { isAuthenticatedAtom } from '@atoms/isAuthenticatedAtom';
import { DeferredComponent } from '@components/common';
import { AuthGuard } from '@guards/AuthGuard';
import { FtOAuthGuard } from '@guards/FtOAuthGuard';
import { NoFtOAuthGuard } from '@guards/NoFtOAuthGuard';
import { LandingLayout } from '@layouts/LandingLayout';
import { MainLayout } from '@layouts/MainLayout';
import NotFoundPage from '@pages/Error/404';
import LogoutPage from '@pages/LogoutPage';
import { HomePageSkeleton } from '@pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@pages/PageSkeletons/ProfilePageSkeleton';
import { useAtomValue } from 'jotai';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './ROUTES';

const LandingPage = lazy(() => import('@pages/LandingPage'));
const HomePage = lazy(() => import('@pages/HomePage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const FtOAuthPage = lazy(() => import('@pages/FtOAuthPage'));
const LeaderBoardPage = lazy(() => import('@pages/LeaderBoardPage'));
const EvalLogSearchPage = lazy(() => import('@pages/EvalLogSearchPage'));
const ProfilePage = lazy(() => import('@pages/ProfilePage'));
const ProjectDetailPage = lazy(() => import('@pages/ProjectDetailPage'));
const SettingPage = lazy(() => import('@pages/SettingPage'));

export const AppRoutes = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  return (
    <Routes>
      <Route element={<LandingLayout />}>
        {!isAuthenticated && (
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
              path={ROUTES.PROJECT_DETAIL}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <></>
                    </DeferredComponent>
                  }
                >
                  <ProjectDetailPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SETTING}
              element={
                <Suspense
                  fallback={
                    <DeferredComponent>
                      <></>
                    </DeferredComponent>
                  }
                >
                  <SettingPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
      </Route>
      <Route element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
