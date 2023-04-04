import styled from '@emotion/styled';

export const DesktopDashboardRowContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <DesktopDashboardRowContainerLayout>
      {children}
    </DesktopDashboardRowContainerLayout>
  );
};

const DesktopDashboardRowContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
