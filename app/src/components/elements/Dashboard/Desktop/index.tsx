import styled from '@emotion/styled';

export const DesktopDashboard = ({ children }: React.PropsWithChildren) => {
  return <DesktopDashboardLayout>{children}</DesktopDashboardLayout>;
};

const DesktopDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
