import styled from '@emotion/styled';

export const MobileDashboard = ({ children }: React.PropsWithChildren) => {
  return <MobileDashboardLayout>{children}</MobileDashboardLayout>;
};

const MobileDashboardLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;
