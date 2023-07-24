import {
  DashboardContent,
  DashboardContentProps,
} from '@components/templates/DashboardContent';
import { Loader } from '@shared/ui-kit';

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
