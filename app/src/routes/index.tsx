import { DeferredComponent } from '@components/common';
import { AuthGuard } from '@guards/AuthGuard';
import { NoAuthGuard } from '@guards/NoAuthGuard';
import { LandingLayout } from '@layouts/LandingLayout';
import { MainLayout } from '@layouts/MainLayout';
import NotFoundPage from '@pages/Error/404';
import FtOAuthPage from '@pages/FtOAuthPage';
import LogoutPage from '@pages/LogoutPage';
import { HomePageSkeleton } from '@pages/PageSkeletons/HomePageSkeleton';
import { ProfilePageSkeleton } from '@pages/PageSkeletons/ProfilePageSkeleton';
import SettingPage from '@pages/SettingPage';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './ROUTES';

const LandingPage = lazy(() => import('@pages/LandingPage'));
const HomePage = lazy(() => import('@pages/HomePage'));
const LeaderBoardPage = lazy(() => import('@pages/LeaderBoardPage'));
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
        <Route path={ROUTES.FTOAUTH} element={<FtOAuthPage />} />
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
          <Route path={ROUTES.SETTING} element={<SettingPage />} />
        </Route>
        <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
      </Route>
      <Route element={<LandingLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
