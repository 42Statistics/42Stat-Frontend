import {
  DashboardContent,
  DashboardContentProps,
} from '@shared/components/DashboardContent';
import { Loader } from '@shared/ui-kit';

type DashboardContentLoadingProps = Omit<
  DashboardContentProps,
  'children' | 'isApexChart'
>;

export const DashboardContentLoading = ({
  ...props
}: DashboardContentLoadingProps) => {
  return (
    <DashboardContent {...props}>
      <Loader />
    </DashboardContent>
  );
};
