import {
  ApolloErrorView,
  type ApolloErrorViewProps,
} from '@shared/components/ApolloError/ApolloErrorView';
import { Center } from '@shared/ui-kit';

type FullPageApolloErrorViewProps = ApolloErrorViewProps;

export const FullPageApolloErrorView = (
  props: FullPageApolloErrorViewProps,
) => {
  return (
    <Center h="70vh">
      <ApolloErrorView {...props} />
    </Center>
  );
};
