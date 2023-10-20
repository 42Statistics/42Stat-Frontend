import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { Center } from '@shared/ui-kit';

export const FullPageApolloNotFoundView = () => {
  return (
    <Center h="70vh">
      <ApolloNotFoundView />
    </Center>
  );
};
