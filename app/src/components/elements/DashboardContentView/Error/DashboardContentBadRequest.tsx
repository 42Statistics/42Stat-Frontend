import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import {
  DashboardContent,
  DashboardContentProps,
} from '@components/templates/DashboardContent';

type DashboardContentBadRequestProps = {
  message?: string;
} & DashboardContentProps;

export const DashboardContentBadRequest = ({
  message = 'Something Went Wrong',
  ...propsExceptMessage
}: DashboardContentBadRequestProps) => {
  return (
    <DashboardContent {...propsExceptMessage}>
      <ApolloErrorView message={message} />
    </DashboardContent>
  );
};
