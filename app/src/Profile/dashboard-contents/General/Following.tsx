import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/routes';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

export const Following = () => {
  const { login } = useContext(UserProfileContext);

  const title = 'Following';

  return (
    <DashboardContent title={title}>
      <Layout>
        <Link to={ROUTES.PROFILE_FOLLOWING_OF(login)}>Following</Link>
      </Layout>
    </DashboardContent>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  height: 3rem;
`;
