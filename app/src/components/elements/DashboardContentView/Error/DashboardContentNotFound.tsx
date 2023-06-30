import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import {
  DashboardContent,
  DashboardContentProps,
} from '@components/templates/DashboardContent';

type DashboardContentNotFoundProps = DashboardContentProps;

export const DashboardContentNotFound = ({
  ...props
}: DashboardContentNotFoundProps) => {
  return (
    <DashboardContent {...props}>
      <ApolloErrorView message="Not Found" />
    </DashboardContent>
  );
};
