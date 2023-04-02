import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './Apollo';
import GoogleOAuthProvider from './GoogleOAuth';
import HelmetProvider from './Helmet';
import ThemeProvider from './Theme';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
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
