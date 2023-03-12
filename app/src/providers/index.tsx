import { PropsWithChildren } from 'react';
import ApolloProvider from './Apollo';
import GoogleOAuthProvider from './GoogleOAuth';
import HelmetProvider from './Helmet';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProvider>
      <GoogleOAuthProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
};
