import { Center } from '@components/common';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const LandingLayout = () => {
  return (
    <Layout>
      <Center h="100vh">
        <Outlet />
      </Center>
    </Layout>
  );
};

const Layout = styled.main`
  background: url('/black-space.jpeg');
  background-size: cover;
`;
