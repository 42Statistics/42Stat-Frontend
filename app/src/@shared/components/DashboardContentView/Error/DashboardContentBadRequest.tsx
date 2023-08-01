import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import {
  DashboardContent,
  DashboardContentProps,
} from '@shared/components/DashboardContent';

type DashboardContentBadRequestProps = {
  message?: string;
} & Omit<DashboardContentProps, 'children' | 'type'>;

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
