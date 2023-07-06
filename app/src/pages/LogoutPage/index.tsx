import { withHead } from '@components/hoc/withHead';
import { ROUTES } from '@routes/ROUTES';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LogoutPage = () => {
  useEffect(() => {
    localStorage.removeItem('ftoauth');
    localStorage.removeItem('googleauth');
  }, []);

  return <Navigate to={ROUTES.ROOT} />;
};

export default withHead(LogoutPage);
