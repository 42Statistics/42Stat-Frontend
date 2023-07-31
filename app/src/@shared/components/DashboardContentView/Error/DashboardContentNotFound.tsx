import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import {
  DashboardContent,
  DashboardContentProps,
} from '@shared/components/DashboardContent';

type DashboardContentNotFoundProps = Omit<
  DashboardContentProps,
  'children' | 'isApexChart'
>;

export const DashboardContentNotFound = ({
  ...props
}: DashboardContentNotFoundProps) => {
  return (
    <DashboardContent {...props}>
      <ApolloNotFoundView />
    </DashboardContent>
  );
};
