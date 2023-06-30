import { Loader } from '@components/common';
import {
  DashboardContent,
  DashboardContentProps,
} from '@components/templates/DashboardContent';

type DashboardContentLoadingProps = DashboardContentProps;

export const DashboardContentLoading = ({
  ...props
}: DashboardContentLoadingProps) => {
  return (
    <DashboardContent {...props}>
      <Loader />
    </DashboardContent>
  );
};
