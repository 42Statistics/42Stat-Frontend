import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export const DesktopDashboard = ({ children }: PropsWithChildren) => {
  return <DesktopDashboardLayout>{children}</DesktopDashboardLayout>;
};

const DesktopDashboardLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
`;
