import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthGuard } from '@/components/guards/AuthGuard';
import { MainLayout } from '@/components/layouts/MainLayout';
import { NotFoundPage } from '@/pages/404';
import { AboutPage } from '@/pages/About';
import { ErrorPage } from '@/pages/Error';
import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { ProfilePage } from '@/pages/Profile';
import { SettingsPage } from '@/pages/Settings';
import { TotalPage } from '@/pages/Total';
import { useAtom } from 'jotai';
import { isAuthenticatedAtom } from '@/utils/atoms/isAuthenticatedAtom';

// TODO: Suspense, lazyImport 추가
export const AppRoutes = () => {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <Router>
      <Routes>
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route element={<AuthGuard />}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/total" element={<TotalPage />} />
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
