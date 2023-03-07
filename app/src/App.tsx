import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404';
import { AboutPage } from './pages/About';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Settings';
import { TotalPage } from './pages/Total';

// TODO: / 일 때 로그인 여부에 따라 페이지 다르게 띄우기
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/total" element={<TotalPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

function App() {
  return <AppRoutes />;
}

export default App;
