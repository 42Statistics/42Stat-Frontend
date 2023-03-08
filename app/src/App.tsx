import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthGuard } from './guards/AuthGuard';
import { DashboardLayout } from './layouts/DashboardLayout';
import { NotFoundPage } from './pages/404';
import { AboutPage } from './pages/About';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Settings';
import { TotalPage } from './pages/Total';
import { useAuthStore } from './stores/useAuthStore';

const AppRoutes = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <Routes>
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route element={<AuthGuard />}>
            <Route element={<DashboardLayout />}>
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

function App() {
  return <AppRoutes />;
}

export default App;
