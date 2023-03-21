import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export const MobileDashboard = ({ children }: PropsWithChildren) => {
  return <MobileDashboardLayout>{children}</MobileDashboardLayout>;
};

const MobileDashboardLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;
