import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export const DesktopDashboard = ({ children }: PropsWithChildren) => {
  return <DesktopDashboardLayout>{children}</DesktopDashboardLayout>;
};

const DesktopDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;

  & > div {
    row-gap: 2rem;
    column-gap: 2rem;
  }
`;
