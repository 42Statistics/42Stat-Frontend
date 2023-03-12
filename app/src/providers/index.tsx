import { PropsWithChildren } from 'react';
import ApolloProvider from './Apollo';
import GoogleOAuthProvider from './GoogleOAuth';
import HelmetProvider from './Helmet';
import ThemeProvider from './Theme';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ApolloProvider>
      <GoogleOAuthProvider>
        <HelmetProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HelmetProvider>
      </GoogleOAuthProvider>
    </ApolloProvider>
  );
};
