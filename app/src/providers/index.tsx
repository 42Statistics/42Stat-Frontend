import { PropsWithChildren } from 'react';
import ApolloProvider from './Apollo';
import GoogleOAuthProvider from './GoogleOAuth';
import HelmetProvider from './Helmet';
import ThemeProvider from './Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary fallback={<p>Ooops, something went wrong :(</p>}>
      <ApolloProvider>
        <GoogleOAuthProvider>
          <HelmetProvider>
            <ThemeProvider>
              <Router>{children}</Router>
            </ThemeProvider>
          </HelmetProvider>
        </GoogleOAuthProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
};
