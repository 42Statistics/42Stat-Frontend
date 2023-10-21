import {
  DashboardContent,
  type DashboardContentProps,
} from '@shared/components/DashboardContent';
import { Loader } from '@shared/ui-kit';

type DashboardContentLoadingProps = Omit<
  DashboardContentProps,
  'children' | 'type'
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
