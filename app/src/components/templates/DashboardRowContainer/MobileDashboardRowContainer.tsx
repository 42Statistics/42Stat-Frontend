import styled from '@emotion/styled';

export const MobileDashboardRowContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <MobileDashboardRowContainerLayout>
      {children}
    </MobileDashboardRowContainerLayout>
  );
};

const MobileDashboardRowContainerLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;
