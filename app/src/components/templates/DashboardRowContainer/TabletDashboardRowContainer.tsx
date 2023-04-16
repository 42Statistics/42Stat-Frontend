import styled from '@emotion/styled';

export const TabletDashboardRowContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <TabletDashboardRowContainerLayout>
      {children}
    </TabletDashboardRowContainerLayout>
  );
};

const TabletDashboardRowContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
