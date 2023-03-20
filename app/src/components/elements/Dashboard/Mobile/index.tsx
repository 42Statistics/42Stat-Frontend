import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export const MobileDashboard = ({ children }: PropsWithChildren) => {
  return <MobileDashboardLayout>{children}</MobileDashboardLayout>;
};

const MobileDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  & > div {
    row-gap: 1.5rem;
    column-gap: 1.5rem;
  }
`;
