import { Center } from '@shared/ui-kit';
import { ApolloErrorView, ApolloErrorViewProps } from './ApolloErrorView';

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
