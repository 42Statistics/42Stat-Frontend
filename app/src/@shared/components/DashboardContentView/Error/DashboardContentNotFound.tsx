import { ApolloNotFoundView } from '@components/elements/ApolloNotFoundView';
import {
  DashboardContent,
  DashboardContentProps,
} from '@shared/components/DashboardContent';

type DashboardContentNotFoundProps = DashboardContentProps;

export const DashboardContentNotFound = ({
  ...props
}: DashboardContentNotFoundProps) => {
  return (
    <DashboardContent {...props}>
      <ApolloNotFoundView />
    </DashboardContent>
  );
};
